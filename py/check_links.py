#!/usr/bin/env python3
"""Find links under ``content/`` and ``solutions/`` that no longer reach what
they were written to point at.

This exists because of a class of rot a reviewer cannot catch by reading a diff
*or* by clicking the link when it is added: the link was fine when written, and
the page it pointed at died years later. Issue #6625 is the motivating case --
``blog.anudeep2011.com`` lapsed, someone else re-registered it, and the module
went on sending readers to an Indonesian gambling site. Nothing in the repo
changed, so nothing in the repo could have flagged it.

Run this by hand, not from CI. That is not a style preference -- it was tried,
and the result is the single most important thing to know about this script:

    From a GitHub Actions runner, 7 of its 8 findings were false. TopCoder
    served 404 to the runner for six pages that are healthy from a normal
    connection, and cs.baylor.edu "did not resolve" there while resolving
    fine everywhere else. Worse, it *missed* blog.anudeep2011.com, the
    hijacked domain in #6625 that it exists to catch and that it flags
    reliably from a residential IP.

Datacenter IPs get served a different internet: bot defenses answer them with
404s, DNS behaves differently, and cloaked spam hides from them. Every
classification below assumes the network is answering honestly, and from a
runner it is not. Retrying does not help, because the next attempt comes from
the same place. So this is a tool a maintainer runs (about five minutes), and
its output is trustworthy in proportion to how ordinary the connection is.

Run from a normal connection it reports only what is unambiguous, and stays
quiet otherwise:

- ``DEAD``     -- the hostname does not resolve. The domain lapsed or its DNS
                  was pulled; either way the link cannot work for anyone.
- ``GONE``     -- 404 or 410. The host is healthy and says the page is not there.
- ``HIJACKED`` -- the page is serving SEO spam. This is the #6625 shape and the
                  one worth acting on quickly, because a dead link is merely
                  useless while a hijacked one is actively harmful.

Everything else is deliberately *not* a finding. 403 and 429 mean the site
dislikes scripts, not that the page is gone -- DMOJ, SPOJ, Stack Overflow,
LeetCode and Quora all refuse this one while serving humans fine, which was 8%
of the corpus. 5xx and timeouts are transient by definition. Reporting any of it
would bury the real findings, which is the same as having none.


Two passes, because wall-clock is bounded by the busiest single host
-------------------------------------------------------------------

Requests to one host are serialised with a delay between them, so checking every
URL means the run cannot finish faster than its most-linked host: Codeforces
alone is 719 links, or 20 minutes, and no amount of concurrency changes that.

So bulk judge hosts (``BULK_HOSTS``) get *one* probe for domain health instead of
one request per problem link. That is not merely a speed trade -- for these hosts
it costs almost nothing real:

- ``DEAD`` and ``HIJACKED`` are properties of a *domain*, so one probe settles
  them for every link on it. That is the entire #6625 failure class.
- Their problem URLs are generated from problem ids and are already checked
  structurally, without the network, by ``check_problems_json.py``.
- Several of them (DMOJ most of all) refuse this script outright, so per-URL
  checking there yields nothing but 403s in the first place.

What it gives up is a judge quietly retiring one problem while the rest of the
site stays healthy. ``check_problems_json.py`` will not catch that either. It is
the known cost of finishing in five minutes instead of forty; ``--all`` opts back
in to the slow, exhaustive sweep.


A note on URL extraction, because getting it wrong manufactures findings
-----------------------------------------------------------------------

Markdown links may legitimately contain parentheses --
``[Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>)`` -- and a
naive ``https?://\\S+`` regex truncates at the first ``)``, turning a dozen good
Wikipedia links into fake 404s. So ``]( ... )`` is scanned with a paren counter.

The subtler trap is the archive URL. A fixed link looks like
``https://web.archive.org/web/<timestamp>/<original>``, and a bare-URL regex will
happily match the ``<original>`` embedded in it. That original is dead
essentially by definition -- being dead is why it was archived -- so extracting
it reports every correctly-fixed link as broken. An earlier revision of this
script did exactly that: 15 findings on a clean tree, all of them archive URLs
and none of them real.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import json
import os
import re
import socket
import ssl
import sys
import threading
import time
import urllib.error
import urllib.request
from collections import defaultdict
from urllib.parse import urlparse

SEARCH_ROOTS = ("content", "solutions")
SUFFIXES = (".mdx", ".md", ".json")

# A browser UA. Not evasion -- plenty of these hosts serve a bare 403 to
# anything that looks scripted, and a 403 tells us nothing either way.
USER_AGENT = (
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
	"(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)

# Hosts to skip. web.archive.org is the *fix* for a dead link, so re-checking
# archived URLs weekly would hammer the one service keeping them alive; the
# others are either unroutable or intentionally fake.
SKIP_HOSTS = ("web.archive.org", "localhost", "127.0.0.1", "example.com")

# Judges and problem hosts that get a single domain probe rather than one request
# per link. See "Two passes" in the docstring for why this costs less than it
# looks like.
BULK_HOSTS = frozenset(
	{
		"codeforces.com",
		"www.codeforces.com",
		"usaco.org",
		"www.usaco.org",
		"train.usaco.org",
		"cses.fi",
		"oj.uz",
		"atcoder.jp",
		"dmoj.ca",
		"open.kattis.com",
		"judge.yosupo.jp",
		"qoj.ac",
		"www.spoj.com",
		"szkopul.edu.pl",
		"codechef.com",
		"www.codechef.com",
		"csacademy.com",
		"onlinejudge.org",
		"poj.org",
		"toph.co",
		"infoarena.ro",
		"www.infoarena.ro",
		"judge.beecrowd.com",
	}
)

# Terms specific enough that a competitive-programming page cannot plausibly
# contain them. Weak ones are deliberately absent: "casino" appears in
# brilliant.org's expected-value article and "judi" inside longer words, both
# of which this flagged as spam before the list was tightened.
SPAM_TERMS = re.compile(
	r"\b(togel|slot\s?gacor|situs\s?slot|bandar\s?togel|sbobet|maxwin"
	r"|rtp\s?live|link\s?alternatif|deposit\s?pulsa|judi\s?online"
	r"|agen\s?judi|pragmatic\s?play)\b",
	re.IGNORECASE,
)

PARKED = re.compile(
	r"(buy this domain|domain (is )?(for sale|parking)|this domain has expired"
	r"|parkingcrew|sedoparking|hugedomains)",
	re.IGNORECASE,
)


def extract_urls(text: str):
	"""Yield every http(s) URL in ``text``.

	Handles the four shapes that appear in this repo: quoted ``url=``/``href=``
	attributes in MDX, ``"url":`` in the problem JSON, ``[label](target)``
	markdown, ``<autolinks>``, and bare URLs in prose or code comments.
	"""
	for match in re.finditer(r'(?:url|href)\s*=\s*"(https?://[^"]+)"', text):
		yield match.group(1)
	for match in re.finditer(r'"url"\s*:\s*"(https?://[^"]+)"', text):
		yield match.group(1)
	for match in re.finditer(r"<(https?://[^>\s]+)>", text):
		yield match.group(1)

	# Balanced-paren scan; see the module docstring for why a regex will not do.
	for match in re.finditer(r"\]\(<?(https?://)", text):
		start, i, depth = match.start(1), match.end(1), 0
		while i < len(text) and not text[i].isspace() and text[i] not in '<>"':
			if text[i] == "(":
				depth += 1
			elif text[i] == ")":
				if depth == 0:
					break
				depth -= 1
			i += 1
		yield text[start:i]

	# The lookbehind excludes "/" so that the original URL embedded in a
	# https://web.archive.org/web/<timestamp>/<original> link is not pulled out
	# and checked on its own. That original is dead essentially by definition --
	# being dead is why it was archived -- so extracting it turns every correctly
	# archived link into a false report.
	for match in re.finditer(r'(?<![\("<\w/])(https?://[^\s"\'<>)\]}\\|]+)', text):
		yield match.group(1)


def collect(roots) -> dict:
	"""Map each URL to the ``path:line`` occurrences that reference it."""
	found: dict = defaultdict(list)
	for root in roots:
		for dirpath, _dirnames, filenames in os.walk(root):
			for filename in filenames:
				if not filename.endswith(SUFFIXES):
					continue
				path = os.path.join(dirpath, filename)
				with open(path, encoding="utf-8") as handle:
					lines = handle.read().split("\n")
				for number, line in enumerate(lines, 1):
					# A [label](<url>) matches both the autolink and the markdown
					# pattern, so dedupe per line or the location is listed twice.
					for url in dict.fromkeys(extract_urls(line)):
						url = url.strip().rstrip(".,;:`'\"")
						host = urlparse(url).netloc.lower()
						if not host or any(s in host for s in SKIP_HOSTS):
							continue
						found[url].append(f"{path}:{number}")
	return found


def plan(urls: dict) -> tuple[list, dict]:
	"""Decide what to request, and what locations each request speaks for.

	A bulk host's single probe speaks for every location on that host, so a dead
	domain still reports all the places that link to it.
	"""
	by_host: dict = defaultdict(list)
	for url in urls:
		by_host[urlparse(url).netloc.lower()].append(url)

	targets, speaks_for = [], {}
	for host, host_urls in by_host.items():
		if host in BULK_HOSTS:
			# Shortest URL is likeliest to be a landing page rather than a deep
			# link that could 404 on its own while the domain is healthy.
			probe = min(host_urls, key=len)
			targets.append(probe)
			speaks_for[probe] = sorted({loc for u in host_urls for loc in urls[u]})
		else:
			for url in host_urls:
				targets.append(url)
				speaks_for[url] = urls[url]
	return targets, speaks_for


class Checker:
	"""Checks URLs, at most one request per host at a time."""

	def __init__(self, delay: float = 0.7, timeout: int = 25):
		self.delay = delay
		self.timeout = timeout
		self.context = ssl.create_default_context()
		# Some of these hosts have long-broken certificate chains. An expired
		# cert is not what this check is looking for, and refusing to look at
		# the body over it would hide a genuine hijack.
		self.context.check_hostname = False
		self.context.verify_mode = ssl.CERT_NONE
		self._next_slot: dict = defaultdict(float)
		self._lock = threading.Lock()

	def _wait_turn(self, host: str) -> None:
		with self._lock:
			wait = max(0.0, self._next_slot[host] - time.monotonic())
			self._next_slot[host] = time.monotonic() + wait + self.delay
		if wait:
			time.sleep(wait)

	def check(self, url: str) -> dict | None:
		"""Return a finding dict, or ``None`` if the link looks fine or unknown."""
		host = urlparse(url).netloc.split(":")[0]
		self._wait_turn(host)

		try:
			socket.setdefaulttimeout(self.timeout)
			socket.gethostbyname(host)
		except OSError:
			return {"kind": "DEAD", "url": url, "detail": f"{host} does not resolve"}

		request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
		try:
			with urllib.request.urlopen(
				request, timeout=self.timeout, context=self.context
			) as response:
				final = response.geturl()
				content_type = response.headers.get("Content-Type", "")
				body = b""
				if "html" in content_type or content_type.startswith("text/"):
					body = response.read(300_000)
		except urllib.error.HTTPError as error:
			if error.code in (404, 410):
				return {"kind": "GONE", "url": url, "detail": f"HTTP {error.code}"}
			return None  # 403/429/5xx: tells us nothing. See module docstring.
		except Exception:
			return None  # Timeout, reset, bad TLS handshake. Transient.

		text = body.decode("utf-8", "ignore")
		spam = sorted({m.group(0).lower() for m in SPAM_TERMS.finditer(text)})
		if spam:
			return {
				"kind": "HIJACKED",
				"url": url,
				"detail": f'serving spam ({", ".join(spam[:4])}) at {final}',
			}
		if PARKED.search(text):
			return {
				"kind": "HIJACKED",
				"url": url,
				"detail": f"parked/for-sale page at {final}",
			}
		return None


def main() -> int:
	parser = argparse.ArgumentParser(description=__doc__)
	parser.add_argument(
		"paths",
		nargs="*",
		default=list(SEARCH_ROOTS),
		help="files or directories to scan (default: content/ and solutions/)",
	)
	parser.add_argument("--workers", type=int, default=16)
	parser.add_argument(
		"--delay",
		type=float,
		default=0.7,
		help="minimum seconds between requests to the same host",
	)
	parser.add_argument(
		"--all",
		action="store_true",
		help="check every URL on bulk judge hosts too, rather than one probe"
		" each (slow: bounded by the most-linked host, ~40 minutes)",
	)
	parser.add_argument(
		"--json",
		dest="json_out",
		metavar="FILE",
		help="also write findings here as JSON",
	)
	args = parser.parse_args()

	urls = collect(args.paths)
	if args.all:
		targets, speaks_for = sorted(urls), urls
	else:
		targets, speaks_for = plan(urls)
	print(
		f"Checking {len(targets)} requests covering {len(urls)} links...",
		file=sys.stderr,
		flush=True,
	)

	checker = Checker(delay=args.delay)
	findings = []
	with concurrent.futures.ThreadPoolExecutor(args.workers) as pool:
		for result in pool.map(checker.check, sorted(targets)):
			if result:
				result["locations"] = speaks_for[result["url"]]
				findings.append(result)

	# Hijacks first: a dead link wastes a reader's time, a hijacked one sends
	# them somewhere hostile.
	order = {"HIJACKED": 0, "DEAD": 1, "GONE": 2}
	findings.sort(key=lambda f: (order[f["kind"]], f["url"]))

	if args.json_out:
		with open(args.json_out, "w", encoding="utf-8") as handle:
			json.dump(findings, handle, indent=1)

	if not findings:
		print(f"All {len(targets)} checked links OK (or unverifiable).")
		return 0

	for finding in findings:
		print(f'\n{finding["kind"]}: {finding["url"]}')
		print(f'  {finding["detail"]}')
		for location in finding["locations"]:
			print(f"  at {location}")

	counts = ", ".join(
		f'{sum(1 for f in findings if f["kind"] == k)} {k}'
		for k in ("HIJACKED", "DEAD", "GONE")
		if any(f["kind"] == k for f in findings)
	)
	print(f"\n{len(findings)} broken links ({counts}) out of {len(targets)} checked.")
	return 1


if __name__ == "__main__":
	raise SystemExit(main())

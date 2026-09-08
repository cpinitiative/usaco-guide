#!/usr/bin/env python3
"""Quality checks for the internal solutions under ``solutions/``.

Run by pre-commit on changed files, and by CI across the whole repo.
Pass paths to check, or ``--all`` to check every solution.

The USACO checks compare against the two files that ``DivisionList/scripts/update.py``
scrapes from usaco.org, so they catch a wrong or stale link rather than just a
missing one:

  * ``id_to_sol.json``   cpid -> the ``sol_*.html`` analysis page
  * ``div_to_probs.json`` division -> (cpid, contest, name)

A solution with no official editorial (some old Codeforces rounds, the AtCoder
Educational DP Contest) opts out with ``noOfficialEditorial: true`` in its
frontmatter. Use it only when no official editorial exists -- not to defer
adding a link that does. A link to a good third-party editorial counts too, so
long as it is labeled "Unofficial ...".

``solutions_missing_complexity.txt`` is the backlog of solutions that predate the
``**Time Complexity:**`` rule. It only shrinks: a solution not on it must state
its complexity, and one on it that now does must be removed from the list.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIVISION_LIST = ROOT / "src/components/markdown/ProblemsList/DivisionList"

# solutions/orphaned holds solutions no module links to; it is not held to these rules.
SKIP_DIRS = {"orphaned"}

REQUIRED_FRONTMATTER = ("id", "source", "title", "author")

# Actions renders an ::error with a file and line on that line of the diff. Only
# findings that quote text which exists get one -- for "must link the official
# editorial" there is, by definition, no line to point at, and guessing where the
# link ought to go would put the message somewhere the reader did not expect.
ANNOTATE = bool(os.environ.get("GITHUB_ACTIONS"))

# Per-source wording for the link to the official editorial. USACO says "Official
# Analysis"; Codeforces and AtCoder both call it an editorial, so they say
# "Official Editorial".
CANONICAL_LABEL = {
	"usaco": "Official Analysis",
	"cf": "Official Editorial",
	"ac": "Official Editorial",
}

# Sources where every solution must link the official editorial. Codeforces gym
# contests (contest id >= 100000) are exempt -- they usually have no public one.
REQUIRE_EDITORIAL = ("cf", "ac")
CF_GYM_MIN_CONTEST_ID = 100000

COMPLEXITY = re.compile(r"^\*\*Time Complexity:\*\*", re.M)
MISSING_COMPLEXITY_LIST = (
	Path(__file__).resolve().parent / "solutions_missing_complexity.txt"
)

MD_LINK = re.compile(r"\[([^\]\n]+)\]\(\s*(\S+?)\s*\)")
# Only standalone "Official/External <noun>" labels are vocabulary-checked, so
# prose like "The [official editorial](...) covers ..." is left alone.
OFFICIAL_LABEL = re.compile(
	r"^(Official|External)\s+(Analysis|Editorial|Solution)\b\s*(.*)$"
)
# What counts as linking an editorial at all -- an unofficial one is still a link.
ANY_EDITORIAL_LABEL = re.compile(r"^(Official|Unofficial|External)\b")
USACO_SOL_URL = re.compile(
	r"^https?://(?:www\.)?usaco\.org/current/data/(sol_[A-Za-z0-9_]+\.html)$"
)


def load_usaco_data() -> tuple[dict, dict]:
	id_to_sol = json.loads((DIVISION_LIST / "id_to_sol.json").read_text())
	div_to_probs = json.loads((DIVISION_LIST / "div_to_probs.json").read_text())
	cpid_to_contest = {}
	for division, problems in div_to_probs.items():
		for cpid, contest, _name in problems:
			cpid_to_contest[cpid] = (division, contest)
	return id_to_sol, cpid_to_contest


def parse_frontmatter(text: str) -> dict | None:
	"""Minimal top-level ``key: value`` parser; solution frontmatter is flat."""
	match = re.match(r"^---\n(.*?)\n---\n", text, re.S)
	if match is None:
		return None
	fields = {}
	for key, value in re.findall(r"^(\w+):[ \t]*(.*?)[ \t]*$", match.group(1), re.M):
		if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
			value = value[1:-1]
		fields[key] = value
	return fields


def line_of(text: str, pattern: str) -> int | None:
	"""1-indexed line where `pattern` first matches, for an annotation."""
	match = re.search(pattern, text, re.M)
	return text.count("\n", 0, match.start()) + 1 if match else None


def annotate(path: str, line: int, message: str) -> None:
	# A newline would end the workflow command, so keep the message on one line.
	print(f"::error file={path},line={line},title=Solution check::{message}")


def source_prefix(stem: str) -> str:
	return stem.split("-")[0] if "-" in stem else stem


def cf_is_gym(stem: str) -> bool:
	match = re.match(r"cf-(\d+)", stem)
	return match is not None and int(match.group(1)) >= CF_GYM_MIN_CONTEST_ID


def check_file(
	path: Path, id_to_sol: dict, cpid_to_contest: dict, complexity_backlog: set[str]
) -> list[tuple[str, int | None]]:
	errors: list[tuple[str, int | None]] = []
	text = path.read_text()
	stem = path.stem
	prefix = source_prefix(stem)

	fields = parse_frontmatter(text)
	if fields is None:
		return [("missing frontmatter", None)]
	for key in REQUIRED_FRONTMATTER:
		if not fields.get(key):
			errors.append((f"frontmatter is missing `{key}`", None))
	if fields.get("id") and fields["id"] != stem:
		errors.append(
			(
				f"frontmatter `id: {fields['id']}` does not match the filename `{stem}`",
				line_of(text, r"^id:"),
			)
		)

	links = MD_LINK.findall(text)

	# Any standalone official-editorial label must use this source's wording.
	canonical = CANONICAL_LABEL.get(prefix)
	if canonical:
		for label, _url in links:
			match = OFFICIAL_LABEL.match(label)
			if match and f"{match.group(1)} {match.group(2)}" != canonical:
				errors.append(
					(
						f'link labeled "{label}" should say "{canonical}{(" " + match.group(3)) if match.group(3) else ""}"',
						line_of(text, re.escape(f"[{label}]")),
					)
				)

	exempt = fields.get("noOfficialEditorial", "").lower() == "true"

	if prefix == "usaco":
		cpid = stem[len("usaco-") :]
		expected_sol = id_to_sol.get(cpid)
		if expected_sol is None:
			errors.append(
				(f"cpid {cpid} is not in id_to_sol.json; is the filename right?", None)
			)
		elif not any(
			(m := USACO_SOL_URL.match(url)) and m.group(1) == expected_sol
			for _label, url in links
		):
			errors.append(
				(
					f"must link the official analysis https://usaco.org/current/data/{expected_sol}",
					None,
				)
			)
		if (
			cpid in cpid_to_contest
		):  # only contests DivisionList knows about (Dec 2015 onward)
			division, contest = cpid_to_contest[cpid]
			expected_source = f"USACO {division} {contest}"
			if fields.get("source") and fields["source"] != expected_source:
				errors.append(
					(
						f"frontmatter `source: {fields['source']}` should be `{expected_source}`",
						line_of(text, r"^source:"),
					)
				)
	elif prefix in REQUIRE_EDITORIAL and not exempt:
		if prefix == "cf" and cf_is_gym(stem):
			pass  # gym contests rarely have a public editorial
		elif not any(
			ANY_EDITORIAL_LABEL.match(label) and url.startswith("http")
			for label, url in links
		):
			errors.append(
				(
					f'must link the official editorial as "[{canonical} (C++)](...)", or set `noOfficialEditorial: true` if none exists',
					None,
				)
			)

	rel = path.relative_to(ROOT).as_posix() if path.is_absolute() else path.as_posix()
	has_complexity = COMPLEXITY.search(text) is not None
	if rel in complexity_backlog:
		if has_complexity:
			errors.append(
				(
					f"now states its complexity; remove it from {MISSING_COMPLEXITY_LIST.name}",
					line_of(text, re.escape("**Time Complexity:**")),
				)
			)
	elif not has_complexity:
		errors.append(
			(
				"must state its complexity as `**Time Complexity:** $\\mathcal{O}(...)$`",
				None,
			)
		)

	return errors


def main() -> int:
	parser = argparse.ArgumentParser(description=__doc__)
	parser.add_argument("paths", nargs="*", type=Path)
	parser.add_argument("--all", action="store_true", help="check every solution")
	args = parser.parse_args()

	if args.all or not args.paths:
		paths = sorted((ROOT / "solutions").glob("*/*.mdx"))
	else:
		paths = [p for p in args.paths if p.suffix == ".mdx" and "solutions" in p.parts]

	id_to_sol, cpid_to_contest = load_usaco_data()
	complexity_backlog = {
		line.strip()
		for line in MISSING_COMPLEXITY_LIST.read_text().splitlines()
		if line.strip() and not line.startswith("#")
	}
	failed = 0
	if args.all or not args.paths:  # only a full run can tell that an entry is stale
		for stale in sorted(
			entry for entry in complexity_backlog if not (ROOT / entry).exists()
		):
			print(
				f"{MISSING_COMPLEXITY_LIST.name}: `{stale}` no longer exists; remove it"
			)
			failed += 1

	for path in paths:
		if path.parent.name in SKIP_DIRS:
			continue
		errors = check_file(path, id_to_sol, cpid_to_contest, complexity_backlog)
		if errors:
			failed += 1
			rel = path.relative_to(ROOT) if path.is_absolute() else path
			for message, line in errors:
				print(f"{rel}: {message}")
				if ANNOTATE and line is not None:
					annotate(str(rel), line, message)
	if failed:
		print(f"\n{failed} solution(s) need fixing.", file=sys.stderr)
	return 1 if failed else 0


if __name__ == "__main__":
	raise SystemExit(main())

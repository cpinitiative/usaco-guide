#!/usr/bin/env python3
"""Quality checks for the problem lists under ``content/``.

Run by pre-commit and by CI. Three rules, all of them things a reviewer cannot
reasonably verify by reading a diff:

1. A USACO problem's ``name`` matches usaco.org. The authoritative names are
   already vendored in ``div_to_probs.json``, which ``DivisionList/scripts/update.py``
   scrapes, so this needs no network. usaco.org appends the division to a name
   that would otherwise be ambiguous across divisions ("High Card Low Card
   (Gold)"); ``source`` already carries that, so the suffix is stripped before
   comparing rather than written into every entry.

2. A problem's ``url`` points at the problem its ``uniqueId`` names. Only URL
   shapes that encode the id are checked -- a gym, edu-course or group link
   cannot be derived from the id, so those are left alone rather than guessed at.

   When this rule fires, the ``uniqueId`` is usually the wrong side: every one
   of the four it caught on introduction had a correct ``name`` and ``url`` and
   a mistyped id. Repointing the url at the id would send the reader to a
   different problem, so check the name against the judge before "fixing" either.

   Those four are listed in ``problems_mismatched_id.txt`` rather than corrected,
   because ``uniqueId`` is what Firebase keys user progress and
   ``userProblemSolutions`` on: renaming one orphans progress people genuinely
   earned. That list only shrinks -- a new mismatch fails, and an entry on it
   that no longer mismatches must be removed.

3. Copies of one problem in several modules agree on the fields that cannot
   legitimately differ. Only three qualify. ``difficulty`` is documented as
   "relative to the module it is in" and ``isStarred`` as "starred in the module
   problem table"; ``tags`` are unioned across modules when the site builds its
   filters. ``solutionMetadata.kind`` is module-scoped too -- a focus problem is
   ``in-module`` where it is taught and a plain link elsewhere -- but
   ``hasHints`` describes the solution *file*, so it cannot depend on the route
   the reader took to reach it.

Rule 3 is global by nature, so this checks every list regardless of the paths
it is given; the whole sweep is a few hundred milliseconds.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
# Ids that disagree with their url and cannot be corrected until the Firebase
# progress and userProblemSolutions keyed on them move too. Only shrinks.
MISMATCHED_ID_LIST = Path(__file__).resolve().parent / "problems_mismatched_id.txt"
DIV_TO_PROBS = (
	ROOT / "src/components/markdown/ProblemsList/DivisionList/div_to_probs.json"
)

# Actions renders an ::error on the line it names. Every finding here quotes an
# entry that exists, so all of them can be anchored to their "uniqueId" line.
ANNOTATE = bool(os.environ.get("GITHUB_ACTIONS"))

# usaco.org disambiguates a name reused across divisions by appending the
# division. `source` already records that, so it is not part of the name.
DIVISION_SUFFIX = re.compile(r"\s*\((Bronze|Silver|Gold|Platinum)\)$")

USACO_ID = re.compile(r"usaco-(\d+)$")
CF_ID = re.compile(r"cf-(\d+)([A-Z]\d?)$")
# The two URL shapes that encode a Codeforces contest and index. Gym, edu and
# group links do not, and are skipped rather than guessed at.
CF_URL = re.compile(
	r"^https?://(?:www\.)?codeforces\.com/"
	r"(?:contest/(\d+)/problem/([A-Z]\d?)|problemset/problem/(\d+)/([A-Z]\d?))"
	r"/?$"
)

# Fields that mean the same thing wherever a problem is listed. See rule 3.
SHARED_FIELDS = ("name", "url")


def internal_solutions() -> set[str]:
	"""uniqueIds with a solution file. `orphaned/` counts: no module links to
	those, but the loader still indexes them, so `internal` resolves."""
	return {path.stem for path in (ROOT / "solutions").rglob("*.mdx")}


def problem_files() -> list[Path]:
	return sorted((ROOT / "content").rglob("*.problems.json")) + [
		ROOT / "content/extraProblems.json"
	]


def load_official_names() -> dict[str, str]:
	"""cpid -> the name on usaco.org, with any division suffix stripped."""
	div_to_probs = json.loads(DIV_TO_PROBS.read_text())
	return {
		cpid: DIVISION_SUFFIX.sub("", name)
		for problems in div_to_probs.values()
		for cpid, _contest, name in problems
	}


def line_of(text: str, unique_id: str) -> int | None:
	"""1-indexed line of an entry's "uniqueId", for an annotation."""
	match = re.search(rf'"uniqueId":\s*"{re.escape(unique_id)}"', text)
	return text.count("\n", 0, match.start()) + 1 if match else None


def annotate(path: str, line: int | None, message: str) -> None:
	where = f"file={path}" + (f",line={line}" if line is not None else "")
	# A newline would end the workflow command, so keep the message on one line.
	print(f"::error {where},title=Problem data check::{message}")


def check_name(problem: dict, official: dict[str, str]) -> str | None:
	match = USACO_ID.fullmatch(problem["uniqueId"])
	if match is None or match.group(1) not in official:
		return None
	want = official[match.group(1)]
	if problem["name"] == want:
		return None
	return f"name is {problem['name']!r}; usaco.org calls it {want!r}"


def check_url(problem: dict) -> str | None:
	unique_id, url = problem["uniqueId"], problem.get("url", "")

	usaco = USACO_ID.fullmatch(unique_id)
	if usaco is not None:
		cpid = usaco.group(1)
		if f"cpid={cpid}" not in url:
			return f"url does not point at cpid={cpid}: {url}"
		return None

	codeforces = CF_ID.fullmatch(unique_id)
	if codeforces is not None:
		parsed = CF_URL.match(url)
		if parsed is None:
			return None  # gym/edu/group link; the id cannot describe it
		contest = parsed.group(1) or parsed.group(3)
		index = parsed.group(2) or parsed.group(4)
		if (contest, index) != codeforces.groups():
			return (
				f"url points at contest {contest} problem {index}, but the id says "
				f"{codeforces.group(1)}{codeforces.group(2)}. Check the name against "
				f"the judge -- the id is usually the wrong side"
			)
	return None


def check_internal(problem: dict, solutions: set[str]) -> str | None:
	"""An entry promising an internal solution must have one to show."""
	metadata = problem.get("solutionMetadata") or {}
	if metadata.get("kind") != "internal":
		return None
	if problem["uniqueId"] in solutions:
		return None
	return (
		'solutionMetadata says kind "internal", but there is no '
		f'solutions/*/{problem["uniqueId"]}.mdx'
	)


def hints_flag(problem: dict) -> bool | None:
	"""Whether an internally-solved problem declares hints. None if not internal."""
	metadata = problem.get("solutionMetadata") or {}
	if metadata.get("kind") != "internal":
		return None
	return bool(metadata.get("hasHints"))


def check_shared(
	copies: list[tuple[Path, dict]],
) -> list[str]:
	"""Fields that cannot legitimately differ between copies of one problem."""
	errors = []
	for field in SHARED_FIELDS:
		values = {
			json.dumps(problem.get(field), sort_keys=True) for _, problem in copies
		}
		if len(values) > 1:
			listed = ", ".join(
				f"{path.relative_to(ROOT)} has {problem.get(field)!r}"
				for path, problem in copies
			)
			errors.append(f"copies disagree on {field}: {listed}")

	flags = {hints_flag(problem) for _, problem in copies} - {None}
	if len(flags) > 1:
		listed = ", ".join(
			f"{path.relative_to(ROOT)} says {hints_flag(problem)}"
			for path, problem in copies
			if hints_flag(problem) is not None
		)
		errors.append(
			"copies disagree on solutionMetadata.hasHints, which describes the "
			f"solution file and cannot vary by module: {listed}"
		)
	return errors


def main() -> int:
	parser = argparse.ArgumentParser(description=__doc__)
	# Accepted for pre-commit, which passes the files it staged. Rule 3 compares
	# a problem against its copies elsewhere, so the sweep is always global.
	parser.add_argument("paths", nargs="*", type=Path)
	parser.add_argument("--all", action="store_true", help="accepted; always implied")
	parser.parse_args()

	official = load_official_names()
	solutions = internal_solutions()
	id_backlog = {
		line.strip()
		for line in MISMATCHED_ID_LIST.read_text().splitlines()
		if line.strip() and not line.startswith("#")
	}
	texts: dict[Path, str] = {}
	copies: dict[str, list[tuple[Path, dict]]] = defaultdict(list)
	findings: list[tuple[Path, str, str]] = []  # path, uniqueId, message
	mismatched_ids: set[str] = set()

	for path in problem_files():
		texts[path] = path.read_text()
		for entries in json.loads(texts[path]).values():
			if not isinstance(entries, list):
				continue
			for problem in entries:
				unique_id = problem["uniqueId"]
				copies[unique_id].append((path, problem))

				for message in (
					check_name(problem, official),
					check_internal(problem, solutions),
				):
					if message:
						findings.append((path, unique_id, message))

				url_error = check_url(problem)
				if url_error:
					mismatched_ids.add(unique_id)
					# The backlog holds ids that are known-wrong but cannot be
					# renamed until the Firebase progress keyed on them moves.
					if unique_id not in id_backlog:
						findings.append((path, unique_id, url_error))

	stale_backlog = sorted(id_backlog - mismatched_ids)
	for stale in stale_backlog:
		print(
			f"{MISMATCHED_ID_LIST.name}: `{stale}` no longer disagrees with its url; "
			"remove it"
		)

	for unique_id, listed in sorted(copies.items()):
		if len(listed) < 2:
			continue
		for message in check_shared(listed):
			findings.append((listed[0][0], unique_id, message))

	for path, unique_id, message in findings:
		rel = path.relative_to(ROOT)
		print(f"{rel}: {unique_id}: {message}")
		if ANNOTATE:
			annotate(
				str(rel), line_of(texts[path], unique_id), f"{unique_id}: {message}"
			)

	if findings:
		print(f"\n{len(findings)} problem entr(ies) need fixing.", file=sys.stderr)
	return 1 if findings or stale_backlog else 0


if __name__ == "__main__":
	raise SystemExit(main())

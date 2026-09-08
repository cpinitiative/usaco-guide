#!/usr/bin/env python3
"""Flags problem tags that do not already exist on the base branch.

A new tag is usually a typo -- "Bitmasking" for "Bitmasks", "Persistent Segtree"
for "Persistent SegTree" -- and nothing else catches one. Tags feed the /problems
filters and the autocomplete in ProblemTagsInput, which is built from whichever
tags happen to exist, so a misspelling immediately suggests itself to the next
contributor while the group it splits in two stays invisible from either side.

Genuinely new tags are fine and expected; this only asks that someone look. In
CI, label the pull request to say the tag is deliberate and the check passes.
"""

from __future__ import annotations

import argparse
import difflib
import json
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DISMISS_LABEL = "new-tag"
# On Actions an ::error carrying a file and line is rendered on that line of the
# diff. That is what lets this stay a plain pull_request workflow: the reader
# gets the message where the tag is, and nothing needed permission to write a
# comment to put it there.
ANNOTATE = bool(os.environ.get("GITHUB_ACTIONS"))


def tags_in(node: object, found: dict[str, str], where: str) -> None:
	"""Collect tag -> the uniqueId carrying it, over a problems file's tree."""
	if isinstance(node, dict):
		here = node.get("uniqueId", where)
		for tag in node.get("tags") or []:
			found.setdefault(tag, here)
		for value in node.values():
			tags_in(value, found, here)
	elif isinstance(node, list):
		for value in node:
			tags_in(value, found, where)


def line_of(text: str, tag: str) -> int | None:
	"""Which line of a problems file carries this tag, for the annotation."""
	needle = f'"{tag}"'
	for number, line in enumerate(text.split("\n"), start=1):
		if needle in line and '"tags"' in line:
			return number
	return None


def annotate(path: str, line: int | None, message: str) -> None:
	where = f"file={path}" + (f",line={line}" if line else "")
	# A newline would end the workflow command, so keep the message on one line.
	print(f"::error {where},title=Unknown problem tag::{message}")


def resolve_ref(preferred: str) -> str | None:
	"""The base branch under whichever name this checkout knows it by."""
	for ref in (preferred, preferred.removeprefix("origin/"), "origin/HEAD"):
		if (
			subprocess.run(
				["git", "rev-parse", "--verify", "--quiet", f"{ref}^{{commit}}"],
				capture_output=True,
				cwd=ROOT,
			).returncode
			== 0
		):
			return ref
	return None


def problems_files_at(ref: str) -> list[str]:
	out = subprocess.run(
		["git", "ls-tree", "-r", "--name-only", ref, "content/"],
		capture_output=True,
		text=True,
		cwd=ROOT,
		check=True,
	).stdout
	return [
		f
		for f in out.split("\n")
		if f.endswith(".problems.json") or f.endswith("extraProblems.json")
	]


def vocabulary_at(ref: str) -> set[str]:
	"""Every tag in use on `ref` -- the base branch is the vocabulary."""
	known: set[str] = set()
	for path in problems_files_at(ref):
		blob = subprocess.run(
			["git", "show", f"{ref}:{path}"], capture_output=True, text=True, cwd=ROOT
		).stdout
		if not blob.strip():
			continue
		try:
			found: dict[str, str] = {}
			tags_in(json.loads(blob), found, path)
			known |= set(found)
		except json.JSONDecodeError:
			continue  # a broken file on the base branch is not this check's problem
	return known


def main() -> int:
	parser = argparse.ArgumentParser(description=__doc__)
	parser.add_argument("paths", nargs="*", type=Path)
	parser.add_argument("--base-ref", default="origin/master")
	parser.add_argument("--all", action="store_true", help="check every problems file")
	args = parser.parse_args()

	if args.all or not args.paths:
		paths = [ROOT / p for p in problems_files_at("HEAD")]
	else:
		paths = [p for p in args.paths if p.name.endswith(".json")]

	base = resolve_ref(args.base_ref)
	if base is None:
		print(
			f"Cannot find {args.base_ref}, so there is nothing to compare tags against. "
			"Fetch the base branch, or pass --base-ref.",
			file=sys.stderr,
		)
		return 1

	known = vocabulary_at(base)
	if not known:
		print(
			f"Found no tags on {base}; is the base branch fetched?",
			file=sys.stderr,
		)
		return 1

	ordered = sorted(known)
	failed = 0
	for path in paths:
		if not path.exists():
			continue
		try:
			data = json.loads(path.read_text())
		except json.JSONDecodeError as err:
			print(f"{path}: not valid JSON: {err}")
			failed += 1
			continue
		found: dict[str, str] = {}
		tags_in(data, found, path.name)
		rel = path.relative_to(ROOT) if path.is_absolute() else path
		raw = path.read_text()
		for tag in sorted(set(found) - known):
			failed += 1
			near = difflib.get_close_matches(tag, ordered, n=3, cutoff=0.7)
			hint = f" Did you mean {', '.join(repr(n) for n in near)}?" if near else ""
			message = (
				f"new tag {tag!r} on {found[tag]}, not used anywhere on {base}.{hint}"
				f" If it really is new, label the pull request `{DISMISS_LABEL}`."
			)
			print(f"{rel}: {message}")
			if ANNOTATE:
				annotate(str(rel), line_of(raw, tag), message)

	if failed:
		print(
			f"\n{failed} new tag(s). Fix the spelling, or label the pull request "
			f"`{DISMISS_LABEL}` if the tag really is new.",
			file=sys.stderr,
		)
	return 1 if failed else 0


if __name__ == "__main__":
	raise SystemExit(main())

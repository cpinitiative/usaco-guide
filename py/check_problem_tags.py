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
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DISMISS_LABEL = "new-tag"


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

	known = vocabulary_at(args.base_ref)
	if not known:
		print(
			f"Found no tags on {args.base_ref}; is the base branch fetched?",
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
		for tag in sorted(set(found) - known):
			failed += 1
			near = difflib.get_close_matches(tag, ordered, n=3, cutoff=0.7)
			hint = f" Did you mean {', '.join(repr(n) for n in near)}?" if near else ""
			print(
				f"{rel}: new tag {tag!r} on {found[tag]}, not used anywhere on {args.base_ref}.{hint}"
			)

	if failed:
		print(
			f"\n{failed} new tag(s). Fix the spelling, or label the pull request "
			f"`{DISMISS_LABEL}` if the tag really is new.",
			file=sys.stderr,
		)
	return 1 if failed else 0


if __name__ == "__main__":
	raise SystemExit(main())

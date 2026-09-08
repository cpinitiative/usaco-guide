#!/usr/bin/env python3
"""Textual checks over the .mdx under ``content/`` and ``solutions/``.

Rules the compiler cannot express and a reviewer keeps having to apply by eye.
Both are scoped by fenced code block, because both are noise without it.

1. Links into the guide are relative. ``Adding_Solution.mdx`` asks for
   ``/silver/binary-search`` over ``https://usaco.guide/silver/binary-search``,
   and an absolute one bounces the reader off a preview deployment back to the
   live site mid-page -- exactly where a reviewer clicks.

   Only markdown links outside code fences are flagged. Inside a fence the URL
   is usually in a comment that someone may paste into an editor, where a
   relative path means nothing, and the rule's own statement quotes the
   absolute form as its bad example.

2. ``cout.tie(...)`` does not appear in C++ snippets. ``Adding_Solution.mdx``
   bans it as code that does nothing, since ``cout`` is not tied to anything.

   Only inside a ```cpp fence: the ban's own wording and the Fast_IO warning
   explaining it both name the call in prose, and neither is a violation.
"""

from __future__ import annotations

import argparse
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

ANNOTATE = bool(os.environ.get("GITHUB_ACTIONS"))

FENCE = re.compile(r"^\s*```(\w*)")
# A markdown link whose target is the guide's own origin.
ABSOLUTE_LINK = re.compile(r"\]\(\s*(https?://(?:www\.)?usaco\.guide(/[^)\s]*)?)\s*\)")
# Any spelling: the one in the tree was cout.tie(0), not cout.tie(nullptr).
COUT_TIE = re.compile(r"\bcout\s*\.\s*tie\s*\(")


def mdx_files() -> list[Path]:
	return sorted(
		list((ROOT / "content").rglob("*.mdx"))
		+ list((ROOT / "solutions").rglob("*.mdx"))
	)


def annotate(path: str, line: int, message: str) -> None:
	# A newline would end the workflow command, so keep the message on one line.
	print(f"::error file={path},line={line},title=MDX check::{message}")


def check_file(path: Path) -> list[tuple[int, str]]:
	errors: list[tuple[int, str]] = []
	language: str | None = None  # the open fence's language, None outside a fence

	for number, line in enumerate(path.read_text().splitlines(), 1):
		fence = FENCE.match(line)
		if fence:
			language = fence.group(1) if language is None else None
			continue

		if language is None:
			for match in ABSOLUTE_LINK.finditer(line):
				target = match.group(2) or "/"
				errors.append(
					(number, f"link to {match.group(1)} should be relative: {target}")
				)
		elif language == "cpp" and COUT_TIE.search(line):
			errors.append(
				(
					number,
					"cout.tie(...) does nothing, since cout is not tied to anything; "
					"see /general/fast-io#cintienullptr",
				)
			)
	return errors


def main() -> int:
	parser = argparse.ArgumentParser(description=__doc__)
	parser.add_argument("paths", nargs="*", type=Path)
	parser.add_argument("--all", action="store_true", help="check every .mdx")
	args = parser.parse_args()

	if args.all or not args.paths:
		paths = mdx_files()
	else:
		paths = [p for p in args.paths if p.suffix == ".mdx"]

	failed = 0
	for path in paths:
		for line, message in check_file(path):
			rel = path.relative_to(ROOT) if path.is_absolute() else path
			print(f"{rel}:{line}: {message}")
			if ANNOTATE:
				annotate(str(rel), line, message)
			failed += 1

	if failed:
		print(f"\n{failed} finding(s) in .mdx files.", file=sys.stderr)
	return 1 if failed else 0


if __name__ == "__main__":
	raise SystemExit(main())

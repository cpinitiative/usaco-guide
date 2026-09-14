#!/usr/bin/env python3
"""Textual checks over the .mdx under ``content/`` and ``solutions/``.

Rules the compiler cannot express and a reviewer keeps having to apply by eye.
All are scoped by fenced code block, because all are noise without it.

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

3. Operator names and Greek letters in math keep their backslash. KaTeX sets
   ``$min(a, b)$`` as the italic letters m, i, n rather than as ``\\min``, and
   renders it without complaint, so nothing else catches it. #6587 swept the
   tree for these and still missed a ``$sigma = 26$``.

   Only inside ``$...$`` and ``$$...$$`` outside code fences and inline code,
   and not in the argument of ``\\text``, ``\\texttt``, ``\\operatorname`` and
   the like, where the word is meant literally (``$\\texttt{max}_1$``). A name
   only counts on its own, so ``\\min``, ``\\argmin``, ``minCost`` and
   ``left\\_sum`` all pass. Names that double as variable names -- ``sum``,
   ``sec``, ``sh`` -- are not checked at all.
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

INLINE_CODE = re.compile(r"`[^`\n]*`")
# Math as remark-math pairs it: $$...$$ may span lines, and $...$ may wrap
# within a paragraph but not across a blank line.
MATH = re.compile(r"\$\$(.+?)\$\$|\$((?:[^$\n]|\n(?![ \t]*\n))+?)\$", re.S)
# Arguments set as text, where a word like "max" is meant literally.
TEXT_ARG = re.compile(
	r"\\(?:text[a-z]*|math(?:rm|tt|it|bf|sf)|operatorname\*?|mbox)\s*"
	r"\{(?:[^{}]|\{[^{}]*\})*\}"
)
BARE_NAMES = {
	**dict.fromkeys(
		"arg argmax argmin cos deg det dim exp gcd ker lg lim ln log max min "
		"sin sup tan "
		"alpha beta gamma Gamma delta Delta epsilon varepsilon zeta eta theta "
		"Theta iota kappa lambda Lambda mu nu xi Xi pi Pi rho sigma Sigma tau "
		"upsilon phi varphi Phi chi psi Psi omega Omega infty".split()
	),
	"inf": r"\infty (or \inf, for an infimum)",
	"lcm": r"\operatorname{lcm}, since KaTeX has no \lcm",
	"mod": r"\bmod, or \pmod{...}",
}
# Not preceded by a backslash or an identifier character, and not followed by a
# letter, digit or \_ -- so \min, \argmin, minCost and left\_sum all pass, while
# max_i (a subscript) does not.
BARE_NAME = re.compile(
	r"(?<![\\\w])("
	+ "|".join(sorted(BARE_NAMES, key=len, reverse=True))
	+ r")(?![A-Za-z0-9]|\\_)"
)


def mdx_files() -> list[Path]:
	return sorted(
		list((ROOT / "content").rglob("*.mdx"))
		+ list((ROOT / "solutions").rglob("*.mdx"))
	)


def annotate(path: str, line: int, message: str) -> None:
	# A newline would end the workflow command, so keep the message on one line.
	print(f"::error file={path},line={line},title=MDX check::{message}")


def blank(match: re.Match[str]) -> str:
	return " " * len(match.group())


def bare_names(prose: str) -> list[tuple[int, str]]:
	"""Rule 3, over ``prose``: the file with code blanked out, lines intact."""
	errors: list[tuple[int, str]] = []
	for math in MATH.finditer(prose.replace("\\$", "  ")):
		group = 1 if math.group(1) is not None else 2
		for name in BARE_NAME.finditer(TEXT_ARG.sub(blank, math.group(group))):
			word = name.group(1)
			line = prose.count("\n", 0, math.start(group) + name.start()) + 1
			fix = BARE_NAMES[word] or "\\" + word
			errors.append(
				(line, f"{word} in math renders as italic letters; write {fix}")
			)
	return errors


def check_file(path: Path) -> list[tuple[int, str]]:
	errors: list[tuple[int, str]] = []
	language: str | None = None  # the open fence's language, None outside a fence
	prose: list[str] = []  # the file with fences blanked, for rule 3

	for number, line in enumerate(path.read_text().splitlines(), 1):
		fence = FENCE.match(line)
		prose.append(
			INLINE_CODE.sub(blank, line) if language is None and not fence else ""
		)
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

	errors += bare_names("\n".join(prose))
	return sorted(errors, key=lambda error: error[0])


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

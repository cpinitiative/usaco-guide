"""Formats all code snippets in mdx files using clang-format or black-with-tabs"""

import os
import subprocess
import sys
import tempfile
import black
from typing import List


# see https://clang.llvm.org/docs/ClangFormatStyleOptions.html for more options
CLANG_FORMAT_STYLE = """
TabWidth: 4
IndentWidth: 4
UseTab: ForIndentation
AllowShortIfStatementsOnASingleLine: AllIfsAndElse
AllowShortBlocksOnASingleLine: Always
AllowShortFunctionsOnASingleLine: All
AllowShortLambdasOnASingleLine: All
AllowShortLoopsOnASingleLine: true
SpacesBeforeTrailingComments: 2
"""
CLANG_FORMAT_STYLE = (
	"{" + ", ".join(filter(lambda x: x != "", CLANG_FORMAT_STYLE.split("\n"))) + "}"
)

def lead_white(line):
	return len(line) - len(line.lstrip())


def match_indentation(line, prog_line):
	return prog_line[min(lead_white(line), lead_white(prog_line)) :]


def contains_banned_terms(prog: List[str]):
	banned = ["CodeSnip", "while (???)"]
	return any(ban in prog_line for ban in banned for prog_line in prog)


def format_prog_py(prog: List[str]):
	try:
		prog = black.format_file_contents(
			"".join(prog), fast=True, mode=black.FileMode()
		).splitlines(True)
	except black.report.NothingChanged:
		pass
	return prog


def format_prog_clang(lang: str, prog: List[str]):
	tmp_file = tempfile.NamedTemporaryFile(suffix=f".{lang}")
	with open(tmp_file.name, "w") as f:
		f.write("".join(prog))
	subprocess.check_output(
		[f"clang-format -i -style='{CLANG_FORMAT_STYLE}' {f.name}"],
		shell=True,
	)
	with open(tmp_file.name, "r") as f:
		return f.readlines()


def format_prog(lang: str, prog: List[str]):
	if lang == "py":
		return format_prog_py(prog)
	else:
		assert lang in ["cpp", "java"]
		return format_prog_clang(lang, prog)


def denotes_lang(line: str):
	line = line.strip()
	return line.startswith("```") and len(line) > 3 and line.count('`') != len(line) and 'sh' not in line


def format_path(path: str):
	print("formatting", path)
	with open(path, "r") as f:
		lines = f.readlines()
	lang = None
	nlines = []
	prog = []
	for line in lines:
		if denotes_lang(line): # start of lang block
			lang = line.strip()[3:].strip()
			if lang == 'python':
				lang = 'py'
			if lang not in ['cpp', 'py', 'java']:
				raise ValueError(f"Unrecognized formatting lang: {line.strip()[3:]}")
			nlines.append(line[: line.find("```")] + f"```{lang}\n")
		elif line.strip() == "```":
			if lang is not None: # end of lang block
				if not contains_banned_terms(prog):
					prog = [match_indentation(line, prog_line) for prog_line in prog]
					prog = format_prog(lang, prog)
					whitespace = line[: line.find("```")]
					nlines += [whitespace + line for line in prog]
				else:  # don't format
					nlines += prog
				prog = []
				lang = None
			nlines.append(line)
		elif lang is not None: # program block
			prog.append(line)
		else: # outside of program block
			nlines.append(line)
	with open(path, "w") as f:
		f.write("".join(nlines))
	assert lang is None


def format_dir(dir):
	# https://stackoverflow.com/questions/2212643/python-recursive-folder-read
	for root, subdirs, files in os.walk(dir):
		for file in files:
			if file.endswith(".mdx"):
				path = os.path.join(root, file)
				format_path(path)


if __name__ == "__main__":
	"""
	Args: paths of files to format
	"""
	# raise ValueError(sys.argv[1:])
	for path in sys.argv[1:]:
		format_path(path)

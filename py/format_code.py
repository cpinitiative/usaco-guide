"""Formats all code snippets in modules using clang-format"""

import os
import subprocess
import sys

# see https://clang.llvm.org/docs/ClangFormatStyleOptions.html for more options
STYLE = """
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
STYLE = "{" + ", ".join(filter(lambda x: x != "", STYLE.split("\n"))) + "}"

FORMAT_CPP = True
FORMAT_PYTHON = True
FORMAT_JAVA = True

def lead_white(line):
	return len(line) - len(line.lstrip())

def match_indentation(line, prog_line):
	return prog_line[min(lead_white(line), lead_white(prog_line)):]

def format_path(path: str):
	print("formatting", path)
	with open(path, "r") as f:
		lines = f.readlines()
	lang = None
	nlines = []
	prog = []
	for line in lines:
		if line.strip() == "```cpp" and FORMAT_CPP:
			lang = "cpp"
			nlines.append(line)
		elif (line.strip() == "```py" or line.strip() == "```python") and FORMAT_PYTHON:
			lang = "py"
			nlines.append(line)
		elif line.strip() == "```java" and FORMAT_JAVA:
			lang = "java"
			nlines.append(line)
		elif line.strip() == "```":
			if lang is not None:
				banned = ["CodeSnip", "while (???)"]
				if not any(ban in prog_line for ban in banned for prog_line in prog):
					TMP_FILE = f"tmp.{lang}"
					with open(TMP_FILE, "w") as f:
						f.write("".join([match_indentation(line, prog_line) for prog_line in prog]))
					found_error = False
					try:
						if lang == "cpp" or lang == "java":
							subprocess.check_output(
								[f"clang-format -i -style='{STYLE}' {TMP_FILE}"], shell=True
							)
						elif lang == "py":
								subprocess.check_output(
									[f"black --fast {TMP_FILE}"], shell=True # black with tabs
								)
						else:
							assert False
					except subprocess.CalledProcessError as e:
						print("ERROR!")
						print(e)
						print("path =", path)
						print("".join(prog))
						print()
						found_error = True
						nlines += prog
					if not found_error:
						with open(TMP_FILE, "r") as f:
							whitespace = line[: line.find("```")]
							prog_lines = f.readlines()
							nlines += [whitespace + line for line in prog_lines]
					os.remove(TMP_FILE)
				else: # don't format
					nlines += prog
				prog = []
				lang = None
			nlines.append(line)
		elif lang is not None:
			prog.append(line)
		else:
			if line.strip().startswith("```"):
				print(f"Not formatting lang: {line.strip()[3:]}")
			nlines.append(line)
	with open(path, "w") as f:
		f.write("".join(nlines))
	assert lang is None


# https://stackoverflow.com/questions/2212643/python-recursive-folder-read
for root, subdirs, files in os.walk("/Users/benq/Documents/usaco-guide/content/"):
	for file in files:
		if file.endswith(".mdx"):
			path = os.path.join(root, file)
			format_path(path)

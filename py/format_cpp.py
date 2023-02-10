"""Formats all C++ code snippets in modules using clang-format"""

import os

TMP_FILE = "tmp.cpp"
STYLE = """
TabWidth: 4
IndentWidth: 4
UseTab: Always
AllowShortIfStatementsOnASingleLine: AllIfsAndElse
AllowShortBlocksOnASingleLine: Always
AllowShortFunctionsOnASingleLine: All
AllowShortLambdasOnASingleLine: All
AllowShortLoopsOnASingleLine: true
"""
STYLE = "{" + ", ".join(filter(lambda x: x != "", STYLE.split("\n"))) + "}"

def format_path(path: str):
	print("formatting", path)
	with open(path, "r") as f:
		lines = f.readlines()
	cpp = False
	nlines = []
	prog = ""
	for line in lines:
		if line.strip() == '```cpp':
			cpp = True
			nlines.append(line)
		elif line.strip() == '```':
			if cpp:
				if "CodeSnip" not in prog:
					import subprocess
					with open(TMP_FILE, "w") as f:
						f.write(prog)
					subprocess.run([f"clang-format -i -style='{STYLE}' tmp.cpp"], shell=True)
					with open(TMP_FILE, "r") as f:
						whitespace = line[:line.find("```")]
						prog_lines = f.readlines()
						nlines += [whitespace + line for line in prog_lines]
				else:
					print("Found Codesnip in", path)
					for nline in prog.split("\n")[:-1]:
						nlines.append(nline+"\n")
				prog = ""
				cpp = False
			nlines.append(line)
		elif cpp:
			prog += line
		else:
			nlines.append(line)
	with open(path, "w") as f:
		f.write("".join(nlines))
	assert not cpp
	# assert False

# https://stackoverflow.com/questions/2212643/python-recursive-folder-read
for root, subdirs, files in os.walk("/Users/benq/Documents/usaco-guide/content/"):
	for file in files:
		if file.endswith(".mdx"):
			if "Input_Output" in file:
				# if "Working_MDX" in file:
				path = os.path.join(root, file)
				format_path(path)

os.remove(TMP_FILE)
import sys
import os

for filename in os.listdir("."):
	if filename.endswith(".mdx"):
		mod = False
		with open(filename,"r") as f:
			lines = f.readlines()
			for index,line in enumerate(lines):
				if index == 2 and '-' not in line:
					words = line.split()
					ind = len(words)-2
					while ind > 1 and not words[ind].isdigit():
						ind -= 1
					ind += 1
					words.insert(ind,'-')
					lines[index] = " ".join(words)+"\n"
					# print("RESULT",lines[index])
					mod = True
					# print("HA",words[:ind],words[ind:])

		if mod:
			with open(filename,"w") as f:
				f.write("".join(lines))
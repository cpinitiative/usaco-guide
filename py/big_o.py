import sys
import os

for root,dirs,files in os.walk("."):
	for file in files:
		if file.endswith(".mdx"):
			filename = os.path.join(root,file)
			print("HA",filename)
			mod = True
			with open(filename,"r") as f:
				lines = f.readlines()
				for index,line in enumerate(lines):
					lines[index] = line.replace("$O(","$\\mathcal{O}(")
			if mod:
				with open(filename,"w") as f:
					f.write("".join(lines))
			# print ()
	# print(files)
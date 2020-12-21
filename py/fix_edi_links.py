import sys
import os

for filename in os.listdir("."):
	if filename.endswith(".mdx"):
		mod = False
		with open(filename,"r") as f:
			lines = f.readlines()
			for index,line in enumerate(lines):
				if line.lower().startswith("official editorial: "):
					mod = True
					print("FIXING",filename,line)
					rest = line[len("Official Editorial: "):-1]
					if "usaco" in rest:
						lines[index] = f"[Official Analysis]({rest})\n"
					else:
						lines[index] = f"[Official Editorial]({rest})\n"
				elif line.startswith("[Official Analysis]: "):
					mod = True
					print("FIXING2",filename,line)
					rest = line[len("[Official Analysis]: "):-1]
					if "usaco" in rest:
						lines[index] = f"[Official Analysis]({rest})\n"
					else:
						lines[index] = f"[Official Editorial]({rest})\n"
		if mod:
			with open(filename,"w") as f:
				f.write("".join(lines))
import sys
import os

cnt = 0

for filename in os.listdir("."):
	if filename.endswith(".mdx"):
		mod = False
		with open(filename,"r") as f:
			lines = f.readlines()
			# if "Qi" not in lines[4]: continue
			# print("HA",filename)
			cpp = False
			include = False
			for i in range(len(lines)):
				if lines[i] == '```cpp\n':
					cpp = True
					cpp_file = ''
					include = False
					bad_include = False
					continue
				if lines[i] == '```\n':
					if cpp:
						cpp = False
						if include and not bad_include:
							cnt += 1
							output_filename = str(cnt)+" "+filename[:-4]+".cpp"
							with open(output_filename,"w") as f:
								f.write(cpp_file)
								# sys.exit(0)
						else:
							print("BAD INCLUDE FOR",filename)
					continue
				if cpp:
					if '#include' in lines[i]:
						include = True
						if '\"' in lines[i]:
							bad_include = True
					cpp_file += lines[i]
			# for index,line in enumerate(lines):
			# 	if line.lower().startswith("official editorial: "):
			# 		mod = True
			# 		print("FIXING",filename,line)
			# 		rest = line[len("Official Editorial: "):-1]
			# 		if "usaco" in rest:
			# 			lines[index] = f"[Official Analysis]({rest})\n"
			# 		else:
			# 			lines[index] = f"[Official Editorial]({rest})\n"
			# 	elif line.startswith("[Official Analysis]: "):
			# 		mod = True
			# 		print("FIXING2",filename,line)
			# 		rest = line[len("[Official Analysis]: "):-1]
			# 		if "usaco" in rest:
			# 			lines[index] = f"[Official Analysis]({rest})\n"
			# 		else:
			# 			lines[index] = f"[Official Editorial]({rest})\n"
			# sys.exit(0)
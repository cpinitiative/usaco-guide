import sys
import os

# with open("template.cpp","r") as f:
# 	template = "".join(f.readlines())

def fraction_div(spaces,num):
	ans = 0
	for x in spaces:
		if x%num == 0:
			ans += 1
	return ans/len(spaces)

def replace_prefix(line,num_spaces):
	ind = 0
	while ind < len(line) and line[ind] == ' ':
		ind += 1
	res = ''
	cur = 0
	while cur+num_spaces <= ind:
		res += '\t'
		cur += num_spaces
	while cur < ind:
		res += ' '
		cur += 1
	res += line[ind:]
	return res

def modify(lines):
	new_lines = lines[:]
	# found_impl = False
	# found_code = False
	# found_complexity = False
	for index,line in enumerate(lines):
		if line.startswith("## Implementation") and not lines[index+1].startswith("\n"):
			new_lines[index] = line+"\n"
	# for index,line in enumerate(lines):
	# 	line = line.replace("## C++ Implementation","## Implementation")
	# 	line = line.replace("## Java Implementation","## Implementation")
	# 	line = line.replace("## Python Implementation","## Implementation")
	# 	new_lines[index] = line
		# if line.startswith("## Implementation"):
		# 	found_impl = True
		# if line.startswith("```"):
		# 	found_code = True
		# if "\\mathcal{O}" in line and len(line) < 50:
		# 	if not "Complexity:" in line:
		# 		print("didn't find complexity")
		# 	if not line.startswith("**"):
		# 		print("didn't find bold")
		# 	if not line.endswith("$\n"):
		# 		print("didn't find $")
		# 	# found_complexity = True
	# if found_complexity:
	# 	print("FOUND COMPLEXITY")
	# if found_code and (not found_impl or not found_complexity)
	# code = False
	# tabs = 0
	# spaces = []
	# space_lines = []
	# for index,line in enumerate(lines):
	# 	if line.startswith("## Code"):
	# 		# print("CHANGED")
	# 		new_lines[index] = "## Implementation"
	# 	# print("HA",index,line)
	# 	if line.startswith("```"):
	# 		print("LINE INDEX",index)
	# 		code = not code
	# 		if code:
	# 			start_line = line
	# 			tabs = 0
	# 			spaces = []
	# 			space_lines = []
	# 		else:
	# 			# print("WHOPOS",start_line)
	# 			ok_start = False
	# 			for lang in ["```cpp", "```java","```py"]:
	# 				if start_line.startswith(lang):
	# 					ok_start = True
	# 			if ok_start and len(spaces) > tabs:
	# 				res = 4
	# 				while fraction_div(spaces,res) < 0.8:
	# 					res -= 1
	# 				# print("GOT",res,tabs,spaces)
	# 				if res > 1:
	# 					for ind in space_lines:
	# 						print("REPLACED")
	# 						print("BEFORE",repr(new_lines[ind]))
	# 						new_lines[ind] = replace_prefix(lines[ind],res)
	# 						print("AFTER",repr(new_lines[ind]))

	# 			# if tabs > 0 or len(spaces) > 0:
	# 			# 	print("GOT",tabs,spaces)
	# 	elif code:
	# 		if line.startswith('\t'):
	# 			tabs += 1
	# 		if line.startswith(' '):
	# 			ind = 0
	# 			while ind < len(line) and line[ind] == ' ':
	# 				ind += 1
	# 			if ind > 1:
	# 				space_lines.append(index)
	# 				spaces.append(ind)

	# 		# if code:
	# 		# 	print("LOOKING AT CODE")
	return new_lines


for root,dirs,files in os.walk("."):
	for file in files:
		if file.endswith(".mdx"):
			filename = os.path.join(root,file)
			print("FILE",filename)
			with open(filename,"r") as f:
				lines = f.readlines()
				new_lines = modify(lines)
			if lines != new_lines:
				print("WRITING")
				with open(filename,"w") as f:
					f.write("".join(new_lines))

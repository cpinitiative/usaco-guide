import sys
import os

sources = []

for filename in os.listdir("."):
	if filename.endswith(".mdx"):
		mod = False
		with open(filename,"r") as f:
			lines = f.readlines()
			for index,line in enumerate(lines):
				if index == 2:
					if line.startswith('title'):
						tmp = line[len("title:"):].split("-")
						if len(tmp) != 2:
							print("OOPS",filename,tmp)
							continue
						for i in range(len(tmp)):
							tmp[i] = tmp[i].strip()
						lines[index] = "source: " + tmp[0] + "\n" + "title: " + tmp[1]+"\n"
						mod = True
					# print("HA",words[:ind],words[ind:])
					elif line.startswith("source"):
						# print("SOURCE",)
						sources.append(line)
						tokens = line.strip().split()[1:]
						# print("SOURCE",tokens)
						if tokens[0] == 'USACO':
							continue
							# if len(tokens) != 4:
							# 	if tok
							# print("WHOOPS",tokens)
							# def cut(names,cut_len):
							# 	return {name[:cut_len]:name for name in names}

							# divs = cut(['Bronze','Silver','Gold','Platinum'],4)
							# # print(divs)
							# # sys.exit(0)

							# assert len(tokens) == 4
							# # print(tokens[1])
							# assert tokens[1][:4] in divs
							# tokens[1] = divs[tokens[1][:4]]

							# months = cut(['January','February','December','Open'],3)
							# assert tokens[3][:3] in months
							# tokens[3] = months[tokens[3][:3]]
							# # if tokens[-1][:4] in ["Bron","Silv",'Gold',"Plat"]:
							# # 	tokens[1],tokens[2],tokens[3] = tokens[3],tokens[2],tokens[1]
							# lines[index] = 'source: '+' '.join(tokens)+'\n'
							# mod = True


							# if tokens[1].isdigit():
							# 	if len(tokens) == 4:
							# 		print("BEFORE",tokens)
							# 		# print("AFTER",tokens,lines[index])
							# 		mod = True
						# continue
					# if 'title' in line:
					# 	ind = line.find('title')
					# 	lines[ind] = line[:ind]+'\n'+line[ind:]
					# 	mod = True
					# 	# print("WHOOPS",line,)
					# if line.startswith("source:"):
					# print("LOOKING AT LINE",line)
					# assert line.startswith("title:")

		if mod:
			with open(filename,"w") as f:
				f.write("".join(lines))
			# sys.exit(0)

sources.sort()
for source in sources:
	print(source[:-1])
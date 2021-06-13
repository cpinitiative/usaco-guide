import sys
import os
import json
from collections import defaultdict

# with open("template.cpp","r") as f:
# 	template = "".join(f.readlines())

oc = defaultdict(int)

for root,dirs,files in os.walk("."):
	for name in files:
		if name.endswith(".json"):
			file_path = os.path.join(root,name)
			with open(file_path) as f:
				# print(file_path)
				data = json.load(f)
				# print("----")
				# print(data)
				# print()
				for x in data.values():
					if isinstance(x,list):
						for y in x:
							if isinstance(y,dict):
								if 'tags' in y and isinstance(y['tags'],list):
									for z in y['tags']:
										oc[z] += 1
										if z == '':
											print("BLANK TAG",name)


distinct_tags=[]
for tag,occurrences in oc.items():
	distinct_tags.append((occurrences,tag))
distinct_tags.sort(reverse=True)
for z in distinct_tags:
	print(z)
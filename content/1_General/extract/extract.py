query = '''
query MyQuery {
  allMdx(filter: {fileAbsolutePath: {regex: "/content/"}}) {
    nodes {
      problems {
        source
        id
      }
      frontmatter {
        id
      }
    }
  }
}
'''

import json, sys

F = open("id.json","r")
ids = json.load(F)

f = open("oops.json","r")
x = json.load(f)["data"]["allMdx"]["nodes"]

done = {}

for y in x:
	for p in y["problems"]:
		if p["source"] in ["Bronze", "Silver", "Gold", "Plat"]:
			done[p["id"]] = y["frontmatter"]["id"]
			# print(p["id"], p["source"], y["frontmatter"]["id"])

notDone = {}

des = ["bronze", "silver", "gold", "plat"]
for t in des:
	notDone[t] = []

def division(x):
	for t in des:
		if t in x:
			return t
	assert(False)

for x in ids:
	if int(x) > 554 and x not in done:
		notDone[division(ids[x])].append((x,ids[x].split('_')))

for t in notDone:
	print(t.upper())
	print()
	for u in notDone[t]:
		print(u[1][3][:-5],u[0],u[1][1])
	print()
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

F = open("id_cses.json","r")
ids = json.load(F)

f = open("oops.json","r")
x = json.load(f)["data"]["allMdx"]["nodes"]

done = {}

for y in x:
	for p in y["problems"]:
		if p["source"] in ["CSES"]:
			done[p["id"]] = y["frontmatter"]["id"]
			# print(p["id"], p["source"], y["frontmatter"]["id"])

for a in ids:
  if a not in done:
    print(a,ids[a])
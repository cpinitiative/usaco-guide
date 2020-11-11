from contextlib import closing
from bs4 import BeautifulSoup
import urllib.request
import time
import sys
import os
import pprint
import json

def parse(url):
	page = urllib.request.urlopen(url)
	return BeautifulSoup(page,'html.parser')
  
f = open('id_to_sol.json','r')
data = json.load(f) 

# print(data)

for _ in data:
	pref = "http://www.usaco.org/current/data/" # prefix for each url
	e = pref+data[_]
	if not ("bronze" in e) or e.endswith("bronze.html"):
		continue
	p = parse(e)
	text = str(p)
	# print(text.count("Possibility"))
	# print("--------")
	# pprint.pprint(p.text)

	yes = False
	if text.lower().count('recur'):
		yes = True
	# if text.lower().count('pair'):
	# 	yes = True
	# for code in p.find_all('pre', ['prettyprint']):
	# 	text = code.text.lower()
	# 	# print(text)
	# 	# if 'queue<' in text or 'LinkedList' in text:
	# 	# 	yes = True
	# 	# if text.count('pair<'): 
	# 	if text.count('vector<'): # or text.count('list'):
	# 		if text.count('vector<'):
	# 			print("FOUND VECTOR")
	# 		# if text.count("list"):
	# 		# 	print("FOUND ARRAYLIST")
	# 		yes = True
	if yes:
		print(e)
	# yes = False
	# text = p.text.lower()
	# # if text.count("map") or text.count("set"):
	# # 	yes = True
	# # print(p.text)
	# # 
	# # if "the" in p.text.lower():
	# # 	yes = True
	# if yes:
	# 	print(e)
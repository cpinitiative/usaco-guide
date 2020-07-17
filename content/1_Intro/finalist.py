from contextlib import closing
from bs4 import BeautifulSoup
import urllib.request
import time
import sys
import os
import pprint

def parse(url):
	page = urllib.request.urlopen(url)
	return BeautifulSoup(page,'html.parser')

prefix="http://www.usaco.org/index.php?page=finalists"

past = set()

def nor(x):
	return " ".join(x.split())

for i in range(12,21):
	html = parse(prefix+str(i))
	for a in html.find_all('table'):
		par = []
		for b in a.find_all('tr'):
			arr = []
			for c in b.find_all('td'):
				arr.append(nor(c.text))
			if len(arr) > 1:
				par.append((arr[0],arr[1]))
		nex = [0 for i in range(5)]
		pre = 0
		tot = 0
		new = []
		for a in par:
			# print(a)
			rem = int(a[0])-i-2000
			# print(rem)
			tot += 1
			if a in past:
				pre += 1
			else:
				new.append(a)
				nex[4-min(rem,4)] += 1
			past.add(a)
		if i >= 16:
			# print(tot)
			# print(pre,nex)
			print(nex)
			# for t in nex:
			# 	print(t,end=", ")
			# print()
			# for f in new:
			# 	print(f)

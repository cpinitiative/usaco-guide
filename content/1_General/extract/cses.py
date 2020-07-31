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

x = parse("https://cses.fi/problemset/")
# pprint.pprint(x)

m = {}

for y in x.find_all('a'):
	if y.has_attr('href'):
		if y.text == 'Shortest Subsequence':
			break
		if 'task' not in y['href']:
			continue
		ID = y['href']
		ID = ID[ID.rfind('/')+1:]
		m[ID] = y.text

print(json.dumps(m,indent=4))
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

def usaco_parse(html): 
	# print(html.prettify())
	for a in html.find_all('table'):
		fst = True
		totScore = [0,0,0]
		relScore = [0,0,0]
		perfect = [0,0,0]
		lens = []
		names = []
		tot = 0
		bad = True
		for b in a.find_all('tr'):
			if fst:
				for c in b.findChildren():
					if c.has_attr('colspan'):
						lens.append(int(c['colspan'])-1)
						names.append(c.text);
			else:
				arr = []
				for c in b.find_all('tr'):
					arr.append(c.text)
				for c in b.find_all('td'):
					arr.append(c.text)
				if len(arr) == 0:
					continue 
				st = 5
				score = [0,0,0]
				for i,t in enumerate(lens):
					for j in range(t):
						if arr[st] == '*':
							score[i] += 1 
						st += 1
					st += 2
				tmpScore = 0
				for i in range(3):
					score[i] /= lens[i]
					totScore[i] += score[i]
					tmpScore += score[i]
					if score[i] == 1:
						perfect[i] += 1
				tot += 1 
				if tmpScore < 1: # less than third of points, data probably complete?
					bad = False
			fst = False
		tsum = 0
		for i in range(3):
			totScore[i] /= tot 
			tsum += totScore[i]
		for i in range(3):
			relScore[i] = totScore[i]/tsum
		if bad:
			print("INCOMPLETE DATA")

		def ro(x):
			return str(round(10000*x)/100)+"%"
		for i in range(3):
			print(names[i],ro(totScore[i]),ro(relScore[i]),perfect[i])
		break

def usaco_stats():
	prefix = "http://www.usaco.org/current/data/"
	month = ["dec","jan","feb","open"]
	offset = [0, 1, 1, 1]
	year = [15, 16, 17, 18, 19]
	for a in year:
		for j in range(len(month)):
			url = prefix+str(month[j])+str(a+offset[j])+"_platinum_results.html"
			soup = parse(url)
			print(month[j]+" "+str(a+offset[j])+": ")
			if soup == None:
				print("NO DATA")
			else:
				usaco_parse(soup)
			print()
		print("------")
		print()

cand = []
edLinks = {}

def processEdi(url):
	soup = parse(url)
	#pprint.pprint(soup)
	#sys.exit(0)

	for x in soup.find_all('div',["panel historypanel"]):
		# print("HA",y,j)
		res = []
		for y in x.find_all('a'):
			res.append(y['href'])
		#print("FOUND",res)
		ID = res[0][res[0].rfind('=')+1:]
		edLinks[ID] = res[-1][res[-1].rfind('sol_'):]

	# print("FINISHED",y,j)


		# if x.has_attr('style'):
		# 	print(x['style'])
		# print(res)
		# pprint.pprint(res)
		# print(x.text)
		# print("-----")
			# if x['style'].startswith("position:relative;"):
			# 	print(x.text)
			# 	print("-----")
			#print(x)
		# if x.has_attr('style') and x['style'] == 'position:relative;float:right;':
		# 	print(x)
	# sys.exit(0)
	# for link in soup.find_all('a'):
	# 	print(link['href'],link.text)
	# 	# LINK = link['href']
	# 	# if 'sol' in LINK and 'bronze' in LINK:
	# 	# 	ed.append("http://www.usaco.org/"+LINK)
	# # print(soup)
	# sys.exit(0)

	# pprint.pprint(edLinks)

def get_all():
	url ="http://www.usaco.org/index.php?page=contests"
	soup = parse(url)
	flag = False
	for x in soup.find_all('a'):
		link = x['href']
		if link.endswith("results"):
			suffix = link[link.rfind('=')+1:]
			if suffix == "open14results":
				flag = True
			if flag:
				cand.append(suffix[:-7]+"problems")
			else:
				cand.append(suffix)
	for a in cand:
		print(a)
	for url in cand:
		print("PROCESSING",url)
		processEdi("http://www.usaco.org/index.php?page="+url)
		print(len(edLinks))

	print(json.dumps(edLinks,indent=4))

get_all()

def id_to_sol():
	month = ["dec","jan","feb","open"]
	offset = [0, 1, 1, 1]
	years = range(15,20)
	pref = "http://www.usaco.org/index.php?page="
	ed = []
	for year in years:
		for j in range(4):
			# print("DOING",y,j)
			url = pref+month[j]+str(year+offset[j])+"results"

	# for a in edLinks:
	# 	pprint(a)
	# print(edLinks)
	# for e in ed:
	# 	p = parse(e)
	# 	yes = False
	# 	text = p.text.lower()
	# 	# if text.count("map") or text.count("set"):
	# 	# 	yes = True
	# 	# print(p.text)
	# 	# 
	# 	# if "the" in p.text.lower():
	# 	# 	yes = True
	# 	for code in p.find_all('pre', ['prettyprint']):
	# 		text = code.text.lower()
	# 		# if 'queue<' in text or 'LinkedList' in text:
	# 		# 	yes = True
	# 		if text.count('set<') or text.count('map<'):
	# 			yes = True
	# 	if yes:
	# 		print(e)

# get_all()

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
usaco_divisions = ['Bronze','Silver','Gold','Platinum']
id_to_prob = {x:[] for x in usaco_divisions}
record = {x:[] for x in usaco_divisions}

# https://stackoverflow.com/questions/14706678/beautifulsoup-getting-class-from-elements-of-findall
def processEdi(url_suffix):
	if not url_suffix.endswith('results'):
		return
	print("PROCESSING",url_suffix)
	url = "http://www.usaco.org/index.php?page="+url_suffix
	soup = parse(url)
	# if url_suffix == 'feb18results':
	# 	print("WHOOPS",soup.prettify())
	# 	sys.exit(0)
	# 	for x in soup.find_all('div'): #      <div style="position:relative; float:left; left:10px; top:-50px; width:550px;">
	# 		if x.has_attr('style') and x['style'] == 'position:relative; float:left; left:10px; top:-50px; width:550px;':
	# 			soup = x
	# 			print("FOUND")
	# 			break
				# print("OOPS",x['style'])
		# sys.exit(0)
		# print("WHOOPS",soup)
	# panel = soup.find('div',['panel'])
	# print(soup.prettify())
	# sys.exit(0)
	# print(soup.prettify())


	contest = ''
	# if url_suffix == 'jan18results':
	# 	print(soup.prettify())
	# 	contest = 'USACO 2018 February Contest, Platinum'

	def get_division(x):
		for div in usaco_divisions:
			if x.endswith(div):
				return div
		# print("FAILED TO GET DIVISION OF ",x)
		assert False

	# print(panel)
	def reset_contest():
		nonlocal contest
		for child in soup.find_all('h2'):
			try:
				tmp = child.text.strip()
				get_division(tmp)
				contest = tmp
				break
			except:
				pass
	reset_contest()
	print("STARTING CONTEST",contest)

	this_contest = []
	def process_child(child):
		nonlocal contest
		if child.name == 'h2':
			contest = child.text.strip()
			# child.text[len("USACO 2020 US Open Contest, "):]
			# print("HUH",child.text)
		if child.name == 'div' and child.has_attr('class') and child['class'] ==  ['panel', 'historypanel']:
			# print("HUH",child['class'],division)
			title = child.find('b').text
			res = [y['href'] for y in child.find_all('a')]
			# division, title -> ID
			# print("TITLE",title)
			ID = res[0][res[0].rfind('=')+1:]
			# edLinks[ID] = res[-1][res[-1].rfind('sol_'):]
			# info[ID]
			this_contest.append([contest,title,ID])
			# print(contest,get_division(contest),title,ID)
			# record[get_division(contest)].append([contest,title,ID])

	for child in soup.children:
		process_child(child)
	if len(this_contest)%3 != 0:
		start_len = len(this_contest)
		reset_contest()
		process_child(soup.find('div',["panel historypanel"]))
		# print("RESULT",this_contest)
		this_contest = this_contest[-1:]+this_contest[:-1]
		if len(this_contest) != start_len+1:
			print("FAILED")
			sys.exit(0)
	for contest,title,ID in this_contest:
		def strip_contest(word):
			return word[len("USACO "):word.rfind(" Contest")]
		id_to_prob[get_division(contest)].append([ID,strip_contest(contest),title])
		# print(t)
	# print(this_contest)
	# sys.exit(0)
	# print(panel.name)
	# print("WHOOPS",panel.children)
	# for x in panel.find_all('div',["panel historypanel"]):
	# 	title = x.find('b').text
	# 	res = [y['href'] for y in x.find_all('a'):]
	# 	# division, title -> ID
	# 	print("TITLE",title)
	# 	ID = res[0][res[0].rfind('=')+1:]
	# 	edLinks[ID] = res[-1][res[-1].rfind('sol_'):]

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
	url = "http://www.usaco.org/index.php?page=contests"
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
		# print("PROCESSING",url)
		processEdi(url)
		# print(len(edLinks))
		if url == "dec15results":
			break

	print(json.dumps(id_to_prob,indent=4))

get_all()

def id_to_sol():
	month = ["dec","jan","feb","open"]
	offset = [0, 1, 1, 1]
	years = range(15,20) # recent USACO
	pref = "http://www.usaco.org/index.php?page=" # prefix for each url
	ed = []
	for year in years:
		for j in range(4):
			url = pref+month[j]+str(year+offset[j])+"results"
			# if url == "dec15"


# get_all()

from contextlib import closing
from bs4 import BeautifulSoup
import urllib.request
import time
import sys
import os
import json


def parse(url: str):
    page = urllib.request.urlopen(url)
    return BeautifulSoup(page, 'html.parser')


def usaco_parse(is_plat: bool, html):
    # print(html.prettify())
    table_number = 0
    for a in html.find_all('table'):  # based off pre-college results
        table_number += 1
        fst = True
        lens = []
        names = []
        tot = 0
        bad = True
        num_probs = 0
        for b in a.find_all('tr'):
            if fst:
                for c in b.findChildren():
                    if c.has_attr('colspan'):
                        lens.append(int(c['colspan'])-1)
                        names.append(c.text)
                num_probs = len(lens)
                totScore = [0]*num_probs
                perfect = [0]*num_probs
            else:
                arr = []
                for c in b.find_all('tr'):
                    arr.append(c.text)
                for c in b.find_all('td'):
                    arr.append(c.text)
                if len(arr) == 0:
                    continue
                st = 5
                score = [0, 0, 0]
                for i, t in enumerate(lens):
                    for j in range(t):
                        if arr[st] == '*':
                            score[i] += 1
                        st += 1
                    st += 2
                tmpScore = 0
                for i in range(num_probs):
                    score[i] /= lens[i]
                    totScore[i] += score[i]
                    tmpScore += score[i]
                    if score[i] == 1:
                        perfect[i] += 1
                tot += 1
                if tmpScore < 1:  # less than third of points, data is probably complete?
                    bad = False
                if is_plat and tot == 10:
                    break
            fst = False
        tsum = 0
        if tot == 0:
            return None
        # print("BEFORE DIVISION",table_number,totScore,tot)
        for i in range(num_probs):
            totScore[i] /= tot
            tsum += totScore[i]
        # print("AFTER DIVISION",table_number,totScore,tot)
        if table_number == 2:
            if bad:
                print("INCOMPLETE DATA")
            return totScore

        # def ro(x):
        # 	return str(round(1000*x)/10)+"%"
        # for i in range(3): # ro(relScore[i]),perfect[i]
        # 	print(names[i],ro(totScore[i]))
        # break
    return None


def usaco_stats():
    """
    generate contest_to_points.ts
    """
    prefix = "http://www.usaco.org/current/data/"
    month = ["dec", "jan", "feb", "open"]
    month_expand = ["December", "January", "February", "US Open"]
    offset = [0, 1, 1, 1]
    # year = [15, 16, 17, 18, 19, 20] # 15,
    year = [21]
    score_data = {"Bronze": {}, "Silver": {}, "Gold": {}, "Platinum": {}}
    for division in ['bronze', 'silver', 'gold', 'platinum']:
        for a in year:
            for j in range(len(month)):
                url = prefix+str(month[j])+str(a+offset[j]) + \
                    f"_{division}_results.html"
                # print(url)
                full_contest = "20"+str(a+offset[j])+" "+month_expand[j]
                actual_div = division[0].upper()+division[1:]
                # if full_contest != "2017 US Open" or actual_div != "Gold":
                # 	continue
                # print("DOING",division,full_contest,url)
                try:
                    soup = parse(url)
                    assert soup != None
                    res = usaco_parse(division == 'platinum', soup)
                    # print("RETURN VALUE",res)
                    assert res != None
                    score_data[actual_div][full_contest] = res
                    # print(res)
                    # print(month[j]+" "+str(a+offset[j])+": ")
                except:
                    score_data[actual_div][full_contest] = None
                    # print("NO DATA")
                print()
                print("------")
                print()
    print(json.dumps(score_data, indent=4))


usaco_stats()

import argparse
import json
import urllib.request, ssl
import os
from typing import Iterable, Optional, Tuple

from bs4 import BeautifulSoup
from loguru import logger

INDEX_PREFIX = "https://www.usaco.org/index.php?page="
DATA_PREFIX = "https://www.usaco.org/current/data/"
DIVISIONS = ["Bronze", "Silver", "Gold", "Platinum"]
CONTESTS_SHORT = ["dec", "jan", "feb", "open"]
CONTESTS_LONG = ["December", "January", "February", "US Open"]
YEAR_OFFSETS = [0, 1, 1, 1]


def parse(url: str) -> BeautifulSoup:
	req = urllib.request.Request(url, headers={"User-Agent": "Magic Browser"})
	page = urllib.request.urlopen(req)
	return BeautifulSoup(page, "html.parser")


def problem_table_stats(table, is_plat: bool) -> Tuple[float, float, float]:
	"""Fraction of points scored by each of top 10 participants per problem,
	including samples."""
	first_row = True
	lens = []
	names = []
	tot = 0
	num_probs = 0
	for row in table.find_all("tr"):
		if first_row:
			for c in row.findChildren():
				if c.has_attr("colspan"):
					lens.append(int(c["colspan"]) - 1)
					names.append(c.text)
			num_probs = len(lens)
			assert num_probs == 3
			totScore = [0] * num_probs
			perfect = [0] * num_probs
			first_row = False
		else:
			arr = []
			for c in row.find_all("tr"):
				arr.append(c.text)
			for c in row.find_all("td"):
				arr.append(c.text)
			if len(arr) == 0:
				continue
			st = 5
			score = [0] * num_probs
			for i, t in enumerate(lens):
				for _ in range(t):
					if arr[st] == "*":
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
			if is_plat and tot == 10:
				break
	tsum = 0
	if tot == 0:
		return None
	for i in range(num_probs):
		totScore[i] /= tot
		tsum += totScore[i]
	return totScore


def problem_stats(url: str) -> Tuple[float, float, float]:
	logger.debug(url)
	html = parse(url).html
	is_plat = "plat" in url
	tables = html.find_all("table")
	return problem_table_stats(tables[1], is_plat)


def gen_contest_to_points(
	seasons: Iterable[int], score_data: Optional[dict] = None
) -> dict:
	if score_data is None:
		score_data = {division: {} for division in DIVISIONS}
	for division in DIVISIONS:
		not_found = False
		for season in seasons:
			for contest_short, contest_long, offset in zip(
				CONTESTS_SHORT, CONTESTS_LONG, YEAR_OFFSETS
			):
				year = season + offset
				url = f"{DATA_PREFIX}{contest_short}{year}_{division.lower()}_results.html"
				full_contest = f"20{year} {contest_long}"
				try:
					score_data[division][full_contest] = problem_stats(url)
					logger.debug(f"Found: {division} {full_contest}")
				except urllib.error.HTTPError as e:  # contest not found
					if e.code == 404:
						logger.debug(f"Not Found: {division} {full_contest}")
						not_found = True
						break
					raise e
			if not_found:
				break
	return score_data


def add_div_to_probs(div_to_probs: dict, url: str, newFormat: bool):
	logger.debug(url)
	soup = parse(url).find("div", class_="panel")
	contest = ""

	def get_division(x: str) -> str:
		for division in DIVISIONS:
			if x.endswith(division):
				return division
		raise ValueError("No division found")

	found_problem = False

	def process_child(child):
		nonlocal contest, found_problem
		if child.name == "h2":
			contest = child.text.strip()
		if (
			child.name == "div"
			and child.has_attr("class")
			and child["class"] == ["panel", "historypanel"]
		):
			title = child.find("b").text
			res = [y["href"] for y in child.find_all("a")]
			ID = res[0][res[0].rfind("=") + 1 :]

			def strip_contest(word: str):
				if newFormat:
					# Input: USACO 2026 First Contest, Platinum
					# Output: 2026 First Contest

					word = word[len("USACO ") :]
					word = word.split(",")[0]  # remove ", Platinum"
					return word
				else:
					# Input: USACO 2022 December Contest, Platinum
					# Output: 2022 December

					word = word[len("USACO ") :]
					ind = word.rfind(" Contest")
					if ind == -1:
						return word[:4] + " US Open"
					return word[:ind]

			div_to_probs[get_division(contest)].append(
				[ID, strip_contest(contest), title]
			)
			found_problem = True

	for child in soup.children:
		process_child(child)
	if not found_problem:
		raise ValueError("found no problems")


def gen_div_to_probs(
	seasons: Iterable[int], div_to_probs: Optional[dict] = None
) -> dict:
	if div_to_probs is None:
		div_to_probs = {division: [] for division in DIVISIONS}
	for season in seasons:
		if season >= 26:
			for index in range(4):
				url = f"{INDEX_PREFIX}season{season}contest{index+1}results"

				try:
					add_div_to_probs(div_to_probs, url, True)
				except ValueError:
					break
		else:
			for contest, offset in zip(CONTESTS_SHORT, YEAR_OFFSETS):
				url = f"{INDEX_PREFIX}{contest}{season+offset}results"

				try:
					add_div_to_probs(div_to_probs, url, False)
				except ValueError:
					break
	for division in DIVISIONS:
		div_to_probs[division] = sorted(
			[*set([tuple(x) for x in div_to_probs[division]])], key=lambda x: int(x[0])
		)
	return div_to_probs


def add_extra_problems(extra_problems: dict, url: str, newFormat: bool):
	logger.debug(url)
	soup = parse(url).find("div", class_="panel")
	contest = ""

	def get_division(x: str) -> str:
		for division in DIVISIONS:
			if x.endswith(division):
				return division
		raise ValueError("No division found")

	found_problem = False

	def process_child(child):
		nonlocal contest, found_problem
		if child.name == "h2":
			contest = child.text.strip()
		if (
			child.name == "div"
			and child.has_attr("class")
			and child["class"] == ["panel", "historypanel"]
		):
			title = child.find("b").text
			res = [y["href"] for y in child.find_all("a")]
			ID = res[0][res[0].rfind("=") + 1 :]

			def strip_contest(word: str):
				if newFormat:
					# Input: USACO 2026 First Contest, Platinum
					# Output: 2026 First Contest

					word = word[len("USACO ") :]
					word = word.split(",")[0]  # remove ", Platinum"
					return word
				else:
					# Input: USACO 2022 December Contest, Platinum
					# Output: 2022 December

					word = word[len("USACO ") :]
					ind = word.rfind(" Contest")
					if ind == -1:
						return word[:4] + " US Open"
					return word[:ind]

			extra_problems["EXTRA_PROBLEMS"].append(
				{
					"uniqueId": "usaco-" + ID,
					"name": title,
					"url": "https://usaco.org/index.php?page=viewproblem2&cpid=" + ID,
					"source": get_division(contest),
					"difficulty": "N/A",
					"isStarred": False,
					"tags": [],
					"solutionMetadata": {"kind": "USACO", "usacoId": ID},
				},
			)
			found_problem = True

	for child in soup.children:
		process_child(child)
	if not found_problem:
		raise ValueError("found no problems")


def gen_extra_problems(
	seasons: Iterable[int], extra_problems: Optional[dict] = None
) -> dict:
	if extra_problems is None:
		extra_problems = {"MODULE_ID": "EXTRA_PROBLEMS", "EXTRA_PROBLEMS": []}
	for season in seasons:
		if season >= 26:
			for index in range(4):
				url = f"{INDEX_PREFIX}season{season}contest{index+1}results"

				try:
					add_extra_problems(extra_problems, url, True)
				except ValueError:
					break
		else:
			for contest, offset in zip(CONTESTS_SHORT, YEAR_OFFSETS):
				url = f"{INDEX_PREFIX}{contest}{season+offset}results"

				try:
					add_extra_problems(extra_problems, url, False)
				except ValueError:
					break
	return extra_problems


def add_id_to_sol(id_to_sol: dict, url: str):
	soup = parse(url)
	for x in soup.find_all("div", ["panel historypanel"]):
		res = [y["href"] for y in x.find_all("a")]
		problem_id = res[0][res[0].rfind("=") + 1 :]
		id_to_sol[problem_id] = res[-1][res[-1].rfind("sol_") :]


def gen_id_to_sol(seasons: Iterable[int], id_to_sol: Optional[dict] = None) -> dict:
	if id_to_sol is None:
		id_to_sol = {}
	for season in seasons:
		for contest, offset in zip(CONTESTS_SHORT, YEAR_OFFSETS):
			add_id_to_sol(id_to_sol, f"{INDEX_PREFIX}{contest}{season + offset}results")
	return id_to_sol


parser = argparse.ArgumentParser()
parser.add_argument("--start_season", "-s", type=int, default=26)
parser.add_argument("--end_season", "-e", type=int, default=26)
parser.add_argument("--inplace", "-i", type=int, default=1)

args = parser.parse_args()
seasons = list(range(args.start_season, args.end_season + 1))
logger.info(f"seasons = {seasons}")

# Get the directory path of the currently executing script, and set it at cwd
current_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_dir)

for filename, func in {
	f"../div_to_probs.json": gen_div_to_probs,
	f"../../../../../../content/extraProblems.json": gen_extra_problems,  # crazy path lol
}.items():
	init = None

	if args.inplace:
		with open(filename, "r") as file:
			init = json.load(file)

	d = func(seasons, init)

	if args.inplace:
		with open(filename, "w") as file:
			json.dump(d, file, indent=2)
	else:
		print(json.dumps(d, indent=2))

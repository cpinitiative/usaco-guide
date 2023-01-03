# Monthly Contest Table Generation

For updating https://usaco.guide/general/usaco-monthlies after a USACO contest.

## Files

- `id_to_sol.ts`: USACO problem ID -> solution URL
- `div_to_probs.ts`: USACO division -> list[problem id, contest, problem name]
- `contest_to_points.ts`: For each problem in a contest, the proportion of test
  cases passed by all promoters for Bronze - Gold, or the top 10 US pre-college
  contestants for Platinum. Note that recent contests only have this info for
  Gold and Platinum.

## Requirements

Python 3. `pip install -r requirements.txt`.

## Usage

From repo root:

```
conda activate USACO
cd src/components/markdown/ProblemsList/DivisionList/scripts/
python update.py
```

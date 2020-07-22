const sources = {
  AC: 'https://atcoder.jp/',
  CC: 'https://www.codechef.com/problems/',
  CSA: 'https://csacademy.com/contest/archive/task/',
  DMOJ: 'https://dmoj.ca/problem/',
  SPOJ: 'https://www.spoj.com/problems/',
  YS: 'https://judge.yosupo.jp/problem/',
  CF: 'https://codeforces.com/',
  Bronze: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  Silver: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  Gold: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  'Old Bronze': 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  'Old Silver': 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  'Old Gold': 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  Plat: 'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
  Kattis: 'https://open.kattis.com/problems/',
  CSES: 'https://cses.fi/problemset/task/',
  LC: 'https://leetcode.com/problems/',
  ojuz: 'https://oj.uz/problem/view/',
  HR: 'https://www.hackerrank.com/',
};

export class Problem {
  public url: string;
  public difficulty:
    | 'Very Easy'
    | 'Easy'
    | 'Normal'
    | 'Hard'
    | 'Very Hard'
    | 'Insane';
  public isIntro: boolean;
  public sketch: string | null = null;
  public solution: string | null = null;

  get uniqueID() {
    return this.url;
  }

  constructor(
    public source: string,
    public name: string,
    public id: string,
    labels?:
      | 'Very Easy'
      | 'Easy'
      | 'Normal'
      | 'Hard'
      | 'Very Hard'
      | 'Insane'
      | 'Intro|Very Easy'
      | 'Intro|Easy'
      | 'Intro|Normal'
      | 'Intro|Hard'
      | 'Intro|Very Hard'
      | 'Intro|Insane',
    public starred?: boolean,
    public tags?: string[],
    sol?: string
  ) {
    if (/^[a-zA-z\-0-9]+$/.test(sol)) {
      this.solution = sol;
    } else {
      this.sketch = sol;
    }
    this.isIntro = labels && labels.includes('Intro|');
    if (labels) labels = labels.replace('Intro|', '') as any;
    this.difficulty = labels as any;
    if (!id.startsWith('http')) {
      if (source in sources) {
        this.url = sources[source] + id;
      } else
        throw `URL ${id} is not valid. Did you make a typo in the problem source (${source}), or in the URL? Problem name: ${name}`;
    } else this.url = id;
  }
}

export type ProblemProgress =
  | 'Not Attempted'
  | 'Solving'
  | 'Solved'
  | 'Skipped'
  | 'Ignored';

let options = ['Not Attempted', 'Solving', 'Solved', 'Skipped', 'Ignored'];

let NEXT_PROBLEM_STATUS: { [key in ProblemProgress]?: ProblemProgress } = {};
let PREV_PROBLEM_STATUS: { [key in ProblemProgress]?: ProblemProgress } = {};
for (let i = 0; i < options.length; i++) {
  NEXT_PROBLEM_STATUS[options[i]] = options[(i + 1) % options.length];
  PREV_PROBLEM_STATUS[options[i]] =
    options[(i - 1 + options.length) % options.length];
}

export { NEXT_PROBLEM_STATUS, PREV_PROBLEM_STATUS };

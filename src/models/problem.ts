const contests = {
  CCC: ['DMOJ', 'Canadian Computing Competition'],
  CCO: ['DMOJ', 'Canadian Computing Olympiad'],
  APIO: ['oj.uz', 'Asia-Pacific Informatics Olympiad'],
  'Baltic OI': ['oj.uz', 'Baltic Olympiad in Informatics'],
  CEOI: ['oj.uz', 'Central European Olympiad in Informatics'],
  COCI: ['oj.uz', 'Croatian Open Contest in Informatics'],
  IOI: ['oj.uz', 'International Olympiad in Informatics'],
  IZhO: ['oj.uz', 'International Zhautykov Olympiad'],
  JOI: ['oj.uz', 'Japanese Olympiad in Informatics'],
  LMiO: ['oj.uz', 'Lithuanian Olympiad in Informatics'],
  RMI: ['oj.uz', 'Romanian Master of Informatics'],
  'NOI.sg': ['oj.uz', 'Singapore National Olympiad in Informatics'],
};

const probSources = {
  'Old Bronze': [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO Platinum did not exist prior to 2015-16.',
  ],
  'Old Gold': [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO Platinum did not exist prior to 2015-16.',
  ],
  'Old Silver': [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO Platinum did not exist prior to 2015-16.',
  ],
  Bronze: [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO 2015-16 to present',
  ],
  Silver: [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO 2015-16 to present',
  ],
  Gold: [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO 2015-16 to present',
  ],
  Plat: [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO 2015-16 to present',
  ],
  AC: [
    'https://atcoder.jp/',
    'AtCoder',
    'The editorial tab should be second from the right.',
  ],
  CC: ['https://www.codechef.com/problems/', 'CodeChef'],
  CF: [
    'https://codeforces.com/contest/',
    'CodeForces',
    'Check contest materials, located to the right of the problem statement.',
  ],
  CSA: [
    'https://csacademy.com/contest/archive/task/',
    'CS Academy',
    'The editorial tab should be right next to the statement tab.',
  ],
  CSES: [
    'https://cses.fi/problemset/task/',
    'Code Submission Evaluation System (includes CPH problemset)',
  ],
  DMOJ: ['https://dmoj.ca/problem/', 'Don Mills Online Judge'],
  HR: ['https://www.hackerrank.com/', 'HackerRank'],
  InfoArena: ['https://infoarena.ro/', ''],
  Kattis: ['https://open.kattis.com/problems/', 'open.kattis.com'],
  LC: ['https://leetcode.com/problems/', 'LeetCode'],
  POI: [
    'https://szkopul.edu.pl/problemset/problem/',
    'Polish Olympiad in Informatics',
  ],
  SPOJ: ['https://www.spoj.com/problems/', 'Sphere Online Judge'],
  TLX: [
    'https://tlx.toki.id/',
    'tlx.toki.id',
    'The editorial should be available in the announcements tab.',
  ],
  'oj.uz': ['https://oj.uz/problem/view/', ''],
  YS: ['https://judge.yosupo.jp/problem/', 'Library Checker'],
};

// if (sol == '' && problem.source == 'HE') {
//   sol = '@Check HE';
//   hover = 'The editorial tab should be right next to the problem tab.';
// }

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
  public des: string = '';
  public hover: string = '';

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
    sol?: string,
    public solQuality: 'bad' | 'ok' | 'good' = 'ok'
  ) {
    if (!sol && source in probSources && probSources[source].length == 3) {
      sol = '@Check ' + source;
      this.hover = probSources[source][2];
    }
    if (
      sol !== undefined &&
      (sol.startsWith('http') ||
        /^[a-zA-Z\-0-9]+$/.test(sol) ||
        sol.startsWith('@'))
    ) {
      this.solution = sol;
    } else {
      this.sketch = sol;
    }
    this.isIntro = labels && labels.includes('Intro|');
    if (labels) labels = labels.replace('Intro|', '') as any;
    this.difficulty = labels as any;
    this.url = id;
    // console.log(this.url)
    if (source in probSources) {
      if (!this.url.startsWith('http')) {
        if (
          source == 'CF' &&
          (this.url.startsWith('problemset') || this.url.startsWith('contest'))
        )
          this.url = 'http://codeforces.com/' + this.url;
        else this.url = probSources[source][0] + this.url;
      }
      this.des = probSources[source][1];
    } else if (source in contests) {
      if (!this.url.startsWith('http'))
        this.url = probSources[contests[source][0]][0] + this.url;
      this.des = contests[source][1];
    } else {
      if (!this.url.startsWith('http'))
        throw `URL ${id} is not valid. Did you make a typo in the problem source (${source}), or in the URL? Problem name: ${name}`;
    }
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

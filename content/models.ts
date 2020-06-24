const sources = {
  "CC": "https://www.codechef.com/problems/",
  "CSA": "https://csacademy.com/contest/archive/task/",
  "DMOJ": "https://dmoj.ca/problem/",
  "SPOJ": "https://www.spoj.com/problems/",
  "YS": "https://judge.yosupo.jp/problem/",
  "CF": "https://codeforces.com/",
  "USACO": "http://www.usaco.org/index.php?page=viewproblem2&cpid=",
  "Kattis": "https://open.kattis.com/problems/",
  "CSES": "https://cses.fi/problemset/task/",
};

export class Problem {
  public url: string;

  constructor(
    public source: string,
    public name: string,
    public id: string,
    public starred?: boolean,
    public difficulty?: 'Intro' | 'Easy' | 'Normal' | 'Hard' | 'Very Hard',
    public tags?: string[],
    public sketch?: string,
  ) {
    if (source in sources) {
      this.url = sources[source] + id;
    } else {
      if (!id.startsWith("http")) {
        throw "URL of problem not valid. Did you make a typo in the problem source, or in the URL?"
      }
      this.url = id;
    }
  }
}

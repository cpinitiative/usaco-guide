import * as React from "react";

export class Problem {
  constructor(
    public name: string,
    public url: string,
    public starred?: boolean,
    public difficulty?: 'Intro' | 'Easy' | 'Normal' | 'Hard' | 'Very Hard',
    public source?: string,
    public tags?: string[],
    public sketch?: string
  ) {}
}

export namespace Problem {
  export class CSES extends Problem {
    constructor(
      public name: string,
      public id: string,
      public starred?: boolean,
      public difficulty?: 'Intro' | 'Easy' | 'Normal' | 'Hard' | 'Very Hard',
      public tags?: string[],
      public sketch?: string
    ) {
      super(name, `https://cses.fi/problemset/task/${id}`, starred, difficulty, "CSES", tags, sketch);
    }
  }
  export class USACO extends Problem {
    constructor(
      public name: string,
      public id: string,
      public starred?: boolean,
      public difficulty?: 'Intro' | 'Easy' | 'Normal' | 'Hard' | 'Very Hard',
      public tags?: string[],
      public sketch?: string
    ) {
      super(name, `http://www.usaco.org/index.php?page=viewproblem2&cpid=${id}`, starred, difficulty, "USACO", tags, sketch);
    }
  }
}
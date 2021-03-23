import PGS from '../components/markdown/PGS';
import id_to_sol from '../components/markdown/ProblemsList/id_to_sol';
import { books } from '../utils/books';

const contests = {
  CCC: ['DMOJ', 'Canadian Computing Competition'],
  CCO: ['DMOJ', 'Canadian Computing Olympiad'],
  APIO: ['oj.uz', 'Asia-Pacific Informatics Olympiad'],
  'Baltic OI': ['oj.uz', 'Baltic Olympiad in Informatics'],
  CEOI: ['oj.uz', 'Central European Olympiad in Informatics'],
  COI: ['oj.uz', 'Croatian Olympiad in Informatics'],
  COCI: ['oj.uz', 'Croatian Open Contest in Informatics'],
  IOI: ['oj.uz', 'International Olympiad in Informatics'],
  IZhO: ['oj.uz', 'International Zhautykov Olympiad'],
  JOI: ['oj.uz', 'Japanese Olympiad in Informatics'],
  LMiO: ['oj.uz', 'Lithuanian Olympiad in Informatics'],
  RMI: ['oj.uz', 'Romanian Master of Informatics'],
  'NOI.sg': ['oj.uz', 'Singapore National Olympiad in Informatics'],
};

export const probSources = {
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
    'The editorial button is right next to the problem title. If "there is no editorial yet," check the "Overall Editorial" PDF below.',
  ],
  CC: [
    'https://www.codechef.com/problems/',
    'CodeChef',
    'There should be a link to the editorial at the bottom of the page.',
  ],
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
  DMOJ: [
    'https://dmoj.ca/problem/',
    'DMOJ: Modern Online Judge',
    'There might be a "Read Editorial" button on the right side of the page.',
  ],
  FHC: [
    'https://www.facebook.com/codingcompetitions/hacker-cup/',
    'Facebook Hacker Cup',
    'There should be a "Solutions" tab on the left side of the page.',
  ],
  HR: [
    'https://www.hackerrank.com/',
    'HackerRank',
    'The editorial tab should be right next to the discussions tab.',
  ],
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

export type ProblemInfo = {
  /**
   * Unique ID of the problem. For convenience, this is equivalent to the URL of the problem.
   * However, if we ever change the URL of the problem (in case the first URL breaks), do NOT
   * modify uniqueID. Keep it the same as the old URL.
   */
  uniqueId: string;
  name: string;
  url: string;
  /**
   * Source of the problem. More information about some problem sources can be found in the probSources map.
   */
  source: string;
  difficulty: ProblemDifficulty;
  /**
   * In the context of a module, true if the problem is starred. False otherwise.
   */
  isStarred: boolean;
  tags: string[];
  solution: ProblemSolutionInfo;
};

export type ProblemSolutionInfo =
  | {
      kind: 'internal';
      // The URL for internal solutions are well defined: /problems/[problem-slug]/solution
    }
  | {
      kind: 'link';
      /**
       * Ex: External Sol or CPH 5.3
       */
      label: string;
      url: string;
    }
  | {
      /*
 If the label is just text. Used for certain sources like CodeForces
 Ex:
  - label = Check CF
  - labelTooltip = "Check content materials, located to the right of the problem statement
 */
      kind: 'label';
      label: string;
      labelTooltip: string | null;
    }
  | {
      /*
Not recommended -- use internal solutions instead.
Used if there's a super short solution sketch that's not a full editorial.
Latex *is* allowed with the new implementation of problems.
*/
      kind: 'sketch';
      sketch: string;
    }
  | null; // null if there's no solution for this problem

export type ProblemMetadata = Omit<ProblemInfo, 'solution'> & {
  solutionMetadata:
    | {
        // auto generate problem solution label based off of the given site
        // For sites like CodeForces: "Check contest materials, located to the right of the problem statement."
        kind: 'autogen-label-from-site';
        // The site to generate it from. Sometimes this may differ from the source; for example, Codeforces could be the site while Baltic OI could be the source if Codeforces was hosting a Baltic OI problem.
        site: string;
      }
    | {
        // internal solution
        kind: 'internal';
      }
    | {
        // URL solution
        // Use this for links to PDF solutions, etc
        kind: 'link';
        url: string;
      }
    | {
        // Competitive Programming Handbook
        // Ex: 5.3 or something
        kind: 'CPH';
        section: string;
      }
    | {
        // USACO solution, generates it based off of the USACO problem ID
        // ex. 1113 is mapped to sol_prob1_gold_feb21.html
        kind: 'USACO';
        usacoId: number;
      }
    | {
        // IOI solution, generates it based off of the year
        // ex. Maps year = 2001 to https://ioinformatics.org/page/ioi-2001/27
        kind: 'IOI';
        year: number;
      }
    | {
        // no solution exists
        kind: 'none';
      }
    | {
        // for focus problems, when the solution is presented in the module of the problem
        kind: 'in-module';
      }
    | {
        kind: 'sketch';
        sketch: string;
      };
};

// legacy code follows

type ProblemSolution = {
  kind: 'internal' | 'link' | 'text' | 'sketch';

  /**
   * The URL of the problem solution. Defined for kind = "internal" and kind = "link"
   */
  url?: string;

  /**
   * The label of the problem solution, defined for kind = "link" and kind = "text"
   */
  label?: string;

  /**
   * A tooltip to show in addition to the label, sometimes defined
   */
  labelTooltip?: string | null;

  /**
   * Defined for kind = "sketch"
   */
  sketch?: string;
};

const isUsaco = source => {
  // console.log("IS USACO",source)
  const posi = ['Bronze', 'Silver', 'Gold', 'Plat'];
  for (let ind = 0; ind < posi.length; ++ind) {
    if (source.includes(posi[ind])) return true;
  }
  if (source.startsWith('20')) {
    const posi = ['December', 'January', 'February', 'US Open'];
    for (let ind = 0; ind < posi.length; ++ind) {
      if (source.endsWith(posi[ind])) return true;
    }
  }
  return false;
};
const isExternal = link => {
  return link.startsWith('http');
};
const isInternal = link => {
  return /^[a-zA-Z\-0-9]+$/.test(link);
};

export class Problem {
  public url: string;
  public solution: ProblemSolution | null = null;
  public hover: string = '';
  public tooltipHoverDescription: string | null;
  public solutionMetadata: any;

  get uniqueID() {
    let id;
    if (
      ['Bronze', 'Silver', 'Gold', 'Plat'].some(
        x => this.source.indexOf(x) !== -1
      )
    ) {
      // is usaco
      id = `usaco-${this.id}`;
    } else if (this.source === 'CSES') {
      id = `cses-${this.id}`;
    } else if (this.source === 'CF') {
      let num = this.id.match(/([0-9]+)/g)[0];
      let char = this.id[this.id.length - 1];
      if (this.id.indexOf('gym') !== -1) {
        id = `cfgym-${num}${char}`;
      } else {
        id = `cf-${num}${char}`;
      }
    } else {
      const camelCase = x => {
        if (x.match(/^[0-9]{4}/) !== null) {
          return `${x[2]}${x[3]}-${camelCase(x.substring(7))}`;
        }
        x = x.replace(/[^\w\s]/g, '');
        let str = x.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
          return word.toUpperCase();
        });
        if (str.split(' ').length === 1) {
          return str.toLowerCase();
        } else {
          return str.replace(/\s+/g, '');
        }
      };
      if (this.source === 'Baltic OI') {
        id = `baltic-${camelCase(this.name)}`;
      } else if (this.source === 'Balkan OI') {
        id = `balkan-${camelCase(this.name)}`;
      } else {
        id = `${camelCase(this.source)}-${camelCase(this.name)}`;
      }
    }
    let extra = '';
    if (this.solutionMetadata?.kind === 'internal') {
      if (this.solID !== id) {
        extra += '   [Current Sol ID: ' + this.solID + ']';
      }
    }
    console.log(`${id}${extra}`);
    // console.log(this.source, id);
    return id;
  }

  private autoGenerateInfoFromSource() {
    if (!(this.source in probSources) && isUsaco(this.source)) {
      this.url = probSources['Bronze'][0] + this.url;
      return;
    }
    if (this.source in probSources) {
      if (!this.url.startsWith('http')) {
        if (
          this.source == 'CF' &&
          (this.url.startsWith('problemset') ||
            this.url.startsWith('contest') ||
            this.url.startsWith('gym') ||
            this.url.startsWith('edu'))
        )
          this.url = 'https://codeforces.com/' + this.url;
        else this.url = probSources[this.source][0] + this.url;
      }
      this.tooltipHoverDescription = probSources[this.source][1];
    } else if (this.source in contests) {
      if (!this.url.startsWith('http'))
        this.url = probSources[contests[this.source][0]][0] + this.url;
      this.tooltipHoverDescription = contests[this.source][1];
    } else {
      if (!this.url.startsWith('http'))
        throw `URL ${this.id} is not valid. Did you make a typo in the problem source (${this.source}), or in the URL? Problem name: ${this.name}`;
      if (this.source.indexOf('@') != -1) {
        const ind = this.source.indexOf('@');
        this.tooltipHoverDescription = this.source.substring(
          ind + 1,
          this.source.length
        );
        this.source = this.source.substring(0, ind);
      }
    }
  }

  private tryAutoGeneratingSolution() {
    let autoGeneratedSolURL = null;
    // console.log("AUTO GENERATE WITH ID",this.id)
    if (isUsaco(this.source) && this.id in id_to_sol) {
      autoGeneratedSolURL =
        `http://www.usaco.org/current/data/` + id_to_sol[this.id];
      this.solutionMetadata = {
        kind: 'USACO',
        usacoId: this.id,
      };
      // console.log("GENERATED",autoGeneratedSolURL);
    } else if (this.source == 'IOI') {
      for (let i = 1994; i <= 2017; ++i) {
        let des = i.toString();
        if (this.name.indexOf(des) != -1) {
          let num = i - 1994 + 20;
          autoGeneratedSolURL =
            `https://ioinformatics.org/page/ioi-${i}/` + num.toString();
          this.solutionMetadata = {
            kind: 'IOI',
            usacoId: i,
          };
          break;
        }
      }
      if (autoGeneratedSolURL === null) {
        for (let i = 1994; i <= 2017; ++i) {
          let des = (i % 100).toString();
          if (des.length == 1) des = '0' + des;
          if (this.name.indexOf(des) != -1) {
            let num = i - 1994 + 20;
            autoGeneratedSolURL =
              `https://ioinformatics.org/page/ioi-${i}/` + num.toString();
            this.solutionMetadata = {
              kind: 'IOI',
              usacoId: i,
            };
            break;
          }
        }
      }
    }
    // console.log("HA",this.source,autoGeneratedSolURL)
    if (autoGeneratedSolURL !== null) {
      this.solution = {
        kind: 'link',
        url: autoGeneratedSolURL,
        label: 'External Sol',
      };
    } else {
      if (this.source in probSources && probSources[this.source].length == 3) {
        this.solution = {
          kind: 'text',
          label: 'Check ' + this.source,
          labelTooltip: probSources[this.source][2],
        };
        this.solutionMetadata = {
          kind: 'autogen-label-from-site',
          site: this.source,
        };
      } else {
        // this isn't necessary -- can just use hasOwnProperty instead of in
        for (let source in probSources)
          if (
            probSources[source].length == 3 &&
            this.url.startsWith(probSources[source][0])
          ) {
            this.solution = {
              kind: 'text',
              label: 'Check ' + source,
              labelTooltip: probSources[source][2],
            };
            this.solutionMetadata = {
              kind: 'autogen-label-from-site',
              site: source,
            };
            break;
          }
      }
    }
  }

  constructor(
    public source: string,
    public name: string,
    public id: string,
    public difficulty?: ProblemDifficulty | null,
    public starred?: boolean,
    public tags?: string[],
    public solID?: string,
    public solQuality: 'bad' | 'ok' | 'good' = 'ok',
    public fraction?: number,
    public moduleLink?: string
  ) {
    this.url = id;

    this.autoGenerateInfoFromSource();
    solID = solID || '';
    // console.log("WHOOPS",solID);
    // if (solID.startsWith('/')) {
    //   this.solution = {
    //     kind: 'link',
    //     url: `${solID}`,
    //     label: 'Link',
    //   };
    // }
    if (isInternal(solID)) {
      this.solution = {
        kind: 'internal',
        url: `/solutions/${solID}`,
      };
      this.solutionMetadata = {
        kind: 'internal',
      };
    } else if (isExternal(solID)) {
      this.solution = {
        kind: 'link',
        url: solID,
        label: 'External Sol',
      };
      this.solutionMetadata = {
        kind: 'link',
        url: solID,
      };
    } else if (solID.startsWith('@CPH')) {
      const getSec = (dictKey, book, sec) => {
        let url = book;
        if (sec[sec.length - 1] == ',') sec = sec.substring(0, sec.length - 1);
        if (!/^\d.*$/.test(sec)) return url;
        if (!(sec in PGS[dictKey]))
          throw `Could not find section ${sec} in source ${dictKey}`;
        url += '#page=' + PGS[dictKey][sec];
        return url;
      };
      let source = 'CPH';
      let cphUrl = getSec(source, books[source][0], solID.substring(5));
      this.solution = {
        kind: 'link',
        label: solID.substring(1),
        url: cphUrl,
      };
      this.solutionMetadata = {
        kind: 'CPH',
        section: solID.substring(5),
      };
    } else if (solID.startsWith('@')) {
      let solMsg = null;
      if (solID == '@@') {
        // empty solution
        this.solutionMetadata = {
          kind: 'none',
        };
      } else if (solID == '@B') {
        solMsg = 'Below'; // solution later in module
        this.solutionMetadata = {
          kind: 'in-module',
        };
      } else {
        this.solutionMetadata = {
          kind: 'in-module',
        };
        solMsg = solID.substring(1); // custom message
      }
      if (solMsg) {
        this.solutionMetadata = {
          kind: 'in-module',
        };
        this.solution = {
          kind: 'text',
          label: solMsg,
        };
      }
    } else {
      this.tryAutoGeneratingSolution();
      // console.log(this.solution);
      if (solID && !this.solution) {
        this.solutionMetadata = {
          kind: 'sketch',
          sketch: solID,
        };
        // only try sketch if all else fails
        this.solution = {
          kind: 'sketch',
          sketch: solID,
        };
      }
    }
  }
}

export type ProblemProgress =
  | 'Not Attempted'
  | 'Solving'
  | 'Solved'
  | 'Reviewing'
  | 'Skipped'
  | 'Ignored';

export const PROBLEM_PROGRESS_OPTIONS: ProblemProgress[] = [
  'Not Attempted',
  'Solving',
  'Solved',
  'Reviewing',
  'Skipped',
  'Ignored',
];

export type ProblemDifficulty =
  | 'Very Easy'
  | 'Easy'
  | 'Normal'
  | 'Hard'
  | 'Very Hard'
  | 'Insane';
export const PROBLEM_DIFFICULTY_OPTIONS: ProblemDifficulty[] = [
  'Very Easy',
  'Easy',
  'Normal',
  'Hard',
  'Very Hard',
  'Insane',
];

export type ProblemFeedback = {
  difficulty: ProblemDifficulty | null;
  tags: string[];
  solutionCode: string;
  isCodePublic: boolean;
  otherFeedback: string;
};

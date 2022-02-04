import { slug } from 'github-slugger';
import * as defaultOrdering from '../../content/ordering';
import PGS from '../components/markdown/PGS';
import id_to_sol from '../components/markdown/ProblemsList/DivisionList/id_to_sol';
import { books } from '../utils/books';
export const contests = {
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
  'Old Bronze': [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO Platinum did not exist prior to 2015-16.',
  ],
  'Old Silver': [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO Platinum did not exist prior to 2015-16.',
  ],
  'Old Gold': [
    'http://www.usaco.org/index.php?page=viewproblem2&cpid=',
    'USACO Platinum did not exist prior to 2015-16.',
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
   * Unique ID of the problem. See Content Documentation.md for more info
   */
  uniqueId: string;
  name: string;
  url: string;
  /**
   * Source of the problem. More information about some problem sources can be found in the probSources and the contests map.
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

export type AlgoliaProblemInfo = Omit<ProblemInfo, 'uniqueId'> & {
  objectID: string;
  problemModules: {
    id: string;
    title: string;
  }[];
};

export type ProblemMetadata = Omit<ProblemInfo, 'solution'> & {
  solutionMetadata: ProblemSolutionMetadata;
};

export type ProblemSolutionMetadata =
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
      usacoId: string;
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
      moduleId: string;
    }
  | {
      /**
       * @deprecated
       */
      kind: 'sketch';
      sketch: string;
    };

// Checks if a given source is USACO
export const isUsaco = (source: string): boolean => {
  const posi = ['Bronze', 'Silver', 'Gold', 'Plat'];
  for (let ind = 0; ind < posi.length; ++ind) {
    if (source.includes(posi[ind])) return true;
  }
  if (source.startsWith('20')) {
    // I think this is for the division list -- the source in this case is like 2015 December or something
    const posi = ['December', 'January', 'February', 'US Open'];
    for (let ind = 0; ind < posi.length; ++ind) {
      if (source.endsWith(posi[ind])) return true;
    }
  }
  return false;
};

// throws if it detects invalid USACO Metadata
// TODO: add more checks?
export function checkInvalidUsacoMetadata(metadata: ProblemMetadata) {
  if (!isUsaco(metadata.source)) return;
  const id = metadata.uniqueId.substring(metadata.uniqueId.indexOf('-') + 1);
  if (!metadata.url.endsWith('=' + id)) {
    throw Error(`Invalid USACO Metadata: id=${id} url=${metadata.url}`);
  }
  if (metadata.solutionMetadata.kind == 'USACO') {
    if (metadata.solutionMetadata.usacoId !== id) {
      throw Error(
        `Invalid USACO Metadata: id=${id} solutionMetadata.usacoId=${metadata.solutionMetadata.usacoId}`
      );
    }
  } else if (
    !['internal', 'in-module'].includes(metadata.solutionMetadata.kind)
  ) {
    throw new Error(
      `Invalid USACO Metadata: id=${id} metadata.solutionMetadata.kind=${metadata.solutionMetadata.kind}`
    );
  }
}

export function getProblemURL(
  problem: Pick<ProblemInfo, 'source' | 'name' | 'uniqueId'> & {
    [x: string]: any;
  }
): string {
  // USACO and CSES sometimes have duplicate problem names
  // so we should add the ID to the URL
  return `/problems/${
    isUsaco(problem.source) || problem.source === 'CSES'
      ? problem.uniqueId
      : slug(problem.source)
  }-${slug(problem.name.replace(' - ', ''))}`;
}

/**
 * Retrieves the code from USACO or CSES URL's (finds trailing numbers).
 * Ex: https://cses.fi/problemset/task/1652 yields 1652
 */
const getTrailingCodeFromProblemURL = (url: string): number => {
  const match = url.match(/([0-9]+)\/?$/);
  if (match === null) {
    throw new Error('Could not extract USACO / CSES code from URL.');
  }
  return parseInt(match[1]);
};

export const getProblemInfo = (
  metadata: ProblemMetadata,
  ordering?: any
): ProblemInfo => {
  // don't cache the ordering import, to make sure it gets re-fetched each time
  if (!ordering) {
    ordering = defaultOrdering;
  }
  const { solutionMetadata, ...info } = metadata;

  if (
    !info.source ||
    !info.uniqueId ||
    info.isStarred === null ||
    info.isStarred === undefined ||
    !info.name ||
    !info.url
  ) {
    console.error("problem metadata isn't valid", metadata);
    throw new Error('Bad problem metadata');
  }

  let sol: ProblemSolutionInfo;
  if (solutionMetadata.kind === 'autogen-label-from-site') {
    const site = solutionMetadata.site;
    if (!probSources.hasOwnProperty(site) || probSources[site].length !== 3) {
      console.error(metadata);
      throw new Error(
        "Couldn't autogenerate solution label from problem site " + site
      );
    }
    sol = {
      kind: 'label',
      label: 'Check ' + site,
      labelTooltip: probSources[site][2],
    };
  } else if (solutionMetadata.kind === 'internal') {
    sol = {
      kind: 'internal',
    };
  } else if (solutionMetadata.kind === 'link') {
    sol = {
      kind: 'link',
      url: solutionMetadata.url,
      label: 'External Sol',
    };
  } else if (solutionMetadata.kind === 'CPH') {
    const getSec = (dictKey, book, sec) => {
      let url = book;
      if (sec[sec.length - 1] == ',') sec = sec.substring(0, sec.length - 1);
      if (!/^\d.*$/.test(sec)) return url;
      if (!(sec in PGS[dictKey])) {
        throw `Could not find section ${sec} in source ${dictKey}`;
      }
      url += '#page=' + PGS[dictKey][sec];
      return url;
    };
    const source = 'CPH';
    const cphUrl = getSec(source, books[source][0], solutionMetadata.section);
    sol = {
      kind: 'link',
      label: 'CPH ' + solutionMetadata.section,
      url: cphUrl,
    };
  } else if (solutionMetadata.kind === 'USACO') {
    if (!id_to_sol.hasOwnProperty(solutionMetadata.usacoId)) {
      throw new Error(
        "Couldn't find a corresponding USACO external solution for USACO problem ID " +
          solutionMetadata.usacoId
      );
    }
    sol = {
      kind: 'link',
      label: 'External Sol',
      url:
        `http://www.usaco.org/current/data/` +
        id_to_sol[solutionMetadata.usacoId],
    };
  } else if (solutionMetadata.kind === 'IOI') {
    const year = solutionMetadata.year;
    const num = year - 1994 + 20;
    sol = {
      kind: 'link',
      label: 'External Sol',
      url: `https://ioinformatics.org/page/ioi-${year}/` + num.toString(),
    };
  } else if (solutionMetadata.kind === 'none') {
    sol = null;
  } else if (solutionMetadata.kind === 'in-module') {
    if (!(solutionMetadata.moduleId in ordering.moduleIDToSectionMap)) {
      throw new Error(
        `Problem ${metadata.uniqueId} - solution in nonexistent module: ${solutionMetadata.moduleId}`
      );
    }
    sol = {
      kind: 'link',
      label: 'In Module',
      url: `https://usaco.guide/${
        ordering.moduleIDToSectionMap[solutionMetadata.moduleId]
      }/${solutionMetadata.moduleId}#problem-${info.uniqueId}`,
    };
  } else if (solutionMetadata.kind === 'sketch') {
    sol = {
      kind: 'sketch',
      sketch: solutionMetadata.sketch,
    };
  } else {
    throw new Error(
      'Unknown solution metadata ' + JSON.stringify(solutionMetadata)
    );
  }

  return {
    ...info,
    solution: sol,
  };
};

/*
 * Warning: not all IDs will follow this convention. You should not assume
 * that the unique ID for a problem will necessarily be what this function
 * outputs; the user can manually change the problem ID.
 */
export function generateProblemUniqueId(
  source: string,
  name: string,
  url: string
): string {
  if (isUsaco(source)) {
    return `usaco-${getTrailingCodeFromProblemURL(url)}`;
  } else if (source === 'CSES') {
    return `cses-${getTrailingCodeFromProblemURL(url)}`;
  } else if (source === 'CF') {
    const num = url.match(/([0-9]+)/g)[0];
    const char = url.match(/\/([A-z0-9]+)$/)[1];
    if (url.indexOf('gym') !== -1) {
      return `cfgym-${num}${char}`;
    } else {
      return `cf-${num}${char}`;
    }
  } else {
    const camelCase = x => {
      // In case it's something like 2018 - Problem Name
      if (x.match(/^[0-9]{4}/) !== null) {
        return `${x[2]}${x[3]}-${camelCase(x.substring(7))}`;
      }
      // remove whitespace
      x = x.replace(/[^\w\s]/g, '');
      // camel case everything (first word uppercase)
      const str = x.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return word.toUpperCase();
      });
      if (str.split(' ').length === 1) {
        // special case: if there's only one word, it should be lowercase
        return str.toLowerCase();
      } else {
        return str.replace(/\s+/g, '');
      }
    };
    if (source === 'Baltic OI') {
      return `baltic-${camelCase(name)}`;
    } else if (source === 'Balkan OI') {
      return `balkan-${camelCase(name)}`;
    } else {
      return `${camelCase(source)}-${camelCase(name)}`;
    }
  }
}

export function autoGenerateSolutionMetadata(
  source: string,
  name: string,
  url: string
): ProblemSolutionMetadata | null {
  if (isUsaco(source)) {
    return {
      kind: 'USACO',
      usacoId: '' + getTrailingCodeFromProblemURL(url),
    };
  } else if (source == 'IOI') {
    for (let i = 1994; i <= 2089; ++i) {
      const des = i.toString();
      let des2 = (i % 100).toString();
      if (des2.length == 1) des2 = '0' + des2;
      if (name.indexOf(des) !== -1 || name.indexOf(des2) !== -1) {
        return {
          kind: 'IOI',
          year: i,
        };
      }
    }
    return null;
  } else if (
    probSources.hasOwnProperty(source) &&
    probSources[source].length === 3
  ) {
    return {
      kind: 'autogen-label-from-site',
      site: source,
    };
  }
  return null;
}

// legacy code follows

export type ProblemSolution = {
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

const isExternal = link => {
  return link.startsWith('http');
};
const isInternal = link => {
  return /^[a-zA-Z\-0-9]+$/.test(link);
};

export class Problem {
  public url: string;
  public solution: ProblemSolution | null = null;
  public hover = '';
  public tooltipHoverDescription: string | null;
  public solutionMetadata: any;

  get uniqueID(): string {
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
    } else if (this.source === 'Kattis' && !this.id.startsWith('http')) {
      id = `kattis-${this.id}`;
    } else if (this.source === 'CF') {
      const num = this.id.match(/([0-9]+)/g)[0];
      const char = this.id.match(/\/([A-z0-9]+)$/)[1];
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
        const str = x.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
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
        ) {
          this.url = 'https://codeforces.com/' + this.url;
        } else this.url = probSources[this.source][0] + this.url;
      }
      this.tooltipHoverDescription = probSources[this.source][1];
    } else if (this.source in contests) {
      if (!this.url.startsWith('http')) {
        this.url = probSources[contests[this.source][0]][0] + this.url;
      }
      this.tooltipHoverDescription = contests[this.source][1];
    } else {
      if (!this.url.startsWith('http')) {
        throw `URL ${this.id} is not valid. Did you make a typo in the problem source (${this.source}), or in the URL? Problem name: ${this.name}`;
      }
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
        const des = i.toString();
        if (this.name.indexOf(des) != -1) {
          const num = i - 1994 + 20;
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
            const num = i - 1994 + 20;
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
        for (const source in probSources) {
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
    this.starred = this.starred ?? false;

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
        if (!(sec in PGS[dictKey])) {
          throw `Could not find section ${sec} in source ${dictKey}`;
        }
        url += '#page=' + PGS[dictKey][sec];
        return url;
      };
      const source = 'CPH';
      const cphUrl = getSec(source, books[source][0], solID.substring(5));
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

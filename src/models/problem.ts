import { slug } from 'github-slugger';
import * as defaultOrdering from '../../content/ordering';
import PGS from '../components/markdown/PGS';
import id_to_sol from '../components/markdown/ProblemsList/DivisionList/id_to_sol.json';
import { books } from '../utils/books';

export const recentUsaco = ['Bronze', 'Silver', 'Gold', 'Plat'];

// abbreviation -> [URL, description or full name, instructions to view solutions]
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
    'Codeforces',
    'Check contest materials, located to the right of the problem statement.',
  ],
  'CF EDU': ['https://codeforces.com/edu/courses', 'Codeforces EDU'],
  'CF Gym': ['https://codeforces.com/gyms', 'Codeforces Gym'],
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
  YS: ['https://judge.yosupo.jp/problem/', 'Library Checker'],
};

// olympiads on DMOJ and oj.uz
// abbreviation -> [OJ, full name]
export const olympiads = {
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

export type ProblemInfo = {
  /**
   * Unique ID of the problem. See Content Documentation.md for more info
   */
  uniqueId: string;
  name: string;
  url: string;
  /**
   * Source of the problem. More information about some problem sources can be found in the probSources and the olympiads map.
   */
  source: string;
  sourceDescription?: string;
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
      hasHints?: boolean;
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
If the label is just text. Used for certain sources like Codeforces
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
      // For sites like Codeforces: "Check contest materials, located to the right of the problem statement."
      kind: 'autogen-label-from-site';
      // The site to generate it from. Sometimes this may differ from the source; for example, Codeforces could be the site while Baltic OI could be the source if Codeforces was hosting a Baltic OI problem.
      site: string;
    }
  | {
      // internal solution
      kind: 'internal';
      hasHints?: boolean;
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
  if (recentUsaco.some(x => source.includes(x))) return true;
  if (source.startsWith('20')) {
    // this is for the division list -- the source in this case is like 2015 December or something
    if (
      ['December', 'January', 'February', 'US Open'].some(x =>
        source.endsWith(x)
      )
    ) {
      return true;
    }
  }
  return false;
};

// throws if it detects invalid USACO Metadata
// TODO: add more checks?
export function checkInvalidUsacoMetadata(metadata: ProblemMetadata) {
  if (!isUsaco(metadata.source)) return;
  if (metadata.url.startsWith('http://poj.org/')) return;
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
  // eslint-disable-next-line prefer-const
  let { solutionMetadata, ...info } = metadata;

  if (
    !info.source ||
    !info.uniqueId ||
    info.isStarred === null ||
    info.isStarred === undefined ||
    !info.name ||
    !info.url.startsWith('http')
  ) {
    console.error("problem metadata isn't valid", metadata);
    throw new Error('Bad problem metadata');
  }

  let sol: ProblemSolutionInfo;
  if (solutionMetadata.kind === 'none') {
    // for sites such as CF or AtCoder, automatically generate metadata even if solution is set to none
    const autogenerated = autoGenerateSolutionMetadata(
      info.source,
      info.name,
      info.url
    );
    if (autogenerated !== null) solutionMetadata = autogenerated;
  }
  if (solutionMetadata.kind === 'autogen-label-from-site') {
    const site = solutionMetadata.site;
    const key = site as keyof typeof probSources;
    if (!probSources.hasOwnProperty(site) || probSources[key].length !== 3) {
      // https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
      console.error(metadata);
      throw new Error(
        "Couldn't autogenerate solution label from problem site " + site
      );
    }
    sol = {
      kind: 'label',
      label: 'Check ' + site,
      labelTooltip: probSources[key][2],
    };
  } else if (solutionMetadata.kind === 'internal') {
    sol = {
      kind: 'internal',
      ...(solutionMetadata.hasHints && { hasHints: solutionMetadata.hasHints }),
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

/* Condensed version of ProblemInfo only used for user solution page generation
 gatsby-node's problem query doesn't retrieve all the attributes of ProblemInfo,
 these are just the attributes required for the user solutions pages that it does retrieve
*/
export type ShortProblemInfo = {
  uniqueId: string;
  name: string;
};

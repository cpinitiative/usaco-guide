import * as React from 'react';
import { useUserLangSetting } from '../../context/UserDataContext/properties/simpleProperties';
import { ResourceInfo } from '../../models/resource';
import { books } from '../../utils/books';
import { ListTable } from './ListTable/ListTable';
import PGS from './PGS';
import ResourcesListItem from './ResourcesListItem';

export function ResourcesList({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <ListTable
      header={
        <>
          <tr>
            <th
              colSpan={6}
              className={`border-b border-gray-200 bg-purple-50 px-4 py-3 text-left text-sm font-medium text-purple-500 uppercase sm:px-6 dark:border-transparent dark:bg-purple-700/25 dark:text-purple-200`}
            >
              Resources{title ? `: ${title}` : ''}
            </th>
          </tr>
        </>
      }
    >
      {children}
    </ListTable>
  );
}

const moduleSources = {
  AryanshS: [
    'https://sendtoaryansh.gitbook.io/informatics-notes/',
    'sendtoaryansh.gitbook.io',
  ],
  AoPS: ['http://aops.com/', 'Art of Problem Solving'],
  Benq: [
    'https://github.com/bqi343/USACO/blob/master/Implementations/content/',
    'github.com/bqi343/USACO',
  ],
  Errichto: [
    'https://www.youtube.com/c/Errichto/about',
    'youtube.com/c/Errichto/about',
  ],
  CSA: ['https://csacademy.com/lesson/', 'CS Academy'],
  CF: ['https://codeforces.com/blog/entry/', 'Codeforces'],
  'CF EDU': [
    'https://codeforces.com/edu/courses',
    'Codeforces Edu (enroll to view)',
  ],
  HE: ['https://hackerearth.com/', 'HackerEarth'],
  KA: ['https://www.khanacademy.org/', 'KhanAcademy'],
  TC: [
    'https://www.topcoder.com/community/competitive-programming/tutorials/',
    'TopCoder',
  ],
  'cp-algo': ['https://cp-algorithms.com/', 'CP Algorithms'],
  USACO: ['http://www.usaco.org/', 'USACO'],
  SO: ['https://stackoverflow.com/', 'StackOverflow'],
  GFG: ['https://www.geeksforgeeks.org/', 'Geeks For Geeks'],
  CPC: [
    'https://github.com/SuprDewd/T-414-AFLV/tree/master/',
    'Competitive Programming Course (taught at Reykjavík University, Iceland)',
  ],
  GCC: ['https://gcc.gnu.org/onlinedocs/gcc/', 'GNU Compiler Collection'],
  CPP: ['http://www.cplusplus.com/reference/algorithm/', 'cplusplus.com'],
  CPPR: ['https://en.cppreference.com/w/cpp/language/', 'en.cppreference.com'],
  LCPP: ['https://www.learncpp.com/cpp-tutorial/', 'learncpp.com'],
};

export function Resource({
  source,
  sourceDescription,
  url,
  starred,
  title,
  children,
}: {
  source?: string;
  sourceDescription?: string;
  url?: string;
  starred?: boolean;
  title?: string;
  children?: React.ReactNode;
}): JSX.Element {
  const lang = useUserLangSetting();
  source = source ?? '';
  sourceDescription = sourceDescription ?? '';
  if (source in books) {
    sourceDescription = books[source][1];
    if (!url) {
      // auto-gen page #
      const getSec = (dictKey, book, title) => {
        const parts = title.split(' ');
        let url = book;
        let sec = parts[0];
        if (sec[sec.length - 1] == ',') sec = sec.substring(0, sec.length - 1);
        if (!/^\d.*$/.test(sec)) return url;
        if (!(sec in PGS[dictKey])) {
          throw `Could not find section ${sec} in source ${dictKey} (title ${title})`;
        }
        url += '#page=' + PGS[dictKey][sec];
        return url;
      };
      if (source === 'IUSACO') {
        if (lang === 'java') {
          url = getSec(
            'JAVA',
            'https://darrenyao.com/usacobook/java.pdf',
            title
          );
        } else {
          url = getSec('CPP', 'https://darrenyao.com/usacobook/cpp.pdf', title);
        }
      } else if (source in PGS) {
        url = getSec(source, books[source][0], title);
      } else url = books[source][0];
    }
  } else if (source in moduleSources) {
    if (!url?.startsWith('http')) url = moduleSources[source][0] + url;
    sourceDescription = moduleSources[source][1];
  } else {
    if (!url?.startsWith('http')) {
      throw `URL ${url} is not valid. Did you make a typo in the source (${source}), or in the URL? Resource name: ${title}`;
    }
  }
  const resource: ResourceInfo = {
    source,
    sourceDescription,
    url,
    starred,
    title,
    children,
  };
  return <ResourcesListItem resource={resource} />;
}

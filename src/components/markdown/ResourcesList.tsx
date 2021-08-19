import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { ResourceInfo } from '../../models/resource';
import { books } from '../../utils/books';
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
    <div className="-mx-4 sm:-mx-6 md:mx-0">
      <div className="flex flex-col mb-4">
        <div className={`overflow-x-auto md:-mx-4 md:px-4 -my-2 py-2`}>
          <div
            className={`align-middle inline-block min-w-full shadow overflow-hidden md:rounded-lg border-b border-gray-200 dark:border-transparent`}
          >
            <table className="min-w-full no-markdown">
              <thead>
                <tr>
                  <th
                    colSpan={5}
                    className={`px-4 sm:px-6 border-b text-left font-medium text-sm uppercase py-3 border-gray-200 dark:border-transparent bg-purple-50 text-purple-500 dark:bg-purple-700 dark:bg-opacity-25 dark:text-purple-200`}
                  >
                    Resources{title ? `: ${title}` : ''}
                  </th>
                </tr>
              </thead>
              <tbody className="table-alternating-stripes">{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const moduleSources = {
  AryanshS: [
    'https://sendtoaryansh.gitbook.io/informatics-notes/',
    'sendtoaryansh.gitbook.io',
  ],
  Benq: [
    'https://github.com/bqi343/USACO/blob/master/Implementations/content/',
    'github.com/bqi343/USACO',
  ],
  Errichto: [
    'https://www.youtube.com/c/Errichto/about',
    'youtube.com/c/Errichto/about',
  ],
  CSA: ['https://csacademy.com/lesson/', 'CS Academy'],
  CF: ['https://codeforces.com/blog/entry/', 'CodeForces'],
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
  url,
  starred,
  title,
  children,
}: {
  source?: string;
  url?: string;
  starred?: boolean;
  title?: string;
  children?: React.ReactNode;
}): JSX.Element {
  const userSettings = useContext(UserDataContext);
  source = source ?? '';
  let sourceDescription = '';
  if (source in books) {
    // must be book
    // if (!(source in books))
    //   throw `No URL. Did you make a typo in the source (${source})? Resource title: ${props.title}`;
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
        if (userSettings.lang === 'java') {
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
    if (!url.startsWith('http')) url = moduleSources[source][0] + url;
    sourceDescription = moduleSources[source][1];
  } else {
    if (!url.startsWith('http')) {
      throw `URL ${url} is not valid. Did you make a typo in the source (${source}), or in the URL? Resource name: ${title}`;
    }
    if (source.indexOf('@') != -1) {
      const ind = source.indexOf('@');
      sourceDescription = source.substring(ind + 1, source.length);
      source = source.substring(0, ind);
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

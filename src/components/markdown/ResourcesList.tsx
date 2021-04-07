import * as React from 'react';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { books } from '../../utils/books';
import TextTooltip from '../Tooltip/TextTooltip';
import Tooltip from '../Tooltip/Tooltip';
import PGS from './PGS';

export function ResourcesList(props) {
  return (
    <div className="-mx-4 sm:-mx-6 md:mx-0">
      <div className="flex flex-col mb-4">
        <div className={`overflow-x-auto md:-mx-4 md:px-4 -my-2 py-2`}>
          <div
            className={`align-middle inline-block min-w-full shadow overflow-hidden md:rounded-lg dark:bg-gray-900 border-b border-gray-200 dark:border-transparent`}
          >
            <table className="min-w-full">
              <thead>
                <tr>
                  <th
                    colSpan={4}
                    className={`px-4 sm:px-6 border-b text-left font-medium text-sm uppercase py-3 border-gray-200 dark:border-purple-800 bg-purple-50 text-purple-500 dark:bg-purple-900 dark:text-purple-200`}
                  >
                    Resources{props.title ? `: ${props.title}` : ''}
                  </th>
                </tr>
              </thead>
              <tbody className="table-alternating-stripes">
                {props.children}
              </tbody>
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

export function Resource(props) {
  const userSettings = useContext(UserDataContext);
  let source = props.source ? props.source : '';
  let url = props.url;
  let des = '';
  if (source in books) {
    // must be book
    // if (!(source in books))
    //   throw `No URL. Did you make a typo in the source (${source})? Resource title: ${props.title}`;
    des = books[source][1];
    if (!url) {
      // auto-gen page #
      const getSec = (dictKey, book, title) => {
        const parts = title.split(' ');
        let url = book;
        let sec = parts[0];
        if (sec[sec.length - 1] == ',') sec = sec.substring(0, sec.length - 1);
        if (!/^\d.*$/.test(sec)) return url;
        if (!(sec in PGS[dictKey]))
          throw `Could not find section ${sec} in source ${dictKey} (title ${title})`;
        url += '#page=' + PGS[dictKey][sec];
        return url;
      };
      if (source === 'IUSACO') {
        if (userSettings.lang === 'java') {
          url = getSec(
            'JAVA',
            'https://darrenyao.com/usacobook/java.pdf',
            props.title
          );
        } else {
          url = getSec(
            'CPP',
            'https://darrenyao.com/usacobook/cpp.pdf',
            props.title
          );
        }
      } else if (source in PGS) {
        url = getSec(source, books[source][0], props.title);
      } else url = books[source][0];
    }
  } else if (source in moduleSources) {
    if (!url.startsWith('http')) url = moduleSources[source][0] + url;
    des = moduleSources[source][1];
  } else {
    if (!url.startsWith('http'))
      throw `URL ${url} is not valid. Did you make a typo in the source (${source}), or in the URL? Resource name: ${props.title}`;
    if (source.indexOf('@') != -1) {
      const ind = source.indexOf('@');
      des = source.substring(ind + 1, source.length);
      source = source.substring(0, ind);
    }
  }
  // if (!props.children) throw `No resource description for source ${source} and title ${props.title}`
  return (
    <tr className="block sm:table-row">
      <td className="pl-4 sm:pl-6 pt-4 pb-1 sm:pb-4 whitespace-nowrap text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
        {source && (
          <>
            {des ? <TextTooltip content={des}>{source}</TextTooltip> : source}
          </>
        )}
      </td>
      <td
        className={`${
          props.source && 'pl-2 sm:pl-6'
        } pr-4 sm:pr-6 pt-4 pb-1 sm:pb-4 whitespace-nowrap text-sm leading-5 font-medium text-gray-900 dark:text-dark-high-emphasis`}
      >
        <div className="flex items-center">
          {props.starred && (
            <Tooltip content="You should read all starred resources (unless you already know it) before proceeding!">
              <svg
                className="h-4 w-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Tooltip>
          )}
          <a
            href={url}
            className={props.starred ? 'pl-1 sm:pl-2' : 'sm:pl-6'}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            {props.title}
          </a>
        </div>
      </td>
      <td className="block sm:table-cell sm:w-full px-4 sm:px-6 sm:pt-4 pb-4 text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
        {props.children}
      </td>
    </tr>
  );
}

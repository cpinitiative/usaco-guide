import * as React from 'react';
import Dots from '../Dots';
import Tooltip from '../tooltip/Tooltip';
import TextTooltip from '../tooltip/TextTooltip';
import { useContext } from 'react';
import UserSettingsContext from '../../context/UserSettingsContext';

export function ResourcesListComponent(props) {
  const embedded = props.embedded;
  return (
    <div className="flex flex-col">
      <div
        className={`overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 -my-2 py-2 ${
          embedded ? 'mb-2' : ''
        }`}
      >
        <div
          className={`align-middle inline-block min-w-full overflow-hidden shadow ${
            !embedded && 'rounded-lg border border-purple-400'
          }`}
        >
          <table className="min-w-full">
            <thead>
              <tr>
                <th
                  colSpan={4}
                  className={`px-6 border-b text-left font-medium uppercase ${
                    embedded
                      ? 'text-sm py-2 border-gray-200 bg-gray-50 text-gray-500'
                      : 'py-3 border-purple-200 bg-purple-50 text-purple-500'
                  }`}
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
  );
}
const books = {
  CPH: '/CPH.pdf',
  PAPS: 'https://www.csc.kth.se/~jsannemo/slask/main.pdf',
  CP1:
    'https://www.comp.nus.edu.sg/~stevenha/myteaching/competitive_programming/cp1.pdf',
};

const sources = {
  TC: 'https://www.topcoder.com/community/competitive-programming/tutorials/',
  CPC: 'https://github.com/SuprDewd/T-414-AFLV/tree/master/',
  CF: 'http://codeforces.com/',
  'cp-algo': 'https://cp-algorithms.com/',
  CSA: 'https://csacademy.com/lesson/',
  GFG: 'https://www.geeksforgeeks.org/',
  Benq: 'https://github.com/bqi343/USACO/blob/master/Implementations/content/',
  HR: 'https://www.hackerrank.com/',
  SO: 'https://stackoverflow.com/',
};

export const sourceTooltip = {
  CPH: "Book - Competitive Programmer's Handbook",
  PAPS: 'Book - Principles of Algorithmic Problem Solving',
  IUSACO: 'Book - An Introduction to the USA Computing Olympiad',
  CP1: 'Book - Competitive Programming 1',
  TC: 'TopCoder',
  CPC:
    'Competitive Programming Course (taught at Reykjavík University, Iceland)',
  CF: 'CodeForces',
  'cp-algo': 'CP Algorithms',
  CSA: 'CS Academy',
  GFG: 'Geeks For Geeks',
  Benq: 'github.com/bqi343/USACO',
  HR: 'HackerRank',
  CSES: 'Code Submission Evaluation System (includes CPH problemset)',
  HE: 'HackerEarth',
  AC: 'AtCoder',
  CC: 'CodeChef',
  DMOJ: 'Don Mills Online Judge',
  SPOJ: 'Sphere Online Judge',
  YS: 'Library Checker',
  LC: 'LeetCode',
  POI: 'Polish Olympiad in Informatics',
  SO: 'StackOverflow',
  'Old Bronze': 'USACO Platinum did not exist prior to 2015-16.',
  'Old Silver': 'USACO Platinum did not exist prior to 2015-16.',
  'Old Gold': 'USACO Platinum did not exist prior to 2015-16.',
};

export function ResourceComponent(props) {
  const userSettings = useContext(UserSettingsContext);

  const source = props.source;
  let url = props.url;
  if (!url) {
    if (source === 'IUSACO') {
      if (userSettings.primaryLang === 'java') {
        url = 'https://darrenyao.com/usacobook/java.pdf';
      } else {
        url = 'https://darrenyao.com/usacobook/cpp.pdf';
      }
    } else if (source in books) {
      url = books[source];
    } else
      throw `No URL. Did you make a typo in the source (${source})? Resource title: ${props.title}`;
  } else if (!url.startsWith('http')) {
    if (source in sources) {
      url = sources[source] + url;
    } else
      throw `URL ${url} is not valid. Did you make a typo in the source (${source}), or in the URL? Resource name: ${props.title}`;
  }
  return (
    <tr className="block sm:table-row">
      <td className="pl-6 pt-4 pb-1 sm:pb-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
        {props.source && (
          <>
            {sourceTooltip.hasOwnProperty(props.source) ? (
              <TextTooltip content={sourceTooltip[props.source]}>
                {props.source}
              </TextTooltip>
            ) : (
              props.source
            )}
          </>
        )}
      </td>
      <td
        className={`${
          props.source && 'pl-2 sm:pl-6'
        } pr-6 pt-4 pb-1 sm:pb-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900`}
      >
        <div className="flex items-center">
          {props.starred && (
            <Tooltip content="You should read all starred resources before proceeding!">
              <svg
                className="h-4 w-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </Tooltip>
          )}
          <a href={url} className={props.starred ? 'pl-1 sm:pl-2' : 'sm:pl-6'}>
            {props.title}
          </a>
        </div>
      </td>
      <td className="block sm:table-cell px-6 sm:pt-4 pb-4 text-sm leading-5 text-gray-500">
        {props.children}
      </td>
    </tr>
  );
}

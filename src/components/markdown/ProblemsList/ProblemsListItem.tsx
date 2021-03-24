import * as React from "react";
import { useContext, useRef } from 'react';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import ProblemStatusCheckbox from './ProblemStatusCheckbox';
import TextTooltip from '../../Tooltip/TextTooltip';
import Tooltip from '../../Tooltip/Tooltip';
import SubmitCodeButton from './SubmitCodeButton';
import { Instance } from 'tippy.js';
import Tippy from '@tippyjs/react';
import { navigate } from 'gatsby';
import { ProblemInfo, probSources } from '../../../models/problem';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import ProblemListItemSolution  from './ProblemListItemSolution';

type ProblemsListItemProps = {
  problem: ProblemInfo;
  showTagsAndDifficulty: boolean;
  onShowSolutionSketch: Function;
  // division?: string;
  // modules?: boolean;
  // showPercent?: boolean;
};

export const Anchor = styled.a`
  ${tw`text-blue-600 font-semibold`}

  .dark && {
    color: #a9c5ea;
  }
`;

// https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
const StyledProblemRow = styled.tr`
  ${({ isActive }) =>
  isActive
    ? css`
          background-color: #fdfdea !important;
          .dark && {
            background-color: #3c3c00 !important;
          }
        `
    : null}
`;

export const difficultyClasses = {
  'Very Easy': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
  Easy: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  Normal: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
  Hard: 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100',
  'Very Hard':
    'bg-orange-100 text-orange-800 dark:bg-orange-800 dark:text-orange-100',
  Insane: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
};

export default function ProblemsListItem(props: ProblemsListItemProps) {
  const { darkMode } = useContext(UserDataContext);
  const [isActive, setIsActive] = React.useState(false);
  const { problem } = props;
  const id = `problem-${problem.uniqueId}`;

  // const divisionTable = !!props.division;
  // let resultsUrl = '';
  // if (divisionTable) {
  //   const parts = problem.source.split(' ');
  //   parts[0] = parts[0].substring(2);
  //   if (parts[1] === 'US') parts[1] = 'open';
  //   else parts[1] = parts[1].toLowerCase().substring(0, 3);
  //   resultsUrl = `http://www.usaco.org/index.php?page=${parts[1]}${parts[0]}results`;
  //   // console.log('SOURCE', problem.source, resultsUrl);
  // }

  React.useEffect(() => {
    const hashHandler = (): void => {
      setIsActive(
        window && window.location && window.location.hash === '#' + id
      );
    };
    hashHandler();

    window.addEventListener('hashchange', hashHandler, false);
    return (): void =>
      window.removeEventListener('hashchange', hashHandler, false);
  }, []);

  const statusCol = (
    <td className="pl-4 whitespace-nowrap text-sm font-medium">
      <div
        style={{ height: '1.25rem' }}
        className="flex items-center justify-center"
      >
        <ProblemStatusCheckbox problem={problem} />
      </div>
    </td>
  );

  const sourceTooltip = probSources[problem.source]?.[2];
  // <Anchor
  //   href={resultsUrl}
  //   className={'truncate'}
  //   style={{ maxWidth: '15rem' }}
  //   target="_blank"
  //   rel="nofollow noopener noreferrer"
  // >
  //   {problem.source}
  // </Anchor>
  const sourceCol = (
    <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      {sourceTooltip ? (
        <TextTooltip content={sourceTooltip}>
          {problem.source}
        </TextTooltip>
      ) : (
        problem.source
      )}
    </td>
  );

  const nameCol = (
    <td className="pl-4 md:px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      <div className="flex items-center">
        {problem.isStarred && (
          <Tooltip content="We highly recommend you do all starred problems!">
            <svg
              className="h-4 w-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </Tooltip>
        )}
        <Anchor
          href={problem.url}
          className={
            (problem.isStarred ? 'pl-1 sm:pl-2' : 'sm:pl-6') + ' truncate'
          }
          style={{ maxWidth: '20rem' }}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {problem.name}
        </Anchor>
      </div>
    </td>
  );

  const difficultyCol = (
    <td className={`py-4 whitespace-nowrap leading-5 pr-4 md:pr-6`}>
      {problem.difficulty && (
        <span
          className={
            'px-2 inline-flex text-xs leading-5 font-semibold rounded-full ' +
            difficultyClasses[problem.difficulty]
          }
        >
          {problem.difficulty}
        </span>
      )}
    </td>
  );

  const [copied, setCopied] = React.useState(false);
  const tippyRef = useRef<Instance>();

  const more = (
    <div>
      <Tippy
        onCreate={tippy => (tippyRef.current = tippy)}
        content={
          <div className="-mx-2 text-left">
            <div>
              <ProblemListItemSolution
                problem={props.problem}
                onShowSolutionSketch={props.onShowSolutionSketch}
              />
              <button
                type="button"
                className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
                onClick={() => {
                  tippyRef.current.hide();
                  navigate('/problem-solutions/', {
                    state: {
                      problem,
                    },
                  });
                }}
              >
                View User Solutions
              </button>
              <button
                type="button"
                className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
                onClick={e => {
                  e.preventDefault();
                  setCopied(true);
                  navigator.clipboard.writeText(
                    window.location.href.split(/[?#]/)[0] +
                    '#problem-' +
                    problem.uniqueId
                  );
                }}
              >
                {copied ? 'Copied!' : 'Copy Permalink'}
              </button>
            </div>
          </div>
        }
        theme={darkMode ? 'dark' : 'light'}
        placement="bottom-end"
        arrow={true}
        animation="fade"
        trigger="click"
        interactive={true}
        onHidden={() => setCopied(false)}
      >
        <button className="focus:outline-none w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 dark:hover:text-gray-300">
          {/* Heroicon name: solid/dots-vertical */}
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </Tippy>
    </div>
  );

  return (
    <StyledProblemRow id={id} isActive={isActive}>
      {statusCol}
      {sourceCol}
      {nameCol}
      {/*{showTagsAndDifficulty &&*/}
      {/*(divisionTable*/}
      {/*  ? props.showPercent && (*/}
      {/*  <td className="pl-4 md:pl-6 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">*/}
      {/*    <UsacoTableProgress*/}
      {/*      division={props.division}*/}
      {/*      completed={problem.fraction}*/}
      {/*    />*/}
      {/*  </td>*/}
      {/*)*/}
      {/*  : difficultyCol)}*/}
      {difficultyCol}
      {props.showTagsAndDifficulty && (
        <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
          {problem.tags && problem.tags.length ? (
            <details className="text-gray-500 dark:text-dark-med-emphasis">
              <summary>Show Tags</summary>
              <p className="text-xs">{problem.tags.sort().join(', ')}</p>
            </details>
          ) : null}
        </td>
      )}
      {/*{props.modules && (*/}
      {/*  <ProblemSolutionCell*/}
      {/*    problem={props.problem}*/}
      {/*    modules*/}
      {/*    onShowSolution={props.onShowSolution}*/}
      {/*  />*/}
      {/*)}*/}
      <td className="text-center pr-2 md:pr-3">{more}</td>
    </StyledProblemRow>
  );
}
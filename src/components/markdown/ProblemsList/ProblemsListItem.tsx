import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { olympiads, ProblemInfo, probSources } from '../../../models/problem';
import { UsacoTableProgress } from '../../Dashboard/DashboardProgress';
import DifficultyBox from '../../DifficultyBox';
import TextTooltip from '../../Tooltip/TextTooltip';
import Tooltip from '../../Tooltip/Tooltip';
import { DivisionProblemInfo } from './DivisionList/DivisionProblemInfo';
import ProblemsListItemDropdown from './ProblemsListItemDropdown';
import ProblemStatusCheckbox from './ProblemStatusCheckbox';

export type ProblemsListItemProps = {
  showTags: boolean;
  showDifficulty: boolean;
  onShowSolutionSketch: (problem: ProblemInfo) => void;
  // modules?: boolean; // only if is division table
  showPercent?: boolean; // only if is division table
  // isDivisionTable?: boolean;
} & (
  | {
      isDivisionTable: false;
      problem: ProblemInfo;
    }
  | {
      isDivisionTable: true;
      problem: DivisionProblemInfo;
      modules: boolean;
    }
);

export const Anchor = styled.a`
  ${tw`text-blue-600 font-semibold`}

  .dark && {
    color: #a9c5ea;
  }
`;

// https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
const StyledProblemRow = styled.tr<{ isActive: boolean }>`
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

export default function ProblemsListItem(
  props: ProblemsListItemProps
): JSX.Element {
  const [isActive, setIsActive] = React.useState(false);
  const { isDivisionTable, problem } = props;
  const id = `problem-${problem.uniqueId}`;

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
  const sourceTooltip =
    isDivisionTable == false
      ? problem?.sourceDescription ||
        (probSources[problem.source as keyof typeof probSources]?.[1] ??
          olympiads[problem.source as keyof typeof olympiads]?.[1])
      : null;

  let resultsUrl = ''; // used only for division tables
  if (isDivisionTable) {
    const parts = problem.source.split(' ');
    parts[0] = parts[0].substring(2);
    if (parts[1] === 'US') parts[1] = 'open';
    else parts[1] = parts[1].toLowerCase().substring(0, 3);
    resultsUrl = `http://www.usaco.org/index.php?page=${parts[1]}${parts[0]}results`;
  }
  const sourceCol = isDivisionTable ? (
    <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      <Anchor
        href={resultsUrl}
        className={'truncate'}
        style={{ maxWidth: '15rem' }}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {problem.source}
      </Anchor>
    </td>
  ) : (
    <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      {sourceTooltip ? (
        <TextTooltip content={sourceTooltip}>{problem.source}</TextTooltip>
      ) : (
        problem.source
      )}
    </td>
  );

  const nameCol = (
    <td className="pl-4 md:px-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
      <div className="flex items-center">
        {isDivisionTable == false && problem.isStarred && (
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
            (isDivisionTable == false && problem.isStarred
              ? 'pl-1 sm:pl-2'
              : 'sm:pl-6') + ' truncate'
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
      <DifficultyBox difficulty={problem.difficulty} />
    </td>
  );

  return (
    <StyledProblemRow id={id} isActive={isActive}>
      {statusCol}
      {sourceCol}
      {nameCol}
      {props.showDifficulty &&
        (isDivisionTable
          ? props.showPercent && (
              <td className="pl-4 md:pl-6 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
                <UsacoTableProgress completed={problem.percentageSolved} />
              </td>
            )
          : difficultyCol)}
      <td className="pl-4 md:pl-6 py-4 whitespace-nowrap text-sm leading-5 font-medium">
        {problem.tags && problem.tags.length ? (
          <details
            open={props.showTags}
            className="text-gray-500 dark:text-dark-med-emphasis"
          >
            <summary>Show Tags</summary>
            <span className="text-xs">{problem.tags.sort().join(', ')}</span>
          </details>
        ) : null}
      </td>
      {isDivisionTable && props.modules && (
        <td className="pl-4 md:pl-6 pr-4 md:pr-6 py-4 whitespace-nowrap text-sm font-medium leading-none">
          {problem.moduleLink ? (
            <Anchor href={problem.moduleLink} target="_blank" className="pl-6">
              Link
            </Anchor>
          ) : (
            <Tooltip content={`This problem isn't in a module yet.`}>
              <span className="text-gray-300 dark:text-gray-600 pl-6">
                None
              </span>
            </Tooltip>
          )}
        </td>
      )}
      <td className="text-center pr-2 md:pr-3">
        <ProblemsListItemDropdown {...props} isFocusProblem={false} />
      </td>
    </StyledProblemRow>
  );
}

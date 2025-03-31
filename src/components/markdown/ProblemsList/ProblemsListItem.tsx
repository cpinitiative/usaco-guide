import React from 'react';
import { olympiads, ProblemInfo, probSources } from '../../../models/problem';
import { UsacoTableProgress } from '../../Dashboard/DashboardProgress';
import DifficultyBox from '../../DifficultyBox';
import TextTooltip from '../../Tooltip/TextTooltip';
import Tooltip from '../../Tooltip/Tooltip';
import ListTableRow, { ListTableCell } from '../ListTable/ListTableRow';
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

export default function ProblemsListItem(
  props: ProblemsListItemProps
): JSX.Element {
  const { isDivisionTable, problem } = props;
  const id = `problem-${problem.uniqueId}`;

  const statusCol = (
    <ListTableCell className="font-medium whitespace-nowrap">
      <div
        style={{ height: '1.25rem' }}
        className="flex items-center justify-center"
      >
        <ProblemStatusCheckbox problem={problem} />
      </div>
    </ListTableCell>
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
    <ListTableCell className="font-medium whitespace-nowrap">
      <a
        href={resultsUrl}
        className={'truncate'}
        style={{ maxWidth: '15rem' }}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        {problem.source}
      </a>
    </ListTableCell>
  ) : (
    <ListTableCell className="font-medium whitespace-nowrap">
      {sourceTooltip ? (
        <TextTooltip content={sourceTooltip}>{problem.source}</TextTooltip>
      ) : (
        problem.source
      )}
    </ListTableCell>
  );

  const nameCol = (
    <ListTableCell className="font-medium whitespace-nowrap">
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
        <a
          href={problem.url}
          className={
            (isDivisionTable == false && problem.isStarred
              ? 'pl-1 sm:pl-2'
              : 'sm:pl-6') + ' problem-list-item-anchor truncate'
          }
          style={{ maxWidth: '20rem' }}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {problem.name}
        </a>
      </div>
    </ListTableCell>
  );

  const difficultyCol = (
    <ListTableCell className="whitespace-nowrap">
      <DifficultyBox difficulty={problem.difficulty} />
    </ListTableCell>
  );

  return (
    <ListTableRow id={id}>
      {statusCol}
      {sourceCol}
      {nameCol}
      {props.showDifficulty &&
        (isDivisionTable
          ? props.showPercent && (
              <ListTableCell className="text-left text-xs leading-4 font-medium tracking-wider uppercase">
                <UsacoTableProgress completed={problem.percentageSolved} />
              </ListTableCell>
            )
          : difficultyCol)}
      <ListTableCell className="font-medium whitespace-nowrap">
        {problem.tags && problem.tags.length ? (
          <details
            open={props.showTags}
            className="dark:text-dark-med-emphasis text-gray-500"
          >
            <summary>Show Tags</summary>
            <span className="text-xs">{problem.tags.sort().join(', ')}</span>
          </details>
        ) : null}
      </ListTableCell>
      {isDivisionTable && props.modules && (
        <ListTableCell className="font-medium whitespace-nowrap">
          {problem.moduleLink ? (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a href={problem.moduleLink} target="_blank">
              Link
            </a>
          ) : (
            <Tooltip content={`This problem isn't in a module yet.`}>
              <span className="text-gray-300 dark:text-gray-600">None</span>
            </Tooltip>
          )}
        </ListTableCell>
      )}
      <td className="pr-2 text-center md:pr-3">
        <ProblemsListItemDropdown {...props} isFocusProblem={false} />
      </td>
    </ListTableRow>
  );
}

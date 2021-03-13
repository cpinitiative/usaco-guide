import { ModuleInfo, ModuleLinkInfo } from '../../models/module';
import { Frequency } from '../Frequency';
import { DashboardProgressSmall } from '../Dashboard/DashboardProgress';
import MarkCompleteButton from './MarkCompleteButton';
import * as React from 'react';
// import { SolutionInfo } from '../../models/solution';
import { SECTION_LABELS } from '../../../content/ordering';
import { getProblemsProgressInfo } from '../../utils/getProgressInfo';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import { useContext } from 'react';
// import { timeAgoString } from '../Dashboard/ModuleLink';

// https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable

const renderPrerequisite = (prerequisite, moduleLinks: ModuleLinkInfo[]) => {
  if (prerequisite.startsWith('/')) {
    // solution
    let leading = prerequisite.split('#')[0];
    if (leading.startsWith('/')) {
      leading = leading.split('/')[2];
    }
    const moduleLink = moduleLinks.find(x => x.id === leading);
    if (moduleLink)
      return (
        <li key={prerequisite}>
          <a
            href={prerequisite}
            target="_blank"
            rel="noreferrer"
            className="underline text-black dark:text-blue-200"
          >
            {SECTION_LABELS[moduleLink.section]} - {moduleLink.title}
          </a>
        </li>
      );
  } else {
    const moduleLink = moduleLinks.find(x => x.id === prerequisite);
    if (moduleLink)
      return (
        <li key={prerequisite}>
          <a
            href={moduleLink.url}
            target="_blank"
            rel="noreferrer"
            className="underline text-black dark:text-blue-200"
          >
            {SECTION_LABELS[moduleLink.section]} - {moduleLink.title}
          </a>
        </li>
      );
  }
  return <li key={prerequisite}>{prerequisite}</li>;
};

export default function ModuleHeaders({
  problemIDs,
  moduleLinks,
}: {
  problemIDs: string[];
  moduleLinks: ModuleLinkInfo[];
}): JSX.Element {
  const {
    markdownLayoutInfo: markdownData,
    moduleProgress,
    handleCompletionChange,
    uniqueID,
    appearsIn,
  } = useContext(MarkdownLayoutContext);

  const problemsProgressInfo = getProblemsProgressInfo(problemIDs);
  let prereqs = [];
  if (markdownData instanceof ModuleInfo) {
    prereqs = markdownData.prerequisites || [];
  } else {
    for (const link of appearsIn) {
      prereqs.push(link + '#problem-' + uniqueID);
    }
  }
  // const { activeIDs } = useContext(MarkdownLayoutContext);

  return (
    <>
      {markdownData instanceof ModuleInfo && markdownData.frequency !== null && (
        <div className="px-0.5">
          <div className="sm:flex sm:items-center sm:justify-between mb-4 space-y-1 sm:space-y-0">
            <Frequency frequency={markdownData.frequency} />
            {problemIDs.length > 0 && (
              <DashboardProgressSmall
                {...problemsProgressInfo}
                total={problemIDs.length}
              />
            )}
          </div>
        </div>
      )}
      <div className="sm:flex sm:items-center sm:justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-high-emphasis sm:text-3xl">
            {markdownData.title}
          </h1>
          {markdownData.author && (
            <p className={`text-gray-500 dark:text-dark-med-emphasis`}>
              Author
              {markdownData.author.indexOf(',') !== -1 ? 's' : ''}:{' '}
              {markdownData.author}
            </p>
          )}
        </div>
        {markdownData instanceof ModuleInfo && (
          <div className="hidden lg:flex-shrink-0 lg:flex ml-4">
            <MarkCompleteButton
              state={moduleProgress}
              onChange={handleCompletionChange}
            />
          </div>
        )}
        {/* {markdownData instanceof ModuleInfo && 
          `Last Updated: ${time_ago(markdownData.gitAuthorTime)}`
        } */}
      </div>

      {prereqs.length > 0 && (
        <div className="rounded-md bg-blue-50 dark:bg-blue-900 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm leading-5 font-medium text-blue-800 dark:text-dark-high-emphasis">
                {markdownData instanceof ModuleInfo
                  ? 'Prerequisites'
                  : 'Appears In'}
              </h3>
              <div className="mt-2 text-sm leading-5 text-blue-800 dark:text-blue-200">
                <ul className="list-disc list-inside pl-3 space-y-1">
                  {prereqs.map(x => renderPrerequisite(x, moduleLinks))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {uniqueID && (
        <a
          href={uniqueID}
          target="_blank"
          rel="noreferrer"
          className="group block transition text-gray-600 hover:underline hover:text-blue-600 dark:text-dark-med-emphasis"
        >
          Problem Statement
          <svg
            className="w-4 h-5 mb-1 ml-1 inline-block text-gray-400 group-hover:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}

      {markdownData instanceof ModuleInfo && markdownData.description && (
        <p className="italic">{markdownData.description}</p>
      )}
    </>
  );
}

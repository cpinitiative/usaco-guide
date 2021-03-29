import {
  MarkdownLayoutSidebarModuleLinkInfo,
  ModuleInfo,
  ModuleLinkInfo,
} from '../../../models/module';
import { Frequency } from '../../Frequency';
import { DashboardProgressSmall } from '../../Dashboard/DashboardProgress';
import MarkCompleteButton from '../MarkCompleteButton';
import * as React from 'react';
// import { SolutionInfo } from '../../models/solution';
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
  SECTION_LABELS,
} from '../../../../content/ordering';
import { getProblemsProgressInfo } from '../../../utils/getProgressInfo';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useContext } from 'react';
import { useMarkdownProblems } from '../../../context/MarkdownProblemListsContext';
import { ProblemSolutionContext } from '../../../context/ProblemSolutionContext';
import ModuleHeadersLinkList from './ModuleHeadersLinkList';
// import { timeAgoString } from '../Dashboard/ModuleLink';

export default function ModuleHeaders({
  moduleLinks,
}: {
  moduleLinks: ModuleLinkInfo[];
}): JSX.Element {
  const {
    markdownLayoutInfo: markdownData,
    moduleProgress,
    handleCompletionChange,
  } = useContext(MarkdownLayoutContext);

  // this is for modules
  const problemIDs =
    markdownData instanceof ModuleInfo
      ? useMarkdownProblems().map(problem => problem.uniqueId)
      : [];
  const problemsProgressInfo = getProblemsProgressInfo(problemIDs);

  // this is for solutions
  const problemSolutionContext = useContext(ProblemSolutionContext);
  const problem = problemSolutionContext?.problem;

  // either prerequisites for modules or appears in for problems
  let moduleHeaderLinks: { label: string; url?: string }[] = null;
  if (markdownData instanceof ModuleInfo) {
    moduleHeaderLinks = (markdownData.prerequisites || []).map(prereq => {
      const moduleLink = moduleLinks.find(x => x.id === prereq);
      return moduleLink
        ? {
            label: `${SECTION_LABELS[moduleLink.section]} - ${
              moduleLink.title
            }`,
            url: moduleLink.url,
          }
        : {
            label: prereq,
          };
    });
  } else {
    // this is displayed within a problem solution
    if (!problemSolutionContext) {
      throw new Error(
        'ModuleHeader is being used to render a problem; ProblemSolutionContext must be defined'
      );
    }
    const modulesThatHaveProblem =
      problemSolutionContext.modulesThatHaveProblem;
    moduleHeaderLinks = modulesThatHaveProblem.map(module => {
      return {
        label: `${SECTION_LABELS[moduleIDToSectionMap[module.id]]} - ${
          module.title
        }`,
        url: `${moduleIDToURLMap[module.id]}#problem-${problem.uniqueId}`,
      };
    });
  }

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

      {moduleHeaderLinks?.length > 0 && (
        <ModuleHeadersLinkList
          title={
            markdownData instanceof ModuleInfo ? 'Prerequisites' : 'Appears In'
          }
          links={moduleHeaderLinks}
        />
      )}

      {problem && (
        <a
          href={problem.url}
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

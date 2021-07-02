import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import { Fragment, useContext } from 'react';
// import { SolutionInfo } from '../../models/solution';
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
  SECTION_LABELS,
} from '../../../../content/ordering';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useMarkdownProblems } from '../../../context/MarkdownProblemListsContext';
import { ProblemSolutionContext } from '../../../context/ProblemSolutionContext';
import {
  Language,
  LANGUAGE_LABELS,
} from '../../../context/UserDataContext/properties/userLang';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { ModuleInfo, ModuleLinkInfo } from '../../../models/module';
import { getProblemsProgressInfo } from '../../../utils/getProgressInfo';
import { DashboardProgressSmall } from '../../Dashboard/DashboardProgress';
import { Frequency } from '../../Frequency';
import MarkCompleteButton from '../MarkCompleteButton';
import getSuffix from '../TableOfContents/getSuffix';

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

  const { lang, setLang } = useContext(UserDataContext);

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
            <p className={`text-gray-500 dark:text-dark-med-emphasis mt-1`}>
              Author
              {markdownData.author.indexOf(',') !== -1 ? 's' : ''}:{' '}
              {markdownData.author}
            </p>
          )}
          {markdownData instanceof ModuleInfo && markdownData.contributors && (
            <p className={`text-gray-500 dark:text-dark-med-emphasis text-xs`}>
              Contributor
              {markdownData.contributors.indexOf(',') !== -1 ? 's' : ''}:{' '}
              {markdownData.contributors}
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

      {/*{moduleHeaderLinks?.length > 0 && (*/}
      {/*  <ModuleHeadersLinkList*/}
      {/*    title={*/}
      {/*      markdownData instanceof ModuleInfo ? 'Prerequisites' : 'Appears In'*/}
      {/*    }*/}
      {/*    links={moduleHeaderLinks}*/}
      {/*  />*/}
      {/*)}*/}

      {markdownData instanceof ModuleInfo && markdownData.description && (
        <p className="italic mb-4">{markdownData.description}</p>
      )}

      <div className="rounded-md bg-gray-50 dark:bg-gray-900 px-4 py-5 sm:p-6 mb-4">
        <div className="flex items-center justify-between">
          <Menu as="div" className="inline-block text-left relative">
            {({ open }) => (
              <>
                <div className="-mt-1">
                  <Menu.Button
                    className="inline-flex items-center w-full px-1 -mx-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-blue-500"
                    style={{ width: 'fit-content' }}
                  >
                    Language: {LANGUAGE_LABELS[lang]}
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-left absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      {['cpp', 'java', 'py'].map((lang: Language) => (
                        <Menu.Item key={lang}>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active
                                  ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                                  : 'text-gray-700 dark:text-gray-300',
                                'block px-4 py-2 text-sm focus:outline-none w-full text-left'
                              )}
                              onClick={() => setLang(lang)}
                            >
                              {LANGUAGE_LABELS[lang]}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>

          <Link
            to={`/editor?filepath=${getSuffix()}`}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 my-0 dark:text-gray-400 dark:hover:text-gray-100 group inline-flex items-center space-x-1.5"
          >
            <span>Edit This Page</span>
            <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
          </Link>
        </div>

        {moduleHeaderLinks?.length > 0 && (
          <div>
            <div className="h-4 sm:h-6" />
            <h3 className="text-sm leading-5 font-medium text-gray-800 my-0 dark:text-gray-200">
              Prerequisites
            </h3>
            <div className="text-sm leading-5 text-gray-700 mt-1 no-y-margin dark:text-gray-300">
              <ul className="list-disc list-inside pl-3 space-y-1">
                {moduleHeaderLinks.map(link => (
                  <li key={link.url ?? link.label}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-black dark:text-gray-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-black dark:text-gray-200">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {problem && (
          <div>
            <div className="h-4 sm:h-6" />
            <a
              href={problem.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-800 hover:text-gray-900 my-0 dark:text-gray-200 dark:hover:text-gray-100 group inline-flex items-center space-x-1.5"
            >
              <span>View Problem Statement</span>
              <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300" />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

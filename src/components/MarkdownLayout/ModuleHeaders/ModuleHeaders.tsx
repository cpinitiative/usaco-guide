import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import { Fragment, useContext } from 'react';
import {
  moduleIDToSectionMap,
  moduleIDToURLMap,
  SECTION_LABELS,
} from '../../../../content/ordering';
import { useMarkdownLayout } from '../../../context/MarkdownLayoutContext';
import { useMarkdownProblems } from '../../../context/MarkdownProblemListsContext';
import { ProblemSolutionContext } from '../../../context/ProblemSolutionContext';
import {
  LANGUAGE_LABELS,
  useSetUserLangSetting,
  useUserLangSetting,
} from '../../../context/UserDataContext/properties/simpleProperties';
import { ModuleInfo, ModuleLinkInfo } from '../../../models/module';
import { useProblemsProgressInfo } from '../../../utils/getProgressInfo';
import { ClientOnly } from '../../ClientOnly';
import { DashboardProgressSmall } from '../../Dashboard/DashboardProgress';
import { Frequency } from '../../Frequency';
import MarkCompleteButton from '../MarkCompleteButton';
import useSuffix from '../TableOfContents/useSuffix';

export default function ModuleHeaders({
  moduleLinks,
}: {
  moduleLinks: ModuleLinkInfo[];
}): JSX.Element {
  const {
    markdownLayoutInfo: markdownData,
    moduleProgress,
    handleCompletionChange,
  } = useMarkdownLayout();

  const lang = useUserLangSetting();
  const setLang = useSetUserLangSetting();
  let problemIDs = [] as string[];
  // this is for modules
  try {
    const markdownProblems = useMarkdownProblems();
    if (markdownData instanceof ModuleInfo) {
      problemIDs = markdownProblems.map(problem => problem.uniqueId);
    }
  } catch (e) {
    console.log(e);
  }
  const problemsProgressInfo = useProblemsProgressInfo(problemIDs);

  // this is for solutions
  const problemSolutionContext = useContext(ProblemSolutionContext);
  const problem = problemSolutionContext?.problem;

  // either prerequisites for modules or appears in for problems
  let moduleHeaderLinks: { label: string; url?: string }[];
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
        url: `${moduleIDToURLMap[module.id]}#problem-${problem!.uniqueId}`,
      };
    });
  }

  return (
    <ClientOnly>
      <>
        {markdownData instanceof ModuleInfo &&
          markdownData.frequency !== null && (
            <div className="px-0.5">
              <div className="mb-4 space-y-1 sm:flex sm:items-center sm:justify-between sm:space-y-0">
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
        <div className="mb-4 sm:flex sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="dark:text-dark-high-emphasis text-2xl font-bold text-gray-900 sm:text-3xl">
              {markdownData.title}
            </h1>
            {markdownData.author && (
              <p className={`dark:text-dark-med-emphasis mt-1 text-gray-500`}>
                Author
                {markdownData.author.indexOf(',') !== -1 ? 's' : ''}:{' '}
                {markdownData.author}
              </p>
            )}
            {markdownData.contributors && (
              <p
                className={`dark:text-dark-med-emphasis text-xs text-gray-500`}
              >
                Contributor
                {markdownData.contributors.indexOf(',') !== -1 ? 's' : ''}:{' '}
                {markdownData.contributors}
              </p>
            )}
          </div>
          {markdownData instanceof ModuleInfo && (
            <div className="ml-4 hidden lg:flex lg:shrink-0">
              <ClientOnly>
                <MarkCompleteButton
                  state={moduleProgress}
                  onChange={handleCompletionChange}
                />
              </ClientOnly>
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
          <p className="mb-4 italic">{markdownData.description}</p>
        )}

        <div className="mb-4 rounded-md bg-gray-50 px-4 py-5 sm:p-6 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <div className="-mt-1">
                    <MenuButton
                      className="-mx-1 inline-flex w-full items-center rounded-md px-1 text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-hidden dark:text-gray-200 dark:focus:ring-offset-gray-900"
                      style={{ width: 'fit-content' }}
                    >
                      Language: {LANGUAGE_LABELS[lang]}
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                      />
                    </MenuButton>
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
                    <MenuItems
                      static
                      className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden dark:bg-gray-800"
                    >
                      <div className="py-1">
                        {(['cpp', 'java', 'py'] as const).map(lang => (
                          <MenuItem key={lang}>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active
                                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-gray-100'
                                    : 'text-gray-700 dark:text-gray-300',
                                  'block w-full px-4 py-2 text-left text-sm focus:outline-hidden'
                                )}
                                onClick={() => setLang(lang)}
                              >
                                {LANGUAGE_LABELS[lang]}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Transition>
                </>
              )}
            </Menu>

            <Link
              to={`/editor?filepath=${useSuffix()}`}
              className="group my-0 inline-flex items-center space-x-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            >
              <span>Edit This Page</span>
              <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" />
            </Link>
          </div>

          {moduleHeaderLinks?.length > 0 && (
            <div>
              <div className="h-4 sm:h-6" />
              <h3 className="my-0 text-sm leading-5 font-medium text-gray-800 dark:text-gray-200">
                {markdownData instanceof ModuleInfo
                  ? 'Prerequisites'
                  : 'Appears In'}
              </h3>
              <div className="no-y-margin mt-1 text-sm leading-5 text-gray-700 dark:text-gray-300">
                <ul className="list-inside list-disc space-y-1 pl-3">
                  {moduleHeaderLinks.map(link => (
                    <li key={link.url ?? link.label}>
                      {link.url ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-black underline dark:text-gray-200"
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
                className="group my-0 inline-flex items-center space-x-1.5 text-sm font-medium text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
              >
                <span>View Problem Statement</span>
                <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300" />
              </a>
            </div>
          )}
        </div>
      </>
    </ClientOnly>
  );
}

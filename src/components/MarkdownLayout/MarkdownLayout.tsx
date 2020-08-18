import * as React from 'react';
import Transition from '../Transition';
import { useContext, useRef, useState } from 'react';
import {
  ModuleFrequency,
  ModuleInfo,
  ModuleLinkInfo,
} from '../../models/module';
import { graphql, Link, useStaticQuery } from 'gatsby';
import MODULE_ORDERING, { SECTION_LABELS } from '../../../content/ordering';
import ModuleFrequencyDots from './ModuleFrequencyDots';
import ContactUsSlideover from '../ContactUsSlideover/ContactUsSlideover';
import MarkCompleteButton from './MarkCompleteButton';
import ModuleConfetti from './ModuleConfetti';
import TextTooltip from '../Tooltip/TextTooltip';
import UserDataContext, { UserLang } from '../../context/UserDataContext';
import { SidebarNav } from './SidebarNav/SidebarNav';
import { graphqlToModuleLinks } from '../../utils/utils';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import TableOfContentsSidebar from './TableOfContents/TableOfContentsSidebar';
import TableOfContentsBlock from './TableOfContents/TableOfContentsBlock';
import Logo from '../Logo';
import { Frequency } from '../Frequency';
import { SolutionInfo } from '../../models/solution';

const Breadcrumbs = () => {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const module = moduleLayoutInfo.markdownLayoutInfo;
  if (module instanceof SolutionInfo) return null;
  return (
    <nav className="flex flex-wrap items-center text-sm leading-loose font-medium text-gray-500 dark:text-dark-med-emphasis">
      <Link
        to="/dashboard/"
        className="hover:text-gray-700 dark-hover:text-dark-high-emphasis transition duration-150 ease-in-out"
      >
        Home
      </Link>
      <svg
        className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <Link
        to={`/${module.section}/`}
        className="hover:text-gray-700 dark-hover:text-dark-high-emphasis transition duration-150 ease-in-out"
      >
        {SECTION_LABELS[module.section]}
      </Link>
      <svg
        className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
      <span className="whitespace-no-wrap">{module.title}</span>
    </nav>
  );
};

const SidebarBottomButtons = ({ onContactUs }) => {
  const languages = {
    showAll: 'All',
    cpp: 'C++',
    java: 'Java',
    py: 'Python',
  };
  const nextLang: { [key: string]: UserLang } = {
    showAll: 'cpp',
    cpp: 'java',
    java: 'py',
    py: 'cpp',
  };
  const userSettings = useContext(UserDataContext);
  return (
    <>
      <div className="flex-shrink-0 border-t border-gray-200 dark:border-gray-800 flex">
        <button
          className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-dark-med-emphasis dark-hover:text-dark-high-emphasis dark-focus:text-dark-high-emphasis dark-hover:bg-gray-900 dark-focus:bg-gray-900 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={() => userSettings.setLang(nextLang[userSettings.lang])}
        >
          <svg
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 dark:text-gray-500 dark-group-hover:text-gray-400 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Language: {languages[userSettings.lang]}
        </button>
      </div>
      <div className="flex-shrink-0 border-t border-gray-200 dark:border-gray-800 flex">
        <button
          className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 dark:text-dark-med-emphasis dark-hover:text-dark-high-emphasis dark-focus:text-dark-high-emphasis dark-hover:bg-gray-900 dark-focus:bg-gray-900 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
          onClick={onContactUs}
        >
          <svg
            className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 dark:text-gray-500 dark-group-hover:text-gray-400 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          Contact Us
        </button>
      </div>
    </>
  );
};

const NavBar = ({ alignNavButtonsRight = true }) => {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const { markdownLayoutInfo, sidebarLinks } = moduleLayoutInfo;

  if (markdownLayoutInfo instanceof SolutionInfo) return null;

  const sortedModuleLinks = React.useMemo(() => {
    let links: ModuleLinkInfo[] = [];
    for (let group of MODULE_ORDERING[markdownLayoutInfo.section]) {
      for (let id of group.items) {
        links.push(sidebarLinks.find(x => x.id === id));
      }
    }
    return links;
  }, [sidebarLinks]);
  let moduleIdx = React.useMemo(
    () => sortedModuleLinks.findIndex(x => x.id === markdownLayoutInfo.id),
    [markdownLayoutInfo, sortedModuleLinks]
  );
  let prevModule = moduleIdx === 0 ? null : sortedModuleLinks[moduleIdx - 1];
  let nextModule =
    moduleIdx === sortedModuleLinks.length - 1
      ? null
      : sortedModuleLinks[moduleIdx + 1];

  const disabledClasses =
    'text-gray-200 pointer-events-none dark:text-dark-low-emphasis';
  const activeClasses =
    'text-gray-500 hover:text-gray-800 dark:text-dark-med-emphasis dark-hover:text-dark-high-emphasis transition duration-150 ease-in-out';
  return (
    <div
      className={`flex ${
        alignNavButtonsRight ? 'sm:justify-between' : 'justify-between'
      }`}
    >
      {alignNavButtonsRight && <div className="flex-1 sm:hidden" />}
      <span className="-ml-4 rounded-md">
        <Link
          to={prevModule === null ? markdownLayoutInfo.url : prevModule.url}
          className={
            'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md ' +
            (prevModule === null ? disabledClasses : activeClasses)
          }
        >
          <svg
            className="-ml-0.5 mr-1 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </Link>
      </span>
      <div className="hidden sm:flex items-center">
        <Breadcrumbs />
      </div>
      <span className="rounded-md -mr-4">
        <Link
          to={nextModule === null ? markdownLayoutInfo.url : nextModule.url}
          className={
            'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md ' +
            (nextModule === null ? disabledClasses : activeClasses)
          }
        >
          Next
          <svg
            className="-mr-0.5 ml-1 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </span>
    </div>
  );
};

const renderPrerequisite = (prerequisite, moduleLinks: ModuleLinkInfo[]) => {
  let moduleLink = moduleLinks.find(x => x.id === prerequisite);
  if (moduleLink)
    return (
      <li key={prerequisite}>
        <Link
          to={moduleLink.url}
          className="underline text-black dark:text-blue-200"
        >
          {SECTION_LABELS[moduleLink.section]} - {moduleLink.title}
        </Link>
      </li>
    );
  return <li key={prerequisite}>{prerequisite}</li>;
};

export default function MarkdownLayout({
  markdownData,
  children,
}: {
  markdownData: ModuleInfo | SolutionInfo;
  children: React.ReactNode;
}) {
  const { userProgressOnModules, setModuleProgress, lang } = useContext(
    UserDataContext
  );
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactUsActive, setIsContactUsActive] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const moduleProgress =
    (userProgressOnModules && userProgressOnModules[markdownData.id]) ||
    'Not Started';

  const tableOfContents =
    lang in markdownData.toc ? markdownData.toc[lang] : markdownData.toc['cpp'];

  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        edges {
          node {
            frontmatter {
              title
              id
            }
            fields {
              division
            }
          }
        }
      }
    }
  `);
  const moduleLinks = React.useMemo(() => graphqlToModuleLinks(data.allMdx), [
    data.allMdx,
  ]);

  const handleCompletionChange = progress => {
    if (moduleProgress === progress) return;
    setModuleProgress(markdownData.id, progress);
    if (
      moduleProgress !== 'Complete' &&
      (progress === 'Practicing' || progress === 'Complete')
    )
      setIsConfettiActive(true);
  };

  // Scroll behavior smooth was causing a number of issues...
  // make sure to test that clicking autogenerated anchors scrolls properly before re-enabling
  // React.useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'smooth';
  //   return () => (document.querySelector('html').style.scrollBehavior = 'auto');
  // }, []);

  return (
    <MarkdownLayoutContext.Provider
      value={{ markdownLayoutInfo: markdownData, sidebarLinks: moduleLinks }}
    >
      <ModuleConfetti
        show={isConfettiActive}
        onDone={() => setIsConfettiActive(false)}
      />
      <Transition show={isMobileNavOpen} timeout={300}>
        <div className="lg:hidden">
          <div className="fixed inset-0 flex z-40">
            <Transition
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0"
                onClick={() => setIsMobileNavOpen(false)}
              >
                <div className="absolute inset-0 bg-gray-600 opacity-75" />
              </div>
            </Transition>

            <Transition
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <div className="absolute top-0 right-0 -mr-14 p-1">
                  <button
                    className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                    aria-label="Close sidebar"
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <svg
                      className="h-6 w-6 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 flex flex-col">
                  <Link
                    className="flex-shrink-0 flex items-center px-4"
                    to="/dashboard/"
                  >
                    <Logo />
                  </Link>
                  <div className="my-4 px-6">
                    <Breadcrumbs />
                  </div>
                  <SidebarNav />
                </div>
                <SidebarBottomButtons
                  onContactUs={() => {
                    setIsMobileNavOpen(false);
                    setIsContactUsActive(true);
                  }}
                />
              </div>
            </Transition>
            <div className="flex-shrink-0 w-14">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </div>
      </Transition>
      {/* Static sidebar for desktop */}
      <div
        className="hidden lg:block fixed z-10 top-0 left-0 bottom-0"
        style={{ width: '20rem' }}
      >
        <div
          className="border-r border-gray-200 bg-white dark:bg-dark-surface dark:border-gray-800 h-screen flex flex-col"
          style={{ width: '20rem' }}
        >
          <div className="flex-grow h-0 flex flex-col pt-5">
            <Link
              className="flex items-center flex-shrink-0 px-4 pb-2"
              to="/dashboard/"
            >
              <Logo />
            </Link>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <SidebarNav />
          </div>
          <SidebarBottomButtons
            onContactUs={() => setIsContactUsActive(true)}
          />
        </div>
      </div>
      <div>
        <div className="lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 flex items-center">
          <button
            className="flex-shrink-0 -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            aria-label="Open sidebar"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex-1 ml-4 mr-4 sm:mr-6">
            <NavBar />
          </div>
        </div>
        <main
          className="relative z-0 sm:pt-2 pb-6 focus:outline-none"
          tabIndex={0}
        >
          <div className="mx-auto">
            <div className="flex justify-center">
              {/* Placeholder for the sidebar */}
              <div
                className="flex-shrink-0 hidden lg:block"
                style={{ width: '20rem' }}
              />
              <div className="flex-1 max-w-4xl px-4 sm:px-6 lg:px-8 w-0 min-w-0">
                <div className="hidden lg:block">
                  <NavBar />
                </div>

                <div className="px-0.5 lg:mt-8">
                  {markdownData instanceof ModuleInfo &&
                    markdownData.frequency !== null && (
                      <Frequency frequency={markdownData.frequency} />
                    )}
                </div>
                <div className="sm:flex sm:items-center sm:justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-dark-high-emphasis sm:text-3xl">
                      {markdownData.title}
                    </h1>
                    {markdownData.author && (
                      <p
                        className={`text-gray-500 dark:text-dark-med-emphasis`}
                      >
                        Author
                        {markdownData.author.indexOf(',') !== -1
                          ? 's'
                          : ''}: {markdownData.author}
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
                </div>

                {markdownData instanceof ModuleInfo &&
                  markdownData.prerequisites && (
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
                            Prerequisites
                          </h3>
                          <div className="mt-2 text-sm leading-5 text-blue-800 dark:text-blue-200">
                            <ul className="list-disc list-inside pl-3 space-y-1">
                              {markdownData.prerequisites.map(x =>
                                renderPrerequisite(x, moduleLinks)
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                {markdownData instanceof ModuleInfo &&
                  markdownData.description && (
                    <p className="font-bold mb-4 bg-green-50 border-l-4 border-green-400 text-green-800 p-4 dark:bg-green-800 dark:border-green-500 dark:text-green-100">
                      {markdownData.description}
                    </p>
                  )}

                <div className="xl:hidden">
                  <TableOfContentsBlock tableOfContents={tableOfContents} />
                </div>

                {children}

                {markdownData instanceof ModuleInfo && (
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-center mb-8 border-t border-gray-200 pt-8">
                    <TextTooltip content="You can use this as a way to track your progress throughout this guide.">
                      Module Progress
                    </TextTooltip>
                    :
                    <span className="ml-4">
                      <MarkCompleteButton
                        onChange={handleCompletionChange}
                        state={moduleProgress}
                        dropdownAbove
                      />
                    </span>
                  </h3>
                )}

                <div className="border-t border-gray-200 pt-4">
                  <NavBar alignNavButtonsRight={false} />
                </div>
              </div>
              <div className="hidden xl:block ml-6 w-64 mt-48 flex-shrink-0">
                <TableOfContentsSidebar tableOfContents={tableOfContents} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <ContactUsSlideover
        isOpen={isContactUsActive}
        onClose={() => setIsContactUsActive(false)}
        activeModule={markdownData instanceof ModuleInfo ? markdownData : null}
      />
    </MarkdownLayoutContext.Provider>
  );
}

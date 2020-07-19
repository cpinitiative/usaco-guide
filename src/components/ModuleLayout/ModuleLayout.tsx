import * as React from 'react';
import Transition from '../Transition';
import { useContext, useRef, useState } from 'react';
import {
  ModuleFrequency,
  ModuleInfo,
  ModuleLinkInfo,
} from '../../models/module';
import { graphql, Link, useStaticQuery } from 'gatsby';
import MODULE_ORDERING, {
  Category,
  SECTION_LABELS,
} from '../../../content/ordering';
import ModuleFrequencyDots from './ModuleFrequencyDots';
import ContactUsSlideover from '../ContactUsSlideover/ContactUsSlideover';
import MarkCompleteButton from './MarkCompleteButton';
import ModuleConfetti from './ModuleConfetti';
import TextTooltip from '../Tooltip/TextTooltip';
import UserDataContext, { UserLang } from '../../context/UserDataContext';
import {
  NavLinkGroup,
  ModuleSidebarNav,
} from './ModuleSidebarNav/ModuleSidebarNav';
import { graphqlToModuleLinks } from '../../utils';
import ModuleLayoutContext from '../../context/ModuleLayoutContext';
import TableOfContentsSidebar from './TableOfContents/TableOfContentsSidebar';
import TableOfContentsBlock from './TableOfContents/TableOfContentsBlock';
import Sidebar, { SidebarLogo } from '../Sidebar/Sidebar';
import SidebarBottomButtons from '../Sidebar/SidebarBottomButtons';

const Frequency = ({ frequency }: { frequency: ModuleFrequency }) => {
  const textColors = [
    'text-red-600',
    'text-orange-600',
    'text-yellow-600',
    'text-teal-600',
    'text-green-600',
  ];
  const circleColors = [
    'text-red-500',
    'text-orange-500',
    'text-yellow-500',
    'text-teal-500',
    'text-green-500',
  ];
  const labels = [
    'Has Not Appeared',
    'Rare',
    'Not Frequent',
    'Somewhat Frequent',
    'Very Frequent',
  ];
  const hints = [
    'Historically, this module has not appeared in this division before. However, it can still show up in future contests.',
    'Historically, this module has only appeared in this division once or twice.',
    'Historically, this module infrequently appears in this division.',
    'Historically, this module has appeared somewhat frequently for this division.',
    'Historically, this module has been known to appear at least once per contest. However, this does not guarantee that it will show up again in future contests.',
  ];

  return (
    <span
      className={`inline-flex items-center font-medium ${textColors[frequency]}`}
    >
      <ModuleFrequencyDots
        count={frequency}
        totalCount={4}
        color={circleColors[frequency]}
      />
      <TextTooltip position="bottom" content={hints[frequency]}>
        {labels[frequency]}
      </TextTooltip>
    </span>
  );
};

const Breadcrumbs = () => {
  const moduleLayoutInfo = useContext(ModuleLayoutContext);
  const module = moduleLayoutInfo.module;
  return (
    <nav className="flex flex-wrap items-center text-sm leading-loose font-medium">
      <Link
        to="/"
        className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
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
        to={`/${module.section}`}
        className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
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
      <span className="text-gray-500 whitespace-no-wrap">{module.title}</span>
    </nav>
  );
};

const NavBar = ({ alignNavButtonsRight = true }) => {
  const moduleLayoutInfo = useContext(ModuleLayoutContext);
  const { module, moduleLinks } = moduleLayoutInfo;
  const sortedModuleLinks = React.useMemo(() => {
    let links: ModuleLinkInfo[] = [];
    for (let group of MODULE_ORDERING[module.section]) {
      for (let id of group.items) {
        links.push(moduleLinks.find(x => x.id === id));
      }
    }
    return links;
  }, [moduleLinks]);
  let moduleIdx = React.useMemo(
    () => sortedModuleLinks.findIndex(x => x.id === module.id),
    [module, sortedModuleLinks]
  );
  let prevModule = moduleIdx === 0 ? null : sortedModuleLinks[moduleIdx - 1];
  let nextModule =
    moduleIdx === sortedModuleLinks.length - 1
      ? null
      : sortedModuleLinks[moduleIdx + 1];

  const disabledClasses = 'text-gray-200 pointer-events-none';
  const activeClasses =
    'text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out';
  return (
    <div
      className={`flex ${
        alignNavButtonsRight ? 'sm:justify-between' : 'justify-between'
      }`}
    >
      {alignNavButtonsRight && <div className="flex-1 sm:hidden" />}
      <span className="-ml-4 rounded-md">
        <Link
          to={prevModule === null ? module.url : prevModule.url}
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
          to={nextModule === null ? module.url : nextModule.url}
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
        <Link to={moduleLink.url} className="underline text-black">
          {SECTION_LABELS[moduleLink.section]} - {moduleLink.title}
        </Link>
      </li>
    );
  return <li key={prerequisite}>{prerequisite}</li>;
};

export default function ModuleLayout({
  module,
  children,
}: {
  module: ModuleInfo;
  children: React.ReactNode;
}) {
  const { userProgressOnModules, setModuleProgress, lang } = useContext(
    UserDataContext
  );
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const moduleProgress =
    (userProgressOnModules && userProgressOnModules[module.id]) ||
    'Not Started';

  const tableOfContents =
    lang in module.toc ? module.toc[lang] : module.toc['cpp'];

  const data = useStaticQuery(graphql`
    query {
      allMdx {
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
    setModuleProgress(module.id, progress);
    if (
      moduleProgress !== 'Complete' &&
      (progress === 'Practicing' || progress === 'Complete')
    )
      setIsConfettiActive(true);
  };

  return (
    <ModuleLayoutContext.Provider value={{ module, moduleLinks }}>
      <ModuleConfetti
        show={isConfettiActive}
        onDone={() => setIsConfettiActive(false)}
      />
      <Sidebar
        activeModule={module}
        isMobileNavOpen={isMobileNavOpen}
        onMobileNavStateChange={setIsMobileNavOpen}
        desktopSidebarContent={<ModuleSidebarNav />}
        mobileSidebarContent={
          <>
            <SidebarLogo />
            <div className="mt-4 px-6">
              <Breadcrumbs />
            </div>
            <nav className="mt-6">
              <ModuleSidebarNav />
            </nav>
          </>
        }
      >
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
          className="flex-1 relative z-0 overflow-y-auto sm:pt-2 pb-6 focus:outline-none"
          tabIndex={0}
        >
          <div className="mx-auto">
            <div className="flex justify-center">
              <div className="flex-1 max-w-4xl px-4 sm:px-6 lg:px-8 w-0">
                <div className="hidden lg:block">
                  <NavBar />
                </div>

                <div className="px-1.5 lg:mt-8">
                  {module.frequency !== null && (
                    <Frequency frequency={module.frequency} />
                  )}
                </div>
                <div className="sm:flex sm:items-center sm:justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {module.title}
                    </h1>
                    <p className={`text-gray-500`}>Author: {module.author}</p>
                  </div>
                  <div className="hidden lg:flex-shrink-0 lg:flex ml-4">
                    <MarkCompleteButton
                      state={moduleProgress}
                      onChange={handleCompletionChange}
                    />
                  </div>
                </div>

                {module.prerequisites && (
                  <div className="rounded-md bg-blue-50 p-4 mb-4">
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
                        <h3 className="text-sm leading-5 font-medium text-blue-800">
                          Prerequisites
                        </h3>
                        <div className="mt-2 text-sm leading-5 text-blue-800">
                          <ul className="list-disc list-inside pl-3 space-y-1">
                            {module.prerequisites.map(x =>
                              renderPrerequisite(x, moduleLinks)
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {module.description && (
                  <p className="font-bold mb-4 bg-green-50 border-l-4 border-green-400 text-green-800 p-4">
                    {module.description}
                  </p>
                )}

                <div className="xl:hidden">
                  <TableOfContentsBlock tableOfContents={tableOfContents} />
                </div>

                {children}

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
      </Sidebar>
    </ModuleLayoutContext.Provider>
  );
}

import * as React from 'react';
import { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/markdown/Markdown';
import ModuleOrdering, {
  divisionLabels,
  isModuleOrderingGroup,
  ModuleOrderingGroup,
  ModuleOrderingItem,
} from '../../content/ordering';
import Transition from '../components/Transition';
import { graphqlToModuleInfo, graphqlToModuleLinks } from '../utils';
import SEO from '../components/seo';

// @ts-ignore
import logo from '../assets/logo.svg';
import { ModuleFrequency, ModuleInfo, ModuleLinkInfo } from '../module';
import Dots from '../components/Dots';
import { KatexRenderer } from '../components/markdown/KatexRenderer';

const renderPrerequisite = prerequisite => {
  return <li key={prerequisite}>{prerequisite}</li>;
};

const Breadcrumbs = ({
  division,
  module,
}: {
  division: string;
  module: ModuleLinkInfo;
}) => (
  <nav className="flex items-center text-sm leading-5 font-medium">
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
      to={`/${division}`}
      className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
    >
      {divisionLabels[division]}
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
    <span className="text-gray-500">{module.title}</span>
  </nav>
);

const SidebarBottomButtons = () => (
  <>
    <div className="flex-shrink-0 border-t border-gray-200 flex">
      <button className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
        <svg
          className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Report an Issue
      </button>
    </div>
    <div className="flex-shrink-0 border-t border-gray-200 flex">
      <button className="group flex-1 flex items-center p-4 text-sm leading-5 font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
        <svg
          className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        Get Help
      </button>
    </div>
  </>
);

interface NavLinkGroup {
  label: string;
  children: NavLinkItem[];
}

type NavLinkItem = ModuleLinkInfo | NavLinkGroup;

const isNavLinkGroup = (x: NavLinkItem): x is NavLinkGroup =>
  x.hasOwnProperty('label');

const SidebarNavLinks = ({ links }: { links: NavLinkItem[] }) => {
  const renderLink = (link: NavLinkItem) => {
    if (link instanceof ModuleLinkInfo) {
      return (
        <Link
          to={link.url}
          className={`flex items-center px-6 py-3 text-sm leading-5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150`}
        >
          {link.title}
        </Link>
      );
    }
    return (
      <div className="bg-gray-100 mb-4">
        <div
          className={`flex items-center px-6 py-3 text-sm leading-5 font-medium text-gray-600 border-b border-gray-200`}
        >
          {link.label}
        </div>
        {link.children.map(renderLink)}
      </div>
    );
  };
  return <>{links.map(renderLink)}</>;
};

const TopNav = ({
  division,
  module,
  prevModule,
  nextModule,
}: {
  division: any;
  module: ModuleLinkInfo;
  prevModule: ModuleLinkInfo | null;
  nextModule: ModuleLinkInfo | null;
}) => {
  const disabledClasses = 'text-gray-200 pointer-events-none';
  const activeClasses =
    'text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out';
  return (
    <div className="flex justify-between">
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
        <Breadcrumbs division={division} module={module} />
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

const CompactNav = ({
  division,
  module,
  prevModule,
  nextModule,
}: {
  division: string;
  module: ModuleLinkInfo;
  prevModule: ModuleLinkInfo | null;
  nextModule: ModuleLinkInfo | null;
}) => (
  <div className="flex">
    <div className="hidden sm:flex items-center">
      <Breadcrumbs division={division} module={module} />
    </div>
    <div className="flex-1 flex items-center justify-between sm:justify-end">
      <span className="rounded-md">
        {prevModule && (
          <Link
            to={prevModule.url}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
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
        )}
      </span>
      <span className="ml-3 rounded-md">
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
        >
          Mark Complete
        </button>
      </span>
      <span className="ml-3 rounded-md">
        {nextModule && (
          <Link
            to={nextModule.url}
            className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
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
        )}
      </span>
    </div>
  </div>
);

const flattenNavLinks = (navLinks: NavLinkItem[]) => {
  let links: ModuleLinkInfo[] = [];
  const flatten = (link: NavLinkItem) => {
    if (isNavLinkGroup(link)) {
      link.children.forEach(flatten);
    } else {
      links.push(link);
    }
  };
  navLinks.forEach(flatten);
  return links;
};

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
    'Rare (1-2 times)',
    'Not Frequent (3-4 times)',
    'Somewhat Frequent',
    'Very Frequent (historically ~ once per contest)',
  ];

  return (
    <span
      className={`inline-flex items-center font-medium ${textColors[frequency]}`}
    >
      <Dots count={frequency} totalCount={4} color={circleColors[frequency]} />
      {labels[frequency]}
    </span>
  );
};

export default function Template(props) {
  const { mdx, allMdx } = props.data; // data.markdownRemark holds your post data
  const { body } = mdx;
  const prereqs = mdx.frontmatter.prerequisites;
  const division = props.pageContext.division;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navLinks: NavLinkItem[] = React.useMemo(() => {
    const modules = graphqlToModuleLinks(allMdx);
    const getLinks = (item: ModuleOrderingItem): NavLinkItem => {
      if (isModuleOrderingGroup(item)) {
        return {
          label: item.name,
          children: item.items.map(getLinks),
        };
      }
      if (!modules.hasOwnProperty(item)) {
        throw `${item} not found!`;
      }
      return modules[item];
    };
    return ModuleOrdering[division].map(getLinks);
  }, []);

  const module = graphqlToModuleInfo(mdx);
  const prevModule: ModuleLinkInfo | null = React.useMemo(() => {
    const links = flattenNavLinks(navLinks);
    for (let i = 0; i < links.length - 1; i++) {
      if (links[i + 1].id === module.id) return links[i];
    }
    return null;
  }, [navLinks]);
  const nextModule: ModuleLinkInfo | null = React.useMemo(() => {
    const links = flattenNavLinks(navLinks);
    for (let i = 1; i < links.length; i++) {
      if (links[i - 1].id === module.id) return links[i];
    }
    return null;
  }, [navLinks]);

  return (
    <Layout>
      <SEO title={`${module.title} (${divisionLabels[division]})`} />

      <div className="h-screen flex overflow-hidden bg-white">
        {/* Off-canvas menu for mobile */}
        <Transition show={isMobileNavOpen}>
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
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <img className="h-12 w-auto" src={logo} alt="Workflow" />
                    </div>
                    <div className="mt-4 px-6">
                      <Breadcrumbs division={division} module={module} />
                    </div>
                    <nav className="mt-2">
                      <SidebarNavLinks links={navLinks} />
                    </nav>
                  </div>
                  <SidebarBottomButtons />
                </div>
              </Transition>
              <div className="flex-shrink-0 w-14">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </div>
        </Transition>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
            <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="h-12 w-auto" src={logo} alt="Workflow" />
              </div>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <nav className="mt-2 flex-1 bg-white">
                <SidebarNavLinks links={navLinks} />
              </nav>
            </div>
            <SidebarBottomButtons />
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="lg:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
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
          </div>
          <main
            className="flex-1 relative z-0 overflow-y-auto sm:pt-2 pb-6 focus:outline-none"
            tabIndex={0}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div>
                <div className="hidden lg:block">
                  <TopNav
                    division={division}
                    module={module}
                    prevModule={prevModule}
                    nextModule={nextModule}
                  />
                </div>
                <div className="lg:hidden mb-6">
                  <CompactNav
                    division={division}
                    module={module}
                    prevModule={prevModule}
                    nextModule={nextModule}
                  />
                </div>
                <div className="px-1.5 lg:mt-8">
                  {module.frequency !== null && (
                    <Frequency frequency={module.frequency} />
                  )}
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {module.title}
                    </h1>
                    <p className={`text-gray-500`}>Author: {module.author}</p>
                  </div>
                  <div className="hidden lg:flex-shrink-0 lg:flex ml-4">
                    <span className="shadow-sm rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        Mark Complete
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-4">
                {prereqs && (
                  <div className="rounded-md bg-blue-50 p-4 mb-6">
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
                            {prereqs.map(renderPrerequisite)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {module.description && (
                  <div className="rounded-md bg-green-50 p-4 border border-green-500 mb-12">
                    <p className="text-sm leading-5 font-medium text-green-800">
                      <KatexRenderer>{module.description}</KatexRenderer>
                    </p>
                  </div>
                )}

                <Markdown body={body} className="markdown--module" />
              </div>

              <div className="border-t border-gray-200 pt-4">
                <CompactNav
                  division={division}
                  module={module}
                  prevModule={prevModule}
                  nextModule={nextModule}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
        author
        id
        prerequisites
        description
        frequency
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            id
          }
        }
      }
    }
  }
`;

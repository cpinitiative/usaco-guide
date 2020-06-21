import * as React from 'react';
import { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/Markdown';
import ModuleOrdering, { divisionLabels } from '../../content/ordering';
import Transition from '../components/Transition';
import { graphqlToModulesObject } from '../utils';

const renderPrerequisite = prerequisite => {
  const link = prerequisite.length > 1 ? prerequisite[1] : null;
  return (
    <li key={prerequisite[0]}>
      {link && (
        <a href={link} className="text-blue-600 underline">
          {prerequisite[0]}
        </a>
      )}
      {!link && prerequisite[0]}
    </li>
  );
};

const Breadcrumbs = ({ division }) => (
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
    <span className="text-gray-500">Getting Started</span>
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

interface NavLink {
  kind: 'link';
  label: string;
  href: string;
}

interface NavLinkGroup {
  kind: 'group';
  label: string;
  children: NavLink[];
}

type NavLinkItem = NavLink | NavLinkGroup;

const SidebarNavLinks = ({ links }) => {
  const renderLink = link => {
    if (link.kind === 'link') {
      return (
        <Link
          to={link.href}
          className={`flex items-center px-6 py-3 text-sm leading-5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150`}
        >
          {link.label}
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

const TopNav = ({ division }) => (
  <div className="flex justify-between">
    <span className="-ml-4 rounded-md">
      <Link
        to="#"
        className="inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-gray-500 hover:text-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
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
      <Breadcrumbs division={division} />
    </div>
    <span className="rounded-md -mr-4">
      <Link
        to="#"
        className="inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out"
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

const CompactNav = ({ division }) => (
  <div className="flex">
    <div className="hidden sm:flex items-center">
      <Breadcrumbs division={division} />
    </div>
    <div className="flex-1 flex items-center justify-between sm:justify-end">
      <span className="rounded-md">
        <button
          type="button"
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
        </button>
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
        <button
          type="button"
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
        </button>
      </span>
    </div>
  </div>
);

export default function Template(props) {
  const { mdx, allMdx } = props.data; // data.markdownRemark holds your post data
  const { body } = mdx;
  const prereqs = mdx.frontmatter.prerequisites;
  const division = props.pageContext.division;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navLinks: NavLinkItem[] = React.useMemo(() => {
    const modules = graphqlToModulesObject(allMdx);
    const getLinks = module => {
      if (module.hasOwnProperty('name')) {
        return {
          kind: 'group',
          label: module.name,
          children: module.items.map(getLinks),
        };
      }
      if (!modules.hasOwnProperty(module)) {
        throw `${module} not found!`;
      }
      return {
        kind: 'link',
        label: modules[module].frontmatter.title,
        href: `/${division}/${module}`,
      };
    };
    return ModuleOrdering[division].map(getLinks);
  }, []);

  return (
    <Layout>
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
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="mt-8 px-6">
                      <Breadcrumbs division={division} />
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
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-on-white.svg"
                  alt="Workflow"
                />
              </div>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <nav className="mt-5 flex-1 bg-white">
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
                  <TopNav division={division} />
                </div>
                <div className="lg:hidden mb-6">
                  <CompactNav division={division} />
                </div>
                <div className="lg:mt-8 lg:mb-4 sm:flex sm:items-center sm:justify-between">
                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      {mdx.frontmatter.title}
                    </h1>
                    <p className={`text-gray-500`}>
                      Author: {mdx.frontmatter.author}
                    </p>
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
                  <div className="rounded-md bg-blue-50 p-4 mb-12">
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

                <Markdown body={body} className="markdown--module" />
              </div>

              <div className="border-t border-gray-200 pt-4">
                <CompactNav division={division} />
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

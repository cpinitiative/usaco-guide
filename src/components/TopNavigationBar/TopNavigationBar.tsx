import * as React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectAutoComplete,
  Highlight,
  Snippet,
  Configure,
  PoweredBy,
} from 'react-instantsearch-dom';
import {
  moduleIDToURLMap,
  SECTION_LABELS,
  SECTIONS,
} from '../../../content/ordering';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../Logo';
import LogoSquare from '../LogoSquare';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import SectionsDropdown from '../SectionsDropdown';
import ContactUsSlideover from '../ContactUsSlideover/ContactUsSlideover';
import MobileMenuButtonContainer from '../MobileMenuButtonContainer';
import { searchClient } from '../../utils/algoliaSearchClient';
import SEO from '../seo';
import Layout from '../layout';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Transition from '../Transition';
import SettingsModal from '../SettingsModal';

const SearchResultDescription = styled.p`
  ${tw`leading-4`}

  > p > .ais-Highlight > * {
    ${tw`text-gray-700`}
    ${tw`text-sm!`}
  }

  .mode-dark & > p > .ais-Highlight > * {
    ${tw`text-gray-300`}
  }

  > .ais-Snippet > * {
    ${tw`text-gray-400`}
    ${tw`text-sm!`}
  }
`;

const SearchResultsContainer = styled.div`
  ${tw`absolute z-10 bg-white lg:rounded shadow-md lg:border lg:border-gray-400 z-10 mt-3 inset-x-0 lg:left-auto lg:w-screen lg:max-w-3xl`}

  .mode-dark & {
    ${tw`bg-dark-surface lg:border-gray-700`}
  }

  .mode-dark & .ais-PoweredBy {
    ${tw`text-dark-high-emphasis!`}
  }
`;

const indexName =
  process.env.NODE_ENV === 'production' ? 'prod_modules' : 'dev_modules';

const ModuleSearch = ({ hits, currentRefinement, refine }) => {
  const [showResults, setShowResults] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = e => {
      // @ts-ignore
      if (!(ref.current && ref.current.contains(e.target))) {
        setShowResults(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [ref.current]);

  return (
    <div className="lg:relative" ref={ref}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-dark-high-emphasis focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out text-black"
          placeholder="Search"
          type="search"
          value={currentRefinement}
          onChange={e => refine(e.target.value)}
          onFocus={() => setShowResults(true)}
          autoComplete="off"
        />
      </div>
      {showResults && (
        <SearchResultsContainer>
          <div className="px-4 pt-4">
            <PoweredBy />
          </div>
          <div className="mt-2">
            {hits.map(hit => (
              <Link
                to={moduleIDToURLMap[hit.id]}
                className="block hover:bg-blue-100 dark-hover:bg-gray-700 px-4 py-2 transition duration-150 ease-in-out"
              >
                <h3 className="text-gray-600 dark:text-dark-high-emphasis font-medium">
                  <Highlight hit={hit} attribute="title" /> -{' '}
                  {SECTION_LABELS[hit.division]}
                </h3>
                <SearchResultDescription>
                  <p className="mb-1">
                    <Highlight hit={hit} attribute="description" />
                  </p>
                  <Snippet hit={hit} attribute="content" />
                </SearchResultDescription>
              </Link>
            ))}
          </div>
        </SearchResultsContainer>
      )}
    </div>
  );
};

const ConnectedModuleSearch = connectAutoComplete(ModuleSearch);

const UserAuthButton = props => {
  const { firebaseUser, signIn, signOut } = useContext(UserDataContext);
  return (
    <button {...props} onClick={() => (firebaseUser ? signOut() : signIn())}>
      {firebaseUser ? 'Logout' : 'Login'}
    </button>
  );
};

export default function TopNavigationBar({
  indexPage = false,
  currentSection = null,
  hideClassesPromoBar = false,
}) {
  const { firebaseUser, signOut } = useContext(UserDataContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactUsActive, setIsContactUsActive] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userClasses } = useContext(UserDataContext);
  const mobileLinks = [
    {
      label: 'Dashboard',
      url: '/dashboard/',
    },
    ...SECTIONS.map(section => ({
      label: SECTION_LABELS[section],
      url: `/${section}/`,
    })),
    {
      label: 'Problems',
      url: '/problems/',
    },
    ...(userClasses.length > 0
      ? [
          {
            label: 'My Class' + (userClasses.length !== 1 ? 'es' : ''),
            url:
              '/class/' + (userClasses.length === 1 ? userClasses[0].id : ''),
          },
        ]
      : []),
  ];
  const ref = useRef();
  useEffect(() => {
    const handleClick = e => {
      // @ts-ignore
      if (!(ref.current && ref.current.contains(e.target))) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref.current]);

  return (
    <>
      {!hideClassesPromoBar && (
        <div className="relative bg-blue-600">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">
                  Free online USACO classes + contests!
                </span>
                <span className="hidden md:inline">
                  Free online USACO classes + contests from USACO Guide authors!
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <OutboundLink
                    href="https://joincpi.org/"
                    target="_blank"
                    className="text-white font-bold underline"
                  >
                    Learn more &rarr;
                  </OutboundLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <nav className="bg-white dark:bg-gray-900 shadow relative z-10">
        <div
          className={`${
            indexPage
              ? 'max-w-6xl px-2 lg:px-6'
              : 'max-w-7xl px-2 sm:px-4 lg:px-8'
          } mx-auto`}
        >
          <div className="flex justify-between h-16">
            <div className="flex px-2 lg:px-0">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="block sm:hidden h-10">
                  <LogoSquare />
                </div>
                <div
                  className={
                    'hidden sm:block h-9' + (indexPage ? ' lg:hidden' : '')
                  }
                >
                  <Logo />
                </div>
              </Link>
              <div
                className={`hidden ${
                  !indexPage && 'lg:ml-6'
                } lg:flex space-x-8`}
              >
                <Link
                  to="/dashboard/"
                  getProps={({ isCurrent }) => ({
                    className: isCurrent
                      ? 'inline-flex items-center px-1 pt-0.5 border-b-2 border-blue-500 dark:border-blue-700 text-base font-medium leading-6 text-gray-900 dark:text-dark-high-emphasis focus:outline-none focus:border-blue-700 dark-focus:border-blue-500 transition duration-150 ease-in-out'
                      : 'inline-flex items-center px-1 pt-0.5 border-b-2 border-transparent text-base font-medium leading-6 text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-dark-high-emphasis focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                  })}
                >
                  Dashboard
                </Link>
                <SectionsDropdown currentSection={currentSection} />
                <Link
                  to="/problems/"
                  getProps={({ isCurrent }) => ({
                    className: isCurrent
                      ? 'inline-flex items-center px-1 pt-0.5 border-b-2 border-blue-500 dark:border-blue-700 text-base font-medium leading-6 text-gray-900 dark:text-dark-high-emphasis focus:outline-none focus:border-blue-700 dark-focus:border-blue-500 transition duration-150 ease-in-out'
                      : 'inline-flex items-center px-1 pt-0.5 border-b-2 border-transparent text-base font-medium leading-6 text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-dark-high-emphasis focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                  })}
                >
                  Problems
                </Link>
                {userClasses.length > 0 && (
                  <Link
                    to={
                      '/class/' +
                      (userClasses.length === 1 ? userClasses[0].id : '')
                    }
                    getProps={({ isCurrent }) => ({
                      className: isCurrent
                        ? 'inline-flex items-center px-1 pt-0.5 border-b-2 border-blue-500 dark:border-blue-700 text-base font-medium leading-6 text-gray-900 dark:text-dark-high-emphasis focus:outline-none focus:border-blue-700 dark-focus:border-blue-500 transition duration-150 ease-in-out'
                        : 'inline-flex items-center px-1 pt-0.5 border-b-2 border-transparent text-base font-medium leading-6 text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-dark-high-emphasis focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                    })}
                  >
                    {'My Class' + (userClasses.length !== 1 ? 'es' : '')}
                  </Link>
                )}
                <button
                  className="cursor-pointer inline-flex items-center px-1 text-base font-medium leading-6 text-gray-500 hover:text-gray-700 dark:text-dark-high-emphasis transition duration-150 ease-in-out focus:outline-none"
                  onClick={() => setIsContactUsActive(true)}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div
              className={`flex-1 flex items-center justify-center px-2 lg:px-0 lg:ml-6 lg:justify-end`}
            >
              <div className="max-w-lg w-full lg:max-w-sm">
                <InstantSearch
                  indexName={indexName}
                  searchClient={searchClient}
                >
                  <Configure
                    hitsPerPage={10}
                    attributesToSnippet={['content:30']}
                  />
                  <ConnectedModuleSearch />
                </InstantSearch>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              {/* Mobile menu button */}
              <MobileMenuButtonContainer
                className="inline-flex items-center justify-center p-2"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                {/* Icon when menu is closed. */}
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className={`${isMobileNavOpen ? 'hidden' : 'block'} h-6 w-6`}
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
                {/* Icon when menu is open. */}
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className={`${isMobileNavOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </MobileMenuButtonContainer>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:items-center">
              <div className="flex-shrink-0"></div>
              <div className="ml-3 relative">
                <div>
                  {firebaseUser ? (
                    <button
                      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      onClick={() => setIsActive(!isActive)}
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  ) : (
                    <UserAuthButton className="relative inline-flex items-center px-2 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-700 dark:text-dark-high-emphasis focus:outline-none focus:shadow-outline-blue transition ease-in-out duration-150" />
                  )}
                </div>
                <Transition
                  show={isActive}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Your Profile
                      </a>
                      <a
                        href="#"
                        onClick={() => setIsModalOpen(true)}
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Settings
                      </a>
                      <a
                        onClick={() => signOut()}
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>

        <SettingsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

        {/*
        Mobile menu, toggle classes based on menu state.

        Menu open: "block", Menu closed: "hidden"
      */}
        <div className={`${isMobileNavOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            {mobileLinks.map((link, idx) => (
              <Link
                key={link.url}
                to={link.url}
                getProps={({ isCurrent }) => ({
                  className: isCurrent
                    ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 dark:text-indigo-100 bg-indigo-50 dark:bg-indigo-800 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out'
                    : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-dark-med-emphasis hover:text-gray-800 dark-hover:text-dark-high-emphasis hover:bg-gray-50 dark-hover:bg-gray-700 hover:border-gray-300 dark-hover:border-gray-500 focus:outline-none focus:text-gray-800 focus:bg-gray-50 dark-focus:bg-gray-700 focus:border-gray-300 transition duration-150 ease-in-out',
                })}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-dark-med-emphasis hover:text-gray-800 dark-hover:text-dark-high-emphasis hover:bg-gray-50 dark-hover:bg-gray-700 hover:border-gray-300 dark-hover:border-gray-500 focus:outline-none focus:text-gray-800 focus:bg-gray-50 dark-focus:bg-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              onClick={() => setIsContactUsActive(true)}
            >
              Contact Us
            </button>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <UserAuthButton className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-dark-med-emphasis hover:text-gray-800 dark-hover:text-dark-high-emphasis hover:bg-gray-50 dark-hover:bg-gray-700 hover:border-gray-300 dark-hover:border-gray-500 focus:outline-none focus:text-gray-800 focus:bg-gray-50 dark-focus:bg-gray-700 focus:border-gray-300 transition duration-150 ease-in-out" />
          </div>
        </div>
      </nav>

      <ContactUsSlideover
        isOpen={isContactUsActive}
        onClose={() => setIsContactUsActive(false)}
      />
    </>
  );
}

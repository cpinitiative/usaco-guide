import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BookmarkIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  ChevronDownIcon,
  CogIcon,
  ExternalLinkIcon,
  LoginIcon,
  LogoutIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  TerminalIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import classNames from 'classnames';
import { Link } from 'gatsby';
import * as React from 'react';
import { Fragment, useContext, useState } from 'react';
import MODULE_ORDERING, {
  SECTIONS,
  SECTION_LABELS,
} from '../../../content/ordering';
import { SignInContext } from '../../context/SignInContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { useUserGroups } from '../../hooks/groups/useUserGroups';
import ContactUsSlideover from '../ContactUsSlideover/ContactUsSlideover';
import { LoadingSpinner } from '../elements/LoadingSpinner';
import Logo from '../Logo';
import LogoSquare from '../LogoSquare';
import MobileMenuButtonContainer from '../MobileMenuButtonContainer';
import SectionsDropdown from '../SectionsDropdown';
import { SearchModal } from './SearchModal';
import { UserAvatarMenu } from './UserAvatarMenu';

export default function TopNavigationBar({
  transparent = false,
  linkLogoToIndex = false,
  currentSection = null,
  hideClassesPromoBar = false,
}) {
  const { firebaseUser, signOut, isLoaded, userProgressOnModules } =
    useContext(UserDataContext);
  const { signIn } = React.useContext(SignInContext);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isContactUsActive, setIsContactUsActive] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const userGroups = useUserGroups();

  const sections = {};
  for (const section of Object.keys(MODULE_ORDERING)) {
    let total = 0;
    let completed = 0;
    MODULE_ORDERING[section].forEach(chapter => {
      chapter.items.forEach(module => {
        total++;
        if (Object.keys(userProgressOnModules).includes(module)) {
          completed++;
        }
      });
    });
    sections[section] = {
      total,
      completed,
    };
  }

  const resources = [
    {
      name: 'USACO Forum',
      description: 'An unofficial Q&A forum for USACO contestants.',
      href: 'https://forum.usaco.guide/',
      icon: ChatAlt2Icon,
    },
    {
      name: 'USACO IDE',
      description:
        'A realtime collaborative online IDE designed for competitive programming and USACO.',
      href: 'https://ide.usaco.guide/',
      icon: TerminalIcon,
    },
    {
      name: 'Classes',
      description:
        'Learn USACO through high-quality classes with material developed by past USACO Finalists',
      href: 'https://joincpi.org/classes',
      icon: AcademicCapIcon,
    },
    {
      name: 'Contests',
      description:
        'Participate in high-quality programming contests targeted towards pre-college students!',
      href: 'https://joincpi.org/contests',
      icon: ChartBarIcon,
    },
    {
      name: 'Clubs',
      description:
        'Get access to a curriculum tailored for competitive programming clubs.',
      href: 'https://joincpi.org/clubs',
      icon: UserGroupIcon,
    },
    {
      name: 'Workshops',
      description:
        'Access workshops providing you everything you need to know about USACO.',
      href: 'https://joincpi.org/workshop',
      icon: PresentationChartLineIcon,
    },
  ];

  const solutions = [
    {
      name: 'General',
      href: '/general',
      icon: BookmarkIcon,
      key: 'general',
    },
    {
      name: 'Bronze',
      href: '/bronze',
      icon: BookmarkIcon,
      key: 'bronze',
    },
    {
      name: 'Silver',
      href: '/silver',
      icon: BookmarkIcon,
      key: 'silver',
    },
    {
      name: 'Gold',
      href: '/gold',
      icon: BookmarkIcon,
      key: 'gold',
    },
    {
      name: 'Platinum',
      href: '/plat',
      icon: BookmarkIcon,
      key: 'plat',
    },
    {
      name: 'Advanced',
      href: '/adv',
      icon: BookmarkIcon,
      key: 'adv',
    },
  ];

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
    ...(userGroups.data?.length > 0
      ? [
          {
            label: 'Groups',
            url: '/groups',
          },
        ]
      : []),
  ];

  return (
    <>
      {false && !hideClassesPromoBar && (
        <div className="relative bg-blue-600">
          <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">
                  Register for the USACO February Workshop!
                </span>
                <span className="hidden md:inline">
                  USACO February Contest solutions explained in a live workshop
                  on March 6th!
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <a
                    href="https://joincpi.org/workshops/usaco-february"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white font-bold underline"
                  >
                    Learn more &rarr;
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <nav
        className={classNames(
          !transparent && 'bg-white dark:bg-gray-900 shadow',
          'relative'
        )}
      >
        <div className="max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex px-2 lg:px-0">
              <Link
                to={linkLogoToIndex ? '/' : '/dashboard'}
                className="flex-shrink-0 flex items-center"
              >
                <div className="block sm:hidden">
                  <LogoSquare className="h-10 w-10" />
                </div>
                <div className={'hidden sm:block h-9'}>
                  <Logo />
                </div>
              </Link>
              <div className={`hidden lg:ml-8 lg:flex space-x-8`}>
                <SectionsDropdown currentSection={currentSection} />
                <Link
                  to="/problems/"
                  getProps={({ isCurrent }) => ({
                    className: isCurrent
                      ? 'inline-flex items-center px-1 pt-0.5 border-b-2 border-blue-500 dark:border-blue-700 text-base font-medium leading-6 text-gray-900 dark:text-dark-high-emphasis focus:outline-none focus:border-blue-700 dark:focus:border-blue-500 transition'
                      : 'inline-flex items-center px-1 pt-0.5 border-b-2 border-transparent text-base font-medium leading-6 text-gray-500 hover:text-gray-900 hover:border-gray-300  focus:outline-none focus:text-gray-900 focus:border-gray-300 dark:text-dark-high-emphasis dark:hover:border-gray-500 dark:focus:border-gray-500 transition',
                  })}
                >
                  Problems
                </Link>
                <Popover.Group as="nav" className="h-full">
                  <Popover className="h-full">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open
                              ? 'text-gray-900'
                              : 'text-gray-500 hover:border-gray-300 focus:border-gray-300 dark:hover:border-gray-500 dark:focus:border-gray-500',
                            'group inline-flex items-center h-full border-b-2 border-transparent space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900  transition ease-in-out duration-150 dark:text-dark-high-emphasis'
                          )}
                        >
                          <span className="mt-0.5">Resources</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-500' : 'text-gray-400',
                              'mt-0.5 ml-2 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 dark:text-dark-med-emphasis dark:group-hover:text-dark-med-emphasis dark:group-focus:text-dark-med-emphasis transition ease-in-out duration-150'
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="hidden md:block z-20 shadow-lg absolute left-1/2 transform -translate-x-1/2 -mt-2 px-2 w-screen max-w-md sm:px-0 lg:max-w-3xl"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white dark:bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {userGroups.data?.length > 0 && (
                                  <Link
                                    to="/groups/"
                                    className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                      <UserGroupIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900 dark:text-dark-high-emphasis">
                                        Groups
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500 dark:text-dark-med-emphasis">
                                        A Learning Management System fully
                                        integrated with the USACO Guide.
                                      </p>
                                    </div>
                                  </Link>
                                )}
                                {resources.map(item => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="-m-3 p-3 flex items-start rounded-lg dark:hover:bg-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="flex text-base font-medium text-gray-900 dark:text-dark-high-emphasis">
                                        {item.name}{' '}
                                        <span className="text-gray-400 mt-0.5 ml-2 h-5 w-5">
                                          <ExternalLinkIcon />
                                        </span>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500 dark:text-dark-med-emphasis">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </Popover.Group>
                <button
                  className="cursor-pointer inline-flex items-center px-1 border-b-2 border-transparent text-base font-medium leading-6 text-gray-500 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:text-gray-900 focus:border-gray-300 dark:text-dark-high-emphasis dark:hover:border-gray-500 dark:focus:border-gray-500 transition"
                  onClick={() => setIsContactUsActive(true)}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div
              className={`flex-1 flex items-center justify-end px-2 lg:px-0 lg:ml-6`}
            >
              <button
                type="button"
                className="inline-flex items-center px-2 py-1 border border-transparent rounded-md text-gray-500 hover:text-gray-700 dark:text-dark-high-emphasis focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setIsSearchOpen(true)}
              >
                <SearchIcon
                  className="h-5 w-5 text-gray-400 dark:text-gray-300"
                  aria-hidden="true"
                />

                <span className="ml-2 font-medium">Search</span>
              </button>
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
            <div className="hidden lg:mx-3 lg:block border-l border-gray-200 dark:border-gray-700 h-6 self-center" />
            <div className="hidden lg:flex lg:items-center">
              {firebaseUser ? (
                <UserAvatarMenu
                  firebaseUser={firebaseUser}
                  onSignOut={() => signOut()}
                />
              ) : !isLoaded ? (
                <div className="p-2.5">
                  <LoadingSpinner className="h-4 w-4" />
                </div>
              ) : (
                <>
                  <button
                    onClick={() => signIn()}
                    className="relative inline-flex items-center px-2 py-1 border border-transparent text-base leading-6 font-medium rounded-md text-gray-500 hover:text-gray-700 dark:text-dark-high-emphasis focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Login
                  </button>

                  {/* Settings button */}
                  <Link
                    to="/settings"
                    className="p-1 border-2 border-transparent text-gray-400 dark:text-dark-med-emphasis rounded-full hover:text-gray-300 dark:hover:text-dark-high-emphasis focus:outline-none focus:text-gray-500 focus:bg-gray-100 dark:focus:bg-gray-700 transition"
                    aria-label="Settings"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/*
        Mobile menu, toggle classes based on menu state.
        
        Menu open: "block", Menu closed: "hidden"
      */}
        <div className={`${isMobileNavOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-800 pb-6">
            <div className="py-5 px-4">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {solutions.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="group -m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-gray-600 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="py-5 px-4">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group -m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-gray-600 dark:group-hover:text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="pt-5 px-4">
              <nav className="grid gap-y-8">
                <Link
                  key="Problems"
                  to="/problems"
                  className="group -m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <QuestionMarkCircleIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-600 dark:group-hover:text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                    Problems
                  </span>
                </Link>
                <a
                  className="group -m-3 p-3 cursor-pointer flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setIsContactUsActive(true)}
                >
                  <ChatAltIcon
                    className="h-6 w-6 text-gray-600 float-left dark:group-hover:text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                    Contact Us
                  </span>
                </a>
                <Link
                  key="Settings"
                  to="/settings"
                  className="group -m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <CogIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-600 dark:group-hover:text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                    Settings
                  </span>
                </Link>
                {firebaseUser ? (
                  <a
                    className="group -m-3 p-3 flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => signOut()}
                  >
                    <LogoutIcon
                      className="h-6 w-6 text-gray-600 float-left dark:group-hover:text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                      Sign Out
                    </span>
                  </a>
                ) : (
                  <a
                    className="group -m-3 p-3 cursor-pointer flex items-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => signIn()}
                  >
                    <LoginIcon
                      className="h-6 w-6 text-gray-600 float-left dark:group-hover:text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-700 dark:text-gray-300">
                      Sign In
                    </span>
                  </a>
                )}
              </nav>
            </div>
          </div>
        </div>
      </nav>

      <ContactUsSlideover
        isOpen={isContactUsActive}
        onClose={() => setIsContactUsActive(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

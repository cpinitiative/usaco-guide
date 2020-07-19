import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useState } from 'react';
// @ts-ignore
import logo from '../assets/logo.svg';
// @ts-ignore
import logoSquare from '../assets/logo-square.png';
import SectionProgress from '../components/Dashboard/SectionProgress';
import SectionProgressBar from '../components/Dashboard/SectionProgressBar';

export default function SyllabusPage(props: PageProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Syllabus" />

      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block sm:hidden h-8 w-auto"
                    src={logoSquare}
                    alt="USACO Guide"
                  />
                  <img
                    className="hidden sm:block h-12 w-auto"
                    src={logo}
                    alt="USACO Guide"
                  />
                </div>
                <div className="hidden lg:ml-6 xl:ml-12 lg:flex">
                  <a
                    href="#"
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Intro
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Bronze
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Silver
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Gold
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Plat
                  </a>
                  <a
                    href="#"
                    className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                  >
                    Advanced
                  </a>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center px-2 md:px-0 lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
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
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Main menu"
                  aria-expanded="false"
                >
                  {/* Icon when menu is closed. */}
                  {/* Menu open: "hidden", Menu closed: "block" */}
                  <svg
                    className="block h-6 w-6"
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
                    className="hidden h-6 w-6"
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
                </button>
              </div>
            </div>
          </div>
          {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
          <div className="hidden lg:hidden">
            <div className="pt-2 pb-3">
              <a
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Team
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#"
                className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              >
                Calendar
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-6 text-gray-800">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium leading-5 text-gray-500">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <a
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="pt-4 pb-12">
          <div className="max-w-7xl mx-auto mb-4">
            <div className="flex overflow-x-auto px-4 sm:px-6 lg:px-8 py-6">
              {/*<div className="bg-white shadow sm:rounded-lg w-full max-w-sm">*/}
              {/*  <div className="px-4 py-5 sm:p-6">*/}
              {/*    <h3 className="text-lg leading-6 font-medium text-gray-900">*/}
              {/*      Welcome to the USACO Guide!*/}
              {/*    </h3>*/}
              {/*    <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">*/}
              {/*      <p>*/}
              {/*        Get started on the first module, "Using this Guide."*/}
              {/*      </p>*/}
              {/*    </div>*/}
              {/*    <div className="mt-3 text-sm leading-5">*/}
              {/*      <a*/}
              {/*        href="#"*/}
              {/*        className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"*/}
              {/*      >*/}
              {/*        Get Started! &rarr;*/}
              {/*      </a>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="bg-blue-700 shadow hover:shadow-lg transition duration-150 ease-in-out sm:rounded-lg w-full">
                <Link
                  className="px-4 py-5 sm:p-6 lg:p-8 block sm:flex sm:items-center sm:justify-between"
                  to="/intro/using-guide"
                >
                  <div>
                    <h3 className="text-2xl leading-7 font-medium text-white">
                      Welcome Back!
                    </h3>
                    <div className="mt-2 leading-5 text-teal-200">
                      <p>
                        Pick up where you left off. Your last viewed module was
                        Input & Output.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center mr-2">
                    <span className="inline-flex rounded-md shadow-sm">
                      <button
                        type="button"
                        className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                      >
                        Continue: Input & Output
                      </button>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-8">
            <div>
              <div className="bg-white shadow sm:rounded-lg w-full mb-8">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Active Problems
                  </h3>
                  <div className="mt-4 max-w-xl text-gray-500">
                    <p className="mb-2">
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                      >
                        Promotion Counting
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-yellow-100 text-yellow-800">
                          Solving
                        </span>
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                      >
                        Longest Common Subsequence
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                          Skipped
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Active Modules
                  </h3>
                  <div className="mt-3 max-w-xl text-gray-500">
                    <p className="mb-2">
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                      >
                        Intro: Input & Output
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                          Practicing
                        </span>
                      </a>
                    </p>
                    <p>
                      <a
                        href="#"
                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                      >
                        Intro: Expected Knowledge
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                          Skipped
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Announcements
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto mb-8">
            <div className="flex overflow-x-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 gap-8">
              <div className="bg-white shadow hover:shadow-lg transition duration-150 ease-in-out sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6 cursor-pointer">
                  <p className="text-sm leading-5 text-gray-500">
                    <time dateTime="2020-07-18">July 18, 2020</time>
                  </p>
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    Looking for Contributors!
                  </h3>
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Welcome to the USACO Guide! We're still in pre-release mode,
                    so things may be a bit rough around the edges. Learn more
                    about what this means, and how you can help contribute!
                  </p>
                  <div className="mt-3">
                    <span className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                      Continue Reading
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Statistics
              </h1>
            </div>
          </header>
          <div className="max-w-7xl mx-auto">
            <div className="px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-white shadow sm:rounded-lg overflow-hidden row-span-2 flex flex-col">
                  <div className="px-4 pt-5 sm:px-6 sm:pt-6 pb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      🔥 6 Day Streak: Keep it up!
                    </h3>
                    <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                      <p>
                        You've visited this guide for 6 consecutive days. Enjoy
                        this cute cow photo as a reward!
                      </p>
                    </div>
                  </div>
                  <img
                    className="h-64 w-full object-cover"
                    src="https://66.media.tumblr.com/709acf5805b63bf412dd5cf8d6e34803/tumblr_oplgjdcYJl1sgqqono1_500.jpg"
                    alt="Cow"
                  />
                </div>
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Section Breakdown
                    </h3>
                    <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                      <p>Below is your progress on modules for each section.</p>
                    </div>
                    <div className="mt-4">
                      <SectionProgressBar title="Intro" />
                      <SectionProgressBar title="Bronze" />
                      <SectionProgressBar title="Silver" />
                      <SectionProgressBar title="Gold" />
                      <SectionProgressBar title="Plat" />
                      <SectionProgressBar title="Advanced" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      All Modules
                    </h3>
                    <div className="mt-6">
                      <SectionProgress />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      All Starred Problems
                    </h3>
                    <div className="mt-6">
                      <SectionProgress />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow sm:rounded-lg order-6">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      All Problems
                    </h3>
                    <div className="mt-6">
                      <SectionProgress />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

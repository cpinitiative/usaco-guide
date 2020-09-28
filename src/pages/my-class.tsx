import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import * as Icons from 'heroicons-react';

export default function NotFoundPage(props: PageProps) {
  const [teacherMode, setTeacherMode] = React.useState(true);
  return (
    <Layout>
      <SEO title="Class" />
      <div
        className={'fixed top-0 right-0 left-0 h-12 bg-red-300 z-50 py-3 px-5'}
      >
        <b> Developer Tools: </b>
        <button
          className={
            'focus:outline-none underline text-blue-700 cursor-pointer hover:text-blue-900'
          }
          onClick={() => setTeacherMode(o => !o)}
        >
          View As {teacherMode ? 'Student' : 'Teacher'}
        </button>
      </div>

      {/* Background color split screen for large screens */}
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white"></div>
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"></div>
      <div className="relative min-h-screen flex flex-col">
        <TopNavigationBar />
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            {/* Account profile */}
            <div className="xl:flex-shrink-0 xl:w-80 xl:border-r xl:border-gray-200 bg-white">
              <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                <div className="flex items-center justify-between">
                  <div className="flex-1 space-y-8">
                    <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                      {/* Profile */}
                      <div className="flex items-center space-x-3">
                        <div className="space-y-1">
                          <h1 className="text-2xl leading-9 font-bold tracking-tight text-gray-900">
                            Intermediate USACO
                          </h1>
                          <h2 className="text-small leading-3 font-medium tracking-tight text-gray-900">
                            Sunday 9AM
                          </h2>
                          <h4 className="text-sm leading-9 text-gray-500 group-hover:text-gray-900 font-medium">
                            Nathan Wang, Will Bushner, John Doe
                          </h4>
                        </div>
                      </div>
                      {/* Action buttons */}
                      {teacherMode && (
                        <div className="flex flex-col space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row xl:flex-col xl:space-x-0 xl:space-y-3">
                          <span className="inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                            >
                              New Assignment
                            </button>
                          </span>
                          <span className="inline-flex rounded-md shadow-sm">
                            <button
                              type="button"
                              className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                            >
                              Add Student
                            </button>
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Meta info */}
                    <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                      <div className="flex items-center space-x-2">
                        {/* Heroicon name: badge-check */}
                        <Icons.Calendar className="h-5 w-5 text-gray-400" />

                        <span className="text-sm text-gray-500 leading-5 font-medium">
                          Wednesdays
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                      <div className="flex items-center space-x-2">
                        <Icons.Mail className="h-5 w-5 text-gray-400" />

                        <span className="text-sm text-gray-500 leading-5 font-medium">
                          <span className="font-bold">Class Code:</span> 6GK1T
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                <div className="flex items-center">
                  <h1 className="flex-1 text-lg leading-7 font-medium">
                    Activity
                  </h1>
                  {/*<div className="relative">*/}
                  {/*<span className="rounded-md shadow-sm">*/}
                  {/*  <button id="sort-menu" type="button"*/}
                  {/*          className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"*/}
                  {/*          aria-haspopup="true" aria-expanded="false">*/}
                  {/*    /!* Heroicon name: sort-ascending *!/*/}
                  {/*    <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">*/}
                  {/*      <path*/}
                  {/*        d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"/>*/}
                  {/*    </svg>*/}
                  {/*    Sort*/}
                  {/*    /!* Heroicon name: chevron-down *!/*/}
                  {/*    <svg className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">*/}
                  {/*      <path fillRule="evenodd"*/}
                  {/*            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"*/}
                  {/*            clipRule="evenodd"/>*/}
                  {/*    </svg>*/}
                  {/*  </button>*/}
                  {/*</span>*/}
                  {/*  <div className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg">*/}
                  {/*    <div className="rounded-md bg-white shadow-xs">*/}
                  {/*      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="sort-menu">*/}
                  {/*        <a href="/"*/}
                  {/*           className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"*/}
                  {/*           role="menuitem">Name</a>*/}
                  {/*        <a href="/"*/}
                  {/*           className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"*/}
                  {/*           role="menuitem">Date modified</a>*/}
                  {/*        <a href="/"*/}
                  {/*           className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"*/}
                  {/*           role="menuitem">Date created</a>*/}
                  {/*      </div>*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>
              </div>
              <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
                <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
                  <div className="flex items-center justify-between space-x-4">
                    {/* Repo name and link */}
                    <div className="min-w-0 space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="block">
                          <h2 className="text-sm font-medium leading-5">
                            <a href="/">
                              <span className="absolute inset-0"></span>
                              Dynamic Programming Class Notes
                            </a>
                          </h2>
                        </span>
                      </div>
                      <a
                        href="/"
                        className="relative group flex items-center space-x-2.5"
                      >
                        <Icons.Calendar className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                        <div className="text-sm leading-5 text-gray-500 group-hover:text-gray-900 font-medium truncate">
                          September 27, 2020
                        </div>
                      </a>
                    </div>
                    <div className="sm:hidden">
                      {/* Heroicon name: chevron-right */}
                      <Icons.ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    {/* Repo meta info */}
                    <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                      <p className="flex items-center space-x-4">
                        <a
                          href="/"
                          className="relative text-sm leading-5 text-gray-500 hover:text-gray-900 font-medium"
                        >
                          View
                        </a>
                        {/*<button className="relative" type="button">*/}
                        {/*  /!* Heroicon name: star *!/*/}
                        {/*  <Icons.Star className="h-5 w-5 text-yellow-300 hover:text-yellow-400"/>*/}
                        {/*</button>*/}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
                  <div className="flex items-center justify-between space-x-4">
                    {/* Repo name and link */}
                    <div className="min-w-0 space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="block">
                          <h2 className="text-sm font-medium leading-5">
                            <a href="/">
                              <span className="absolute inset-0"></span>
                              Extra Dynamic Programming Practice
                            </a>
                          </h2>
                        </span>
                      </div>
                      <a
                        href="/"
                        className="relative group flex items-center space-x-2.5"
                      >
                        <Icons.Calendar className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                        <div className="text-sm leading-5 text-gray-500 group-hover:text-gray-900 font-medium truncate">
                          September 27, 2020
                        </div>
                      </a>
                    </div>
                    <div className="sm:hidden">
                      {/* Heroicon name: chevron-right */}
                      <Icons.ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    {/* Repo meta info */}
                    <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                      <p className="flex items-center space-x-4">
                        <a
                          href="/"
                          className="relative text-sm leading-5 text-gray-500 hover:text-gray-900 font-medium"
                        >
                          View
                        </a>
                        {/*<button className="relative" type="button">*/}
                        {/*  /!* Heroicon name: star *!/*/}
                        {/*  <Icons.Star className="h-5 w-5 text-yellow-300 hover:text-yellow-400"/>*/}
                        {/*</button>*/}
                      </p>
                    </div>
                  </div>
                </li>
                {/* More items... */}
              </ul>
            </div>
          </div>
          {/* Activity feed */}
          <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
            <div className="pl-6 lg:w-80">
              <div className="pt-6 pb-2">
                <h2 className="text-sm leading-5 font-semibold">Homework</h2>
              </div>
              <div>
                <ul className="divide-y divide-gray-200">
                  <li className="py-4">
                    <a className={'cursor-pointer'} href={'/'}>
                      <div className="flex space-x-3">
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium leading-5">
                              Solve Counting Haybales
                            </h3>
                            <p className="text-sm leading-5 text-gray-500">
                              Due Today
                            </p>
                          </div>
                          <p className="text-sm leading-5 text-gray-500">
                            5/10 Cases Passed
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="py-4">
                    <a className={'cursor-pointer'} href={'/'}>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium leading-5">
                            Solve Fruit Feast
                          </h3>
                          <p className="text-sm leading-5 text-gray-500">
                            Due Today
                          </p>
                        </div>
                        <p className="text-sm leading-5 text-gray-500">
                          Your solution must use DP and not Recursion
                        </p>
                      </div>
                    </a>
                  </li>

                  {/* More items... */}
                </ul>
                <div className="py-4 text-sm leading-5 border-t border-gray-200">
                  <a
                    href="/"
                    className="text-indigo-600 font-semibold hover:text-indigo-900"
                  >
                    View Completed Homework &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

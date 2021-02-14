import * as React from 'react';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';
import { Link } from 'gatsby';
import Breadcrumbs from './Breadcrumbs';

export default function PostPage() {
  return (
    <>
      <TopNavigationBar />
      <nav className="bg-white flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4" />
      </nav>
      <main
        className="flex-1 relative overflow-y-auto focus:outline-none"
        tabIndex={-1}
      >
        <div className="pb-8 xl:pb-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
            <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
              <div>
                <div>
                  <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">
                        Class 5 Homework
                      </h1>
                      <p className="mt-2 text-sm text-gray-500">
                        Due on March 3rd, 2021
                      </p>
                    </div>
                    {/*<div className="mt-4 flex space-x-3 md:mt-0">*/}
                    {/*  <button*/}
                    {/*    type="button"*/}
                    {/*    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"*/}
                    {/*  >*/}
                    {/*    /!* Heroicon name: solid/pencil *!/*/}
                    {/*    <svg*/}
                    {/*      className="-ml-1 mr-2 h-5 w-5 text-gray-400"*/}
                    {/*      xmlns="http://www.w3.org/2000/svg"*/}
                    {/*      viewBox="0 0 20 20"*/}
                    {/*      fill="currentColor"*/}
                    {/*      aria-hidden="true"*/}
                    {/*    >*/}
                    {/*      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />*/}
                    {/*    </svg>*/}
                    {/*    <span>Edit</span>*/}
                    {/*  </button>*/}
                    {/*  <button*/}
                    {/*    type="button"*/}
                    {/*    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"*/}
                    {/*  >*/}
                    {/*    /!* Heroicon name: solid/bell *!/*/}
                    {/*    <svg*/}
                    {/*      className="-ml-1 mr-2 h-5 w-5 text-gray-400"*/}
                    {/*      xmlns="http://www.w3.org/2000/svg"*/}
                    {/*      viewBox="0 0 20 20"*/}
                    {/*      fill="currentColor"*/}
                    {/*      aria-hidden="true"*/}
                    {/*    >*/}
                    {/*      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />*/}
                    {/*    </svg>*/}
                    {/*    <span>Subscribe</span>*/}
                    {/*  </button>*/}
                    {/*</div>*/}
                  </div>
                  <aside className="mt-8 xl:hidden">
                    <h2 className="sr-only">Details</h2>
                    <div className="space-y-5">
                      <div className="flex items-center space-x-2">
                        {/* Heroicon name: solid/lock-open */}
                        <svg
                          className="h-5 w-5 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                        </svg>
                        <span className="text-green-700 text-sm font-medium">
                          Open Issue
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* Heroicon name: solid/chat-alt */}
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-900 text-sm font-medium">
                          4 comments
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* Heroicon name: solid/calendar */}
                        <svg
                          className="h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-900 text-sm font-medium">
                          Created on{' '}
                          <time dateTime="2020-12-02">Dec 2, 2020</time>
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-b border-gray-200 py-6 space-y-8">
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">
                          Assignees
                        </h2>
                        <ul className="mt-3 space-y-3">
                          <li className="flex justify-start">
                            <a href="/" className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-5 w-5 rounded-full"
                                  src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                  alt=""
                                />
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                Eduardo Benz
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h2 className="text-sm font-medium text-gray-500">
                          Tags
                        </h2>
                        <ul className="mt-2 leading-8">
                          <li className="inline">
                            <a
                              href="/"
                              className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                            >
                              <div className="absolute flex-shrink-0 flex items-center justify-center">
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-rose-500"
                                  aria-hidden="true"
                                ></span>
                              </div>
                              <div className="ml-3.5 text-sm font-medium text-gray-900">
                                Bug
                              </div>
                            </a>
                          </li>
                          <li className="inline">
                            <a
                              href="/"
                              className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                            >
                              <div className="absolute flex-shrink-0 flex items-center justify-center">
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-indigo-500"
                                  aria-hidden="true"
                                ></span>
                              </div>
                              <div className="ml-3.5 text-sm font-medium text-gray-900">
                                Accessibility
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                  <div className="py-3 xl:pt-6 xl:pb-0">
                    <div className="prose max-w-none">
                      <p>
                        Thank you for attending our fifth class! Here is the
                        recording of the lecture: https://youtu.be/Mh3Fgjm8JGc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <section
                aria-labelledby="activity-title"
                className="mt-8 xl:mt-10"
              >
                <div>
                  <div className="divide-y divide-gray-200">
                    <div className="pb-4">
                      <h2
                        id="activity-title"
                        className="text-lg font-medium text-gray-900"
                      >
                        Problems
                      </h2>
                    </div>
                    <div>
                      {/* Activity feed*/}
                      <div className="flow-root">
                        <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
                          <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
                            <div className="flex items-center justify-between space-x-4">
                              {/* Repo name and link */}
                              <div className="min-w-0 space-y-3">
                                <div className="flex items-center space-x-3">
                                  <span
                                    className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center"
                                    aria-hidden="true"
                                  >
                                    <span className="h-2.5 w-2.5 bg-green-400 rounded-full"></span>
                                  </span>

                                  <span className="block">
                                    <h2 className="font-medium leading-3">
                                      <Link to="/groups/myGroupId/post/postId/problems/problemId">
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        ></span>
                                        Milk Pails
                                      </Link>
                                    </h2>
                                  </span>
                                </div>
                                <div className="relative group flex items-center space-x-2.5">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                                    200 points
                                  </span>
                                </div>
                              </div>
                              <div className="sm:hidden">
                                {/* Heroicon name: solid/chevron-right */}
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              {/* Repo meta info */}
                              <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                                <p className="flex items-center space-x-4">
                                  <Link
                                    to="/"
                                    className="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
                                  >
                                    View Problem
                                  </Link>
                                </p>
                                <p className="flex text-gray-500 text-sm space-x-2">
                                  <span>Source: Bronze</span>
                                  <span aria-hidden="true">&middot;</span>
                                  <span>Difficulty: Easy</span>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
                            <div className="flex items-center justify-between space-x-4">
                              {/* Repo name and link */}
                              <div className="min-w-0 space-y-3">
                                <div className="flex items-center space-x-3">
                                  <span
                                    className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center"
                                    aria-hidden="true"
                                  >
                                    <span className="h-2.5 w-2.5 bg-green-400 rounded-full"></span>
                                  </span>

                                  <span className="block">
                                    <h2 className="font-medium leading-3">
                                      <Link to="/groups/myGroupId/post/postId/problems/problemId">
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        ></span>
                                        Milk Pails
                                      </Link>
                                    </h2>
                                  </span>
                                </div>
                                <div className="relative group flex items-center space-x-2.5">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                                    200 points
                                  </span>
                                </div>
                              </div>
                              <div className="sm:hidden">
                                {/* Heroicon name: solid/chevron-right */}
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              {/* Repo meta info */}
                              <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                                <p className="flex items-center space-x-4">
                                  <Link
                                    to="/"
                                    className="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
                                  >
                                    View Problem
                                  </Link>
                                </p>
                                <p className="flex text-gray-500 text-sm space-x-2">
                                  <span>Source: Bronze</span>
                                  <span aria-hidden="true">&middot;</span>
                                  <span>Difficulty: Easy</span>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
                            <div className="flex items-center justify-between space-x-4">
                              {/* Repo name and link */}
                              <div className="min-w-0 space-y-3">
                                <div className="flex items-center space-x-3">
                                  <span
                                    className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center"
                                    aria-hidden="true"
                                  >
                                    <span className="h-2.5 w-2.5 bg-green-400 rounded-full"></span>
                                  </span>

                                  <span className="block">
                                    <h2 className="font-medium leading-3">
                                      <Link to="/groups/myGroupId/post/postId/problems/problemId">
                                        <span
                                          className="absolute inset-0"
                                          aria-hidden="true"
                                        ></span>
                                        Milk Pails
                                      </Link>
                                    </h2>
                                  </span>
                                </div>
                                <div className="relative group flex items-center space-x-2.5">
                                  <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
                                    200 points
                                  </span>
                                </div>
                              </div>
                              <div className="sm:hidden">
                                {/* Heroicon name: solid/chevron-right */}
                                <svg
                                  className="h-5 w-5 text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                              {/* Repo meta info */}
                              <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                                <p className="flex items-center space-x-4">
                                  <Link
                                    to="/"
                                    className="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
                                  >
                                    View Problem
                                  </Link>
                                </p>
                                <p className="flex text-gray-500 text-sm space-x-2">
                                  <span>Source: Bronze</span>
                                  <span aria-hidden="true">&middot;</span>
                                  <span>Difficulty: Easy</span>
                                </p>
                              </div>
                            </div>
                          </li>

                          {/* More items... */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <aside className="hidden xl:block xl:pl-8">
              <h2 className="sr-only">Details</h2>
              <div className="space-y-5">
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-green-700 text-sm font-medium">
                    400 / 1600 points earned
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Heroicon name: solid/calendar */}
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-900 text-sm font-medium">
                    Due on March 3rd, 2021
                  </span>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 py-6 space-y-8">
                <div>
                  <h2 className="font-medium text-gray-500">
                    Assignment Leaderboard
                  </h2>
                  <ul>
                    <li className="py-3">
                      <div className="flex items-center lg:space-x-4">
                        <div className="flex-shrink-0 hidden lg:block">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            1. Leonard Krasner
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            1500 points
                          </p>
                        </div>
                        <div className="ml-4">
                          <a
                            href="/"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex items-center lg:space-x-4">
                        <div className="flex-shrink-0 hidden lg:block">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            2. Leonard Krasner
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            1500 points
                          </p>
                        </div>
                        <div className="ml-4">
                          <a
                            href="/"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex items-center lg:space-x-4">
                        <div className="flex-shrink-0 hidden lg:block">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            3. Leonard Krasner
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            1500 points
                          </p>
                        </div>
                        <div className="ml-4">
                          <a
                            href="/"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="text-sm text-gray-700 italic text-center">
                      7 more people
                    </li>
                    <li className="py-3">
                      <div className="flex items-center lg:space-x-4">
                        <div className="flex-shrink-0 hidden lg:block">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            11. Jeffrey Meng
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            1100 points
                          </p>
                        </div>
                        <div className="ml-4">
                          <a
                            href="/"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="my-1 py-2 bg-light-blue-50 rounded-full px-4 -mx-4">
                      <div className="flex items-center lg:space-x-4">
                        <div className="flex-shrink-0 hidden lg:block">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            12. Nathan Wang
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            1000 points
                          </p>
                        </div>
                        <div className="ml-4">
                          <a
                            href="/"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex items-center lg:space-x-4">
                        <div className="flex-shrink-0 hidden lg:block">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt=""
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            13. Billy Bob
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            900 points
                          </p>
                        </div>
                        <div className="ml-4">
                          <a
                            href="/"
                            className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="py-2 text-sm text-gray-700 italic text-center">
                      12 more people
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

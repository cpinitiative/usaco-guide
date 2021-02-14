import * as React from 'react';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import { Link } from 'gatsby';
import Breadcrumbs from '../Breadcrumbs';

export default function ProblemPage() {
  return (
    <>
      <TopNavigationBar />
      <nav className="bg-white flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4" />
      </nav>
      <main
        className="flex-1 relative overflow-y-auto focus:outline-none"
        tabIndex={-1}
      >
        <div className="pb-8 xl:pb-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl xl:grid xl:grid-cols-3">
            <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
              <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Milk Pails
                  </h1>
                  <p className="mt-2 text-sm text-gray-500">Class 5 Homework</p>
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
                      Created on <time dateTime="2020-12-02">Dec 2, 2020</time>
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
                    <h2 className="text-sm font-medium text-gray-500">Tags</h2>
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
                              className="h-1.5 w-1.5 rounded-full bg-light-blue-500"
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
              <div className="py-3 xl:pt-6 xl:pb-10">
                <div className="prose max-w-none">
                  <p>
                    <a
                      href="http://www.usaco.org/index.php?page=viewproblem2&cpid=615"
                      target="_blank"
                    >
                      Milk Pails Problem Statement
                    </a>
                  </p>
                </div>
              </div>
              <section aria-labelledby="activity-title">
                <div className="pb-4">
                  <h2
                    id="activity-title"
                    className="text-xl font-medium text-gray-900"
                  >
                    Submit Code
                  </h2>
                </div>
                <div>
                  <textarea
                    rows={3}
                    className="shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border-gray-300 font-mono"
                    placeholder="Paste code here, or drag and drop a file here."
                  />
                </div>
                <div className="mt-1 text-sm space-x-2 text-gray-500">
                  Drag and drop a file on the textbox, or{' '}
                  <a href="/" className="hover:text-gray-900 underline">
                    click here
                  </a>{' '}
                  to choose a file.
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Submit Code
                </button>
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
                    0 / 100 points earned
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#fff"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span className="text-gray-900 text-sm font-medium">
                    Difficulty: Easy
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span className="text-gray-900 text-sm font-medium">
                    Source: USACO
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
                  <h2 className="font-medium text-gray-600">My Submissions</h2>
                  <p className="text-sm text-gray-500 mt-2">
                    No submissions yet!
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

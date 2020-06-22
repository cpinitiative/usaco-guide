import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function IndexPage(props: PageProps) {
  return (
    <Layout>
      <SEO title={null} />

      {/* Begin Hero */}
      <div className="relative bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width="640"
            height="784"
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x="118"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y="72"
              width="640"
              height="640"
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x="118"
              width="404"
              height="784"
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>

        <div
          className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32 border-blue-600"
          style={{ borderTopWidth: '12px' }}
        >
          <main className="mt-8 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Pre-Release
                </div>
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  USACO <span className="text-blue-600">Guide</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A free collection of <b>curated, high-quality resources</b> to
                  take you from Bronze to Platinum and beyond.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/intro"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      View Guide
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#learn-more"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width="640"
                  height="784"
                  fill="none"
                  viewBox="0 0 640 784"
                >
                  <defs>
                    <pattern
                      id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                      x="118"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    y="72"
                    width="640"
                    height="640"
                    className="text-gray-50"
                    fill="currentColor"
                  />
                  <rect
                    x="118"
                    width="404"
                    height="784"
                    fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                  />
                </svg>
                <div className="relative mx-auto xl:mr-0 w-full rounded-lg shadow-lg lg:max-w-md">
                  <a
                    href="https://www.youtube.com/watch?v=ueNT-w7Oluw"
                    target="_blank"
                    className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
                  >
                    <img
                      className="w-full"
                      src="https://img.youtube.com/vi/ueNT-w7Oluw/maxresdefault.jpg"
                      alt="Woman making a sale"
                    />
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <svg
                        className="h-20 w-20 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 84 84"
                      >
                        <circle
                          opacity="0.9"
                          cx="42"
                          cy="42"
                          r="42"
                          fill="white"
                        />
                        <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* End Hero */}

      <div className="py-12 bg-white" id="learn-more">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              About This Guide
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Not Just Another Resource.
            </h3>
            <p className="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">
              This is more than "just another resource." This is the first-ever
              comprehensive, organized roadmap carefully designed and crafted
              for USACO contestants – available to everyone, for free.
            </p>

            <div className="max-w-3xl mx-auto bg-yellow-50 rounded-md border-yellow-400 border p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm leading-5 text-yellow-700 text-left">
                    This guide is not a syllabus. Topics on this guide reflect{' '}
                    <i>past</i> problems, not future problems.
                  </p>
                  <p className="mt-3 text-sm leading-5 md:mt-0 md:ml-6">
                    <a
                      href="#"
                      className="whitespace-no-wrap font-medium text-yellow-700 hover:text-yellow-600 transition ease-in-out duration-150"
                    >
                      Learn More &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Experienced Authors
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      This guide is written by top USACO contestants, including
                      two-time IOI winner and USACO Problemsetter{' '}
                      <a
                        href="https://github.com/bqi343"
                        className="underline text-blue-500"
                      >
                        Benjamin Qi
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Calibrated Difficulty
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      This guide is targeted towards all contestants, regardless
                      of their division. You'll find problems suitable for you.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Improve Faster
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Stop wasting time learning topics you already know. Skip
                      over easy topics or delve deeper into difficult ones; the
                      choice is yours.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Officially Recognized
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      This guide is developed in collaboration with USACO Staff
                      and USACO Director Dr. Brian Dean.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-xl md:text-2xl font-bold text-blue-200">
            Unsure how to get started?
            <br />
            Overwhelmed by too many resources?
            <br />
            Looking to take your CP skills to the next level?
            <br />
          </p>

          <p className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mt-8">
            This is the guide for you.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <Link
                to="/intro"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                View Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Begin FAQ */}
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-100 pt-10">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Is this a Syllabus?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      <b>No. This guide is NOT a syllabus.</b> USACO does not
                      have an official syllabus. This guide merely lists topics
                      that have <i>historically</i> appeared in USACO contests;
                      it makes no guarantees about the topics in future USACO
                      contests.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How can I contribute/report a problem?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      If you would like to contribute towards this guide, please
                      contact Nathan Wang at{' '}
                      <a
                        className="text-blue-600 underline"
                        href="mailto:nathan.r.wang@gmail.com"
                      >
                        nathan.r.wang@gmail.com
                      </a>
                      . If you encounter an issue while using the guide (website
                      bug, typo, broken link, unclear explanation, etc), use the
                      "Report an Issue" button on the bottom left of the screen,
                      or contact Nathan Wang directly.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Is this guide for Platinum contestants?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      While we offer many resources targeted towards platinum
                      contestants, the platinum division has too many topics for
                      us to cover everything. For platinum contestants, we
                      recommend you treat this as more of a <i>resource</i> than
                      a <i>guide</i>.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How can I get help?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      If you get stuck, feel free to ask for help by clicking
                      the "Get Help" button on the bottom left of the screen. It
                      may take some time for your question to be addressed. You
                      may also contact Nathan Wang at{' '}
                      <a
                        className="text-blue-600 underline"
                        href="mailto:nathan.r.wang@gmail.com"
                      >
                        nathan.r.wang@gmail.com
                      </a>
                      , but there may be a delay in the response.
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/*End FAQ*/}

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto pb-12 px-4">
          <p className="text-center text-base leading-6 text-gray-400">
            No part of this website may be reproduced or commercialized in any
            manner without prior written permission.{' '}
            <Link to="/license" className="underline">
              Learn More.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

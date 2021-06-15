import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import * as React from 'react';
import { useRef } from 'react';
import AuthorsSection from '../components/Index/AuthorsSection';
import ContributorsSection from '../components/Index/ContributorsSection';
import TrustedBy from '../components/Index/TrustedBy';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import Video from '../components/Video';

export default function IndexPage(): JSX.Element {
  const learnMoreRef = useRef<HTMLDivElement>();

  return (
    <Layout>
      <SEO title={null} />

      {/*<a*/}
      {/*  href="http://usaco.org/"*/}
      {/*  className="block text-base font-medium text-center text-white bg-blue-600 py-2"*/}
      {/*>*/}
      {/*  &larr; Back to usaco.org*/}
      {/*</a>*/}
      <TopNavigationBar indexPage />

      {/* Begin Hero */}
      <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
          <main className="mt-8 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
                <div>
                  <OutboundLink
                    href="https://github.com/cpinitiative/usaco-guide/?ref=top_badge"
                    target="_blank"
                    className="text-sm font-semibold uppercase tracking-wide text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-300 sm:text-base lg:text-sm xl:text-base transition"
                  >
                    Open Source!
                  </OutboundLink>
                </div>
                <h2 className="mt-1 text-4xl tracking-tight leading-10 font-black text-gray-900 dark:text-gray-100 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  USACO{' '}
                  <span className="text-blue-600 dark:text-blue-200">
                    Guide
                  </span>
                </h2>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A free collection of <b>curated, high-quality resources</b> to
                  take you from Bronze to Platinum and beyond.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/dashboard/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white dark:text-blue-50 bg-blue-600 dark:bg-blue-700 hover:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition md:py-4 md:text-lg md:px-10"
                    >
                      View Guide
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#learn-more"
                      onClick={e => {
                        e.preventDefault();
                        learnMoreRef.current.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 dark:text-blue-200 bg-blue-100 dark:bg-blue-900 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 dark:focus:border-blue-800 transition md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="invisible lg:visible absolute transform translate-x-32 text-blue-50 dark:text-gray-800"
                >
                  <path
                    fill="currentColor"
                    d="M60,-32.3C73.6,-11,77.7,18.1,66.1,39.4C54.5,60.8,27.3,74.4,1.3,73.7C-24.7,72.9,-49.5,57.9,-57,38.9C-64.5,19.9,-54.7,-3,-42.3,-23.5C-29.9,-44.1,-15,-62.3,4.1,-64.6C23.2,-67,46.3,-53.6,60,-32.3Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <Video />
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* End Hero */}

      <TrustedBy />

      <div
        className="py-12 dark:bg-dark-surface"
        id="learn-more"
        ref={learnMoreRef}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
              About This Guide
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl sm:leading-10">
              Not Just Another Resource.
            </h3>
            <p className="mt-4 max-w-4xl text-xl leading-7 text-gray-500 dark:text-gray-400 lg:mx-auto">
              This is more than "just another resource." This is a
              comprehensive, organized roadmap carefully designed and crafted
              for USACO contestants – available to everyone, for free.
            </p>

            <div className="inline-flex mx-auto rounded-md bg-yellow-50 dark:bg-yellow-700 dark:bg-opacity-25 p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-yellow-400 dark:text-yellow-500"
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
                <div className="ml-3">
                  <p className="text-sm leading-5 text-yellow-700 dark:text-yellow-300 text-left">
                    This guide is not an official syllabus. Topics on this guide
                    reflect <i>past</i> problems, not future problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
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
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Experienced Authors
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      This guide is written by top USACO contestants, including
                      two-time IOI winner and USACO Problemsetter{' '}
                      <a
                        href="https://github.com/bqi343"
                        className="underline text-blue-500 dark:text-blue-400"
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
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
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Calibrated Difficulty
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      This guide is targeted towards all contestants, regardless
                      of their division. You'll find problems suitable for you.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
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
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Improve Faster
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
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
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-700 text-white dark:text-blue-100">
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
                    <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
                      Stay Motivated
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">
                      Use our progress-tracking tools to track your progress in
                      the Guide and stay motivated.
                    </p>
                  </div>
                  {/*<div className="ml-4">*/}
                  {/*  <h4 className="text-lg leading-6 font-medium text-gray-900">*/}
                  {/*    Officially Recognized*/}
                  {/*  </h4>*/}
                  {/*  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-400">*/}
                  {/*    This guide is developed in collaboration with USACO Staff*/}
                  {/*    and USACO Director Dr. Brian Dean.*/}
                  {/*  </p>*/}
                  {/*</div>*/}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-900 to-purple-900 dark:from-dark-surface dark:to-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:text-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-200 dark:text-blue-300 space-y-2 sm:space-y-0">
            <p>Unsure how to get started?</p>
            <p>Overwhelmed by too many resources?</p>
            <p>Looking to take your CP skills to the next level?</p>
          </div>

          <p className="leading-9 sm:leading-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white dark:text-gray-100 mt-8">
            This is the guide for you.
          </p>

          <div className="mt-8 flex sm:justify-center">
            <div className="rounded-md shadow">
              <Link
                to="/dashboard/"
                className="w-full flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 md:py-4 md:text-lg md:px-10 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:border-blue-700 dark:focus:border-blue-800 focus:shadow-outline-blue transition"
              >
                View Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Begin FAQ */}
      <div className="bg-white dark:bg-dark-surface">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-gray-100">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-100 dark:border-gray-700 pt-10">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    What is the USACO?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      USACO stands for the{' '}
                      <OutboundLink
                        href="http://www.usaco.org/"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USA Computing Olympiad
                      </OutboundLink>
                      . Check out the{' '}
                      <Link
                        to="/usaco-faq"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USACO FAQ Page
                      </Link>{' '}
                      for more information.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this an official syllabus?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      No, USACO does not have an official syllabus. This guide
                      merely lists topics that have <i>historically</i> appeared
                      in USACO contests; it makes no guarantees about the topics
                      in future USACO contests.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How do I report a problem or ask a question?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      If you encounter an issue while using the guide (website
                      bug, typo, broken link, unclear explanation, etc), use the
                      "Contact Us" button. Alternatively, email us at{' '}
                      <a
                        href="mailto:usacoguide@gmail.com"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        usacoguide@gmail.com
                      </a>
                      .
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    I'm looking for classes, club curriculum...
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Check out the{' '}
                      <OutboundLink
                        href="https://joincpi.org/?ref=home"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        Competitive Programming Initiative
                      </OutboundLink>
                      !
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this guide for non-USACO competitive programmers?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Of course! While we structure our content around USACO,
                      feel free to use this guide even if you don't do USACO.
                      You will still learn a lot from it!
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How can I get help?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      If you get stuck, head over to the{' '}
                      <OutboundLink
                        href="https://forum.usaco.guide"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USACO Forum
                      </OutboundLink>{' '}
                      for help.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How can I contribute?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      To learn more about contributing, please visit{' '}
                      <Link
                        to="/general/contributing"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        this page
                      </Link>
                      . We appreciate any and all contributions!
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this open source?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Yes! Check out our{' '}
                      <OutboundLink
                        href="https://github.com/cpinitiative/usaco-guide/?ref=home"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        Github Repository
                      </OutboundLink>
                      .
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/*End FAQ*/}

      <AuthorsSection />

      <ContributorsSection />

      <div className="bg-white dark:bg-dark-surface">
        <div className="max-w-screen-xl mx-auto py-12 px-4">
          <p className="text-center text-base leading-6 text-gray-400 dark:text-dark-med-emphasis">
            &copy; 2021 Competitive Programming Initiative. Powered by{' '}
            <a
              href="https://vercel.com/?utm_source=cp-initiative&utm_campaign=oss"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Vercel
            </a>
            .
            <br />
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

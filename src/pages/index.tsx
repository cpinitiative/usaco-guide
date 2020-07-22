import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Author, Authors } from '../../content/authors/authors';
import TopNavigationBar from '../components/TopNavigationBar';

const AuthorCard = ({
  author,
  gatsbyImage,
}: {
  author: Author;
  gatsbyImage: any;
}) => {
  const socialMedia = {
    email: {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: x => `mailto:${x}`,
    },
    facebook: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: x => `https://www.facebook.com/${x}`,
    },
    linkedin: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1792 1792">
          <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
        </svg>
      ),
      link: x => `https://www.linkedin.com/in/${x}`,
    },
    github: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: x => `https://github.com/${x}`,
    },
    codeforces: {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
        </svg>
      ),
      link: x => `https://codeforces.com/profile/${x}`,
    },
    website: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      ),
      link: x => x,
    },
  };
  return (
    <div
      className={`py-8 sm:py-12 lg:py-8 px-4 sm:flex sm:flex-col xl:py-16 sm:px-8 border border-blue-900`}
    >
      <blockquote className="sm:flex-grow sm:flex sm:items-center text-center sm:text-left max-w-sm sm:max-w-3xl mx-auto w-full">
        <div className="flex-shrink-0">
          <div className={`inline-flex rounded-full border-2  border-white`}>
            <div className="w-36 h-36 md:h-48 md:w-48 lg:h-36 lg:w-36 xl:h-48 xl:w-48">
              <Img
                className="rounded-full"
                fixed={gatsbyImage.fixed}
                alt={author.name}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-8 lg:ml-6 xl:ml-8">
          <div className="space-x-2">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-700 text-blue-100">
              {author.title}
            </span>
          </div>
          <div className="text-3xl font-bold text-white">{author.name}</div>
          <div className="mt-4 text-base text-blue-200">
            <p className="relative">{author.blurb}</p>
          </div>
          <div className="mt-2 flex space-x-2 justify-center sm:justify-start">
            {Object.keys(socialMedia)
              .filter(sm => author.hasOwnProperty(sm))
              .map(sm => (
                <a
                  key={author.name + sm}
                  href={socialMedia[sm].link(author[sm])}
                  className="text-blue-300 hover:text-blue-200 transition duration-100"
                >
                  <span className="sr-only">{sm}</span>
                  {socialMedia[sm].icon}
                </a>
              ))}
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default function IndexPage(props: PageProps) {
  return (
    <Layout>
      <SEO title={null} />
      <TopNavigationBar indexPage />

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
              y="0"
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

        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
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
                      to="/dashboard/"
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

            <div className="inline-flex mx-auto bg-yellow-50 rounded-md p-4 mt-8">
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
              <div className="ml-3">
                <p className="text-sm leading-5 text-yellow-700 text-left">
                  This guide is not an official syllabus. Topics on this guide
                  reflect <i>past</i> problems, not future problems.
                </p>
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
                      Stay Motivated
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Use our progress-tracking tools to track your progress in
                      the Guide and stay motivated.
                    </p>
                  </div>
                  {/*<div className="ml-4">*/}
                  {/*  <h4 className="text-lg leading-6 font-medium text-gray-900">*/}
                  {/*    Officially Recognized*/}
                  {/*  </h4>*/}
                  {/*  <p className="mt-2 text-base leading-6 text-gray-500">*/}
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
                to="/dashboard/"
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
                    Is this an official syllabus?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      <b>No, USACO does not have an official syllabus.</b>
                      This guide merely lists topics that have{' '}
                      <i>historically</i> appeared in USACO contests; it makes
                      no guarantees about the topics in future USACO contests.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How can I report a problem?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      If you encounter an issue while using the guide (website
                      bug, typo, broken link, unclear explanation, etc), use the
                      "Contact Us" button on the bottom left of the screen, or
                      contact the guide coordinator directly.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How can I contribute?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      To learn more about contributing, please visit{' '}
                      <Link
                        to="/intro/using-this-guide/#for-contributors"
                        className="text-blue-600 underline"
                      >
                        this page
                      </Link>
                      . We appreciate any and all contributions!
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Is this open source?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      Currently the site is closed source for potential security
                      concerns, though we're looking for a way for others to
                      contribute more easily. If there are any points
                      for/against open-sourcing this project, please let the
                      guide coordinator know.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Is this guide for non-USACO competitive programmers?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      Of course! While we structure our content around USACO,
                      feel free to use this guide even if you don't do USACO.
                      You will still learn a lot from it!
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
                      the "Contact Us" button on the bottom left of the screen.
                      It may take some time for your question to be addressed.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Who should I contact?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500">
                      If you have any questions related to this guide, please
                      contact the guide coordinator, Nathan Wang, at{' '}
                      <a
                        className="text-blue-600 underline"
                        href="mailto:nathan.r.wang@gmail.com"
                      >
                        nathan.r.wang@gmail.com
                      </a>
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

      <section className="bg-blue-800 overflow-hidden">
        <div className="py-6 sm:py-12 text-center border-b-2 border-blue-900">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white px-4">
            Authors you can trust.
          </h2>
        </div>
        <div className="lg:grid lg:grid-cols-2 -m-px">
          {Authors.map(author => (
            <AuthorCard
              author={author}
              key={author.name}
              gatsbyImage={
                (props.data as any).allFile.edges.find(
                  x => x.node.name === author.photo
                ).node.childImageSharp
              }
            />
          ))}
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto py-12 px-4">
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

export const query = graphql`
  query {
    allFile(filter: { relativePath: { regex: "/^authors/images/.*/" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 192, height: 192, cropFocus: CENTER, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
          name
        }
      }
    }
  }
`;

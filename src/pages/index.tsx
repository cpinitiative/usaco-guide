import * as React from "react";
import {Link, PageProps} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function IndexPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="" />

      {/* Begin Hero */}
      <div className="relative bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-0">
          <svg className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784"
               fill="none" viewBox="0 0 640 784">
            <defs>
              <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20"
                       patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
            <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
          </svg>
        </div>

        <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32 border-blue-600" style={{ borderTopWidth: "12px" }}>
          <main className="mt-8 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
                <h2
                  className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                  USACO <span className="text-blue-600">Guide</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A free collection of <b>curated, high-quality resources</b> to take you from Bronze to Platinum and beyond.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/intro"
                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      View Guide
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#learn-more"
                       className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <svg
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                  width="640" height="784" fill="none" viewBox="0 0 640 784">
                  <defs>
                    <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20"
                             patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect y="72" width="640" height="640" className="text-gray-50" fill="currentColor" />
                  <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                </svg>
                <div className="relative mx-auto xl:mr-0 w-full rounded-lg shadow-lg lg:max-w-md">
                  <a href="https://www.youtube.com/watch?v=ueNT-w7Oluw"
                     target="_blank"
                          className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
                    <img className="w-full"
                         src="https://img.youtube.com/vi/ueNT-w7Oluw/maxresdefault.jpg"
                         alt="Woman making a sale" />
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                        <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                        <path
                          d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
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

      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase">About This Guide</p>
            <h3
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Not Just Another Resource.
            </h3>
            <p className="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">
              This is more than "just another resource." This is the first-ever comprehensive, organized roadmap carefully designed and crafted for USACO contestants – available to everyone, for free.
            </p>
          </div>

          <div className="mt-12">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Experienced Authors</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      This guide is written by top USACO contestants, including two-time IOI winner and USACO Problemsetter <a href="https://github.com/bqi343" className="underline text-blue-500">Benjamin Qi</a>.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Calibrated Difficulty</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      This guide is targeted towards all contestants, regardless of their division. You'll find problems suitable for you.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Improve Faster</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Stop wasting time learning topics you already know. Skip over easy topics or delve deeper into difficult ones; the choice is yours.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">Join the Community
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Stuck on a problem? Have a burning question to ask? Join the <a href="#" className="text-blue-500 underline">USACO Forum</a> to get help from other USACO members.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-900" id="learn-more">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <p className="text-xl md:text-2xl font-bold text-blue-200">
            Unsure how to get started?<br/>
            Overwhelmed by too many resources?<br/>
            Looking to take your CP skills to the next level?<br/>
          </p>

          <p className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mt-8">This is the guide for you.</p>

          <div className="mt-8 flex justify-center">
            <div className="rounded-md shadow">
              <Link to="/intro"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                View Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
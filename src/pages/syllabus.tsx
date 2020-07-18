import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidebar, { SidebarLogo } from '../components/Sidebar/Sidebar';
import { useState } from 'react';
// @ts-ignore
import logo from '../assets/logo.svg';
import SidebarLink from '../components/Sidebar/SidebarLink';
import tw from 'twin.macro';

export default function SyllabusPage(props: PageProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <Layout>
      <SEO title="Syllabus" />
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar
          isMobileNavOpen={isMobileNavOpen}
          onMobileNavStateChange={setIsMobileNavOpen}
          mobileSidebarContent={<>todo</>}
          desktopSidebarContent={
            <>
              <SidebarLink
                url="/intro"
                lineColorStyle={tw`bg-blue-700`}
                dotColorStyle={tw`bg-blue-700`}
                textStyle={tw`text-blue-700 font-medium`}
                isActive={true}
              >
                Intro
              </SidebarLink>
              <SidebarLink
                url="/intro"
                lineColorStyle={tw`bg-gray-200`}
                dotColorStyle={tw`bg-gray-200`}
                textStyle={tw`font-medium`}
                isActive={false}
              >
                Bronze
              </SidebarLink>
              <SidebarLink
                url="/intro"
                lineColorStyle={tw`bg-gray-200`}
                dotColorStyle={tw`bg-gray-200`}
                textStyle={tw`font-medium`}
                isActive={false}
              >
                Silver
              </SidebarLink>
              <SidebarLink
                url="/intro"
                lineColorStyle={tw`bg-gray-200`}
                dotColorStyle={tw`bg-gray-200`}
                textStyle={tw`font-medium`}
                isActive={false}
              >
                Gold
              </SidebarLink>
              <SidebarLink
                url="/intro"
                lineColorStyle={tw`bg-gray-200`}
                dotColorStyle={tw`bg-gray-200`}
                textStyle={tw`font-medium`}
                isActive={false}
              >
                Platinum
              </SidebarLink>
              <SidebarLink
                url="/intro"
                lineColorStyle={tw`bg-gray-200`}
                dotColorStyle={tw`bg-gray-200`}
                textStyle={tw`font-medium`}
                isActive={false}
              >
                Advanced
              </SidebarLink>
            </>
          }
        >
          <div className="relative flex-shrink-0 flex h-16 bg-white shadow">
            <button
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
              aria-label="Open sidebar"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <div className="flex-1 flex justify-between">
              <div className="flex-1 flex ml-6">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search_field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        />
                      </svg>
                    </div>
                    <input
                      id="search_field"
                      className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <button
                className="group border-l border-gray-200 px-4 sm:px-6 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500 flex items-center transition duration-150 ease-in-out"
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-gray-600 ml-3 font-medium group-hover:text-gray-800 hidden sm:block">
                  View Progress
                </span>
              </button>
            </div>
          </div>
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabIndex={0}
          >
            <div className="flex pt-2 pb-6 md:py-6 px-4 sm:px-6 md:px-8 overflow-x-auto">
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
              <div className="bg-white shadow sm:rounded-lg w-full max-w-xl">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Continue: Introduction to Competitive Programming
                  </h3>
                  <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                    <p>
                      Pick up where you left off. What is competitive
                      programming? Let's take a look!
                    </p>
                  </div>
                  <div className="mt-3 text-sm leading-5">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                    >
                      Continue Module &rarr;
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow sm:rounded-lg ml-6 w-full max-w-md">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    🔥 Six Day Streak: Keep it up!
                  </h3>
                  <div className="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                    <p>You've visited this guide for six consecutive days.</p>
                  </div>
                  <div className="mt-3 text-sm leading-5">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"
                    >
                      View Progress &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 pb-6 md:py-6 px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-semibold">1. About this Guide</h1>
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
              <h1 className="text-2xl font-semibold">2. Getting Started</h1>
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
              <h1 className="text-2xl font-semibold">1. About this Guide</h1>
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </Sidebar>
      </div>
    </Layout>
  );
}

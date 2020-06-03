import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative bg-blue-600 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width={404}
               height={784} fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20}
                       patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404} height={784} fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x={0} y={0} width={20} height={20}
                       patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>
      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2
              className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
              USACO Guide
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A collection of curated, high-quality resources to take you from Bronze to Platinum.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#content"
                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 pb-8" id="content">
      <div className="py-12 text-center">
        <h2 className="font-bold text-4xl">Intro</h2>
      </div>
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
          <div className="border-b border-gray-200 px-4 py-4 sm:px-6  flex items-center">
            <h2 className="font-bold text-xl mr-2">
              Prerequisites
            </h2>
            <svg className="h-8 w-8 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="px-4 py-4 sm:p-6">
            <ul className="list-disc pl-6">
              <li>
                What you should know before starting
              </li>
              <li>
                Choosing a Language
              </li>
            </ul>
          </div>
          <a href="https://thecodingwizard.github.io/usaco-training-2.0/Intro_Prerequisites"
             className="block border-t border-gray-200 px-4 py-4 sm:px-6 text-blue-600 font-bold uppercase text-sm hover:bg-gray-50 transition duration-150">
            Read Lesson
          </a>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
          <div className="border-b border-gray-200 px-4 py-4 sm:px-6 flex items-center">
            <h2 className="font-bold text-xl mr-2">What is Competitive Programming?</h2>
            <svg className="h-8 w-8 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round"
                 strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="px-4 py-3 sm:p-6">
            <ul className="list-disc pl-6">
              <li>
                Contest Format
              </li>
              <li>
                Practicing and Debugging
              </li>
              <li>
                Contest Strategies
              </li>
            </ul>
          </div>
          <a href="#"
             className="block border-t border-gray-200 px-4 py-4 sm:px-6 text-blue-600 font-bold uppercase text-sm hover:bg-gray-50 transition duration-150">
            Read Lesson
          </a>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
          <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
            <h2 className="font-bold text-xl mr-3">Introductory Problems</h2>
          </div>
          <div className="px-4 py-3 sm:p-6">
            <p className="mb-3">If you're new to competitive programming, we recommend you try to solve a few of these
              problems. Once you're comfortable, move on!</p>
            Problem List:
            <ul className="ml-3 space-y-1 py-2">
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd" />
                </svg>
                <a className="text-blue-600" href="http://usaco.org/index.php?page=viewproblem2&cpid=567">Fence
                  Painting</a>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd" />
                </svg>
                <a className="text-blue-600" href="http://usaco.org/index.php?page=viewproblem2&cpid=987">Word
                  Processing</a>
              </li>
            </ul>
          </div>
          <a href="https://thecodingwizard.github.io/usaco-training-2.0/Intro_Problems"
             className="block border-t border-gray-200 px-4 py-4 sm:px-6 text-blue-600 font-bold uppercase text-sm hover:bg-gray-50 transition duration-150">
            Read Lesson
          </a>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg mb-8">
          <div className="border-b border-gray-200 px-4 py-4 sm:px-6 ">
            <h2 className="font-bold text-xl">Useful Containers</h2>
          </div>
          <div className="px-4 py-3 sm:p-6">
            <ul className="list-disc pl-6 mb-4">
              <li>Arrays (C++11)</li>
              <li>Vectors and ArrayList</li>
              <li>C++ Pairs</li>
              <li>Structs</li>
            </ul>
            Problem List:
            <ul className="ml-3 space-y-1 py-2">
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd" />
                </svg>
                <a className="text-blue-600" href="http://usaco.org/index.php?page=viewproblem2&cpid=567">Lorem
                  Ipsum</a>
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 mr-2 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd" />
                </svg>
                <a className="text-blue-600" href="http://usaco.org/index.php?page=viewproblem2&cpid=987">Lorem
                  Ipsum</a>
              </li>
            </ul>
          </div>
          <a href="#"
             className="block border-t border-gray-200 px-4 py-4 sm:px-6 text-blue-600 font-bold uppercase text-sm hover:bg-gray-50 transition duration-150">
            Read Lesson
          </a>
        </div>
      </div>
    </div>

  </Layout>
);

export default IndexPage;

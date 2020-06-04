import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SyllabusModule from "../components/SyllabusModule";
import { graphql } from "gatsby";
import Markdown from "../components/Markdown";

const renderModule = ({ node }) => {
  const data = node.frontmatter;
  if (!data.title) return;

  return (
    <SyllabusModule
      title={`${data.order}. ${data.title}`}
      url={data.slug}
      key={data.slug}
      problems={data.problems}
      author={data.author}
    >
      <Markdown htmlAst={node.excerptAst} className="markdown--syllabus" />
    </SyllabusModule>
  );
};

const IndexPage = ({ data }) => {
  const introModules = data.introModules.edges;
  const bronzeModules = data.bronzeModules.edges;
  const silverModules = data.silverModules.edges;
  const goldModules = data.goldModules.edges;
  const platModules = data.platModules.edges;

  const [selectedDivision, setSelectedDivision] = React.useState(0);
  const colors = ["blue", "orange", "teal", "yellow", "purple"];
  const color = colors[selectedDivision];

  // for purgecss, we have to list all the classes that are dynamically generated...
  /*
  border-blue-500 text-blue-600 focus:text-blue-800 focus:border-blue-700 border-blue-300 focus:border-blue-300 text-blue-500 text-blue-300 bg-blue-600
  border-orange-500 text-orange-600 focus:text-orange-800 focus:border-orange-700 border-orange-300 focus:border-orange-300 text-orange-500 text-orange-300 bg-orange-600
  border-teal-500 text-teal-600 focus:text-teal-800 focus:border-teal-700 border-teal-300 focus:border-teal-300 text-teal-500 text-teal-300 bg-teal-600
  border-yellow-500 text-yellow-600 focus:text-yellow-800 focus:border-yellow-700 border-yellow-300 focus:border-yellow-300 text-yellow-500 text-yellow-300 bg-yellow-600
  border-purple-500 text-purple-600 focus:text-purple-800 focus:border-purple-700 border-purple-300 focus:border-purple-300 text-purple-500 text-purple-300 bg-purple-600
  */
  // alternatively we can just not dynamically generate classes, but that seems more tedious.

  const selectedTabClasses = `flex-1 py-4 px-1 text-center border-b-2 border-${color}-500 font-bold text-lg leading-5 text-${color}-600 focus:outline-none focus:text-${color}-800 focus:border-${color}-700`,
    unselectedTabClasses = `flex-1 py-4 px-1 text-center border-b-2 border-transparent font-bold text-lg leading-5 text-gray-500 hover:text-gray-700 hover:border-${color}-300 focus:outline-none focus:text-gray-700 focus:border-${color}-300`;

  return (
    <Layout>
      <SEO title="Home" />

      {/* Begin Hero Section */}
      <div className={`relative bg-${color}-600 overflow-hidden transition duration-150`}>
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                 width={404}
                 height={784} fill="none" viewBox="0 0 404 784">
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20}
                         patternUnits="userSpaceOnUse">
                  <rect x={0} y={0} width={4} height={4} className={`text-${color}-500`} fill="currentColor" />
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
                  <rect x={0} y={0} width={4} height={4} className={`text-${color}-500`} fill="currentColor" />
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
              <p className={`mt-3 max-w-md mx-auto text-base text-${color}-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl`}>
                A collection of curated, high-quality resources to take you from Bronze to Platinum.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#content"
                     className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-${color}-500 hover:bg-${color}-50 hover:text-${color}-600 focus:outline-none focus:shadow-outline-${color} transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10`}>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="bg-gray-50 pb-8" id="content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">

          <div className="mb-8 bg-white shadow-md rounded-lg">
            <div className="sm:hidden">
              <select aria-label="Selected tab"
                      className="form-select block w-full"
                      onChange={e => setSelectedDivision(e.target.value - '0')}
                      value={selectedDivision}
              >
                <option value={0}>Intro</option>
                <option value={1}>Bronze</option>
                <option value={2}>Silver</option>
                <option value={3}>Gold</option>
                <option value={4}>Platinum</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <nav className="flex">
                <a href="#"
                   onClick={e => {e.preventDefault(); setSelectedDivision(0)}}
                   className={selectedDivision === 0 ? selectedTabClasses : unselectedTabClasses}>
                  Intro
                </a>
                <a href="#"
                   onClick={e => {e.preventDefault(); setSelectedDivision(1)}}
                   className={selectedDivision === 1 ? selectedTabClasses : unselectedTabClasses}>
                  Bronze
                </a>
                <a href="#"
                   onClick={e => {e.preventDefault(); setSelectedDivision(2)}}
                   className={selectedDivision === 2 ? selectedTabClasses : unselectedTabClasses}
                   aria-current="page">
                  Silver
                </a>
                <a href="#"
                   onClick={e => {e.preventDefault(); setSelectedDivision(3)}}
                   className={selectedDivision === 3 ? selectedTabClasses : unselectedTabClasses}>
                  Gold
                </a>
                <a href="#"
                   onClick={e => {e.preventDefault(); setSelectedDivision(4)}}
                   className={selectedDivision === 4 ? selectedTabClasses : unselectedTabClasses}>
                  Platinum
                </a>
              </nav>
            </div>
          </div>

          {selectedDivision === 0 && introModules.map(renderModule)}
          {selectedDivision === 1 && bronzeModules.map(renderModule)}
          {selectedDivision === 2 && silverModules.map(renderModule)}
          {selectedDivision === 3 && goldModules.map(renderModule)}
          {selectedDivision === 4 && platModules.map(renderModule)}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    introModules: allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/0_Intro/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            author
            problems
            order
          }
          excerptAst
        }
      }
    }
    bronzeModules: allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/1_Bronze/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            author
            problems
            order
          }
          excerptAst
        }
      }
    }
    silverModules: allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/2_Silver/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            author
            problems
            order
          }
          excerptAst
        }
      }
    }
    goldModules: allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/3_Gold/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            author
            problems
            order
          }
          excerptAst
        }
      }
    }
    platModules: allMarkdownRemark(sort: {fields: frontmatter___order}, filter: {fileAbsolutePath: {regex: "/4_Plat/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            author
            problems
            order
          }
          excerptAst
        }
      }
    }
  }
`;
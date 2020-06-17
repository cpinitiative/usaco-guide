import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SyllabusModule from "../components/SyllabusModule";
import { graphql, Link } from "gatsby";
import Markdown from "../components/Markdown";
import ModuleOrdering from "../../content/ordering";
import { getModule } from "../utils";

const renderModule = (node, idx, parentIdx = -1) => {
  if (node.hasOwnProperty("items")) {
    return node.items.map((x, i) => renderModule(x, i, idx));
  }

  const data = node.frontmatter;
  if (!data.title) return;

  return (
    <SyllabusModule
      title={`${parentIdx !== -1 ? (parentIdx+1)+"." : ""}${idx+1}. ${data.title}`}
      url={node.slug}
      key={node.slug}
      problems={data.problems}
      prerequisites={data.prerequisites}
      author={data.author}
    >
      <Markdown htmlAst={node.excerptAst} className="markdown--syllabus" />
    </SyllabusModule>
  );
};

export default function Template(props) {
  const data = props.data;

  const allModules = data.modules.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = cur.node;
    return acc;
  }, {});

  const [selectedDivision, setSelectedDivision] = React.useState(props.pageContext.division);
  const divisions = ["intro", "general", "bronze", "silver", "gold", "plat"];
  const colors = ["blue", "pink", "orange", "teal", "yellow", "purple"];
  const color = colors[selectedDivision];
  // const module = modules[selectedDivision];
  // console.log(module);
  const module = getModule(allModules, divisions[selectedDivision]);

  // for purgecss, we have to list all the classes that are dynamically generated...
  /*
  bg-blue-500 hover:bg-blue-50 hover:text-blue-600 focus:shadow-outline-blue
  bg-pink-500 hover:bg-pink-50 hover:text-pink-600 focus:shadow-outline-pink
  bg-orange-500 hover:bg-orange-50 hover:text-orange-600 focus:shadow-outline-orange
  bg-teal-500 hover:bg-teal-50 hover:text-teal-600 focus:shadow-outline-teal
  bg-yellow-500 hover:bg-yellow-50 hover:text-yellow-600 focus:shadow-outline-yellow
  bg-purple-500 hover:bg-purple-50 hover:text-purple-600 focus:shadow-outline-purple
  border-blue-500 text-blue-600 focus:text-blue-800 focus:border-blue-700 border-blue-300 focus:border-blue-300 text-blue-500 text-blue-300 bg-blue-600
  border-pink-500 text-pink-600 focus:text-pink-800 focus:border-pink-700 border-pink-300 focus:border-pink-300 text-pink-500 text-pink-300 bg-pink-600
  border-orange-500 text-orange-600 focus:text-orange-800 focus:border-orange-700 border-orange-300 focus:border-orange-300 text-orange-500 text-orange-300 bg-orange-600
  border-teal-500 text-teal-600 focus:text-teal-800 focus:border-teal-700 border-teal-300 focus:border-teal-300 text-teal-500 text-teal-300 bg-teal-600
  border-yellow-500 text-yellow-600 focus:text-yellow-800 focus:border-yellow-700 border-yellow-300 focus:border-yellow-300 text-yellow-500 text-yellow-300 bg-yellow-600
  border-purple-500 text-purple-600 focus:text-purple-800 focus:border-purple-700 border-purple-300 focus:border-purple-300 text-purple-500 text-purple-300 bg-purple-600
  */
  // alternatively we can just not dynamically generate classes, but that seems more tedious.

  const selectedTabClasses = `flex-1 py-4 px-1 text-center border-b-2 border-${color}-500 font-bold text-lg leading-5 text-${color}-600 focus:outline-none focus:text-${color}-800 focus:border-${color}-700`,
    unselectedTabClasses = `flex-1 py-4 px-1 text-center border-b-2 border-transparent font-bold text-lg leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300`;

  const handleDivisionChange = d => {
    setSelectedDivision(d);
    window.history.pushState(null, "", `/${divisions[d]}/`);
  };

  return (
    <Layout>
      <SEO title="Home" />

      {/* Begin Hero Section */}
      <div className={`relative bg-${color}-600 overflow-hidden transition duration-300 pb-48`}>
        <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
          <div className="relative h-full max-w-screen-xl mx-auto">
            <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                 width={404}
                 height={784} fill="none" viewBox="0 0 404 784">
              <defs>
                <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x={0} y={0} width={20} height={20}
                         patternUnits="userSpaceOnUse">
                  <rect x={0} y={0} width={4} height={4} className={`text-${color}-500 transition duration-300`} fill="currentColor" />
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
                  <rect x={0} y={0} width={4} height={4} className={`text-${color}-500 transition duration-300`} fill="currentColor" />
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
                  <Link to="/"
                     className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-${color}-500 hover:bg-${color}-50 hover:text-${color}-600 focus:outline-none focus:shadow-outline-${color} transition duration-300 ease-in-out md:py-4 md:text-lg md:px-10`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="bg-gray-50 pb-8" id="content">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="mb-8 bg-white shadow-md rounded-lg relative" style={{ marginTop: "-12rem" }}>
            <div className="sm:hidden">
              <select aria-label="Selected tab"
                      className="form-select block w-full"
                      onChange={e => handleDivisionChange(e.target.value - '0')}
                      value={selectedDivision}
              >
                <option value={0}>Intro</option>
                <option value={1}>General</option>
                <option value={2}>Bronze</option>
                <option value={3}>Silver</option>
                <option value={4}>Gold</option>
                <option value={5}>Platinum</option>
              </select>
            </div>
            <div className="hidden sm:block border-b border-gray-200">
              <nav className="flex -mb-px">
                <a href="/intro"
                      onClick={e => {e.preventDefault(); handleDivisionChange(0)}}
                      className={selectedDivision === 0 ? selectedTabClasses : unselectedTabClasses}>
                  Intro
                </a>
                <a href="/general"
                   onClick={e => {e.preventDefault(); handleDivisionChange(1)}}
                   className={selectedDivision === 1 ? selectedTabClasses : unselectedTabClasses}>
                  General
                </a>
                <a href="/bronze"
                      onClick={e => {e.preventDefault(); handleDivisionChange(2)}}
                      className={selectedDivision === 2 ? selectedTabClasses : unselectedTabClasses}>
                  Bronze
                </a>
                <a href="/silver"
                      onClick={e => {e.preventDefault(); handleDivisionChange(3)}}
                      className={selectedDivision === 3 ? selectedTabClasses : unselectedTabClasses}>
                  Silver
                </a>
                <a href="/gold"
                      onClick={e => {e.preventDefault(); handleDivisionChange(4)}}
                      className={selectedDivision === 4 ? selectedTabClasses : unselectedTabClasses}>
                  Gold
                </a>
                <a href="/plat"
                      onClick={e => {e.preventDefault(); handleDivisionChange(5)}}
                      className={selectedDivision === 5 ? selectedTabClasses : unselectedTabClasses}>
                  Platinum
                </a>
              </nav>
            </div>

            <ol className="list-inside py-8 px-8 text-lg space-y-1">
              {module.map((m, idx) => {
                if (m.hasOwnProperty("items")) {
                  return (
                    <li key={m.name}>
                      <span className="inline-block w-4 text-right">{idx+1}. </span><span className="ml-2">{m.name}</span>
                      <ol className="list-inside px-6 text-lg space-y-1 mb-2">
                        {m.items.map((m, idx2) => (
                          <li key={m.slug}>
                            <span className="inline-block w-8 text-right">{idx+1}.{idx2+1}. </span><Link className="ml-2 text-blue-600 underline" to={m.slug}>{m.frontmatter.title}</Link>
                          </li>
                        ))}
                      </ol>
                    </li>
                  )
                }
                return (
                  <li key={m.frontmatter.id}>
                    <span className="inline-block w-4 text-right">{idx+1}. </span><Link className="ml-2 text-blue-600 underline" to={m.slug}>{m.frontmatter.title}</Link>
                  </li>
                );
              })}
            </ol>
          </div>

          {module.map((x, idx) => renderModule(x, idx))}
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query {
    modules: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            id
            author
            problems
            prerequisites
          }
          excerptAst
        }
      }
    }
  }
`;
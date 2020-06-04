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

  return (
    <Layout>
      <SEO title="Home" />

      {/* Begin Hero Section */}
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
      {/* End Hero Section */}

      <div className="bg-gray-50 pb-8" id="content">
        <div className="py-12 text-center">
          <h2 className="font-bold text-4xl">Introduction</h2>
        </div>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          {introModules.map(renderModule)}
        </div>
        <div className="py-12 text-center">
          <h2 className="font-bold text-4xl">Bronze</h2>
        </div>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          {bronzeModules.map(renderModule)}
        </div>
        <div className="py-12 text-center">
          <h2 className="font-bold text-4xl">Silver</h2>
        </div>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          {silverModules.map(renderModule)}
        </div>
        <div className="py-12 text-center">
          <h2 className="font-bold text-4xl">Gold</h2>
        </div>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          {goldModules.map(renderModule)}
        </div>
        <div className="py-12 text-center">
          <h2 className="font-bold text-4xl">Platinum</h2>
        </div>
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          {platModules.map(renderModule)}
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
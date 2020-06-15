import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";

import Markdown from "../components/Markdown";

const renderPrerequisite = (prerequisite) => {
  const link = prerequisite.length > 1 ? prerequisite[1] : null;
  return (
    <li key={prerequisite[0]}>
      {link && <a href={link} className="text-blue-600 underline">{prerequisite[0]}</a>}
      {!link && prerequisite[0]}
    </li>
  );
};

export default function Template(props) {
  console.log(props);
  const { markdownRemark } = props.data; // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark;
  const prereqs = markdownRemark.frontmatter.prerequisites;

  const division = props.pageContext.division;
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8">
        <div className="px-4">
          <Link className="underline text-blue-600" to={"/" + division + "/"}>&larr; Back to Home</Link>
          <h1 className="mt-8 text-3xl font-bold">{markdownRemark.frontmatter.title}</h1>
          <p className={`${prereqs ? "mb-4" : "mb-8"} text-gray-500`}>Author: {markdownRemark.frontmatter.author}</p>


          {prereqs &&
          <div className="rounded-md bg-blue-50 p-4 mb-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm leading-5 font-medium text-blue-800">
                  Prerequisites
                </h3>
                <div className="mt-2 text-sm leading-5 text-blue-800">
                  <ul className="list-disc list-inside pl-3 space-y-1">
                    {prereqs.map(renderPrerequisite)}
                  </ul>
                </div>
              </div>
            </div>
          </div>}


          <Markdown htmlAst={htmlAst} className="markdown--module" />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      htmlAst
      frontmatter {
        title
        author
        id
        prerequisites
      }
    }
  }
`;
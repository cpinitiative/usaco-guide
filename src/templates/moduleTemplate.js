import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout";

import Markdown from "../components/Markdown";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark;
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8">
        <Link className="underline text-blue-600" to="/">&larr; Back to Home</Link>
        <h1 className="text-3xl font-bold mb-4">{markdownRemark.frontmatter.title}</h1>
        <Markdown htmlAst={htmlAst} className="markdown--module" />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        slug
      }
    }
  }
`;
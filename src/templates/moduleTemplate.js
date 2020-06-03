import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"
import Layout from "../components/layout";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
  },
}).Compiler;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { htmlAst } = markdownRemark;
  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8">
        <Link className="underline text-blue-600" to="/">&larr; Back to Home</Link>
        <div className="markdown">
          {renderAst(htmlAst)}
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        slug
      }
    }
  }
`;
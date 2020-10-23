import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/markdown/Markdown';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import MarkdownLayout from '../components/MarkdownLayout/MarkdownLayout';
import { SolutionInfo } from '../models/solution';

export default function Template(props) {
  const { mdx } = props.data; // data.markdownRemark holds your post data
  const { body } = mdx;

  const markdownData = React.useMemo(() => {
    return new SolutionInfo(
      mdx.frontmatter.id,
      mdx.frontmatter.title,
      mdx.frontmatter.author,
      mdx.toc,
      mdx.parent.relativePath
    );
  }, mdx);

  return (
    <Layout>
      <SEO title={`Solution: ${mdx.frontmatter.title}`} />

      <MarkdownLayout markdownData={markdownData}>
        <div className="py-4">
          <Markdown body={body} />
        </div>
      </MarkdownLayout>
      {/*<p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">*/}
      {/*  Problem Solution*/}
      {/*</p>*/}
      {/*<div className="mt-2 mb-6">*/}
      {/*  <h1 className="mb-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">*/}
      {/*    {mdx.frontmatter.title}*/}
      {/*  </h1>*/}
      {/*  {mdx.frontmatter.author ? (*/}
      {/*    <p className="text-gray-500 text-center mb-2">*/}
      {/*      Author{mdx.frontmatter.author.indexOf(',') !== -1 ? 's' : ''}:{' '}*/}
      {/*      {mdx.frontmatter.author}*/}
      {/*    </p>*/}
      {/*  ) : null}*/}
      {/*</div>*/}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        id
        title
        author
      }
      parent {
        ... on File {
          name
          relativePath
        }
      }
      toc {
        cpp {
          depth
          value
          slug
        }
        java {
          depth
          value
          slug
        }
        py {
          depth
          value
          slug
        }
      }
    }
  }
`;

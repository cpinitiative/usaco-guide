import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/markdown/Markdown';
import { SECTION_LABELS } from '../../content/ordering';
import SEO from '../components/seo';
import MarkdownLayout from '../components/MarkdownLayout/MarkdownLayout';
import { graphqlToBlogPostInfo } from '../models/blogPost';
import TableOfContentsBlock from '../components/MarkdownLayout/TableOfContents/TableOfContentsBlock';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import TableOfContentsSidebar from '../components/MarkdownLayout/TableOfContents/TableOfContentsSidebar';

export default function Template(props) {
  const { mdx } = props.data; // data.markdownRemark holds your post data
  const { body, frontmatter } = mdx;
  const { title, description } = frontmatter;

  const blogPost = graphqlToBlogPostInfo(mdx);

  return (
    <Layout>
      <SEO title={`${title}`} description={description} />

      <TopNavigationBar />

      <div className="flex justify-center">
        <div className="flex-1 px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="py-4">
            <Markdown body={body} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($id: String!) {
    mdx(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        title
        author
        id
        description
        date
      }
    }
  }
`;

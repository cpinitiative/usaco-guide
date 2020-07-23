import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/markdown/Markdown';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar';

export default function Template(props) {
  const { mdx } = props.data; // data.markdownRemark holds your post data
  const { body } = mdx;

  return (
    <Layout>
      <SEO title={`Solution: ${mdx.frontmatter.title})`} />

      <TopNavigationBar />

      {/* This component requires Tailwind CSS >= 1.5.1 and @tailwindcss/ui >= 0.4.0 */}
      <div className="relative py-16 bg-white overflow-hidden">
        {/*<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">*/}
        {/*  <div className="relative h-full text-lg max-w-prose mx-auto">*/}
        {/*    <svg*/}
        {/*      className="absolute top-12 left-full transform translate-x-32"*/}
        {/*      width={404}*/}
        {/*      height={384}*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 404 384"*/}
        {/*    >*/}
        {/*      <defs>*/}
        {/*        <pattern*/}
        {/*          id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"*/}
        {/*          x={0}*/}
        {/*          y={0}*/}
        {/*          width={20}*/}
        {/*          height={20}*/}
        {/*          patternUnits="userSpaceOnUse"*/}
        {/*        >*/}
        {/*          <rect*/}
        {/*            x={0}*/}
        {/*            y={0}*/}
        {/*            width={4}*/}
        {/*            height={4}*/}
        {/*            className="text-gray-200"*/}
        {/*            fill="currentColor"*/}
        {/*          />*/}
        {/*        </pattern>*/}
        {/*      </defs>*/}
        {/*      <rect*/}
        {/*        width={404}*/}
        {/*        height={384}*/}
        {/*        fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*    <svg*/}
        {/*      className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"*/}
        {/*      width={404}*/}
        {/*      height={384}*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 404 384"*/}
        {/*    >*/}
        {/*      <defs>*/}
        {/*        <pattern*/}
        {/*          id="f210dbf6-a58d-4871-961e-36d5016a0f49"*/}
        {/*          x={0}*/}
        {/*          y={0}*/}
        {/*          width={20}*/}
        {/*          height={20}*/}
        {/*          patternUnits="userSpaceOnUse"*/}
        {/*        >*/}
        {/*          <rect*/}
        {/*            x={0}*/}
        {/*            y={0}*/}
        {/*            width={4}*/}
        {/*            height={4}*/}
        {/*            className="text-gray-200"*/}
        {/*            fill="currentColor"*/}
        {/*          />*/}
        {/*        </pattern>*/}
        {/*      </defs>*/}
        {/*      <rect*/}
        {/*        width={404}*/}
        {/*        height={384}*/}
        {/*        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*    <svg*/}
        {/*      className="absolute bottom-12 left-full transform translate-x-32"*/}
        {/*      width={404}*/}
        {/*      height={384}*/}
        {/*      fill="none"*/}
        {/*      viewBox="0 0 404 384"*/}
        {/*    >*/}
        {/*      <defs>*/}
        {/*        <pattern*/}
        {/*          id="d3eb07ae-5182-43e6-857d-35c643af9034"*/}
        {/*          x={0}*/}
        {/*          y={0}*/}
        {/*          width={20}*/}
        {/*          height={20}*/}
        {/*          patternUnits="userSpaceOnUse"*/}
        {/*        >*/}
        {/*          <rect*/}
        {/*            x={0}*/}
        {/*            y={0}*/}
        {/*            width={4}*/}
        {/*            height={4}*/}
        {/*            className="text-gray-200"*/}
        {/*            fill="currentColor"*/}
        {/*          />*/}
        {/*        </pattern>*/}
        {/*      </defs>*/}
        {/*      <rect*/}
        {/*        width={404}*/}
        {/*        height={384}*/}
        {/*        fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"*/}
        {/*      />*/}
        {/*    </svg>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto mb-6">
            <p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">
              Problem Solution
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {mdx.frontmatter.title}
            </h1>
          </div>
          <div className="mx-auto max-w-4xl">
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
        id
        title
        author
      }
    }
  }
`;

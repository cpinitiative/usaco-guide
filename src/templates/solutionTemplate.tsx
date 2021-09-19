import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import Markdown from '../components/markdown/Markdown';
import MarkdownLayout from '../components/MarkdownLayout/MarkdownLayout';
import SEO from '../components/seo';
import { ConfettiProvider } from '../context/ConfettiContext';
import { ProblemSolutionContext } from '../context/ProblemSolutionContext';
import { SolutionInfo } from '../models/solution';

export default function Template(props) {
  const { xdm, allProblemInfo, problemInfo } = props.data;
  const { body } = xdm;

  const modulesThatHaveProblem: [{ id: string; title: string }] =
    allProblemInfo.edges
      .filter(x => !!x.node.module)
      .map(x => x.node.module.frontmatter);
  // Above: We need to filter to make sure x.node.module is defined because problems listed under extraProblems.json don't have a corresponding module

  const markdownData = React.useMemo(() => {
    return new SolutionInfo(
      xdm.frontmatter.id,
      xdm.frontmatter.source,
      `${xdm.frontmatter.source} - ${xdm.frontmatter.title}`,
      xdm.frontmatter.author,
      xdm.toc,
      xdm.parent.relativePath
    );
  }, xdm);

  const problem = {
    url: problemInfo.url,
    uniqueId: problemInfo.uniqueId,
  };

  return (
    <Layout>
      <SEO
        title={`Solution - ${xdm.frontmatter.title} (${xdm.frontmatter.source})`}
      />

      <ConfettiProvider>
        <ProblemSolutionContext.Provider
          value={{ modulesThatHaveProblem, problem }}
        >
          <MarkdownLayout markdownData={markdownData}>
            <div className="py-4">
              <Markdown body={body} />
            </div>
          </MarkdownLayout>
        </ProblemSolutionContext.Provider>
      </ConfettiProvider>
      {/*<p className="text-base text-center leading-6 text-blue-600 font-semibold tracking-wide uppercase">*/}
      {/*  Problem Solution*/}
      {/*</p>*/}
      {/*<div className="mt-2 mb-6">*/}
      {/*  <h1 className="mb-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">*/}
      {/*    {xdm.frontmatter.title}*/}
      {/*  </h1>*/}
      {/*  {xdm.frontmatter.author ? (*/}
      {/*    <p className="text-gray-500 text-center mb-2">*/}
      {/*      Author{xdm.frontmatter.author.indexOf(',') !== -1 ? 's' : ''}:{' '}*/}
      {/*      {xdm.frontmatter.author}*/}
      {/*    </p>*/}
      {/*  ) : null}*/}
      {/*</div>*/}
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    xdm(frontmatter: { id: { eq: $id } }) {
      body
      frontmatter {
        id
        source
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
    allProblemInfo: allProblemInfo(filter: { uniqueId: { eq: $id } }) {
      edges {
        node {
          module {
            frontmatter {
              id
              title
            }
          }
        }
      }
    }
    problemInfo: problemInfo(uniqueId: { eq: $id }) {
      uniqueId
      url
    }
  }
`;

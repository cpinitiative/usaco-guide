import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import Markdown from '../components/markdown/Markdown';
import { divisionLabels } from '../../content/ordering';
import { graphqlToModuleInfo, graphqlToModuleLinks } from '../utils';
import SEO from '../components/seo';
import { KatexRenderer } from '../components/markdown/KatexRenderer';
import ModuleLayout from '../components/ModuleLayout/ModuleLayout';

const renderPrerequisite = prerequisite => {
  return <li key={prerequisite}>{prerequisite}</li>;
};

export default function Template(props) {
  const { mdx, allMdx } = props.data; // data.markdownRemark holds your post data
  const { body } = mdx;
  const module = React.useMemo(() => graphqlToModuleInfo(mdx), [mdx]);
  const moduleLinks = React.useMemo(() => graphqlToModuleLinks(allMdx), [
    allMdx,
  ]);
  const division = props.pageContext.division;

  const prereqs = mdx.frontmatter.prerequisites;

  return (
    <Layout>
      <SEO title={`${module.title} (${divisionLabels[division]})`} />

      <div className="h-screen flex overflow-hidden bg-white">
        <ModuleLayout
          module={module}
          moduleLinks={moduleLinks}
          division={division}
        >
          <div className="py-4">
            {prereqs && (
              <div className="rounded-md bg-blue-50 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
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
              </div>
            )}

            {module.description && (
              <p className="font-bold mb-8 bg-green-50 border-l-4 border-green-400 text-green-800 p-4">
                <KatexRenderer>{module.description}</KatexRenderer>
              </p>
            )}

            <Markdown body={body} />
          </div>
        </ModuleLayout>
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
        prerequisites
        description
        frequency
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            id
          }
        }
      }
    }
  }
`;

import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import MODULE_ORDERING, {
  moduleIDToSectionMap,
  SECTION_LABELS,
} from '../../content/ordering';
import { getModule } from '../utils/utils';
import TopNavigationBar from '../components/TopNavigationBar';
import DashboardProgress from '../components/Dashboard/DashboardProgress';
import UserDataContext from '../context/UserDataContext';
import getProgressInfo from '../utils/getProgressInfo';
import ModuleLink from '../components/Dashboard/ModuleLink';
import { ModuleLinkInfo } from '../models/module';
import styled from 'styled-components';
import tw from 'twin.macro';

const DottedLineContainer = styled.div`
  ${tw`space-y-6 relative`}

  @media (min-width: 768px) {
    &::before {
      content: '';
      position: absolute;
      width: 2px;
      display: block;
      left: calc(50% - 1px);
      top: 0;
      bottom: 0;
      border-right: 2px dashed;
      ${tw`border-gray-100`}
    }
  }
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col md:flex-row`}

  &:hover h2 {
    ${tw`text-gray-600`}
  }
  &:hover h2 + p {
    ${tw`text-gray-500`}
  }
`;

export default function Template(props) {
  const data = props.data;

  const allModules = data.modules.edges.reduce((acc, cur) => {
    acc[cur.node.frontmatter.id] = cur.node;
    return acc;
  }, {});

  const { division } = props.pageContext;

  const section = getModule(allModules, division);

  const { userProgressOnModules, userProgressOnProblems } = React.useContext(
    UserDataContext
  );
  const moduleIDs = section.reduce(
    (acc, cur) => [...acc, ...cur.items.map(x => x.frontmatter.id)],
    []
  );
  let moduleProgressInfo = getProgressInfo(
    moduleIDs,
    userProgressOnModules,
    ['Complete'],
    ['Reading', 'Practicing'],
    ['Skipped'],
    ['Not Started']
  );
  let problemIDs = [];
  for (let chapter of MODULE_ORDERING[division]) {
    for (let moduleID of chapter.items) {
      for (let problem of allModules[moduleID].problems) {
        problemIDs.push(problem.uniqueID);
      }
    }
  }
  const problemsProgressInfo = getProgressInfo(
    problemIDs,
    userProgressOnProblems,
    ['Solved'],
    ['Solving'],
    ['Skipped'],
    ['Not Attempted']
  );

  return (
    <Layout>
      <SEO title={SECTION_LABELS[division]} />
      <div className="min-h-screen">
        <TopNavigationBar />

        <main>
          <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <h1 className="mb-8 text-blue-700 text-5xl tracking-tight leading-10 font-extrabold text-white sm:leading-none md:text-6xl text-center">
                {SECTION_LABELS[division]}
              </h1>
              <div className="grid max-w-2xl mx-auto lg:max-w-full lg:grid-cols-2 gap-8">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Modules Progress
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...moduleProgressInfo}
                        total={moduleIDs.length}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Problems Progress
                    </h3>
                    <div className="mt-6">
                      <DashboardProgress
                        {...problemsProgressInfo}
                        total={problemIDs.length}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DottedLineContainer className="py-12 px-4 max-w-screen-xl mx-auto">
            {section.map(category => (
              <SectionContainer key={category.name}>
                <div className="flex-1 md:text-right pr-12 group">
                  <h2 className="text-2xl font-semibold leading-6 py-3 text-gray-500 group-hover:text-gray-800 transition duration-150 ease-in-out">
                    {category.name}
                  </h2>
                  <p className="md:max-w-sm md:ml-auto text-gray-400 group-hover:text-gray-600 transition duration-150 ease-in-out">
                    {category.description}
                  </p>
                </div>
                <div className="flex-1 pl-12">
                  {category.items.map(item => (
                    <ModuleLink
                      key={item.frontmatter.id}
                      link={
                        new ModuleLinkInfo(
                          item.frontmatter.id,
                          moduleIDToSectionMap[item.frontmatter.id],
                          item.frontmatter.title,
                          item.frontmatter.description
                        )
                      }
                    />
                  ))}
                </div>
              </SectionContainer>
            ))}
          </DottedLineContainer>
        </main>
      </div>
    </Layout>
  );
}
export const pageQuery = graphql`
  query {
    modules: allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            id
            author
            prerequisites
            description
          }
          problems {
            uniqueID
          }
        }
      }
    }
  }
`;

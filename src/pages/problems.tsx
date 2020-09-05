import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
} from 'react-instantsearch-dom';
import { searchClient } from '../utils/algoliaSearchClient';
import ProblemHits from '../components/ProblemsPage/ProblemHits';
import SearchBox from '../components/ProblemsPage/SearchBox';

const indexName =
  process.env.NODE_ENV === 'production' ? 'prod_problems' : 'dev_problems';

const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(ProblemHits);

export default function ProblemsPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="All Problems" />

      <div className="min-h-screen bg-gray-100">
        <TopNavigationBar />

        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div className="py-16 bg-blue-600 px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-center text-3xl sm:text-5xl font-bold text-white mb-6">
                Problems (Beta)
              </h1>
              <CustomSearchBox />
            </div>
          </div>
          <CustomHits />
        </InstantSearch>
        {/*{JSON.stringify(problemIDMap)}*/}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    modules: allMdx(filter: { fileAbsolutePath: { regex: "/content/" } }) {
      edges {
        node {
          problems {
            source
            name
            id
            difficulty
            starred
            tags
            sol
            solQuality
          }
        }
      }
    }
  }
`;

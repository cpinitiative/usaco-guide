import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import {
  InstantSearch,
  connectSearchBox,
  connectHits,
  connectRefinementList,
  PoweredBy,
} from 'react-instantsearch-dom';
import { searchClient } from '../utils/algoliaSearchClient';
import ProblemHits from '../components/ProblemsPage/ProblemHits';
import SearchBox from '../components/ProblemsPage/SearchBox';
import RefinementList from '../components/ProblemsPage/RefinementList';

const indexName =
  process.env.NODE_ENV === 'production' ? 'prod_problems' : 'dev_problems';

const CustomSearchBox = connectSearchBox(SearchBox);
const CustomHits = connectHits(ProblemHits);
const CustomRefinementList = connectRefinementList(RefinementList);

export default function ProblemsPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="All Problems" />

      <div className="min-h-screen bg-gray-100 dark:bg-dark-surface">
        <TopNavigationBar />

        <InstantSearch searchClient={searchClient} indexName={indexName}>
          <div className="py-16 bg-blue-600 dark:bg-blue-900 px-4">
            <div className="max-w-3xl mx-auto mb-6">
              <h1 className="text-center text-3xl sm:text-5xl font-bold text-white dark:text-dark-high-emphasis mb-6">
                Problems (Beta)
              </h1>
              <CustomSearchBox />
            </div>
            <CustomRefinementList
              attribute="tags"
              limit={100}
              searchable
              transformItems={items =>
                items.sort((x, y) => x.label.localeCompare(y.label))
              }
            />

          </div>
          <div className="flex justify-center mt-4">
            <PoweredBy />
          </div>
          <CustomHits />
        </InstantSearch>
      </div>
    </Layout>
  );
}

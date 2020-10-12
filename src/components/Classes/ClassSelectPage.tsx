import { Link, PageProps } from 'gatsby';
import * as React from 'react';
import SEO from '../seo';
import Layout from '../layout';
import TopNavigationBar from '../TopNavigationBar/TopNavigationBar';

export default function ClassSelectPage(props: { path: string }) {
  return (
    <>
      <Layout>
        <TopNavigationBar />
        <SEO title={'Classes'} />
        <div className="px-10 pt-6">
          <h1 className="text-3xl font-bold leading-9">My Classes</h1>
          <ul className={'pt-4'}>
            <li>
              <Link
                to={'/class/M0TqsAs5vJ8VnwBxYYgc'}
                className={'text-blue-600 hover:underline'}
              >
                USACO Intermediate Saturday
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    </>
  );
}

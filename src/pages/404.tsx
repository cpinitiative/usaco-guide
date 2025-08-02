import { Link } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404 Not Found" image={undefined} pathname={undefined} />
      <TopNavigationBar />

      <h1 className="mt-16 text-center text-4xl font-black sm:text-5xl">
        404 Not Found
      </h1>
      <p className="mt-4 text-center">
        <Link to="/" className="text-xl text-blue-600">
          Return Home
        </Link>
      </p>
    </Layout>
  );
}

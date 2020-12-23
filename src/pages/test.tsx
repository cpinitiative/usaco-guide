import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import ProblemFeedbackModal from '../components/ProblemFeedbackModal';

export default function NotFoundPage(props: PageProps) {
  return (
    <Layout>
      <SEO title="404 Not Found" />
      <TopNavigationBar />

      <ProblemFeedbackModal
        isOpen={true}
        onClose={null}
        problem={null}
        onSubmit={null}
      />
    </Layout>
  );
}

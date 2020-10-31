import * as React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

// @ts-ignore
import FAQ from '../faq.mdx';

// @ts-ignore
import banner from '../assets/faq-image.png';
import { DiscussionEmbed } from 'disqus-react';
import { useContext } from 'react';
import UserDataContext from '../context/UserDataContext/UserDataContext';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

export default function USACOFAQPage(props: PageProps) {
  const { darkMode } = useContext(UserDataContext);

  const shareURL = 'https://usaco.guide/usaco-faq';

  return (
    <Layout>
      <SEO
        title="USACO Frequently Asked Questions"
        description="Getting started with USACO can be challening. Here, we address some of the most common questions people have."
      />

      <TopNavigationBar />

      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="text-center">
            <p className="mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              USACO FAQ
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500">
              Getting started with USACO can be challening. Here, we address
              some of the most common questions people have.
            </p>
            <div className="mt-6">
              <p className="text-blue-600 mb-1 font-semibold">
                Share this article!
              </p>
              <div>
                <FacebookShareButton
                  url={shareURL}
                  quote="Check out this article to learn more about USACO!"
                  hashtag="#usaco"
                >
                  <FacebookIcon size={40} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareURL}
                  title="USACO Frequently Asked Questions"
                >
                  <TwitterIcon size={40} />
                </TwitterShareButton>
                <LinkedinShareButton
                  url={shareURL}
                  title="USACO Frequently Asked Questions"
                  summary="Check out this article to learn more about USACO!"
                  source="USACO Guide"
                >
                  <LinkedinIcon size={40} />
                </LinkedinShareButton>
                <RedditShareButton
                  url={shareURL}
                  title="USACO Frequently Asked Questions"
                >
                  <RedditIcon size={40} />
                </RedditShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="shadow-lg">
            <img src={banner} />
          </div>

          <div className="h-8" />

          <FAQ />

          <hr className="my-12 border-gray-200 border-t" />

          <div className="pb-8">
            <DiscussionEmbed
              shortname="usacoguide"
              config={{
                url: `https://usaco.guide/usaco-faq`,
                identifier: 'usaco-faq-page',
              }}
              // technically this isn't a valid prop, but disqus will detect the prop change
              // and will re-render automatically.
              // @ts-ignore
              theme={darkMode ? 'dark' : 'light'}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { DatabaseIcon } from '@heroicons/react/outline';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import * as React from 'react';
import { useRef } from 'react';
import { GlowingRing } from '../components/elements/landing/GlowingRing';
import { GlowingText } from '../components/elements/landing/GlowingText';
import { GradientText } from '../components/elements/landing/GradientText';
import { HighlightedText } from '../components/elements/landing/HighlightedText';
import AuthorsSection from '../components/Index/AuthorsSection';
import ContributorsSection from '../components/Index/ContributorsSection';
import { Feature } from '../components/Index/Feature';
import { ResourcesFeature } from '../components/Index/features/ResourcesFeature';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

/*
Classes:
- Header
- Subtext
- Button
*/

const containerClasses = 'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8';
const headerClasses = 'text-6xl font-black text-black';
const subtextClasses =
  'text-2xl font-medium max-w-4xl leading-relaxed text-gray-700';
const whiteButtonClasses =
  'text-xl bg-white px-8 py-4 rounded-lg font-medium text-gray-900 relative';

export default function IndexPage(): JSX.Element {
  const learnMoreRef = useRef<HTMLDivElement>();

  return (
    <Layout>
      <SEO title={null} />

      {/*<a*/}
      {/*  href="http://usaco.org/"*/}
      {/*  className="block text-base font-medium text-center text-white bg-blue-600 py-2"*/}
      {/*>*/}
      {/*  &larr; Back to usaco.org*/}
      {/*</a>*/}
      <div className="dark">
        <TopNavigationBar />
      </div>

      {/* Begin Hero */}
      <div className="-mt-16 bg-gray-900">
        <div className="min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-24"></div>

            <div className="flex justify-center">
              <GlowingText className="text-center font-black tracking-tight text-9xl text-white mt-4">
                USACO Guide
              </GlowingText>
            </div>

            <div className="h-12"></div>

            <p
              className="
              text-center text-4xl
              font-medium
              max-w-4xl
              mx-auto
              leading-[3rem]
              text-gray-300
            "
            >
              A free collection of{' '}
              <GradientText>curated, high-quality resources</GradientText> to
              take you from Bronze to Platinum and beyond.
            </p>

            <div className="h-12"></div>

            <div className="flex justify-center">
              <GlowingRing>
                <button className={whiteButtonClasses}>Get Started</button>
              </GlowingRing>
            </div>
          </div>

          <div className="flex justify-center text-xl text-gray-400 py-16">
            <a
              href="https://joincpi.org/"
              className="inline-flex items-center space-x-4"
            >
              <div className="h-9 w-9">
                <svg
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <g>
                    <path
                      className="fill-current text-[#6600af]"
                      d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5m0-5a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                    ></path>
                  </g>
                  <line
                    className="stroke-current stroke-[7px] text-[#be5eff]"
                    style={{ strokeMiterlimit: 10 }}
                    x1="50"
                    y1="27"
                    x2="73.29"
                    y2="65.64"
                  ></line>
                  <line
                    className="stroke-current stroke-[7px] text-[#be5eff]"
                    style={{ strokeMiterlimit: 10 }}
                    x1="50"
                    y1="27"
                    x2="26.71"
                    y2="67"
                  ></line>
                  <circle
                    className="fill-current text-[#961be8]"
                    cx="50"
                    cy="27"
                    r="10"
                  ></circle>
                  <circle
                    className="fill-current text-[#961be8]"
                    cx="26.71"
                    cy="67"
                    r="10"
                  ></circle>
                  <circle
                    className="fill-current text-[#961be8]"
                    cx="73.29"
                    cy="67"
                    r="10"
                  ></circle>
                </svg>
              </div>

              <span>Created by the CP Initiative</span>
            </a>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Learn USACO. Efficiently. */}
      <div className="bg-white">
        <div className="h-48"></div>

        <div className={containerClasses}>
          <h2 className={headerClasses}>
            Learn USACO. <HighlightedText>Efficiently.</HighlightedText>
          </h2>
          <div className="h-12"></div>
          <p className={subtextClasses}>
            Stop wasting time searching for problems and tutorials. The USACO
            Guide provides a{' '}
            <b className="text-black">comprehensive, organized roadmap</b>{' '}
            carefully designed and crafted for USACO contestants – available to
            everyone, for free.
          </p>

          <div className="h-36"></div>

          <Feature
            icon={DatabaseIcon}
            iconClasses="from-cyan-400 to-sky-500"
            title="Curated Resources"
            blobClasses="??"
            feature={<ResourcesFeature />}
            featurePosition="left"
          >
            Learn new topics from a vetted list of high-quality resources. If
            one resource doesn't click, look at another!
          </Feature>
        </div>
        <div className="h-36"></div>
      </div>
      {/* End Learn USACO. Efficiently. */}

      {/* Begin FAQ */}
      <div className="bg-white dark:bg-dark-surface">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-gray-100">
            Frequently asked questions
          </h2>
          <div className="mt-6 border-t-2 border-gray-100 dark:border-gray-700 pt-10">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    What is the USACO?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      USACO stands for the{' '}
                      <OutboundLink
                        href="http://www.usaco.org/"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USA Computing Olympiad
                      </OutboundLink>
                      . Check out the{' '}
                      <Link
                        to="/usaco-faq"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USACO FAQ Page
                      </Link>{' '}
                      for more information.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this an official syllabus?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      No, USACO does not have an official syllabus. This guide
                      merely lists topics that have <i>historically</i> appeared
                      in USACO contests; it makes no guarantees about the topics
                      in future USACO contests.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How do I report a problem or ask a question?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      If you encounter an issue while using the guide (website
                      bug, typo, broken link, unclear explanation, etc), use the
                      "Contact Us" button. Alternatively, email us at{' '}
                      <a
                        href="mailto:usacoguide@gmail.com"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        usacoguide@gmail.com
                      </a>
                      .
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    I'm looking for classes, club curriculum...
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Check out the{' '}
                      <OutboundLink
                        href="https://joincpi.org/?ref=home"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        Competitive Programming Initiative
                      </OutboundLink>
                      !
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this guide for non-USACO competitive programmers?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Of course! While we structure our content around USACO,
                      feel free to use this guide even if you don't do USACO.
                      You will still learn a lot from it!
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How can I get help?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      If you get stuck, head over to the{' '}
                      <OutboundLink
                        href="https://forum.usaco.guide"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USACO Forum
                      </OutboundLink>{' '}
                      for help.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How can I contribute?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      To learn more about contributing, please visit{' '}
                      <Link
                        to="/general/contributing"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        this page
                      </Link>
                      . We appreciate any and all contributions!
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this open source?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Yes! Check out our{' '}
                      <OutboundLink
                        href="https://github.com/cpinitiative/usaco-guide/?ref=home"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        Github Repository
                      </OutboundLink>
                      .
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/*End FAQ*/}

      <AuthorsSection />

      <ContributorsSection />

      <div className="bg-white dark:bg-dark-surface">
        <div className="max-w-screen-xl mx-auto py-12 px-4">
          <p className="text-center text-base leading-6 text-gray-400 dark:text-dark-med-emphasis">
            &copy; 2021 Competitive Programming Initiative. Powered by{' '}
            <a
              href="https://vercel.com/?utm_source=cp-initiative&utm_campaign=oss"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Vercel
            </a>
            .
            <br />
            No part of this website may be reproduced or commercialized in any
            manner without prior written permission.{' '}
            <Link to="/license" className="underline">
              Learn More.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

import { useLocation } from '@gatsbyjs/reach-router';
import {
  AcademicCapIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  CogIcon,
  DatabaseIcon,
  LightningBoltIcon,
  TerminalIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { GlowingRing } from '../components/elements/landing/GlowingRing';
import { GlowingText } from '../components/elements/landing/GlowingText';
import { GradientText } from '../components/elements/landing/GradientText';
import { HighlightedText } from '../components/elements/landing/HighlightedText';
import ContributorsSection from '../components/Index/ContributorsSection';
import { CPIProjectCard } from '../components/Index/CPIProjectCard';
import { Feature } from '../components/Index/Feature';
import { ProblemsetsFeature } from '../components/Index/features/ProblemsetsFeature';
import { ProgressTrackingFeature } from '../components/Index/features/ProgressTrackingFeature';
import { ResourcesFeature } from '../components/Index/features/ResourcesFeature';
import {
  EasyFunCoding,
  NonTrivial,
  XCamp,
} from '../components/Index/sponsor-logos';
import TrustedBy from '../components/Index/TrustedBy';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import {
  useFirebaseUser,
  useIsUserDataLoaded,
} from '../context/UserDataContext/UserDataContext';

const containerClasses = 'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8';
const headerClasses =
  'text-4xl md:text-5xl 2xl:text-6xl font-black text-black dark:text-white';
const headerClassesNoText = 'text-4xl md:text-5xl 2xl:text-6xl font-black';
const subtextClasses =
  'text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-700 dark:text-gray-400';
const headerSubtextSpacerClasses = 'h-6 2xl:h-12';
const whiteButtonClassesBig =
  'text-xl bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-gray-900 relative';
const whiteButtonClasses =
  'text-lg md:text-xl bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-900 relative';
const usacoTitleClasses =
  'md:text-center font-black tracking-tight text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl';
const linkTextStyles =
  'text-blue-600 dark:text-blue-300 transition hover:text-purple-600 dark:hover:text-purple-300';

export default function IndexPage({ path }): JSX.Element {
  const firebaseUser = useFirebaseUser();
  const loading = useIsUserDataLoaded();
  const location = useLocation();
  React.useEffect(() => {
    // User will normally be redirected to the dashboard if the user is logged in, but if user clicks the icon in the top left corner while on the dashboard, they will not be redirected.
    try {
      if (firebaseUser && location.state.redirect) {
        /* Whether or not the user should be redirected to the dashboard is stored in location.state.redirect, but if the user opens a link straight
        to the landing page, location.state.redirect will be undefined, causing a typeerror, this try catch statements accounts for that */
        navigate('/dashboard');
      }
    } catch (e) {
      if (firebaseUser) {
        navigate('/dashboard');
      }
    }
  }, [firebaseUser, loading, location]);

  return (
    <Layout>
      <SEO title={null} image={null} pathname={path} />

      {/*<a*/}
      {/*  href="http://usaco.org/"*/}
      {/*  className="block text-base font-medium text-center text-white bg-blue-600 py-2"*/}
      {/*>*/}
      {/*  &larr; Back to usaco.org*/}
      {/*</a>*/}
      <div className="bg-black">
        <TopNavigationBar />
      </div>

      {/* Begin Hero */}
      <div className="-mt-16 bg-gray-100 dark:bg-black">
        <div className="flex flex-col px-4 sm:px-6 md:min-h-screen lg:px-8">
          <div className="h-6 sm:h-12"></div>

          <div className="flex flex-1 flex-col justify-center">
            <div className="h-24"></div>

            <div className="flex md:justify-center dark:hidden">
              <div className={classNames(usacoTitleClasses, 'mt-4 text-black')}>
                USACO Guide
              </div>
            </div>
            <div className="invisible flex h-0 md:justify-center dark:visible dark:h-auto">
              <GlowingText
                className={classNames(usacoTitleClasses, 'mt-4 text-white')}
              >
                USACO Guide
              </GlowingText>
            </div>

            <div className="h-6 sm:h-8"></div>

            <p className="text-xl leading-snug font-medium text-gray-800 sm:text-2xl md:text-center md:!leading-normal 2xl:text-3xl dark:text-gray-300">
              A free collection of{' '}
              <GradientText>curated, high-quality resources</GradientText>{' '}
              <br className="hidden md:block" />
              to take you from Bronze to Platinum and beyond.
            </p>

            <div className="h-8 sm:h-12"></div>

            <div className="flex md:justify-center">
              <GlowingRing>
                <Link
                  to="/dashboard"
                  className={classNames(whiteButtonClassesBig, 'inline-block')}
                >
                  Get Started
                </Link>
              </GlowingRing>
            </div>
          </div>

          <div className="h-16 sm:h-24"></div>

          <div className="flex text-gray-600 md:justify-center md:text-xl dark:text-gray-400">
            <a
              href="https://joincpi.org/"
              className="inline-flex items-center space-x-3 md:space-x-4"
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
          <div className="h-4 sm:h-6 md:h-16"></div>
        </div>
      </div>
      {/* End Hero */}

      {/* Learn USACO. Efficiently. */}
      <div className="bg-white dark:bg-gray-900">
        <div className="h-12 sm:h-20 md:h-36 2xl:h-48"></div>

        <div className={containerClasses}>
          <h2
            className={classNames(
              headerClassesNoText,
              'text-black dark:text-gray-100'
            )}
          >
            <div className="dark:hidden">
              Learn USACO. <HighlightedText>Efficiently.</HighlightedText>
            </div>
            <div className="invisible h-0 dark:visible dark:h-auto">
              Learn USACO. <HighlightedText dark>Efficiently.</HighlightedText>
            </div>
          </h2>
          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            Stop wasting time searching for problems and tutorials. The USACO
            Guide provides a{' '}
            <b className="text-black dark:text-white">
              comprehensive, organized roadmap
            </b>{' '}
            carefully designed and crafted for USACO contestants – available to
            everyone, for free.
          </p>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={DatabaseIcon}
            iconClasses="from-cyan-400 to-sky-500"
            title="Curated Resources"
            blobClasses="bg-sky-200 dark:bg-sky-800 hidden xl:block"
            feature={<ResourcesFeature />}
            featurePosition="left"
          >
            Learn new topics from a vetted list of high-quality resources. If
            one resource doesn't click, look at another!
          </Feature>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={ClipboardListIcon}
            iconClasses="from-purple-400 to-indigo-500"
            title="Extensive Problemsets"
            blobClasses="bg-purple-300 dark:bg-purple-800"
            feature={<ProblemsetsFeature />}
            featurePosition="right"
          >
            Practice each topic with extensive problemsets and solutions
            covering a wide range of difficulties.
          </Feature>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={LightningBoltIcon}
            iconClasses="from-yellow-400 to-orange-500"
            title="Progress Tracking"
            blobClasses="bg-orange-200 dark:bg-orange-800"
            feature={<ProgressTrackingFeature />}
            featurePosition="left"
            fade="none"
          >
            Use our progress-tracking tools to track your progress in the Guide
            and stay motivated.
          </Feature>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={ChatAlt2Icon}
            iconClasses="from-green-400 to-cyan-500"
            title="Help when you need it"
            blobClasses="bg-green-200 dark:bg-green-800"
            feature={
              <div className="rounded-lg shadow-lg">
                <StaticImage
                  src="../assets/forum-screenshot.png"
                  alt="USACO Forum Screenshot"
                  placeholder="blurred"
                  layout="constrained"
                  width={560}
                />
              </div>
            }
            featurePosition="right"
            fade="none"
          >
            <span className="mb-4 block md:mb-8">
              Get help from other community members in the USACO Forum.
            </span>

            <a
              href="https://forum.usaco.guide/"
              target="_blank"
              rel="noreferrer"
              className={linkTextStyles}
            >
              View Forum &rarr;
            </a>
          </Feature>
        </div>
        <div className="h-16 md:h-20 2xl:h-36"></div>
      </div>
      {/* End Learn USACO. Efficiently. */}

      <div className="bg-gray-100 dark:bg-black">
        <div className="h-16 md:h-20 2xl:h-36"></div>
        <div className={containerClasses}>
          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>Trusted by thousands</h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              Trusted by thousands.
            </GlowingText>
          </div>

          <div className={headerSubtextSpacerClasses}></div>

          <p className={subtextClasses}>
            This guide is written by{' '}
            <GradientText>top USACO contestants,</GradientText> including
            two-time IOI winner and USACO Problemsetter Benjamin Qi.
          </p>
          <div className="h-4 2xl:h-12"></div>

          <TrustedBy />

          <div className="h-8 md:h-12 2xl:h-16"></div>

          <div className="group relative inline-block">
            <GlowingRing>
              <Link
                to="/dashboard"
                className={classNames(whiteButtonClasses, 'inline-block')}
              >
                View Guide
              </Link>
            </GlowingRing>
          </div>
        </div>
        <div className="h-16 md:h-20 2xl:h-36"></div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="h-16 md:h-20 2xl:h-36"></div>
        <div className="px-4 sm:px-6 lg:px-8 2xl:px-16">
          <h2 className={classNames(headerClasses, 'md:text-center')}>
            Created by the CP Initiative.
          </h2>
          <div className="h-4 md:h-8"></div>
          <p className={classNames(subtextClasses, 'mx-auto md:text-center')}>
            Here are some of our other projects you might find useful!
          </p>

          <div className="2xl:24 h-12 md:h-16"></div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3">
            <CPIProjectCard
              title="USACO Classes"
              icon={AcademicCapIcon}
              iconClasses="from-fuchsia-500 to-purple-600"
              url="https://joincpi.org/classes"
            >
              Learn USACO through affordable, high-quality classes with a
              curriculum designed and developed by past USACO Finalists.
            </CPIProjectCard>
            <CPIProjectCard
              title="USACO IDE"
              icon={TerminalIcon}
              iconClasses="from-orange-400 to-pink-600"
              url="https://ide.usaco.guide/"
            >
              A realtime collaborative online IDE designed for competitive
              programming and USACO.
            </CPIProjectCard>
            <CPIProjectCard
              title="USACO Groups"
              icon={AcademicCapIcon}
              iconClasses="from-green-400 to-cyan-500"
              url="https://usaco.guide/groups"
            >
              A Learning Management System fully integrated with the USACO
              Guide. Perfect for clubs or group study sessions.
            </CPIProjectCard>
            <CPIProjectCard
              title="Club Curriculum"
              icon={UserGroupIcon}
              iconClasses="from-purple-500 to-indigo-500"
              url="https://joincpi.org/clubs"
            >
              Join our competitive programming club network to get access to
              exclusive club curriculum and resources!
            </CPIProjectCard>
            <CPIProjectCard
              title="Competitive Programming Contests"
              icon={ChartBarIcon}
              iconClasses="from-cyan-400 to-sky-500"
              url="https://joincpi.org/contests"
            >
              Participate in high-quality programming contests targeted towards
              pre-college students!
            </CPIProjectCard>
            <CPIProjectCard
              title="Competitive Programming Workshops"
              icon={CogIcon}
              iconClasses="from-yellow-400 to-orange-500"
              url="https://joincpi.org/workshop"
            >
              Access workshops providing everything you need to know about
              USACO.
            </CPIProjectCard>
          </div>
        </div>
        <div className="h-16 md:h-20 2xl:h-36"></div>
      </div>

      <div className="bg-gray-100 dark:bg-black">
        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>

        <div className={containerClasses}>
          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>Join our Team.</h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              Join our Team.
            </GlowingText>
          </div>

          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            The{' '}
            <a
              href="https://joincpi.org/"
              target="_blank"
              rel="noreferrer"
              className="underline transition hover:text-blue-400"
            >
              Competitive Programming Initiative
            </a>{' '}
            is a student-run organization dedicated to promoting competitive
            programming. Join us in our mission, and{' '}
            <GradientText>
              earn PVSA volunteer hours and leadership positions
            </GradientText>{' '}
            along the way!
          </p>
          <div className="h-8 md:h-12"></div>

          <div className="group relative inline-block">
            <GlowingRing>
              <a
                href="https://docs.google.com/document/d/13QpXqdiYQwjBLnywGL1FUG7GFdh8SM_1NigIkJl-A7k/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={classNames(whiteButtonClasses, 'inline-block')}
              >
                Apply Now
              </a>
            </GlowingRing>
          </div>

          <hr className="my-16 border-gray-300 md:my-20 2xl:my-24 dark:border-gray-800" />

          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>
              Or, help us financially!
            </h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              Or, help us financially!
            </GlowingText>
          </div>

          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            We're a <GradientText>501(c)3 nonprofit organization</GradientText>{' '}
            — all donations are tax deductible. Since our inception in September
            2020, we've impacted tens of thousands of students across our
            various initiatives.
          </p>
          <div className="h-8 md:h-12"></div>

          <div className="flex items-center">
            <GlowingRing>
              <a
                href="mailto:sponsorship@joincpi.org"
                target="_blank"
                rel="noreferrer"
                className={classNames(whiteButtonClasses, 'inline-block')}
              >
                Sponsor Us
              </a>
            </GlowingRing>
            <span className="ml-4 text-lg font-medium text-gray-400 md:ml-6">
              or{' '}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=FKG88TSTN82E4"
                target="_blank"
                rel="noreferrer"
                className={linkTextStyles}
              >
                Donate via PayPal
              </a>
            </span>
            <br />
          </div>
          <div className="mt-4 text-base leading-6 text-gray-500 dark:text-gray-400">
            Read our
            <a
              href="https://joincpi.org/sponsorship_prospectus.pdf"
              target="_blank"
              rel="noreferrer"
              className={linkTextStyles}
            >
              {' '}
              sponsorship prospectus
            </a>
          </div>

          <div className="h-12 md:h-20"></div>

          <p className="text-lg font-medium text-gray-700 uppercase md:text-xl dark:text-gray-400">
            Our Sponsors
          </p>
          {/* Sponsor logos don't fit well in the light theme */}
          <p className="pt-6 font-semibold text-gray-600 uppercase md:text-lg dark:text-gray-400">
            Platinum Sponsors
          </p>
          <div className="my-8 grid grid-cols-1 items-center gap-4 space-y-5 text-gray-600 sm:grid-cols-2 sm:space-y-0 md:grid-cols-3 lg:my-6 lg:grid-cols-4 dark:text-gray-400">
            <div className="col-span-1">
              <a
                href="http://non-trivial.org/"
                target="_blank"
                rel="noreferrer"
              >
                <NonTrivial />
              </a>
            </div>
            <div className="col-span-1 pt-5 sm:pt-0">
              <a href="http://x-camp.academy/" target="_blank" rel="noreferrer">
                <XCamp />
              </a>
            </div>
          </div>
          <p className="pt-6 font-semibold text-gray-600 uppercase md:text-lg dark:text-gray-400">
            Bronze Sponsors
          </p>
          <div className="my-8 grid grid-cols-2 items-center gap-0.5 text-gray-400 md:grid-cols-3 lg:my-6 lg:grid-cols-4">
            <div className="col-span-1">
              <a
                href="https://easyfuncoding.com"
                target="_blank"
                rel="noreferrer"
              >
                <EasyFunCoding />
              </a>
            </div>
          </div>
        </div>

        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>
      </div>

      {/* Begin FAQ */}
      <div className="dark:bg-dark-surface bg-white">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-28">
          <h2 className={classNames(headerClasses, 'dark:text-gray-100')}>
            Frequently asked questions
          </h2>
          <div className="pt-10 md:pt-16">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    What is the USACO?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      USACO stands for the{' '}
                      <a
                        href="http://www.usaco.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        USA Computing Olympiad
                      </a>
                      . Check out the{' '}
                      <Link
                        to="/general/usaco-faq"
                        className="text-blue-600 underline dark:text-blue-400"
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
                        className="text-blue-600 underline dark:text-blue-400"
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
                      <a
                        href="https://joincpi.org/?ref=home"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        Competitive Programming Initiative
                      </a>
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
                      <a
                        href="https://forum.usaco.guide"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        USACO Forum
                      </a>{' '}
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
                        className="text-blue-600 underline dark:text-blue-400"
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
                      <a
                        href="https://github.com/cpinitiative/usaco-guide/?ref=home"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        GitHub Repository
                      </a>
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

      <ContributorsSection />

      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-12">
          <p className="dark:text-dark-med-emphasis text-center text-base leading-6 text-gray-400">
            &copy; {new Date().getFullYear()} Competitive Programming
            Initiative.
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

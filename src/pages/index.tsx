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
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { useRef } from 'react';
import { GlowingRing } from '../components/elements/landing/GlowingRing';
import { GlowingText } from '../components/elements/landing/GlowingText';
import { GradientText } from '../components/elements/landing/GradientText';
import { HighlightedText } from '../components/elements/landing/HighlightedText';
import AuthorsSection from '../components/Index/AuthorsSection';
import ContributorsSection from '../components/Index/ContributorsSection';
import { CPIProjectCard } from '../components/Index/CPIProjectCard';
import { Feature } from '../components/Index/Feature';
import { ProblemsetsFeature } from '../components/Index/features/ProblemsetsFeature';
import { ProgressTrackingFeature } from '../components/Index/features/ProgressTrackingFeature';
import { ResourcesFeature } from '../components/Index/features/ResourcesFeature';
import TrustedBy from '../components/Index/TrustedBy';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

const containerClasses = 'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8';
const headerClasses = 'text-4xl md:text-5xl 2xl:text-6xl font-black text-black';
const subtextClasses =
  'text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-700';
const headerSubtextSpacerClasses = 'h-6 2xl:h-12';
const headerClassesDark =
  'text-4xl md:text-5xl 2xl:text-6xl font-black text-white';
const subtextClassesDark =
  'text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-400';
const whiteButtonClassesBig =
  'text-xl bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-gray-900 relative';
const whiteButtonClasses =
  'text-lg md:text-xl bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-900 relative';

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
      <div className="dark bg-black">
        <TopNavigationBar transparent />
      </div>

      {/* Begin Hero */}
      <div className="-mt-16 bg-black">
        <div className="md:min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="h-6 sm:h-12"></div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="h-24"></div>

            <div className="flex md:justify-center">
              <GlowingText className="md:text-center font-black tracking-tight text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl text-white mt-4">
                USACO Guide
              </GlowingText>
            </div>

            <div className="h-6 sm:h-8"></div>

            <p
              className="
                md:text-center
                text-xl
                sm:text-2xl
                2xl:text-3xl
                font-medium
                leading-snug
                md:!leading-normal
                text-gray-300
              "
            >
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

          <div className="flex md:justify-center md:text-xl text-gray-400">
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
      <div className="bg-white">
        <div className="h-12 sm:h-20 md:h-36 2xl:h-48"></div>

        <div className={containerClasses}>
          <h2 className={headerClasses}>
            Learn USACO. <HighlightedText>Efficiently.</HighlightedText>
          </h2>
          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            Stop wasting time searching for problems and tutorials. The USACO
            Guide provides a{' '}
            <b className="text-black">comprehensive, organized roadmap</b>{' '}
            carefully designed and crafted for USACO contestants – available to
            everyone, for free.
          </p>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={DatabaseIcon}
            iconClasses="from-cyan-400 to-sky-500"
            title="Curated Resources"
            blobClasses="bg-sky-200 hidden xl:block"
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
            blobClasses="bg-purple-300"
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
            blobClasses="bg-orange-200"
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
            blobClasses="bg-green-200"
            feature={
              <div className="shadow-lg rounded-lg">
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
            <div className="mb-4 md:mb-8">
              Get help from other community members in the USACO Forum.
            </div>

            <a
              href="https://forum.usaco.guide/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 transition hover:text-purple-600"
            >
              View Forum &rarr;
            </a>
          </Feature>
        </div>
        <div className="h-16 md:h-20 2xl:h-36"></div>
      </div>
      {/* End Learn USACO. Efficiently. */}

      <div className="bg-black">
        <div className="h-16 md:h-20 2xl:h-36"></div>
        <div className={containerClasses}>
          <GlowingText className={headerClassesDark} extraGlow>
            Trusted by thousands.
          </GlowingText>
          <div className={headerSubtextSpacerClasses}></div>

          <p className={subtextClassesDark}>
            This guide is written by{' '}
            <GradientText>top USACO contestants,</GradientText> including
            two-time IOI winner and USACO Problemsetter Benjamin Qi.
          </p>
          <div className="h-4 2xl:h-12"></div>

          <TrustedBy />

          <div className="h-8 md:h-12 2xl:h-16"></div>

          <div className="relative group inline-block">
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

      <div className="bg-white">
        <div className="h-16 md:h-20 2xl:h-36"></div>
        <div className="px-4 sm:px-6 lg:px-8 2xl:px-16">
          <h2 className={classNames(headerClasses, 'md:text-center')}>
            Created by the CP Initiative.
          </h2>
          <div className="h-4 md:h-8"></div>
          <p className={classNames(subtextClasses, 'md:text-center mx-auto')}>
            Here are some of our other projects you might find useful!
          </p>

          <div className="h-12 md:h-16 2xl:24"></div>

          <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

      <div className="bg-black">
        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>

        <div className={containerClasses}>
          <GlowingText className={headerClassesDark} extraGlow>
            Join our Team.
          </GlowingText>
          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClassesDark}>
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

          <div className="relative group inline-block">
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

          <hr className="my-16 md:my-20 2xl:my-24 border-gray-800" />

          <GlowingText className={headerClassesDark} extraGlow>
            Or, help us financially!
          </GlowingText>
          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClassesDark}>
            We're a <GradientText>501(c)3 nonprofit organization</GradientText>{' '}
            — all donations are tax deductible. Since our inception in September
            2020, we've impacted well over <GradientText>16,000</GradientText>{' '}
            students across our various initiatives.
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
            <span className="text-lg font-medium text-gray-400 ml-4 md:ml-6">
              or{' '}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=FKG88TSTN82E4"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 transition hover:text-purple-400"
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
              className="text-blue-400 transition hover:text-purple-400"
            >
              {' '}
              sponsorship prospectus
            </a>
          </div>

          <div className="h-12 md:h-20"></div>

          <p className="uppercase text-gray-400 font-medium text-lg md:text-xl">
            Our Sponsors
          </p>

          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:grid-cols-4 lg:mt-6 text-gray-400 items-center">
            <div className="col-span-1">
              <a href="https://x-camp.academy" target="_blank" rel="noreferrer">
                <svg
                  className="max-h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 115 36"
                  version="1.1"
                >
                  <title>logo</title>
                  <defs>
                    <linearGradient
                      x1="5.19859512%"
                      y1="19.198021%"
                      x2="82.2709521%"
                      y2="74.2555542%"
                      id="linearGradient-1"
                    >
                      <stop stopColor="#FFC200" offset="0%" />
                      <stop stopColor="#FE9622" offset="67.1389572%" />
                      <stop stopColor="#AC4206" offset="100%" />
                    </linearGradient>
                    <path
                      d="M0.580272009,0.0550815828 L9.35909951,0.0550815828 C9.82421292,0.0550815828 10.256961,0.293154079 10.5059482,0.686010128 L20.9582334,17.1777977 L20.9582334,17.1777977 L11.1921779,17.1777977 C10.7270645,17.1777977 10.2943164,16.9397252 10.0453292,16.5468692 L0.121532541,0.88893948 C-0.0390405167,0.635584668 0.0361739569,0.300029829 0.28952877,0.139456772 C0.376487261,0.0843435865 0.477319387,0.0550815828 0.580272009,0.0550815828 Z"
                      id="path-2"
                    />
                    <filter
                      x="-2.4%"
                      y="-2.9%"
                      width="104.8%"
                      height="105.8%"
                      filterUnits="objectBoundingBox"
                      id="filter-3"
                    >
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="SourceAlpha"
                        result="shadowBlurInner1"
                      />
                      <feOffset
                        dx="0"
                        dy="0"
                        in="shadowBlurInner1"
                        result="shadowOffsetInner1"
                      />
                      <feComposite
                        in="shadowOffsetInner1"
                        in2="SourceAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                        result="shadowInnerInner1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.65 0"
                        type="matrix"
                        in="shadowInnerInner1"
                      />
                    </filter>
                    <linearGradient
                      x1="16.4822658%"
                      y1="20.0679124%"
                      x2="85.4460975%"
                      y2="102.250988%"
                      id="linearGradient-4"
                    >
                      <stop stopColor="#FFD600" offset="0%" />
                      <stop stopColor="#F8AE03" offset="100%" />
                    </linearGradient>
                    <path
                      d="M11.0450048,1.4242687e-13 L19.8242423,1.4242687e-13 C20.290056,1.44723065e-13 20.7233538,0.238784672 20.9721446,0.632593629 L31.2442529,16.8922326 L31.2442529,16.8922326 C31.4097417,17.0826093 31.6551297,17.1165558 31.9804171,16.9940719 C31.8359991,17.1165558 31.5829207,17.1777977 31.2211821,17.1777977 L21.6598885,17.1777977 C21.1940749,17.1777977 20.760777,16.939013 20.5119862,16.5452041 L10.5858439,0.833191864 C10.4256386,0.579604293 10.50134,0.24415896 10.7549276,0.0839537426 C10.8417394,0.0291099602 10.9423202,1.42445733e-13 11.0450048,1.4242687e-13 Z"
                      id="path-5"
                    />
                    <filter
                      x="-2.3%"
                      y="-2.9%"
                      width="104.6%"
                      height="105.8%"
                      filterUnits="objectBoundingBox"
                      id="filter-6"
                    >
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="SourceAlpha"
                        result="shadowBlurInner1"
                      />
                      <feOffset
                        dx="0"
                        dy="0"
                        in="shadowBlurInner1"
                        result="shadowOffsetInner1"
                      />
                      <feComposite
                        in="shadowOffsetInner1"
                        in2="SourceAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                        result="shadowInnerInner1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.65 0"
                        type="matrix"
                        in="shadowInnerInner1"
                      />
                    </filter>
                    <path
                      d="M0.580272009,0.0550815828 L9.35909951,0.0550815828 C9.82421292,0.0550815828 10.256961,0.293154079 10.5059482,0.686010128 L20.9582334,17.1777977 L20.9582334,17.1777977 L11.1921779,17.1777977 C10.7270645,17.1777977 10.2943164,16.9397252 10.0453292,16.5468692 L0.121532541,0.88893948 C-0.0390405167,0.635584668 0.0361739569,0.300029829 0.28952877,0.139456772 C0.376487261,0.0843435865 0.477319387,0.0550815828 0.580272009,0.0550815828 Z"
                      id="path-7"
                    />
                    <filter
                      x="-2.4%"
                      y="-2.9%"
                      width="104.8%"
                      height="105.8%"
                      filterUnits="objectBoundingBox"
                      id="filter-8"
                    >
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="SourceAlpha"
                        result="shadowBlurInner1"
                      />
                      <feOffset
                        dx="0"
                        dy="0"
                        in="shadowBlurInner1"
                        result="shadowOffsetInner1"
                      />
                      <feComposite
                        in="shadowOffsetInner1"
                        in2="SourceAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                        result="shadowInnerInner1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.65 0"
                        type="matrix"
                        in="shadowInnerInner1"
                      />
                    </filter>
                    <path
                      d="M11.0450048,1.4242687e-13 L19.8242423,1.4242687e-13 C20.290056,1.43451525e-13 20.7233538,0.238784672 20.9721446,0.632593629 L31.2442529,16.8922326 L31.2442529,16.8922326 C31.4097417,17.0826093 31.6551297,17.1165558 31.9804171,16.9940719 C31.8359991,17.1165558 31.5829207,17.1777977 31.2211821,17.1777977 L21.6598885,17.1777977 C21.1940749,17.1777977 20.760777,16.939013 20.5119862,16.5452041 L10.5858439,0.833191864 C10.4256386,0.579604293 10.50134,0.24415896 10.7549276,0.0839537426 C10.8417394,0.0291099602 10.9423202,1.41002443e-13 11.0450048,1.4242687e-13 Z"
                      id="path-9"
                    />
                    <filter
                      x="-2.3%"
                      y="-2.9%"
                      width="104.6%"
                      height="105.8%"
                      filterUnits="objectBoundingBox"
                      id="filter-10"
                    >
                      <feGaussianBlur
                        stdDeviation="0.5"
                        in="SourceAlpha"
                        result="shadowBlurInner1"
                      />
                      <feOffset
                        dx="0"
                        dy="0"
                        in="shadowBlurInner1"
                        result="shadowOffsetInner1"
                      />
                      <feComposite
                        in="shadowOffsetInner1"
                        in2="SourceAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                        result="shadowInnerInner1"
                      />
                      <feColorMatrix
                        values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.65 0"
                        type="matrix"
                        in="shadowInnerInner1"
                      />
                    </filter>
                  </defs>
                  <g
                    id="页面-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="第二版"
                      transform="translate(-141.000000, -38.000000)"
                    >
                      <g id="头部" transform="translate(6.000000, -273.000000)">
                        <g
                          id="logo"
                          transform="translate(135.000000, 311.000000)"
                        >
                          <g id="Group">
                            <g
                              id="down"
                              transform="translate(17.000000, 26.078400) scale(1, -1) translate(-17.000000, -26.078400) translate(0.000000, 17.078400)"
                            >
                              <g id="Rectangle">
                                <use
                                  fill="url(#linearGradient-1)"
                                  fillRule="evenodd"
                                  xlinkHref="#path-2"
                                />
                                <use
                                  fill="black"
                                  fillOpacity="1"
                                  filter="url(#filter-3)"
                                  xlinkHref="#path-2"
                                />
                              </g>
                              <g
                                id="Rectangle-Copy"
                                transform="translate(21.240149, 8.588899) scale(-1, 1) translate(-21.240149, -8.588899) "
                              >
                                <use
                                  fill="url(#linearGradient-4)"
                                  fillRule="evenodd"
                                  xlinkHref="#path-5"
                                />
                                <use
                                  fill="black"
                                  fillOpacity="1"
                                  filter="url(#filter-6)"
                                  xlinkHref="#path-5"
                                />
                              </g>
                            </g>
                            <g id="up">
                              <g id="Rectangle">
                                <use
                                  fill="url(#linearGradient-1)"
                                  fillRule="evenodd"
                                  xlinkHref="#path-7"
                                />
                                <use
                                  fill="black"
                                  fillOpacity="1"
                                  filter="url(#filter-8)"
                                  xlinkHref="#path-7"
                                />
                              </g>
                              <g
                                id="Rectangle-Copy"
                                transform="translate(21.240149, 8.588899) scale(-1, 1) translate(-21.240149, -8.588899) "
                              >
                                <use
                                  fill="url(#linearGradient-4)"
                                  fillRule="evenodd"
                                  xlinkHref="#path-9"
                                />
                                <use
                                  fill="black"
                                  fillOpacity="1"
                                  filter="url(#filter-10)"
                                  xlinkHref="#path-9"
                                />
                              </g>
                            </g>
                          </g>
                          <g
                            id="text"
                            transform="translate(33.567429, 7.275685)"
                          >
                            <path
                              d="M28.3015294,16.1048317 C27.4505904,16.9541082 26.4635158,17.6207802 25.3402763,18.1048678 C24.2170367,18.5889554 23.0087213,18.8309955 21.7152939,18.8309955 C20.4388853,18.8309955 19.2348246,18.5889554 18.1030756,18.1048678 C16.9713267,17.6207802 15.9842521,16.9583545 15.1418225,16.1175708 C14.2993928,15.2767871 13.6356703,14.2916412 13.150635,13.1621035 C12.6655997,12.0325658 12.4230857,10.8308576 12.4230857,9.55694292 C12.4230857,8.28302822 12.6655997,7.08132006 13.150635,5.95178236 C13.6356703,4.82224467 14.2993928,3.83709875 15.1418225,2.99631505 C15.9842521,2.15553135 16.9713267,1.49310565 18.1030756,1.00901807 C19.2348246,0.524930484 20.4388853,0.282890323 21.7152939,0.282890323 C23.0087213,0.282890323 24.2170367,0.524930484 25.3402763,1.00901807 C26.4635158,1.49310565 27.4505904,2.15977767 28.3015294,3.00905413 L26.1316456,5.17469828 C25.5359883,4.58020476 24.8637565,4.12584867 24.1149301,3.81161638 C23.3661037,3.49738409 22.566233,3.3402703 21.7152939,3.3402703 C20.8813736,3.3402703 20.0900122,3.49738409 19.3411858,3.81161638 C18.5923594,4.12584867 17.9201276,4.58020476 17.3244703,5.17469828 C16.7288129,5.76919181 16.2735673,6.44011015 15.9587199,7.18747344 C15.6438724,7.93483672 15.4864511,8.72465198 15.4864511,9.55694292 C15.4864511,10.3892338 15.6438724,11.1832954 15.9587199,11.9391515 C16.2735673,12.6950075 16.7288129,13.3701722 17.3244703,13.9646657 C17.9201276,14.5591592 18.5923594,15.009269 19.3411858,15.3150085 C20.0900122,15.6207481 20.8813736,15.7736155 21.7152939,15.7736155 C22.566233,15.7736155 23.3661037,15.6207481 24.1149301,15.3150085 C24.8637565,15.009269 25.5359883,14.5591592 26.1316456,13.9646657 L28.3015294,16.1048317 Z M43.3120196,5.73521795 L43.3120196,18.4997793 L40.2486543,18.4997793 L40.2486543,12.1302377 C40.2486543,11.111106 39.8912652,10.244857 39.1764764,9.53146475 C38.4616876,8.81807252 37.5937428,8.46138176 36.5726159,8.46138176 C36.0790712,8.46138176 35.6068071,8.55480077 35.1558094,8.74164159 C34.7048117,8.92848241 34.3091309,9.19175417 33.9687553,9.53146475 C33.2539665,10.244857 32.8965774,11.111106 32.8965774,12.1302377 C32.8965774,13.132384 33.2539665,13.9901403 33.9687553,14.7035325 C34.3091309,15.0602287 34.7048117,15.3277467 35.1558094,15.5060948 C35.6068071,15.6844428 36.0790712,15.7736155 36.5726159,15.7736155 C37.0831793,15.7736155 37.5426795,15.6886892 37.9511303,15.5188339 L39.0488362,18.2449977 C38.2659722,18.6356649 37.3554811,18.8309955 36.3173354,18.8309955 C35.3813024,18.8309955 34.5176122,18.6568964 33.7262389,18.3086931 C32.9348656,17.9604897 32.2498699,17.4806557 31.6712313,16.8691767 C31.0925927,16.2576976 30.6416018,15.5443161 30.3182449,14.7290107 C29.9948881,13.9137053 29.8332121,13.0474563 29.8332121,12.1302377 C29.8332121,11.1960336 29.9948881,10.321292 30.3182449,9.50598658 C30.6416018,8.69068118 31.0925927,7.97729965 31.6712313,7.3658206 C32.2498699,6.75434155 32.9348656,6.27450754 33.7262389,5.9263042 C34.5176122,5.57810085 35.3813024,5.40400178 36.3173354,5.40400178 C37.1512557,5.40400178 37.8915616,5.53139134 38.5382753,5.78617428 C39.184989,6.04095722 39.7551096,6.36367743 40.2486543,6.75434461 L40.2486543,5.73521795 L43.3120196,5.73521795 Z M60.0584169,5.40400178 C60.7732057,5.40400178 61.3986365,5.53988398 61.9347281,5.81165245 C62.4708197,6.08342091 62.9090468,6.45709695 63.2494224,6.93269177 C63.5897981,7.40828659 63.8450759,7.96030801 64.0152638,8.58877259 C64.1854516,9.21723717 64.2705442,9.89664815 64.2705442,10.6270259 L64.2705442,18.4997793 L61.2071789,18.4997793 L61.2071789,10.6270259 C61.2071789,10.0325324 60.9944473,9.52297415 60.5689777,9.09833592 C60.160527,8.67369769 59.6499712,8.46138176 59.0372951,8.46138176 C58.4246189,8.46138176 57.9140632,8.67369769 57.5056124,9.09833592 C57.0801429,9.52297415 56.8674113,10.0325324 56.8674113,10.6270259 L56.8674113,18.4997793 L53.8040459,18.4997793 L53.8040459,10.6270259 C53.8040459,10.0325324 53.5913144,9.52297415 53.1658448,9.09833592 C52.9616194,8.87752404 52.7276147,8.71616393 52.4638236,8.61425076 C52.2000325,8.51233758 51.9234814,8.46138176 51.6341622,8.46138176 C51.0044672,8.46138176 50.4854022,8.67369769 50.0769514,9.09833592 C49.6514819,9.52297415 49.4387503,10.0325324 49.4387503,10.6270259 L49.4387503,18.4997793 L46.375385,18.4997793 L46.375385,5.76069611 L49.4387503,5.76069611 L49.4387503,6.88173544 C49.932295,6.45709721 50.45136,6.10465276 50.995961,5.82439153 C51.540562,5.5441303 52.0936641,5.40400178 52.6552839,5.40400178 C53.4211291,5.40400178 54.0508146,5.55686925 54.5443592,5.86260878 C55.0379039,6.16834831 55.4803856,6.59298017 55.8718175,7.1365171 C56.3313246,6.64393675 56.9269731,6.23204385 57.6587807,5.90082603 C58.3905883,5.56960821 59.190459,5.40400178 60.0584169,5.40400178 Z M74.0733133,5.40400178 C75.0093463,5.40400178 75.8730365,5.57810085 76.6644098,5.9263042 C77.4557832,6.27450754 78.1407789,6.75434155 78.7194174,7.3658206 C79.298056,7.97729965 79.7490469,8.69068118 80.0724038,9.50598658 C80.3957606,10.321292 80.5574366,11.1960336 80.5574366,12.1302377 C80.5574366,13.0474563 80.3957606,13.9137053 80.0724038,14.7290107 C79.7490469,15.5443161 79.298056,16.2576976 78.7194174,16.8691767 C78.1407789,17.4806557 77.4557832,17.9604897 76.6644098,18.3086931 C75.8730365,18.6568964 75.0093463,18.8309955 74.0733133,18.8309955 C73.0351676,18.8309955 72.1246765,18.6356649 71.3418125,18.2449977 L72.4395185,15.5188339 C72.8479692,15.6886892 73.3074694,15.7736155 73.8180329,15.7736155 C74.3115775,15.7736155 74.779587,15.6844428 75.2220753,15.5060948 C75.6645636,15.3277467 76.064499,15.0602287 76.4218934,14.7035325 C77.1366822,13.9901403 77.4940713,13.132384 77.4940713,12.1302377 C77.4940713,11.111106 77.1366822,10.244857 76.4218934,9.53146475 C75.673067,8.81807252 74.8051222,8.46138176 73.8180329,8.46138176 C72.796906,8.46138176 71.9289611,8.81807252 71.2141723,9.53146475 C70.4993835,10.244857 70.1419945,11.111106 70.1419945,12.1302377 L70.1419945,23.5954126 L67.0786291,23.5954126 L67.0786291,5.73521795 L70.1419945,5.73521795 L70.1419945,6.75434461 C70.6355391,6.36367743 71.2056597,6.04095722 71.8523734,5.78617428 C72.4990871,5.53139134 73.239393,5.40400178 74.0733133,5.40400178 Z"
                              id="Camp"
                              fill="#FFFFFF"
                            />
                            <line
                              x1="0"
                              y1="10.6640116"
                              x2="5.92366387"
                              y2="10.6640116"
                              id="Line"
                              stroke="#FFFFFF"
                              strokeWidth="1.578528"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="col-span-1">
              <a
                href="https://vercel.com/?utm_source=cp-initiative&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="max-h-12"
                  viewBox="0 0 4438 1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>
      </div>

      {/* Begin FAQ */}
      <div className="bg-white dark:bg-dark-surface">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
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
                      <OutboundLink
                        href="http://www.usaco.org/"
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        USA Computing Olympiad
                      </OutboundLink>
                      . Check out the{' '}
                      <Link
                        to="/general/usaco-faq"
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

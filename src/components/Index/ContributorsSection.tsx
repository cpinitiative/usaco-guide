import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {
  contentAuthors,
  pastContentAuthors,
} from '../../../content/authors/contributors';

export default function ContributorsSection(): JSX.Element {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/^authors/images/.*/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 128
                height: 128
                quality: 100
                transformOptions: { cropFocus: CENTER }
                layout: FIXED
              )
            }
            name
          }
        }
      }
    }
  `);
  return (
    <div className="bg-white dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="text-lg mx-auto">
            <p className="text-base text-center leading-6 text-blue-600 dark:text-blue-300 font-semibold tracking-wide uppercase">
              Contributors
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 max-w-prose">
              By the Community, for the Community.
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-8 mb-6 mx-auto max-w-prose">
              Interested in joining the USACO Guide team? We are recruiting
              Content Authors to help us improve the USACO Guide!{' '}
              <a
                href="https://docs.google.com/document/d/13QpXqdiYQwjBLnywGL1FUG7GFdh8SM_1NigIkJl-A7k/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 font-bold"
              >
                Apply here.
              </a>{' '}
              If you're in the United States, you can earn volunteer hours too!
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10">
              Current Content Authors:
            </h1>
            <ul className="mb-4 mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
              {contentAuthors.map(author => (
                <li key={author.name}>
                  <div className="space-y-3">
                    <div className="w-36 h-36 sm:h-28 sm:w-28 md:h-36 md:w-36 xl:h-32 xl:w-32 mx-auto">
                      <GatsbyImage
                        image={
                          (data as any).allFile.edges.find(
                            x => x.node.name === author.photo
                          ).node.childImageSharp.gatsbyImageData
                        }
                        className="rounded-full overflow-hidden gatsby-image-wrapper-rounded"
                        alt={author.name}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium lg:text-sm">
                        <a
                          href={`https://github.com/${author.githubUsername}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 dark:text-blue-400"
                        >
                          <h3>{author.name}</h3>
                        </a>{' '}
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-6">
                        Since {author.sinceDate}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10">
              Past Content Authors:
            </h1>
            <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
              {pastContentAuthors.map(author => (
                <li key={author.name}>
                  <div className="space-y-3">
                    <div className="w-36 h-36 sm:h-28 sm:w-28 md:h-36 md:w-36 xl:h-32 xl:w-32 mx-auto">
                      <GatsbyImage
                        image={
                          (data as any).allFile.edges.find(
                            x => x.node.name === author.photo
                          ).node.childImageSharp.gatsbyImageData
                        }
                        className="rounded-full overflow-hidden gatsby-image-wrapper-rounded"
                        alt={author.name}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium lg:text-sm">
                        <a
                          href={`https://github.com/${author.githubUsername}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 dark:text-blue-400"
                        >
                          <h3>{author.name}</h3>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

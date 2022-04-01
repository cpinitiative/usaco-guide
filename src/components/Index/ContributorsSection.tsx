import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import {
  contentAuthors,
  Contributor,
  pastContentAuthors,
} from '../../../content/authors/contributors';

const ContentAuthor = ({
  author,
  hideSinceDate = false,
  image,
}: {
  author: Contributor;
  hideSinceDate?: boolean;
  image: IGatsbyImageData;
}) => (
  <li key={author.name}>
    <div className="space-y-3">
      <div className="w-32 h-32 sm:h-28 sm:w-28 md:h-36 md:w-36 xl:h-32 xl:w-32 mx-auto">
        <GatsbyImage
          image={image}
          className="border border-black"
          alt={author.name}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="text-center">
        <div className="text-sm font-medium">
          <a
            href={`https://github.com/${author.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="usaco-link"
          >
            <h3>{author.name}</h3>
          </a>{' '}
        </div>
        {!hideSinceDate ? (
          <p className="leading-4 text-xs mb-6">Since {author.sinceDate}</p>
        ) : null}
      </div>
    </div>
  </li>
);

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
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold small-caps">
        By the Community, for the Community.
      </h1>
      <p>
        Interested in joining the USACO Guide team? We are recruiting Content
        Authors to help us improve the USACO Guide!{' '}
        <a
          href="https://docs.google.com/document/d/13QpXqdiYQwjBLnywGL1FUG7GFdh8SM_1NigIkJl-A7k/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="usaco-link"
        >
          Apply here.
        </a>{' '}
        If you're in the United States, you can earn volunteer hours too!
      </p>

      <div className="h-6" />

      <h2 className="text-lg font-bold">Current Content Authors:</h2>
      <ul className="mt-2 mx-auto grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:max-w-5xl xl:grid-cols-6">
        {contentAuthors.map(author => {
          const image = (data as any).allFile.edges.find(
            x => x.node.name === author.photo
          ).node.childImageSharp.gatsbyImageData;
          return (
            <ContentAuthor key={author.name} author={author} image={image} />
          );
        })}
      </ul>

      <div className="h-6" />

      <h2 className="text-lg font-bold">Past Content Authors:</h2>
      <ul className="mt-2 mx-auto grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:max-w-5xl xl:grid-cols-6">
        {pastContentAuthors.map(author => {
          const image = (data as any).allFile.edges.find(
            x => x.node.name === author.photo
          ).node.childImageSharp.gatsbyImageData;
          return (
            <ContentAuthor
              key={author.name}
              author={author}
              image={image}
              hideSinceDate
            />
          );
        })}
      </ul>
    </div>
  );
}

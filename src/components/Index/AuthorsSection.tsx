import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Author, Authors } from '../../../content/authors/authors';

const AuthorCard = ({
  author,
  gatsbyImage,
}: {
  author: Author;
  gatsbyImage: any;
}) => {
  const socialMedia = {
    email: {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: x => `mailto:${x}`,
    },
    facebook: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: x => `https://www.facebook.com/${x}`,
    },
    linkedin: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 1792 1792">
          <path d="M365 1414h231v-694h-231v694zm246-908q-1-52-36-86t-93-34-94.5 34-36.5 86q0 51 35.5 85.5t92.5 34.5h1q59 0 95-34.5t36-85.5zm585 908h231v-398q0-154-73-233t-193-79q-136 0-209 117h2v-101h-231q3 66 0 694h231v-388q0-38 7-56 15-35 45-59.5t74-24.5q116 0 116 157v371zm468-998v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" />
        </svg>
      ),
      link: x => `https://www.linkedin.com/in/${x}`,
    },
    github: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      link: x => `https://github.com/${x}`,
    },
    codeforces: {
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
        </svg>
      ),
      link: x => `https://codeforces.com/profile/${x}`,
    },
    website: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
      ),
      link: x => x,
    },
    youtube: {
      icon: (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.25 12L9.75 8.75V15.25L15.25 12Z"
          ></path>
        </svg>
      ),
      link: x => x,
    },
    reddit: {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
        </svg>
      ),
      link: x => `https://reddit.com/user/${x}`,
    },
  };
  return (
    <div
      className={`py-8 sm:py-12 lg:py-8 px-4 sm:flex sm:flex-col xl:py-16 sm:px-8 border border-blue-900 dark:border-gray-700`}
    >
      <blockquote className="sm:flex-grow sm:flex sm:items-center text-center sm:text-left max-w-sm sm:max-w-3xl mx-auto w-full">
        <div className="flex-shrink-0">
          <div
            className={`inline-flex rounded-full border-2 border-white dark:border-gray-200`}
          >
            <div className="w-36 h-36 md:h-48 md:w-48 lg:h-36 lg:w-36 xl:h-48 xl:w-48">
              <GatsbyImage
                image={gatsbyImage.gatsbyImageData}
                className="rounded-full overflow-hidden gatsby-image-wrapper-rounded"
                alt={author.name}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-8 lg:ml-6 xl:ml-8">
          <div className="space-x-2">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-blue-700 text-blue-100 dark:text-blue-200 dark:bg-blue-900">
              {author.title}
            </span>
          </div>
          <div className="text-3xl font-bold text-white dark:text-gray-100">
            {author.name}
          </div>
          <div className="mt-4 text-base text-blue-200 dark:text-gray-300">
            <p className="relative">{author.blurb}</p>
          </div>
          <div className="mt-2 flex space-x-2 justify-center sm:justify-start">
            {Object.keys(socialMedia)
              .filter(sm => author.hasOwnProperty(sm))
              .map(sm => (
                <a
                  key={author.name + sm}
                  href={socialMedia[sm].link(author[sm])}
                  className="text-blue-300 hover:text-blue-200 dark:text-gray-400 dark:hover:text-gray-300 transition duration-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{sm}</span>
                  {socialMedia[sm].icon}
                </a>
              ))}
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default function AuthorsSection() {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/^authors/images/.*/" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                width: 192
                height: 192
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
    <section className="bg-blue-800 dark:bg-gray-900 overflow-hidden">
      <div className="py-6 sm:py-12 text-center border-b-2 border-blue-900 dark:border-gray-700">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white px-4">
          Authors you can trust.
        </h2>
      </div>
      <div className="lg:grid lg:grid-cols-2 -m-px">
        {Authors.map(author => (
          <AuthorCard
            author={author}
            key={author.name}
            gatsbyImage={
              (data as any).allFile.edges.find(
                x => x.node.name === author.photo
              ).node.childImageSharp
            }
          />
        ))}
        {Authors.length % 2 === 1 && (
          <div className="border border-blue-900 dark:border-gray-700" />
        )}
      </div>
    </section>
  );
}

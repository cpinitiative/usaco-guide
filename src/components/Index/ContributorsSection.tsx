import * as React from 'react';
import { contentAuthors } from '../../../content/authors/contributors';

export default function ContributorsSection(): JSX.Element {
  return (
    <div className="relative py-16 bg-white dark:bg-dark-surface overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200 dark:text-gray-800"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <p className="text-base text-center leading-6 text-blue-600 dark:text-blue-300 font-semibold tracking-wide uppercase">
            Contributors
          </p>
          <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
            By the Community, for the Community.
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-8 mb-6">
            Interested in joining the USACO Guide team? We are recruiting
            Content Authors to help us improve the USACO Guide!{' '}
            <a
              href="https://docs.google.com/document/d/13xR2A2mOftVzlC6QTSkm3zLLdFtI1NhlzRWJ81FfU9U/edit"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 font-bold"
            >
              Apply here.
            </a>{' '}
            If you're in the United States, you can earn volunteer hours too!
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Current Content Authors:
          </p>
          <ul className="text-gray-500 dark:text-gray-400 list-disc list-inside space-y-2">
            {contentAuthors.map(author => (
              <li key={author.name}>
                <a
                  href={`https://github.com/${author.githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400"
                >
                  {author.name}
                </a>{' '}
                (since {author.sinceDate})
              </li>
            ))}
            <li className="italic">
              This could be you!{' '}
              <a
                href="https://docs.google.com/document/d/13xR2A2mOftVzlC6QTSkm3zLLdFtI1NhlzRWJ81FfU9U/edit"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400"
              >
                Apply here.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

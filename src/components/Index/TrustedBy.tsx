import * as React from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useEffect, useState } from 'react';

export default function TrustedBy() {
  const [numUsers, setNumUsers] = useState('.');
  const [numPageviews, setNumPageviews] = useState('.');
  const [numStars, setNumStars] = useState('.');
  useEffect(() => {
    fetch('https://usaco-guide.firebaseio.com/analytics/pageviews.json')
      .then(resp => resp.json())
      .then(pageviews => {
        setNumPageviews(Math.floor(parseInt(pageviews) / 1000) + 'k');
      });
    fetch('https://usaco-guide.firebaseio.com/num_users.json')
      .then(resp => resp.json())
      .then(numUsers => {
        setNumUsers(
          Math.floor(numUsers / 1000) +
            '.' +
            Math.floor((numUsers % 1000) / 100) +
            'k'
        );
      });
    fetch('https://api.github.com/repos/cpinitiative/usaco-guide')
      .then(resp => resp.json())
      .then(data => {
        setNumStars(data.stargazers_count);
      });
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
            Trusted by thousands of users.
          </h2>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Thousands of USACO contestants have utilized this Guide to improve
            their skills.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white dark:bg-dark-surface sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                    Registered Users
                  </dt>
                  <dd
                    className={`order-1 text-5xl font-extrabold text-blue-600 dark:text-blue-300 ${
                      numUsers === '.' ? 'opacity-0' : 'opacity-100'
                    } transition duration-150 ease-in-out`}
                  >
                    {numUsers}
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                    Pageviews
                  </dt>
                  <dd
                    className={`order-1 text-5xl font-extrabold text-blue-600 dark:text-blue-300 ${
                      numPageviews === '.' ? 'opacity-0' : 'opacity-100'
                    } transition duration-150 ease-in-out`}
                  >
                    {numPageviews}
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400">
                    Github Stars
                  </dt>
                  <dd
                    className={`order-1 text-5xl font-extrabold text-blue-600 dark:text-blue-300 ${
                      numStars === '.' ? 'opacity-0' : 'opacity-100'
                    } transition duration-150 ease-in-out`}
                  >
                    {numStars}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from 'react';
import { useEffect, useState } from 'react';

export default function TrustedBy() {
  const [numUsers, setNumUsers] = useState(-1);
  const [numPageviews, setNumPageviews] = useState(-1);
  const [numStars, setNumStars] = useState(-1);
  useEffect(() => {
    fetch('https://usaco-guide.firebaseio.com/pageviews.json')
      .then(resp => resp.json())
      .then(pageviews => {
        setNumPageviews(parseInt(pageviews));
      });
    fetch('https://usaco-guide.firebaseio.com/num_users.json')
      .then(resp => resp.json())
      .then(numUsers => {
        setNumUsers(parseInt(numUsers));
      });
    fetch('https://api.github.com/repos/cpinitiative/usaco-guide')
      .then(resp => resp.json())
      .then(data => {
        setNumStars(data.stargazers_count);
      });
  }, []);

  const usersText =
    Math.floor(numUsers / 1000) +
    '.' +
    Math.floor((numUsers % 1000) / 100) +
    'k';
  const pageviewsText =
    numPageviews >= 1000000
      ? (numPageviews / 1000000).toFixed(2) + 'M'
      : Math.floor(numPageviews / 1000) + 'k';

  return (
    <div className="max-w-4xl">
      <dl className="rounded-lg sm:grid sm:grid-cols-3">
        <div className="flex flex-col py-2 sm:p-0">
          <dt className="order-2 text-lg leading-6 font-medium text-gray-400">
            Registered Users
          </dt>
          <dd
            className={`order-1 text-4xl sm:text-5xl leading-normal sm:leading-normal font-extrabold text-blue-300 ${
              numUsers === -1 ? 'opacity-0' : 'opacity-100'
            } transition`}
            title={numUsers !== -1 ? `${numUsers} registered users` : null}
          >
            {usersText}
          </dd>
        </div>
        <div className="flex flex-col py-2 sm:p-0">
          <dt className="order-2 text-lg leading-6 font-medium text-gray-400">
            Pageviews
          </dt>
          <dd
            className={`order-1 text-4xl sm:text-5xl leading-normal sm:leading-normal font-extrabold text-blue-300 ${
              numPageviews === -1 ? 'opacity-0' : 'opacity-100'
            } transition`}
            title={numPageviews !== -1 ? `${numPageviews} pageviews` : null}
          >
            {pageviewsText}
          </dd>
        </div>
        <div className="flex flex-col py-2 sm:p-0">
          <dt className="order-2 text-lg leading-6 font-medium text-gray-400">
            Github Stars
          </dt>
          <dd
            className={`order-1 text-4xl sm:text-5xl leading-normal sm:leading-normal font-extrabold text-blue-300 ${
              numStars === -1 ? 'opacity-0' : 'opacity-100'
            } transition`}
          >
            {numStars}
          </dd>
        </div>
      </dl>
    </div>
  );
}

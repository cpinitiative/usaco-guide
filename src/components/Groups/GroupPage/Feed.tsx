import * as React from 'react';
import Tabs from '../../Tabs';
import { useState } from 'react';
import FeedItem from './FeedItem';
import { Link } from 'gatsby';

export default function Feed() {
  const feedTabs = ['Feed', 'Assignments', 'Announcements'];
  const [currentFeed, setCurrentFeed] = useState('Feed');

  return (
    <>
      <div className="px-4 sm:px-0">
        <Tabs
          options={feedTabs}
          value={currentFeed}
          onChange={x => setCurrentFeed(x)}
        />
      </div>
      <div className="mt-4">
        <ul className="divide-y divide-solid divide-gray-200 sm:divide-none sm:space-y-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(x => (
            <li key={x}>
              <FeedItem />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

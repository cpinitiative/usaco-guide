import * as React from 'react';
import Tabs from '../../Tabs';
import { useState } from 'react';
import FeedItem from './FeedItem';

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
        <h1 className="sr-only">Recent questions</h1>
        <ul className="space-y-4">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(x => (
            <li
              className="bg-white px-3 py-4 shadow sm:px-6 sm:py-5 sm:rounded-lg hover:bg-cyan-50 transition"
              key={x}
            >
              <FeedItem />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

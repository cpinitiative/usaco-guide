import * as React from 'react';
import Tabs from '../../Tabs';
import { useContext, useState } from 'react';
import FeedItem from './FeedItem';
import { Link } from 'gatsby';
import { GroupsContext } from '../../../pages/groups';
import { observer } from 'mobx-react-lite';

export default observer(function Feed() {
  const feedTabs = ['Feed', 'Assignments', 'Announcements'];
  const [currentFeed, setCurrentFeed] = useState('Feed');
  const groupStore = useContext(GroupsContext);

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
          {groupStore.activeGroup.posts.map(post => (
            <li key={post.id}>
              <FeedItem post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

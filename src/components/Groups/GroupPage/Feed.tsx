import * as React from 'react';
import Tabs from '../../Tabs';
import { useContext, useState } from 'react';
import FeedItem from './FeedItem';
import { Link } from 'gatsby';
import { GroupsContext } from '../../../pages/groups';
import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

export default observer(function Feed() {
  const feedTabs = ['all', 'assignments', 'announcements'];
  const groupStore = useContext(GroupsContext);

  return (
    <>
      <div className="px-4 sm:px-0">
        <Tabs
          options={feedTabs}
          labelMap={{
            all: 'Feed',
            assignments: 'Assignments',
            announcements: 'Announcements',
          }}
          value={groupStore.activeGroup.currentFeed}
          onChange={action(
            (x: 'all' | 'assignments' | 'announcements') =>
              (groupStore.activeGroup.currentFeed = x)
          )}
        />
      </div>
      <div className="mt-4">
        <ul className="divide-y divide-solid divide-gray-200 sm:divide-none sm:space-y-4">
          {groupStore.activeGroup.feed.map(post => (
            <li key={post.id}>
              <FeedItem post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});

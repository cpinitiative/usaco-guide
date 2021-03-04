import * as React from 'react';
import Tabs from '../../Tabs';
import { useContext } from 'react';
import FeedItem from './FeedItem';
import { GroupsContext } from '../../../pages/groups';
import { action } from 'mobx';
import { GroupData } from '../../../models/groups/groups';
import { usePosts } from '../../../hooks/groups/usePosts';

export default function Feed({ group }: { group: GroupData }) {
  const feedTabs = ['all', 'assignments', 'announcements'];
  const posts = usePosts(group?.id);

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
          value={feedTabs[0]}
          onChange={(x: 'all' | 'assignments' | 'announcements') =>
            console.log(x)
          }
        />
      </div>
      <div className="mt-4">
        {posts.isLoading && 'Loading posts...'}
        {posts.isSuccess && (
          <ul className="divide-y divide-solid divide-gray-200 sm:divide-none sm:space-y-4">
            {posts.data.map(post => (
              <li key={post.id}>
                <FeedItem group={group} post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { sortPostsComparator } from '../../../models/groups/posts';
import Tabs from '../../Tabs';
import FeedItem from './FeedItem';

export default function Feed() {
  const feedTabs = ['all', 'assignments', 'announcements'];
  const [currentFeed, setCurrentFeed] = React.useState<string>('all');
  const group = useActiveGroup();

  const feedPosts = group.posts
    ?.filter(post => {
      if (!group.showAdminView && !post.isPublished) return false;
      if (currentFeed === 'all') return true;
      if (currentFeed === 'assignments') return post.type === 'assignment';
      if (currentFeed === 'announcements') return post.type === 'announcement';
      throw 'unknown feed ' + this.currentFeed;
    })
    .sort(sortPostsComparator)
    .reverse();

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
          value={currentFeed}
          onChange={setCurrentFeed}
        />
      </div>
      <div className="mt-4">
        {group.isLoading && 'Loading posts...'}
        {!group.isLoading && (
          <ul className="divide-y divide-solid divide-gray-200 dark:divide-gray-600 sm:divide-none sm:space-y-4">
            {feedPosts.map(post => (
              <li key={post.id}>
                <FeedItem group={group.groupData} post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

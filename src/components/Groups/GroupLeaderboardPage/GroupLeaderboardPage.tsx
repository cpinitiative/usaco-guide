import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import useLeaderboardData from '../../../hooks/groups/useLeaderboardData';
import { sortPostsComparator } from '../../../models/groups/posts';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import { LeaderboardTable } from '../LeaderboardTable/LeaderboardTable';

export default function GroupLeaderboardPage(): JSX.Element {
  const activeGroup = useActiveGroup();
  const posts = activeGroup.posts;
  const leaderboard = useLeaderboardData({
    groupId: activeGroup.activeGroupId,
    maxResults: 50,
  });

  const assignments = React.useMemo(() => {
    return posts
      ?.filter(post => post.type === 'assignment' && post.isPublished)
      .sort(sortPostsComparator);
  }, [posts]);

  const fullWidth = assignments?.length > 10;

  return (
    <Layout>
      <SEO title={`Leaderboard: ${activeGroup.groupData.name}`} />

      <TopNavigationBar />

      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className={`${
            fullWidth ? '' : 'max-w-5xl w-full mx-auto'
          } px-4 sm:px-6 lg:px-8 pt-3 pb-4`}
          group={activeGroup.groupData}
        />
      </nav>

      <div
        className={`${fullWidth ? '' : 'max-w-5xl mx-auto'} sm:px-6 lg:px-8`}
      >
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0 px-4 sm:px-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate">
              Leaderboard: {activeGroup.groupData.name}
            </h2>
          </div>
          {/*<div className="mt-4 flex md:mt-0 md:ml-4">*/}
          {/*  <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
          {/*    Edit*/}
          {/*  </button>*/}
          {/*  <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
          {/*    Publish*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>

        <div className="h-6" />

        <div className="flex flex-col">
          <LeaderboardTable
            columns={assignments?.map(post => ({
              id: post.id,
              tooltip: post.name,
            }))}
            rows={leaderboard?.map(item => ({
              id: item.userInfo.uid,
              name: item.userInfo.displayName,
              points: item.totalPoints,
              items: assignments.map(postData => ({
                id: postData.id,
                value: '' + (item[postData.id]?.totalPoints ?? 0),
              })),
            }))}
          />
        </div>
      </div>
    </Layout>
  );
}

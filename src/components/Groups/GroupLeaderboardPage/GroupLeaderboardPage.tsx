import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import useLeaderboardData from '../../../hooks/groups/useLeaderboardData';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import { LeaderboardTable } from '../LeaderboardTable/LeaderboardTable';

export default function GroupLeaderboardPage(props: {
  path: string;
}): JSX.Element {
  const activeGroup = useActiveGroup();
  const posts = activeGroup.posts;
  const leaderboard = useLeaderboardData({
    groupId: activeGroup.activeGroupId!,
    maxResults: 50,
  });

  const assignments = React.useMemo(() => {
    if (!posts || !activeGroup.groupData!.postOrdering) return null;
    return activeGroup
      .groupData!.postOrdering.map(postId =>
        posts.find(post => post.id === postId)
      )
      .filter(post => post?.type === 'assignment' && post.isPublished);
  }, [posts]);

  const fullWidth = assignments && assignments.length > 10;

  return (
    <Layout>
      <SEO
        title={`Leaderboard: ${activeGroup.groupData!.name}`}
        image={null}
        pathname={props.path}
      />

      <TopNavigationBar />

      <nav className="mt-6 mb-4 flex" aria-label="Breadcrumb">
        <Breadcrumbs
          className={`${
            fullWidth ? '' : 'mx-auto w-full max-w-5xl'
          } px-4 pt-3 pb-4 sm:px-6 lg:px-8`}
          group={activeGroup.groupData!}
        />
      </nav>

      <div
        className={`${fullWidth ? '' : 'mx-auto max-w-5xl'} sm:px-6 lg:px-8`}
      >
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1 px-4 sm:px-0">
            <h2 className="text-2xl leading-7 font-bold text-gray-900 sm:truncate sm:text-3xl dark:text-gray-100">
              Leaderboard: {activeGroup.groupData!.name}
            </h2>
          </div>
          {/*<div className="mt-4 flex md:mt-0 md:ml-4">*/}
          {/*  <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
          {/*    Edit*/}
          {/*  </button>*/}
          {/*  <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
          {/*    Publish*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>

        <div className="h-6" />

        <div className="flex flex-col">
          <LeaderboardTable
            columns={assignments?.map(post => ({
              id: post!.id!,
              tooltip: post!.name!,
            }))}
            rows={leaderboard?.map(item => ({
              id: item.userInfo.uid,
              name: item.userInfo.displayName,
              points: item.totalPoints,
              items: assignments!.map(postData => ({
                id: postData!.id!,
                value: '' + (item[postData!.id!]?.totalPoints ?? 0),
              })),
            }))}
          />
        </div>
      </div>
    </Layout>
  );
}

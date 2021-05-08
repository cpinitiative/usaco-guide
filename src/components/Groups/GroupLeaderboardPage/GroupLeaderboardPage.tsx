import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import getMemberInfoForGroup from '../../../hooks/groups/useMemberInfoForGroup';
import { sortPostsComparator } from '../../../models/groups/posts';
import Layout from '../../layout';
import SEO from '../../seo';
import TextTooltip from '../../Tooltip/TextTooltip';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';

export default function GroupLeaderboardPage(): JSX.Element {
  const activeGroup = useActiveGroup();
  const posts = activeGroup.posts;
  const leaderboard = activeGroup.groupData.leaderboard;

  const assignments = React.useMemo(() => {
    return posts
      ?.filter(post => post.type === 'assignment')
      .sort(sortPostsComparator);
  }, [posts]);

  const members = getMemberInfoForGroup(activeGroup.groupData);
  const leaderboardItems = React.useMemo(() => {
    if (!leaderboard || !members || !assignments) return null;

    const leaderboardSum = {};
    for (const post of assignments) {
      if (!leaderboard.hasOwnProperty(post.id)) continue;
      for (const problemID of Object.keys(leaderboard[post.id])) {
        for (const userID of Object.keys(leaderboard[post.id][problemID])) {
          if (!(userID in leaderboardSum)) leaderboardSum[userID] = {};
          if (!(post.id in leaderboardSum[userID])) {
            leaderboardSum[userID][post.id] = 0;
          }
          leaderboardSum[userID][post.id] +=
            leaderboard[post.id][problemID][userID].bestScore;
        }
      }
    }
    const data = activeGroup.groupData.memberIds
      .map(id => ({
        member: members.find(member => member.uid === id),
        postDetails: assignments.map(
          post => leaderboardSum[id]?.[post.id] || 0
        ),
        points: Object.keys(leaderboardSum[id] || {}).reduce(
          (acc, cur) => acc + leaderboardSum[id][cur],
          0
        ),
      }))
      .filter(x => !!x.member); // filter is needed in case a member just joined and their data isn't available yet
    return data.sort((a, b) => b.points - a.points);
  }, [leaderboard, members, assignments]);

  const postCellStyles =
    'w-16 text-center border-l border-gray-200 dark:border-gray-700 px-2';

  return (
    <Layout>
      <SEO title={`Leaderboard: ${activeGroup.groupData.name}`} />

      <TopNavigationBar />

      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className={`max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4`}
          group={activeGroup.groupData}
        />
      </nav>

      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
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
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow border-b border-gray-200 dark:border-transparent sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 text-center border-r border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider w-16"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Points
                      </th>
                      {/*<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">*/}
                      {/*  Last Submission Time*/}
                      {/*</th>*/}
                      {assignments?.map((post, idx) => (
                        <th
                          scope="col"
                          className={
                            postCellStyles +
                            ' py-3 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider'
                          }
                          key={post.id}
                        >
                          <TextTooltip content={post.name}>
                            P{idx + 1}
                          </TextTooltip>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardItems?.map((item, idx) => (
                      <tr
                        className={
                          idx % 2 === 0
                            ? 'bg-white dark:bg-gray-900'
                            : 'bg-gray-50 dark:bg-gray-800'
                        }
                        key={item.member.uid}
                      >
                        <td className="text-center border-r border-gray-200 dark:border-gray-700 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 w-16">
                          {idx + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                          {item.member.displayName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                          {item.points}
                        </td>
                        {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">*/}
                        {/*  MMMM Do YYYY, h:mm:ss a*/}
                        {/*</td>*/}
                        {item.postDetails.map((score, idx) => (
                          <td
                            className={
                              postCellStyles +
                              ' py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 font-medium'
                            }
                            key={assignments[idx].id}
                          >
                            {score}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { Link } from 'gatsby';
import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import useLeaderboardData from '../../../hooks/groups/useLeaderboardData';
import getMemberInfoForGroup from '../../../hooks/groups/useMemberInfoForGroup';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import MemberDetail from './MemberDetail';

export default function MembersPage(): JSX.Element {
  const activeGroup = useActiveGroup();
  const memberInfo = getMemberInfoForGroup(activeGroup.groupData);
  const leaderboard = useLeaderboardData({
    groupId: activeGroup.activeGroupId,
    maxResults: 200,
  });
  const [activeMemberId, setActiveMemberId] = React.useState<string>(null);

  React.useEffect(() => {
    const handler = () => {
      const id = window.location.hash?.substring(1) || null;
      setActiveMemberId(id);
    };
    window.addEventListener('hashchange', handler);
    handler();

    return () => {
      window.removeEventListener('hashchange', handler);
    };
  }, []);

  const getTotalPointsForMember = (memberId: string) => {
    return (
      leaderboard?.find(x => x.userInfo?.uid === memberId)?.totalPoints ?? 0
    );
  };

  if (!activeGroup.showAdminView) {
    return (
      <div className="mt-8 text-center">
        You don't have permissions to view this page.
      </div>
    );
  }

  return (
    <Layout>
      <SEO title={`Members · ${activeGroup.groupData.name}`} />
      <div className="xl:h-screen xl:overflow-hidden flex flex-col">
        <TopNavigationBar />

        <div className="flex-1 relative z-0 flex flex-col lg:flex-row overflow-hidden">
          <main
            className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last"
            tabIndex={0}
          >
            {activeMemberId ? (
              memberInfo ? (
                <MemberDetail
                  member={memberInfo.find(x => x.uid === activeMemberId)}
                />
              ) : (
                <div>
                  <p className="text-xl mt-8 text-center">Loading...</p>
                </div>
              )
            ) : (
              <div>
                <p className="text-xl mt-8 text-center">
                  Select a member to begin!
                </p>
              </div>
            )}
          </main>
          <aside className="order-first lg:flex lg:flex-col flex-shrink-0 lg:w-96 lg:border-r lg:border-gray-200 dark:lg:border-gray-700 shadow-md lg:shadow-none">
            <div className="px-6 pt-6 pb-4">
              <Link
                to={`/groups/${activeGroup.groupData.id}`}
                className="text-gray-600 dark:text-gray-300 underline text-sm"
              >
                &larr; Back to group page
              </Link>
              <div className="h-4" />
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Members
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {memberInfo?.length ?? 'Loading...'} Members
              </p>
              {/*<form className="mt-6 flex space-x-4" action="#">*/}
              {/*  <div className="flex-1 min-w-0">*/}
              {/*    <label htmlFor="search" className="sr-only">Search</label>*/}
              {/*    <div className="relative rounded-md shadow-sm">*/}
              {/*      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">*/}
              {/*        /!* Heroicon name: mail *!/*/}
              {/*        /!* Heroicon name: solid/search *!/*/}
              {/*        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
              {/*          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />*/}
              {/*        </svg>*/}
              {/*      </div>*/}
              {/*      <input type="search" name="search" id="search" className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Search" />*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*  <button type="submit" className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">*/}
              {/*    /!* Heroicon name: solid/filter *!/*/}
              {/*    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
              {/*      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />*/}
              {/*    </svg>*/}
              {/*    <span className="sr-only">Search</span>*/}
              {/*  </button>*/}
              {/*</form>*/}
            </div>
            {/* Directory list */}
            <nav
              className="flex-1 min-h-0 max-h-56 lg:max-h-full overflow-y-auto"
              aria-label="Directory"
            >
              <div className="relative">
                <ul className="relative z-0 divide-y divide-gray-200 dark:divide-gray-700">
                  {memberInfo?.map(member => (
                    <li key={member.uid}>
                      <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={member.photoURL}
                            alt={member.displayName}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <a
                            href={`#${member.uid}`}
                            className="focus:outline-none"
                          >
                            {/* Extend touch target to entire panel */}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {member.displayName}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-300">
                              {getTotalPointsForMember(member.uid)} Points
                            </p>
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

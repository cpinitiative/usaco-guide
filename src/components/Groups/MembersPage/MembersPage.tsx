import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import useLeaderboardData from '../../../hooks/groups/useLeaderboardData';
import useMemberInfoForGroup from '../../../hooks/groups/useMemberInfoForGroup';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import MemberDetail from './MemberDetail';

export default function MembersPage(): JSX.Element {
  const activeGroup = useActiveGroup();
  const memberInfo = useMemberInfoForGroup(activeGroup.groupData!);
  const leaderboard = useLeaderboardData({
    groupId: activeGroup.activeGroupId!,
    maxResults: 200,
  });
  const [activeMemberId, setActiveMemberId] = React.useState<string | null>(
    null
  );

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
      <SEO title={`Members · ${activeGroup.groupData!.name}`} image={null} />
      <div className="flex flex-col xl:h-screen xl:overflow-hidden">
        <TopNavigationBar />

        <div className="relative z-0 flex flex-1 flex-col overflow-hidden lg:flex-row">
          <main
            className="relative z-0 flex-1 overflow-y-auto focus:outline-hidden xl:order-last"
            tabIndex={0}
          >
            {activeMemberId ? (
              memberInfo ? (
                <MemberDetail
                  member={memberInfo.find(x => x?.uid === activeMemberId)!}
                />
              ) : (
                <div>
                  <p className="mt-8 text-center text-xl">Loading...</p>
                </div>
              )
            ) : (
              <div>
                <p className="mt-8 text-center text-xl">
                  Select a member to begin!
                </p>
              </div>
            )}
          </main>
          <aside className="order-first shrink-0 shadow-md lg:flex lg:w-96 lg:flex-col lg:border-r lg:border-gray-200 lg:shadow-none dark:lg:border-gray-700">
            <div className="px-6 pt-6 pb-4">
              <Link
                href={`/groups/${activeGroup.groupData!.id}`}
                className="text-sm text-gray-600 underline dark:text-gray-300"
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
              </div>
            {/* Directory list */}
            <nav
              className="max-h-56 min-h-0 flex-1 overflow-y-auto lg:max-h-full"
              aria-label="Directory"
            >
              <div className="relative">
                <ul className="relative z-0 divide-y divide-gray-200 dark:divide-gray-700">
                  {memberInfo?.map(member => (
                    <li key={member.uid}>
                      <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-inset hover:bg-gray-50 dark:hover:bg-gray-900">
                        <div className="shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={member.photoURL}
                            alt={member.displayName}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <a
                            href={`#${member.uid}`}
                            className="focus:outline-hidden"
                          >
                            {/* Extend touch target to entire panel */}
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {member.displayName}
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-300">
                              {Math.trunc(
                                getTotalPointsForMember(member.uid) * 1000
                              ) / 1000}{' '}
                              Points
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

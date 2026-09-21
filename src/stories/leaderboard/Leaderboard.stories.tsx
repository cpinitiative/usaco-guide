import type { Meta, StoryFn } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';
import React, { useLayoutEffect } from 'react';

import GroupLeaderboardPage from '../../components/Groups/GroupLeaderboardPage/GroupLeaderboardPage';
import LeaderboardList from '../../components/Groups/LeaderboardList/LeaderboardList';
import {
  LeaderboardTable,
  LeaderboardTableProps,
} from '../../components/Groups/LeaderboardTable/LeaderboardTable';
import PostLeaderboardPage from '../../components/Groups/PostLeaderboardPage/PostLeaderboardPage';
import { ProblemSubmissionPopupProvider } from '../../components/Groups/ProblemSubmissionPopup';
import { SignInContext } from '../../context/SignInContext';
import {
  assignDefaultsToUserData,
  UserDataContext,
} from '../../context/UserDataContext/UserDataContext';
import { ActiveGroupContext } from '../../hooks/groups/useActiveGroup';
import { ActivePostProblemsProvider } from '../../hooks/groups/useActivePostProblems';
import { UserGroupsContext } from '../../hooks/groups/useUserGroups';
import { GroupData } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';

const userId = 'storybook-user';
const groupId = 'storybook-group';
const postId = 'dynamic-programming';

const group: GroupData = {
  id: groupId,
  name: 'Algorithms Spring 2026',
  description: 'A static group for Storybook.',
  ownerIds: [userId],
  adminIds: [userId],
  memberIds: [userId, 'storybook-member-2', 'storybook-member-3'],
  postOrdering: [postId],
};

const assignment: PostData = {
  id: postId,
  name: 'Dynamic Programming Assignment',
  timestamp: Timestamp.fromDate(new Date('2026-01-05T12:00:00Z')),
  dueTimestamp: Timestamp.fromDate(new Date('2026-01-12T12:00:00Z')),
  body: 'Complete the dynamic programming problems.',
  isPinned: false,
  isPublished: true,
  isDeleted: false,
  pointsPerProblem: {
    problem1: 40,
    problem2: 60,
  },
  problemOrdering: ['problem1', 'problem2'],
  type: 'assignment',
};

const columns = [
  { id: 'problem1', tooltip: 'Longest Increasing Subsequence' },
  { id: 'problem2', tooltip: 'Knapsack' },
];

const rows: NonNullable<LeaderboardTableProps['rows']> = [
  {
    id: userId,
    name: 'Storybook Student',
    points: 92.5,
    items: [
      { id: 'problem1', value: '40' },
      {
        id: 'problem2',
        value: '52.5',
        payload: { problemId: 'problem2', submissionId: 'submission-1' },
      },
    ],
  },
  {
    id: 'storybook-member-2',
    name: 'Alexandra Chen',
    points: 76,
    items: [
      { id: 'problem1', value: '36' },
      { id: 'problem2', value: '40' },
    ],
  },
  {
    id: 'storybook-member-3',
    name: 'Jordan Williams',
    points: 48.5,
    items: [
      { id: 'problem1', value: '20' },
      { id: 'problem2', value: '28.5' },
    ],
  },
];

function DisableAnalyticsRequests({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async () => new Response(null, { status: 204 });
    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  return children;
}

function GroupProviders({ children }: { children: React.ReactNode }) {
  return (
    <DisableAnalyticsRequests>
      <SignInContext.Provider value={{ signIn: () => {} }}>
        <UserDataContext.Provider
          value={{
            userData: assignDefaultsToUserData({}),
            updateUserData: () => {},
            signOut: async () => {},
            firebaseUser: { uid: userId } as any,
            forceFirebaseUserRerender: () => {},
            importUserData: () => false,
            deleteAllUserData: async () => false,
            isLoaded: true,
          }}
        >
          <UserGroupsContext.Provider
            value={{
              isLoading: false,
              isSuccess: true,
              data: [group],
              invalidateData: () => {},
            }}
          >
            <ActiveGroupContext.Provider
              value={{
                activeGroupId: groupId,
                setActiveGroupId: () => {},
                groupData: group,
                posts: [assignment],
                isLoading: false,
                showAdminView: false,
                setInStudentView: () => {},
                activeUserId: userId,
                setActiveUserId: () => {},
              }}
            >
              {children}
            </ActiveGroupContext.Provider>
          </UserGroupsContext.Provider>
        </UserDataContext.Provider>
      </SignInContext.Provider>
    </DisableAnalyticsRequests>
  );
}

const meta = {
  title: 'Groups/Leaderboard',
  component: LeaderboardTable,
  parameters: {
    nextjs: {
      appDirectory: false,
      navigation: {
        pathname: '/groups/storybook-group',
        query: { groupId, postId },
      },
      router: {
        pathname: '/groups/[groupId]',
        asPath: '/groups/storybook-group',
        query: { groupId, postId },
      },
    },
  },
} satisfies Meta<typeof LeaderboardTable>;

export default meta;

export const Table: StoryFn<typeof LeaderboardTable> = args => (
  <LeaderboardTable {...args} />
);
Table.args = {
  columns,
  rows,
  onCellClick: () => {},
};

export const TableWithEmptyRows: StoryFn<typeof LeaderboardTable> = () => (
  <LeaderboardTable columns={columns} rows={[]} />
);

export const ListLoading: StoryFn<typeof LeaderboardList> = () => (
  <GroupProviders>
    <div className="max-w-md">
      <LeaderboardList />
    </div>
  </GroupProviders>
);

export const GroupPageLoading: StoryFn<typeof GroupLeaderboardPage> = () => (
  <GroupProviders>
    <GroupLeaderboardPage />
  </GroupProviders>
);

export const PostPageLoading: StoryFn<typeof PostLeaderboardPage> = () => (
  <GroupProviders>
    <ActivePostProblemsProvider>
      <ProblemSubmissionPopupProvider>
        <PostLeaderboardPage groupId={groupId} postId={postId} />
      </ProblemSubmissionPopupProvider>
    </ActivePostProblemsProvider>
  </GroupProviders>
);

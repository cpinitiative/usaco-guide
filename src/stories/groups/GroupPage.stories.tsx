import type { Decorator, Meta, StoryObj } from '@storybook/react';
import type { User } from 'firebase/auth';
import { Timestamp } from 'firebase/firestore';
import React, { useLayoutEffect } from 'react';
import GroupPage from '../../components/Groups/GroupPage/GroupPage';
import { SignInContext } from '../../context/SignInContext';
import {
  assignDefaultsToUserData,
  UserDataContext,
} from '../../context/UserDataContext/UserDataContext';
import { ActiveGroupContext } from '../../hooks/groups/useActiveGroup';
import { UserGroupsContext } from '../../hooks/groups/useUserGroups';
import { GroupData } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';

const userId = 'storybook-user';

const group: GroupData = {
  id: 'storybook-group',
  name: 'Algorithms Spring 2026',
  description: 'A practice group for competitive programming and algorithms.',
  ownerIds: [userId],
  adminIds: [userId],
  memberIds: [userId, 'storybook-member-2', 'storybook-member-3'],
  postOrdering: ['welcome', 'dynamic-programming', 'shortest-paths'],
};

const posts: PostData[] = [
  {
    id: 'welcome',
    name: 'Welcome to the Algorithms Course',
    timestamp: Timestamp.fromDate(new Date('2026-01-01T12:00:00Z')),
    body: 'Welcome to the course!',
    isPinned: false,
    isPublished: true,
    isDeleted: false,
    pointsPerProblem: {},
    problemOrdering: [],
    type: 'announcement',
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming Assignment',
    timestamp: Timestamp.fromDate(new Date('2026-01-05T12:00:00Z')),
    dueTimestamp: Timestamp.fromDate(new Date('2026-01-12T12:00:00Z')),
    body: 'Complete the dynamic programming problems.',
    isPinned: false,
    isPublished: true,
    isDeleted: false,
    pointsPerProblem: { problem1: 40, problem2: 60 },
    problemOrdering: ['problem1', 'problem2'],
    type: 'assignment',
  },
  {
    id: 'shortest-paths',
    name: 'Graph Theory: Shortest Paths',
    timestamp: Timestamp.fromDate(new Date('2026-01-10T12:00:00Z')),
    dueTimestamp: null,
    body: 'Practice shortest path algorithms.',
    isPinned: false,
    isPublished: true,
    isDeleted: false,
    pointsPerProblem: { problem3: 100 },
    problemOrdering: ['problem3'],
    type: 'assignment',
  },
];

const firebaseUser = {
  uid: userId,
  displayName: 'Storybook Student',
  photoURL: 'https://placehold.co/64x64/png?text=SS',
} as User;

const userData = assignDefaultsToUserData({});

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

function StorybookProviders({
  children,
  admin,
}: {
  children: React.ReactNode;
  admin: boolean;
}) {
  return (
    <DisableAnalyticsRequests>
      <SignInContext.Provider value={{ signIn: () => {} }}>
        <UserDataContext.Provider
          value={{
            userData,
            updateUserData: () => {},
            signOut: async () => {},
            firebaseUser,
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
                activeGroupId: group.id,
                setActiveGroupId: () => {},
                groupData: group,
                posts,
                isLoading: false,
                showAdminView: admin,
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

type GroupPageStoryArgs = { admin: boolean };

const withStorybookProviders: Decorator<GroupPageStoryArgs> = (
  Story,
  context
) => (
  <StorybookProviders admin={context.args.admin}>
    <Story />
  </StorybookProviders>
);

const meta = {
  title: 'Groups/GroupPage',
  component: GroupPage,
  parameters: {
    nextjs: {
      appDirectory: false,
      router: {
        pathname: '/groups/[groupId]',
        asPath: '/groups/storybook-group',
        query: { groupId: group.id },
      },
    },
  },
  decorators: [withStorybookProviders],
} satisfies Meta<GroupPageStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { admin: false },
};

export const Admin: Story = {
  args: { admin: true },
};

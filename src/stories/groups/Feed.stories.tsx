import { Meta, StoryFn } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';

import Feed from '../../components/Groups/GroupPage/Feed';
import { UserDataContext } from '../../context/UserDataContext/UserDataContext';
import { ActiveGroupContext } from '../../hooks/groups/useActiveGroup';
import { UserGroupsContext } from '../../hooks/groups/useUserGroups';
import { GroupData } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';

const group: GroupData = {
  id: 'storybook-group',
  name: 'Storybook Algorithms Group',
  description: 'Static Storybook group',
  ownerIds: ['storybook-user'],
  adminIds: ['storybook-user'],
  memberIds: ['storybook-user'],
  postOrdering: ['announcement-1', 'assignment-1'],
};

const announcement: PostData = {
  id: 'announcement-1',
  name: 'Welcome to the Algorithms Course',
  timestamp: Timestamp.fromDate(new Date('2026-01-01')),
  body: 'Welcome to the course!',
  isPinned: false,
  isPublished: true,
  isDeleted: false,
  pointsPerProblem: {},
  problemOrdering: [],
  type: 'announcement',
};

const assignment: PostData = {
  id: 'assignment-1',
  name: 'Dynamic Programming Assignment',
  timestamp: Timestamp.fromDate(new Date('2026-01-02')),
  body: 'Complete the following problems.',
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

const Template: StoryFn<{
  isAdmin: boolean;
  isLoading: boolean;
}> = args => {
  return (
    <UserDataContext.Provider
      value={{
        userData: {} as any,
        updateUserData: () => {},
        signOut: () => Promise.resolve(),
        firebaseUser: { uid: 'storybook-user' } as any,
        forceFirebaseUserRerender: () => {},
        importUserData: () => false,
        deleteAllUserData: () => Promise.resolve(false),
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
            groupData: args.isLoading ? undefined : group,
            posts: args.isLoading ? [] : [announcement, assignment],
            isLoading: args.isLoading,
            showAdminView: args.isAdmin,
            setInStudentView: () => {},
            activeUserId: 'storybook-user',
            setActiveUserId: () => {},
          }}
        >
          <div className="max-w-3xl">
            <Feed
              leaderboardData={{
                'assignment-1': {
                  totalPoints: 40,
                },
              }}
            />
          </div>
        </ActiveGroupContext.Provider>
      </UserGroupsContext.Provider>
    </UserDataContext.Provider>
  );
};

export default {
  title: 'Groups/Feed',
  component: Feed,
} as Meta;

export const StudentView = Template.bind({});
StudentView.args = {
  isAdmin: false,
  isLoading: false,
};

export const AdminView = Template.bind({});
AdminView.args = {
  isAdmin: true,
  isLoading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  isAdmin: false,
  isLoading: true,
};

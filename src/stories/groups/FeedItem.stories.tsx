import { Meta, StoryFn } from '@storybook/react';
import { Timestamp } from 'firebase/firestore';

import FeedItem from '../../components/Groups/GroupPage/FeedItem';
import {
  assignDefaultsToUserData,
  UserDataContext,
} from '../../context/UserDataContext/UserDataContext';
import { ActiveGroupContext } from '../../hooks/groups/useActiveGroup';
import { UserGroupsContext } from '../../hooks/groups/useUserGroups';
import { GroupData } from '../../models/groups/groups';
import { PostData } from '../../models/groups/posts';

const group: GroupData = {
  id: 'storybook-group',
  name: 'Storybook Algorithms Group',
  description: 'Static group used for Storybook.',
  ownerIds: ['owner-1'],
  adminIds: ['admin-1'],
  memberIds: ['student-1'],
  postOrdering: ['announcement-1', 'assignment-1'],
};

const timestamp = Timestamp.fromDate(new Date('2026-01-01T12:00:00Z'));

const announcement: PostData = {
  id: 'announcement-1',
  name: 'Welcome to the Algorithms Course',
  timestamp,
  body: 'Welcome!',
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
  timestamp,
  dueTimestamp: Timestamp.fromDate(new Date('2026-02-01T12:00:00Z')),
  body: 'Solve the following problems.',
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

const updatePost = async () => {};
const deletePost = async () => {};

type StoryArgs = {
  group: GroupData;
  post: PostData;
  userPoints: number | null;
  isAdmin: boolean;
  isBeingDragged?: boolean;
  dragHandle?: JSX.Element;
};

const Template: StoryFn<StoryArgs> = args => {
  return (
    <UserDataContext.Provider
      value={{
        userData: assignDefaultsToUserData({}),
        updateUserData: () => {},
        signOut: () => Promise.resolve(),
        firebaseUser: {
          uid: 'storybook-user',
        } as any,
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
          data: [args.group],
          invalidateData: () => {},
        }}
      >
        <ActiveGroupContext.Provider
          value={{
            activeGroupId: args.group.id,
            setActiveGroupId: () => {},
            groupData: args.group,
            posts: [args.post],
            isLoading: false,
            showAdminView: args.isAdmin,
            setInStudentView: () => {},
            activeUserId: 'student-1',
            setActiveUserId: () => {},
          }}
        >
          <div className="max-w-3xl">
            <FeedItem
              group={args.group}
              post={args.post}
              userPoints={args.userPoints}
              isBeingDragged={args.isBeingDragged}
              dragHandle={args.dragHandle}
            />
          </div>
        </ActiveGroupContext.Provider>
      </UserGroupsContext.Provider>
    </UserDataContext.Provider>
  );
};
export default {
  title: 'Groups/FeedItem',
  component: FeedItem,
} as Meta;

export const Announcement = Template.bind({});
Announcement.args = {
  group,
  post: announcement,
  userPoints: null,
  isAdmin: false,
};

export const AssignmentNotStarted = Template.bind({});
AssignmentNotStarted.args = {
  group,
  post: assignment,
  userPoints: 0,
  isAdmin: false,
};

export const AssignmentInProgress = Template.bind({});
AssignmentInProgress.args = {
  group,
  post: assignment,
  userPoints: 40,
  isAdmin: false,
};

export const AssignmentCompleted = Template.bind({});
AssignmentCompleted.args = {
  group,
  post: assignment,
  userPoints: 100,
  isAdmin: false,
};

export const Unpublished = Template.bind({});
Unpublished.args = {
  group,
  post: {
    ...assignment,
    isPublished: false,
  },
  userPoints: 0,
  isAdmin: false,
};

export const Pinned = Template.bind({});
Pinned.args = {
  group,
  post: {
    ...announcement,
    isPinned: true,
  },
  userPoints: null,
  isAdmin: false,
};

export const Admin = Template.bind({});
Admin.args = {
  group,
  post: announcement,
  userPoints: null,
  isAdmin: true,
};

export const Dragging = Template.bind({});
Dragging.args = {
  group,
  post: assignment,
  userPoints: 40,
  isAdmin: false,
  isBeingDragged: true,
  dragHandle: (
    <div
      className="flex items-center px-2 text-gray-400"
      aria-label="Drag handle"
    >
      ::
    </div>
  ),
};

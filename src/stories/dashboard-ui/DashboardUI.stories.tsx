import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import ActiveItems, {
  ActiveItem,
} from '../../components/Dashboard/ActiveItems';
import DailyStreak from '../../components/Dashboard/DailyStreak';
import DashboardCard from '../../components/Dashboard/DashboardCard';
import DashboardProgress, {
  DashboardProgressSmall,
  UsacoTableProgress,
} from '../../components/Dashboard/DashboardProgress';
import { CowImagesProvider } from '../../context/CowImagesContext';
import { UserDataContext } from '../../context/UserDataContext/UserDataContext';

const userData = {
  consecutiveVisits: 8,
  showTags: false,
  hideDifficulty: false,
  hideModules: false,
  showIgnored: true,
  divisionTableQuery: { division: '', season: '' },
  lang: 'cpp' as const,
  lastViewedModule: '',
  lastVisitDate: Date.now() - 1000 * 60 * 60 * 12,
  numPageviews: 32,
  pageviewsPerDay: {},
  problemListPages: {},
  theme: 'system' as const,
  userProgressOnModules: {},
  userProgressOnModulesActivity: [
    {
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
      moduleID: 'dynamic-programming',
      moduleProgress: 'Complete' as const,
    },
    {
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 5,
      moduleID: 'graphs',
      moduleProgress: 'Practicing' as const,
    },
  ],
  userProgressOnProblems: {},
  userProgressOnProblemsActivity: [
    {
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 2,
      problemID: 'knapsack',
      problemProgress: 'Solved' as const,
    },
    {
      timestamp: Date.now() - 1000 * 60 * 60 * 24 * 4,
      problemID: 'shortest-path',
      problemProgress: 'Solved' as const,
    },
  ],
  userProgressOnResources: {},
};

const activeItems: ActiveItem[] = [
  {
    label: 'General: Introduction to Dynamic Programming',
    status: 'Reviewing',
    url: '/general/dynamic-programming',
  },
  {
    label: 'Bronze: Complete Search',
    status: 'Practicing',
    url: '/bronze/complete-search',
  },
  {
    label: 'Silver: Graphs',
    status: 'Reading',
    url: '/silver/graphs',
  },
  {
    label: 'Gold: Advanced Trees',
    status: 'Ignored',
    url: '/gold/advanced-trees',
  },
];

const cows = [
  { name: 'First cow', src: '/content/team/images/cow.png' },
  { name: 'Second cow', src: '/content/team/images/cow.png' },
  { name: 'Third cow', src: '/content/team/images/cow.png' },
];

function UserDataProvider({ children }: { children: React.ReactNode }) {
  return (
    <UserDataContext.Provider
      value={{
        userData,
        updateUserData: () => {},
        signOut: async () => {},
        firebaseUser: null,
        forceFirebaseUserRerender: () => {},
        importUserData: () => false,
        deleteAllUserData: async () => false,
        isLoaded: true,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

const meta = {
  title: 'Dashboard UI/DashboardCard',
  component: DashboardCard,
  parameters: {
    nextjs: {
      appDirectory: false,
      navigation: {
        pathname: '/dashboard',
        query: {},
      },
      router: {
        pathname: '/dashboard',
        asPath: '/dashboard',
        query: {},
      },
    },
  },
} satisfies Meta<typeof DashboardCard>;

export default meta;

export const Card: StoryFn<typeof DashboardCard> = () => (
  <DashboardCard className="max-w-xl">
    <div className="px-4 py-5 sm:p-6">
      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
        Dashboard card content
      </h3>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        A simple surface for dashboard sections.
      </p>
    </div>
  </DashboardCard>
);

export const ActiveProblems: StoryFn<typeof ActiveItems> = () => (
  <div className="max-w-2xl">
    <ActiveItems type="problems" items={activeItems} />
  </div>
);

export const ActiveModules: StoryFn<typeof ActiveItems> = () => (
  <div className="max-w-2xl">
    <ActiveItems
      type="modules"
      items={activeItems.filter(item => item.status !== 'Solving')}
    />
  </div>
);

export const Progress: StoryFn<typeof DashboardProgress> = () => (
  <div className="max-w-2xl">
    <DashboardProgress
      completed={18}
      inProgress={7}
      skipped={3}
      notStarted={12}
      total={40}
    />
  </div>
);

export const ProgressSmall: StoryFn<typeof DashboardProgressSmall> = () => (
  <DashboardProgressSmall
    completed={18}
    inProgress={7}
    skipped={3}
    notStarted={12}
    total={40}
  />
);

export const UsacoProgress: StoryFn<typeof UsacoTableProgress> = () => (
  <div className="flex gap-6">
    <UsacoTableProgress completed={0.82} />
    <UsacoTableProgress completed={0.97} />
    <UsacoTableProgress completed={Number.NaN} />
  </div>
);

export const DailyStreakStory: StoryFn<typeof DailyStreak> = () => (
  <UserDataProvider>
    <CowImagesProvider value={cows}>
      <DailyStreak streak={8} />
    </CowImagesProvider>
  </UserDataProvider>
);

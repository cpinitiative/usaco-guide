import type { Meta, StoryObj } from '@storybook/react';

import { LeaderboardTable } from '../../components/Groups/LeaderboardTable/LeaderboardTable';

const meta = {
  title: 'Groups/LeaderboardTable',
  component: LeaderboardTable,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LeaderboardTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { id: 'problem-1', tooltip: 'Two Sum' },
  { id: 'problem-2', tooltip: 'Shortest Paths' },
  { id: 'problem-3', tooltip: 'Knapsack' },
];

export const Populated: Story = {
  args: {
    columns,
    rows: [
      {
        id: 'student-1',
        name: 'Ada Lovelace',
        points: 275,
        items: [
          { id: 'student-1-problem-1', value: '100' },
          { id: 'student-1-problem-2', value: '100' },
          { id: 'student-1-problem-3', value: '75' },
        ],
      },
      {
        id: 'student-2',
        name: 'Grace Hopper',
        points: 240,
        items: [
          { id: 'student-2-problem-1', value: '100' },
          { id: 'student-2-problem-2', value: '60' },
          { id: 'student-2-problem-3', value: '80' },
        ],
      },
      {
        id: 'student-3',
        name: 'Alan Turing',
        points: 180,
        items: [
          { id: 'student-3-problem-1', value: '80' },
          { id: 'student-3-problem-2', value: '100' },
          { id: 'student-3-problem-3', value: '0' },
        ],
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    columns,
    rows: [],
  },
};

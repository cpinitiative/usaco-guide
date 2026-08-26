import type { Meta, StoryObj } from '@storybook/react';

import ActiveItems from '../../components/Dashboard/ActiveItems';

const meta = {
  title: 'Dashboard/ActiveItems',
  component: ActiveItems,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ActiveItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Problems: Story = {
  args: {
    type: 'problems',
    items: [
      {
        label: 'USACO Silver: Convention',
        status: 'Solving',
        url: '/problems/usaco-764',
      },
      {
        label: 'CSES: Flight Discount',
        status: 'Reviewing',
        url: '/problems/cses-1195',
      },
      {
        label: 'Codeforces: Static Range Sum',
        status: 'Skipped',
        url: '/problems/cf-static-range-sum',
      },
    ],
  },
};

export const Modules: Story = {
  args: {
    type: 'modules',
    items: [
      {
        label: 'Silver - Binary Search',
        status: 'Reading',
        url: '/silver/binary-search',
      },
      {
        label: 'Gold - Dynamic Programming',
        status: 'Practicing',
        url: '/gold/knapsack',
      },
      {
        label: 'General - Introduction',
        status: 'Ignored',
        url: '/general/intro-cp',
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    type: 'problems',
    items: [],
  },
};

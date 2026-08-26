import type { Meta, StoryObj } from '@storybook/react';

import DashboardProgress from '../../components/Dashboard/DashboardProgress';

const meta = {
  title: 'Dashboard/DashboardProgress',
  component: DashboardProgress,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DashboardProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MixedProgress: Story = {
  args: {
    completed: 18,
    inProgress: 6,
    skipped: 3,
    notStarted: 13,
    total: 40,
  },
};

export const Completed: Story = {
  args: {
    completed: 40,
    inProgress: 0,
    skipped: 0,
    notStarted: 0,
    total: 40,
  },
};

export const NoProgress: Story = {
  args: {
    completed: 0,
    inProgress: 0,
    skipped: 0,
    notStarted: 0,
    total: 0,
  },
};

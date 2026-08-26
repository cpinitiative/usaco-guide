import type { Meta, StoryObj } from '@storybook/react';

import WelcomeBackBanner from '../../components/Dashboard/WelcomeBackBanner';

const meta = {
  title: 'Dashboard/WelcomeBackBanner',
  component: WelcomeBackBanner,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof WelcomeBackBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewUser: Story = {
  args: {
    lastViewedModuleURL: null,
    lastViewedModuleLabel: null,
  },
};

export const ReturningUser: Story = {
  args: {
    lastViewedModuleURL: '/silver/binary-search',
    lastViewedModuleLabel: 'Binary Search',
  },
};

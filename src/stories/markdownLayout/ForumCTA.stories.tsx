import type { Meta, StoryObj } from '@storybook/react-webpack5';
import React from 'react';
import ForumCTA from '../../components/ForumCTA';

export default {
  title: 'MarkdownLayout/ForumCTA',
  component: ForumCTA,
} satisfies Meta<typeof ForumCTA>;

export const Default: StoryObj<typeof ForumCTA> = {
  render: () => <ForumCTA />,
};

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import ForumCTA from '../../components/ForumCTA';

export default {
  title: 'MarkdownLayout/ForumCTA',
  component: ForumCTA,
} as Meta<typeof ForumCTA>;

export const Default: StoryFn<typeof ForumCTA> = () => <ForumCTA />;

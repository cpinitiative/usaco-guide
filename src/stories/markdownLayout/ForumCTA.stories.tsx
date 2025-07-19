import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ForumCTA from '../../components/ForumCTA';

export default {
  title: 'MarkdownLayout/ForumCTA',
  component: ForumCTA,
} as ComponentMeta<typeof ForumCTA>;

export const Default: ComponentStory<typeof ForumCTA> = () => <ForumCTA />;

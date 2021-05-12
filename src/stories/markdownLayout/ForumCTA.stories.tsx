import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import ForumCTA from '../../components/ForumCTA';

export default {
  title: 'MarkdownLayout/ForumCTA',
  component: ForumCTA,
};

const Template: Story<ComponentProps<typeof ForumCTA>> = args => (
  <ForumCTA {...args} />
);

export const Default = Template.bind({});
Default.args = {};

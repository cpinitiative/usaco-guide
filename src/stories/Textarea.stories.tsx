import { StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Textarea',
};

const Template: StoryFn = args => <textarea rows={4} {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'textarea',
};

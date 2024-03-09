import { StoryFn } from '@storybook/react';
import React from 'react';

export default {
  title: 'Input',
};

const Template: StoryFn = args => <input type="text" {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'input',
};

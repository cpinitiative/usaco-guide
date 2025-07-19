import { StoryFn } from '@storybook/react-webpack5';
import React from 'react';

export default {
  title: 'Input',
};

const Template: StoryFn = args => <input type="text" {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'input',
};

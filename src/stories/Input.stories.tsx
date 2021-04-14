import { Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Input',
};

const Template: Story = args => <input type="text" {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'input',
};

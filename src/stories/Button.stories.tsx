import { Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Button',
};

const Template: Story = args => <button {...args}>My button</button>;

export const Default = Template.bind({});
Default.args = {
  className: 'btn',
};

export const Small = Template.bind({});
Small.args = {
  className: 'btn btn-sm',
};

export const Primary = Template.bind({});
Primary.args = {
  className: 'btn-primary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  className: 'btn',
  disabled: true,
};

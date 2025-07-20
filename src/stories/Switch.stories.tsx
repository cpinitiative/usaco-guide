import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Switch from '../components/elements/Switch';

export default {
  title: 'Switch',
  component: Switch,
};

const Template: Story<ComponentProps<typeof Switch>> = args => (
  <Switch {...args} />
);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

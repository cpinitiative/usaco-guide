import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import Switch from '../components/elements/Switch';

const meta = {
  title: 'Switch',
  component: Switch,
};

export default meta;

const Template: StoryFn<ComponentProps<typeof Switch>> = args => (
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

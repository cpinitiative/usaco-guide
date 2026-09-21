import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import { LoadingSpinner } from '../components/elements/LoadingSpinner';

const meta = {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
};

export default meta;

const Template: StoryFn<ComponentProps<typeof LoadingSpinner>> = args => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  className: 'h-6 w-6',
};

import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { LoadingSpinner } from '../components/elements/LoadingSpinner';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
};

const Template: Story<ComponentProps<typeof LoadingSpinner>> = args => (
  <LoadingSpinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  className: 'h-6 w-6',
};

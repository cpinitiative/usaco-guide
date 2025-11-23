import { StoryFn } from '@storybook/react-webpack5';
import React, { ComponentProps } from 'react';
import RadioList from '../components/elements/RadioList';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/simpleProperties';

export default {
  title: 'RadioList',
  component: RadioList,
};

const Template: StoryFn<ComponentProps<typeof RadioList>> = args => (
  <RadioList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'language',
  options: ['cpp', 'java', 'py'],
  value: 'cpp',
  labelMap: LANGUAGE_LABELS,
  descriptionMap: {
    java: 'We currently have very limited support for Java beyond Gold.',
    py: 'We currently have very limited support for Python.',
  },
};

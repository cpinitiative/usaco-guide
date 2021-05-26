import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import RadioList from '../components/elements/RadioList';
import { LANGUAGE_LABELS } from '../context/UserDataContext/properties/userLang';

export default {
  title: 'RadioList',
  component: RadioList,
};

const Template: Story<ComponentProps<typeof RadioList>> = args => (
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

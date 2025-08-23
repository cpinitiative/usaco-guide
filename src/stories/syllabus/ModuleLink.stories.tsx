import { StoryFn } from '@storybook/react-webpack5';
import React from 'react';
import ModuleLink from '../../components/syllabus/ModuleLink';
import { ModuleLinkInfo } from '../../models/module';

export default {
  title: 'Syllabus/ModuleLink',
};

const Template: StoryFn = ({
  moduleId,
  section,
  title,
  description,
  frequency,
  isIncomplete,
  cppOc,
  javaOc,
  pyOc,
  probs,
  gitAuthorTime,
}) => {
  const link = new ModuleLinkInfo(
    moduleId,
    section,
    title,
    description,
    frequency,
    isIncomplete,
    cppOc,
    javaOc,
    pyOc,
    probs,
    gitAuthorTime
  );
  return <ModuleLink link={link} />;
};

export const Default = Template.bind({});
Default.args = {
  moduleId: 'module-id',
  section: 'general',
  title: 'Module Title',
  description: 'Module Description',
  frequency: 2,
  isIncomplete: false,
  cppOc: 1,
  javaOc: 1,
  pyOc: 1,
  probs: [],
  gitAuthorTime: new Date('2025-01-01'),
};

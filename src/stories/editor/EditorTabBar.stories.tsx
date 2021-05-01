import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import EditorTabBar from '../../components/Editor/EditorTabBar';

export default {
  title: 'Editor/TabBar',
  component: EditorTabBar,
};

const Template: Story<ComponentProps<typeof EditorTabBar>> = args => (
  <div>
    <EditorTabBar {...args} />
    <div className="h-24 bg-[#1E1E1E] p-8">VSCode Editor</div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: 'Contributing.mdx',
      value: 'Contributing.mdx',
    },
    {
      label: 'Contributing.problems.json',
      value: 'Contributing.problems.json',
    },
  ],
  activeTab: 'Contributing.mdx',
};

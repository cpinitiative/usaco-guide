import { StoryFn } from '@storybook/react-webpack5';
import React, { ComponentProps } from 'react';
import HTMLComponents from '../../components/markdown/HTMLComponents';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import Optional from '../../components/markdown/Optional';
import MiscMarkdownContent from './MiscMarkdownContent';

export default {
  title: 'Markdown/Optional',
  component: Optional,
  decorators: [markdownDecorator],
};

const Template: StoryFn<ComponentProps<typeof Optional>> = args => (
  <Optional {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Optional Block',
  children: (
    <>
      <MiscMarkdownContent />
    </>
  ),
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  children: (
    <HTMLComponents.p>
      This optional block doesn't have a title.
    </HTMLComponents.p>
  ),
};

import { StoryFn } from '@storybook/react-webpack5';
import React, { ComponentProps } from 'react';
import Info from '../../components/markdown/Info';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import MiscMarkdownContent from './MiscMarkdownContent';

export default {
  title: 'Markdown/Info',
  component: Info,
  decorators: [markdownDecorator],
};

const Template: StoryFn<ComponentProps<typeof Info>> = args => (
  <Info {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Info Block',
  children: <MiscMarkdownContent />,
};

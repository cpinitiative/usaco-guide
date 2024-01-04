import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import HTMLComponents from '../../components/markdown/HTMLComponents';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import Warning from '../../components/markdown/Warning';
import MiscMarkdownContent from './MiscMarkdownContent';

export default {
  title: 'Markdown/Warning',
  component: Warning,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof Warning>> = args => (
  <Warning {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Warning Block',
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
      This warning block doesn't have a title.
    </HTMLComponents.p>
  ),
};

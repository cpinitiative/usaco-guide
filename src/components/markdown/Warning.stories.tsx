import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import markdownDecorator from './markdownDecoratorForStorybook';
import Warning from './Warning';

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
    <p>
      This is a demonstration of a warning block. And here's a link:{' '}
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noreferrer"
      >
        Hello World!
      </a>
      .
    </p>
  ),
};

import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Info from './Info';
import markdownDecorator from './markdownDecoratorForStorybook';

export default {
  title: 'Markdown/Info',
  component: Info,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof Info>> = args => <Info {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Info Block',
  children: (
    <p>
      This is a demonstration of an info block. And here's a link:{' '}
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

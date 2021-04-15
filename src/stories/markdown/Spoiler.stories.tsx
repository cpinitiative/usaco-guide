import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import HTMLComponents from '../../components/markdown/HTMLComponents';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import Spoiler from '../../components/markdown/Spoiler';
import MiscMarkdownContent from './MiscMarkdownContent';

export default {
  title: 'Markdown/Spoiler',
  component: Spoiler,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof Spoiler>> = args => (
  <Spoiler {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'My Spoiler',
  children: <MiscMarkdownContent />,
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'My Spoiler',
  startExpanded: true,
  children: <MiscMarkdownContent />,
};

const fakeCode = new Array(20)
  .fill(null)
  .map(_ => `import java.io.*`)
  .join('\n');

export const WithCodeBlocks = Template.bind({});
WithCodeBlocks.args = {
  title: 'My Spoiler',
  startExpanded: true,
  children: (
    <>
      <HTMLComponents.pre>
        <HTMLComponents.code className="language-java">
          {fakeCode}
        </HTMLComponents.code>
      </HTMLComponents.pre>
      <p>Hello World!</p>
      <HTMLComponents.pre>
        <HTMLComponents.code className="language-java">
          {fakeCode}
        </HTMLComponents.code>
      </HTMLComponents.pre>
      <p>Hello World!</p>
      <HTMLComponents.pre>
        <HTMLComponents.code className="language-java">
          {fakeCode}
        </HTMLComponents.code>
      </HTMLComponents.pre>
    </>
  ),
};

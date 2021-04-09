import { Story } from '@storybook/react';
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

const Template: Story<ComponentProps<typeof Optional>> = args => (
  <Optional {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Optional Block',
  children: (
    <>
      <MiscMarkdownContent />
      <p className="mb-4">
        <a
          target="_blank"
          href="https://arxiv.org/pdf/1904.01210.pdf"
          rel="nofollow noopener noreferrer"
        >
          Paper
        </a>
      </p>
      <blockquote>
        <HTMLComponents.p>
          A common mistake in implementing the Floyd–Warshall algorithm is to
          misorder the triply nested loops (The correct order is{' '}
          <HTMLComponents.inlineCode>KIJ</HTMLComponents.inlineCode>). The
          incorrect <HTMLComponents.inlineCode>IJK</HTMLComponents.inlineCode>{' '}
          and
          <HTMLComponents.inlineCode>IKJ</HTMLComponents.inlineCode> algorithms
          do not give correct solutions for some instance. However, we can prove
          that if these are repeated three times, we obtain the correct
          solutions.
        </HTMLComponents.p>
        <HTMLComponents.p>
          It would be emphasized that these fixes (repeating incorrect
          algorithms three times) have the same time complexity as the correct
          Floyd–Warshall algorithm up to constant factors. Therefore, our
          results suggest that, if one is confused by the order of the triply
          nested loops, one can repeat the procedure three times just to be
          safe.
        </HTMLComponents.p>
      </blockquote>
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

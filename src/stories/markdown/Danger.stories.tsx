import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import Danger from '../../components/markdown/Danger';
import { IncompleteSection as MarkdownIncompleteSection } from '../../components/markdown/IncompleteSection';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import MiscMarkdownContent from './MiscMarkdownContent';

export default {
  title: 'Markdown/Danger',
  component: Danger,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof Danger>> = args => (
  <Danger {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Danger Block',
  children: <MiscMarkdownContent />,
};

export const IncompleteSection: React.FC = () => <MarkdownIncompleteSection />;
export const IncompleteSectionWithList: React.FC = () => (
  <MarkdownIncompleteSection>
    <ul>
      <li>Testing 123</li>
      <li>Hello World</li>
    </ul>
  </MarkdownIncompleteSection>
);
export const IncompleteSectionWithText: React.FC = () => (
  <MarkdownIncompleteSection>
    <p>Hello World!</p>
  </MarkdownIncompleteSection>
);

import { StoryFn } from '@storybook/react';
import { ComponentProps } from 'react';
import Info from '../../components/markdown/Info';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import MiscMarkdownContent from './MiscMarkdownContent';

const meta = {
  title: 'Markdown/Info',
  component: Info,
  decorators: [markdownDecorator],
};

export default meta;

const Template: StoryFn<ComponentProps<typeof Info>> = args => (
  <Info {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Info Block',
  children: <MiscMarkdownContent />,
};

import { StoryFn } from '@storybook/react';

const meta = {
  title: 'Textarea',
};

export default meta;

const Template: StoryFn = args => <textarea rows={4} {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'textarea',
};

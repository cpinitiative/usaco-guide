import { StoryFn } from '@storybook/react';

const meta = {
  title: 'Input',
};

export default meta;

const Template: StoryFn = args => <input type="text" {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'input',
};

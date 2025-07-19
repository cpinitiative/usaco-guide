import { Story } from '@storybook/react';
import React from 'react';

export default {
  title: 'Textarea',
};

const Template: Story = args => <textarea rows={4} {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'textarea',
};

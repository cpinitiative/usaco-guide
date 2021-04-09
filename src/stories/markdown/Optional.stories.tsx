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
      <HTMLComponents.p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque
        consectetur delectus dolorem fuga illum libero molestias mollitia nam
        neque, nostrum numquam possimus provident reprehenderit sapiente vel
        vero voluptatem voluptatibus.
      </HTMLComponents.p>
      <HTMLComponents.p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque
        consectetur delectus dolorem fuga illum libero molestias mollitia nam
        neque, nostrum numquam possimus provident reprehenderit sapiente vel
        vero voluptatem voluptatibus.
      </HTMLComponents.p>
      <HTMLComponents.p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque
        consectetur delectus dolorem fuga illum libero molestias mollitia nam
        neque, nostrum numquam possimus provident reprehenderit sapiente vel
        vero voluptatem voluptatibus.
      </HTMLComponents.p>
      <HTMLComponents.p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque
        consectetur delectus dolorem fuga illum libero molestias mollitia nam
        neque, nostrum numquam possimus provident reprehenderit sapiente vel
        vero voluptatem voluptatibus.
      </HTMLComponents.p>
      <HTMLComponents.p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque
        consectetur delectus dolorem fuga illum libero molestias mollitia nam
        neque, nostrum numquam possimus provident reprehenderit sapiente vel
        vero voluptatem voluptatibus.
      </HTMLComponents.p>
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

import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { ListTable } from '../../components/markdown/ListTable/ListTable';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import ProblemsListHeader from '../../components/markdown/ProblemsList/ProblemsListHeader';

export default {
  title: 'Markdown/ProblemsList',
  component: ListTable,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof ListTable>> = args => (
  <ListTable {...args} />
);

export const Default = Template.bind({});
Default.args = {
  header: (
    <ProblemsListHeader
      showTags={true}
      showDifficulty={true}
      isDivisionTable={false}
    />
  ),
  children: <>hi</>,
};

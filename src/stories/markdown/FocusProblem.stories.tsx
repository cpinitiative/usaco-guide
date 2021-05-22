import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import FocusProblem from '../../components/markdown/FocusProblem';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import { MarkdownProblemListsProvider } from '../../context/MarkdownProblemListsContext';
import { ProblemInfo } from '../../models/problem';

export default {
  title: 'Markdown/FocusProblem',
  component: FocusProblem,
  decorators: [markdownDecorator],
};

const problemLists: {
  listId: string;
  problems: ProblemInfo[];
}[] = [
  {
    listId: 'focus',
    problems: [
      {
        uniqueId: 'cfgym-102951A',
        name: 'Maximum Distance',
        url: 'https://codeforces.com/gym/102951/problem/A',
        source: 'CF',
        difficulty: 'Easy',
        isStarred: false,
        tags: [],
        solution: {
          kind: 'internal',
        },
      },
    ],
  },
];

const Template: Story<ComponentProps<typeof FocusProblem>> = args => (
  <MarkdownProblemListsProvider value={problemLists}>
    <FocusProblem {...args} />
  </MarkdownProblemListsProvider>
);

export const Default = Template.bind({});
Default.args = {
  problem: 'focus',
};

import { StoryFn } from '@storybook/react-webpack5';
import React, { ComponentProps } from 'react';
import { ListTable } from '../../components/markdown/ListTable/ListTable';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import ProblemsListHeader from '../../components/markdown/ProblemsList/ProblemsListHeader';
import ProblemsListItem from '../../components/markdown/ProblemsList/ProblemsListItem';

export default {
  title: 'Markdown/ProblemsList',
  component: ListTable,
  decorators: [markdownDecorator],
};

const Template: StoryFn<ComponentProps<typeof ListTable>> = args => (
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
  children: (
    <>
      <ProblemsListItem
        showTags={false}
        showDifficulty={true}
        onShowSolutionSketch={() => {}}
        isDivisionTable={false}
        problem={{
          uniqueId: 'usaco-1234',
          name: 'Problem 1',
          url: 'https://www.google.com',
          source: 'Codeforces',
          sourceDescription: 'Codeforces Problem 1',
          difficulty: 'Easy',
          isStarred: false,
          tags: ['tag1', 'tag2'],
          solution: {
            kind: 'internal',
            hasHints: false,
          },
        }}
      />
      <ProblemsListItem
        showTags={false}
        showDifficulty={true}
        onShowSolutionSketch={() => {}}
        isDivisionTable={false}
        problem={{
          uniqueId: 'usaco-1235',
          name: '2007 - Training',
          url: 'https://www.google.com',
          source: 'IOI',
          sourceDescription: 'Olympiad in Informatics',
          difficulty: 'Very Hard',
          isStarred: true,
          tags: ['tag1', 'tag2'],
          solution: {
            kind: 'internal',
            hasHints: false,
          },
        }}
      />
    </>
  ),
};

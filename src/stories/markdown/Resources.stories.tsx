import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import markdownDecorator from '../../components/markdown/markdownDecoratorForStorybook';
import {
  Resource,
  ResourcesList,
} from '../../components/markdown/ResourcesList';

export default {
  title: 'Markdown/ResourcesList',
  component: ResourcesList,
  decorators: [markdownDecorator],
};

const Template: Story<ComponentProps<typeof ResourcesList>> = args => (
  <ResourcesList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'My List',
  children: (
    <>
      <Resource source="CPH" title="16.3 - Successor Graphs" starred>
        diagrams
      </Resource>
      <Resource
        source="Medium"
        title="The Tortoise and the Hare (Floyd's Algorithm)"
        url="https://medium.com/@tuvo1106/the-tortoise-and-the-hare-floyds-algorithm-87badf5f7d41"
      />
      <Resource source="CP2" title="5.7 - Cycle-Finding" />
      <Resource
        source="VisuAlgo"
        title="Floyd's Algorithm Visualization"
        url="https://visualgo.net/en/cyclefinding"
      />
    </>
  ),
};

export const NoSource = Template.bind({});
NoSource.args = {
  children: (
    <>
      <Resource title="Sololearn" url="https://www.sololearn.com/" starred>
        Free courses for C++, Java, Python 3.
      </Resource>
      <Resource title="Codecademy" url="https://www.codecademy.com/">
        Free courses for C++, Java, Python 2. Some features require upgrading to
        Pro.
      </Resource>
      <Resource title="w3schools" url="https://www.w3schools.com/">
        Free tutorials for C++, Java, Python 3.
      </Resource>
    </>
  ),
};

export const NoSourceNoStar = Template.bind({});
NoSourceNoStar.args = {
  children: (
    <>
      <Resource title="Sololearn" url="https://www.sololearn.com/">
        Free courses for C++, Java, Python 3.
      </Resource>
      <Resource title="Codecademy" url="https://www.codecademy.com/">
        Free courses for C++, Java, Python 2. Some features require upgrading to
        Pro.
      </Resource>
      <Resource title="w3schools" url="https://www.w3schools.com/">
        Free tutorials for C++, Java, Python 3.
      </Resource>
    </>
  ),
};

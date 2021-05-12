import { Story } from '@storybook/react';
import React, { ComponentProps } from 'react';
import { ProblemAutocomplete } from '../../components/ProblemAutocompleteModal/ProblemAutocomplete';

export default {
  title: 'Groups/ProblemAutocomplete',
  component: ProblemAutocomplete,
};

const mockHits = [
  {
    name: 'Z Algorithm',
    source: 'YS',
    tags: [],
    url: 'https://judge.yosupo.jp/problem/zalgorithm',
    difficulty: 'Easy',
    isStarred: false,
    solution: null,
    problemModules: [
      {
        id: 'string-search',
        title: 'String Searching',
      },
    ],
    objectID: 'ys-ZAlgorithm',
    _snippetResult: {
      name: {
        value: 'Z Algorithm',
        matchLevel: 'none',
      },
      source: {
        value: 'YS',
        matchLevel: 'none',
      },
      url: {
        value: 'https://judge.yosupo.jp/problem/zalgorithm',
        matchLevel: 'none',
      },
      difficulty: {
        value: 'Easy',
        matchLevel: 'none',
      },
      problemModules: [
        {
          id: {
            value: 'string-search',
            matchLevel: 'none',
          },
          title: {
            value: 'String Searching',
            matchLevel: 'none',
          },
        },
      ],
    },
    _highlightResult: {
      name: {
        value: 'Z Algorithm',
        matchLevel: 'none',
        matchedWords: [],
      },
      source: {
        value: 'YS',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 899,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
  {
    name: 'Vertex Set Path Composite',
    source: 'YS',
    tags: ['HLD', 'SegTree'],
    url: 'https://judge.yosupo.jp/problem/vertex_set_path_composite',
    difficulty: 'Normal',
    isStarred: false,
    solution: {
      kind: 'sketch',
      sketch:
        'Function order matters! Maintain two segment trees, one for going up and the other for going down the tree.',
    },
    problemModules: [
      {
        id: 'hld',
        title: 'Heavy-Light Decomposition',
      },
    ],
    objectID: 'ys-VertexSetPathComposite',
    _snippetResult: {
      name: {
        value: 'Vertex Set Path Composite',
        matchLevel: 'none',
      },
      source: {
        value: 'YS',
        matchLevel: 'none',
      },
      tags: [
        {
          value: 'HLD',
          matchLevel: 'none',
        },
        {
          value: 'SegTree',
          matchLevel: 'none',
        },
      ],
      url: {
        value: 'https://judge.yosupo.jp/problem/vertex_set_path_composite',
        matchLevel: 'none',
      },
      difficulty: {
        value: 'Normal',
        matchLevel: 'none',
      },
      solution: {
        kind: {
          value: 'sketch',
          matchLevel: 'none',
        },
        sketch: {
          value:
            'Function order matters! Maintain two segment trees, one for going up and the other for going down the tree.',
          matchLevel: 'none',
        },
      },
      problemModules: [
        {
          id: {
            value: 'hld',
            matchLevel: 'none',
          },
          title: {
            value: 'Heavy-Light Decomposition',
            matchLevel: 'none',
          },
        },
      ],
    },
    _highlightResult: {
      name: {
        value: 'Vertex Set Path Composite',
        matchLevel: 'none',
        matchedWords: [],
      },
      source: {
        value: 'YS',
        matchLevel: 'none',
        matchedWords: [],
      },
    },
    _rankingInfo: {
      nbTypos: 0,
      firstMatchedWord: 0,
      proximityDistance: 0,
      userScore: 898,
      geoDistance: 0,
      geoPrecision: 0,
      nbExactWords: 0,
      words: 0,
      filters: 0,
    },
  },
];

const Template: Story<ComponentProps<typeof ProblemAutocomplete>> = args => (
  <ProblemAutocomplete
    modalIsOpen={true}
    refine={() => {}}
    currentRefinement="My Search"
    hits={mockHits}
    {...args}
  />
);

export const Default = Template.bind({});

import React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';
import MarkdownLayout from '../MarkdownLayout';
import { ConfettiProvider } from '../../../context/ConfettiContext';
import { SolutionInfo } from '../../../models/solution';
import { SectionID } from '../../../../content/ordering';
import { ModuleInfo } from '../../../models/module';

const mockSolutionInfo = new SolutionInfo(
  'solution-id',
  'Solution Source',
  'Solution Title',
  'Solution Author',
  {
    cpp: [],
    java: [],
    py: [],
  },
  'File Path.mdx'
);

const mockModuleInfo = new ModuleInfo(
  'module-id',
  'bronze',
  'Module Title',
  // module body
  'function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar problems = {\n  example: [new Problem("Bronze", "Shell Game", "891", "Easy", false, ["Nested Loop"]) // 99.93\n  ]\n};\nvar _frontmatter = {\n  "id": "simulation",\n  "title": "Simulation",\n  "author": "Darren Yao, Allen Li, Siyong Huang",\n  "description": "Directly simulating the problem statement, which many Bronze problems allow you to do.",\n  "frequency": 4\n};\nvar layoutProps = {\n  problems: problems,\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, ["components"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("p", null, "Hello World!"));\n}\n;\nMDXContent.isMDXComponent = true;',
  'Module Author',
  ['prereq-1'],
  'Module Description',
  // module frequency
  2,
  {
    cpp: [],
    java: [],
    py: [],
  },
  'File Path.mdx'
);

jest.mock('../../Logo.tsx', () => {
  return () => (
    <>
      <div className="dark:hidden">[dark logo]</div>
      <div className="hidden dark:block">[light logo]</div>
    </>
  );
});

jest.mock('../../../../content/ordering.ts', () => {
  const RealModule = jest.requireActual('../../../../content/ordering.ts');
  return {
    ...RealModule,
    SECTION_LABELS: {
      general: 'General',
      bronze: 'Bronze',
    },
    default: {
      general: [
        {
          name: 'About This Guide',
          description:
            "In this first chapter, you'll learn about how this guide is structured and how best to use this guide.",
          items: ['prereq-1'],
        },
      ],
      bronze: [
        {
          name: 'Basics',
          items: ['module-id'],
        },
      ],
    },
  };
});

beforeEach(() => {
  jest.clearAllMocks();

  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

  useStaticQuery.mockImplementation(query => ({
    allMdx: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'Contests',
              id: 'prereq-1',
              author: 'Benjamin Qi',
            },
            fields: { division: 'general' },
            problems: [],
          },
        },
        {
          node: {
            frontmatter: {
              title: 'Complete Search with Recursion',
              id: 'module-id',
              author:
                'Darren Yao, Sam Zhang, Michael Cao, Andrew Wang, Benjamin Qi, Dong Liu',
            },
            fields: { division: 'bronze' },
            problems: [
              {
                uniqueID:
                  'http://www.usaco.org/index.php?page=viewproblem2&cpid=857',
                solID: 'solution-id',
              },
            ],
          },
        },
      ],
    },
  }));
});

describe('Markdown Layout', () => {
  it('should render solutions correctly', () => {
    const scrollToModuleLinkFn = (Element.prototype.scrollIntoView = jest.fn());

    const { queryByText } = render(
      <ConfettiProvider>
        <MarkdownLayout markdownData={mockSolutionInfo}>
          Markdown Rendering Goes Here!
        </MarkdownLayout>
      </ConfettiProvider>
    );

    expect(queryByText('Markdown Rendering Goes Here!')).toBeTruthy();
    expect(queryByText('Solution Title')).toBeTruthy();
    expect(queryByText('Author: Solution Author')).toBeTruthy();

    // should auto scroll to the module associated w/ the solution
    expect(scrollToModuleLinkFn).toBeCalledTimes(1);
  });

  it('should render modules correctly', () => {
    const scrollToModuleLinkFn = (Element.prototype.scrollIntoView = jest.fn());

    const { queryAllByText, queryByText } = render(
      <ConfettiProvider>
        <MarkdownLayout markdownData={mockModuleInfo}>
          Markdown Rendering Goes Here!
        </MarkdownLayout>
      </ConfettiProvider>
    );

    expect(queryByText('Markdown Rendering Goes Here!')).toBeTruthy();
    expect(queryAllByText('Module Title')).toBeTruthy();
    expect(queryByText('Author: Module Author')).toBeTruthy();

    // should auto scroll to the module associated w/ the solution
    expect(scrollToModuleLinkFn).toBeCalledTimes(1);
  });
});

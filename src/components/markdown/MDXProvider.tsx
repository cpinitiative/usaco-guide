import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Spoiler from './Spoiler';
import { ProblemsList } from './ProblemsList/ProblemsList';
import { Resource, ResourcesList } from './ResourcesList';
import CodeBlock from './CodeBlock/CodeBlock';
import Asterisk from '../Tooltip/Asterisk';
import TextTooltip from '../Tooltip/TextTooltip';
import {
  CPPSection,
  JavaSection,
  LanguageSection,
  PySection,
} from './LanguageSection';
import { IncompleteSection } from './IncompleteSection';
import Info from './Info';
import Warning from './Warning';
import Optional from './Optional';
import InlineCode from './InlineCode';
import HTMLComponents from './HTMLComponents';

const components = {
  spoiler: Spoiler,
  'info-block': Info,
  'warning-block': Warning,
  'optional-content': Optional,
  'problems-list': ProblemsList,
  resources: ResourcesList,
  resource: Resource,
  code: CodeBlock,
  TextTooltip: TextTooltip,
  inlineCode: InlineCode,
  LanguageSection: LanguageSection,
  CPPSection: CPPSection,
  JavaSection: JavaSection,
  PySection: PySection,
  IncompleteSection: IncompleteSection,
  Asterisk: Asterisk,

  ...HTMLComponents,
};

export default function ({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

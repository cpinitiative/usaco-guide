import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Spoiler from './Spoiler';
import { ProblemsList } from './ProblemsList/ProblemsList';
import { Resource, ResourcesList } from './ResourcesList';
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
import HTMLComponents from './HTMLComponents';
import FocusProblem from './FocusProblem';

export const components = {
  Spoiler,
  Info,
  Warning,
  Optional,
  Problems: ProblemsList,
  FocusProblem,
  Resources: ResourcesList,
  Resource,
  TextTooltip,
  LanguageSection,
  CPPSection,
  JavaSection,
  PySection,
  IncompleteSection,
  Asterisk,

  ...HTMLComponents,
};

export default function ({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

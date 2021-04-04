import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Spoiler from './Spoiler';
import { ProblemsList } from './ProblemsList/ProblemsList';
import { DivisionList } from './ProblemsList/DivisionList/DivisionList';
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
import Youtube from './Youtube';
import PrefixSumInteractive from './PrefixSumInteractive';

export const components = {
  Spoiler,
  Info,
  Warning,
  Optional,
  Problems: ProblemsList,
  FocusProblem,
  Resources: ResourcesList,
  DivisionList,
  Resource,
  TextTooltip,
  LanguageSection,
  CPPSection,
  JavaSection,
  PySection,
  IncompleteSection,
  Asterisk,
  Youtube,
  PrefixSumInteractive,
  MATHDIV: props => {
    return (
      <div
        className={props.className}
        data-latex={`$$${props.latex}$$`}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    );
  },
  MATHSPAN: props => {
    return (
      <span
        className={props.className}
        data-latex={`$${props.latex}$`}
        dangerouslySetInnerHTML={{ __html: props.children }}
      />
    );
  },

  ...HTMLComponents,
};

export default function ({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}

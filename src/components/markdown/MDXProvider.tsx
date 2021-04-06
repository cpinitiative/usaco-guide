import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Asterisk from '../Tooltip/Asterisk';
import TextTooltip from '../Tooltip/TextTooltip';
import FocusProblem from './FocusProblem';
import HTMLComponents from './HTMLComponents';
import { IncompleteSection } from './IncompleteSection';
import Info from './Info';
import {
  CPPSection,
  JavaSection,
  LanguageSection,
  PySection,
} from './LanguageSection';
import Optional from './Optional';
import PrefixSumInteractive from './PrefixSumInteractive';
import { DivisionList } from './ProblemsList/DivisionList/DivisionList';
import { ProblemsList } from './ProblemsList/ProblemsList';
import { Resource, ResourcesList } from './ResourcesList';
import Spoiler from './Spoiler';
import Warning from './Warning';
import Youtube from './Youtube';

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

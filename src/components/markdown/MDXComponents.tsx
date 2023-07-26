import * as React from 'react';
import Asterisk from '../Tooltip/Asterisk';
import TextTooltip from '../Tooltip/TextTooltip';
import FocusProblem from './FocusProblem';
import HTMLComponents from './HTMLComponents';
import { IncompleteSection } from './IncompleteSection';
import Info from './Info';
import {
  CPPOnly,
  CPPSection,
  JavaOnly,
  JavaSection,
  LanguageSection,
  PyOnly,
  PySection,
} from './LanguageSection';
import Optional from './Optional';
import PrefixSumInteractive from './PrefixSumInteractive';
import { DivisionList } from './ProblemsList/DivisionList/DivisionList';
import { ProblemsList } from './ProblemsList/ProblemsList';
import Quiz from './Quiz';
import { Resource, ResourcesList } from './ResourcesList';
import Spoiler from './Spoiler';
import Warning from './Warning';
import YouTube from './YouTube';

const MATHDIV = props => {
  return (
    <div
      className={props.className}
      data-latex={`$$${props.latex}$$`}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};
const MATHSPAN = props => {
  return (
    <span
      className={props.className}
      data-latex={`$${props.latex}$`}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  );
};

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
  CPPOnly,
  JavaOnly,
  PyOnly,
  LanguageSection,
  CPPSection,
  JavaSection,
  PySection,
  IncompleteSection,
  Asterisk,
  YouTube,
  PrefixSumInteractive,
  Quiz,
  MATHDIV,
  MATHSPAN,

  ...HTMLComponents,
};

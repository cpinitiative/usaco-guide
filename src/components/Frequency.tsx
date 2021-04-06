import * as React from 'react';
import { ModuleFrequency } from '../models/module';
import ModuleFrequencyDots from './MarkdownLayout/ModuleFrequencyDots';
import TextTooltip from './Tooltip/TextTooltip';

export const FrequencyLabels = [
  'Has Not Appeared',
  'Rare',
  'Not Frequent',
  'Somewhat Frequent',
  'Very Frequent',
];
export const FrequencyTextColors = [
  'text-red-700 dark:text-red-400',
  'text-orange-700 dark:text-orange-400',
  'text-yellow-700 dark:text-yellow-400',
  'text-teal-700 dark:text-teal-400',
  'text-green-700 dark:text-green-400',
];
export const FrequencyCircleColors = [
  'text-red-600 dark:text-red-400',
  'text-orange-600 dark:text-orange-400',
  'text-yellow-600 dark:text-yellow-400',
  'text-teal-600 dark:text-teal-400',
  'text-green-600 dark:text-green-400',
];
export const FrequencyHints = [
  'Historically, this module has not appeared in this division before. However, it can still show up in future contests.',
  'Historically, this module has only appeared in this division once or twice.',
  'Historically, this module infrequently appears in this division.',
  'Historically, this module has appeared somewhat frequently for this division.',
  'Historically, this module has been known to appear at least once per contest. However, this does not guarantee that it will show up again in future contests.',
];
export const Frequency = ({ frequency }: { frequency: ModuleFrequency }) => {
  return (
    <span
      className={`inline-flex items-center font-medium ${FrequencyTextColors[frequency]}`}
    >
      <ModuleFrequencyDots
        count={frequency}
        totalCount={4}
        color={FrequencyCircleColors[frequency]}
      />
      <TextTooltip
        position="bottom"
        content={FrequencyHints[frequency]}
        className="ml-1"
      >
        {FrequencyLabels[frequency]}
      </TextTooltip>
    </span>
  );
};

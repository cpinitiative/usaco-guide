import { ModuleFrequency } from '../models/module';
import ModuleFrequencyDots from './ModuleLayout/ModuleFrequencyDots';
import TextTooltip from './Tooltip/TextTooltip';
import * as React from 'react';

export const FrequencyLabels = [
  'Has Not Appeared',
  'Rare',
  'Not Frequent',
  'Somewhat Frequent',
  'Very Frequent',
];
export const FrequencyTextColors = [
  'text-red-600', // group-hover:text-red-600
  'text-orange-600', // group-hover:text-orange-600
  'text-yellow-600', // group-hover:text-yellow-600
  'text-teal-600', // group-hover:text-teal-600
  'text-green-600', // group-hover:text-green-600
];
export const FrequencyCircleColors = [
  'text-red-500', // group-hover:text-red-500
  'text-orange-500', // group-hover:text-orange-500
  'text-yellow-500', // group-hover:text-yellow-500
  'text-teal-500', // group-hover:text-teal-500
  'text-green-500', // group-hover:text-green-500
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

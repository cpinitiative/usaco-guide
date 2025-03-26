import * as React from 'react';
import TextTooltip from '../../Tooltip/TextTooltip';

type ProblemsListHeaderProps = {
  showTags: boolean;
  showDifficulty: boolean;
} & (
  | {
      isDivisionTable: true;
      showSolvePercentage: boolean;
      showPlatinumSolvePercentageMessage: boolean;
    }
  | {
      isDivisionTable: false;
    }
);

export default function ProblemsListHeader(
  props: ProblemsListHeaderProps
): JSX.Element {
  return (
    <tr className="border-b border-gray-200 bg-gray-50 pr-4 md:pr-6 dark:border-gray-700 dark:bg-gray-800">
      <th
        className="px-3 py-3 text-center text-xs leading-4 font-medium tracking-wider uppercase"
        colSpan={2} // first column is anchor
      >
        Status
      </th>

      <th className="px-3 py-3 text-left text-xs leading-4 font-medium tracking-wider uppercase">
        {props.isDivisionTable ? 'Contest' : 'Source'}
      </th>

      <th className="px-3 py-3 text-left text-xs leading-4 font-medium tracking-wider whitespace-nowrap uppercase sm:pl-9">
        Problem Name
      </th>

      {props.showDifficulty &&
        (props.isDivisionTable ? (
          props.showSolvePercentage && (
            <th className="px-3 py-3 text-left text-xs leading-4 font-medium tracking-wider uppercase">
              <TextTooltip
                content={
                  props.showPlatinumSolvePercentageMessage
                    ? 'Percentage of points scored by the top 10 USA pre-college participants.'
                    : 'Percentage of points scored by pre-college promoters. Can be interpreted as a combination of difficulty + how strong the test data is.'
                }
              >
                Percent
              </TextTooltip>
            </th>
          )
        ) : (
          <th className="px-3 py-3 text-left text-xs leading-4 font-medium tracking-wider uppercase">
            Difficulty
          </th>
        ))}

      <th className="px-3 py-3 text-left text-xs leading-4 font-medium tracking-wider uppercase">
        Tags
      </th>

      {props.isDivisionTable && (
        <th className="px-3 py-3 text-left text-xs leading-4 font-medium tracking-wider uppercase">
          Module
        </th>
      )}

      <th className="py-3 pr-2 text-left text-xs leading-4 font-medium tracking-wider uppercase md:pr-3">
        {/*More*/}
      </th>
    </tr>
  );
}

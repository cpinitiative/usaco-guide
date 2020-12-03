import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './heatmap-styles.css';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export default function Activity() {
  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 3);

  const getTooltipDataAttrs = value => {
    // Temporary hack around null value.date issue
    if (!value || !value.date) {
      return null;
    }
    // Configuration for react-tooltip
    return {
      'data-tip': `${value.date} has count: ${value.count}`,
    };
  };

  const {
    userProgressOnModulesActivity,
    userProgressOnProblemsActivity,
  } = useContext(UserDataContext);
  const activityCount = {};

  for (let activity of userProgressOnModulesActivity) {
    let newDate = new Date(activity.timestamp);
    newDate.setHours(0, 0, 0, 0);

    if (newDate.getTime() in activityCount) activityCount[newDate.getTime()]++;
    else activityCount[newDate.getTime()] = 1;
  }

  for (let activity of userProgressOnProblemsActivity) {
    let newDate = new Date(activity.timestamp);
    newDate.setHours(0, 0, 0, 0);

    if (newDate.getTime() in activityCount) activityCount[newDate.getTime()]++;
    else activityCount[newDate.getTime()] = 1;
  }

  console.log(
    Object.keys(activityCount).map(d => ({ date: d, count: activityCount[d] }))
  );

  return (
    <div className="sm:px-6 lg:px-8 py-4">
      <div className="bg-white dark:bg-gray-900 shadow transition duration-150 ease-in-out sm:rounded-lg px-4 py-5 sm:p-6">
        <div className="max-w-xs mx-auto">
          <CalendarHeatmap
            startDate={startDate}
            endDate={new Date()}
            values={Object.keys(activityCount).map(d => ({
              date: new Date(parseInt(d)),
              count: activityCount[d],
            }))}
            tooltipDataAttrs={getTooltipDataAttrs}
            classForValue={value => {
              if (!value || value.count === 0) {
                return 'color-empty';
              }
              return `color-scale-${Math.min(value.count, 4)}`;
            }}
          />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-3">
          Note that activity calculations are very much in active development
          and will change in the near future.
        </p>
      </div>
    </div>
  );
}

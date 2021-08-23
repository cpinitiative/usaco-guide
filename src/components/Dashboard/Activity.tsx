import * as React from 'react';
import { useContext } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import './heatmap-styles.css';

export default function Activity() {
  const [activeDate, setActiveDate] = React.useState(null);
  const [startDate, setStartDate] = React.useState<Date>(null);

  React.useEffect(() => {
    const d = new Date();
    d.setMonth(d.getMonth() - 10);
    setStartDate(d);
  }, []);

  const {
    userProgressOnModulesActivity,
    userProgressOnProblemsActivity,
  } = useContext(UserDataContext);

  if (!startDate) return null;

  const activityCount = {};
  const moduleActivities = {};
  const problemActivities = {};

  const moduleIDs = [];
  for (const activity of userProgressOnModulesActivity) {
    if (
      activity.moduleProgress === 'Practicing' ||
      activity.moduleProgress === 'Complete'
    ) {
      const newDate = new Date(activity.timestamp);
      newDate.setHours(0, 0, 0, 0);
      if (
        moduleIDs.some(
          m => m[0] === activity.moduleID && m[1] === newDate.getTime()
        )
      )
        continue;
      moduleIDs.push([activity.moduleID, newDate.getTime()]);
      if (newDate.getTime() in activityCount) {
        activityCount[newDate.getTime()]++;
        moduleActivities[newDate.getTime()].push(activity);
      } else {
        activityCount[newDate.getTime()] = 1;
        moduleActivities[newDate.getTime()] = [activity];
      }
    }
  }

  const problemIDs = [];
  for (const activity of userProgressOnProblemsActivity) {
    if (activity.problemProgress === 'Solved') {
      const newDate = new Date(activity.timestamp);
      newDate.setHours(0, 0, 0, 0);
      if (
        problemIDs.some(
          p => p[0] === activity.problemID && p[1] === newDate.getTime()
        )
      )
        continue;
      problemIDs.push([activity.problemID, newDate.getTime()]);

      if (newDate.getTime() in activityCount) {
        activityCount[newDate.getTime()]++;
      } else {
        activityCount[newDate.getTime()] = 1;
      }
      if (newDate.getTime() in problemActivities) {
        problemActivities[newDate.getTime()].push(activity);
      } else {
        problemActivities[newDate.getTime()] = [activity];
      }
    }
  }

  const activeDateProblemsSolved =
    (activeDate && problemActivities[activeDate.getTime()]?.length) ?? 0;
  const activeDateModulesCompleted =
    (activeDate && moduleActivities[activeDate.getTime()]?.length) ?? 0;

  return (
    <div className="sm:px-6 lg:px-8 py-4">
      <div className="bg-white dark:bg-gray-900 shadow transition sm:rounded-lg px-4 py-5 sm:p-6">
        <div className="grid lg:grid-cols-3 lg:gap-x-6 gap-y-4 lg:gap-y-0">
          <div className="col-span-2">
            <CalendarHeatmap
              startDate={startDate}
              endDate={new Date()}
              values={Object.keys(activityCount).map(d => ({
                date: new Date(parseInt(d)),
                count: activityCount[d],
              }))}
              onMouseOver={(ev, value) => {
                setActiveDate(value?.date);
              }}
              classForValue={value => {
                if (!value || value.count === 0) {
                  return 'color-empty';
                }
                return `color-scale-${Math.min(value.count, 4)}`;
              }}
            />
          </div>
          <div className="col-span-1">
            {activeDate ? (
              <div className="text-gray-800 dark:text-gray-200">
                <b>{activeDate.toString().substr(0, 16)}</b> <br />
                <p>{activeDateProblemsSolved} problem(s) solved</p>
                <p>
                  {activeDateModulesCompleted} module(s) marked practicing /
                  completed
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                Hover over a square to view more details!
              </p>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Note that activity calculations are very much in development and will
          change in the near future.
        </p>
      </div>
    </div>
  );
}

import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {
  useUserProgressOnModulesActivity,
  useUserProgressOnProblemsActivity,
} from '../../context/UserDataContext/properties/userProgress';
import './heatmap-styles.css';

type ModuleActivity = ReturnType<typeof useUserProgressOnModulesActivity>[0];
type ProblemActivity = ReturnType<typeof useUserProgressOnProblemsActivity>[0];

export type ActivityHeatmapProps = {
  moduleActivities: { [key: number]: ModuleActivity[] };
  problemActivities: { [key: number]: ProblemActivity[] };
  endDate?: Date;
};

export function ActivityHeatmap({
  moduleActivities,
  problemActivities,
  endDate,
}: ActivityHeatmapProps) {
  const [activeDate, setActiveDate] = React.useState<Date | null>(null);
  if (!endDate) endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(endDate.getMonth() - 10);
  const activityCount: { [key: number]: number } = {};
  for (const t in moduleActivities) {
    activityCount[t] = moduleActivities[t].length;
  }
  for (const t in problemActivities) {
    if (activityCount[t]) activityCount[t] += problemActivities[t].length;
    else activityCount[t] = problemActivities[t].length;
  }
  const activeDateProblemsSolved =
    (activeDate && problemActivities[activeDate.getTime()]?.length) ?? 0;
  const activeDateModulesCompleted =
    (activeDate && moduleActivities[activeDate.getTime()]?.length) ?? 0;
  return (
    <div className="sm:px-6 lg:px-8 py-4">
      <div className="bg-white dark:bg-gray-800 shadow transition sm:rounded-lg px-4 py-5 sm:p-6">
        <div className="grid lg:grid-cols-3 lg:gap-x-6 gap-y-4 lg:gap-y-0">
          <div className="col-span-2">
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={Object.keys(activityCount).map(d => ({
                date: new Date(Number(d)),
                count: activityCount[Number(d)],
              }))}
              onMouseOver={(_ev, value) => {
                setActiveDate(value!.date);
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
                <b>{activeDate.toString().substring(0, 16)}</b> <br />
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

export default function Activity() {
  const userProgressOnModulesActivity = useUserProgressOnModulesActivity();
  const userProgressOnProblemsActivity = useUserProgressOnProblemsActivity();
  const activityCount: { [key: number]: number } = {};
  const moduleActivities: { [key: number]: ModuleActivity[] } = {};
  const problemActivities: { [key: number]: ProblemActivity[] } = {};

  const moduleIDs: [string, number][] = [];
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
      ) {
        continue;
      }
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

  const problemIDs: [string, number][] = [];
  for (const activity of userProgressOnProblemsActivity) {
    if (activity.problemProgress === 'Solved') {
      const newDate = new Date(activity.timestamp);
      newDate.setHours(0, 0, 0, 0);
      if (
        problemIDs.some(
          p => p[0] === activity.problemID && p[1] === newDate.getTime()
        )
      ) {
        continue;
      }
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

  return (
    <ActivityHeatmap
      moduleActivities={moduleActivities}
      problemActivities={problemActivities}
    />
  );
}

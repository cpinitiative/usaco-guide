import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import {
  useUserProgressOnModulesActivity,
  useUserProgressOnProblemsActivity,
} from '../../context/UserDataContext/properties/userProgress';
import { useActivity } from '../../hooks/useActivity';
import './heatmap-styles.css';

type ModuleActivity = ReturnType<typeof useUserProgressOnModulesActivity>[0];
type ProblemActivity = ReturnType<typeof useUserProgressOnProblemsActivity>[0];

export type ActivityHeatmapProps = {
  moduleActivities: { [key: number]: ModuleActivity[] };
  problemActivities: { [key: number]: ProblemActivity[] };
  activityCount: { [key: number]: number };
  endDate?: Date;
};

export function ActivityHeatmap({
  moduleActivities,
  problemActivities,
  activityCount,
  endDate,
}: ActivityHeatmapProps) {
  const [activeDate, setActiveDate] = React.useState<Date | null>(null);
  if (!endDate) endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setMonth(endDate.getMonth() - 10);
  const activeDateProblemsSolved =
    (activeDate && problemActivities[activeDate.getTime()]?.length) ?? 0;
  const activeDateModulesCompleted =
    (activeDate && moduleActivities[activeDate.getTime()]?.length) ?? 0;
  return (
    <div className="py-4 sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 shadow-sm transition sm:rounded-lg sm:p-6 dark:bg-gray-800">
        <div className="grid gap-y-4 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          <div className="col-span-2">
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={Object.keys(activityCount).map(d => ({
                date: new Date(Number(d)),
                count: activityCount[Number(d)],
              }))}
              onMouseOver={(_ev, value) => {
                if (!value) setActiveDate(null);
                else setActiveDate(value.date);
              }}
              classForValue={value => {
                if (!value || value.count === 0) {
                  return 'color-empty';
                }
                return `color-scale-${Math.min(value.count, 4)}`;
              }}
              tooltipDataAttrs={() => ({})}
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
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Hover over a square to view more details!
              </p>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          Note that activity calculations are very much in development and will
          change in the near future.
        </p>
      </div>
    </div>
  );
}

export default function Activity() {
  const { moduleActivities, problemActivities, activityCount } = useActivity();
  return (
    <ActivityHeatmap
      moduleActivities={moduleActivities}
      problemActivities={problemActivities}
      activityCount={activityCount}
    />
  );
}

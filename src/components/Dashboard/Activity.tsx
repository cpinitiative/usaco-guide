import * as React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './heatmap-styles.css';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

export default function Activity() {
  const [activeDate, setActiveDate] = React.useState(null);

  let startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 5);

  const {
    userProgressOnModulesActivity,
    userProgressOnProblemsActivity,
  } = useContext(UserDataContext);
  const activityCount = {};
  const moduleActivities = {};
  const problemActivities = {};

  for (let activity of userProgressOnModulesActivity) {
    let newDate = new Date(activity.timestamp);
    newDate.setHours(0, 0, 0, 0);

    if (newDate.getTime() in activityCount) {
      activityCount[newDate.getTime()]++;
      moduleActivities[newDate.getTime()].push(activity);
    } else {
      activityCount[newDate.getTime()] = 1;
      moduleActivities[newDate.getTime()] = [activity];
    }
  }

  for (let activity of userProgressOnProblemsActivity) {
    let newDate = new Date(activity.timestamp);
    newDate.setHours(0, 0, 0, 0);

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

  return (
    <div className="sm:px-6 lg:px-8 py-4">
      <div className="bg-white dark:bg-gray-900 shadow transition sm:rounded-lg px-4 py-5 sm:p-6">
        <div className="grid md:grid-cols-2 md:gap-x-6 gap-y-4 md:gap-y-0">
          <CalendarHeatmap
            startDate={startDate}
            endDate={new Date()}
            values={Object.keys(activityCount).map(d => ({
              date: new Date(parseInt(d)),
              count: activityCount[d],
            }))}
            onMouseOver={(ev, value) => setActiveDate(value.date)}
            classForValue={value => {
              if (!value || value.count === 0) {
                return 'color-empty';
              }
              return `color-scale-${Math.min(value.count, 4)}`;
            }}
          />
          <div>
            {activeDate ? (
              <p className="text-gray-800 dark:text-gray-200">
                <b>{activeDate.toString().substr(0, 16)}</b> <br />
                <b>Problems Solved:</b>
                <ul>
                  {problemActivities[activeDate.getTime()]?.map(activity => (
                    <li>{JSON.stringify(activity)}</li>
                  ))}
                </ul>
              </p>
            ) : (
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-3">
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

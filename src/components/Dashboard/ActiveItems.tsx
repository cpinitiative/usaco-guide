import { Link } from 'gatsby';
import * as React from 'react';
import { difficultyClasses } from '../markdown/ProblemsList/ProblemsListItem';
import DashboardCard from './DashboardCard';

type ActiveItemStatus =
  | 'Skipped'
  | 'Ignored'
  | 'Reading' // only for modules
  | 'Practicing' // only for modules
  | 'Solving' // only for problems
  | 'Reviewing'; // only for problems

export type ActiveItem = {
  label: string;
  status: ActiveItemStatus;
  url: string;
};

const statusClasses: { [key in ActiveItemStatus]: string } = {
  Skipped: difficultyClasses.Normal,
  Ignored: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
  Reading:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
  Practicing: difficultyClasses.Easy,
  Solving:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
  Reviewing: difficultyClasses.Insane,
};

export default function ActiveItems({
  type,
  items,
}: {
  type: 'problems' | 'modules';
  items: ActiveItem[];
}): JSX.Element {
  items.sort((a, b) => {
    // sort active modules in order of section
    const strcmp = (x, y) => {
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    };
    const statusVal: { [key in ActiveItemStatus]: number } = {
      Reviewing: -1,
      Reading: 0,
      Solving: 1,
      Practicing: 1,
      Skipped: 2,
      Ignored: 3,
    };
    const astatus = statusVal[a.status];
    const bstatus = statusVal[b.status];
    if (astatus != bstatus) return astatus - bstatus;
    const getLabel = x => {
      // put active USACO problems first
      const secs = [
        'General',
        'Bronze',
        'Old Bronze',
        'Silver',
        'Old Silver',
        'Gold',
        'Old Gold',
        'Platinum',
        'Advanced',
      ];
      for (let i = 0; i < secs.length; ++i) if (x.startsWith(secs[i])) return i;
      return 100;
    };
    const aval = getLabel(a.label);
    const bval = getLabel(b.label);
    if (aval != bval) return aval - bval;
    return strcmp(a.label, b.label);
  });
  return (
    <DashboardCard>
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-dark-high-emphasis">
          Active {type === 'problems' ? 'Problems' : 'Modules'}
        </h3>
        <div className="mt-4 text-gray-500">
          {items.map((item, idx) => (
            <p className={idx === 0 ? '' : 'mt-2'} key={item.url}>
              <Link
                to={item.url}
                className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition ease-in-out duration-150"
              >
                {item.label}
                <span
                  className={
                    'ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 ' +
                    statusClasses[item.status]
                  }
                >
                  {item.status}
                </span>
              </Link>
            </p>
          ))}
          {/*<p>*/}
          {/*  <a*/}
          {/*    href="#"*/}
          {/*    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"*/}
          {/*  >*/}
          {/*    Longest Common Subsequence*/}
          {/*    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">*/}
          {/*      Skipped*/}
          {/*    </span>*/}
          {/*  </a>*/}
          {/*</p>*/}
        </div>
      </div>
    </DashboardCard>
  );
}

import * as React from 'react';
import { AnnouncementInfo } from '../../models/announcement';
import { cn } from '../../utils/utils';
import Markdown from '../markdown/Markdown';

/**
 *
 * @param announcements List of information given to render
 * @param className For overriding the default announcement container's styles
 * @param filterFn To be used in case you don't want to display all announcements
 * @returns
 */
export default function Announcements({
  announcements,
  className,
  filterFn,
}: {
  announcements: AnnouncementInfo[];
  className?: string;
  filterFn?: (announcement: AnnouncementInfo) => boolean;
}) {
  return (
    <div
      className={cn(
        'flex overflow-x-auto sm:px-6 lg:px-8 py-4 grid lg:grid-cols-2 gap-8',
        className
      )}
    >
      {announcements.filter(filterFn ?? (() => true)).map(announcement => (
        <div
          className="bg-white dark:bg-gray-800 shadow transition sm:rounded-lg"
          key={announcement.id}
        >
          {/* hover:shadow-lg */}
          <div className="px-4 py-5 sm:p-6">
            {/* cursor-pointer */}
            <p className="text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
              {announcement.date}
            </p>
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-800 dark:text-dark-high-emphasis">
              {announcement.title}
            </h3>
            <div className="mt-3 text-base leading-6 text-gray-500 dark:text-dark-med-emphasis -mb-4">
              <Markdown body={announcement.body} />
            </div>
            {/*<div className="mt-3">*/}
            {/*  <span className="text-base leading-6 font-semibold text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">*/}
            {/*    Continue Reading*/}
            {/*  </span>*/}
            {/*</div>*/}
          </div>
        </div>
      ))}
    </div>
  );
}

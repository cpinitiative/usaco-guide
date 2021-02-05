import * as React from 'react';
import { AnnouncementInfo } from '../../models/announcement';
import Markdown from '../markdown/Markdown';

export default function Announcements({
  announcements,
}: {
  announcements: AnnouncementInfo[];
}) {
  return (
    <div className="flex overflow-x-auto sm:px-6 lg:px-8 py-4 grid lg:grid-cols-2 gap-8">
      {announcements.map(announcement => (
        <div
          className="bg-white dark:bg-gray-900 shadow transition sm:rounded-lg"
          key={announcement.id}
        >
          {/* hover:shadow-lg */}
          <div className="px-4 py-5 sm:p-6">
            {/* cursor-pointer */}
            <p className="text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
              {announcement.date}
            </p>
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-dark-high-emphasis">
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

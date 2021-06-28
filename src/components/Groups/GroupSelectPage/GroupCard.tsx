import { Link } from 'gatsby';
import React from 'react';
import { GroupData } from '../../../models/groups/groups';

export const GroupCard = ({ group }: { group: GroupData }): JSX.Element => {
  return (
    <Link
      to={`/groups/${group.id}/`}
      className="block px-3 sm:px-5 py-2 sm:py-4 rounded-lg bg-gray-50 dark:bg-gray-900 shadow-xs hover:shadow-md dark:hover:bg-gray-800 transition mb-4"
    >
      <div className="sm:text-lg font-medium">{group.name}</div>
      <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">
        {group.description}
      </div>
    </Link>
  );
};

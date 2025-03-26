import { Link } from 'gatsby';
import React from 'react';
import { GroupData } from '../../../models/groups/groups';

export const GroupCard = ({ group }: { group: GroupData }): JSX.Element => {
  return (
    <Link
      to={`/groups/${group.id}/`}
      className="mb-4 block rounded-lg bg-gray-50 px-3 py-2 shadow-xs transition hover:shadow-md sm:px-5 sm:py-4 dark:bg-gray-900 dark:hover:bg-gray-800"
    >
      <div className="font-medium sm:text-lg">{group.name}</div>
      <div className="text-xs text-gray-700 sm:text-sm dark:text-gray-400">
        {group.description}
      </div>
    </Link>
  );
};

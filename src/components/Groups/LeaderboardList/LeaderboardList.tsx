import * as React from 'react';
import { MemberData } from '../../../models/groups/groups';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';

const LeaderboardListItem = ({
  place,
  member,
  points,
}: {
  place: number;
  member: MemberData;
  points: number;
}) => {
  const { firebaseUser } = React.useContext(UserDataContext);
  return (
    <li className="py-3">
      <div className="flex items-center lg:space-x-4">
        <div className="flex-shrink-0 hidden lg:block">
          <img className="h-8 w-8 rounded-full" src={member.photoURL} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
            {place}. {member.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {points} points
          </p>
        </div>
        {firebaseUser?.uid === member.id && (
          <div>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100">
              Me
            </span>
          </div>
        )}
      </div>
    </li>
  );
};

export default function LeaderboardList() {
  return (
    <ul>
      <LeaderboardListItem
        place={1}
        member={{
          id: 'asdf',
          photoURL:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          name: 'Jeffrey Meng',
          permission: null,
        }}
        points={1500}
      />
      <li className="py-3">
        <div className="flex items-center lg:space-x-4">
          <div className="flex-shrink-0 hidden lg:block">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              2. Leonard Krasner
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              1500 points
            </p>
          </div>
        </div>
      </li>
      <li className="py-3">
        <div className="flex items-center lg:space-x-4">
          <div className="flex-shrink-0 hidden lg:block">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              3. Leonard Krasner
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              1500 points
            </p>
          </div>
        </div>
      </li>
      <li className="text-sm text-gray-700 dark:text-gray-200 italic text-center">
        7 more people
      </li>
      <li className="py-3">
        <div className="flex items-center lg:space-x-4">
          <div className="flex-shrink-0 hidden lg:block">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              11. Jeffrey Meng
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              1100 points
            </p>
          </div>
        </div>
      </li>
      <li className="py-3">
        <div className="flex items-center lg:space-x-4">
          <div className="flex-shrink-0 hidden lg:block">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              12. Nathan Wang
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              1000 points
            </p>
          </div>
          <div>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100">
              Me
            </span>
          </div>
        </div>
      </li>
      <li className="py-3">
        <div className="flex items-center lg:space-x-4">
          <div className="flex-shrink-0 hidden lg:block">
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt=""
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              13. Billy Bob
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              900 points
            </p>
          </div>
        </div>
      </li>
      <li className="py-2 text-sm text-gray-700 dark:text-gray-200 italic text-center">
        12 more people
      </li>
    </ul>
  );
}

import { getFunctions, httpsCallable } from 'firebase/functions';
import React from 'react';
import toast from 'react-hot-toast';
import { unstable_batchedUpdates } from 'react-dom';
import {
  UserPermissionInformation,
  UserPermissions,
} from '../../context/UserDataContext/UserPermissionsContext';
import { useFirebaseApp } from '../../hooks/useFirebase';
import Switch from '../elements/Switch';

export default function AdminSettings() {
  const firebaseApp = useFirebaseApp();

  const [email, setEmail] = React.useState('');
  const [searching, setSearching] = React.useState(false);

  // the type is actually auth.getUsersResult...
  const [userData, setUserData] = React.useState<any>(null);
  const [userPermissions, setUserPermissions] = React.useState<
    { [key in UserPermissions]: boolean } | null
  >(null);
  const [isUpdating, setIsUpdating] = React.useState(false);

  const editUserPermissions = updates => {
    setUserPermissions({
      ...(userPermissions || {}),
      ...updates,
    });
  };

  const handleSearch = async e => {
    e?.preventDefault();

    setSearching(true);
    try {
      const response = await (httpsCallable(
        getFunctions(firebaseApp),
        'getUsers'
      )({
        users: [{ email }],
      }) as any);
      if (response.data.users.length === 0) {
        toast.error('The user with email ' + email + ' could not be found.');
      } else {
        console.log('Got user: ', response.data.users[0]);
        unstable_batchedUpdates(() => {
          setUserData(response.data.users[0]);
          setUserPermissions(response.data.users[0].customClaims);
        });
      }
    } catch (e) {
      toast.error(e.message);
    }

    setSearching(false);
  };

  const handleUpdateUserPermissions = async e => {
    e.preventDefault();

    if (!userData.customClaims?.isAdmin && userPermissions.isAdmin) {
      if (
        !confirm(
          'Are you sure you want to grant this user admin permissions? This will give the user complete control over the database!'
        )
      ) {
        return;
      }
    }

    setIsUpdating(true);

    try {
      await httpsCallable(
        getFunctions(firebaseApp),
        'setUserClaims'
      )({
        target: userData.uid,
        claims: userPermissions,
      });
      toast(
        'Updated user permissions! The target user may have to sign out and sign back in to complete the changes.',
        {
          duration: 6000,
        }
      );
      handleSearch(null);
    } catch (e) {
      toast.error(e.message);
    }

    setIsUpdating(false);
  };

  return (
    <div>
      <div className="space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          User Search
        </h3>
      </div>
      <div className="h-4" />
      <div>
        <form className="space-y-6" onSubmit={handleSearch}>
          <div>
            <label
              htmlFor="search_email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              User Email
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <input
                  type="email"
                  name="search_email"
                  id="search_email"
                  className="input rounded-r-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                className="-ml-px space-x-2 relative rounded-l-none btn focus:ring-offset-0 focus:ring-1 focus:border-blue-500 dark:focus:border-blue-500"
                type="submit"
                disabled={searching}
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>{searching ? 'Searching...' : 'Search'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {userData && (
        <>
          <div className="h-8" />

          <div>
            <div className="flex items-center mb-4">
              <div className="mr-4 flex-shrink-0">
                <img src={userData.photoURL} className="h-16 w-16 rounded-md" />
              </div>
              <div>
                <h4 className="text-lg font-bold">{userData.displayName}</h4>
                <p>{userData.email}</p>
              </div>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 font-medium dark:text-gray-400">
                Account Disabled?
              </div>
              <p className="mt-0.5 text-sm text-gray-900 dark:text-gray-100">
                {userData.disabled ? 'Yes' : 'No'}
              </p>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 font-medium dark:text-gray-400">
                User ID
              </div>
              <p className="mt-0.5 text-sm text-gray-900 dark:text-gray-100">
                {userData.uid}
              </p>
            </div>
            <div className="mb-3">
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                This information has also been logged to the console.
              </div>
            </div>
          </div>
          <div className="h-4" />
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            User Permissions
          </h4>
          <form onSubmit={handleUpdateUserPermissions}>
            <div>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {Object.keys(UserPermissionInformation).map(key => (
                  <li
                    className="py-4 flex items-center justify-between"
                    key={key}
                  >
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {UserPermissionInformation[key].label}
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {UserPermissionInformation[key].description}
                      </span>
                    </div>
                    <Switch
                      checked={userPermissions?.[key] || false}
                      onChange={b => editUserPermissions({ [key]: b })}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-1" />

            <div className="flex">
              <button type="submit" className="btn" disabled={isUpdating}>
                {isUpdating ? 'Updating...' : 'Update User Permissions'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

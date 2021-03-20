import * as React from 'react';
import UserDataContext from './UserDataContext';

// the value is the firebase claim name
export type UserPermissions = 'isAdmin' | 'canModerate' | 'canCreateGroups';

export const UserPermissionInformation: {
  [key in UserPermissions]: { label: string; description: string };
} = {
  isAdmin: {
    label: 'Is Admin',
    description:
      'Admins have permissions to do anything -- add other admins and remove other admins. This is a dangerous permission to grant.',
  },
  canModerate: {
    label: 'Can Moderate',
    description:
      'Users with this permission can delete or mark user solutions as private.',
  },
  canCreateGroups: {
    label: 'Can Create Groups',
    description: 'Users with this permission can create Groups.',
  },
};

const UserPermissionsContext = React.createContext<{
  permissions: { [key in UserPermissions]: boolean };
}>(null);

export const UserPermissionsContextProvider = ({ children }) => {
  const defaultPermissions = {
    isAdmin: false,
    canModerate: false,
    canCreateGroups: false,
  };

  const [permissions, setPermissions] = React.useState<
    { [key in UserPermissions]: boolean }
  >(defaultPermissions);
  const { firebaseUser } = React.useContext(UserDataContext);

  React.useEffect(() => {
    if (firebaseUser?.uid) {
      (firebaseUser.getIdTokenResult() as any).then(
        ({ claims }: { claims: { [key in UserPermissions]: boolean } }) => {
          setPermissions({
            isAdmin: !!claims.isAdmin,
            canModerate: !!claims.canModerate,
            canCreateGroups: !!claims.canCreateGroups,
          });
        }
      );
    } else {
      setPermissions(defaultPermissions);
    }
  }, [firebaseUser]);

  const data = React.useMemo(
    () => ({
      permissions,
    }),
    [permissions]
  );

  return (
    <UserPermissionsContext.Provider value={data}>
      {children}
    </UserPermissionsContext.Provider>
  );
};

export function useUserPermissions() {
  const context = React.useContext(UserPermissionsContext);
  if (!context) {
    throw 'useUserPermissions() must be called inside a UserPermissionsContext.';
  }
  return context.permissions;
}

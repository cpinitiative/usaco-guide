import * as React from 'react';
import UserDataContext from './UserDataContext';

// the value is the firebase document array name
export type UserPermissions = 'isAdmin' | 'canModerate' | 'canCreateGroups';

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
      // somehow get user permissions @jeffrey todo
      setPermissions({
        isAdmin: true,
        canModerate: true,
        canCreateGroups: true,
      });
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

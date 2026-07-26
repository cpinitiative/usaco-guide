import * as React from 'react';
import { useFirebaseUser } from './UserDataContext';

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
} | null>(null);

export const UserPermissionsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const defaultPermissions = {
    isAdmin: false,
    canModerate: false,
    canCreateGroups: false,
  };

  const [permissions, setPermissions] =
    React.useState<{ [key in UserPermissions]: boolean }>(defaultPermissions);
  const firebaseUser = useFirebaseUser();

  React.useEffect(() => {
    if (firebaseUser?.uid) {
      // F-21: remove unnecessary `as any` cast — getIdTokenResult() already
      // returns Promise<IdTokenResult>.  We cast claims to a known shape instead
      // of casting the entire promise, preserving TypeScript's ability to catch
      // future SDK breaking changes.
      firebaseUser.getIdTokenResult().then(result => {
        const claims = result.claims as Record<UserPermissions, boolean | undefined>;
        setPermissions({
          isAdmin: !!claims.isAdmin,
          canModerate: !!claims.canModerate,
          canCreateGroups: !!claims.canCreateGroups,
        });
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
    throw new Error('useUserPermissions() must be called inside a UserPermissionsContext.');
  }
  return context.permissions;
}

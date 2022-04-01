import type { User } from 'firebase/auth';
import { Link } from 'gatsby';
import React from 'react';

export interface UserAvatarMenuProps {
  firebaseUser: User;
  onSignOut: () => void;
}

export const UserAvatarMenu: React.FC<UserAvatarMenuProps> = props => {
  return (
    <div className="flex flex-col items-end">
      <div>
        Welcome, <b>{props.firebaseUser.displayName}</b>
      </div>
      <div className="flex gap-1">
        <button type="button" style={{ all: 'revert' }}>
          <Link to="/settings">Settings</Link>
        </button>
        <button
          type="button"
          onClick={() => {
            props.onSignOut();
          }}
          style={{ all: 'revert' }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

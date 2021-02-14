import * as React from 'react';
import { useContext } from 'react';
import { GroupsContext } from '../../pages/groups';
import { observer } from 'mobx-react-lite';
import { Link } from 'gatsby';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

const GroupSelectPage = observer((props: { path: string }) => {
  const groups = useContext(GroupsContext);
  const { firebaseUser } = useContext(UserDataContext);

  return (
    <div>
      <Link to="/groups/AXXQLAD5KUkChikG1Zzl">go to AXXQLAD5KUkChikG1Zzl</Link>
    </div>
  );
});

export default GroupSelectPage;

import * as React from 'react';
import { useContext } from 'react';
import { GroupsContext } from '../../pages/groups';
import { observer } from 'mobx-react-lite';
import { Link } from 'gatsby';

const GroupSelectPage = observer((props: { path: string }) => {
  const groups = useContext(GroupsContext);
  return (
    <div>
      <Link to="/groups/2">go to 2</Link>
    </div>
  );
});

export default GroupSelectPage;

import { GroupData } from '../../models/groups/groups';
import * as React from 'react';
import firebaseType from 'firebase';
import useFirebase from '../useFirebase';
import { useNotificationSystem } from '../../context/NotificationSystemContext';

let cachedData: firebaseType.UserInfo[] = null;

export default function getMemberInfoForGroup(group: GroupData) {
  const [memberInfo, setMemberInfo] = React.useState<firebaseType.UserInfo[]>(
    null
  );
  const notifications = useNotificationSystem();

  useFirebase(
    firebase => {
      setMemberInfo(null);
      if (!group) return;

      const userIDs = [
        ...group.memberIds,
        ...group.ownerIds,
        ...group.adminIds,
      ];

      if (
        cachedData &&
        userIDs.every(id => cachedData.some(person => person.uid === id))
      ) {
        setMemberInfo(cachedData);
      } else {
        firebase
          .functions()
          .httpsCallable('getUsers')({
            users: userIDs.map(id => ({
              uid: id,
            })),
          })
          .then(d => {
            if (d?.data?.users?.length > 0) {
              setMemberInfo(d.data.users);
              cachedData = d.data.users;
            } else {
              notifications.addNotification({
                level: 'error',
                message: 'Error: Failed to fetch member info for leaderboard',
              });
            }
          })
          .catch(e => {
            notifications.showErrorNotification(e);
          });
      }
    },
    [group.memberIds, group.ownerIds, group.adminIds]
  );

  return memberInfo;
}

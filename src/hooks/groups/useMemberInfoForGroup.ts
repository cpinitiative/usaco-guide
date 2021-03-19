import { GroupData } from '../../models/groups/groups';
import * as React from 'react';
import firebaseType from 'firebase';
import useFirebase from '../useFirebase';
import { useNotificationSystem } from '../../context/NotificationSystemContext';

export type MemberInfo = {
  displayName: string;
  uid: string;
  photoURL: string;
};

let cachedData: {
  groupId: string;
  data: MemberInfo[];
} = null;

export default function getMemberInfoForGroup(group: GroupData) {
  const [memberInfo, setMemberInfo] = React.useState<MemberInfo[]>(null);
  const notifications = useNotificationSystem();

  useFirebase(
    firebase => {
      setMemberInfo(null);
      if (!group) return;

      if (cachedData?.groupId === group.id) {
        setMemberInfo(cachedData.data);
      } else {
        firebase
          .functions()
          .httpsCallable('getGroupMembers')({
            groupId: group.id,
          })
          .then(d => {
            if (d?.data?.length > 0) {
              setMemberInfo(d.data);
              cachedData = {
                groupId: group.id,
                data: d.data,
              };
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
    [group.id]
  );

  return memberInfo;
}

import * as React from 'react';
import {
  JoinGroupLink,
  joinGroupLinkConverter,
} from '../../models/groups/groups';
import useFirebase from '../useFirebase';

export default function useGroupJoinLinks(groupId: string) {
  const [links, setLinks] = React.useState<JoinGroupLink[]>(null);

  useFirebase(
    firebase => {
      setLinks(null);
      if (!groupId) return;

      return firebase
        .firestore()
        .collection('group-join-links')
        .where('groupId', '==', groupId)
        .withConverter(joinGroupLinkConverter)
        .onSnapshot(snap => {
          setLinks(snap.docs.map(doc => doc.data()));
        });
    },
    [groupId]
  );

  return links;
}

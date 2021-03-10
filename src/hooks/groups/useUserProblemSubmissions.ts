import * as React from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { Submission, submissionConverter } from '../../models/groups/posts';
import useFirebase from '../useFirebase';
import { useActiveGroup } from './useActiveGroup';

export default function useUserProblemSubmissions(problemId: string) {
  const { firebaseUser } = React.useContext(UserDataContext);
  const [submissions, setSubmissions] = React.useState<Submission[]>(null);
  const activeGroup = useActiveGroup();

  useFirebase(
    firebase => {
      if (problemId && firebaseUser?.uid && activeGroup?.activeGroupId) {
        return firebase
          .firestore()
          .collection('groups')
          .doc(activeGroup?.activeGroupId)
          .collection('submissions')
          .where('problemId', '==', problemId)
          .where('userId', '==', firebaseUser.uid)
          .withConverter(submissionConverter)
          .onSnapshot(snap => {
            console.log(snap);
            setSubmissions(
              snap.docs
                .map(doc => doc.data())
                .sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis())
            );
          });
      }
    },
    [firebaseUser?.uid, problemId, activeGroup?.activeGroupId]
  );

  return submissions;
}

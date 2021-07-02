import {
  getFirestore,
  orderBy,
  Timestamp,
  query,
  collection,
  limit,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import React from 'react';
import { useFirebaseApp } from '../useFirebase';

export type LeaderboardEntry = {
  totalPoints: number;
  userInfo: {
    displayName: string;
    photoURL: string;
    uid: string;
  };
  details: {
    [postId: string]: {
      [problemId: string]: {
        bestScore: number;
        bestScoreStatus: string;
        bestScoreSubmissionId: string;
        bestScoreTimestamp: Timestamp;
      };
    };
  };
} & {
  [postId: string]: {
    [problemId: string]: number;
    totalPoints: number;
  };
};

export default function useLeaderboardData({
  groupId,
  postId = null,
  maxResults = 10,
}: {
  groupId: string;
  postId?: string;
  maxResults?: number;
}): LeaderboardEntry[] | null {
  const firebaseApp = useFirebaseApp();
  const [data, setData] = React.useState<LeaderboardEntry[] | null>(null);
  React.useEffect(() => {
    if (!firebaseApp || !groupId) {
      setData(null);
      return;
    }
    const q = query(
      collection(getFirestore(firebaseApp), `groups/${groupId}/leaderboard`),
      orderBy(postId ? `${postId}.totalPoints` : 'totalPoints', 'desc'),
      limit(maxResults)
    );
    let alive = true;
    getDocs(q).then(snap => {
      if (!alive) return;
      const newData = [];
      snap.forEach(doc => newData.push(doc.data()));
      setData(newData);
    });
    return () => ((alive = false), null);
  }, [firebaseApp, groupId, postId, maxResults]);

  return data;
}

export function useUserLeaderboardData(
  groupId: string,
  userId: string
): LeaderboardEntry | null {
  const firebaseApp = useFirebaseApp();
  const [data, setData] = React.useState<LeaderboardEntry | null>(null);
  React.useEffect(() => {
    if (!firebaseApp || !groupId || !userId) {
      setData(null);
      return;
    }
    let alive = true;
    getDoc(
      doc(getFirestore(firebaseApp), `groups/${groupId}/leaderboard/${userId}`)
    ).then(snap => {
      if (!alive) return;
      setData(snap.data() as LeaderboardEntry);
    });
    return () => ((alive = false), null);
  }, [firebaseApp, groupId, userId]);

  return data;
}

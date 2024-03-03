import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  Timestamp,
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
  postId = undefined,
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
      const newData: LeaderboardEntry[] = [];
      snap.forEach(doc => newData.push(doc.data() as LeaderboardEntry));
      setData(newData);
    });
    return () => {
      alive = false;
    };
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
    return () => {
      alive = false;
    };
  }, [firebaseApp, groupId, userId]);

  return data;
}

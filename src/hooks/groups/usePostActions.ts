import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteField,
  doc,
  getFirestore,
  serverTimestamp,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { PostData } from '../../models/groups/posts';
import { GroupProblemData } from '../../models/groups/problem';
import { useFirebaseApp } from '../useFirebase';

// Duplicated from online-judge... online-judge should be the only version of this
export interface ProblemSubmissionRequestData {
  problemID: string;
  language: 'cpp' | 'java' | 'py';
  filename: string;
  sourceCode: string;
  submissionID?: string; // if given, uses this as the submission ID. must be uuidv4
  wait?: boolean; // if true, request will wait until the submission finishes grading.
  firebase?: {
    idToken: string; // used to authenticate REST api
    collectionPath: string;
    userID: string;
  };
}

export function usePostActions(groupId: string) {
  const firebaseApp = useFirebaseApp();
  const { firebaseUser, setUserProgressOnProblems } = useContext(
    UserDataContext
  );

  const updatePost = async (postId: string, updatedData: Partial<PostData>) => {
    await updateDoc(
      doc(getFirestore(firebaseApp), 'groups', groupId, 'posts', postId),
      updatedData
    );
  };

  return {
    createNewPost: async (type: 'announcement' | 'assignment') => {
      const defaultPost: Omit<PostData, 'timestamp'> = {
        name: 'Untitled Post',
        isPublished: false,
        isPinned: false,
        body: '',
        isDeleted: false,
        type,
        pointsPerProblem: {},
        problemOrdering: [],
        ...(type === 'announcement'
          ? {}
          : {
              dueTimestamp: null,
            }),
      };
      const firestore = getFirestore(firebaseApp);
      const batch = writeBatch(firestore);
      const docRef = doc(
        collection(getFirestore(firebaseApp), 'groups', groupId, 'posts')
      );
      batch.set(docRef, { ...defaultPost, timestamp: serverTimestamp() });
      batch.update(doc(firestore, 'groups', groupId), {
        postOrdering: arrayUnion(docRef.id),
      });
      await batch.commit();
      return docRef.id;
    },
    deletePost: async (postId: string): Promise<void> => {
      const firestore = getFirestore(firebaseApp);
      const batch = writeBatch(firestore);

      batch.update(doc(firestore, 'groups', groupId, 'posts', postId), {
        isDeleted: true,
      });
      batch.update(doc(firestore, 'groups', groupId), {
        [`leaderboard.${postId}`]: deleteField(),
        postOrdering: arrayRemove(postId),
      });
      return batch.commit();
    },
    updatePost,
    createNewProblem: async (post: PostData) => {
      const firestore = getFirestore(firebaseApp);
      const batch = writeBatch(firestore);
      const docRef = doc(
        collection(
          getFirestore(firebaseApp),
          'groups',
          groupId,
          'posts',
          post.id,
          'problems'
        )
      );
      const defaultProblem: GroupProblemData = {
        id: docRef.id,
        postId: post.id,
        name: 'Untitled Problem',
        body: '',
        source: '',
        points: 100,
        difficulty: 'Normal',
        hints: [],
        solution: null,
        isDeleted: false,
        usacoGuideId: null,
        solutionReleaseMode: 'due-date',
      };
      batch.set(docRef, defaultProblem);
      batch.update(
        doc(getFirestore(firebaseApp), 'groups', groupId, 'posts', post.id),
        {
          [`pointsPerProblem.${docRef.id}`]: defaultProblem.points,
          [`problemOrdering`]: arrayUnion(docRef.id),
        }
      );
      await batch.commit();
      return docRef.id;
    },
    saveProblem: async (post: PostData, problem: GroupProblemData) => {
      if (
        problem.solutionReleaseMode == 'custom' &&
        !problem.solutionReleaseTimestamp
      ) {
        alert(
          'If you set the solution release mode to custom, you must set a solution release timestamp.'
        );
        return;
      }
      const firestore = getFirestore(firebaseApp);
      const batch = writeBatch(firestore);
      const docRef = doc(
        getFirestore(firebaseApp),
        'groups',
        groupId,
        'posts',
        post.id,
        'problems',
        problem.id
      );
      // no clue why this throws a typescript error without it...
      batch.update(docRef, problem as any);
      batch.update(
        doc(getFirestore(firebaseApp), 'groups', groupId, 'posts', post.id),
        {
          [`pointsPerProblem.${docRef.id}`]: problem.points,
        }
      );
      await batch.commit();
      return docRef.id;
    },
    deleteProblem: async (post: PostData, problemId: string) => {
      const firestore = getFirestore(firebaseApp);
      const batch = writeBatch(firestore);
      batch.update(
        doc(
          firestore,
          'groups',
          groupId,
          'posts',
          post.id,
          'problems',
          problemId
        ),
        {
          isDeleted: true,
        }
      );
      batch.update(doc(firestore, 'groups', groupId), {
        [`leaderboard.${post.id}.${problemId}`]: deleteField(),
      });
      batch.update(doc(firestore, 'groups', groupId, 'posts', post.id), {
        [`pointsPerProblem.${problemId}`]: deleteField(),
        problemOrdering: arrayRemove(problemId),
      });
      await batch.commit();
    },
    updateProblemOrdering: async (postId: string, ordering: string[]) => {
      const firestore = getFirestore(firebaseApp);
      console.log('updating', ordering);
      updateDoc(doc(firestore, 'groups', groupId, 'posts', postId), {
        problemOrdering: ordering,
      });
    },
    submitSolution: async (
      submission: Omit<
        ProblemSubmissionRequestData,
        'submissionID' | 'wait' | 'firebase'
      >,
      postId: string,
      problemId: string
    ) => {
      const idToken = await firebaseUser.getIdToken();
      const reqData: ProblemSubmissionRequestData = {
        problemID: submission.problemID,
        language: submission.language,
        filename: submission.filename,
        sourceCode: submission.sourceCode,
        firebase: {
          collectionPath: `usaco-guide/databases/(default)/documents/groups/${groupId}/posts/${postId}/problems/${problemId}/submissions`,
          idToken,
          userID: firebaseUser.uid,
        },
      };
      const resp = await fetch(
        `https://oh2kjsg6kh.execute-api.us-west-1.amazonaws.com/Prod/submissions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reqData),
        }
      );
      const respData = await resp.json();
      if (!resp.ok) {
        throw new Error(respData.message);
      }
      return respData.submissionID;
    },
  };
}

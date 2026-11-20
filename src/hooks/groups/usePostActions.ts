import {
  addDoc,
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
import { useFirebaseUser } from '../../context/UserDataContext/UserDataContext';
import { PostData } from '../../models/groups/posts';
import {
  GroupProblemData,
  ProblemSubmissionResult,
} from '../../models/groups/problem';
import {
  getSubmissionScore,
  judgeSubmission,
  OnlineJudgeLanguage,
} from '../../utils/onlineJudge';
import { useFirebaseApp } from '../useFirebase';

export function usePostActions(groupId: string) {
  const firebaseApp = useFirebaseApp();
  const firebaseUser = useFirebaseUser();

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
          post.id!,
          'problems'
        )
      );
      const defaultProblem: GroupProblemData = {
        id: docRef.id,
        postId: post.id!,
        name: 'Untitled Problem',
        body: '',
        source: '',
        points: 100,
        difficulty: 'Medium',
        hints: [],
        solution: null,
        isDeleted: false,
        usacoGuideId: null,
        solutionReleaseMode: 'due-date',
      };
      batch.set(docRef, defaultProblem);
      batch.update(
        doc(getFirestore(firebaseApp), 'groups', groupId, 'posts', post.id!),
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
        post.id!,
        'problems',
        problem.id
      );
      // no clue why this throws a typescript error without it...
      batch.update(docRef, problem as any);
      batch.update(
        doc(getFirestore(firebaseApp), 'groups', groupId, 'posts', post.id!),
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
          post.id!,
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
      batch.update(doc(firestore, 'groups', groupId, 'posts', post.id!), {
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
    /**
     * Grades a submission with the online judge, calling onUpdate as test
     * cases finish, then records the result as a submission in Firestore
     * (which updates the leaderboard via the groups-submitToProblem function).
     */
    submitSolution: async (
      submission: {
        problemID: string; // USACO Guide problem ID, e.g. usaco-1251
        language: OnlineJudgeLanguage;
        sourceCode: string;
      },
      postId: string,
      problemId: string,
      onUpdate: (result: ProblemSubmissionResult) => void
    ): Promise<ProblemSubmissionResult> => {
      const submissionID = crypto.randomUUID();
      const result = await judgeSubmission({
        submissionID,
        problemID: submission.problemID,
        language: submission.language,
        sourceCode: submission.sourceCode,
        onUpdate,
      });
      // Don't record a submission if the judge itself failed
      if (result.verdict === 'IE') return result;

      await addDoc(
        collection(
          getFirestore(firebaseApp),
          'groups',
          groupId,
          'posts',
          postId,
          'problems',
          problemId,
          'submissions'
        ),
        {
          type: 'Online Judge',
          userID: firebaseUser!.uid,
          timestamp: Date.now(),
          verdict: result.verdict,
          submissionID,
          problemID: submission.problemID,
          language: submission.language,
          score: getSubmissionScore(result),
          // Results aren't stored by the judge, so keep the source code here
          // so it can be viewed later (see ProblemSubmissionPopup)
          sourceCode: submission.sourceCode,
        }
      );
      return result;
    },
    submitSubmissionLink: async (
      submissionLink: string,
      postId: string,
      problemId: string
    ) => {
      const firestore = getFirestore(firebaseApp);
      await addDoc(
        collection(
          firestore,
          'groups',
          groupId,
          'posts',
          postId,
          'problems',
          problemId,
          'submissions'
        ),
        {
          score: 1,
          userID: firebaseUser!.uid,
          type: 'submission-link',
          verdict: 'AC',
          timestamp: Date.now(),
          link: submissionLink,
        }
      );
    },
  };
}

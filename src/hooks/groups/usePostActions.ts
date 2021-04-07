import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { PostData } from '../../models/groups/posts';
import {
  groupProblemConverter,
  GroupProblemData,
  Submission,
  SubmissionType,
} from '../../models/groups/problem';
import useFirebase from '../useFirebase';

export function usePostActions(groupId: string) {
  const firebase = useFirebase();
  const { firebaseUser, setUserProgressOnProblems } = useContext(
    UserDataContext
  );

  const updatePost = async (postId: string, updatedData: Partial<PostData>) => {
    await firebase
      .firestore()
      .collection('groups')
      .doc(groupId)
      .collection('posts')
      .doc(postId)
      .update(updatedData);
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
        ...(type === 'announcement'
          ? {}
          : {
              dueTimestamp: null,
            }),
      };
      const doc = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .add({
          ...defaultPost,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      return doc.id;
    },
    deletePost: async (postId: string): Promise<void> => {
      const batch = firebase.firestore().batch();
      batch.update(
        firebase
          .firestore()
          .collection('groups')
          .doc(groupId)
          .collection('posts')
          .doc(postId),
        {
          isDeleted: true,
        }
      );
      batch.update(firebase.firestore().collection('groups').doc(groupId), {
        [`leaderboard.${postId}`]: firebase.firestore.FieldValue.delete(),
      });
      return batch.commit();
    },
    updatePost,
    createNewProblem: async (post: PostData, order = 10) => {
      const defaultProblem: Omit<GroupProblemData, 'id'> = {
        postId: post.id,
        name: 'Untitled Problem',
        body: '',
        source: '',
        points: 100,
        difficulty: 'Normal',
        hints: [],
        solution: null,
        submissionType: SubmissionType.SELF_GRADED,
        isDeleted: false,
        usacoGuideId: null,
        solutionReleaseMode: 'due-date',
        order,
      };
      const doc = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(post.id)
        .collection('problems')
        .add(defaultProblem);
      return doc.id;
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
      await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(post.id)
        .collection('problems')
        .doc(problem.id)
        .withConverter(groupProblemConverter)
        .update(problem);
    },
    deleteProblem: async (post: PostData, problemId: string) => {
      const batch = firebase.firestore().batch();
      batch.update(
        firebase
          .firestore()
          .collection('groups')
          .doc(groupId)
          .collection('posts')
          .doc(post.id)
          .collection('problems')
          .doc(problemId),
        {
          isDeleted: true,
        }
      );
      batch.update(firebase.firestore().collection('groups').doc(groupId), {
        [`leaderboard.${post.id}.${problemId}`]: firebase.firestore.FieldValue.delete(),
      });
      await batch.commit();
    },
    submitSolution: async (
      problem: GroupProblemData,
      submission: Partial<Submission>
    ) => {
      if (problem.usacoGuideId) {
        setUserProgressOnProblems(problem.usacoGuideId, 'Solved');
      }
      const doc = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(problem.postId)
        .collection('problems')
        .doc(problem.id)
        .collection('submissions')
        .add({
          ...submission,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          userId: firebaseUser.uid,
        });
      return doc.id;
    },
  };
}

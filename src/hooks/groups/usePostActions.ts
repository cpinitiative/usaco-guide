import useFirebase from '../useFirebase';
import { PostData } from '../../models/groups/posts';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  problemConverter,
  ProblemData,
  Submission,
  submissionConverter,
  SubmissionType,
} from '../../models/groups/problem';

export function usePostActions(groupId: string) {
  const firebase = useFirebase();
  const { firebaseUser } = useContext(UserDataContext);

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
      const defaultPost: PostData = {
        name: 'Untitled Post',
        timestamp: firebase.firestore.Timestamp.now(),
        dueTimestamp: null,
        isPublished: false,
        isPinned: false,
        body: '',
        type,
        leaderboard: {},
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
    deletePost: async (postId: string) => {
      await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(postId)
        .delete();
    },
    updatePost,
    createNewProblem: async (post: PostData, order: number = 10) => {
      const defaultProblem: Omit<ProblemData, 'id'> = {
        postId: post.id,
        name: 'Untitled Problem',
        body: '',
        source: '',
        points: 100,
        difficulty: 'Normal',
        hints: [],
        solution: null,
        submissionType: SubmissionType.SELF_GRADED,
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
    saveProblem: async (post: PostData, problem: ProblemData) => {
      await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(post.id)
        .collection('problems')
        .doc(problem.id)
        .withConverter(problemConverter)
        .update(problem);
    },
    deleteProblem: async (post: PostData, problemId: string) => {
      await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
        .collection('posts')
        .doc(post.id)
        .collection('problems')
        .doc(problemId)
        .delete();
    },
    submitSolution: async (
      problem: ProblemData,
      submission: Partial<Submission>
    ) => {
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

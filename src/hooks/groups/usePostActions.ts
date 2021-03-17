import useFirebase from '../useFirebase';
import {
  PostData,
  ProblemData,
  Submission,
  submissionConverter,
  SubmissionType,
} from '../../models/groups/posts';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

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
    createNewPost: async () => {
      const defaultPost: PostData = {
        name: 'Untitled Post',
        timestamp: firebase.firestore.Timestamp.now(),
        dueTimestamp: null,
        isPublished: false,
        isPinned: false,
        body: '',
        problems: {},
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
    createNewProblem: async (post: PostData) => {
      const id = uuidv4();
      const defaultProblem: ProblemData = {
        id,
        postId: post.id,
        name: 'Untitled Problem',
        body: '',
        source: '',
        points: 100,
        difficulty: 'Normal',
        hints: [],
        solution: null,
        submissionType: SubmissionType.SELF_GRADED,
      };
      await updatePost(post.id, {
        problems: {
          ...post.problems,
          [id]: defaultProblem,
        },
      });
      return id;
    },
    saveProblem: async (post: PostData, problem: ProblemData) => {
      await updatePost(post.id, {
        problems: {
          ...post.problems,
          [problem.id]: problem,
        },
      });
    },
    deleteProblem: async (post: PostData, problemId: string) => {
      const { [problemId]: deletedProblem, ...otherProblems } = post.problems;
      await updatePost(post.id, {
        problems: otherProblems,
      });
    },
    submitSolution: async (
      problem: ProblemData,
      submission: Partial<Submission>
    ) => {
      const doc = await firebase
        .firestore()
        .collection('groups')
        .doc(groupId)
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

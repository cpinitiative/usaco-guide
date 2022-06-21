import type { DocumentReference } from 'firebase/firestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React from 'react';
import toast from 'react-hot-toast';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useActivePostProblems } from '../../../hooks/groups/useActivePostProblems';
import useLeaderboardData from '../../../hooks/groups/useLeaderboardData';
import { usePost } from '../../../hooks/groups/usePost';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import { FirebaseSubmission } from '../../../models/groups/problem';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import { LeaderboardTable } from '../LeaderboardTable/LeaderboardTable';
import { useProblemSubmissionPopupAction } from '../ProblemSubmissionPopup';

export default function PostLeaderboardPage(props) {
  const { postId } = props as {
    path: string;
    groupId: string;
    postId: string;
  };
  const activeGroup = useActiveGroup();
  const post = usePost(postId);
  const { problems } = useActivePostProblems();
  const firebaseApp = useFirebaseApp();
  const leaderboard = useLeaderboardData({
    groupId: activeGroup.activeGroupId,
    postId: postId,
    maxResults: 50,
  });

  const openProblemSubmissionPopup = useProblemSubmissionPopupAction();
  const handleOpenSubmissionsDetail = (
    problemId: string,
    submissionId: string
  ) => {
    getDoc(
      doc(
        getFirestore(firebaseApp),
        'groups',
        activeGroup.activeGroupId,
        'posts',
        postId,
        'problems',
        problemId,
        'submissions',
        submissionId
      ) as DocumentReference<FirebaseSubmission>
    )
      .then(doc => {
        const submission = { id: doc.id, ...doc.data() };
        openProblemSubmissionPopup(submission);
      })
      .catch(e => {
        toast.error("Couldn't get submission: " + e.message);
      });
  };

  return (
    <Layout>
      <SEO title={`Leaderboard: ${post.name}`} />

      <TopNavigationBar />

      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className={`max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4`}
          group={activeGroup.groupData}
          post={post}
        />
      </nav>

      <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0 px-4 sm:px-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-gray-100 sm:text-3xl sm:truncate">
              Leaderboard: {post.name}
            </h2>
          </div>
          {/*<div className="mt-4 flex md:mt-0 md:ml-4">*/}
          {/*  <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
          {/*    Edit*/}
          {/*  </button>*/}
          {/*  <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
          {/*    Publish*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>

        <div className="h-6" />

        <div className="flex flex-col">
          <LeaderboardTable
            columns={problems?.map(problem => ({
              id: problem.id,
              tooltip: problem.name,
            }))}
            rows={leaderboard?.map(item => ({
              id: item.userInfo.uid,
              name: item.userInfo.displayName,
              points: item[postId]?.totalPoints ?? 0,
              items: problems?.map(problem => ({
                id: problem.id,
                value:
                  item.details[postId]?.[problem.id]?.bestScore?.toFixed(1) ||
                  '0',
                payload: activeGroup.showAdminView &&
                  item.details[postId]?.[problem.id] && {
                    problemId: problem.id,
                    submissionId:
                      item.details[postId]?.[problem.id]?.bestScoreSubmissionId,
                  },
              })),
            }))}
            onCellClick={(_, { problemId, submissionId }) => {
              handleOpenSubmissionsDetail(problemId, submissionId);
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

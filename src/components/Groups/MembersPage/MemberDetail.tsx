import { useRouter } from 'next/router';
import * as React from 'react';
import type { CollectionReference } from 'firebase/firestore';
import {
  collection,
  getDocs,
  getFirestore,
  query,
  DocumentData,
  where,
} from 'firebase/firestore';
import toast from 'react-hot-toast';
import { useFirebaseUser } from '../../../context/UserDataContext/UserDataContext';
import getPermissionLevel from '../../../functions/src/groups/utils/getPermissionLevel';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import { useGroupActions } from '../../../hooks/groups/useGroupActions';
import { useUserLeaderboardData } from '../../../hooks/groups/useLeaderboardData';
import { MemberInfo } from '../../../hooks/groups/useMemberInfoForGroup';
import { PostData } from '../../../models/groups/posts';
import {
  FirebaseSubmission,
  getSubmissionEarnedPoints,
  getSubmissionStatus,
  getSubmissionTimestampString,
  GroupProblemData,
  submissionCircleBorderColor,
  submissionCircleColor,
  submissionTextColor,
} from '../../../models/groups/problem';
import { useProblemSubmissionPopupAction } from '../ProblemSubmissionPopup';

type AssignmentProgress = {
  post: PostData & { type: 'assignment' };
  earnedPoints: number;
  totalPoints: number;
  completedProblems: number;
  totalProblems: number;
  statusCounts: Record<string, number>;
  problems: {
    problemId: string;
    earnedPoints: number;
    maxPoints: number;
    status: string | null;
    updatedAt: number | null;
    hasSubmission: boolean;
  }[];
};

const statusColorMap: Record<string, string> = {
  AC: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200',
  WA: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  TLE: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  MLE: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  RTE: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  CE: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  IE: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  Pending:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200',
};

const progressBarColor = (ratio: number) => {
  if (ratio >= 0.8) {
    return 'bg-green-500';
  }
  if (ratio >= 0.5) {
    return 'bg-yellow-500';
  }
  return 'bg-pink-500';
};

const formatTimestamp = (millis: number | null) => {
  if (!millis) return '-';
  return new Date(millis).toLocaleString();
};
export default function MemberDetail({ member }: { member: MemberInfo }) {
  const firebaseApp = useFirebaseApp();
  const activeGroup = useActiveGroup();
  const { removeMemberFromGroup, updateMemberPermissions } = useGroupActions();
  const { uid: userId } = useFirebaseUser()!;
  const userLeaderboardData = useUserLeaderboardData(
    activeGroup.activeGroupId!,
    member.uid
  );
  const router = useRouter();
  const [sortMode, setSortMode] = React.useState<'due' | 'completion'>('due');
  const [expandedPosts, setExpandedPosts] = React.useState<
    Record<string, boolean>
  >({});
  const [problemNamesByPost, setProblemNamesByPost] = React.useState<
    Record<string, Record<string, string>>
  >({});
  const [expandedProblemKey, setExpandedProblemKey] = React.useState<string | null>(
    null
  );
  const [submissionsByProblemKey, setSubmissionsByProblemKey] = React.useState<
    Record<string, FirebaseSubmission[]>
  >({});
  const [loadingProblemKey, setLoadingProblemKey] = React.useState<string | null>(
    null
  );
  const showSubmissionAction = useProblemSubmissionPopupAction();

  if (!member) {
    return (
      <p className="mt-8 text-center text-xl">
        This member has been removed from the group.
      </p>
    );
  }
  const permissionLevel = getPermissionLevel(
    member.uid,
    activeGroup.groupData!
  );
  const assignmentProgress = React.useMemo<AssignmentProgress[]>(() => {
    const assignmentPosts = activeGroup.posts.filter(
      (post): post is PostData & { type: 'assignment' } =>
        post.type === 'assignment' && !!post.id
    );
    return assignmentPosts.map(post => {
      const leaderboardPostData = userLeaderboardData?.[post.id!];
      const detailEntries = userLeaderboardData?.details?.[post.id!] ?? {};
      const problemIds = Array.from(
        new Set([
          ...(post.problemOrdering ?? []),
          ...Object.keys(post.pointsPerProblem ?? {}),
          ...Object.keys(detailEntries ?? {}),
        ])
      );
      const totalPoints = Object.values(post.pointsPerProblem ?? {}).reduce(
        (acc, cur) => acc + cur,
        0
      );

      const problems = problemIds.map(problemId => {
        const detail = detailEntries?.[problemId];
        const hasEarnedEntry =
          typeof leaderboardPostData === 'object' &&
          leaderboardPostData !== null &&
          Object.prototype.hasOwnProperty.call(leaderboardPostData, problemId) &&
          typeof leaderboardPostData[problemId] === 'number';
        const earnedPoints =
          typeof leaderboardPostData?.[problemId] === 'number'
            ? leaderboardPostData[problemId]
            : 0;
        const maxPoints = post.pointsPerProblem?.[problemId] ?? 0;
        const updatedAt =
          detail?.bestScoreTimestamp &&
          typeof detail.bestScoreTimestamp.toMillis === 'function'
            ? detail.bestScoreTimestamp.toMillis()
            : null;
        return {
          problemId,
          earnedPoints,
          maxPoints,
          status: detail?.bestScoreStatus ?? null,
          updatedAt,
          hasSubmission: !!detail || hasEarnedEntry,
        };
      });

      const earnedPoints = problems.reduce(
        (acc, cur) => acc + cur.earnedPoints,
        0
      );
      const completedProblems = problems.filter(
        problem => problem.hasSubmission
      ).length;
      const statusCounts = problems.reduce<Record<string, number>>(
        (acc, cur) => {
          if (cur.status) acc[cur.status] = (acc[cur.status] ?? 0) + 1;
          return acc;
        },
        {}
      );
      return {
        post,
        earnedPoints,
        totalPoints,
        completedProblems,
        totalProblems: problemIds.length,
        statusCounts,
        problems,
      };
    });
  }, [activeGroup.posts, userLeaderboardData]);

  const sortedAssignments = React.useMemo(() => {
    const items = [...assignmentProgress];
    if (sortMode === 'completion') {
      items.sort((a, b) => {
        const ratioA = a.totalProblems
          ? a.completedProblems / a.totalProblems
          : 0;
        const ratioB = b.totalProblems
          ? b.completedProblems / b.totalProblems
          : 0;
        return ratioB - ratioA;
      });
      return items;
    }
    items.sort((a, b) => {
      const aDue = a.post.dueTimestamp?.toMillis?.() ?? Number.MAX_SAFE_INTEGER;
      const bDue = b.post.dueTimestamp?.toMillis?.() ?? Number.MAX_SAFE_INTEGER;
      return aDue - bDue;
    });
    return items;
  }, [assignmentProgress, sortMode]);

  const toggleExpanded = (postId: string) => {
    setExpandedPosts(old => ({ ...old, [postId]: !old[postId] }));
  };
  const toggleProblemSubmissions = async (postId: string, problemId: string) => {
    const problemKey = `${postId}/${problemId}`;
    if (expandedProblemKey === problemKey) {
      setExpandedProblemKey(null);
      return;
    }

    setExpandedProblemKey(problemKey);
    if (submissionsByProblemKey[problemKey]) {
      return;
    }
    if (!firebaseApp || !activeGroup.activeGroupId) {
      return;
    }
    setLoadingProblemKey(problemKey);
    try {
      const snap = await getDocs(
        query(
          collection(
            getFirestore(firebaseApp),
            'groups',
            activeGroup.activeGroupId!,
            'posts',
            postId,
            'problems',
            problemId,
            'submissions'
          ) as CollectionReference<DocumentData>,
          where('userID', '==', member.uid)
        )
      );
      const submissions = snap.docs
        .map(doc => ({ ...doc.data(), id: doc.id }) as FirebaseSubmission)
        .sort((a, b) => b.timestamp - a.timestamp);
      setSubmissionsByProblemKey(old => ({ ...old, [problemKey]: submissions }));
    } catch (error: unknown) {
      const message =
        (error as { message?: string })?.message ??
        'Unable to load submissions for this member.';
      if (message.includes('permission-denied')) {
        toast.error('You do not have permission to view these submissions.');
      } else {
        toast.error(message);
      }
      setExpandedProblemKey(null);
    } finally {
      setLoadingProblemKey(null);
    }
  };

  React.useEffect(() => {
    if (!firebaseApp || !activeGroup.activeGroupId) return;
    const expandedPostIds = Object.keys(expandedPosts).filter(
      postId => expandedPosts[postId] && !problemNamesByPost[postId]
    );
    expandedPostIds.forEach(postId => {
      getDocs(
        query(
          collection(
            getFirestore(firebaseApp),
            'groups',
            activeGroup.activeGroupId!,
            'posts',
            postId,
            'problems'
          ) as CollectionReference<GroupProblemData>,
          where('isDeleted', '==', false)
        )
      ).then(snap => {
        const nameMap: Record<string, string> = {};
        snap.docs.forEach(doc => {
          nameMap[doc.id] = doc.data().name || 'Problem';
        });
        setProblemNamesByPost(old => ({ ...old, [postId]: nameMap }));
      });
    });
  }, [
    firebaseApp,
    activeGroup.activeGroupId,
    expandedPosts,
    problemNamesByPost,
  ]);

  return (
    <article>
      {/* Profile header */}
      <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8">
        <div className="flex items-start space-x-5">
          <div className="shrink-0">
            <div className="relative">
              <img
                className="h-16 w-16 rounded-full"
                src={member.photoURL}
                alt={member.displayName}
              />
              <span
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              ></span>
            </div>
          </div>
          {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {member.displayName}
            </h1>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
              {Math.trunc((userLeaderboardData?.totalPoints ?? 0) * 1000) /
                1000}{' '}
              Points Earned
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      {/*<div className="mt-6 sm:mt-2 2xl:mt-5">*/}
      {/*  <div className="border-b border-gray-200">*/}
      {/*    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*      <nav className="-mb-px flex space-x-8" aria-label="Tabs">*/}
      {/*        /!* Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" *!/*/}
      {/*        <a href="/" className="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">*/}
      {/*          Profile*/}
      {/*        </a>*/}
      {/*        <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">*/}
      {/*          Calendar*/}
      {/*        </a>*/}
      {/*        <a href="/" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">*/}
      {/*          Recognition*/}
      {/*        </a>*/}
      {/*      </nav>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="mx-auto my-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        {member.uid !== userId && (
          <div className="mt-8 space-x-4">
            <button
              type="button"
              className="btn"
              onClick={() => {
                if (
                  confirm(
                    'Are you sure you want to remove this member from the group?'
                  )
                ) {
                  removeMemberFromGroup(activeGroup.activeGroupId!, member.uid)
                    .then(() =>
                      toast.success(
                        'This member has been successfully removed from the group.'
                      )
                    )
                    .catch(e => toast.error(e));
                }
              }}
            >
              Remove From Group
            </button>

            {(['OWNER', 'ADMIN', 'MEMBER'] as ('OWNER' | 'ADMIN' | 'MEMBER')[])
              .filter(p => p !== permissionLevel)
              .map(newPermission => (
                <button
                  key={newPermission}
                  className="btn"
                  onClick={() => {
                    if (
                      confirm(
                        `Are you sure you want to ${
                          ['OWNER', 'ADMIN', 'MEMBER'].indexOf(newPermission) <
                          ['OWNER', 'ADMIN', 'MEMBER'].indexOf(permissionLevel)
                            ? 'promote'
                            : 'demote'
                        } ${
                          member.displayName
                        } to ${newPermission.toLowerCase()}?`
                      )
                    ) {
                      updateMemberPermissions(
                        activeGroup.activeGroupId!,
                        member.uid,
                        newPermission
                      )
                        .then(() =>
                          toast.success(
                            `${member.displayName} now has permission level ${newPermission}.`
                          )
                        )
                        .catch(e => toast.error(e));
                    }
                  }}
                >
                  {['OWNER', 'ADMIN', 'MEMBER'].indexOf(newPermission) <
                  ['OWNER', 'ADMIN', 'MEMBER'].indexOf(permissionLevel)
                    ? 'Promote'
                    : 'Demote'}{' '}
                  to{' '}
                  {newPermission.charAt(0).toUpperCase() +
                    newPermission.substring(1).toLowerCase()}
                </button>
              ))}
            <button
              className="btn"
              onClick={() => {
                alert(
                  'Viewing group as member. Do not submit any problems. Reload the page to undo.'
                );
                activeGroup.setActiveUserId(member.uid);
                router.push(`/groups/${activeGroup.activeGroupId!}`);
              }}
            >
              View Group as Member
            </button>
          </div>
        )}
        <hr className="my-6 dark:border-gray-700" />
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Assignment Progress
            </h2>
            <div className="flex items-center gap-2">
              <label
                htmlFor="assignment-sort"
                className="text-sm text-gray-600 dark:text-gray-300"
              >
                Sort by
              </label>
              <select
                id="assignment-sort"
                className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800"
                value={sortMode}
                onChange={e =>
                  setSortMode(e.target.value as 'due' | 'completion')
                }
              >
                <option value="due">Due date</option>
                <option value="completion">Completion</option>
              </select>
            </div>
          </div>
          {sortedAssignments.length === 0 ? (
            <p className="text-sm text-gray-600 dark:text-gray-300">
              No assignments found for this group.
            </p>
          ) : (
            sortedAssignments.map(assignment => {
              const postId = assignment.post.id!;
              const isExpanded = expandedPosts[postId] ?? false;
              const completionRatio =
                assignment.totalProblems === 0
                  ? 0
                  : assignment.completedProblems / assignment.totalProblems;
              return (
                <section
                  key={postId}
                  className="rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
                >
                  <button
                    type="button"
                    className="w-full px-4 py-3 text-left"
                    onClick={() => toggleExpanded(postId)}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">
                          {assignment.post.name} ({postId})
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                          Due:{' '}
                          {assignment.post.dueTimestamp
                            ? assignment.post.dueTimestamp
                                .toDate()
                                .toLocaleString()
                            : 'No due date'}{' '}
                          • {assignment.completedProblems}/
                          {assignment.totalProblems} problems attempted
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {assignment.earnedPoints.toFixed(1)} /{' '}
                          {assignment.totalPoints.toFixed(1)} pts
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {isExpanded ? 'Collapse' : 'Expand'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className={`h-2 rounded-full ${progressBarColor(completionRatio)}`}
                        style={{
                          width: `${Math.max(
                            0,
                            Math.min(100, completionRatio * 100)
                          )}%`,
                        }}
                      />
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">
                      {Object.keys(assignment.statusCounts).length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {Object.entries(assignment.statusCounts).map(
                            ([status, count]) => (
                              <span
                                key={status}
                                className={`rounded-full px-2 py-1 text-xs font-medium ${
                                  statusColorMap[status] ??
                                  'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                                }`}
                              >
                                {status}: {count}
                              </span>
                            )
                          )}
                        </div>
                      )}
                      <ul className="space-y-2">
                        {assignment.problems.map(problem => (
                          // Clickable only when this user has started the problem.
                          // This mirrors the submission-popup workflow used on Problem pages.
                          <li
                            key={problem.problemId}
                            className="rounded-md border border-gray-200 px-3 py-2 text-sm dark:border-gray-700"
                          >
                            <button
                              type="button"
                              className={`flex w-full items-center justify-between text-left ${
                                problem.status
                                  ? 'cursor-pointer'
                                  : 'cursor-not-allowed opacity-70'
                              }`}
                              disabled={!problem.status}
                              onClick={() =>
                                toggleProblemSubmissions(postId, problem.problemId)
                              }
                            >
                              <div>
                                <p className="font-medium text-gray-900 dark:text-gray-100">
                                  {problemNamesByPost[postId]?.[problem.problemId] ??
                                    'Problem'}{' '}
                                  ({problem.problemId})
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  {formatTimestamp(problem.updatedAt)}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-700 dark:text-gray-200">
                                  {problem.earnedPoints.toFixed(1)} /{' '}
                                  {problem.maxPoints.toFixed(1)} pts
                                </span>
                                <span
                                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                                    problem.status
                                      ? (statusColorMap[problem.status] ??
                                        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200')
                                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'
                                  }`}
                                >
                                  {problem.status ?? 'Not started'}
                                </span>
                              </div>
                            </button>
                            {expandedProblemKey === `${postId}/${problem.problemId}` && (
                              <div className="mt-2 border-t border-gray-200 pt-2 dark:border-gray-700">
                                {loadingProblemKey === `${postId}/${problem.problemId}` ? (
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Loading submissions...
                                  </p>
                                ) : !(submissionsByProblemKey[
                                    `${postId}/${problem.problemId}`
                                  ]?.length) ? (
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    No submissions found.
                                  </p>
                                ) : (
                                  <ul>
                                    {submissionsByProblemKey[
                                      `${postId}/${problem.problemId}`
                                    ].map(submission => (
                                      <li
                                        key={
                                          'submissionID' in submission
                                            ? submission.submissionID
                                            : `${submission.timestamp}`
                                        }
                                        className="group relative py-2"
                                      >
                                        <div className="flex items-center justify-between space-x-4">
                                          <button
                                            type="button"
                                            className="text-sm leading-3 font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                            onClick={() =>
                                              showSubmissionAction(submission)
                                            }
                                          >
                                            {getSubmissionTimestampString(submission)}
                                          </button>
                                          <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-300">
                                            <span
                                              className={`h-5 w-5 ${
                                                submissionCircleBorderColor[
                                                  getSubmissionStatus(submission)
                                                ]
                                              } flex items-center justify-center rounded-full`}
                                              aria-hidden="true"
                                            >
                                              <span
                                                className={`h-2.5 w-2.5 ${
                                                  submissionCircleColor[
                                                    getSubmissionStatus(submission)
                                                  ]
                                                } rounded-full`}
                                              />
                                            </span>
                                            <span
                                              className={`mr-4 ml-2 ${
                                                submissionTextColor[
                                                  getSubmissionStatus(submission)
                                                ]
                                              }`}
                                            >
                                              {getSubmissionEarnedPoints(submission, {
                                                id: problem.problemId,
                                                postId,
                                                name:
                                                  problemNamesByPost[postId]?.[
                                                    problem.problemId
                                                  ] ?? 'Problem',
                                                body: '',
                                                source: '',
                                                difficulty: '',
                                                hints: [],
                                                solution: null,
                                                isDeleted: false,
                                                points: problem.maxPoints,
                                              })}{' '}
                                              / {problem.maxPoints}
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              );
            })
          )}
        </div>
      </div>
    </article>
  );
}

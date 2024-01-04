import dayjs from 'dayjs';
import { Link, navigate } from 'gatsby';
import React from 'react';
import toast from 'react-hot-toast';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePost } from '../../../hooks/groups/usePost';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { useProblem } from '../../../hooks/groups/useProblem';
import Layout from '../../layout';
import Spoiler from '../../markdown/Spoiler';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import SafeMarkdownRenderer from '../SafeMarkdownRenderer';
import ProblemSidebar from './ProblemSidebar';
import ProblemSubmission from './ProblemSubmissionInterface';

export default function ProblemPage(props) {
  const { postId, problemId } = props as {
    path: string;
    groupId: string;
    postId: string;
    problemId: string;
  };
  const activeGroup = useActiveGroup();
  const post = usePost(postId);
  const problem = useProblem(problemId);
  const { deleteProblem } = usePostActions(activeGroup.groupData?.id);

  if (!problem || post.type !== 'assignment' || activeGroup.isLoading) {
    return null;
  }

  return (
    <Layout>
      <SEO title={`Problem: ${problem.name} · ${activeGroup.groupData.name}`} />
      <TopNavigationBar />
      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4"
          group={activeGroup.groupData}
          post={post}
        />
      </nav>
      <main
        className="flex-1 relative overflow-y-auto focus:outline-none"
        tabIndex={-1}
      >
        <div className="pb-8 xl:pb-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-screen-xl xl:grid xl:grid-cols-3">
            <div className="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200 dark:border-gray-700">
              <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 dark:border-gray-700">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Problem: {problem.name}
                  </h1>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {post.name}
                  </p>
                </div>
                {activeGroup.showAdminView && (
                  <div className="mt-4 flex space-x-3 md:mt-0">
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          confirm(
                            'Are you sure you want to delete this problem?'
                          )
                        ) {
                          deleteProblem(post, problem.id)
                            .then(() => {
                              navigate(
                                `/groups/${activeGroup.groupData.id}/post/${post.id}`,
                                {
                                  replace: true,
                                }
                              );
                            })
                            .catch(e => toast.error(e.message));
                        }
                      }}
                      className="btn"
                    >
                      <svg
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span>Delete</span>
                    </button>
                    <Link to="edit" className="btn">
                      <svg
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      <span>Edit</span>
                    </Link>
                  </div>
                )}
              </div>
              <aside className="mt-8 xl:hidden">
                <ProblemSidebar post={post} problem={problem} />
              </aside>
              <div className="py-6 xl:pt-8 xl:pb-12">
                <SafeMarkdownRenderer>{problem.body}</SafeMarkdownRenderer>

                {problem.hints.length > 0 && (
                  <>
                    <div className="h-10" />

                    <div>
                      {problem.hints.map(hint => (
                        <Spoiler
                          title={'Hint: ' + hint.name || 'Hint'}
                          key={hint.id}
                        >
                          <div className="pb-4">
                            <SafeMarkdownRenderer>
                              {hint.body}
                            </SafeMarkdownRenderer>
                          </div>
                        </Spoiler>
                      ))}
                    </div>
                  </>
                )}

                {problem.solution &&
                  ((problem.solutionReleaseMode == 'due-date' &&
                    post.dueTimestamp) ||
                    problem.solutionReleaseMode == 'now' ||
                    problem.solutionReleaseMode == 'custom') && (
                    <>
                      <div className="h-10" />
                      <div>
                        <h2 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                          Solution
                        </h2>
                      </div>
                      <div className="h-2" />
                      {problem.solutionReleaseMode == 'now' ||
                      (problem.solutionReleaseMode == 'due-date' &&
                        post.dueTimestamp &&
                        post.dueTimestamp.toMillis() < Date.now()) ||
                      (problem.solutionReleaseMode == 'custom' &&
                        problem.solutionReleaseTimestamp.toMillis() <
                          Date.now()) ? (
                        <Spoiler title={'Show Solution'}>
                          <div className="pb-4">
                            <SafeMarkdownRenderer>
                              {problem.solution}
                            </SafeMarkdownRenderer>
                          </div>
                        </Spoiler>
                      ) : (
                        ((problem.solutionReleaseMode == 'due-date' &&
                          post.dueTimestamp) ||
                          problem.solutionReleaseMode == 'custom') && (
                          <p className="text-gray-600 dark:text-gray-400 italic">
                            The problem solution will be released on{' '}
                            {dayjs(
                              (problem.solutionReleaseMode == 'due-date'
                                ? post.dueTimestamp
                                : problem.solutionReleaseMode == 'custom' &&
                                  problem.solutionReleaseTimestamp
                              ).toDate()
                            ).format('MMMM DD h:mma')}
                            .
                          </p>
                        )
                      )}
                    </>
                  )}
              </div>
              <ProblemSubmission problem={problem} />
            </div>
            <aside className="hidden xl:block xl:pl-8">
              <ProblemSidebar post={post} problem={problem} />
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}

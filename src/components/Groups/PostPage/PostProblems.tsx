import { navigate } from 'gatsby';
import * as React from 'react';
import { useEffect } from 'react';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { useActivePostProblems } from '../../../hooks/groups/useActivePostProblems';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { PostData } from '../../../models/groups/posts';
import ProblemListItem from '../ProblemListItem';

export default function PostProblems({ post }: { post: PostData }) {
  const activeGroup = useActiveGroup();
  const { createNewProblem, updatePost } = usePostActions(
    activeGroup.activeGroupId
  );
  const { problems, isLoading } = useActivePostProblems();

  useEffect(() => {
    updatePost(post.id, {
      pointsPerProblem: Object.keys(problems || {}).reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: problems[cur].points,
        }),
        {}
      ),
    });
  }, [problems]);

  return (
    <section className="mt-8 xl:mt-10">
      <div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="pb-4 flex justify-between space-x-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Problems
              </h2>
              {activeGroup.showAdminView && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Click a problem to edit or delete it.
                </p>
              )}
            </div>
            {activeGroup.showAdminView && (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    createNewProblem(post, problems.length + 1).then(id =>
                      navigate(`problems/${id}/edit`)
                    )
                  }
                  className="btn"
                >
                  Add Problem
                </button>
              </div>
            )}
          </div>
          <div>
            <div className="flow-root">
              <ul className="relative z-0 divide-y divide-gray-200 dark:divide-gray-700 border-b border-gray-200 dark:border-gray-700">
                {!isLoading &&
                  Object.values(problems).map(problem => (
                    <ProblemListItem
                      group={activeGroup.groupData}
                      post={post}
                      problem={problem}
                      key={problem.id}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

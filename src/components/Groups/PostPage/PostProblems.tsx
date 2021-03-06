import * as React from 'react';
import ProblemListItem from '../ProblemListItem';
import { navigate } from 'gatsby';
import { PostData } from '../../../models/groups/posts';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePostActions } from '../../../hooks/groups/usePostActions';

export default function PostProblems({ post }: { post: PostData }) {
  const activeGroup = useActiveGroup();
  const { createNewProblem } = usePostActions(activeGroup.activeGroupId);

  return (
    <section className="mt-8 xl:mt-10">
      <div>
        <div className="divide-y divide-gray-200">
          <div className="pb-4 flex justify-between space-x-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Problems</h2>
              {activeGroup.isUserAdmin && (
                <p className="mt-1 text-sm text-gray-500">
                  Click a problem to edit or delete it.
                </p>
              )}
            </div>
            {activeGroup.isUserAdmin && (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    createNewProblem(post).then(id =>
                      navigate(`problems/${id}/edit`)
                    )
                  }
                  className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Add Problem
                </button>
              </div>
            )}
          </div>
          <div>
            <div className="flow-root">
              <ul className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
                {Object.values(post.problems).map(problem => (
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

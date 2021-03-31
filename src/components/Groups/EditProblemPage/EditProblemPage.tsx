import * as React from 'react';
import { useReducer } from 'react';
import Layout from '../../layout';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import { Link, navigate } from 'gatsby';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePost } from '../../../hooks/groups/usePost';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { useProblem } from '../../../hooks/groups/useProblem';
import MarkdownEditor from '../MarkdownEditor';
import EditProblemHintSection from './EditProblemHintSection';
import { ProblemData } from '../../../models/groups/problem';
import { useNotificationSystem } from '../../../context/NotificationSystemContext';
import ProblemAutocompleteModal from '../../ProblemAutocompleteModal/ProblemAutocompleteModal';
import { AlgoliaProblemInfo, getProblemURL } from '../../../models/problem';

export default function EditProblemPage(props) {
  const { groupId, postId, problemId } = props as {
    path: string;
    use;
    groupId: string;
    postId: string;
    problemId: string;
  };
  const activeGroup = useActiveGroup();
  const post = usePost(postId);
  const originalProblem = useProblem(problemId);
  const [problem, editProblem] = useReducer(
    (oldProblem, updates: Partial<ProblemData>): ProblemData => ({
      ...oldProblem,
      ...updates,
    }),
    originalProblem
  );
  const { saveProblem, deleteProblem } = usePostActions(groupId);
  const notifications = useNotificationSystem();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    if (!problem && originalProblem) editProblem(originalProblem);
  }, [originalProblem, post]);

  const canEditPoints = !activeGroup.groupData.leaderboard[post.id]?.[
    problemId
  ];

  const handleDeleteProblem = () => {
    if (confirm('Are you sure you want to delete this problem?')) {
      deleteProblem(post, problem.id)
        .then(() => {
          navigate('../../../', {
            replace: true,
          });
        })
        .catch(e => notifications.showErrorNotification(e));
    }
  };
  const handleSaveProblem = () => {
    saveProblem(post, problem).then(() => navigate(-1));
  };

  const handleProblemSearchSelect = (problem: AlgoliaProblemInfo) => {
    setIsSearchOpen(false);
    console.log(problem);
    editProblem({
      name: problem.name,
      body: `See [${problem.url}](${problem.url})`,
      solution:
        problem.solution.kind == 'internal'
          ? `See [https://usaco.guide${[
              getProblemURL(problem),
            ]}/solution](https://usaco.guide${[
              getProblemURL(problem),
            ]}/solution)`
          : problem.solution.kind == 'link'
          ? `See [${problem.solution.url}](${problem.solution.url})`
          : problem.solution.kind == 'label'
          ? problem.solution.label
          : problem.solution.kind === 'sketch'
          ? problem.solution.sketch
          : '',
      source: problem.source,
      difficulty: problem.difficulty,
    });
  };

  if (!problem) {
    return (
      <>
        <TopNavigationBar />
        <main className="text-center py-10">
          <p className="font-medium text-2xl">Loading...</p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO title={`Edit ${problem.name} · ${post.name}`} />
      <TopNavigationBar />
      <nav className="flex mt-6 mb-4" aria-label="Breadcrumb">
        <Breadcrumbs
          className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-4"
          group={activeGroup.groupData}
          post={post}
        />
      </nav>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b dark:border-gray-700 xl:pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Edit Problem: {problem.name}
            </h1>
          </div>
          <div className="mt-4 flex space-x-3 md:mt-0">
            <Link to="../" replace className="btn">
              <span>Back</span>
            </Link>
            <button type="submit" onClick={handleSaveProblem} className="btn">
              Save
            </button>
          </div>
        </div>
        <div className="h-6" />
        <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
          <div>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="btn"
                >
                  Import Problem From USACO Guide
                </button>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="problem_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Problem Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="problem_name"
                    id="problem_name"
                    value={problem.name}
                    onChange={e => editProblem({ name: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="problem_order"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Problem Order
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="problem_order"
                    id="problem_order"
                    value={problem.order}
                    onChange={e =>
                      editProblem({ order: parseInt(e.target.value) })
                    }
                    className="input"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Smaller order is listed first. Ties broken by name.
                </p>
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Problem Content
                </label>
                <div className="mt-1">
                  <MarkdownEditor
                    value={problem.body}
                    onChange={value => editProblem({ body: value })}
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Problem Solution
                </label>
                <p className="mt-1 text-sm text-gray-500">
                  If there's a due date on the assignment, this will only be
                  shown after the assignment's due date has passed. Otherwise,
                  it's shown immediately.
                </p>
                <div className="mt-2">
                  <MarkdownEditor
                    value={problem.solution || ''}
                    onChange={value => editProblem({ solution: value })}
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="source"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Problem Source
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="source"
                    id="source"
                    value={problem.source}
                    onChange={e => editProblem({ source: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="points"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Max Problem Points
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="points"
                    id="points"
                    value={problem.points}
                    onChange={e => {
                      if (canEditPoints)
                        editProblem({ points: parseInt(e.target.value) });
                    }}
                    className="input"
                    disabled={!canEditPoints}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {canEditPoints
                    ? "Warning: You won't be able to change point value after a user has submitted code."
                    : "You can't change this problem's maximum points anymore since a user has already submitted this problem."}
                </p>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="difficulty"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Difficulty
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="difficulty"
                    id="difficulty"
                    value={problem.difficulty}
                    onChange={e => editProblem({ difficulty: e.target.value })}
                    className="input"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <EditProblemHintSection
                  problem={problem}
                  onChange={newHints => editProblem({ hints: newHints })}
                />
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleDeleteProblem}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-dark-surface"
              >
                Delete Problem
              </button>
              <button
                type="button"
                onClick={handleSaveProblem}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-dark-surface"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="h-12" />
      </main>

      <ProblemAutocompleteModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onProblemSelect={handleProblemSearchSelect}
      />
    </Layout>
  );
}

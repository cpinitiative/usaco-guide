import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { RouteComponentProps } from '@reach/router';
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  Timestamp,
} from 'firebase/firestore';
import { Link, navigate } from 'gatsby';
import * as React from 'react';
import { useReducer } from 'react';
import Flatpickr from 'react-flatpickr';
import toast from 'react-hot-toast';
import { useActiveGroup } from '../../../hooks/groups/useActiveGroup';
import { usePost } from '../../../hooks/groups/usePost';
import { usePostActions } from '../../../hooks/groups/usePostActions';
import { useProblem } from '../../../hooks/groups/useProblem';
import { useFirebaseApp } from '../../../hooks/useFirebase';
import { GroupProblemData } from '../../../models/groups/problem';
import {
  AlgoliaProblemInfo,
  getProblemURL,
  ProblemInfo,
} from '../../../models/problem';
import ButtonGroup from '../../ButtonGroup';
import Layout from '../../layout';
import ProblemAutocompleteModal from '../../ProblemAutocompleteModal/ProblemAutocompleteModal';
import SEO from '../../seo';
import TopNavigationBar from '../../TopNavigationBar/TopNavigationBar';
import Breadcrumbs from '../Breadcrumbs';
import MarkdownEditor from '../MarkdownEditor';
import EditProblemHintSection from './EditProblemHintSection';

type Props = RouteComponentProps<{
  groupId: string;
  postId: string;
  problemId: string;
}>;

export default function EditProblemPage(props: Props) {
  const { groupId, postId, problemId } = props;
  if (!groupId || !postId || !problemId) {
    throw 'Misplaced EditProblemPage component! This should be under the param URL with :groupId, :postId, and :problemId';
  }
  const firebaseApp = useFirebaseApp();
  const activeGroup = useActiveGroup();
  const post = usePost(postId);
  if (!post) throw new Error('Post not found');
  const originalProblem = useProblem(problemId);
  const [problem, editProblem] = useReducer(
    (oldProblem, updates: Partial<GroupProblemData>): GroupProblemData => {
      const merged = {
        ...oldProblem,
        ...updates,
      };
      if (merged.solutionReleaseMode === 'custom' && !merged.usacoGuideId) {
        merged.usacoGuideId = '';
      }
      return merged as GroupProblemData;
    },
    originalProblem
  );
  const { saveProblem, deleteProblem } = usePostActions(groupId);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    if (!problem && originalProblem) editProblem(originalProblem);
  }, [originalProblem, post]);

  const [canEditPoints, setCanEditPoints] = React.useState(false);
  React.useEffect(() => {
    setCanEditPoints(false);
    if (!firebaseApp || !postId || !problemId) return;
    getDocs(
      query(
        collection(
          getFirestore(firebaseApp),
          `groups/${groupId}/posts/${postId}/problems/${problemId}/submissions`
        ),
        limit(1)
      )
    ).then(resp => {
      if (resp.docs.length === 0) {
        setCanEditPoints(true);
      }
    });
  }, [firebaseApp, postId, problemId]);

  const handleDeleteProblem = () => {
    if (confirm('Are you sure you want to delete this problem?')) {
      deleteProblem(post, problem.id)
        .then(() => {
          navigate('../../../', {
            replace: true,
          });
        })
        .catch(e => toast.error(e.message));
    }
  };
  const handleSaveProblem = () => {
    saveProblem(post, problem).then(() => navigate(-1));
  };

  const handleProblemSearchSelect = (problem: AlgoliaProblemInfo) => {
    setIsSearchOpen(false);
    const problemInfo: ProblemInfo = {
      uniqueId: problem.objectID,
      ...problem,
    };
    editProblem({
      name: problem.name,
      body: `See [${problem.url}](${problem.url})`,
      solution:
        problem.solution?.kind == 'internal'
          ? `See [https://usaco.guide${[
              getProblemURL(problemInfo),
            ]}/solution](https://usaco.guide${[
              getProblemURL(problemInfo),
            ]}/solution)`
          : problem.solution?.kind == 'link'
            ? `See [${problem.solution.url}](${problem.solution.url})`
            : problem.solution?.kind == 'label'
              ? problem.solution.label
              : problem.solution?.kind === 'sketch'
                ? problem.solution.sketch
                : '',

      source: problem.source,
      difficulty: problem.difficulty,
      usacoGuideId: problem.objectID,
    });
  };
  if (post.type !== 'assignment') {
    return null;
  }

  if (!problem) {
    return (
      <>
        <TopNavigationBar />
        <main className="py-10 text-center">
          <p className="text-2xl font-medium">Loading...</p>
        </main>
      </>
    );
  }

  return (
    <Layout>
      <SEO
        title={`Edit ${problem.name} · ${post.name}`}
        image={undefined}
        pathname={undefined}
      />
      <TopNavigationBar />
      <nav className="mt-6 mb-4 flex" aria-label="Breadcrumb">
        <Breadcrumbs
          className="mx-auto w-full max-w-4xl px-4 pt-3 pb-4 sm:px-6 lg:px-8"
          group={activeGroup.groupData!}
          post={post}
        />
      </nav>
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 dark:border-gray-700">
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
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
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
                {problem.usacoGuideId ? (
                  <b className="block text-sm font-medium text-green-700 dark:text-green-200">
                    <CheckIcon
                      className={'mr-2 inline h-5 w-5 text-green-700'}
                    />
                    This problem is linked to a USACO Guide Problem (
                    <button
                      className={'text-blue-700 hover:underline'}
                      onClick={() => editProblem({ usacoGuideId: null })}
                    >
                      Unlink
                    </button>
                    )
                  </b>
                ) : (
                  <b className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    <XIcon className={'mr-1 inline h-4 w-4 text-gray-700'} />
                    This problem is not linked to a USACO Guide Problem. To link
                    this problem to a USACO Guide Problem, import a problem from
                    above.
                  </b>
                )}
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
                <div className="mt-2">
                  <MarkdownEditor
                    value={problem.solution || ''}
                    onChange={value => editProblem({ solution: value })}
                  />
                </div>
              </div>
              {problem.solution && (
                <div className="sm:col-span-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Problem Solution Will Be Shown:
                  </label>

                  <div className="mt-2">
                    <ButtonGroup
                      options={['due-date', 'now', 'never', 'custom']}
                      value={problem.solutionReleaseMode}
                      labelMap={{
                        'due-date': 'After Assignment Due Date',
                        now: 'Immediately',
                        never: 'Never',
                        custom: 'Custom Time',
                      }}
                      onChange={selected =>
                        editProblem({
                          solutionReleaseMode: selected,
                        })
                      }
                    />
                    {problem.solutionReleaseMode == 'due-date' && (
                      <p className="mt-2 text-sm text-gray-500">
                        If a due date is not set, the solution will not be
                        released.
                      </p>
                    )}
                    {problem.solutionReleaseMode === 'custom' && (
                      <Flatpickr
                        placeholder={'Choose a release time'}
                        options={{
                          dateFormat:
                            'l, F J, Y, h:i K ' +
                            [
                              '',
                              ...(
                                'UTC' +
                                // sign is reversed for some reason
                                (new Date().getTimezoneOffset() > 0
                                  ? '-'
                                  : '+') +
                                Math.abs(new Date().getTimezoneOffset()) / 60
                              ).split(''),
                            ].join('\\\\'),
                          enableTime: true,
                        }}
                        value={problem.solutionReleaseTimestamp?.toDate()}
                        onChange={date => {
                          console.log(date);
                          editProblem({
                            solutionReleaseTimestamp: Timestamp.fromDate(
                              date[0]
                            ),
                          });
                        }}
                        className="input mt-2"
                      />
                    )}
                  </div>
                </div>
              )}
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
                      if (canEditPoints) {
                        editProblem({ points: parseInt(e.target.value) });
                      }
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
                className="dark:focus:ring-offset-dark-surface inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Delete Problem
              </button>
              <button
                type="button"
                onClick={handleSaveProblem}
                className="dark:focus:ring-offset-dark-surface inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-hidden"
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

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import * as React from 'react';
import { useContext } from 'react';
import { SECTION_LABELS } from '../../content/ordering';
import { EditorContext } from '../context/EditorContext';
import MarkdownLayoutContext from '../context/MarkdownLayoutContext';
import useProblemSuggestionAction from '../hooks/useProblemSuggestionAction';
import { ModuleInfo } from '../models/module';
import {
  autoGenerateSolutionMetadata,
  generateProblemUniqueId,
  PROBLEM_DIFFICULTY_OPTIONS,
  ProblemDifficulty,
  ProblemMetadata,
  probSources,
} from '../models/problem';
import ButtonGroup from './ButtonGroup';
import Select from './Select';

export default function ProblemSuggestionModal({
  isOpen,
  onClose,
  listName,
}: {
  isOpen: boolean;
  onClose: () => void;
  listName: string;
}): JSX.Element {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  const [difficulty, setDifficulty] = React.useState<ProblemDifficulty | null>(
    null
  );
  const [tags, setTags] = React.useState('');
  const [additionalNotes, setAdditionalNotes] = React.useState('');
  const [source, setSource] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [createdIssueLink, setCreatedIssueLink] = React.useState<string | null>(
    null
  );

  const submitSuggestion = useProblemSuggestionAction();
  const editorActions = useContext(EditorContext);
  const inEditor = editorActions.inEditor;

  // will be null if in editor
  const markdownLayoutInfo = useContext(
    MarkdownLayoutContext
  )?.markdownLayoutInfo;

  React.useEffect(() => {
    if (isOpen) {
      setName('');
      setLink('');
      setDifficulty(null);
      setTags('');
      setAdditionalNotes('');
      setLoading(false);
      setCreatedIssueLink(null);
    }
  }, [isOpen]);

  const handleSubmit = event => {
    event.preventDefault();
    if (!difficulty) {
      alert('Please set the problem difficulty.');
      return;
    }
    if (!source) {
      alert('Please set the problem source.');
      return;
    }

    setLoading(true);

    // is there a better way to do this? this just identifies the table based on the permalink of the first problem of the table.
    const problemTableLink =
      window.location.href.split(/[?#]/)[0] + '#problemlist-' + listName;

    if (editorActions.inEditor) {
      const tagsArr = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);
      let generatedProblemId = '';
      try {
        generatedProblemId = generateProblemUniqueId(source, name, link);
      } catch (e) {
        alert(
          'Error generating problem ID from URL. Check console for details.'
        );
        setLoading(false);
        return;
      }
      const problemToAdd: ProblemMetadata = {
        uniqueId: generatedProblemId,
        name,
        url: link,
        source,
        difficulty,
        isStarred: false,
        tags: tagsArr,
        solutionMetadata: autoGenerateSolutionMetadata(source, name, link) || {
          kind: 'none',
        },
      };
      editorActions.addProblem(listName, problemToAdd);
      setLoading(false);
      onClose();
      return;
    }
    if (!markdownLayoutInfo) throw new Error('No markdown layout info');
    const moduleName = `${
      SECTION_LABELS[(markdownLayoutInfo as ModuleInfo).section]
    } - ${markdownLayoutInfo.title}`;

    submitSuggestion({
      name,
      link,
      difficulty,
      tags,
      additionalNotes,
      problemTableLink,
      problemListName: listName,
      moduleName,
      filePath: (markdownLayoutInfo as ModuleInfo).fileRelativePath,
      section: (markdownLayoutInfo as ModuleInfo).section,
      source,
    })
      .then(response => {
        setCreatedIssueLink(response.data);
      })
      .catch(e => {
        alert('Problem Suggestion Error: ' + e.message);
      })
      .finally(() => setLoading(false));
  };
  const getLabel = source => {
    const map = {
      'Old Bronze': 'Old USACO Bronze (Before Dec 2015)',
      'Old Silver': 'Old USACO Silver (Before Dec 2015)',
      'Old Gold': 'Old USACO Gold (Before Dec 2015)',
      Bronze: 'Recent USACO Bronze (Dec 2015 and Later)',
      Silver: 'Recent USACO Silver (Dec 2015 and Later)',
      Gold: 'Recent USACO Gold (Dec 2015 and Later)',
      Platinum: 'USACO Platinum',
    };
    if (map[source]) return map[source];
    return probSources[source][1];
  };
  const isAdditionalPractice = markdownLayoutInfo?.title.includes(
    'Additional Practice'
  );
  const sourceOptions = [
    ...Object.keys(probSources)
      .map(source => ({
        label: getLabel(source),
        value: source,
      }))
      .filter(
        val =>
          !isAdditionalPractice ||
          (!val.label.includes('Recent USACO') &&
            !val.label.includes('Platinum'))
      ),
    {
      label: 'Other',
      value: 'other',
    },
  ];

  const form = (
    <>
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200">
          Problem Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          {/* Remount component to trigger autofocus when opening modal */}
          {isOpen ? (
            <input
              autoFocus
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
              placeholder="Ex: Steeplechase (Please do NOT include the source)"
              value={name}
              disabled={loading}
              onChange={e => setName(e.target.value)}
              required
            />
          ) : (
            <input
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
              placeholder="Ex: USACO December 2012 Silver - Steeplechase"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              disabled={loading}
            />
          )}
        </div>
      </div>
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200">
          Problem Link
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="url"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
            placeholder="https://..."
            value={link}
            onChange={e => setLink(e.target.value)}
            required
            disabled={loading}
          />
        </div>
      </div>
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200">
          Problem Source
        </label>
        {isAdditionalPractice && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We are not accepting recent USACO problems for additional practice
            modules, as they can already be viewed{' '}
            <a
              href="/general/usaco-monthlies"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline dark:text-blue-300"
            >
              here
            </a>
            .
          </p>
        )}
        <div className="relative mt-2 rounded-md shadow-sm">
          <Select
            options={sourceOptions}
            value={sourceOptions.find(s => s.value == source)}
            onChange={o => setSource(o.value)}
            className={'tw-forms-disable mt-1 block w-full text-sm'}
            isDisabled={loading}
          />
        </div>
      </div>
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200">
          Problem Difficulty
        </label>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Relative to the module
        </p>
        <div className="-mx-1 mt-2 w-full overflow-x-auto px-1 py-1">
          <ButtonGroup
            options={PROBLEM_DIFFICULTY_OPTIONS}
            value={difficulty}
            onChange={x => setDifficulty(x)}
            disabled={loading}
          />
        </div>
      </div>
      <div>
        <label className="block font-medium text-gray-700 dark:text-gray-200">
          {!inEditor && 'Suggested '}Tags (separated with comma and space)
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
            placeholder="DP, Dijkstra"
            value={tags}
            onChange={e => setTags(e.target.value)}
            disabled={loading}
          />
        </div>
      </div>
      {!inEditor && (
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">
            Additional Notes
          </label>
          <div>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              In case there's anything else you want to let us know.
            </p>
            <div className="rounded-md shadow-sm">
              <textarea
                rows={3}
                className="block w-full rounded-md border-gray-300 shadow-sm transition focus:border-blue-500 focus:ring-blue-500 sm:text-sm sm:leading-5 dark:border-gray-700 dark:bg-gray-900"
                value={additionalNotes}
                onChange={e => setAdditionalNotes(e.target.value)}
                placeholder="Optional. Links to solutions or reasons to add the problem would be helpful. Markdown is supported."
                disabled={loading}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );

  const successMessage = (
    <div className="rounded-md bg-green-50 p-4 dark:bg-green-800">
      <div className="flex">
        <div className="shrink-0">
          <svg
            className="h-5 w-5 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="dark:text-dark-high-emphasis text-sm leading-5 font-medium text-green-800">
            Problem Suggestion Submitted!
          </h3>
          <div className="dark:text-dark-high-emphasis mt-2 text-sm leading-5 text-green-700">
            <p>
              Thanks for helping to improve the USACO Guide. You can track the
              progress of your suggestion here:{' '}
              <a
                href={createdIssueLink ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="text-black underline dark:text-white"
              >
                {createdIssueLink}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-30">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in dark:bg-gray-900/75"
      />

      <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center px-4 pt-4 pb-12 text-center sm:block">
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <DialogPanel
            transition
            className="inline-block w-full transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-3xl sm:align-middle data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="dark:bg-dark-surface bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="dark:bg-dark-surface rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-hidden dark:text-gray-500 dark:hover:text-gray-400"
                >
                  <span className="sr-only">Close</span>
                  {/* Heroicon name: x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <h3
                className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                id="modal-headline"
              >
                {inEditor ? 'Add a Problem' : 'Suggest a Problem'}
              </h3>
              {inEditor ? (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  You're in the editor, so the problem will be automatically
                  added to problems.json.
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Help us improve the USACO Guide by suggesting a problem to
                  add!
                  <br />
                  This will be submitted as a public{' '}
                  <a
                    href="https://github.com/cpinitiative/usaco-guide/pulls"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline dark:text-blue-300"
                  >
                    GitHub pull request
                  </a>
                  .
                </p>
              )}
              <div className="mt-6 space-y-6">
                {createdIssueLink ? successMessage : form}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-900">
              {createdIssueLink ? (
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onClose()}
                    className="focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base leading-6 font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-hidden sm:text-sm sm:leading-5"
                  >
                    Done
                  </button>
                </span>
              ) : (
                <>
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="submit"
                      className={
                        'focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-hidden sm:text-sm sm:leading-5 ' +
                        (loading ? 'bg-blue-400' : 'bg-blue-600')
                      }
                      disabled={loading}
                    >
                      {inEditor
                        ? 'Add Problem'
                        : loading
                          ? 'Submitting...'
                          : 'Submit Suggestion'}
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="button"
                      className={
                        'focus:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 px-4 py-2 text-base leading-6 font-medium text-gray-700 shadow-sm transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden sm:text-sm sm:leading-5 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 ' +
                        (loading ? 'bg-gray-100' : 'bg-white')
                      }
                      onClick={() => onClose()}
                      disabled={loading}
                    >
                      Cancel
                    </button>
                  </span>
                </>
              )}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

import { Transition } from '@headlessui/react';
import * as React from 'react';
import { useContext } from 'react';
import Select from 'react-select';
import { SECTION_LABELS } from '../../content/ordering';
import { useDarkMode } from '../context/DarkModeContext';
import { EditorContext } from '../context/EditorContext';
import MarkdownLayoutContext from '../context/MarkdownLayoutContext';
import useProblemSuggestionAction from '../hooks/useProblemSuggestionAction';
import { ModuleInfo } from '../models/module';
import {
  autoGenerateSolutionMetadata,
  generateProblemUniqueId,
  ProblemMetadata,
  PROBLEM_DIFFICULTY_OPTIONS,
  probSources,
} from '../models/problem';
import ButtonGroup from './ButtonGroup';

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
  const [difficulty, setDifficulty] = React.useState(null);
  const [tags, setTags] = React.useState('');
  const [additionalNotes, setAdditionalNotes] = React.useState('');
  const [source, setSource] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [createdIssueLink, setCreatedIssueLink] = React.useState(null);

  const submitSuggestion = useProblemSuggestionAction();
  const editorActions = useContext(EditorContext);
  const inEditor = editorActions.inEditor;

  // will be null if in editor
  const markdownLayoutInfo = useContext(MarkdownLayoutContext)
    ?.markdownLayoutInfo;

  const darkMode = useDarkMode();

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
        console.log(e);
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
      Plat: 'USACO Platinum',
      AC: 'AtCoder',
      CC: 'CodeChef',
      CF: 'Codeforces',
      CSA: 'CS Academy',
      FHC: 'Facebook HackerCup',
      HR: 'HackerRank',
      LC: 'LeetCode',
      POI: 'Polish Olympiad in Informatics',
      SOJ: 'Sphere Online Judge',
      TLX: 'tlx.toki.id',
      YS: 'YS (judge.yosupo.jp)',
    };
    if (map[source]) return map[source];
    return source;
  };
  const sourceOptions = [
    ...Object.keys(probSources).map(source => ({
      label: getLabel(source),
      value: source,
    })),
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
        <div className="mt-2 relative rounded-md shadow-sm">
          {/* Remount component to trigger autofocus when opening modal */}
          {isOpen ? (
            <input
              autoFocus
              type="text"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
              placeholder="Ex: Steeplechase (Please do NOT include the source)"
              value={name}
              disabled={loading}
              onChange={e => setName(e.target.value)}
              required
            />
          ) : (
            <input
              type="text"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
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
        <div className="mt-2 relative rounded-md shadow-sm">
          <input
            type="url"
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
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
        <div className="mt-2 relative rounded-md shadow-sm">
          <Select
            options={sourceOptions}
            value={sourceOptions.find(s => s.value == source)}
            onChange={o => setSource(o.value)}
            className={'mt-1 block w-full text-sm tw-forms-disable'}
            isDisabled={loading}
            styles={
              !darkMode
                ? undefined
                : {
                    control: provided => ({
                      ...provided,
                      backgroundColor: '#111827',
                      borderColor: '#374151',
                    }),
                    menuList: provided => ({
                      ...provided,
                      borderColor: '#374151',
                      borderWidth: '1px',
                      borderRadius: '6px',
                    }),
                    menu: provided => ({
                      ...provided,
                      backgroundColor: '#111827',
                    }),
                    indicatorSeparator: provided => ({
                      ...provided,
                      backgroundColor: '#374151',
                    }),
                    indicatorsContainer: provided => ({
                      ...provided,
                      color: '#374151',
                    }),
                    singleValue: provided => ({
                      ...provided,
                      color: 'rgba(255, 255, 255, 0.87)',
                    }),
                    input: provided => ({
                      ...provided,
                      color: 'rgba(255, 255, 255, 0.87)',
                    }),
                    option: (provided, { isFocused, isSelected }) => ({
                      ...provided,
                      ...(isFocused
                        ? {
                            backgroundColor: '#4d94ff',
                          }
                        : isSelected
                        ? { backgroundColor: '#0063e6' }
                        : {}),
                    }),
                  }
            }
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
        <div className="w-full overflow-x-auto mt-2 py-1 px-1 -mx-1">
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
        <div className="mt-2 relative rounded-md shadow-sm">
          <input
            type="text"
            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
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
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md transition sm:leading-5 dark:bg-gray-900 dark:border-gray-700"
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
    <div className="rounded-md bg-green-50 dark:bg-green-800 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
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
          <h3 className="text-sm leading-5 font-medium text-green-800 dark:text-dark-high-emphasis">
            Problem Suggestion Submitted!
          </h3>
          <div className="mt-2 text-sm leading-5 text-green-700 dark:text-dark-high-emphasis">
            <p>
              Thanks for helping to improve the USACO Guide. You can track the
              progress of your suggestion here:{' '}
              <a
                href={createdIssueLink}
                target="_blank"
                rel="noreferrer"
                className="underline text-black dark:text-white"
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
    <Transition
      show={isOpen}
      className="fixed z-30 inset-0 h-full overflow-y-auto"
    >
      <form
        className="flex items-end justify-center min-h-full pt-4 px-4 pb-12 text-center sm:block"
        onSubmit={handleSubmit}
      >
        <Transition.Child
          className="fixed inset-0 transition-opacity"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75" />
        </Transition.Child>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition.Child
          className="w-full inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white dark:bg-dark-surface px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                onClick={() => onClose()}
                className="bg-white dark:bg-dark-surface rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none"
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
                You're in the editor, so the problem will be automatically added
                to problems.json.
              </p>
            ) : (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Help us improve the USACO Guide by suggesting a problem to add!
                <br />
                This will be submitted as a public{' '}
                <a
                  href="https://github.com/cpinitiative/usaco-guide/pulls"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-300 underline"
                >
                  Github pull request
                </a>
                .
              </p>
            )}
            <div className="mt-6 space-y-6">
              {createdIssueLink ? successMessage : form}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {createdIssueLink ? (
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
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
                      'inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 ' +
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
                      'inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 px-4 py-2 dark:bg-gray-800 text-base leading-6 font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 ' +
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
        </Transition.Child>
      </form>
    </Transition>
  );
}

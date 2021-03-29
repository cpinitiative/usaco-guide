import { ProblemsList } from '../markdown/ProblemsList/ProblemsList';
import * as React from 'react';
import Select from 'react-select';
import { useState } from 'react';
import Transition from './TailwindTransition';
import { Problem, ProblemDifficulty } from '../../models/problem';
import { ProblemWithDivisionInfo } from './PostPage';

export default function ProblemSelect({
  edit,
  problems,
  setProblems,
  searchDivision,
  searchDivisionOptions,
  setSearchDivision,
  searchModule,
  searchModuleOptions,
  setSearchModule,
  postProblems,
  searchResults,
  searchQuery,
  setSearchQuery,
}) {
  const [showCustomProblemModal, setShowCustomProblemModal] = useState(false);
  const [customProblemName, setCustomProblemName] = useState('');
  const [customProblemSource, setCustomProblemSource] = useState('');
  const [customProblemLink, setCustomProblemLink] = useState('');
  const [customProblemDivision, setCustomProblemDivision] = useState('');

  const [customProblemDifficulty, setCustomProblemDifficulty] = useState<
    ProblemDifficulty | 'Select a difficulty'
  >('Select a difficulty');
  const [customProblemStarred, setCustomProblemStarred] = useState(false);
  const [customProblemTags, setCustomProblemTags] = useState('');
  const [customProblemSolution, setCustomProblemSolution] = useState('');
  const [customProblemError, setCustomProblemError] = useState('');
  return (
    <div>
      {edit ? (
        <>
          <h3 className={'text-xl leading-9 font-bold'}>Attached Problems</h3>
          {problems.length === 0 && <p>No Problems Attached Yet</p>}
          <ul className={'list-disc ml-5'}>
            {problems.map((problem, i, arr) => (
              <li key={problem.uniqueID}>
                {problem.division === 'adv'
                  ? 'Advanced'
                  : problem.division.charAt(0).toUpperCase() +
                    problem.division.substring(1)}{' '}
                {problem.moduleTitle} /{' '}
                <a
                  className={
                    'text-blue-600 hover:underline active:text-blue-900 focus:bold'
                  }
                  href={problem.url}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  {problem.name}
                </a>{' '}
                ({problem.difficulty}:{' '}
                <button
                  disabled={problem.difficulty === 'Very Easy'}
                  className={
                    problem.difficulty === 'Very Easy'
                      ? 'text-gray-700 dark:text-gray-200 cursor-text'
                      : 'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
                  }
                  onClick={() =>
                    setProblems(old => {
                      const clone = old.slice();
                      const difficultyMap = [
                        'Very Easy',
                        'Easy',
                        'Normal',
                        'Hard',
                        'Very Hard',
                        'Insane',
                      ];
                      clone[i].difficulty =
                        difficultyMap[
                          difficultyMap.indexOf(problem.difficulty) - 1
                        ];
                      return clone;
                    })
                  }
                >
                  Decrease
                </button>{' '}
                |{' '}
                <button
                  disabled={problem.difficulty === 'Insane'}
                  className={
                    problem.difficulty === 'Insane'
                      ? 'text-gray-700 dark:text-gray-200 cursor-text'
                      : 'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
                  }
                  onClick={() =>
                    setProblems(old => {
                      const clone = old.slice();
                      const difficultyMap = [
                        'Very Easy',
                        'Easy',
                        'Normal',
                        'Hard',
                        'Very Hard',
                        'Insane',
                      ];
                      clone[i].difficulty =
                        difficultyMap[
                          difficultyMap.indexOf(problem.difficulty) + 1
                        ];
                      return clone;
                    })
                  }
                >
                  Increase
                </button>
                ) ({problem.source}) (
                <button
                  disabled={i == 0}
                  className={
                    i == 0
                      ? 'text-gray-700 dark:text-gray-200 cursor-text'
                      : 'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
                  }
                  onClick={() =>
                    setProblems(old => {
                      return [
                        ...old.slice(0, i - 1),
                        old[i],
                        old[i - 1],
                        ...(i === arr.length - 1 ? [] : old.slice(i + 1)),
                      ];
                    })
                  }
                >
                  Move Up
                </button>{' '}
                |{' '}
                <button
                  disabled={i == arr.length - 1}
                  className={
                    i == arr.length - 1
                      ? 'text-gray-700 dark:text-gray-200 cursor-text'
                      : 'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
                  }
                  onClick={() =>
                    setProblems(old => {
                      return [
                        ...old.slice(0, i),
                        old[i + 1],
                        old[i],
                        ...(i === arr.length - 2 ? [] : old.slice(i + 2)),
                      ];
                    })
                  }
                >
                  Move Down
                </button>{' '}
                |{' '}
                <button
                  className={
                    'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
                  }
                  onClick={() =>
                    setProblems(old =>
                      old.filter(p => p.uniqueID !== problem.uniqueID)
                    )
                  }
                >
                  Delete
                </button>
                )
              </li>
            ))}
          </ul>
          <h3 className={'text-xl leading-9 font-bold mt-4'}>
            Add More Problems
          </h3>
          <button
            className={
              'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
            }
            onClick={() => setShowCustomProblemModal(true)}
          >
            Add a custom problem
          </button>
          <div className="mt-2">
            <label className={'font-bold'}>Search:</label>
            <input
              placeholder={'Start typing a problem name...'}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="dark:bg-gray-200 dark:text-gray-800 text-2xl leading-9 flex-1 form-input block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
            />
          </div>
          <div className={'mt-2'}>
            <label className={'font-bold'}>Division:</label>
            <Select
              className={'dark:text-gray-900'}
              options={searchDivisionOptions}
              value={
                searchDivisionOptions.find(o => o.value === searchDivision) ||
                '___any'
              }
              onChange={o => setSearchDivision(o.value)}
            />
          </div>
          <div className={'mt-2'}>
            <label className={'font-bold'}>Module:</label>
            <Select
              className={'dark:text-gray-900'}
              options={searchModuleOptions}
              value={
                searchModuleOptions.find(o => o.value === searchModule) ||
                '___any'
              }
              onChange={o => setSearchModule(o.value)}
            />
          </div>
          {searchResults.length === 0 &&
            (searchDivision !== '___any' || searchQuery) && (
              <p className={'mt-4'}> No Problems Found.</p>
            )}

          <ul className={'list-disc ml-5 mt-4'}>
            {searchResults.map((problem, i, arr) => {
              console.log(problem);
              const added = problems.some(p => p.uniqueID === problem.uniqueID);
              return (
                <li key={problem.uniqueID}>
                  <a
                    className={
                      'text-blue-600 hover:underline active:text-blue-900 focus:bold'
                    }
                    href={problem.url}
                    target={'_blank'}
                    rel={'noopener noreferrer'}
                  >
                    {problem.name}
                  </a>{' '}
                  ({problem.difficulty}) ({problem.source}) (
                  <button
                    className={
                      added
                        ? 'text-gray-800 dark:text-gray-200'
                        : 'text-blue-600 hover:underline active:text-blue-900 focus:bold focus:outline-none active:outline-none'
                    }
                    disabled={added}
                    onClick={() => setProblems(old => [...old, problem])}
                  >
                    {added ? 'Added' : 'Add'}
                  </button>
                  )
                </li>
              );
            })}
          </ul>
          <div className={'mb-24'}>{/* Spacer */}</div>
        </>
      ) : postProblems?.length > 0 ? (
        <ProblemsList problems={postProblems} />
      ) : (
        <p>
          <i>This assignment has no problems.</i>
        </p>
      )}
      <Transition show={showCustomProblemModal}>
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          id={'custom-problem-modal'}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
            </Transition>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <Transition
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="text-left sm:mt-0 dark:text-gray-100">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"
                    id="modal-headline"
                  >
                    Create Custom Problem
                  </h3>
                </div>
                <div className={'w-full mt-3'}>
                  <div>
                    <label className="font-bold">Problem Name</label>
                    <input
                      placeholder={'Enter a name...'}
                      value={customProblemName}
                      onChange={e => setCustomProblemName(e.target.value)}
                      className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className={'mt-3'}>
                    <label className="font-bold">Problem Division</label>
                    <input
                      placeholder={'e.g Silver, Gold, Plat'}
                      value={customProblemDivision}
                      onChange={e => setCustomProblemDivision(e.target.value)}
                      className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className={'mt-3'}>
                    <label className="font-bold">Problem Source</label>
                    <input
                      placeholder={'e.g custom, Silver, Gold, Old Gold'}
                      value={customProblemSource}
                      onChange={e => setCustomProblemSource(e.target.value)}
                      className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className={'mt-3'}>
                    <label className="font-bold">Problem URL</label>
                    <input
                      placeholder={'http:// or https://'}
                      value={customProblemLink}
                      onChange={e => setCustomProblemLink(e.target.value)}
                      className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className={'mt-3'}>
                    <label className="font-bold">
                      Problem Difficulty (Optional)
                    </label>
                    <div>
                      <Select
                        menuPortalTarget={document.body}
                        styles={{
                          menuPortal: base => ({ ...base, zIndex: 9999 }),
                        }}
                        options={[
                          'Select a difficulty...',
                          'Very Easy',
                          'Easy',
                          'Normal',
                          'Hard',
                          'Very Hard',
                          'Insane',
                        ].map(name => ({ label: name, value: name }))}
                        value={{
                          label: customProblemDifficulty,
                          value: customProblemDifficulty,
                        }}
                        onChange={o => setCustomProblemDifficulty(o.value)}
                      />
                    </div>
                  </div>
                  <div className={'mt-3'}>
                    <label className="font-bold">
                      Problem Solution URL (Optional)
                    </label>
                    <input
                      placeholder={'http:// or https://'}
                      value={customProblemSolution}
                      onChange={e => setCustomProblemSolution(e.target.value)}
                      className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                    />
                  </div>
                  <div className={'mt-3'}>
                    <label className="font-bold">Problem Tags (Optional)</label>
                    <input
                      placeholder={'Tag1, Tag2, Tag3'}
                      value={customProblemTags}
                      onChange={e => setCustomProblemTags(e.target.value)}
                      className="form-input dark:text-gray-900 block w-full min-w-0 rounded-md transition sm:text-sm sm:leading-5"
                    />
                  </div>

                  <div className="flex items-start mt-3">
                    <div className="flex items-center h-5">
                      <input
                        id="add-instructor-also-make-admin"
                        checked={customProblemStarred}
                        onChange={e =>
                          setCustomProblemStarred(e.target.checked)
                        }
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label
                        htmlFor="add-instructor-also-make-admin"
                        className="font-medium text-gray-700 dark:text-gray-300"
                      >
                        Star this problem
                      </label>
                    </div>
                  </div>
                  {customProblemError && (
                    <p className="text-red-700 mt-4">{customProblemError}</p>
                  )}
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      onClick={() => {
                        if (
                          !customProblemName ||
                          !customProblemLink ||
                          !customProblemSource ||
                          !customProblemDivision
                        ) {
                          setCustomProblemError(
                            'The problem name, link, division, and source fields are required.'
                          );
                          return;
                        }
                        const problem = new ProblemWithDivisionInfo(
                          customProblemDivision,
                          'Custom Problem',
                          'Custom Problem',
                          customProblemSource,
                          customProblemName,
                          customProblemLink,
                          customProblemDifficulty == 'Select a difficulty'
                            ? 'Not Assigned'
                            : customProblemDifficulty,
                          customProblemStarred,
                          customProblemTags.split(',').map(t => t.trim()),
                          customProblemSolution
                        );
                        console.log(problem);
                        setProblems([...problems, problem]);
                        setShowCustomProblemModal(false);
                      }}
                      className={
                        'inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium text-white shadow-sm sm:text-sm sm:leading-5 bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition ease-in-out duration-150'
                      }
                    >
                      Add Problem
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      onClick={() => setShowCustomProblemModal(false)}
                      type="button"
                      className="bg-white inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </Transition>
    </div>
  );
}

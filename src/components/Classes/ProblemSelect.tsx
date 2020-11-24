import { ProblemsList } from '../markdown/ProblemsList/ProblemsList';
import * as React from 'react';
import Select from 'react-select';

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
}) {
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
                ({problem.difficulty}) ({problem.source}) (
                <button
                  disabled={i === 0}
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
          <div className={'mt-2'}>
            <label className={'bold'}>Division:</label>
            <Select
              className={'dark:text-gray-900'}
              options={searchDivisionOptions}
              value={
                searchDivisionOptions.find(o => o.value === searchDivision) ||
                ''
              }
              onChange={o => setSearchDivision(o.value)}
            />
          </div>
          <div className={'mt-2'}>
            <label className={'bold'}>Module:</label>
            <Select
              className={'dark:text-gray-900'}
              options={searchModuleOptions}
              value={
                searchModuleOptions.find(o => o.value === searchModule) || ''
              }
              onChange={o => setSearchModule(o.value)}
            />
          </div>
          {searchResults.length === 0 && searchModule && (
            <p className={'mt-4'}>This module has no problems.</p>
          )}
          <ul className={'list-disc ml-5 mt-4'}>
            {searchResults.map((problem, i, arr) => {
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
        <ProblemsList problems={postProblems} alwaysHideTags />
      ) : (
        <p>
          <i>This assignment has no problems.</i>
        </p>
      )}
    </div>
  );
}

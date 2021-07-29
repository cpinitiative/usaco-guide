import * as React from 'react';
import { useEffect, useRef } from 'react';

export default function SearchBox({ currentRefinement, refine }): JSX.Element {
  // https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-700 dark:text-blue-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        id="search"
        className="block w-full pl-12 pr-3 py-3 rounded-md bg-blue-100 dark:bg-blue-800 placeholder-gray-900 dark:placeholder-blue-300 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition text-black dark:text-white"
        placeholder="Search"
        type="search"
        autoComplete="off"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}

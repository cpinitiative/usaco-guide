import * as React from "react";
import { useEffect, useRef } from "react";
import { useSearchBox, type UseSearchBoxProps } from "react-instantsearch";
import useDebounce from "../../hooks/useDebounce";

export default function SearchBox(props: UseSearchBoxProps): JSX.Element {
  // https://stackoverflow.com/questions/53314857/how-to-focus-something-on-next-render-with-react-hooks
  const { query, refine: setQuery } = useSearchBox(props);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 200);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setQuery(searchTerm);
    } else {
      setQuery("");
    }
  }, [debouncedSearchTerm]);
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <svg
          className="h-5 w-5 text-gray-700 dark:text-blue-900"
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
        className="focus:shadow-outline-blue block w-full rounded-md bg-blue-100 py-3 pr-3 pl-12 text-black placeholder-gray-900 transition focus:border-blue-300 focus:outline-hidden dark:bg-blue-100 dark:text-blue-900 dark:placeholder-blue-900"
        placeholder="Search"
        type="search"
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        ref={inputRef}
      />
    </div>
  );
}

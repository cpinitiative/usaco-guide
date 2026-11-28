export type ProblemsListPaginationProps = {
  page: number; // zero-indexed
  numPages: number;
  numProblems: number;
  pageSize: number;
  onChange: (page: number) => void;
};

/**
 * Returns the page numbers (zero-indexed) to show, with `null` marking an
 * ellipsis. Always includes the first page, the last page, and the pages
 * adjacent to the current one.
 */
const getPageItems = (page: number, numPages: number): (number | null)[] => {
  const shown = new Set<number>();
  for (const p of [0, page - 1, page, page + 1, numPages - 1]) {
    if (p >= 0 && p < numPages) shown.add(p);
  }
  const sorted = [...shown].sort((a, b) => a - b);
  const items: (number | null)[] = [];
  let prev: number | null = null;
  for (const p of sorted) {
    if (prev !== null && p !== prev + 1) items.push(null);
    items.push(p);
    prev = p;
  }
  return items;
};

const arrowClasses =
  'dark:text-dark-high-emphasis inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm leading-5 font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:disabled:hover:text-gray-400';

export default function ProblemsListPagination({
  page,
  numPages,
  numProblems,
  pageSize,
  onChange,
}: ProblemsListPaginationProps): JSX.Element {
  const first = page * pageSize + 1;
  const last = Math.min((page + 1) * pageSize, numProblems);

  return (
    <nav
      className="mb-4 flex flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 md:px-0"
      aria-label="Problem list pagination"
    >
      <p className="dark:text-dark-med-emphasis text-sm text-gray-500">
        Showing{' '}
        <span className="dark:text-dark-high-emphasis font-medium text-gray-700">
          {first}
        </span>
        –
        <span className="dark:text-dark-high-emphasis font-medium text-gray-700">
          {last}
        </span>{' '}
        of{' '}
        <span className="dark:text-dark-high-emphasis font-medium text-gray-700">
          {numProblems}
        </span>{' '}
        problems
      </p>

      <div className="flex items-center space-x-1">
        <button
          type="button"
          className={arrowClasses}
          onClick={() => onChange(page - 1)}
          disabled={page === 0}
        >
          Prev
        </button>

        {getPageItems(page, numPages).map((p, i) =>
          p === null ? (
            <span
              key={`ellipsis-${i}`}
              className="px-1 text-sm text-gray-500 dark:text-gray-400"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              aria-current={p === page ? 'page' : undefined}
              className={
                'inline-flex items-center rounded-md border px-3 py-1.5 text-sm leading-5 font-medium transition duration-150 ease-in-out focus:outline-hidden ' +
                (p === page
                  ? 'border-blue-600 bg-blue-600 text-white dark:border-blue-700 dark:bg-blue-700'
                  : 'dark:text-dark-high-emphasis border-gray-300 bg-white text-gray-700 hover:text-gray-500 focus:border-blue-300 dark:border-gray-800 dark:bg-gray-900')
              }
              onClick={() => onChange(p)}
            >
              {p + 1}
            </button>
          )
        )}

        <button
          type="button"
          className={arrowClasses}
          onClick={() => onChange(page + 1)}
          disabled={page === numPages - 1}
        >
          Next
        </button>
      </div>
    </nav>
  );
}

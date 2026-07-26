import Link from 'next/link';

/**
 * Global site footer.
 *
 * Rendered by `layout.tsx` so it appears exactly once on every page, below all
 * main content. It was previously embedded inside `TopNavigationBar`, which was
 * architecturally incorrect — a navigation component should not own the footer.
 */
export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            USACO Guide. Content licensed under{' '}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-700 dark:hover:text-gray-200"
            >
              CC BY-NC-SA 4.0
            </a>
            .
          </p>
          <div className="flex gap-4 text-xs">
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

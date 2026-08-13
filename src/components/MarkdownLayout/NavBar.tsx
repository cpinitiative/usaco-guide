import Link from 'next/link';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import {
  useModuleNavigation,
  useModuleNavigationShortcutLabel,
} from '../../hooks/useModuleNavigation';
import { SolutionInfo } from '../../models/solution';
import Breadcrumbs from './Breadcrumbs';

const NavBar = ({ alignNavButtonsRight = true }) => {
  const moduleLayoutInfo = useMarkdownLayout();
  const { markdownLayoutInfo } = moduleLayoutInfo;
  const { sortedModuleLinks, prevModule, nextModule } = useModuleNavigation();
  const shortcutLabel = useModuleNavigationShortcutLabel();

  if (!sortedModuleLinks || markdownLayoutInfo instanceof SolutionInfo) {
    return null;
  }

  const disabledClasses =
    'text-gray-200 pointer-events-none dark:text-dark-disabled-emphasis';
  const activeClasses =
    'text-gray-500 hover:text-gray-800 dark:text-dark-med-emphasis dark:hover:text-dark-high-emphasis transition';
  return (
    <div
      className={`flex ${
        alignNavButtonsRight ? 'sm:justify-between' : 'justify-between'
      }`}
    >
      {alignNavButtonsRight && <div className="flex-1 sm:hidden" />}
      <span className="-ml-4 rounded-md">
        <Link
          href={prevModule === null ? markdownLayoutInfo.url : prevModule.url}
          className={
            'inline-flex items-center rounded-md px-4 py-2 text-sm leading-5 font-medium ' +
            (prevModule === null ? disabledClasses : activeClasses)
          }
          title={
            prevModule === null ? undefined : `Prev (${shortcutLabel.prev})`
          }
        >
          <svg
            className="mr-1 -ml-0.5 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </Link>
      </span>
      <div className="hidden items-center sm:flex">
        <Breadcrumbs />
      </div>
      <span className="-mr-4 rounded-md">
        <Link
          href={nextModule === null ? markdownLayoutInfo.url : nextModule.url}
          className={
            'inline-flex items-center rounded-md px-4 py-2 text-sm leading-5 font-medium ' +
            (nextModule === null ? disabledClasses : activeClasses)
          }
          title={
            nextModule === null ? undefined : `Next (${shortcutLabel.next})`
          }
        >
          Next
          <svg
            className="-mr-0.5 ml-1 h-4 w-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </span>
    </div>
  );
};

export default NavBar;

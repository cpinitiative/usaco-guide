import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import MODULE_ORDERING from '../../../content/ordering';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import { ModuleLinkInfo } from '../../models/module';
import { SolutionInfo } from '../../models/solution';
import Breadcrumbs from './Breadcrumbs';

const NavBar = ({ alignNavButtonsRight = true }) => {
  const moduleLayoutInfo = useContext(MarkdownLayoutContext);
  const { markdownLayoutInfo, sidebarLinks } = moduleLayoutInfo;

  if (markdownLayoutInfo instanceof SolutionInfo) return null;

  const sortedModuleLinks = React.useMemo(() => {
    const links: ModuleLinkInfo[] = [];
    for (const group of MODULE_ORDERING[markdownLayoutInfo.section]) {
      for (const id of group.items) {
        links.push(sidebarLinks.find(x => x.id === id));
      }
    }
    return links;
  }, [sidebarLinks]);
  const moduleIdx = React.useMemo(
    () => sortedModuleLinks.findIndex(x => x.id === markdownLayoutInfo.id),
    [markdownLayoutInfo, sortedModuleLinks]
  );
  const prevModule = moduleIdx === 0 ? null : sortedModuleLinks[moduleIdx - 1];
  const nextModule =
    moduleIdx === sortedModuleLinks.length - 1
      ? null
      : sortedModuleLinks[moduleIdx + 1];

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
          to={prevModule === null ? markdownLayoutInfo.url : prevModule.url}
          className={
            'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md ' +
            (prevModule === null ? disabledClasses : activeClasses)
          }
        >
          <svg
            className="-ml-0.5 mr-1 h-4 w-4"
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
      <div className="hidden sm:flex items-center">
        <Breadcrumbs />
      </div>
      <span className="rounded-md -mr-4">
        <Link
          to={nextModule === null ? markdownLayoutInfo.url : nextModule.url}
          className={
            'inline-flex items-center px-4 py-2 text-sm leading-5 font-medium rounded-md ' +
            (nextModule === null ? disabledClasses : activeClasses)
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

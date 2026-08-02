import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import MODULE_ORDERING from '../../../content/ordering';
import { useMarkdownLayout } from '../../context/MarkdownLayoutContext';
import { MarkdownLayoutSidebarModuleLinkInfo } from '../../models/module';
import { SolutionInfo } from '../../models/solution';
import Breadcrumbs from './Breadcrumbs';

const NavBar = ({ alignNavButtonsRight = true }) => {
  const moduleLayoutInfo = useMarkdownLayout();
  const router = useRouter();
  const { markdownLayoutInfo, sidebarLinks } = moduleLayoutInfo;

  const sortedModuleLinks = React.useMemo(() => {
    if (markdownLayoutInfo instanceof SolutionInfo) return undefined;
    const links: MarkdownLayoutSidebarModuleLinkInfo[] = [];
    for (const group of MODULE_ORDERING[markdownLayoutInfo.section]) {
      for (const id of group.items) {
        const link = sidebarLinks.find(x => x.id === id);
        if (link) links.push(link);
      }
    }
    return links;
  }, [sidebarLinks]);
  const moduleIdx = React.useMemo(
    () => sortedModuleLinks?.findIndex(x => x.id === markdownLayoutInfo.id),
    [markdownLayoutInfo, sortedModuleLinks]
  ) as number;

  const prevModule = !sortedModuleLinks || moduleIdx === 0 ? null : sortedModuleLinks[moduleIdx - 1];
  const nextModule =
    !sortedModuleLinks || moduleIdx === sortedModuleLinks.length - 1
      ? null
      : sortedModuleLinks[moduleIdx + 1];

  React.useEffect(() => {
    if (!sortedModuleLinks || markdownLayoutInfo instanceof SolutionInfo) {
      return;
    }

    const navigationShortcut = (e: KeyboardEvent) => {
      if (!e.ctrlKey) {
        return;
      }

      const target = e.target as HTMLElement;
      const htmlTag = target?.tagName;
      if (
        htmlTag === 'INPUT' ||
        htmlTag === 'TEXTAREA' ||
        target?.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (nextModule) {
          router.push(nextModule.url);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (prevModule) {
          router.push(prevModule.url);
        }
      }
    };

    window.addEventListener('keydown', navigationShortcut);
    return () => window.removeEventListener('keydown', navigationShortcut);
  }, [prevModule, nextModule, router, sortedModuleLinks, markdownLayoutInfo]);

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
          title="Prev (Ctrl + <-)"
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
          title="Next (Ctrl + ->)"
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

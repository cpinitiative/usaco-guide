import { useRouter } from 'next/router';
import * as React from 'react';
import MODULE_ORDERING from '../../content/ordering';
import { useMarkdownLayout } from '../context/MarkdownLayoutContext';
import { MarkdownLayoutSidebarModuleLinkInfo } from '../models/module';
import { SolutionInfo } from '../models/solution';

/**
 * The modules immediately before and after the current one, in section order.
 * Returns nulls on solution pages, which aren't part of the ordering.
 */
export function useModuleNavigation() {
  const { markdownLayoutInfo, sidebarLinks } = useMarkdownLayout();

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
  }, [markdownLayoutInfo, sidebarLinks]);
  const moduleIdx = React.useMemo(
    () => sortedModuleLinks?.findIndex(x => x.id === markdownLayoutInfo.id),
    [markdownLayoutInfo, sortedModuleLinks]
  ) as number;

  const prevModule =
    !sortedModuleLinks || moduleIdx === 0
      ? null
      : sortedModuleLinks[moduleIdx - 1];
  const nextModule =
    !sortedModuleLinks || moduleIdx === sortedModuleLinks.length - 1
      ? null
      : sortedModuleLinks[moduleIdx + 1];

  return { sortedModuleLinks, prevModule, nextModule };
}

/**
 * Ctrl/Cmd + Shift + Left/Right jumps to the previous/next module. Matches the
 * modifiers used by the sidebar toggle shortcut; plain Ctrl + arrow is taken by
 * Mission Control on macOS and Cmd + arrow is browser back/forward.
 *
 * Call this exactly once per page -- NavBar renders multiple times.
 */
export function useModuleNavigationShortcut() {
  const router = useRouter();
  const { prevModule, nextModule } = useModuleNavigation();

  React.useEffect(() => {
    if (!prevModule && !nextModule) return;

    const navigationShortcut = (e: KeyboardEvent) => {
      if (!(e.metaKey || e.ctrlKey) || !e.shiftKey || e.altKey) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const htmlTag = target?.tagName;
      if (
        htmlTag === 'INPUT' ||
        htmlTag === 'TEXTAREA' ||
        htmlTag === 'SELECT' ||
        target?.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowRight' && nextModule) {
        e.preventDefault();
        router.push(nextModule.url);
      } else if (e.key === 'ArrowLeft' && prevModule) {
        e.preventDefault();
        router.push(prevModule.url);
      }
    };

    window.addEventListener('keydown', navigationShortcut);
    return () => window.removeEventListener('keydown', navigationShortcut);
  }, [prevModule, nextModule, router]);
}

/**
 * Whether the shortcut label should use Mac symbols. Resolved after mount so
 * that it doesn't differ between the server and client renders.
 */
export function useModuleNavigationShortcutLabel() {
  const [isMac, setIsMac] = React.useState(false);
  React.useEffect(() => {
    setIsMac(/Mac/i.test(navigator.userAgent));
  }, []);
  return {
    prev: isMac ? '⌘ + ⇧ + ←' : 'Ctrl + Shift + ←',
    next: isMac ? '⌘ + ⇧ + →' : 'Ctrl + Shift + →',
  };
}

import * as React from 'react';
import { ModuleInfo, ModuleLinkInfo } from '../../../models/module';
import ItemLink from './ItemLink';
import Accordion from './Accordion';
import MODULE_ORDERING, { Chapter } from '../../../../content/ordering';
import { useContext } from 'react';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { SolutionInfo } from '../../../models/solution';

export interface NavLinkGroup {
  label: string;
  children: ModuleLinkInfo[];
}

export const SidebarNav = () => {
  const { markdownLayoutInfo, sidebarLinks } = useContext(
    MarkdownLayoutContext
  );

  if (markdownLayoutInfo instanceof SolutionInfo) return null;

  const links: NavLinkGroup[] = React.useMemo(() => {
    return MODULE_ORDERING[markdownLayoutInfo.section].map(
      (category: Chapter) => ({
        label: category.name,
        children: category.items.map(
          moduleID => sidebarLinks.find(link => link.id === moduleID) // lol O(n^2)?
        ),
      })
    );
  }, [markdownLayoutInfo.section, sidebarLinks]);

  return (
    <>
      {links.map(group => (
        <Accordion
          key={group.label}
          label={group.label}
          isActive={
            group.children.findIndex(x => x.id === markdownLayoutInfo.id) !== -1
          }
        >
          {group.children.map(link => (
            <ItemLink key={link.id} link={link} />
          ))}
        </Accordion>
      ))}
    </>
  );
};

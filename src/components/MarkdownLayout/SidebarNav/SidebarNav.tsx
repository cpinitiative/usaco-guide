import * as React from 'react';
import { ModuleInfo, ModuleLinkInfo } from '../../../models/module';
import ItemLink from './ItemLink';
import Accordion from './Accordion';
import MODULE_ORDERING, {
  Chapter,
  SECTION_LABELS,
  SECTIONS,
} from '../../../../content/ordering';
import { useContext, useState } from 'react';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { SolutionInfo } from '../../../models/solution';
import SectionsDropdown from '../../SectionsDropdown';

export interface NavLinkGroup {
  label: string;
  children: ModuleLinkInfo[];
}

export const SidebarNav = () => {
  const { markdownLayoutInfo, sidebarLinks, activeIDs } = useContext(
    MarkdownLayoutContext
  );

  let oriSection =
    markdownLayoutInfo instanceof SolutionInfo
      ? 'general'
      : markdownLayoutInfo.section;
  if (markdownLayoutInfo instanceof SolutionInfo) {
    for (const section in SECTION_LABELS) {
      MODULE_ORDERING[section].forEach((category: Chapter) => {
        category.items.forEach(moduleID => {
          // console.log(moduleID,activeIDs)
          if (activeIDs.includes(moduleID)) {
            oriSection = section;
          }
        });
      });
    }
  }

  const [activeSection, setActiveSection] = useState(oriSection);

  const links: NavLinkGroup[] = React.useMemo(() => {
    return MODULE_ORDERING[activeSection].map((category: Chapter) => ({
      label: category.name,
      children: category.items.map(
        moduleID => sidebarLinks.find(link => link.id === moduleID) // lol O(n^2)?
      ),
    }));
  }, [activeSection, sidebarLinks]);

  return (
    <nav className="flex-grow bg-white dark:bg-dark-surface flex flex-col h-0">
      <div className="flex-shrink-0 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-center my-4">
          <SectionsDropdown
            currentSection={activeSection}
            sidebarNav={true}
            onSelect={s => setActiveSection(s)}
          />
        </div>
        {/*<select*/}
        {/*  className="mt-1 form-select block w-full pl-4 pr-10 py-2 text-base leading-6 border-gray-300 rounded-none border-0 border-t border-b focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"*/}
        {/*  onChange={e => setActiveSection(e.target.value)}*/}
        {/*>*/}
        {/*  {SECTIONS.map(s => (*/}
        {/*    <option selected={activeSection === s} value={s}>*/}
        {/*      {SECTION_LABELS[s]}*/}
        {/*    </option>*/}
        {/*  ))}*/}
        {/*</select>*/}
      </div>
      <div className="flex-1 h-0 overflow-y-auto">
        {links.map(group => (
          <Accordion
            key={group.label}
            label={group.label}
            isActive={
              group.children.findIndex(x => x.id === markdownLayoutInfo.id) !==
              -1
            }
          >
            {group.children.map(link => (
              <ItemLink key={link.id} link={link} />
            ))}
          </Accordion>
        ))}
      </div>
    </nav>
  );
};

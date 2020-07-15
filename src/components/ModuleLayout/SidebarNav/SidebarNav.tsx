import * as React from 'react';
import { ModuleLinkInfo } from '../../../module';
import { Link } from 'gatsby';
import ItemLink from './ItemLink';
import Accordion from './Accordion';
import MODULE_ORDERING, { Category } from '../../../../content/ordering';
import { useContext } from 'react';
import ModuleLayoutContext from '../../../context/ModuleLayoutContext';

export interface NavLinkGroup {
  label: string;
  children: ModuleLinkInfo[];
}

export const SidebarNav = () => {
  const { module, moduleLinks } = useContext(ModuleLayoutContext);

  const links: NavLinkGroup[] = React.useMemo(() => {
    return MODULE_ORDERING[module.division].map((category: Category) => ({
      label: category.name,
      children: category.items.map(
        moduleID => moduleLinks.find(link => link.id === moduleID) // lol O(n^2)?
      ),
    }));
  }, [module.division, moduleLinks]);

  return (
    <>
      {links.map(group => (
        <Accordion
          key={group.label}
          label={group.label}
          isActive={group.children.findIndex(x => x.id === module.id) !== -1}
        >
          {group.children.map(link => (
            <ItemLink
              key={link.id}
              link={link}
              isActive={link.id === module.id}
            />
          ))}
        </Accordion>
      ))}
    </>
  );
};

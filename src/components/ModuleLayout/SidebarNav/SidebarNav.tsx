import * as React from 'react';
import { ModuleLinkInfo } from '../../../module';
import { Link } from 'gatsby';
import ItemLink from './ItemLink';
import Accordion from './Accordion';

export interface NavLinkGroup {
  label: string;
  children: NavLinkItem[];
}

export type NavLinkItem = ModuleLinkInfo | NavLinkGroup;

export const isNavLinkGroup = (x: NavLinkItem): x is NavLinkGroup =>
  x.hasOwnProperty('label');

export const SidebarNav = ({
  links,
  activeLink,
}: {
  links: NavLinkItem[];
  activeLink: ModuleLinkInfo;
}) => {
  const renderLink = (link: NavLinkItem) => {
    if (link instanceof ModuleLinkInfo) {
      return (
        <ItemLink
          key={link.url}
          link={link}
          isActive={link.id === activeLink.id}
        />
      );
    }
    return (
      <Accordion
        key={link.label}
        label={link.label}
        isActive={
          link.children.findIndex(
            x => x instanceof ModuleLinkInfo && x.id === activeLink.id
          ) !== -1
        }
      >
        {link.children.map(renderLink)}
      </Accordion>
    );
  };
  return <>{links.map(renderLink)}</>;
};

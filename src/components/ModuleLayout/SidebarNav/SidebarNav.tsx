import * as React from 'react';
import { ModuleLinkInfo } from '../../../module';
import { Link } from 'gatsby';
import ItemLink from './ItemLink';

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
        <ItemLink key={link.url} link={link} isActive={link === activeLink} />
      );
    }
    return (
      <div className="bg-gray-100 mb-4" key={link.label}>
        <div
          className={`flex items-center px-6 py-3 text-sm leading-5 font-medium text-gray-600 border-b border-gray-200`}
        >
          {link.label}
        </div>
        {link.children.map(renderLink)}
      </div>
    );
  };
  return <>{links.map(renderLink)}</>;
};

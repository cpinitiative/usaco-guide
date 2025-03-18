import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import tw, { TwStyle } from 'twin.macro';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useUserProgressOnModules } from '../../../context/UserDataContext/properties/userProgress';
import {
  MarkdownLayoutSidebarModuleLinkInfo,
  ModuleLinkInfo,
} from '../../../models/module';
import clsx from 'clsx';

export const LinkWithProgress = styled.span<{
  dotColorStyle: TwStyle;
  lineColorStyle: TwStyle;
  darkDotColorStyle: TwStyle;
  darkLineColorStyle: TwStyle;
}>`
  ${tw`block relative`}

  &::after {
    content: '';
    left: 24px;
    top: 18px;
    height: 8px;
    width: 8px;
    position: absolute;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &::after {
    border-radius: 100%;
    ${props => props.dotColorStyle};
  }

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    display: block;
    left: 27px;
    top: 0;
    bottom: 0;
    ${props => props.lineColorStyle};
  }

  // Really weird bug: Single ampersand breaks stuff; double ampersand works
  // This might be a styled-component issue?????
  .dark &&::after {
    ${props => props.darkDotColorStyle};
  }
  .dark &&::before {
    ${props => props.darkLineColorStyle};
  }

  &:first-of-type::before {
    top: 22px;
  }

  &:last-of-type::before {
    bottom: calc(100% - 22px);
  }
`;

const ItemLink = ({
  link,
}: {
  link: MarkdownLayoutSidebarModuleLinkInfo | ModuleLinkInfo;
}) => {
  const { activeIDs } = useContext(MarkdownLayoutContext)!;
  const isActive = activeIDs.includes(link.id);
  const itemRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ block: `center` });
    }
  }, [isActive]);

  const userProgressOnModules = useUserProgressOnModules();
  const progress = userProgressOnModules[link.id] || 'Not Started';

  let linkWithProgressColorClass = 'link-with-progress-container--default';
  if (isActive) {
    linkWithProgressColorClass = 'link-with-progress-container--active';
  }

  if (progress === 'Reading') {
    linkWithProgressColorClass = 'link-with-progress-container--reading';
  } else if (progress === 'Practicing') {
    linkWithProgressColorClass = 'link-with-progress-container--practicing';
  } else if (progress === 'Complete') {
    linkWithProgressColorClass = 'link-with-progress-container--complete';
  } else if (progress === 'Skipped') {
    linkWithProgressColorClass = 'link-with-progress-container--skipped';
  } else if (progress === 'Ignored') {
    linkWithProgressColorClass = 'link-with-progress-container--ignored';
  }

  return (
    <span
      className={`link-with-progress-container ${linkWithProgressColorClass}`}
    >
      <Link
        to={`${link.url}${
          typeof location !== 'undefined' ? location.search : ''
        }`}
      >
        <span
          className={clsx(
            `link-with-progress-link`,
            isActive && 'link-with-progress-link--active font-medium'
          )}
          ref={itemRef}
        >
          {link.title}
        </span>
      </Link>
    </span>
  );
};

export default ItemLink;

import * as React from 'react';
import { Link } from 'gatsby';
import { ModuleLinkInfo } from '../../../module';
import styled from 'styled-components';
import tw from 'twin.macro';

const LinkWithProgress = styled(Link)`
  ${tw`block relative`}

  &::after {
    content: '';
    left: 24px;
    top: 18px;
    height: 8px;
    width: 8px;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &::after {
    border-radius: 100%;
    ${tw`bg-gray-200`}
  }

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    display: block;
    left: 27px;
    top: 0;
    bottom: 0;
    ${({ isActive }) => (isActive ? tw`bg-blue-700` : tw`bg-gray-200`)};
  }

  &:first-of-type::before {
    top: 22px;
  }

  &:last-of-type::before {
    bottom: calc(100% - 22px);
  }
`;

const StyledLink = styled.span`
  ${tw`focus:outline-none transition ease-in-out duration-150 hover:text-blue-700 hover:bg-blue-50 focus:bg-blue-100 flex items-center pl-12 pr-4 py-3 text-sm leading-5`}

  ${({ isActive }) =>
    isActive
      ? tw`text-blue-700 font-semibold`
      : tw`text-gray-600`}
  

  &::before {
    content: '';
    left: 24px;
    top: 18px;
    height: 8px;
    width: 8px;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &::before {
    transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(0.1)')};
    border-radius: 100%;
    ${({ isActive }) => (isActive ? tw`bg-blue-600` : tw`bg-gray-200`)}
    z-index: 1;
  }

  &:hover {
    &::before {
      transform: scale(1);
      ${tw`bg-blue-600`}
    }
  }
`;

const ItemLink = ({
  link,
  isActive,
}: {
  link: ModuleLinkInfo;
  isActive: boolean;
}) => {
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (isActive) {
      itemRef.current.scrollIntoView({ block: `center` });
    }
  }, [isActive]);

  return (
    <LinkWithProgress isActive={isActive} to={link.url} key={link.url}>
      <StyledLink isActive={isActive} ref={itemRef}>
        {link.title}
      </StyledLink>
    </LinkWithProgress>
  );
};

export default ItemLink;

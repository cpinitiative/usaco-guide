import { Link } from 'gatsby';
import tw from 'twin.macro';
import * as React from 'react';
import styled from 'styled-components';

const LinkWithProgress = styled.span`
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

  &:first-of-type::before {
    top: 22px;
  }

  &:last-of-type::before {
    bottom: calc(100% - 22px);
  }
`;

const StyledLink = styled.span`
  ${tw`focus:outline-none transition ease-in-out duration-150 hover:text-blue-700 hover:bg-blue-50 focus:bg-blue-100 flex items-center pl-12 pr-4 py-3 text-sm leading-5`}

  ${({ textStyle }) => textStyle}
  

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
    z-index: 1;
    ${({ dotColorStyle }) => dotColorStyle}
  }

  &:hover {
    &::before {
      transform: scale(1);
      ${tw`bg-blue-600`}
    }
  }
`;

export default function SidebarLink({
  lineColorStyle,
  dotColorStyle,
  textStyle,
  linkRef = null,
  isActive,
  url,
  children,
}) {
  return (
    <LinkWithProgress
      lineColorStyle={lineColorStyle}
      dotColorStyle={dotColorStyle}
    >
      <Link to={url}>
        <StyledLink isActive={isActive} ref={linkRef} textStyle={textStyle}>
          {children}
        </StyledLink>
      </Link>
    </LinkWithProgress>
  );
}

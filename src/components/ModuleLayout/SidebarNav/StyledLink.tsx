import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';

// Almost entirely copy pasted from https://gatsbyjs.org/ oops

const StyledLink = styled.span`
  ${tw`focus:outline-none transition ease-in-out duration-150 hover:text-blue-700 focus:bg-blue-100 relative flex items-center px-6 py-3 text-sm leading-5`}

  ${({ isActive }) =>
    isActive
      ? tw`text-blue-700 font-semibold`
      : tw`text-gray-600`}
  

      &::before,
      &::after {
    content: '';
    left: 0.5rem;
    top: 1.3em;
    height: 8px;
    width: 8px;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  ${props =>
    props.isActive &&
    css`
      &::after {
        transform: ${props =>
          props.isActive ? 'translateX(-92px)' : 'translateX(-100px)'};
        width: 100px;
        border-radius: 4px;
        ${tw`bg-blue-600`}
      }
    `}

  &::before {
    transform: scale(0.1);
    border-radius: 100%;
  }

  &:hover {
    &::before {
      transform: scale(1);
      ${tw`bg-blue-600`}
    }
  }
`;

export default StyledLink;

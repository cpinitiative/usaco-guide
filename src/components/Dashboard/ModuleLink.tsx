import * as React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { ModuleLinkInfo } from '../../models/module';
import { useContext } from 'react';
import ModuleLayoutContext from '../../context/ModuleLayoutContext';
import UserDataContext from '../../context/UserDataContext';
import { Link } from 'gatsby';

const LinkWithProgress = styled.span`
  ${tw`block relative`}

  &::after {
    content: '';
    //left: calc(-3rem - 12px); // -(3rem padding plus half of width)
    //top: calc(1.5rem - 12px); // half of (1.5 + 1.5padding) rem minus half of height
    //height: 24px;
    //width: 24px;
    ${({ small }) => css`
      left: calc(-1.75rem - ${
        small ? '8px' : '10px'
      }); // -(3rem padding plus half of width)
      // prettier-ignore
      top: calc(1.5rem - ${
        small ? '8px' : '10px'
      }); // half of (1.5 + 1.5padding) rem minus half of height
      height: ${small ? '16px' : '20px'};
      width: ${small ? '16px' : '20px'};
    `}

    @media (min-width: 768px) {
      ${({ small }) => css`
      // prettier-ignore
      left: calc(-3rem - ${
        small ? '8px' : '10px'
      }); // -(3rem padding plus half of width)
    `}
    }

    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &::after {
    border-radius: 100%;

    ${props => props.dotColorStyle}
    ${({ small }) => small && tw`border-2 border-gray-200 bg-white`}
  }

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    display: block;
    left: calc(-1.75rem - 1px);
    @media (min-width: 768px) {
      left: calc(-3rem - 1px); // -(3rem padding plus half of width)
    }
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

const StyledLink = styled.div`
  ${tw`focus:outline-none transition ease-in-out duration-150 text-gray-800 hover:text-blue-700 text-xl leading-6 py-3`}

  &::before {
    content: '';
    left: calc(-1.75rem - 11px);
    @media (min-width: 768px) {
      left: calc(-3rem - 11px); // -(3rem padding plus half of width)
    }
    top: calc(1.5rem - 11px); // half of 1.5rem minus half of height
    height: 22px;
    width: 22px;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &::before {
    transform: ${({ showDot }) => (showDot ? 'scale(1)' : 'scale(0.1)')};
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

const ModuleLink = ({ link }: { link: ModuleLinkInfo }) => {
  const { userProgressOnModules } = useContext(UserDataContext);
  const progress = userProgressOnModules[link.id] || 'Not Started';

  let lineColorStyle = tw`bg-gray-200`;
  let dotColorStyle = tw`bg-white`;

  if (progress === 'Reading') {
    lineColorStyle = tw`bg-yellow-400`;
    dotColorStyle = tw`bg-yellow-400`;
  } else if (progress === 'Practicing') {
    lineColorStyle = tw`bg-orange-400`;
    dotColorStyle = tw`bg-orange-400`;
  } else if (progress === 'Complete') {
    lineColorStyle = tw`bg-green-400`;
    dotColorStyle = tw`bg-green-400`;
  } else if (progress === 'Skipped') {
    lineColorStyle = tw`bg-blue-300`;
    dotColorStyle = tw`bg-blue-300`;
  } else if (progress === 'Ignored') {
    lineColorStyle = tw`bg-gray-100`;
    dotColorStyle = tw`bg-gray-100`;
  }

  return (
    <LinkWithProgress
      lineColorStyle={lineColorStyle}
      dotColorStyle={dotColorStyle}
      small={progress === 'Not Started' || progress === 'Ignored'}
    >
      <Link to={link.url}>
        <StyledLink
          dotColorStyle={dotColorStyle === tw`bg-gray-200`}
          className="group"
        >
          <p
            className={`${
              progress === 'Ignored' ? 'text-gray-400' : 'text-gray-600'
            } group-hover:text-blue-800 transition duration-150 ease-in-out mb-1`}
          >
            {link.title}
          </p>
          <p className="block text-sm text-gray-400 group-hover:text-blue-700 transition duration-150 ease-in-out leading-5">
            {link.description}
          </p>
        </StyledLink>
      </Link>
    </LinkWithProgress>
  );
};

export default ModuleLink;

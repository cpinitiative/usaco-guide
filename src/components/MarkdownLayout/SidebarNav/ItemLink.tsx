import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import UserDataContext from '../../../context/UserDataContext/UserDataContext';
import { ModuleLinkInfo } from '../../../models/module';

export const LinkWithProgress = styled.span`
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

const StyledLink = styled.span`
  ${tw`focus:outline-none transition ease-in-out duration-150 hover:text-blue-700 hover:bg-blue-50 focus:bg-blue-100 flex items-center pl-12 pr-4 py-3 text-sm leading-5`}

  ${({ $textStyle }) => $textStyle}
  .dark && {
    ${tw`hover:bg-gray-900 hover:text-dark-high-emphasis focus:bg-gray-800`}
    ${({ $darkTextStyle }) => $darkTextStyle}
  }

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
    transform: ${({ $isActive }) => ($isActive ? 'scale(1)' : 'scale(0.1)')};
    border-radius: 100%;
    z-index: 1;
  }

  &:hover {
    &::before {
      transform: scale(1);
      ${tw`bg-blue-600`}
    }
  }

  .dark &:hover {
    &::before {
      ${tw`bg-gray-400`}
    }
  }
`;

const ItemLink = ({ link }: { link: ModuleLinkInfo }) => {
  const { activeIDs } = useContext(MarkdownLayoutContext);
  // const isActive = markdownLayoutInfo.id === link.id;
  // console.log("WHOOPS",activeIDs)
  const isActive = activeIDs.includes(link.id);
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (isActive) {
      itemRef.current.scrollIntoView({ block: `center` });
    }
  }, [isActive]);

  const { userProgressOnModules } = useContext(UserDataContext);
  const progress = userProgressOnModules[link.id] || 'Not Started';

  let lineColorStyle = tw`bg-gray-200`;
  let dotColorStyle = tw`bg-gray-200`;
  let activeTextStyle = tw`text-blue-700 font-medium`;
  let darkLineColorStyle = tw`bg-gray-700`;
  let darkDotColorStyle = tw`bg-gray-700`;
  let darkActiveTextStyle = tw`text-blue-400 font-medium`;

  if (isActive) {
    lineColorStyle = tw`bg-blue-700`;
    dotColorStyle = tw`bg-blue-700`;
    darkLineColorStyle = tw`bg-blue-400`;
    darkDotColorStyle = tw`bg-blue-400`;
  }

  if (progress === 'Reading') {
    lineColorStyle = tw`bg-yellow-300`;
    dotColorStyle = tw`bg-yellow-300`;
    darkLineColorStyle = tw`bg-yellow-400`;
    darkDotColorStyle = tw`bg-yellow-400`;
    activeTextStyle = tw`text-yellow-700 font-medium`;
    darkActiveTextStyle = tw`text-yellow-400 font-medium`;
  } else if (progress === 'Practicing') {
    lineColorStyle = tw`bg-orange-400`;
    dotColorStyle = tw`bg-orange-400`;
    darkLineColorStyle = tw`bg-orange-500`;
    darkDotColorStyle = tw`bg-orange-500`;
    activeTextStyle = tw`text-orange-700 font-medium`;
    darkActiveTextStyle = tw`text-orange-400 font-medium`;
  } else if (progress === 'Complete') {
    lineColorStyle = tw`bg-green-400`;
    dotColorStyle = tw`bg-green-400`;
    darkLineColorStyle = tw`bg-green-400`;
    darkDotColorStyle = tw`bg-green-400`;
    activeTextStyle = tw`text-green-700 font-medium`;
    darkActiveTextStyle = tw`text-green-400 font-medium`;
  } else if (progress === 'Skipped') {
    lineColorStyle = tw`bg-blue-300`;
    dotColorStyle = tw`bg-blue-300`;
    darkLineColorStyle = tw`bg-blue-700`;
    darkDotColorStyle = tw`bg-blue-700`;
    activeTextStyle = tw`text-blue-700 font-medium`;
    darkActiveTextStyle = tw`text-blue-400 font-medium`;
  } else if (progress === 'Ignored') {
    lineColorStyle = tw`bg-gray-100`;
    dotColorStyle = tw`bg-gray-100`;
    darkLineColorStyle = tw`bg-gray-800`;
    darkDotColorStyle = tw`bg-gray-800`;
    activeTextStyle = tw`text-gray-400 font-medium`;
    darkActiveTextStyle = tw`text-gray-500 font-medium`;
  }

  return (
    <LinkWithProgress
      lineColorStyle={lineColorStyle}
      dotColorStyle={dotColorStyle}
      darkLineColorStyle={darkLineColorStyle}
      darkDotColorStyle={darkDotColorStyle}
    >
      <Link to={link.url}>
        <StyledLink
          $isActive={isActive}
          ref={itemRef}
          $textStyle={
            isActive
              ? activeTextStyle
              : progress === 'Ignored'
              ? tw`text-gray-400`
              : tw`text-gray-600`
          }
          $darkTextStyle={
            isActive
              ? darkActiveTextStyle
              : progress === 'Ignored'
              ? tw`text-gray-600`
              : tw`text-dark-med-emphasis`
          }
        >
          {link.title}
        </StyledLink>
      </Link>
    </LinkWithProgress>
  );
};

export default ItemLink;

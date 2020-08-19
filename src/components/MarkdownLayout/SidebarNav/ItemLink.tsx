import * as React from 'react';
import { Link } from 'gatsby';
import { ModuleLinkInfo } from '../../../models/module';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useContext } from 'react';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import UserDataContext from '../../../context/UserDataContext';

const LinkWithProgress = styled.span`
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

  .mode-dark &::after {
    ${tw`bg-gray-700`}
  }
  .mode-dark &::before {
    ${tw`bg-gray-700`}
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

  .mode-dark & {
    ${tw`hover:bg-gray-900 hover:text-dark-high-emphasis focus:bg-gray-800`}
  }

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

  .mode-dark &:hover {
    &::before {
      ${tw`bg-gray-400`}
    }
  }
`;

const ItemLink = ({ link }: { link: ModuleLinkInfo }) => {
  const { markdownLayoutInfo } = useContext(MarkdownLayoutContext);
  const isActive = markdownLayoutInfo.id === link.id;
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

  if (isActive) {
    lineColorStyle = tw`bg-blue-700`;
    dotColorStyle = tw`bg-blue-700`;
  }

  if (progress === 'Reading') {
    lineColorStyle = tw`bg-yellow-300`;
    dotColorStyle = tw`bg-yellow-300`;
    activeTextStyle = tw`text-yellow-700 font-medium`;
  } else if (progress === 'Practicing') {
    lineColorStyle = tw`bg-orange-400`;
    dotColorStyle = tw`bg-orange-400`;
    activeTextStyle = tw`text-orange-700 font-medium`;
  } else if (progress === 'Complete') {
    lineColorStyle = tw`bg-green-400`;
    dotColorStyle = tw`bg-green-400`;
    activeTextStyle = tw`text-green-700 font-medium`;
  } else if (progress === 'Skipped') {
    lineColorStyle = tw`bg-blue-300`;
    dotColorStyle = tw`bg-blue-300`;
    activeTextStyle = tw`text-blue-700 font-medium`;
  } else if (progress === 'Ignored') {
    lineColorStyle = tw`bg-gray-100`;
    dotColorStyle = tw`bg-gray-100`;
    activeTextStyle = tw`text-gray-400 font-medium`;
  }

  return (
    <LinkWithProgress
      lineColorStyle={lineColorStyle}
      dotColorStyle={dotColorStyle}
    >
      <Link to={link.url}>
        <StyledLink
          isActive={isActive}
          ref={itemRef}
          dotColorStyle={dotColorStyle === tw`bg-gray-200`}
          textStyle={
            isActive
              ? activeTextStyle
              : progress === 'Ignored'
              ? tw`text-gray-400`
              : tw`text-gray-600`
          }
          className="dark:text-dark-med-emphasis"
        >
          {link.title}
        </StyledLink>
      </Link>
    </LinkWithProgress>
  );
};

export default ItemLink;

import * as React from 'react';
import { Link } from 'gatsby';
import { ModuleLinkInfo } from '../../../module';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useContext } from 'react';
import ModuleLayoutContext from '../../../context/ModuleLayoutContext';
import UserSettingsContext from '../../../context/UserSettingsContext';

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
    z-index: 1;
    ${({ isActive }) => (isActive ? tw`bg-blue-600` : tw`bg-gray-200`)}
  }

  &:hover {
    &::before {
      transform: scale(1);
      ${tw`bg-blue-600`}
    }
  }
`;

const ItemLink = ({ link }: { link: ModuleLinkInfo }) => {
  const { module } = useContext(ModuleLayoutContext);
  const isActive = module.id === link.id;
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (isActive) {
      itemRef.current.scrollIntoView({ block: `center` });
    }
  }, [isActive]);

  const { userProgress } = useContext(UserSettingsContext);
  const progress = userProgress[link.id] || 'Not Started';

  let lineColorStyle = tw`bg-gray-200`;
  let dotColorStyle = tw`bg-gray-200`;

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
  }

  if (isActive) {
    lineColorStyle = tw`bg-blue-700`;
  }

  return (
    <LinkWithProgress
      lineColorStyle={lineColorStyle}
      dotColorStyle={dotColorStyle}
    >
      <Link to={link.url}>
        <StyledLink isActive={isActive} ref={itemRef}>
          {link.title}
        </StyledLink>
      </Link>
    </LinkWithProgress>
  );
};

export default ItemLink;

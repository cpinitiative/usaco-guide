import * as React from 'react';
import { Link } from 'gatsby';
import { ModuleLinkInfo } from '../../../models/module';
import tw from 'twin.macro';
import { useContext } from 'react';
import ModuleLayoutContext from '../../../context/ModuleLayoutContext';
import UserDataContext from '../../../context/UserDataContext';
import SidebarLink from '../../Sidebar/SidebarLink';

const ItemLink = ({ link }: { link: ModuleLinkInfo }) => {
  const { module } = useContext(ModuleLayoutContext);
  const isActive = module.id === link.id;
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
    lineColorStyle = tw`bg-yellow-400`;
    dotColorStyle = tw`bg-yellow-400`;
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
  }

  return (
    <SidebarLink
      isActive={isActive}
      textStyle={isActive ? activeTextStyle : tw`text-gray-600`}
      dotColorStyle={dotColorStyle}
      lineColorStyle={lineColorStyle}
      linkRef={itemRef}
      url={link.url}
    >
      {link.title}
    </SidebarLink>
  );
};

export default ItemLink;

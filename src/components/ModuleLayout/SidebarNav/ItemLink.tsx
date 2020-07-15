import * as React from 'react';
import { Link } from 'gatsby';
import { ModuleLinkInfo } from '../../../module';

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
      console.log(itemRef);
      itemRef.current.scrollIntoView({ block: `center` });
    }
  }, [isActive]);

  return (
    <Link
      to={link.url}
      className={`flex items-center px-6 py-3 text-sm leading-5 text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150`}
      key={link.url}
      ref={itemRef}
    >
      {link.title}
    </Link>
  );
};

export default ItemLink;

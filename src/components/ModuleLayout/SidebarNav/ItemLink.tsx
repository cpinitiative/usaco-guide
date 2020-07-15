import * as React from 'react';
import { Link } from 'gatsby';
import { ModuleLinkInfo } from '../../../module';
import StyledLink from './StyledLink';

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
    <Link to={link.url} key={link.url}>
      <StyledLink isActive={isActive} ref={itemRef}>
        {link.title}
      </StyledLink>
    </Link>
  );
};

export default ItemLink;

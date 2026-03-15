import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';
import { useContext } from 'react';
import MarkdownLayoutContext from '../../../context/MarkdownLayoutContext';
import { useUserProgressOnModules } from '../../../context/UserDataContext/properties/userProgress';
import {
  MarkdownLayoutSidebarModuleLinkInfo,
  ModuleLinkInfo,
} from '../../../models/module';
import { ClientOnly } from '../../ClientOnly';

const ItemLink = ({
  link,
}: {
  link: MarkdownLayoutSidebarModuleLinkInfo | ModuleLinkInfo;
}) => {
  const { activeIDs } = useContext(MarkdownLayoutContext)!;
  const isActive = activeIDs.includes(link.id);
  const itemRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({ block: `center` });
    }
  }, [isActive]);

  const userProgressOnModules = useUserProgressOnModules();
  const progress = userProgressOnModules[link.id] || 'Not Started';

  let linkWithProgressColorClass = 'link-with-progress-container--default';
  if (isActive) {
    linkWithProgressColorClass = 'link-with-progress-container--active';
  }

  if (progress === 'Reading') {
    linkWithProgressColorClass = 'link-with-progress-container--reading';
  } else if (progress === 'Practicing') {
    linkWithProgressColorClass = 'link-with-progress-container--practicing';
  } else if (progress === 'Complete') {
    linkWithProgressColorClass = 'link-with-progress-container--complete';
  } else if (progress === 'Skipped') {
    linkWithProgressColorClass = 'link-with-progress-container--skipped';
  } else if (progress === 'Ignored') {
    linkWithProgressColorClass = 'link-with-progress-container--ignored';
  }

  return (
    <ClientOnly>
      <span
        className={`link-with-progress-container ${linkWithProgressColorClass}`}
      >
        <Link
          href={`${link.url}${
            typeof location !== 'undefined' ? location.search : ''
          }`}
        >
          <span
            className={clsx(
              'link-with-progress-link dark:hover:text-dark-high-emphasis flex items-center py-3 pr-4 pl-12 text-sm leading-5 hover:bg-blue-50 focus:bg-blue-100 dark:hover:bg-gray-900 dark:focus:bg-gray-800',
              isActive && 'link-with-progress-link--active font-medium'
            )}
            ref={itemRef}
          >
            {link.title}
          </span>
        </Link>
      </span>
    </ClientOnly>
  );
};

export default ItemLink;

import Tippy from '@tippyjs/react';
import * as React from 'react';
import { useRef } from 'react';
import { Instance } from 'tippy.js';
import { useDarkMode } from '../../context/DarkModeContext';
import { useUserLangSetting } from '../../context/UserDataContext/properties/simpleProperties';
import { ResourceInfo } from '../../models/resource';
import TextTooltip from '../Tooltip/TextTooltip';
import Tooltip from '../Tooltip/Tooltip';
import ListTableRow, { ListTableCell } from './ListTable/ListTableRow';
import ResourceStatusCheckbox from './ResourceStatusCheckbox';

export default function ResourcesListItem({
  resource,
}: {
  resource: ResourceInfo;
}): JSX.Element {
  const userLang = useUserLangSetting();
  const darkMode = useDarkMode();
  const id = `resource-${encodeURIComponent(resource.url!)}`;

  const statusCol = (
    <ListTableCell className="pl-4 font-medium whitespace-nowrap sm:pl-6">
      <div
        style={{ height: '1.25rem' }}
        className="flex items-center justify-center"
      >
        <ResourceStatusCheckbox resource={resource} />
      </div>
    </ListTableCell>
  );
  const sourceCol = (
    <ListTableCell className="dark:text-dark-med-emphasis whitespace-nowrap text-gray-500">
      {resource.source && (
        <>
          {resource.sourceDescription ? (
            <TextTooltip content={resource.sourceDescription}>
              {resource.source}
            </TextTooltip>
          ) : (
            resource.source
          )}
        </>
      )}
    </ListTableCell>
  );
  const urlCol = (
    <ListTableCell className="dark:text-dark-high-emphasis font-medium whitespace-nowrap text-gray-900">
      <div className="flex items-center">
        {resource.starred && (
          <Tooltip content="You should read all starred resources (unless you already know it) before proceeding!">
            <svg
              className="h-4 w-4 text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </Tooltip>
        )}
        <a
          href={resource.url}
          className={resource.starred ? 'pl-1 sm:pl-2' : 'sm:pl-6'}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {resource.title}
        </a>
      </div>
    </ListTableCell>
  );
  const childrenCol = (
    <ListTableCell className="dark:text-dark-med-emphasis no-y-margin w-full text-gray-500">
      {resource.children}
    </ListTableCell>
  );

  const [copied, setCopied] = React.useState(false);
  const tippyRef = useRef<Instance | null>(null);

  const more = (
    <div>
      <Tippy
        onCreate={tippy => (tippyRef.current = tippy)}
        content={
          <div className="-mx-2 text-left">
            <div>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-hidden dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={e => {
                  e.preventDefault();
                  setCopied(true);
                  navigator.clipboard.writeText(
                    window.location.href.split(/[?#]/)[0] +
                      '?lang=' +
                      userLang +
                      '#' +
                      id
                  );
                }}
              >
                {copied ? 'Copied!' : 'Copy Permalink'}
              </button>
            </div>
          </div>
        }
        theme={darkMode ? 'dark' : 'light'}
        placement="bottom-end"
        arrow={true}
        animation="fade"
        trigger="click"
        interactive={true}
        onHidden={() => setCopied(false)}
        appendTo={() => document.body}
      >
        <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-gray-400 hover:text-gray-500 focus:outline-hidden dark:hover:text-gray-300">
          {/* Heroicon name: solid/dots-vertical */}
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </Tippy>
    </div>
  );

  return (
    <ListTableRow id={id}>
      {statusCol}
      {sourceCol}
      {urlCol}
      {childrenCol}
      <td className="pr-2 text-center md:pr-3">{more}</td>
    </ListTableRow>
  );
}

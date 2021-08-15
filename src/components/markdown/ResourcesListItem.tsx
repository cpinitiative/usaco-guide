import Tippy from '@tippyjs/react';
import * as React from 'react';
import { useContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Instance } from 'tippy.js';
import tw from 'twin.macro';
import { useDarkMode } from '../../context/DarkModeContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { ResourceInfo } from '../../models/resource';
import TextTooltip from '../Tooltip/TextTooltip';
import Tooltip from '../Tooltip/Tooltip';
import ResourceStatusCheckbox from './ResourceStatusCheckbox';

export const Anchor = styled.a`
  ${tw`text-blue-600 font-semibold`}

  .dark && {
    color: #a9c5ea;
  }
`;

// https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
const StyledResourceRow = styled.tr`
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: #fdfdea !important;
          .dark && {
            background-color: #3c3c00 !important;
          }
        `
      : null}
`;

export default function ResourcesListItem({
  resource,
}: {
  resource: ResourceInfo;
}): JSX.Element {
  const { lang: userLang } = useContext(UserDataContext);
  const darkMode = useDarkMode();
  const [isActive, setIsActive] = React.useState(false);
  const id = `resource-${encodeURIComponent(resource.url)}`;

  React.useEffect(() => {
    const hashHandler = (): void => {
      setIsActive(
        window && window.location && window.location.hash === '#' + id
      );
    };
    hashHandler();

    window.addEventListener('hashchange', hashHandler, false);
    return (): void =>
      window.removeEventListener('hashchange', hashHandler, false);
  }, [userLang]); // hashes can change depending on lang

  const statusCol = (
    <td className="pl-8 whitespace-nowrap text-sm font-medium">
      <div
        style={{ height: '1.25rem' }}
        className="flex items-center justify-center"
      >
        <ResourceStatusCheckbox resource={resource} />
      </div>
    </td>
  );
  const sourceCol = (
    <td className="pl-6 sm:pl-8 pt-4 pb-1 sm:pb-4 whitespace-nowrap text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis">
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
    </td>
  );
  const urlCol = (
    <td
      className={`${
        resource.source && 'pl-2 sm:pl-6'
      } pr-4 sm:pr-6 pt-4 pb-1 sm:pb-4 whitespace-nowrap text-sm leading-5 font-medium text-gray-900 dark:text-dark-high-emphasis`}
    >
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
    </td>
  );
  const childrenCol = (
    <td className="block sm:table-cell sm:w-full px-4 sm:px-6 sm:pt-4 pb-4 text-sm leading-5 text-gray-500 dark:text-dark-med-emphasis no-y-margin">
      {resource.children}
    </td>
  );

  const [copied, setCopied] = React.useState(false);
  const tippyRef = useRef<Instance>();

  const more = (
    <div>
      <Tippy
        onCreate={tippy => (tippyRef.current = tippy)}
        content={
          <div className="-mx-2 text-left">
            <div>
              <button
                type="button"
                className="focus:outline-none block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900"
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
      >
        <button className="focus:outline-none w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 dark:hover:text-gray-300">
          {/* Heroicon name: solid/dots-vertical */}
          <svg
            className="w-5 h-5"
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
    <StyledResourceRow id={id} isActive={isActive}>
      {statusCol}
      {sourceCol}
      {urlCol}
      {childrenCol}
      <td className="text-center pr-2 md:pr-3">{more}</td>
    </StyledResourceRow>
  );
}

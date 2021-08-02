import Tippy from '@tippyjs/react';
import * as React from 'react';
import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import 'tippy.js/themes/light.css';
import ConfettiContext from '../../context/ConfettiContext';
import { useDarkMode } from '../../context/DarkModeContext';
import MarkdownLayoutContext from '../../context/MarkdownLayoutContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import {
  ResourceInfo,
  ResourceProgress,
  ResourceProgressOptions,
} from '../../models/resource';

const StyledTippy = styled(Tippy)`
  .tippy-content {
    padding: 0;
  }
`;

const ProgressDropdown = ({ onProgressSelected, currentProgress }) => {
  const [activeProgress, setActiveProgress] = useState<ResourceProgress>(
    currentProgress
  );

  const icon = (status: ResourceProgress, equal: boolean) => {
    const colorMap: { [key in ResourceProgress]: string } = {
      'Not Started': '',
      Reading: 'text-yellow-300',
      Practicing: 'text-orange-500',
      Complete: 'text-green-400',
      Skipped: 'text-blue-400',
      Ignored: 'text-purple-400',
    };
    const pathMap: { [key in ResourceProgress]: JSX.Element } = {
      'Not Started': <> </>,
      Reading: (
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      ),
      Practicing: (
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
      ),
      Complete: (
        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
      ),
      Skipped: (
        <>
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </>
      ),
      Ignored: (
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      ),
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`h-5 w-5 ${equal ? 'text-white' : colorMap[status]}`}
      >
        {pathMap[status]}
      </svg>
    );
  };

  return (
    <ul
      tabIndex={-1}
      className="rounded-md py-1 text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5 no-markdown"
    >
      {ResourceProgressOptions.map(progress => (
        <li
          role="option"
          className={`${
            activeProgress === progress
              ? 'text-white bg-indigo-600 dark:bg-indigo-800'
              : 'text-gray-900 dark:text-dark-med-emphasis'
          } cursor-default select-none relative py-2 pl-10 pr-4`}
          key={progress}
          onClick={() => onProgressSelected(progress)}
          onMouseEnter={() => setActiveProgress(progress)}
        >
          <span
            className={`${
              progress === status ? 'font-semibold' : 'font-normal'
            } block truncate`}
          >
            {progress}
          </span>

          <span className={`absolute inset-y-0 left-0 flex items-center pl-3`}>
            {icon(progress, activeProgress === progress)}
          </span>
          {/*
          {progress === currentProgress && (
            <span
              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                activeProgress === progress ? 'text-white' : 'text-indigo-600'
              }`}
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )} */}
        </li>
      ))}
    </ul>
  );
};

export default function ResourcestatusCheckbox({
  resource,
  size = 'small',
}: {
  resource: ResourceInfo;
  size?: 'small' | 'large';
}): JSX.Element {
  const darkMode = useDarkMode();
  const markdownLayoutContext = useContext(MarkdownLayoutContext);
  const { userProgressOnModules, setModuleProgress } = useContext(
    UserDataContext
  );
  const { userProgressOnResources, setUserProgressOnResources } = useContext(
    UserDataContext
  );
  const updateResourceProgressToPracticing = () => {
    if (
      markdownLayoutContext === null ||
      !markdownLayoutContext.markdownLayoutInfo?.id
    ) {
      return;
    }
    const { markdownLayoutInfo } = markdownLayoutContext;
    const moduleProgress =
      (userProgressOnModules && userProgressOnModules[markdownLayoutInfo.id]) ||
      'Not Started';
    if (moduleProgress !== 'Not Started') return;
    setModuleProgress(markdownLayoutInfo.id, 'Reading');
  };
  const status: ResourceProgress =
    userProgressOnResources[resource.url] || 'Not Started';
  const color: { [key in ResourceProgress]: string } = {
    'Not Started': 'bg-gray-200 dark:bg-gray-700',
    Reading: 'bg-yellow-300 dark:bg-yellow-500',
    Practicing: 'bg-orange-400 dark:bg-orange-600',
    Complete: 'bg-green-500 dark:bg-green-600',
    Skipped: 'bg-blue-300 dark:bg-blue-700',
    Ignored: 'bg-red-100 dark:bg-red-900',
  };
  const tippyRef = useRef<any>();
  const showConfetti = useContext(ConfettiContext);
  return (
    <StyledTippy
      onCreate={tippy => (tippyRef.current = tippy)}
      content={
        <div className="w-56 z-20">
          <ProgressDropdown
            onProgressSelected={progress => {
              tippyRef.current.hide();
              setUserProgressOnResources(resource.url, progress);
              const Practicing = x => x == 'Complete' || x == 'Practicing';
              if (progress == 'Reading' || Practicing(progress)) {
                updateResourceProgressToPracticing();
              }
              if (!Practicing(status) && Practicing(progress)) {
                showConfetti();
              }
            }}
            currentProgress={status}
          />
        </div>
      }
      interactive={true}
      trigger="click"
      placement="bottom-start"
      theme={darkMode ? 'dark' : 'light'}
    >
      <span
        // onClick={handleClick}
        // onContextMenu={handleRightClick}
        className={`inline-block ${size === 'small' ? 'h-6 w-6' : 'h-8 w-8'}`}
      >
        <span
          className={
            `inline-block ${
              size === 'small' ? 'h-6 w-6' : 'h-8 w-8'
            } rounded-full cursor-pointer transition duration-100 ease-out ` +
            color[status]
          }
        />
      </span>
    </StyledTippy>
  );
}

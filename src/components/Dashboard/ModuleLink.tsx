import { Link } from 'gatsby';
import * as React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import UserDataContext from '../../context/UserDataContext/UserDataContext';
import { ModuleLinkInfo } from '../../models/module';
import { FrequencyLabels } from '../Frequency';
import ModuleFrequencyDots from '../MarkdownLayout/ModuleFrequencyDots';
import { LinkWithProgress as SidebarLinkWithProgress } from '../MarkdownLayout/SidebarNav/ItemLink';
import Tooltip from '../Tooltip/Tooltip';

const LinkWithProgress = styled(SidebarLinkWithProgress)`
  &&::after {
    ${({ small }) => css`
      // prettier-ignore
      left: calc(-1.75rem - ${small
        ? '8px'
        : '10px'}); // -(3rem padding plus half of width)
      // prettier-ignore
      top: calc(1.5rem - ${small
        ? '8px'
        : '10px'}); // half of (1.5 + 1.5padding) rem minus half of height
      height: ${small ? '16px' : '20px'};
      width: ${small ? '16px' : '20px'};
    `}

    @media (min-width: 768px) {
      ${({ small }) => css`
        // prettier-ignore
        left: calc(-3rem - ${small
          ? '8px'
          : '10px'}); // -(3rem padding plus half of width)
      `}
    }
  }

  &&::after {
    ${({ small }) => small && tw`border-2 border-gray-200 bg-white`}
  }
  // lol no clue why two ampersands are needed but they are...
  .dark &&::after {
    ${({ small }) => (small ? tw`border-2 border-gray-500` : tw`border-0`)}
  }

  &&::before {
    left: calc(-1.75rem - 1px);
    @media (min-width: 768px) {
      left: calc(-3rem - 1px); // -(3rem padding plus half of width)
    }
  }
`;

const StyledLink = styled.div`
  ${tw`focus:outline-none transition ease-in-out duration-150 text-gray-800 hover:text-blue-700 text-xl leading-6 py-3`}

  &::before {
    content: '';
    left: calc(-1.75rem - 11px);
    @media (min-width: 768px) {
      left: calc(-3rem - 11px); // -(3rem padding plus half of width)
    }
    top: calc(1.5rem - 11px); // half of 1.5rem minus half of height
    height: 22px;
    width: 22px;
    position: absolute;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }

  &::before {
    transform: ${({ showDot }) => (showDot ? 'scale(1)' : 'scale(0.1)')};
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

const FrequencyCircleColors = [
  'group-hover:text-red-600 dark:group-hover:text-red-400',
  'group-hover:text-orange-600 dark:group-hover:text-orange-400',
  'group-hover:text-yellow-600 dark:group-hover:text-yellow-400',
  'group-hover:text-teal-600 dark:group-hover:text-teal-400',
  'group-hover:text-green-600 dark:group-hover:text-green-400',
];

const FrequencyTextColors = [
  'group-hover:text-red-700 dark:group-hover:text-red-400',
  'group-hover:text-orange-700 dark:group-hover:text-orange-400',
  'group-hover:text-yellow-700 dark:group-hover:text-yellow-400',
  'group-hover:text-teal-700 dark:group-hover:text-teal-400',
  'group-hover:text-green-700 dark:group-hover:text-green-400',
];

// https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function time_ago(time) {
  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  const time_formats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  let seconds = (+new Date() - time) / 1000,
    token = 'ago',
    list_choice = 1;

  if (seconds == 0) {
    return 'Just Now';
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    list_choice = 2;
  }
  if (seconds > 4838400) {
    return '';
  }
  let i = 0,
    format;
  while ((format = time_formats[i++])) {
    if (seconds < format[0]) {
      if (typeof format[2] == 'string') return format[list_choice];
      else {
        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    }
  }
  return time;
}

function timeAgoString(time): string {
  const res = time_ago(time);
  return res && `Updated: ${res}`;
}

const ModuleLink = ({ link }: { link: ModuleLinkInfo }): JSX.Element => {
  const { userProgressOnModules } = useContext(UserDataContext);
  const progress = userProgressOnModules[link.id] || 'Not Started';

  let lineColorStyle = tw`bg-gray-200`;
  let dotColorStyle = tw`bg-gray-200`;
  let darkLineColorStyle = tw`bg-gray-700`;
  let darkDotColorStyle = tw`bg-gray-700`;

  if (progress === 'Reading') {
    lineColorStyle = tw`bg-yellow-300`;
    dotColorStyle = tw`bg-yellow-300`;
    darkLineColorStyle = tw`bg-yellow-400`;
    darkDotColorStyle = tw`bg-yellow-400`;
  } else if (progress === 'Practicing') {
    lineColorStyle = tw`bg-orange-400`;
    dotColorStyle = tw`bg-orange-400`;
    darkLineColorStyle = tw`bg-orange-500`;
    darkDotColorStyle = tw`bg-orange-500`;
  } else if (progress === 'Complete') {
    lineColorStyle = tw`bg-green-400`;
    dotColorStyle = tw`bg-green-400`;
    darkLineColorStyle = tw`bg-green-400`;
    darkDotColorStyle = tw`bg-green-400`;
  } else if (progress === 'Skipped') {
    lineColorStyle = tw`bg-blue-300`;
    dotColorStyle = tw`bg-blue-300`;
    darkLineColorStyle = tw`bg-blue-700`;
    darkDotColorStyle = tw`bg-blue-700`;
  } else if (progress === 'Ignored') {
    lineColorStyle = tw`bg-gray-100`;
    dotColorStyle = tw`bg-gray-100`;
    darkLineColorStyle = tw`bg-gray-800`;
    darkDotColorStyle = tw`bg-gray-800`;
  }

  return (
    <LinkWithProgress
      lineColorStyle={lineColorStyle}
      dotColorStyle={dotColorStyle}
      darkLineColorStyle={darkLineColorStyle}
      darkDotColorStyle={darkDotColorStyle}
      small={progress === 'Not Started' || progress === 'Ignored'}
    >
      <Link to={link.url}>
        <StyledLink className="group">
          <p
            className={`${
              progress === 'Ignored'
                ? 'text-gray-400 dark:text-gray-600'
                : 'text-gray-700 dark:text-gray-400'
            } group-hover:text-blue-800 dark:group-hover:text-dark-high-emphasis transition mb-1 flex items-center`}
          >
            <span className="mr-2 inline-flex items-end">
              {link.title}{' '}
              {link.isIncomplete ? (
                <Tooltip content="This module has incomplete sections. Please help! D:">
                  <svg
                    className="h-5 w-5 text-gray-300 group-hover:text-yellow-300 ml-1.5 transition ease-in-out duration-150"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Tooltip>
              ) : null}
            </span>
          </p>
          {link.frequency !== null && (
            <p className="text-sm flex items-center leading-4 mb-1">
              <ModuleFrequencyDots
                count={link.frequency}
                totalCount={4}
                color={
                  'transition text-gray-400 ' +
                  FrequencyCircleColors[link.frequency]
                }
              />
              <span
                className={
                  `ml-1 transition text-gray-500 ` +
                  FrequencyTextColors[link.frequency]
                }
              >
                {FrequencyLabels[link.frequency]}
              </span>
            </p>
          )}
          {/* https://stackoverflow.com/questions/9229213/convert-iso-date-to-milliseconds-in-javascript */}
          <p className="block text-sm text-gray-400 group-hover:text-blue-700 dark:group-hover:text-dark-high-emphasis transition leading-5">
            {link.description}

            <i>
              <br />
              {timeAgoString(link.gitAuthorTime)}
            </i>
          </p>
        </StyledLink>
      </Link>
    </LinkWithProgress>
  );
};

export default ModuleLink;

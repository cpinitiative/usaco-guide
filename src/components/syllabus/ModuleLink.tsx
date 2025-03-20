import clsx from 'clsx';
import { Link } from 'gatsby';
import * as React from 'react';
import {
  LANGUAGE_LABELS,
  useUserLangSetting,
} from '../../context/UserDataContext/properties/simpleProperties';
import { useUserProgressOnModules } from '../../context/UserDataContext/properties/userProgress';
import { ModuleLinkInfo } from '../../models/module';
import { FrequencyLabels } from '../Frequency';
import ModuleFrequencyDots from '../MarkdownLayout/ModuleFrequencyDots';
import Tooltip from '../Tooltip/Tooltip';

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
function time_ago(time: unknown): string {
  if (typeof time == 'string') time = +new Date(time);
  else if (time instanceof Date) time = time.getTime();
  else time = +new Date();
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
  ] as [number, string, string | number][];
  let seconds = (+new Date() - (time as number)) / 1000,
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
      if (typeof format[2] == 'string') return format[list_choice] as string;
      else {
        return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    }
  }
  return time as string;
}

function timeAgoString(time: unknown): string {
  const res = time_ago(time);
  return res && `Updated: ${res}`;
}

const ModuleLink = ({ link }: { link: ModuleLinkInfo }): JSX.Element => {
  const userProgressOnModules = useUserProgressOnModules();
  const progress = userProgressOnModules[link.id] || 'Not Started';

  let linkWithProgressColorClass = 'link-with-progress-container--default';

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

  const userLang = useUserLangSetting();
  const maxLangOc = Math.max(link.cppOc ?? 0, link.javaOc ?? 0, link.pyOc ?? 0);
  const langToOc = {
    cpp: link.cppOc,
    java: link.javaOc,
    py: link.pyOc,
    showAll: maxLangOc,
  };
  const isMissingLang = (langToOc[userLang] ?? 0) < maxLangOc;
  return (
    <span
      className={clsx(
        'link-with-progress-container link-with-progress-container--syllabus',
        linkWithProgressColorClass,
        (progress === 'Not Started' || progress === 'Ignored') &&
          'link-with-progress-container--syllabus--small'
      )}
    >
      <Link to={link.url}>
        <div className="link-with-progress-link link-with-progress-link--syllabus text-xl leading-6 py-3 group">
          <p
            className={`${
              progress === 'Ignored'
                ? 'text-gray-400 dark:text-gray-600'
                : 'text-gray-700 dark:text-gray-400'
            } group-hover:text-blue-800 dark:group-hover:text-dark-high-emphasis transition mb-1 flex items-center`}
          >
            <span className="mr-2 inline-flex items-end">
              {link.title}{' '}
              {link.isIncomplete || isMissingLang ? (
                <Tooltip
                  content={
                    link.isIncomplete
                      ? 'This module has incomplete sections.'
                      : `This module is missing sections in your language (${LANGUAGE_LABELS[userLang]}).`
                  }
                >
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
                  FrequencyCircleColors[link.frequency ?? 0]
                }
              />
              <span
                className={
                  `ml-1 transition text-gray-500 ` +
                  FrequencyTextColors[link.frequency ?? 0]
                }
              >
                {FrequencyLabels[link.frequency ?? 0]}
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
        </div>
      </Link>
    </span>
  );
};

export default ModuleLink;

// Heavily inspired by https://joshwcomeau.com/

import classNames from 'classnames';
import * as React from 'react';
import Tooltip from './Tooltip';

const TextTooltip = ({
  children,
  className = null as string | null,
  ...props
}) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tooltip {...props}>
      <span
        className={classNames(
          'cursor-pointer border-b border-dashed border-gray-600 dark:border-gray-500',
          className
        )}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default TextTooltip;

// Heavily inspired by https://joshwcomeau.com/

import * as React from 'react';
import Tooltip from './Tooltip';
import classNames from 'classnames';

const TextTooltip = ({ children, className = null, ...props }) => {
  return (
    // @ts-ignore
    <Tooltip {...props}>
      <span
        className={classNames(
          'border-b border-dashed border-gray-600 cursor-pointer dark:border-gray-500',
          className
        )}
      >
        {children}
      </span>
    </Tooltip>
  );
};

export default TextTooltip;

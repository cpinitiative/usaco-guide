// Heavily inspired by https://joshwcomeau.com/

import * as React from 'react';
import Tooltip from './Tooltip';

const TextTooltip = ({ children, ...props }) => {
  return (
    // @ts-ignore
    <Tooltip {...props}>
      <span className="border-b border-dashed border-gray-600 cursor-pointer">
        {children}
      </span>
    </Tooltip>
  );
};

export default TextTooltip;

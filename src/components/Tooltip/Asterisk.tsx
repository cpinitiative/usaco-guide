// Heavily inspired by https://joshwcomeau.com/

import * as React from 'react';
import Tooltip, { TooltipProps } from './Tooltip';

const Asterisk: React.FC<Omit<TooltipProps, 'type'>> = ({
  children,
  position = 'top',
  ...other
}) => {
  return (
    <span className="relative inline-block h-4" style={{ width: 9 }}>
      <Tooltip
        {...other}
        content={children}
        position={position}
        type="asterisk"
      >
        <button
          className="absolute block cursor-pointer focus:outline-hidden"
          style={{
            transform: 'translateY(5px)',
            top: '-19px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            padding: '10px',
          }}
        >
          <span
            className="relative text-lg font-bold text-blue-600"
            style={{ bottom: '1px' }}
          >
            *
          </span>
        </button>
      </Tooltip>
    </span>
  );
};

export default Asterisk;

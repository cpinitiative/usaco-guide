// Heavily inspired by https://joshwcomeau.com/

import Tippy, { TippyProps } from '@tippyjs/react';
import clsx from 'clsx';
import * as React from 'react';
import { Placement } from 'tippy.js';

export interface TooltipProps extends Partial<Omit<TippyProps, 'placement'>> {
  position?: Placement;
  type?: 'normal' | 'asterisk' | 'compact';
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  type = 'normal',
  className,
  ...other
}) => {
  return (
    <Tippy
      content={content}
      animation="scale-subtle"
      theme="material"
      duration={200}
      placement={position}
      className={clsx(
        className,
        'tippy-tooltip',
        type === 'asterisk' && 'tippy-tooltip--asterisk',
        type === 'compact' && 'tippy-tooltip--compact'
      )}
      {...other}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;

// Heavily inspired by https://joshwcomeau.com/

import Tippy, { TippyProps } from '@tippyjs/react';
import * as React from 'react';
import styled from 'styled-components';
import { Placement } from 'tippy.js';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

const StyledTippy = styled(Tippy)`
  --tooltip-bg-color: #252f3f;

  .dark & {
    --tooltip-bg-color: #e2e8f0;
    color: #27272a;
  }

  background-color: var(--tooltip-bg-color) !important;
  padding: 0.5rem;
  line-height: 1.5;
  font-size: 1rem !important;
  font-weight: normal !important;
  text-align: center;

  &[data-placement^='top'] > .tippy-arrow::before {
    border-top-color: var(--tooltip-bg-color) !important;
  }
  &[data-placement^='bottom'] > .tippy-arrow::before {
    border-bottom-color: var(--tooltip-bg-color) !important;
  }
  &[data-placement^='left'] > .tippy-arrow::before {
    border-left-color: var(--tooltip-bg-color) !important;
  }
  &[data-placement^='right'] > .tippy-arrow::before {
    border-right-color: var(--tooltip-bg-color) !important;
  }
`;

const AsteriskTippy = styled(StyledTippy)`
  transform: ${p =>
    p.placement === 'top' ? 'translateY(10px)' : 'translateY(-7px)'};
`;

const CompactTippy = styled(StyledTippy)`
  font-size: 0.875rem !important;
  padding: 0rem;
`;

export interface TooltipProps extends Partial<Omit<TippyProps, 'placement'>> {
  position?: Placement;
  type?: 'normal' | 'asterisk' | 'compact';
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  type = 'normal',
  ...other
}) => {
  let Component = StyledTippy;
  if (type === 'asterisk') Component = AsteriskTippy;
  else if (type === 'compact') Component = CompactTippy;
  return (
    <Component
      content={content}
      animation="scale-subtle"
      theme="material"
      duration={200}
      placement={position}
      {...other}
    >
      {children}
    </Component>
  );
};

export default Tooltip;

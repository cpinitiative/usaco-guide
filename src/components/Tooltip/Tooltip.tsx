// Heavily inspired by https://joshwcomeau.com/

import Tippy from '@tippyjs/react';
import * as React from 'react';
import styled from 'styled-components';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

const StyledTippy = styled(Tippy)`
  background-color: #252f3f !important;
  padding: 0.5rem;
  line-height: 1.5;
  font-size: 1rem !important;
  font-weight: normal !important;
  text-align: center;

  &[data-placement^='top'] > .tippy-arrow::before {
    border-top-color: #252f3f !important;
  }
  &[data-placement^='bottom'] > .tippy-arrow::before {
    border-bottom-color: #252f3f !important;
  }
  &[data-placement^='left'] > .tippy-arrow::before {
    border-left-color: #252f3f !important;
  }
  &[data-placement^='right'] > .tippy-arrow::before {
    border-right-color: #252f3f !important;
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

const Tooltip = ({
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

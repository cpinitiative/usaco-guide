// Heavily inspired by https://joshwcomeau.com/

import * as React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import styled from 'styled-components';

const StyledTippy = styled(Tippy)`
  background-color: #252f3f !important;
  padding: 0.5rem;
  line-height: 1.5;
  font-size: 1rem !important;
  font-weight: normal !important;
  text-align: center;

  & > .tippy-arrow::before {
    ${p =>
      p.placement === 'top'
        ? 'border-top-color'
        : 'border-bottom-color'}: #252f3f !important;
  }
`;

const AsteriskTippy = styled(StyledTippy)`
  transform: ${p =>
    p.placement === 'top' ? 'translateY(10px)' : 'translateY(-7px)'};
`;

const Tooltip = ({ children, content, position = 'top', type = 'normal' }) => {
  let Component = StyledTippy;
  if (type === 'asterisk') Component = AsteriskTippy;
  return (
    <Component
      content={content}
      animation="scale-subtle"
      theme="material"
      duration={200}
      placement={position}
    >
      {children}
    </Component>
  );
};

export default Tooltip;

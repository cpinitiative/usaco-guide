import * as React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';

import styled from 'styled-components';

const StyledTippy = styled(Tippy)`
  transform: ${p =>
    p.placement === 'top' ? 'translateY(10px)' : 'translateY(-7px)'};
  background-color: #252f3f !important;
  padding: 0.5rem;
  line-height: 1.5;
  font-size: 0.875rem !important;
  text-align: center;

  & > .tippy-arrow::before {
    ${p =>
      p.placement === 'top'
        ? 'border-top-color'
        : 'border-bottom-color'}: #252f3f !important;
  }
`;

const Asterisk = ({ children, position = 'top' }) => {
  return (
    <span className="inline-block h-4 relative" style={{ width: 9 }}>
      <StyledTippy
        content={children}
        animation="scale-subtle"
        theme="material"
        duration={200}
        placement={position}
      >
        <button
          className="absolute block cursor-pointer focus:outline-none"
          style={{
            transform: 'translateY(5px)',
            top: '-20px',
            left: '-10px',
            right: '-10px',
            bottom: '-10px',
            padding: '10px',
          }}
        >
          <span
            className="relative text-xl font-bold text-pink-600"
            style={{ bottom: '2px' }}
          >
            *
          </span>
        </button>
      </StyledTippy>
    </span>
  );
};

export default Asterisk;

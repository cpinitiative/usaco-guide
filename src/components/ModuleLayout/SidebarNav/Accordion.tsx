import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useStickyState from '../../../hooks/useStickyState';

const Container = styled.div`
  &:last-of-type {
    ${tw`border-b`}
  }
`;

const Label = styled.div`
  &:hover {
    background-color: #f7faff;
  }
`;

export default function Accordion({ label, isActive, children }) {
  const [expanded, setExpanded] = useStickyState(
    true,
    'guide:sidebarnav:isexpanded:' + label
  );
  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);
  return (
    <Container
      className="border-t border-gray-200"
      style={isActive ? { backgroundColor: '#f7faff' } : null}
    >
      <Label
        className="font-medium cursor-pointer text-gray-600 relative flex items-center px-6 py-3 text-sm leading-5"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="flex-1">{label}</span>
        <svg
          className="h-5 w-5 flex-shrink-0 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {expanded ? (
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </Label>
      {expanded && children}
    </Container>
  );
}

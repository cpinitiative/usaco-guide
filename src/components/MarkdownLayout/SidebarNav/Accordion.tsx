import * as React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useStickyState from '../../../hooks/useStickyState';

const Container = styled.div`
  &:last-of-type {
    ${tw`border-b`}
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #f7faff;
    .dark & {
      background-color: #16191f;
    }
  `}
`;

const Label = styled.div`
  &:hover {
    //background-color: #f7faff
    ${tw`bg-blue-50`}
  }
  .dark &:hover {
    ${tw`bg-gray-900`}
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
      className="border-b border-gray-200 dark:border-gray-800"
      isActive={isActive}
    >
      <Label
        className="font-semibold cursor-pointer relative flex items-center px-4 py-3 text-sm leading-5 transition ease-in-out duration-150 "
        onClick={() => setExpanded(!expanded)}
      >
        <span className="flex-1 text-gray-800 dark:text-dark-high-emphasis">
          {label}
        </span>
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

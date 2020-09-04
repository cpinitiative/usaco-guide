import * as React from 'react';

export default function ModuleFrequencyDots({ count, color, totalCount }) {
  const emptyCircle = 'text-gray-300 dark:text-gray-500';
  return (
    <>
      {new Array(totalCount).fill(null).map((_, idx) => (
        <svg
          className={`mr-0.5 h-2.5 w-2.5 ${idx >= count ? emptyCircle : color}`}
          fill="currentColor"
          viewBox="0 0 8 8"
          key={idx}
        >
          <circle cx="4" cy="4" r="3" />
        </svg>
      ))}
    </>
  );
}

import * as React from 'react';

export default function RefinementList({ items, refine, createURL }) {
  return (
    <div className="text-center">
      {items.map(item => (
        <a
          href={createURL(item.value)}
          key={item.label}
          className={`${
            item.isRefined
              ? 'bg-blue-100 text-black font-medium'
              : 'bg-blue-500 text-white'
          } rounded-full px-2 py-0.5 text-sm inline-block mr-2 my-1`}
          onClick={e => {
            e.preventDefault();
            refine(item.value);
          }}
        >
          {item.label} ({item.count})
        </a>
      ))}
    </div>
  );
}

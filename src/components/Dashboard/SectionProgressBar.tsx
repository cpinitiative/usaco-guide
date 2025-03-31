import * as React from 'react';

export default function SectionProgressBar({ title }) {
  return (
    <div className="relative">
      <div className="mb-1 flex items-center justify-between text-gray-900">
        <div>
          <span className="inline-block font-semibold">{title}: 50%</span>
        </div>
      </div>
      <div className="mb-4 flex h-2 overflow-hidden rounded-sm bg-gray-200 text-xs">
        <div
          style={{ width: '45%' }}
          className="flex flex-col justify-center bg-green-500 text-center whitespace-nowrap text-white shadow-none"
        />
        <div
          style={{ width: '10%' }}
          className="flex flex-col justify-center bg-yellow-300 text-center whitespace-nowrap text-white shadow-none"
        />
        <div
          style={{ width: '5%' }}
          className="flex flex-col justify-center bg-blue-500 text-center whitespace-nowrap text-white shadow-none"
        />
      </div>
    </div>
  );
}

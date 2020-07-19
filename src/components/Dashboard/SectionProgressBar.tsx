import * as React from 'react';

export default function SectionProgressBar({ title }) {
  return (
    <div className="relative">
      <div className="flex mb-1 items-center justify-between text-gray-900">
        <div>
          <span className="font-semibold inline-block">{title}: 50%</span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: '45%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
        />
        <div
          style={{ width: '10%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-300"
        />
        <div
          style={{ width: '5%' }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
        />
      </div>
    </div>
  );
}

import * as React from 'react';

export const IncompleteSection = () => {
  return (
    <div className="p-4 bg-red-100 text-red-800 rounded">
      <b>This section is not complete.</b> Feel free to file a request to
      complete this using the "Contact Us" button.
    </div>
  );
};

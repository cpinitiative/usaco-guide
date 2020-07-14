import * as React from 'react';
import UserSettingsContext from '../../context/UserSettingsContext';
import { useContext } from 'react';

export const IncompleteSection = props => {
  return (
    <div className="p-4 bg-red-100 text-red-800 rounded">
      <b>This section is far from complete.</b> Feel free to file a request to
      complete this using the "Contact Us" button.
    </div>
  );
};

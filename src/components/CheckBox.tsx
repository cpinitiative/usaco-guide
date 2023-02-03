import * as React from 'react';
interface CheckBoxProps {
  handleChange: () => void;
  type: 'tags' | 'difficulty' | 'modules';
}

const CheckBox = ({ handleChange, type }: CheckBoxProps) => (
  <div className="flex items-center pl-1">
    <input type="checkbox" className="rounded-sm" onChange={handleChange} />
    <p className="pl-1">Hide {type}</p>
  </div>
);

export default CheckBox;

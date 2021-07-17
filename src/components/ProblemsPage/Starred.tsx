import * as React from 'react';
import Select from 'react-select';

const labelToDisplay = {
  'true': 'Yes', 
  'false': 'No'
}

export default function Starred({ items, refine }) { 

  items.forEach((item) => item.refinement = item.label);
  items.forEach((item) => item.label = labelToDisplay[item.label]);

  const handleChange = e => {
    e == null ? refine([]) : refine(e.refinement);
  }

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Starred"
      isSearchable={false}
      options={items.filter(item => item.isRefined == false)}
      className="text-black"
    />
  )
}
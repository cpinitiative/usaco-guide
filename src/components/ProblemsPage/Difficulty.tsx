import * as React from 'react';
import Select from 'react-select';

export default function Difficulty({ items, refine }) { 

  const handleChange = e => {
    let refinements = [];
    for (const difficulty of e) {
      refinements.push(difficulty.label);
    }
    refine(refinements);
  }

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Difficulty"
      isMulti
      isSearchable={false}
      options={items.filter(item => item.isRefined == false)}
      className="text-black"
      classNamePrefix="select"
    />
  )
}
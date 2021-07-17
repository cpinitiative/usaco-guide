import * as React from 'react';
import Select from 'react-select';

export default function Module({ items, refine }) { 

  const handleChange = e => {
    let refinements = [];
    for (const module of e) {
      refinements.push(module.label);
    }
    refine(refinements);
  }

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Modules"
      isMulti
      isSearchable={true}
      options={items.filter(item => item.isRefined == false)}
      className="text-black"
      classNamePrefix="select"
    />
  )
}
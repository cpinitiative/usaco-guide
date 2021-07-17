import * as React from 'react';
import Select from 'react-select';
import SECTIONS from '../../../content/ordering'

const items = [
  { label: 'General', value: SECTIONS.general },
  { label: 'Bronze', value: SECTIONS.bronze },
  { label: 'Silver', value: SECTIONS.silver },
  { label: 'Gold', value: SECTIONS.gold },
  { label: 'Platinum', value: SECTIONS.plat },
  { label: 'Advanced', value: SECTIONS.adv },
]
export default function Section({ refine }) { 
  
  const handleChange = e => {
    let refinements = [];
    for (const section of e) {
      for (const chapter of section.value) {
        for (const module of chapter.items) {
          refinements.push(module);
        }
      }
    }
    refine(refinements);
  }

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Section"
      isMulti
      isSearchable={false}
      options={items}
      className="text-black"
      classNamePrefix="select"
    />
  )
}
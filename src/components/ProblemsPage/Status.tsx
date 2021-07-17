import React, { useContext } from 'react';
import Select from 'react-select';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

const options = [
  { label: 'Solving', value: 'Solving' },
  { label: 'Solved', value: 'Solved' },
  { label: 'Reviewing', value: 'Reviewing' },
  { label: 'Skipped', value: 'Skipped' },
]

export default function Difficulty({ refine }) { 
  const data = useContext(UserDataContext).userProgressOnProblems;
  
  const handleChange = e => {
    let refinements = [];
    for (const status of e) {
      for (const key of Object.keys(data)) {
        if (data[key] == status.label) {
          refinements.push(key);
        }
      }
    }
    refine(refinements);
  }

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Status"
      isMulti
      isSearchable={false}
      options={options}
      className="text-black"
      classNamePrefix="select"
    />
  )
}
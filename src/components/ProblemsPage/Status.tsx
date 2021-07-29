import React, { useContext } from 'react';
import Select from 'react-select';
import { useDarkMode } from '../../context/DarkModeContext';
import UserDataContext from '../../context/UserDataContext/UserDataContext';

const options = [
  { label: 'Not Attempted', value: 'Not Attempted' },
  { label: 'Solving', value: 'Solving' },
  { label: 'Solved', value: 'Solved' },
  { label: 'Reviewing', value: 'Reviewing' },
  { label: 'Skipped', value: 'Skipped' },
  { label: 'Ignored', value: 'Ignored' },
];

export default function Difficulty({ refine }): JSX.Element {
  const darkMode = useDarkMode();
  const data = useContext(UserDataContext).userProgressOnProblems;

  const handleChange = e => {
    const refinements = [];
    for (const status of e) {
      for (const key of Object.keys(data)) {
        if (data[key] == status.label) {
          refinements.push(key);
        }
      }
    }
    refine(refinements);
  };

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Status"
      isMulti
      isSearchable={false}
      options={options}
      className={!darkMode ? 'text-black' : 'text-white'}
      classNamePrefix="select"
      styles={
        !darkMode
          ? undefined
          : {
              control: provided => ({
                ...provided,
                backgroundColor: '#111827',
                borderColor: '#374151',
              }),
              menuList: provided => ({
                ...provided,
                borderColor: '#374151',
                borderWidth: '1px',
                borderRadius: '6px',
              }),
              menu: provided => ({
                ...provided,
                backgroundColor: '#111827',
              }),
              multiValue: provided => ({
                ...provided,
                backgroundColor: '#2563EB',
              }),
              indicatorSeparator: provided => ({
                ...provided,
                backgroundColor: '#374151',
              }),
              indicatorsContainer: provided => ({
                ...provided,
                color: '#374151',
              }),
              singleValue: provided => ({
                ...provided,
                color: 'rgba(255, 255, 255, 0.87)',
              }),
              input: provided => ({
                ...provided,
                color: 'rgba(255, 255, 255, 0.87)',
              }),
              option: (provided, { isFocused, isSelected }) => ({
                ...provided,
                ...(isFocused
                  ? {
                      backgroundColor: '#4d94ff',
                    }
                  : isSelected
                  ? { backgroundColor: '#0063e6' }
                  : {}),
              }),
            }
      }
    />
  );
}

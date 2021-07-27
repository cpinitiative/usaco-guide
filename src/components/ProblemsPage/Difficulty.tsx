import * as React from 'react';
import Select from 'react-select';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Difficulty({ items, refine }) {
  const darkMode = useDarkMode();

  const handleChange = e => {
    let refinements = [];
    for (const difficulty of e) {
      refinements.push(difficulty.label);
    }
    refine(refinements);
  };

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Difficulty"
      isMulti
      isSearchable={false}
      options={items.filter(item => item.isRefined == false)}
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

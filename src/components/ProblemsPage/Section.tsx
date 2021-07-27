import * as React from 'react';
import Select from 'react-select';
import SECTIONS from '../../../content/ordering';
import { useDarkMode } from '../../context/DarkModeContext';

const items = [
  { label: 'General', value: SECTIONS.general },
  { label: 'Bronze', value: SECTIONS.bronze },
  { label: 'Silver', value: SECTIONS.silver },
  { label: 'Gold', value: SECTIONS.gold },
  { label: 'Platinum', value: SECTIONS.plat },
  { label: 'Advanced', value: SECTIONS.adv },
];
export default function Section({ refine }) {
  const darkMode = useDarkMode();

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
  };

  return (
    <Select
      onChange={handleChange}
      isClearable
      placeholder="Section"
      isMulti
      isSearchable={false}
      options={items}
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

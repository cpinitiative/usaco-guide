import React, { useEffect, useState } from 'react';
import {
  UseRefinementListProps,
  useInstantSearch,
  useRefinementList,
} from 'react-instantsearch';
import Select from 'react-select';
import { useDarkMode } from '../../context/DarkModeContext';

export type SelectionProps = UseRefinementListProps & {
  placeholder: string;
  searchable: boolean;
  isMulti: boolean;
  transformLabel?: (label: string) => string;
  items?: { label: string; value: string | string[] }[];
};

export default function Selection({
  attribute,
  limit,
  placeholder,
  searchable,
  isMulti,
  transformLabel: transform,
  items,
  ...props
}: SelectionProps) {
  const { items: refineItems } = useRefinementList({
    attribute,
    limit,
    ...props,
  });
  if (!items) items = refineItems;
  const darkMode = useDarkMode();
  const [refinements, setRefinements] = useState<string[]>([]);
  const { setIndexUiState } = useInstantSearch();
  useEffect(() => {
    setIndexUiState(prevIndexUiState => ({
      refinementList: {
        ...prevIndexUiState.refinementList,
        [attribute]: refinements,
      },
    }));
  }, [refinements]);
  return (
    <Select
      onChange={(items: any) => {
        if (isMulti) setRefinements(items.map(item => item.value).flat());
        else if (items) setRefinements([items.value]);
        else setRefinements([]);
      }}
      isClearable
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={searchable}
      options={items.map(item => ({
        ...item,
        label: transform ? transform(item.label) : item.label,
      }))}
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

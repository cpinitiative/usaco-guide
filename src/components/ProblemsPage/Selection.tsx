import React, { useEffect, useState } from 'react';
import {
  useInstantSearch,
  useRefinementList,
  UseRefinementListProps,
} from 'react-instantsearch';
import Select from '../Select';

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
  for (const key in items) {
    if (items[key].value instanceof Array) {
      (items[key].value as string[]).push('null');
    }
  }
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
      className="text-black dark:text-white"
      classNamePrefix="select"
    />
  );
}

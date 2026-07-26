import { useEffect, useState } from 'react';
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
  skipAlgoliaRefinement?: boolean;
  onLocalFilterChange?: (values: string[]) => void;
};

export default function Selection({
  attribute,
  limit,
  placeholder,
  searchable,
  isMulti,
  transformLabel: transform,
  items,
  skipAlgoliaRefinement = false,
  onLocalFilterChange,
  ...props
}: SelectionProps) {
  const { items: refineItems } = useRefinementList({
    attribute,
    limit,
    ...props,
  });
  const resolvedItems = items ?? refineItems;
  const preparedItems = resolvedItems.map(
    (item: { label: string; value: string | string[] }) => {
      if (item.value instanceof Array) {
        return { ...item, value: [...item.value, 'null'] };
      }
      return item;
    }
  );
  const usedItems = items ? items : preparedItems;
  const [refinements, setRefinements] = useState<string[]>([]);
  const { setIndexUiState } = useInstantSearch();
  useEffect(() => {
    if (skipAlgoliaRefinement) {
      if (onLocalFilterChange) {
        onLocalFilterChange(refinements);
      }
      return;
    }
    setIndexUiState(prevIndexUiState => ({
      refinementList: {
        ...prevIndexUiState.refinementList,
        [attribute]: refinements,
      },
    }));
  }, [
    refinements,
    attribute,
    skipAlgoliaRefinement,
    onLocalFilterChange,
    setIndexUiState,
  ]);
  return (
    <Select
      onChange={(
        newValue,
        _actionMeta
      ) => {
        const selectedItems = newValue as
          | { label: string; value: string | string[] }[]
          | { label: string; value: string | string[] }
          | null;
        if (isMulti)
          setRefinements(
            (selectedItems as { label: string; value: string | string[] }[])
              .map(item => item.value)
              .flat()
          );
        else if (selectedItems) {
          const singleValue = (
            selectedItems as { label: string; value: string | string[] }
          ).value;
          setRefinements(
            Array.isArray(singleValue) ? singleValue : [singleValue]
          );
        } else setRefinements([]);
      }}
      isClearable
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={searchable}
      options={usedItems.map(item => ({
        ...item,
        label: transform ? transform(item.label) : item.label,
      }))}
      className="text-black dark:text-white"
      classNamePrefix="select"
    />
  );
}

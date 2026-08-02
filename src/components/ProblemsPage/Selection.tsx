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
  /** Called with the labels of the selected options whenever they change. */
  onRefine?: (labels: string[]) => void;
};

export default function Selection({
  attribute,
  limit,
  placeholder,
  searchable,
  isMulti,
  transformLabel: transform,
  items,
  onRefine,
  ...props
}: SelectionProps) {
  const { items: refineItems } = useRefinementList({
    attribute,
    limit,
    ...props,
  });
  if (!items) items = refineItems;
  for (const key in items) {
    const value = items[key].value;
    // 'null' matches nothing; guarantees a non-empty refinement so that
    // selecting an option with no matches shows zero results
    if (value instanceof Array && !value.includes('null')) {
      value.push('null');
    }
  }
  const { indexUiState, setIndexUiState } = useInstantSearch();
  const refinements = indexUiState.refinementList?.[attribute] ?? [];
  const options = items.map(item => ({
    ...item,
    label: transform ? transform(item.label) : item.label,
  }));
  const selected = options.filter(option =>
    option.value instanceof Array
      ? option.value.length > 1 &&
        option.value.every(v => refinements.includes(v))
      : refinements.includes(option.value)
  );
  return (
    <Select
      onChange={(selection: any) => {
        const selectedOptions: { label: string; value: string | string[] }[] =
          isMulti ? selection : selection ? [selection] : [];
        setIndexUiState(prevIndexUiState => ({
          ...prevIndexUiState,
          refinementList: {
            ...prevIndexUiState.refinementList,
            [attribute]: selectedOptions.map(option => option.value).flat(),
          },
        }));
        onRefine?.(selectedOptions.map(option => option.label));
      }}
      value={isMulti ? selected : (selected[0] ?? null)}
      isClearable
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={searchable}
      options={options}
      className="text-black dark:text-white"
      classNamePrefix="select"
    />
  );
}

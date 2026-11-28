import * as React from 'react';

/**
 * Comma-separated tag field that suggests tags already in use elsewhere in the
 * guide, so suggestions reuse existing names instead of coining near-duplicates
 * ("Trees" for "Tree", "Maths" for "Math").
 *
 * The vocabulary is the union of every tag on every problem, written to
 * public/problem-tags.json when content is indexed. If that fetch fails the
 * field still works as a plain text input.
 */
export default function ProblemTagsInput({
  value,
  onChange,
  disabled,
  id,
}: {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  id?: string;
}): JSX.Element {
  const [knownTags, setKnownTags] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listboxId = `${id || 'problem-tags'}-listbox`;

  React.useEffect(() => {
    let cancelled = false;
    fetch('/problem-tags.json')
      .then(response => (response.ok ? response.json() : null))
      .then(data => {
        if (!cancelled && Array.isArray(data?.tags)) setKnownTags(data.tags);
      })
      .catch(() => {
        // Suggestions are optional — the field stays usable without them.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Everything up to the last comma is settled; the rest is the tag being typed.
  const lastComma = value.lastIndexOf(',');
  const typed = value.slice(lastComma + 1).trim();

  const suggestions = React.useMemo(() => {
    if (!typed) return [];
    const query = typed.toLowerCase();
    const alreadyUsed = new Set(
      value
        .split(',')
        .map(tag => tag.trim().toLowerCase())
        .filter(Boolean)
    );
    return knownTags
      .filter(
        tag =>
          tag.toLowerCase().includes(query) &&
          !alreadyUsed.has(tag.toLowerCase())
      )
      .sort((a, b) => {
        // Prefix matches first, then alphabetical.
        const aStarts = a.toLowerCase().startsWith(query) ? 0 : 1;
        const bStarts = b.toLowerCase().startsWith(query) ? 0 : 1;
        return aStarts - bStarts || a.localeCompare(b);
      })
      .slice(0, 8);
  }, [typed, knownTags, value]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [typed]);

  const showList = isOpen && suggestions.length > 0;

  const accept = (tag: string) => {
    const settled = value.slice(0, lastComma + 1);
    onChange(`${settled}${settled ? ' ' : ''}${tag}, `);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showList) {
      if (event.key === 'ArrowDown' && suggestions.length > 0) {
        event.preventDefault();
        setIsOpen(true);
      }
      return;
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex(i => (i + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex(i => (i - 1 + suggestions.length) % suggestions.length);
    } else if (event.key === 'Enter' || event.key === 'Tab') {
      // Enter would otherwise submit the suggestion form.
      event.preventDefault();
      accept(suggestions[activeIndex]);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <input
        ref={inputRef}
        id={id}
        type="text"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:border-gray-700 dark:bg-gray-900"
        placeholder="DP, Binary Search"
        value={value}
        onChange={event => {
          onChange(event.target.value);
          setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        disabled={disabled}
        autoComplete="off"
        role="combobox"
        aria-expanded={showList}
        aria-controls={showList ? listboxId : undefined}
        aria-autocomplete="list"
        aria-activedescendant={
          showList ? `${listboxId}-${activeIndex}` : undefined
        }
      />
      {showList && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-900"
        >
          {suggestions.map((tag, index) => (
            <li
              key={tag}
              id={`${listboxId}-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={`cursor-pointer px-3 py-1.5 ${
                index === activeIndex
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
              // Keep focus on the input so blur doesn't close the list first.
              onMouseDown={event => event.preventDefault()}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => accept(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

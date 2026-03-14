import * as React from "react";
import { useRefinementList } from "react-instantsearch";
import { useBlindMode } from "../../context/BlindModeContext";

export default function TagsRefinementList() {
  const { items, refine, createURL } = useRefinementList({
    attribute: "tags",
    limit: 500,
  });
  const { isBlindMode } = useBlindMode();
  if (isBlindMode) {
    return null;
  }
  return (
    <div className="ml-1 text-left">
      {items.map((item) => (
        <div key={item.label}>
          <a
            href={createURL(item.value)}
            className={`${
              item.isRefined
                ? "font-medium text-gray-700 dark:text-blue-500"
                : "dark:text-dark-high-emphasis text-gray-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              refine(item.value);
            }}
          >
            {item.label} ({item.count})
          </a>
        </div>
      ))}
    </div>
  );
}

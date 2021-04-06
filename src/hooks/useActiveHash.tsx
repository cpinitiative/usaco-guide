import { useEffect, useState } from 'react';

// taken from https://github.com/gatsbyjs/gatsby/blob/3519e71ee6f94bfbdd936b5a7fa4cab36c970c4d/www/src/hooks/use-active-hash.js#L3

export const useActiveHash = (itemIds, rootMargin = undefined) => {
  const [activeHash, setActiveHash] = useState(``);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const isInteresting = {};
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          isInteresting[entry.target.id] = entry.isIntersecting;
        });
        setActiveHash(itemIds.find(id => isInteresting[id]));
      },
      { rootMargin: rootMargin || `0% 0% -80% 0%` }
    );

    itemIds.forEach(id => {
      if (document.getElementById(id) === null) return;
      observer.observe(document.getElementById(id));
    });

    return () => {
      itemIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [itemIds]);

  return activeHash;
};

import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

/*eslint-disable */
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): (this: any, ...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: Parameters<T>) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/*eslint-enable */

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    height: 920,
    width: 620,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    handleResize();

    const efficientResize = debounce(handleResize, 250);
    window.addEventListener('resize', efficientResize);
    return () => window.removeEventListener('resize', efficientResize);
  }, []);

  // Return default dimensions during SSR, actual dimensions after hydration
  return isClient ? windowDimensions : { height: 920, width: 620 };
}

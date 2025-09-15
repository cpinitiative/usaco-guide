import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

/*eslint-disable */
function debounce(func, wait, immediate = false) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
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

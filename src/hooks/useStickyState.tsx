import * as React from 'react';

// source: https://joshwcomeau.com/react/persisting-react-state-in-localstorage/
// modified to support ssr

export default function useStickyState<S>(
  defaultValue: (() => S) | S,
  key: string
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [value, setValue] = React.useState<S>(defaultValue);
  const initialRender = React.useRef(true);
  React.useEffect(() => {
    if (initialRender.current) {
      const stickyValue = window.localStorage.getItem(key);

      if (stickyValue !== null) {
        try {
          setValue(JSON.parse(stickyValue));
        } catch (e) {
          console.error("Couldn't parse key", key);
        }
      }

      initialRender.current = false;
    } else {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);
  return [value, setValue];
}

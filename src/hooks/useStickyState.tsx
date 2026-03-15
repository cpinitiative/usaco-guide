import * as React from 'react';
import { throttle } from 'throttle-debounce';
// source: https://joshwcomeau.com/react/persisting-react-state-in-localstorage/
// modified to support ssr and throttling
const saveToLocalStorage = (key: string, value: any) =>
  window.localStorage.setItem(key, JSON.stringify(value));
/**
 * Mimics useState, except persists across sessions via localstorage
 * @param defaultValue - default value, if no saved state is found
 * @param key - localstorage key
 * @param throttleAmt - milliseconds to throttle the saving to localstorage. The
 * state itself will not be affected. If set to a number greater than 0, the
 * value will be saved to localstorage at most every `throttleAmt` ms, and each
 * value is guaranteed be saved to localStorage within `throttleAmt` ms.
 * @param defaultValueBeforeLoaded - what to set the value to before it is loaded from localStorage. After it is loaded from localStorage, defaultValue will be used. This can't be undefined.
 */
export default function useStickyState<S>(
  defaultValue: (() => S) | S,
  key: string,
  throttleAmt?: number,
  defaultValueBeforeLoaded?: S
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [value, setValue] = React.useState<S>(
    defaultValueBeforeLoaded !== undefined
      ? defaultValueBeforeLoaded
      : defaultValue
  );
  const initialRender = React.useRef(true);
  const [throttledSaveToLocalStorage] = React.useState<
    throttle<(key: string, value: any) => void>
  >(() =>
    throttle(throttleAmt, (k, v) => {
      console.log('throttled ', v);
      saveToLocalStorage(k, v);
    })
  );

  React.useEffect(() => {
    if (initialRender.current) {
      const stickyValue = window.localStorage.getItem(key);

      if (stickyValue !== null) {
        try {
          setValue(JSON.parse(stickyValue));
        } catch (e) {
          console.error("Couldn't parse key", key);
        }
      } else {
        setValue(
          defaultValue instanceof Function ? defaultValue() : defaultValue
        );
      }

      initialRender.current = false;
    } else {
      if (throttleAmt) {
        console.log('c');
        throttledSaveToLocalStorage(key, value);
      } else {
        saveToLocalStorage(key, value);
      }
    }
    return () => {
      saveToLocalStorage(key, value);
      throttledSaveToLocalStorage.cancel();
    };
  }, [key, value]);
  return [value, setValue];
}

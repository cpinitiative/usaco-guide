import { atom, Getter } from 'jotai';

export function atomWithRefresh<T>(fn: (get: Getter) => T) {
  const refreshCounter = atom(0);

  return atom(
    get => {
      get(refreshCounter);
      return fn(get);
    },
    (_, set) => set(refreshCounter, i => i + 1)
  );
}

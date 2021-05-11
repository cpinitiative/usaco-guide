import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { atomWithStorage } from './atomWithStorage';

export type EditorFile = {
  path: string;
  markdown: string;
  problems: string;
};

export const filesFamily = atomFamily((path: string) => {
  return atomWithStorage<EditorFile>(`guide:editor:files:${path}`, {
    path,
    markdown: '',
    problems: '',
  });
});

/**
 * Saves a file atom based on its path as its identifier.
 */
export const saveFileAtom = atom<null, EditorFile>(null, (get, set, file) => {
  set(filesFamily(file.path), file);
});

const baseActiveFileAtom = atomWithStorage(
  'guide:editor:activeFile',
  null as string | null
);
export const activeFileAtom = atom(
  get =>
    get(baseActiveFileAtom) === null
      ? null
      : get(filesFamily(get(baseActiveFileAtom))),
  (get, set, nextActiveFilePath) => {
    set(baseActiveFileAtom, nextActiveFilePath);
  }
);

export const filesListAtom = atomWithStorage<string[]>(
  'guide:editor:filesList',
  []
);

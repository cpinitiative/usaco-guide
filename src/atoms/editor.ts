import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { fetchFileContent } from '../components/Editor/editorUtils';
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

export const createNewFileAtom = atom(
  null,
  async (get, set, filePath: string) => {
    if (get(filesListAtom).find(f => f === filePath)) {
      set(activeFileAtom, filePath);
    } else {
      set(filesListAtom, prev => [...prev, filePath]);
      const data = await fetchFileContent(filePath);
      set(saveFileAtom, {
        path: filePath,
        markdown: data.markdown,
        problems: data.problems,
      });
      set(activeFileAtom, filePath);
    }
  }
);

export const closeFileAtom = atom(null, (get, set, filePath: string) => {
  set(
    filesListAtom,
    get(filesListAtom).filter(file => file !== filePath)
  );
  if (get(activeFileAtom).path === filePath) {
    const remainingFiles = get(filesListAtom);
    set(activeFileAtom, remainingFiles.length > 0 ? remainingFiles[0] : null);
  }
  set(filesFamily(filePath), null);
});

const baseMonacoEditorInstanceAtom = atom({ monaco: null });
export const monacoEditorInstanceAtom = atom(
  get => get(baseMonacoEditorInstanceAtom),
  (get, _set, val) => {
    get(baseMonacoEditorInstanceAtom).monaco = val;
  }
);

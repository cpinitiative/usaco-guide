import * as React from 'react';
import { ProblemMetadata } from '../models/problem';

export const EditorContext = React.createContext<
  | { inEditor: false }
  | {
      addProblem: (listId: string, problemMetadata: ProblemMetadata) => void;
      inEditor: true;
    }
>({
  inEditor: null,
});

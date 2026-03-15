import * as React from 'react';
import { ProblemMetadata } from '../models/problem';

export const EditorContext = React.createContext<
  | { inEditor: null }
  | { inEditor: false }
  | {
      addProblem: (
        listId: string,
        problemMetadata: ProblemMetadata
      ) => Promise<void>;
      inEditor: true;
    }
>({
  inEditor: null,
});

import * as React from 'react';
import { ProblemMetadata } from '../models/problem';

export const EditorContext = React.createContext<{
  addProblem: (listId: string, problemMetadata: ProblemMetadata) => void;
}>(null);

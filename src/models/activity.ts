import { ModuleProgress } from './module';
import { ProblemNotes, ProblemProgress } from './problem';

export type ProblemActivity = {
  timestamp: number;
  problemID: string;
  notes: ProblemNotes;
  problemProgress: ProblemProgress;
};

export type ModuleActivity = {
  timestamp: number;
  moduleID: string;
  moduleProgress: ModuleProgress;
};

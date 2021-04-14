import { ModuleProgress } from './module';
import { ProblemProgress } from './problem';

export type ProblemActivity = {
  timestamp: number;
  problemID: string;
  problemProgress: ProblemProgress;
};

export type ModuleActivity = {
  timestamp: number;
  moduleID: string;
  moduleProgress: ModuleProgress;
};

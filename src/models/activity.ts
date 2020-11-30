import { ProblemProgress } from './problem';
import { ModuleProgress } from './module';

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

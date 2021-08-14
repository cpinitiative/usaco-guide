import { ModuleProgress, ModuleProgressOptions } from './module';

export type ResourceInfo = {
  source: string;
  sourceDescription: string;
  url: string;
  starred: boolean;
  title: string;
  children: React.ReactNode;
};

export type ResourceProgress = ModuleProgress;

export const ResourceProgressOptions = ModuleProgressOptions;

import { TableOfContents } from './module';

export class SolutionInfo {
  constructor(
    public id: string,
    public source: string,
    public title: string,
    public author: string | null,
    public toc: TableOfContents,
    public fileRelativePath: string
  ) {}
}

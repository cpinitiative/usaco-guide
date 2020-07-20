export class ModuleLinkInfo {
  public url: string;

  constructor(
    public id: string,
    public section: string,
    public title: string,
    public description?: string
  ) {
    this.url = `/${section}/${id}`;
  }
}

export type ModuleFrequency = null | 0 | 1 | 2 | 3 | 4;

export type TOCHeading = {
  depth: number;
  value: string;
  slug: string;
};

export type TableOfContents = {
  cpp: TOCHeading[];
  java: TOCHeading[];
  py: TOCHeading[];
};

export class ModuleInfo extends ModuleLinkInfo {
  constructor(
    public id: string,
    public section: string,
    public title: string,
    public body: any,
    public author: string,
    public prerequisites: string[],
    public description: string,
    public frequency: ModuleFrequency,
    public toc: TableOfContents
  ) {
    super(id, section, title);
  }
}

export type ModuleProgress =
  | 'Not Started'
  | 'Reading'
  | 'Practicing'
  | 'Complete'
  | 'Skipped';

export const ModuleProgressOptions: ModuleProgress[] = [
  'Not Started',
  'Reading',
  'Practicing',
  'Complete',
  'Skipped',
];

export class ModuleLinkInfo {
  public url: string;

  constructor(
    public id: string,
    public division: string,
    public title: string
  ) {
    this.url = `/${division}/${id}`;
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

// there's probably a way to do this without the duplicated types...
export class ModuleInfo extends ModuleLinkInfo {
  constructor(
    public id: string,
    public division: string,
    public title: string,
    public body: any,
    public author: string,
    public prerequisites: string[],
    public description: string,
    public frequency: ModuleFrequency,
    public toc: TableOfContents
  ) {
    super(id, division, title);
  }
}

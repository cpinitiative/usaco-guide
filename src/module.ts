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

export type ModuleFrequency = null | 1 | 2 | 3 | 4 | 5;

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
    public frequency: ModuleFrequency
  ) {
    super(id, division, title);
  }
}

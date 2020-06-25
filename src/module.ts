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

export type ModuleInfoData = {
  body: any;
  title: string;
  author: string;
  id: string;
  prerequisites: string[];
  description: string;
  division: string;
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
    public description: string
  ) {
    super(id, division, title);
  }
}

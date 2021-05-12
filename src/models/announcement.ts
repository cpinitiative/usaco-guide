export class AnnouncementInfo {
  constructor(
    public id: string,
    public title: string,
    public date: string,
    public body: any
  ) {}
}

export function graphqlToAnnouncementInfo(mdx: any): AnnouncementInfo {
  return new AnnouncementInfo(
    mdx.frontmatter.id,
    mdx.frontmatter.title,
    mdx.frontmatter.date,
    mdx.body
  );
}

import { TableOfContents } from './module';

export class BlogPostInfo {
  constructor(
    public id: string,
    public title: string,
    public author: string | null,
    public toc: TableOfContents,
    public body: any
  ) {}
}

export function graphqlToBlogPostInfo(mdx: any): BlogPostInfo {
  return new BlogPostInfo(
    mdx.frontmatter.id,
    mdx.frontmatter.title,
    mdx.frontmatter.author,
    mdx.toc,
    mdx.body
  );
}

export const typeDefs = `
    type Xdm implements Node {
      body: String
      fileAbsolutePath: String
      frontmatter: XdmFrontmatter!
      isIncomplete: Boolean
      cppOc: Int
      javaOc: Int
      pyOc: Int
      toc: TableOfContents
      mdast: String
    }

    type XdmFrontmatter implements Node {
      id: String
      title: String!
      author: String
      contributors: String
      description: String
      prerequisites: [String]
      redirects: [String]
      frequency: Int
    }

    type Heading {
      depth: Int
      value: String
      slug: String
    }

    type TableOfContents {
      cpp: [Heading]
      java: [Heading]
      py: [Heading]
    }

    type ModuleProblemLists implements Node {
      moduleId: String
      problemLists: [ModuleProblemList]
    }

    type ModuleProblemList {
      listId: String!
      problems: [ModuleProblemInfo]
    }

    type ProblemInfo implements Node {
      uniqueId: String!
      name: String!
      url: String!
      source: String!
      sourceDescription: String
      isStarred: Boolean!
      difficulty: String
      tags: [String!]!
      solution: ProblemSolutionInfo
      inModule: Boolean!
      module: Xdm @link(by: "frontmatter.id")
    }

    type ModuleProblemInfo {
      uniqueId: String!
      name: String!
      url: String!
      source: String!
      sourceDescription: String
      isStarred: Boolean!
      difficulty: String
      tags: [String!]!
      solution: ProblemSolutionInfo
    }

    type ProblemSolutionInfo {
      kind: String!
      label: String
      labelTooltip: String
      url: String
      sketch: String
      hasHints:Boolean
    }
  `;

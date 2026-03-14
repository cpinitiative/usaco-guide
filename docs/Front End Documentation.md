# Front End Documentation

If you are familiar with Next.js development, just run `yarn` and `yarn dev`
to get started.

## Quickstart

The following is written for individuals without front-end development
experience.

1. Set up your development environment.
   - Install [node.js](https://nodejs.org/en/)
   - Install [yarn 1](https://classic.yarnpkg.com/en/)
     - `npm install -g yarn`? might work
2. Clone repo
   - `git clone https://github.com/cpinitiative/usaco-guide.git`
3. Install Dependencies
   - `yarn install`
4. Run development server
   - `yarn dev`
5. Test UI Components
   - `yarn storybook`

## Link Checker

Update 2/3/24: I'm not certain whether this actually works anymore...

By default, Github CI will check for broken _internal_ links. We can also
manually check for broken external links by:

1. `yarn build && yarn start` -- keep this terminal alive!
2. `yarn check-links`

If this command crashes due to some `bhttp` error, it's probably a timeout. To
fix temporarily, run:

```
blc http://localhost:9000 -rof --exclude train.usaco.org
```

And find where it crashes, then check the broken link manually and add to
exclusion list. As `train.usaco.org` sometimes crashes, it's added already.

## MDX Configuration

Update 03/14/2026: Since migrating to Next.js, we use MDX instead of XDM.

MDX configuration is currently handled across two files:

1. [src/lib/parseMdxFile.ts](../src/lib/parseMdxFile.ts)
  - MDX Compilation: Uses @mdx-js/mdx to compile MDX into a JavaScript function-body, handling the migration-specific shift from XDM to MDX.
  - Plugin Orchestration: Manages a complex pipeline of Remark (AST transformation) and Rehype (HTML transformation) plugins to handle Math (KaTeX), GitHub Flavored Markdown (GFM), table of contents generation, and slug creation.
  - Validation: Performs integrity checks, such as ensuring language-specific sections (C++, Java, Python) are correctly structured within the file.
  - Metadata Extraction: Extracts frontmatter (using gray-matter) and maps files to their specific curriculum divisions (e.g., Bronze, Silver) based on the project's ordering logic.
2. [scripts/index-content.ts](../scripts/index-content.ts)
  - Database Schema Management: Defines and initializes the normalized SQLite schema, including tables for MDX content, problems, frontmatter, and slugs.
  - Batch Processing: Efficiently scans the /content and /solutions directories, processing files in batches to manage memory and CPU pressure.
  - Problem Indexing: Parses .problems.json files to catalog problem metadata, difficulty levels, and solution mappings.
  - Persistence: Saves the compiled output from parseMdxFile.ts and Git timestamps into the database using atomic transactions.
  - Artifact Generation: Generates supplementary JSON files (like usaco-divisions.json) in the /public directory for client-side use.
## Credits

- Confetti taken from Josh Comeau:
  https://github.com/joshwcomeau/react-europe-talk-2018
- Lots of inspiration from Josh Comeau's blog and Gatsbyjs documentation site
- Syllabus template from https://www.howtographql.com/

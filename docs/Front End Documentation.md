# Front End Documentation

If you are familiar with Next.js development, just run `yarn` and `yarn dev` to
get started.

## Quickstart

The following is written for individuals without front-end development
experience.

1. Set up your development environment.
   - Install [node.js](https://nodejs.org/en/) (Next.js requires 20.9 or newer)
   - Enable [Yarn](https://yarnpkg.com/) via Corepack: `corepack enable`
     - The repo pins its Yarn version with the `packageManager` field in
       `package.json`, so you don't need to install a specific Yarn release
       yourself.
2. Clone repo
   - `git clone https://github.com/cpinitiative/usaco-guide.git`
3. Install Dependencies
   - `yarn install`
4. Run development server
   - `yarn dev`, or `yarn dev:watch` if you're editing content (see below)
5. Test UI Components
   - `yarn storybook`

## Editing Content

Content isn't read from `content/` at request time: `yarn dev` compiles every
MDX file into a SQLite database at `data/content.db` and serves the site from
that. The database is only built when it's missing, so **editing an MDX file
while `yarn dev` is running has no effect on the page you see.** (Changes under
`src/` hot reload as usual -- this only affects `content/` and `solutions/`.)

Use `yarn dev:watch` instead while writing content. It runs the same dev server,
but also watches `content/` and `solutions/`, re-indexes just the files you
touched, and pushes a reload to the browser over SSE (port 3001).

If you ever need to rebuild the database from scratch (for example after
changing how content is parsed), delete `data/content.db` and restart, or run
`yarn tsx scripts/index-content.ts`.

`public/usaco-divisions.json` is generated the same way and is gitignored, since
every build regenerates it. Both dev servers rewrite it on startup if it is
missing, so a fresh clone or a `rm` of `public/` needs no extra step.

## Link Checker

`build-tests` CI checks every _internal_ link on every push and PR, and fails
the build if one is broken. It serves the built site with `next start` and
crawls it with [linkcheck](https://pub.dev/packages/linkcheck):

```
linkcheck --no-nice --no-check-anchors --skip-file .github/linkcheck-skip.txt :3000
```

Anchors are off on purpose: headings inside `<CPPSection>`/`<JavaSection>`/
`<PySection>` only render once the reader picks a language, so a crawler reading
the server HTML cannot resolve links into the other languages.

_External_ links are **not** checked automatically. To check them manually,
build and serve the site, then add `-e`:

```
yarn build && yarn start    # keep this terminal alive
linkcheck --no-nice --no-check-anchors -e --skip-file .github/linkcheck-skip.txt :3000
```

Expect false positives. Several hosts reject requests from anything that isn't a
real browser and answer 403 regardless of request method or headers --
codeforces.com, dmoj.ca, www.spoj.com and stackoverflow.com among them, which is
roughly a quarter of our external links. `.github/linkcheck-skip.txt` lists
those hosts, commented out, along with ones that rate-limit CI runners.
Verifying them needs a real browser, not a link checker.

## MDX Configuration

Update 03/14/2026: Since migrating to Next.js, we use MDX instead of XDM.

MDX configuration is currently handled across two files:

1. [src/lib/parseMdxFile.ts](../src/lib/parseMdxFile.ts)

- MDX Compilation: Uses @mdx-js/mdx to compile MDX into a JavaScript
  function-body, handling the migration-specific shift from XDM to MDX.
- Plugin Orchestration: Manages a complex pipeline of Remark (AST
  transformation) and Rehype (HTML transformation) plugins to handle Math
  (KaTeX), GitHub Flavored Markdown (GFM), table of contents generation, and
  slug creation.
- Validation: Performs integrity checks, such as ensuring language-specific
  sections (C++, Java, Python) are correctly structured within the file.
- Metadata Extraction: Extracts frontmatter (using gray-matter) and maps files
  to their specific curriculum divisions (e.g., Bronze, Silver) based on the
  project's ordering logic.

2. [scripts/index-content.ts](../scripts/index-content.ts)

- Database Schema Management: Defines and initializes the normalized SQLite
  schema, including tables for MDX content, problems, frontmatter, and slugs.
- Batch Processing: Efficiently scans the /content and /solutions directories,
  processing files in batches to manage memory and CPU pressure.
- Problem Indexing: Parses .problems.json files to catalog problem metadata,
  difficulty levels, and solution mappings.
- Persistence: Saves the compiled output from parseMdxFile.ts and Git timestamps
  into the database using atomic transactions.
- Artifact Generation: Generates supplementary JSON files (like
  usaco-divisions.json) in the /public directory for client-side use.

## Credits

- Confetti taken from Josh Comeau:
  https://github.com/joshwcomeau/react-europe-talk-2018
- Lots of inspiration from Josh Comeau's blog and Gatsbyjs documentation site
- Syllabus template from https://www.howtographql.com/

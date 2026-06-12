# USACO Guide Gatsby to Next.js Migration

## Author: Elliott Harper

## Table of Contents

- [Overview](#overview)
- [Current Status](#current-status)
- [Motivation](#motivation)
  - [Why Next.js?](#why-nextjs)
- [Architecture Changes](#architecture-changes)
  - [High-Level Architecture](#high-level-architecture)
  - [Ingestion Layer (Prebuild Indexing)](#ingestion-layer-prebuild-indexing)
  - [Query Layer](#query-layer)
  - [Page Generation (Next.js)](#page-generation-nextjs)
  - [Complexity Analysis](#complexity-analysis)
  - [Database Schema Design](#database-schema-design)
- [Performance & Quality Benchmarking](#performance--quality-benchmarking-plan)

## Overview

Previously, the [USACO Guide](https://github.com/cpinitiative/usaco-guide)
repository used Gatsby. The goal of this migration was a framework change to
improve:

- Performance
  - Faster builds, faster development startup, and faster content compilation
  - Better user performance
    ([Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals))
- Maintainability
  - Modern React framework with up-to-date MDX plugins
  - Simplified build pipeline
- Scalability
  - Dynamic support for large-scale MDX content

## Current Status

This migration is **completed**.

### Completed

- [x] Create syllabus pages
- [x] Create solutions pages
- [x] Create user solutions pages
- [x] Copy over `api/` directory and convert Gatsby syntax to Next.js syntax
- [x] Implement Groups (Set each component to the proper file under `pages/`, i
      have already converted the components)
- [x] Implement editor (investigate why auth isn't working; might be bc dev
      mode)
- [x] Configure redirects
- [x] Configure webpack
- [x] Update algolia config for Next.js (indexing script in `/scripts`)
- [x] Copy over all other components/scripts/utils
- [x] Update storybook config for Next.js
- [x] Copy over stories
- [x] Add new modules and solutions
- [x] Update deployment scripts
- [x] Update docs

**Note:**

All static files (e.g., images, videos, etc.) were moved to the
[/public/](../public/) directory because Next.js can only serve static files
from there. The [migrate-imports.cjs](../scripts/migrate-imports.cjs) script was
used to update all relative imports to absolute imports in the
[/content/](../content/) and [/solutions/](../solutions/) directories.

## Motivation

### Why Next.js?

Gatsby had served the USACO Guide well, but several issues arose over time:

- Gatsby’s
  [GraphQL data layer](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/graphql-api/)
  centralized all content into a schema and abstracted execution details
  - This prevented developers from optimizing data processing and loading,
    leading to long development server startup and build times.
- The Gatsby plugin ecosystem was outdated
  - When attempting to update dependencies (e.g., `gatsby-plugin-postcss`), peer
    dependency conflicts arose. This forced the repository to rely on outdated
    or deprecated dependencies to maintain functionality. Additionally, segment
    fault issues were reported to occur in recent Gatsby releases.
- Local development became slow and inconsistent
  - For instance, because of reliance on outdated dependencies, the Hot Module
    Replacement (HMR) was triggered continuously, which eventually led to memory
    leaks.

Next.js offered a modern React framework with up-to-date MDX plugins, increased
control over data processing, and flexible rendering. This supported our goal of
increasing performance, supporting long-term maintainability, and avoiding
framework-specific workarounds.

## Architecture Changes

In the previous Gatsby repository, the `gatsby-node.ts` file orchestrated:

- GraphQL node creation for `.mdx` and `.json` files from the `content/` and
  `solutions/` directories
- Dynamic page creation for the syllabus, module, and solution pages
- Schema customization using type definitions
- Development and build-time webpack configuration

The Next.js system design replicated this functionality while adapting to the
changes in the framework.

### High-Level Architecture

The migration replaced Gatsby’s GraphQL-based build with a two-phase static
pipeline: a prebuild content ingestion phase and a parallelized page generation
phase.

![Infrastructure Diagram](<usaco-next infrastructure-2026-02-09-212647.png>)

1. Ingestion phase (prebuild, single execution)
   - Traversed the filesystem to process and load content sources (`.mdx` and
     `.json`)
   - Performed expensive content processing exactly once
   - Persisted
     [normalized](https://www.geeksforgeeks.org/dbms/introduction-of-database-normalization/),
     queryable representations into a local
     [SQLite](https://www.npmjs.com/package/@types/better-sqlite3) database

2. Page generation phase (Next.js build)
   - Pages queried only the data they required
   - Queries were read-only and indexed
   - Page generation was parallel and decoupled from content traversal

Invariants:

- All content had to be representable without filesystem access during page
  generation.
- Page components could not directly parse MDX or JSON.

### Ingestion Layer (Prebuild Indexing)

File: [index-content.ts](../scripts/index-content.ts)

This script was responsible for populating and indexing the SQLite database.

Key Characteristics:

- Deterministic
  - Walked `/content` and `/solutions` exactly once
  - No page reprocessing
- Explicit parsing steps
  - MDX parsing, frontmatter extraction, and problem metadata processing were
    all separated into functions
- Batch-oriented execution
  - Files were processed in batches to control memory and CPU pressure
- Transactional persistence
  - SQLite writes occurred inside
    [transactions](https://www.geeksforgeeks.org/sql/sql-transactions/) to
    guarantee atomicity and performance

This phase output a fully populated SQLite database (`/public/data/content.db`)
that represented the complete content universe. This phase replaced Gatsby’s
`onCreateNode` function and repeated content parsing during page generation.

### Persistence Layer

The SQLite database became the interface between ingestion and rendering.

Key characteristics:

- SQLite
  - Embedded, zero configuration
  - Fast local reads
- Normalized schemas
  - Separate tables for:
    - MDX content
    - Frontmatter
    - Problems
    - Problems lists
    - Metadata (slugs, relationships)
- Indexing strategy
  - [Secondary B-tree indices](https://sqlite.org/btreemodule.html) on:
    - MDX type (module or solution)
    - Division (Bronze, Silver, Gold, Platinum, etc.)
    - Solution IDs
    - Module IDs
    - Problem sources

This yielded predictable $\mathcal{O}(\log n)$ behavior during page generation.

### Database Access Layer

File: [database.ts](../src/lib/database.ts)

This layer encapsulated:

- Connection lifecycle management
- Read-only vs. writable modes
- [Singleton](https://www.geeksforgeeks.org/system-design/singleton-design-pattern/)
  enforcement

It enforced a single access abstraction so higher layers never interacted with
SQLite directly. This provided easier refactoring and prevented accidental write
access during rendering.

### Query Layer

File: [queryContent.ts](../src/lib/queryContent.ts)

This layer provided query functions to abstract away SQL queries. For example,
the `querySolution` and `queryModule` functions took an `id: string` as an
explicit argument and returned the proper data from the database. These
functions used explicit types to match the expected content.

### Page Generation (Next.js)

During `next build`:

- Pages called query functions to fetch data they needed
- Queries were read-only, indexed, and independent
- Static generation ran in parallel across multiple workers

### Complexity Analysis

- Average `.mdx` (`/content/`) file size: ~11.91 KB
- Average `.mdx` (`/solutions/`) file size: ~5.11 KB
- Average `.json` (`/content/`) file size: ~3.93 KB

#### Gatsby Architecture Complexity (Previous)

**Core Bottlenecks:**

- **MDX Processing**:
  $\mathcal{O}(M \times (C + I \times (F + \text{ImageProcessing})))$
  - $M$ = ~883 MDX files, $C$ = content size, $I$ = images per file
  - Each file processed with 9 remark + 3 rehype plugins = high constant factor
  - Image processing: $\mathcal{O}(I \times F)$ where $F$ = total files in
    system
- **Solution-to-Problem Filtering**: $\mathcal{O}(S \times P)$ (quadratic)
  - $S$ = solutions, $P$ = ~1451 problems
  - Each solution scanned all problems to find matches
- **Git Operations**: $\mathcal{O}(M_{\text{content}} \times G)$
  - Individual `git log` calls per content file
  - $G$ = expensive I/O time (10-100ms per call)
- **GraphQL Queries**: $\mathcal{O}(N \log N)$ where $N$ = total nodes

**Overall Gatsby Complexity:**
$\mathcal{O}(M \times C \times I \times \text{ImageProcessing} + S \times P + M_{\text{content}} \times G + N \log N)$

**Performance Impact:**

- ~60-70% build time: MDX compilation + image processing
- ~15-20%: Git operations (I/O bottleneck)
- ~10-15%: Problem/solution processing
- ~5%: GraphQL queries and page creation

#### Next.js Migration Complexity

The new architecture eliminated these bottlenecks through separation of
concerns:

**One-Time Ingestion Phase:**

- File system traversal: $\mathcal{O}(n)$ where $n$ = total content files
- MDX processing: $\mathcal{O}(M \times C)$ (single pass, no repeated image
  lookups)
- Problem deduplication: $\mathcal{O}(P)$ (efficient Map-based)
- Git operations: Amortized $\mathcal{O}(n)$ (batched commands)
- Database indexing: $\mathcal{O}(N \log N)$ where $N$ = total rows

**Build Phase:**

- Per-page queries: $\mathcal{O}(1)$ to $\mathcal{O}(\log n)$ (indexed lookups)
- Parallel generation: $\mathcal{O}(p \times \log n)$ where $p$ = pages in
  parallel
- No content parsing: MDX pre-compiled during ingestion

**Overall Next.js Complexity:**

- **Ingestion phase:** $\mathcal{O}(n + M \times C + N \log N)$
- **Build phase:** $\mathcal{O}(p \times q \times \log n)$, where $q$ is a small
  constant number of queries per page

**Algorithmic Gains:**

- Eliminated $\mathcal{O}(S \times P)$ quadratic solution filtering
- Reduced git operations from $\mathcal{O}(M \times G)$ to amortized
  $\mathcal{O}(n)$ via batching
- Replaced repeated MDX compilation with single-pass processing

### Database Schema Design

#### Table: `mdx_content`

Stored parsed `.mdx` files (both modules and solutions).

```sql
CREATE TABLE mdx_content (
  id TEXT PRIMARY KEY,                    -- frontmatter.id
  type TEXT NOT NULL,                     -- 'module' | 'solution'
  file_path TEXT NOT NULL,                -- relative file path
  frontmatter_json TEXT NOT NULL,         -- JSON string of MdxFrontmatter
  body TEXT NOT NULL,                     -- compiled MDX body (string)
  toc_json TEXT NOT NULL,                 -- JSON string of TableOfContents
  mdast_json TEXT,                        -- JSON string of mdast
  cpp_oc INTEGER NOT NULL DEFAULT 0,
  java_oc INTEGER NOT NULL DEFAULT 0,
  py_oc INTEGER NOT NULL DEFAULT 0,
  division TEXT,                          -- SectionID or NULL
  git_author_time TEXT,                   -- ISO timestamp or NULL
  created_at INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
);


CREATE INDEX idx_mdx_content_type ON mdx_content(type);
CREATE INDEX idx_mdx_content_division ON mdx_content(division);
```

#### Table: `problems`

Stored problem information.

```sql
CREATE TABLE problems (
  unique_id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  source TEXT NOT NULL,
  source_description TEXT,
  is_starred INTEGER DEFAULT 0,           -- SQLite boolean as INTEGER
  difficulty TEXT NOT NULL,               -- ProblemDifficulty enum
  tags_json TEXT NOT NULL,                -- JSON array of strings
  solution_json TEXT NOT NULL,            -- JSON string of ProblemSolutionInfo
  in_module INTEGER DEFAULT 0,
  module_id TEXT,                         -- Foreign key to mdx_content.id
  problem_data_json TEXT NOT NULL         -- Full ProblemInfo as JSON for quick retrieval
);


CREATE INDEX idx_problems_module_id ON problems(module_id);
CREATE INDEX idx_problems_source ON problems(source);
```

#### Table: `module_problem_lists`

Stored module problem list relationships.

```sql
CREATE TABLE module_problem_lists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  module_id TEXT NOT NULL,               -- Foreign key to mdx_content.id
  list_id TEXT NOT NULL,
  problems_json TEXT NOT NULL,           -- JSON array of ProblemInfo
  UNIQUE(module_id, list_id)
);


CREATE INDEX idx_module_problem_lists_module_id ON module_problem_lists(module_id);
```

#### Table: `module_frontmatter`

Stored lightweight module frontmatter for quick lookups.

```sql
CREATE TABLE module_frontmatter (
  file_path TEXT PRIMARY KEY,
  module_id TEXT NOT NULL,               -- Foreign key to mdx_content.id
  frontmatter_json TEXT NOT NULL,        -- JSON string of MdxFrontmatter
  division TEXT NOT NULL,                -- SectionID
  UNIQUE(module_id)
);


CREATE INDEX idx_module_frontmatter_division ON module_frontmatter(division);
```

#### Table: `solution_frontmatter`

Stored lightweight solution frontmatter.

```sql
CREATE TABLE solution_frontmatter (
  file_path TEXT PRIMARY KEY,
  solution_id TEXT NOT NULL,             -- Foreign key to mdx_content.id
  frontmatter_json TEXT NOT NULL         -- JSON string of MdxFrontmatter
);


CREATE INDEX idx_solution_frontmatter_solution_id ON solution_frontmatter(solution_id);
```

#### Table: `problem_slugs`

Mapped problem slugs to unique IDs.

```sql
CREATE TABLE problem_slugs (
  slug TEXT PRIMARY KEY,
  unique_id TEXT NOT NULL,                -- Foreign key to problems.unique_id
  UNIQUE(unique_id)
);
```

#### Table: `usaco_ids`

Stored USACO problem IDs.

```sql
CREATE TABLE usaco_ids (
  id TEXT PRIMARY KEY
);
```

## Performance & Quality Benchmarking Plan

Gatsby and Next.js were compared across:

1. Build & dev performance
   - BUILD_COLD - Cold production build time
   - BUILD_WARM - Cached production build time
   - DEV_STARTUP - Development server startup latency

Additionally, CONTENT_INGEST_TIME (time to parse + index content) was measured
for Next.js.

2. Query performance
   - CONTENT_QUERY_LATENCY_AVG - Average/mean query latency
   - CONTENT_QUERY_LATENCY_P95 - 95th percentile query latency

It was still being decided which GraphQL vs. SQL queries to benchmark.

3. Code quality
   - TS_CHECK_TIME - TypeScript type-check speed
   - LINT_TIME - Linting speed
   - FRESH_DEPS - Amount of non-updated dependencies

4. Runtime performance
   - Core Web Vitals (LCP, CLS, INP, FCP)
   - BUNDLE_SIZE - Total JavaScript bundle size

[Benchmarks](/benchmarks/) will be tracked over time and included in PRs when
relevant.

### Framework Benchmarks Comparison

| Metric                    | Gatsby | Next.js |
| ------------------------- | ------ | ------- |
| Median BUILD_COLD         | TBD    | 77.92s  |
| Median BUILD_WARM         | TBD    | 66.79s  |
| Median DEV_STARTUP        | TBD    | 5.49s   |
| CONTENT_INGEST_TIME       | -      | TBD     |
| CONTENT_QUERY_LATENCY_AVG | TBD    | TBD     |
| CONTENT_QUERY_LATENCY_P95 | TBD    | TBD     |
| Median TS_CHECK_TIME      | TBD    | 4.52s   |
| Median LINT_TIME          | TBD    | 4.30s   |
| FRESH_DEPS                | TBD    | TBD     |
| LCP                       | TBD    | TBD     |
| INP                       | TBD    | TBD     |
| CLS                       | TBD    | TBD     |
| FCP                       | TBD    | TBD     |

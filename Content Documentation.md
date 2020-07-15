## Content Formatting Documentation

All modules are written in [Markdown](https://www.markdownguide.org/cheat-sheet/). There are special additions to the markdown that we have added to this site.
These special additions are still under development, so they may change frequently.
If you are confused about something, or if there's a certain feature that you want to add, reach out to Nathan Wang.

You can use [StackEdit](https://stackedit.io/) to check that latex renders properly.

[Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)

#### Using Sublime Text with .mdx

1. Download [here](https://www.sublimetext.com/).
2. Open the command palette (Cmd-Shift-P) and install package control.
3. Open the command palette again, install package -> PackageResourceViewer
4. Extract the HTML package with PackageResourceViewer.
5. Now you can modify `html_completions.py` by adding to `normal_tags` (ex. `spoiler`)
   - actually, for some reason uppercase (`CPPSection`) doesn't work ...
6. Open a `.mdx` file and set syntax highlighting to be the same as `.md` with `View -> Syntax -> Open all with current extension as ... -> Markdown -> Markdown`.
7. Make snippets!

### `ordering.ts`

Located at `content/ordering.ts`, this file stores the ordering of the modules. Hopefully the format is self-explanatory
(it matches based on "slug"). Let Nathan Wang know if you have questions.

### Frontmatter

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is the stuff in the beginning of each module that's surrounded
by three dashes. Frontmatter is written in [YAML](https://yaml.org/). It stores the "metadata" for each module.

YAML formatting is _extremely strict_. Be careful about spaces. Additionally, escape special characters by wrapping the string with double quotes.

- **ID**: _Required_. The ID of the module. Ex: `getting-started`, or `containers`. This ID is used to identify
  the module, so make sure it is **unique** and **all lowercase with dashes only**. The URL will be generated based off this.
- **Title**: _Required_. The title of the module. Ex: `Getting Started`
- **Author**: _Required_. The author of the module. Ex: `Unknown`
- **Description**: _Required_. A short description of the module, similar to what [codecademy](https://www.codecademy.com/learn/paths/computer-science) has in their syllabus. Markdown/Latex does not work in the description field.
- **Prerequisites**: _Optional_. Any prerequisites for this module. (Coming soon: If you want to reference a module as a prerequisite, you can list the module ID.)
- **Frequency**: _Optional_. Takes a number 0-4 inclusive, where 0 = never shown up before and 4 = shows up ~once a contest. Leave this field out if you don't want to show the frequency.

### Problem Lists

todo document this... Relevant files are `content/models.ts` and `src/components/markdown/Problems.tsx`. Hopefully, the existing mdx files can help you out...

Problem constructor:

```typescript
constructor(
  public source: string,
  public name: string,
  public id: string,
  public difficulty?: 'Intro' | 'Easy' | 'Normal' | 'Hard' | 'Very Hard',
  public starred?: boolean,
  public tags?: string[],
  public sketch?: string,
)
```

Example usage:

```mdx
---
id: ds
title: Data Structures
author: Nathan Wang, Darren Yao, Benjamin Qi
description: Introductory problems using sets and maps.
prerequisites:
  - Bronze - "Built-In C++ Containers" or "Built-In Java Collections"
---

import { Problem } from '../models';

export const metadata = {
  problems: {
    standard: [
      new Problem('YS', 'Associative Array', 'associative_array', 'Intro'),
      new Problem('CSES', 'Distinct Numbers', '1621', 'Intro'),
      new Problem(
        'CSES',
        'Sum of Two Values',
        '1640',
        'Intro',
        false,
        [],
        'Can be solved without sets.'
      ),
      new Problem('CSES', 'Concert Tickets', '1091', 'Easy', false, [
        'iterators',
      ]),
      new Problem('CSES', 'Towers', '1073', 'Easy', false, [
        'multiset',
        'greedy',
      ]),
      new Problem('CSES', 'Traffic Lights', '1163', 'Normal', false, ['set']),
      new Problem('CSES', 'Room Allocation', '1164', 'Normal', false, [
        'multiset',
        'greedy',
      ]),
    ],
  },
};

## Standard

Do roughly the first half of the Sorting and Searching section in the [CSES Problem Set](https://cses.fi/problemset/).

<problems-list problems={metadata.problems.standard} />
```

### Spoilers

Spoilers are collapsible elements that only show themselves when the user clicks on it. It's useful
when writing solutions to problems.

```
<spoiler title="Show Solution">

- Insert OP benq solution here

</spoiler>
```

### Info Block

```
<info-block title="Insert Title Here">

**Markdown is Supported!!**

</info-block>
```

### Warning Block

```
<warning-block title="Insert Title Here">

**Markdown is Supported!!**

</warning-block>
```

### Optional Block

```
<optional-content title="Insert Title Here">

Fun fact: the title attribute is optional.

</optional-content>
```

### Example Module

```
---
id: getting-started
title: Getting Started
description: Welcome to the guide! We'll introduce what programming competitions are and how this guide is organized.
author: Nathan Wang
order: 1
prerequisites:
 - Dummy prerequisite
 - running-cpp
---

# Hello World!
```

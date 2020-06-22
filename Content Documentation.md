## Content Formatting Documentation

All modules are written in [Markdown](https://www.markdownguide.org/cheat-sheet/). There are special additions to the markdown that we have added to this site.
These special additions are still under development, so they may change frequently.
If you are confused about something, or if there's a certain feature that you want to add, reach out to Nathan Wang.

You can use [StackEdit](https://stackedit.io/) to check that latex renders properly.

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
- **Problems**: _Optional_. A list of problems in the article. As we haven't figured out what we're going to do with
  **it's best to not include this yet.** For USACO problems, enter each problem as `division_filename`. Ex: `bronze_promote`.

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
problems:
 - bronze_promote
 - bronze_word
 - bronze_paint
 - bronze_square
---

# Hello World!
```

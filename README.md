# USACO Guide

A collection of curated, high-quality resources to take you from Bronze to Platinum.

All markdown files belong in `content/`. Other files are for the front-end dashboard interface. 
The content should not care about how the front-end interface is implemented. That way, we can easily
change the front-end interface without having to rewrite the content.


## Content Formatting Documentation

All modules are written in Markdown. There are special additions to the markdown that we have added to this site.
These special additions are still under development, so they may change frequently.
If you are confused about something, or if there's a certain feature that you want to add, reach out to Nathan Wang.

### Frontmatter

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is the stuff in the beginning of each module that's surrounded 
by three dashes. Frontmatter is written in [YAML](https://yaml.org/). It stores the "metadata" for each module.

YAML formatting is _extremely strict_. Be careful about spaces.

- **Slug**: _Required_. The URL of the module. Ex: `/intro/getting-started`, or `/bronze/containers/`
- **Title**: _Requried_. The title of the module. Ex: `Getting Started`
- **Author**: _Required_. The author of the module. Ex: `Unknown`
- **Order**: _Required_. The order in which this module appears in the syllabus, **relative to its division**.
- **Prerequisites**: _Optional_. Any prerequisites for this module.

The prerequisite formatting is rather unintuitive. It expects an array of arrays, where the first item is
the name of the prerequisite, and the optional second item is a link. **Note the number of spaces!**

Example:
```
prerequisites:
 -
     - Prerequisite Name
     - https://dummy.prerequisite.link.com/
 -
     - Another Prerequisite Without a Link
```

- **Problems**: _Optional_. A list of problems in the article. As we haven't figured out what we're going to do with 
  **it's best to not include this yet.** For USACO problems, enter each problem as `division_filename`. Ex: `bronze_promote`. 

### Module Description

Everything after the frontmatter, and before this line:

```
<!-- END DESCRIPTION -->
```

is part of the "module description." It gets rendered on the homepage. Be careful not to use headers
as they will look really weird on the homepage. The module description is also included in the article itself.

If you don't want a description for the module, just put the `END DESCRIPTION` line as the first line
after the frontmatter.

If you want a description that appears only on the homepage but not the article, wrap it in
an HTML element with the class `syllabus-only`. Note that you can't use markdown in HTML elements.

Example:
```
<ul class="syllabus-only">
  <li>Contest Format</li>
  <li>Choosing a Language</li>
  <li>Practicing and Debugging</li>
  <li>Contest Strategies</li>
</ul>

<!-- END DESCRIPTION -->
```

This will render as a list in the homepage, but won't appear in the article.

### Spoilers

Spoilers are collapsible elements that only show themselves when the user clicks on it. It's useful
when writing solutions to problems. The styling of the spoilers is still a work in progress (especially for spoilers in lists).

```
<details>
  <summary>Show Solution</summary>

  - Insert OP benq solution here
</details>
```

The `summary` tag is shown. Everything below it is only shown after the user chooses to "reveal" spoilers.

The formatting of the details is **very delicate**. In particular, note the empty line after the summary tag
and before the content of the details tag. **This empty line must be indented to the beginning of the details tag.**
For example:

```
- Here's a list
- And below is a details tag in a list (which looks kind of ugly right now; hopefully it'll be fixed soon)
- <details>                                      // Indented with two characters (a dash and a space)
    <summary>Show Solution</summary>             // Indented with FOUR spaces
                                                 // Indented with TWO spaces
    - Insert OP benq solution here               // Indented with FOUR spaces
  </details>
```

### Example Module

```
---
slug: /intro/getting-started
title: Getting Started
author: Nathan Wang
order: 1
prerequisites:
 -
     - Dummy prerequisite
     - https://dummy.prerequisite.link.com/
 -
     - Another Prerequisite
problems:
 - bronze_promote
 - bronze_word
 - bronze_paint
 - bronze_square
---

<ul class="syllabus-only">
  <li>Contest Format</li>
  <li>Choosing a Language</li>
  <li>Practicing and Debugging</li>
  <li>Contest Strategies</li>
</ul>

<!-- END DESCRIPTION -->

<details>
  <summary>Show Solution</summary>

  - Insert OP benq solution here
</details>

# Hello World!
```
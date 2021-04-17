# Content Documentation

Note: You may find [this live editor](https://usaco.guide/editor) helpful when
writing modules.

The following two modules are good to read:

1. https://usaco.guide/general/modules
2. https://usaco.guide/general/code-con

All modules are written in
[Markdown](https://www.markdownguide.org/cheat-sheet/). There are special
additions to the markdown that we have added to this site. If you are confused
about something, or if there's a certain feature that you want to add, reach out
to Nathan Wang.

## 1. Getting Started

### Using the Editor (recommended)

The easiest way to edit content is to use our live
[editor](https://usaco.guide/liveupdate). If you choose this option, you can
skip the rest of the "Getting Started" section.

### Running Site Locally

You can also [run a local version of the site](Front%20End%20Documentation.md)
in order to view your changes. This is useful if you need to use Tailwind CSS
classes, which don't work with /editor.

### Using Sublime Text with .mdx

1. Download [here](https://www.sublimetext.com/).
2. Open the command palette (Cmd-Shift-P) and install package control.
3. Open the command palette again, install package -> PackageResourceViewer
4. Extract the HTML package with PackageResourceViewer.
5. Now you can modify `html_completions.py` by adding to `normal_tags` (ex.
   `spoiler`)
   - actually, for some reason uppercase (`CPPSection`) doesn't work ...
6. Open a `.mdx` file and set syntax highlighting to be the same as `.md` with
   `View -> Syntax -> Open all with current extension as ... -> Markdown -> Markdown`.
7. Make snippets!

### Other Tools

- You can use [StackEdit](https://stackedit.io/) to check that latex renders
  properly.
- [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)

## 2. Module Ordering

### Organization

There are six **sections** in the guide: Intro, Bronze, Silver, Gold, Platinum,
and Advanced. Each section is subdivided into **categories**, which is just a
group of modules. Each **module** represents one "article" or "page" on the
site.

### `ordering.ts`

Located at `content/ordering.ts`, this file stores the ordering of the modules.
Hopefully the format is self-explanatory (it matches based on "slug"). Let
Nathan Wang know if you have questions.

## 3. Frontmatter

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is the stuff in the
beginning of each module that's surrounded by three dashes. Frontmatter is
written in [YAML](https://yaml.org/). It stores the "metadata" for each module.

- **ID**: _Required_. The ID of the module. Ex: `getting-started`, or
  `containers`. This ID is used to identify the module, so make sure it is
  **unique** and **all lowercase with dashes only**. The URL will be generated
  based off this.
- **Title**: _Required_. The title of the module. Ex: `Getting Started`
- **Author**: _Required_. The author of the module. Ex: `Unknown`
- **Description**: _Required_. A short description of the module, similar to
  what [codecademy](https://www.codecademy.com/learn/paths/computer-science) has
  in their syllabus. Markdown/Latex does not work in the description field.
- **Prerequisites**: _Optional_. Any prerequisites for this module. If you want
  to reference a module as a prerequisite, list it as a module ID. A link will
  be auto-generated.
- **Frequency**: _Optional_. Takes a number 0-4 inclusive, where 0 = never shown
  up before and 4 = shows up ~once a contest. Leave this field out if you don't
  want to show the frequency.

### Example Frontmatter

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

# Getting Started
...
```

### Linking to Modules

Do `[insert text here](/general/code-con)`.

Don't use relative links like `code-con`, that will break our link checker...

### Link Checker

`yarn build && yarn serve` -- keep this terminal alive!

`yarn check-links`

If crash due to some `bhttp` error, it's probably a timeout. To fix temporarily,
run:

```
blc http://localhost:9000 -rof --exclude train.usaco.org
```

And find where it crashes, then check the broken link manually and add to
exclusion list. As train.usaco.org sometimes crashes, it's added already.

## 4. Table of Contents

A table of contents will be auto-generated based off of the headings in the
Markdown. Keep this in mind when formatting your module.

## 5. MDX and Custom Components

We're using [MDX](https://mdxjs.com/), a superset of Markdown. HTML and React
components are supported, so it is possible to add interactivity / custom
components to each module.

Some components are globally available in every module (without having to be
imported):

- `<Spoiler>`
- `<Info>`
- `<Warning>`
- `<Optional>`
- `<Problems>`
- `<FocusProblem>`
- `<Resources>`
- `<Resource>`
- `<TextTooltip>`
- `<LanguageSection>`
- `<CPPSection>`
- `<JavaSection>`
- `<PySection>`
- `<IncompleteSection>`
- `<Asterisk>`

These are all documented below.

### Using Custom Components

Interleaving Markdown in JSX is currently a work-in-progress:
https://github.com/mdx-js/mdx/issues/628. As such, in order to use markdown with
custom components, we need to leave **blank lines** between the HTML tags and
the markdown.

```mdx
Good:

<Spoiler>

This is **bold**.

</Spoiler>
```

```mdx
Bad:

<Spoiler>This is NOT **bold**.</Spoiler>

<Spoiler>This isn't **bold** either!</Spoiler>
```

### Spoilers

Spoilers are collapsible elements that only show themselves when the user clicks
on it. It's useful when writing solutions to problems.

```
<Spoiler title="Show Solution">

- Insert OP benq solution here

</Spoiler>
```

### Info Block

```
<Info title="Insert Title Here">

**Markdown is Supported!!**

</Info>
```

### Warning Block

```
<Warning title="Insert Title Here">

Fun fact: the title attribute is optional.

</Warning>
```

### Optional Content

```
<Optional title="Insert Title Here">

Fun fact: the title attribute is optional.

</Optional>
```

### Problem Lists

Each module has two corresponding files, a `.mdx` file and a `.problems.json`
file. The `.problems.json` file stores the focus problems and problem lists used
in that module; it is also indexed by Algolia for problem search.

The `.problems.json` file holds an object, where keys are problem list names (or
focus problem names) and values are arrays of `ProblemMetadata` objects. For
focus problems, the array should have length exactly one. Additionally, the
`.problems.json` file should have a `MODULE_ID` key with value equal to a string
that represents the module ID.

For more information on problem definitions, refer to `src/models/problem.ts`.

There is a distinction between `ProblemInfo` and `ProblemMetadata`.
`ProblemMetadata` is what is stored in `[module].problems.json`. Gatsby takes
`ProblemMetadata` and converts it into `ProblemInfo` at build time; React
components use `ProblemInfo` when interacting with problem information. The
documentation below is for `ProblemMetadata`, which is what content authors will
be writing.

`ProblemMetadata` fields:

`uniqueId` -- The uniqueId of the problem. Problem progress is linked to this,
so don't change this (otherwise problem progress will be lost). By convention,
it's `[source]-[SlugifiedProblemNameCamelCased]`.

- If the problem name is only one word, the word is lower cased.
- If the problem is USACO or CSES, the unique ID is instead
  `usaco-[USACO URL Number]` or `cses-[CSES number]`.
- If the problem is Codeforces, the unique ID is
  `cf-[contestNumber][problemLetter]`. If it's CF Gym, it's
  `cfgym-[gymNumber][problemLetter]`.
- If the problem is an OI with a year, the unique ID is
  `[oiName]-[twodigityear]-[slugifiedName]`.

Here are some example unique ID's:

```
cses-2177
poi-08-blockade
apio-18-duathlon
dmoj-investment
infoarena-xortransform
usaco-949
cses-1691
kattis-chineseremainder
cfgym-102538F
cf-1209H
spoj-LexicographicalStringSearch
ys-AssociativeArray
```

Problems with the same unique ID are expected to have identical names, sources,
and URL's.

`name` -- The name of the problem. Should not include source.

Examples:

```
2009 - Beetle
Greedy Pie Eaters
Zuma
2014 - The Stables of Genghis Khan
```

`source` -- The source of the problem. Restricted to: _todo, refer to
`src/models/problem.ts` `contests` and `probSources`_

`difficulty` -- The difficulty of the problem **relative to the module it is
in**. Valid options are `Very Easy`, `Easy`, `Normal`, `Hard`, `Very Hard`,
`Insane`

`isStarred` -- Whether this problem should be starred or not.

`tags` -- List of tags for this problem.

`solutionMetadata` -- Information about the solution.

```ts
export type ProblemMetadata = Omit<ProblemInfo, 'solution'> & {
  solutionMetadata:
    | {
        // auto generate problem solution label based off of the given site
        // For sites like CodeForces: "Check contest materials, located to the right of the problem statement."
        kind: 'autogen-label-from-site';
        // The site to generate it from. Sometimes this may differ from the source; for example, Codeforces could be the site while Baltic OI could be the source if Codeforces was hosting a Baltic OI problem.
        site: string;
      }
    | {
        // internal solution
        kind: 'internal';
      }
    | {
        // URL solution
        // Use this for links to PDF solutions, etc
        kind: 'link';
        url: string;
      }
    | {
        // Competitive Programming Handbook
        // Ex: 5.3 or something
        kind: 'CPH';
        section: string;
      }
    | {
        // USACO solution, generates it based off of the USACO problem ID
        // ex. 1113 is mapped to sol_prob1_gold_feb21.html
        kind: 'USACO';
        usacoId: string;
      }
    | {
        // IOI solution, generates it based off of the year
        // ex. Maps year = 2001 to https://ioinformatics.org/page/ioi-2001/27
        kind: 'IOI';
        year: number;
      }
    | {
        // no solution exists
        kind: 'none';
      }
    | {
        // for focus problems, when the solution is presented in the module of the problem
        kind: 'in-module';
        moduleId: string;
      }
    | {
        kind: 'sketch';
        sketch: string;
      };
};
```

To add problem editorials, create a new file under the `solutions/` folder. Try
to name it something reasonable; follow existing naming conventions.

Editorials are also written in MDX. The frontmatter has four fields:

```
---
id: cses-1621
source: CSES
title: Distinct Numbers
author: Nathan Wang
---

... solution
```

The ID of the solution frontmatter must be the same as the unique ID of the
problem. Make sure to also update the problem metadata to "internal" for any
associated problems. We assume that if there is an internal solution, we should
use it; therefore, the build will throw an error if there is an internal
solution but the problem metadata isn't set to "internal".

Example usage:

```mdx
<Problems problems="problems" />
```

`[module].problems.json` should have a key of `problems` that maps to an array
of `ProblemMetadata`.

### Focus Problem

Displays a singular problem as a "focus problem."

```
<FocusProblem problem="genPermutations" />
```

`[module].problems.json` should have a key of `genPermutations` that maps to an
**array** of length 1.

### Resource Lists

```
<Resources>
  <Resource
    source="Errichto"
    title="Video - How to test your solution"
    url="https://www.youtube.com/watch?v=JXTVOyQpSGM"
    starred
  >
    using a script to stress test
  </Resource>
  ...
</Resources>
```

Special functionality based on source:

- If the source is a book, it'll automatically set the URL to point to the book.
  - Supported books:
    - `GCP` (Guide to Competitive Programming)
    - `CPH` (Competitive Programming Handbook)
    - `PAPS` (Principles of Algorithmic Problem Solving)
    - `CP2` (Competitive Programming 2)
    - `IUSACO` (Darren's book; will auto-set URL based on user language; uses
      C++ for Python users)
- Some sources have URL shortcuts that they will prepend to the URL.
  - ```typescript
    const sources = {
      TC:
        'https://www.topcoder.com/community/competitive-programming/tutorials/',
      CPC: 'https://github.com/SuprDewd/T-414-AFLV/tree/master/',
      CF: 'http://codeforces.com/',
      'cp-algo': 'https://cp-algorithms.com/',
      CSA: 'https://csacademy.com/lesson/',
      GFG: 'https://www.geeksforgeeks.org/',
      Benq:
        'https://github.com/bqi343/USACO/blob/master/Implementations/content/',
      HR: 'https://www.hackerrank.com/',
      SO: 'https://stackoverflow.com/',
      Infoarena: 'https://infoarena.ro/',
    };
    ```
- Some sources will automatically have tooltips generated for them.
  - ```typescript
    export const sourceTooltip = {
      GCP: 'Guide to Competitive Programming (based off CPH)',
      AoPS: 'Art of Problem Solving',
      CPH: "Book - Competitive Programmer's Handbook",
      PAPS: 'Book - Principles of Algorithmic Problem Solving',
      IUSACO: 'Book - An Introduction to USACO',
      CP1: 'Book - Competitive Programming 1',
      TC: 'TopCoder',
      IOI: 'International Olympiad in Informatics',
      TLX: 'tlx.toki.id',
      CPC:
        'Competitive Programming Course (taught at Reykjavík University, Iceland)',
      CF: 'CodeForces',
      'cp-algo': 'CP Algorithms',
      CSA: 'CS Academy',
      GFG: 'Geeks For Geeks',
      Benq: 'github.com/bqi343/USACO',
      HR: 'HackerRank',
      CSES: 'Code Submission Evaluation System (includes CPH problemset)',
      HE: 'HackerEarth',
      AC: 'AtCoder',
      CC: 'CodeChef',
      DMOJ: 'DMOJ: Modern Online Judge',
      SPOJ: 'Sphere Online Judge',
      YS: 'Library Checker',
      LC: 'LeetCode',
      POI: 'Polish Olympiad in Informatics',
      SO: 'StackOverflow',
      KA: 'KhanAcademy',
      USACO: 'USACO',
      'Old Bronze': 'USACO Platinum did not exist prior to 2015-16.',
      'Old Silver': 'USACO Platinum did not exist prior to 2015-16.',
      'Old Gold': 'USACO Platinum did not exist prior to 2015-16.',
      Bronze: 'USACO 2015-16 to present',
      Silver: 'USACO 2015-16 to present',
      Gold: 'USACO 2015-16 to present',
      Plat: 'USACO 2015-16 to present',
      ZLE: 'kauntaofficial.github.io',
    };
    ```

### Tooltips

There are two main types of tooltips: text tooltips, which display a dotted
underline under the text, and asterisk tooltips, which render an asterisk that
can be hovered over.

#### `<TextTooltip>`

```jsx
<TextTooltip content="Popup text goes here">short text goes here</TextTooltip>
```

#### `<Asterisk>`

```jsx
<Asterisk>Popup text goes here</Asterisk>
```

### Language-Specific Content

```mdx
<LanguageSection>
<CPPSection>

# A heading that only appears in C++

CPP content goes here, note the newlines!

</CPPSection>
<JavaSection>

Java content goes here!

</JavaSection>
<PySection />
</LanguageSection>
```

In the example above, nothing will be rendered for Python.

### Incomplete Section

```mdx
<IncompleteSection>

- this list is optional and can be used to specify what is missing
- missing 32-bit integer explanation

</IncompleteSection>
```

### Code Blocks and Code Snippets

Code blocks are separated by three backticks, just like in normal markdown.
Additionally, we have support for collapsible code snippets:

````markdown
```cpp
//BeginCodeSnip{Optional Code Snippet Title}
My snippet code goes here
You can indent the entire BeginCodeSnip block (including the BeginCodeSnip line) and it will function as expected
//EndCodeSnip

Another example of a snippet without titles:

//BeginCodeSnip{}
My snippet code goes here
//EndCodeSnip

My non-snippet code goes here
```
````

Some common snippets have shorthand notations, as defined in
`src/mdx-plugins/rehype-snippets.js`. They can be accessed using
`CodeSnip{Snip ID}`.

````markdown
## Kattio

```java
import java.io.*;
import java.util.*;

public class myClass {
	CodeSnip{Kattio}

    public static void main ...
}
```

`CodeSnip{Kattio}` gets replaced with an indented version (based off of
indentation of `CodeSnip`):

```java
//BeginCodeSnip{Kattio}
static class Kattio extends PrintWriter {
	private BufferedReader r;
	private StringTokenizer st;

	// standard input
	public Kattio() { this(System.in,System.out); }
	public Kattio(InputStream i, OutputStream o) {
		super(o);
		r = new BufferedReader(new InputStreamReader(i));
	}
	// USACO-style file input
	public Kattio(String problemName) throws IOException {
		super(new FileWriter(problemName+".out"));
		r = new BufferedReader(new FileReader(problemName+".in"));
	}

	// returns null if no more input
	public String next() {
		try {
			while (st == null || !st.hasMoreTokens())
				st = new StringTokenizer(r.readLine());
			return st.nextToken();
		} catch (Exception e) {}
		return null;
	}

	public int nextInt() { return Integer.parseInt(next()); }
	public double nextDouble() { return Double.parseDouble(next()); }
	public long nextLong() { return Long.parseLong(next()); }
}
//EndCodeSnip
```

## C++ Long Template

```cpp
CodeSnip{Benq Template}
```

Gets replaced with
[Benq's Long Template](https://github.com/bqi343/USACO/blob/master/Implementations/content/contest/TemplateLong.cpp).

## C++ Short Template

```cpp
CodeSnip{TemplateShort}
```

Is replaced with

```cpp
//BeginCodeSnip{C++ Short Template}
#include <bits/stdc++.h> // see /general/running-code-locally
using namespace std;

using ll = long long;

using vi = vector<int>;
#define pb push_back
#define all(x) begin(x), end(x)
#define sz(x) (int)(x).size()

using pi = pair<int,int>;
#define f first
#define s second
#define mp make_pair

void setIO(string name = "") {
	cin.tie(0)->sync_with_stdio(0); // see /general/fast-io
	if (sz(name)) {
		freopen((name+".in").c_str(), "r", stdin); // see /general/io
		freopen((name+".out").c_str(), "w", stdout);
	}
}
//EndCodeSnip
```
````

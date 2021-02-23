# Content Documentation

Note: You may find [this live editor](https://usaco.guide/liveupdate) helpful when writing modules.

The following two modules are good to read:

1. https://usaco.guide/general/modules
2. https://usaco.guide/general/code-con

All modules are written in [Markdown](https://www.markdownguide.org/cheat-sheet/). There are special additions to the markdown that we have added to this site. If you are confused about something, or if there's a certain feature that you want to add, reach out to Nathan Wang.

## 1. Getting Started

### Running Site Locally

It is highly recommended to [run a local version of the site](Front%20End%20Documentation.md) in order to view your changes.

### Using Sublime Text with .mdx

1. Download [here](https://www.sublimetext.com/).
2. Open the command palette (Cmd-Shift-P) and install package control.
3. Open the command palette again, install package -> PackageResourceViewer
4. Extract the HTML package with PackageResourceViewer.
5. Now you can modify `html_completions.py` by adding to `normal_tags` (ex. `spoiler`)
   - actually, for some reason uppercase (`CPPSection`) doesn't work ...
6. Open a `.mdx` file and set syntax highlighting to be the same as `.md` with `View -> Syntax -> Open all with current extension as ... -> Markdown -> Markdown`.
7. Make snippets!

### Other Tools

- You can use [StackEdit](https://stackedit.io/) to check that latex renders properly.
- [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables)

## 2. Module Ordering

### Organization

There are six **sections** in the guide: Intro, Bronze, Silver, Gold, Platinum, and Advanced. Each section is subdivided into **categories**, which is just a group of modules. Each **module** represents one "article" or "page" on the site.

### `ordering.ts`

Located at `content/ordering.ts`, this file stores the ordering of the modules. Hopefully the format is self-explanatory (it matches based on "slug"). Let Nathan Wang know if you have questions.

## 3. Frontmatter

[Frontmatter](https://jekyllrb.com/docs/front-matter/) is the stuff in the beginning of each module that's surrounded by three dashes. Frontmatter is written in [YAML](https://yaml.org/). It stores the "metadata" for each module.

- **ID**: _Required_. The ID of the module. Ex: `getting-started`, or `containers`. This ID is used to identify the module, so make sure it is **unique** and **all lowercase with dashes only**. The URL will be generated based off this.
- **Title**: _Required_. The title of the module. Ex: `Getting Started`
- **Author**: _Required_. The author of the module. Ex: `Unknown`
- **Description**: _Required_. A short description of the module, similar to what [codecademy](https://www.codecademy.com/learn/paths/computer-science) has in their syllabus. Markdown/Latex does not work in the description field.
- **Prerequisites**: _Optional_. Any prerequisites for this module. If you want to reference a module as a prerequisite, list it as a module ID. A link will be auto-generated.
- **Frequency**: _Optional_. Takes a number 0-4 inclusive, where 0 = never shown up before and 4 = shows up ~once a contest. Leave this field out if you don't want to show the frequency.

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

If crash due to some `bhttp` error, it's probably a timeout. To fix temporarily, run:

```
blc http://localhost:9000 -rof --exclude train.usaco.org
```

And find where it crashes, then check the broken link manually and add to exclusion list. As train.usaco.org sometimes crashes, it's added already.

## 4. Table of Contents

A table of contents will be auto-generated based off of the headings in the Markdown. Keep this in mind when formatting your module.

## 5. MDX and Custom Components

We're using [MDX](https://mdxjs.com/), a superset of Markdown. HTML and React components are supported, so it is possible to add interactivity / custom components to each module.

Some components are globally available in every module (without having to be imported):

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

Interleaving Markdown in JSX is currently a work-in-progress: https://github.com/mdx-js/mdx/issues/628. As such, in order to use markdown with custom components, we need to leave **blank lines** between the HTML tags and the markdown.

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

Spoilers are collapsible elements that only show themselves when the user clicks on it. It's useful when writing solutions to problems.

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

**Problem sketches are deprecated. Do not add any new problem sketches.**

Problem constructor syntax:

```
new Problem("Source", "Problem Name", "Problem ID (this is used to generate link to problem)", "Difficulty", starred, ["tags"], "editorial-id", "editorial quality")
```

To add problem editorials, create a new file under the `solutions/` folder. Try to name it something reasonable; follow existing naming conventions.

Editorials are also written in MDX. The frontmatter has three fields:

```
---
id: cses-1621
title: CSES Distinct Numbers
author: Nathan Wang
---

... solution
```

The author field is optional.

To reference that editorial:

```
new Problem("CSES", "Distinct Numbers", "1621", "Easy", false, ["sets"], "cses-1621", "good")
```

The important parameters are the last two: `cses-1621` is equal to the frontmatter ID, and `good` shows a green check next to the problem to indicate that the editorial is of high quality.

Problem constructor:

```typescript
class Problem {
	constructor(
		public source: string,
		public name: string,
		public id: string,
		labels?: 'Very Easy' | 'Easy' | 'Normal' | 'Hard' | 'Very Hard' | 'Insane',
		public starred?: boolean,
		public tags?: string[],
		sol?: string, // either a URL, an empty string (USACO auto-populates), or a problem editorial ID
		public solQuality: 'bad' | 'ok' | 'good' = 'ok'
	) {}
}
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

export const problems = {
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
};

## Standard

Do roughly the first half of the Sorting and Searching section in the [CSES Problem Set](https://cses.fi/problemset/).

<Problems problems={problems.standard} />
```

### Focus Problem

Displays a singular problem as a "focus problem."

```
<FocusProblem problem={problems.genPermutations[0]} />
```

Make sure to still use an array: `gatsby-node.ts` expects all exported problems to be in arrays...

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
    - `IUSACO` (Darren's book; will auto-set URL based on user language; uses C++ for Python users)
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

There are two main types of tooltips: text tooltips, which display a dotted underline under the text, and asterisk tooltips, which render an asterisk that can be hovered over.

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

Code blocks are separated by three backticks, just like in normal markdown. Additionally, we have support for collapsible code snippets:

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

Some common snippets have shorthand notations, as defined in `src/mdx-plugins/rehype-snippets.js`. They can be accessed using `CodeSnip{Snip ID}`.

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

`CodeSnip{Kattio}` gets replaced with an indented version (based off of indentation of `CodeSnip`):

```java
//BeginCodeSnip{Kattio}
class Kattio extends PrintWriter {
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

Gets replaced with [Benq's Long Template](https://github.com/bqi343/USACO/blob/master/Implementations/content/contest/TemplateLong.cpp).

## C++ Short Template

```cpp
CodeSnip{Template Short}
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

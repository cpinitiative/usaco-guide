"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["We're using ", _jsxDEV(_components.a, {
        href: "https://mdxjs.com/",
        rel: "nofollow",
        target: "_blank",
        children: "MDX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 13
      }, this), ", a superset of Markdown, using the\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/wooorm/xdm",
        rel: "nofollow",
        target: "_blank",
        children: "XDM compiler"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 1
      }, this), ". HTML and React components are\r\nsupported, so it is possible to add interactivity / custom components to each\r\nmodule."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-frontmatter",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-frontmatter",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Frontmatter"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 7,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.a, {
        href: "https://jekyllrb.com/docs/front-matter/",
        rel: "nofollow",
        target: "_blank",
        children: "Frontmatter"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), " is the stuff in the\r\nbeginning of each module that's surrounded by three dashes. Frontmatter is\r\nwritten in ", _jsxDEV(_components.a, {
        href: "https://yaml.org/",
        rel: "nofollow",
        target: "_blank",
        children: "YAML"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 12
      }, this), ". It stores the \"metadata\" for each module."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "ID"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Required"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 11
        }, this), ". The ID of the module. Ex: ", _jsxDEV(_components.code, {
          children: "getting-started"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 49
        }, this), ", or\r\n", _jsxDEV(_components.code, {
          children: "containers"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 3
        }, this), ". This ID is used to identify the module, so make sure it is\r\n", _jsxDEV(_components.strong, {
          children: "unique"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 3
        }, this), " and ", _jsxDEV(_components.strong, {
          children: "all lowercase with dashes only"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 15,
          columnNumber: 18
        }, this), ". The URL will be generated\r\nbased off this."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Title"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Required"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 14
        }, this), ". The title of the module. Ex: ", _jsxDEV(_components.code, {
          children: "Getting Started"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 55
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Author"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Required"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 15
        }, this), ". The author of the module. Ex: ", _jsxDEV(_components.code, {
          children: "Unknown"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 18,
          columnNumber: 57
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Contributors"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Optional"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 21
        }, this), ". The people who contributed code and/or short\r\nexplanations to the module."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Description"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Required"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 20
        }, this), ". A short description of the module, similar to\r\nwhat ", _jsxDEV(_components.a, {
          href: "https://www.codecademy.com/learn/paths/computer-science",
          rel: "nofollow",
          target: "_blank",
          children: "codecademy"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 22,
          columnNumber: 8
        }, this), " has\r\nin their syllabus. Markdown/LaTeX does not work in the description field."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Prerequisites"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Optional"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 24,
          columnNumber: 22
        }, this), ". Any prerequisites for this module. If you want\r\nto reference a module as a prerequisite, list it as a module ID. A link will\r\nbe auto-generated."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Frequency"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Optional"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 27,
          columnNumber: 18
        }, this), ". Takes a number 0-4 inclusive, where 0 = never shown\r\nup before and 4 = shows up ~once a contest. Leave this field out if you don't\r\nwant to show the frequency."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 27,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.strong, {
          children: "Redirects"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 3
        }, this), ": ", _jsxDEV(_components.em, {
          children: "Optional"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 30,
          columnNumber: 18
        }, this), ". Takes a list of URLs that will redirect to the\r\ncurrent module. Add a redirect whenever you change the module ID or move the\r\nmodule to a different division."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 30,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-example-frontmatter",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-frontmatter",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example Frontmatter"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "---\r\nid: getting-started\r\ntitle: Getting Started\r\ndescription: Welcome to the guide! We'll introduce what programming competitions are and how this guide is organized.\r\nauthor: Nathan Wang\r\norder: 1\r\nprerequisites:\r\n - Dummy prerequisite\r\n - running-cpp\r\nredirects:\r\n  - /silver/bipartite\r\n---\r\n\r\n# Getting Started\r\n...\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-module-ordering",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-module-ordering",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Module Ordering"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Located at ", _jsxDEV(_components.code, {
        children: "content/ordering.ts"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 12
      }, this), ", this file stores the ordering of the modules.\r\nThe format should be self-explanatory (it matches based on the ID)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-linking-to-modules",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-linking-to-modules",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Linking to Modules"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Linking to another module within the guide looks like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "[insert text here](/general/practicing)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 63,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "/general/practicing",
        children: "insert text here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Don't use relative links like ", _jsxDEV(_components.code, {
        children: "practicing"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 31
      }, this), ", as that will break our\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/cpinitiative/usaco-guide/blob/master/docs/Front%20End%20Documentation.md",
        rel: "nofollow",
        target: "_blank",
        children: "link checker"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-table-of-contents",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-table-of-contents",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Table of Contents"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "A table of contents will be auto-generated based off of the headings in the\r\nMarkdown. Keep this in mind when formatting your module."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-mdx-and-custom-components",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mdx-and-custom-components",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "MDX and Custom Components"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Some components are globally available in every module (without having to be\r\nimported):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Spoiler>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 98,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Info>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 99,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Warning>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 100,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 100,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Optional>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 101,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 101,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Problems>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<FocusProblem>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Resources>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 104,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Resource>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<TextTooltip>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 106,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<LanguageSection>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 107,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 107,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<CPPSection>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 108,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<JavaSection>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 109,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<PySection>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 110,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 110,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<CPPOnly>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 111,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<JavaOnly>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 112,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 112,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<PyOnly>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 113,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<IncompleteSection>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 114,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 114,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Asterisk>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 115,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.code, {
          children: "<Quiz>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 116,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 116,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 98,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "These are all documented below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-spoilers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-spoilers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Spoilers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Spoilers are collapsible elements that only show themselves when the user clicks\r\non it. It's useful when writing hints or solutions to problems. As a convention,\r\nwe do not use spoilers for module solutions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Spoiler title=\"Show Hint\">\r\n- Insert hint here\r\n</Spoiler>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-info-block",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-info-block",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Info Block"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 136,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Info title=\"Insert Title Here\">\r\n**Markdown is Supported!!**\r\n</Info>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 138,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-warning-block",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-warning-block",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Warning Block"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 148,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Warning title=\"Insert Title Here\">\r\nFun fact: the title attribute is optional.\r\n</Warning>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 150,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 150,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-optional-content",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-optional-content",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Optional Content"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 160,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Optional title=\"Insert Title Here\">\r\nFun fact: the title attribute is optional.\r\n</Optional>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 162,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-problem-lists",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problem-lists",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problem Lists"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Each module has two corresponding files, a ", _jsxDEV(_components.code, {
        children: ".mdx"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 44
      }, this), " file and a ", _jsxDEV(_components.code, {
        children: ".problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 174,
        columnNumber: 62
      }, this), "\r\nfile. The ", _jsxDEV(_components.code, {
        children: ".problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 175,
        columnNumber: 11
      }, this), " file stores the focus problems and problem lists used\r\nin that module; it is also indexed by Algolia for problem search."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 174,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        children: ".problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 5
      }, this), " file holds an object, where keys are problem list names (or\r\nfocus problem names) and values are arrays of ", _jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 47
      }, this), " objects. For\r\nfocus problems, the array should have length exactly one. Additionally, the\r\n", _jsxDEV(_components.code, {
        children: ".problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 1
      }, this), " file should have a ", _jsxDEV(_components.code, {
        children: "MODULE_ID"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 37
      }, this), " key with value equal to a string\r\nthat represents the module ID."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 178,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For more information on problem definitions, refer to ", _jsxDEV(_components.code, {
        children: "src/models/problem.ts"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 55
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Example usage:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 186,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Problems problems=\"problems\" />\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 188,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "[module].problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 1
      }, this), " should have a key of ", _jsxDEV(_components.code, {
        children: "problems"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 47
      }, this), " that maps to an array\r\nof ", _jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 4
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 192,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["There is a distinction between ", _jsxDEV(_components.code, {
        children: "ProblemInfo"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 32
      }, this), " and ", _jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 50
      }, this), ".\r\n", _jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 1
      }, this), " is what is stored in ", _jsxDEV(_components.code, {
        children: "[module].problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 196,
        columnNumber: 40
      }, this), ". Gatsby takes\r\n", _jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 1
      }, this), " and converts it into ", _jsxDEV(_components.code, {
        children: "ProblemInfo"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 197,
        columnNumber: 40
      }, this), " at build time; React\r\ncomponents use ", _jsxDEV(_components.code, {
        children: "ProblemInfo"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 198,
        columnNumber: 16
      }, this), " when interacting with problem information. The\r\ndocumentation below is for ", _jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 199,
        columnNumber: 28
      }, this), ", which is what content authors will\r\nbe writing."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "ProblemMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 202,
        columnNumber: 1
      }, this), " fields:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 202,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "uniqueId"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 204,
        columnNumber: 1
      }, this), " -- The uniqueId of the problem. Problem progress is linked to this,\r\nso don't change this (otherwise problem progress will be lost). By convention,\r\nit's ", _jsxDEV(_components.code, {
        children: "[source]-[SlugifiedProblemNameCamelCased]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 206,
        columnNumber: 6
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 204,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "If the problem name is only one word, the word is lower cased."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 208,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the problem is USACO or CSES, the unique ID is instead\r\n", _jsxDEV(_components.code, {
          children: "usaco-[USACO URL Number]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 210,
          columnNumber: 3
        }, this), " or ", _jsxDEV(_components.code, {
          children: "cses-[CSES number]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 210,
          columnNumber: 33
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 209,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the problem is Codeforces, the unique ID is\r\n", _jsxDEV(_components.code, {
          children: "cf-[contestNumber][problemLetter]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 212,
          columnNumber: 3
        }, this), ". If it's CF Gym, it's\r\n", _jsxDEV(_components.code, {
          children: "cfgym-[gymNumber][problemLetter]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 213,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If the problem is an OI with a year, the unique ID is\r\n", _jsxDEV(_components.code, {
          children: "[oiName]-[twodigityear]-[slugifiedName]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 215,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 214,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Here are some example unique ID's:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "cses-2177\r\npoi-08-blockade\r\napio-18-duathlon\r\ndmoj-investment\r\ninfoarena-xortransform\r\nusaco-949\r\ncses-1691\r\nkattis-chineseremainder\r\ncfgym-102538F\r\ncf-1209H\r\nspoj-LexicographicalStringSearch\r\nys-AssociativeArray\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Problems with the same unique ID are expected to have identical names, sources,\r\nand URL's."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 234,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 1
      }, this), " -- The name of the problem. Should not include source."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 237,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Examples:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 239,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "2009 - Beetle\r\nGreedy Pie Eaters\r\nZuma\r\n2014 - The Stables of Genghis Khan\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 241,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "source"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 1
      }, this), " -- The source of the problem. Restricted to: ", _jsxDEV(_components.em, {
        children: ["todo, refer to\r\n", _jsxDEV(_components.code, {
          children: "src/models/problem.ts"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 249,
          columnNumber: 1
        }, this), " ", _jsxDEV(_components.code, {
          children: "contests"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 249,
          columnNumber: 25
        }, this), " and ", _jsxDEV(_components.code, {
          children: "probSources"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 249,
          columnNumber: 40
        }, this)]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 248,
        columnNumber: 55
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 248,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "difficulty"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 1
      }, this), " -- The difficulty of the problem ", _jsxDEV(_components.strong, {
        children: "relative to the module it is\r\nin"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 251,
        columnNumber: 47
      }, this), ". Valid options are ", _jsxDEV(_components.code, {
        children: "Very Easy"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 25
      }, this), ", ", _jsxDEV(_components.code, {
        children: "Easy"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 38
      }, this), ", ", _jsxDEV(_components.code, {
        children: "Normal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 46
      }, this), ", ", _jsxDEV(_components.code, {
        children: "Hard"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 56
      }, this), ", ", _jsxDEV(_components.code, {
        children: "Very Hard"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 252,
        columnNumber: 64
      }, this), ",\r\n", _jsxDEV(_components.code, {
        children: "Insane"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 253,
        columnNumber: 1
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 251,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "isStarred"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 255,
        columnNumber: 1
      }, this), " -- Whether this problem should be starred or not."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 255,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "tags"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 257,
        columnNumber: 1
      }, this), " -- List of tags for this problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 257,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "solutionMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 259,
        columnNumber: 1
      }, this), " -- Information about the solution."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "export type ProblemMetadata = Omit<ProblemInfo, 'solution'> & {\r\n  solutionMetadata:\r\n    | {\r\n        // auto generate problem solution label based off of the given site\r\n        // For sites like Codeforces: \"Check contest materials, located to the right of the problem statement.\"\r\n        kind: 'autogen-label-from-site';\r\n        // The site to generate it from. Sometimes this may differ from the source; for example, Codeforces could be the site while Baltic OI could be the source if Codeforces was hosting a Baltic OI problem.\r\n        site: string;\r\n      }\r\n    | {\r\n        // internal solution\r\n        kind: 'internal';\r\n      }\r\n    | {\r\n        // URL solution\r\n        // Use this for links to PDF solutions, etc\r\n        kind: 'link';\r\n        url: string;\r\n      }\r\n    | {\r\n        // Competitive Programming Handbook\r\n        // Ex: 5.3 or something\r\n        kind: 'CPH';\r\n        section: string;\r\n      }\r\n    | {\r\n        // USACO solution, generates it based off of the USACO problem ID\r\n        // ex. 1113 is mapped to sol_prob1_gold_feb21.html\r\n        kind: 'USACO';\r\n        usacoId: string;\r\n      }\r\n    | {\r\n        // IOI solution, generates it based off of the year\r\n        // ex. Maps year = 2001 to https://ioinformatics.org/page/ioi-2001/27\r\n        kind: 'IOI';\r\n        year: number;\r\n      }\r\n    | {\r\n        // no solution exists\r\n        kind: 'none';\r\n      }\r\n    | {\r\n        // for focus problems, when the solution is presented in the module of the problem\r\n        kind: 'in-module';\r\n        moduleId: string;\r\n      }\r\n    | {\r\n        kind: 'sketch';\r\n        sketch: string;\r\n      };\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 261,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Editorials are also written in MDX. The frontmatter has four fields:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 315,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "---\r\nid: cses-1621\r\nsource: CSES\r\ntitle: Distinct Numbers\r\nauthor: Nathan Wang\r\n---\r\n\r\n... solution\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 317,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 317,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The ID of the solution frontmatter must be the same as the unique ID of the\r\nproblem. Make sure to also update the ", _jsxDEV(_components.code, {
        children: "kind"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 39
      }, this), " of the ", _jsxDEV(_components.code, {
        children: "solutionMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 329,
        columnNumber: 53
      }, this), " to\r\n", _jsxDEV(_components.code, {
        children: "'internal'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 330,
        columnNumber: 1
      }, this), " for any associated problems. We assume that if there is an internal\r\nsolution, we should use it; therefore, the build will throw an error if there is\r\nan internal solution but the ", _jsxDEV(_components.code, {
        children: "solutionMetadata"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 332,
        columnNumber: 30
      }, this), "'s ", _jsxDEV(_components.code, {
        children: "kind"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 332,
        columnNumber: 51
      }, this), " isn't set to"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 328,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "'internal'"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 334,
        columnNumber: 1
      }, this), ". The ", _jsxDEV(_components.a, {
        href: "/general/adding-solution",
        children: "Adding Solutions module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 334,
        columnNumber: 19
      }, this), " describes\r\nhow to add a new solution."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 334,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-focus-problem",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-focus-problem",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Focus Problem"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 337,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Displays a singular problem as a \"focus problem.\""
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 339,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<FocusProblem problem=\"genPermutations\" />\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 341,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 341,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "[module].problems.json"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 1
      }, this), " should have a key of ", _jsxDEV(_components.code, {
        children: "genPermutations"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 345,
        columnNumber: 47
      }, this), " that maps to an\r\n", _jsxDEV(_components.strong, {
        children: "array"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 346,
        columnNumber: 1
      }, this), " of length 1."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 345,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-resource-lists",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resource-lists",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resource Lists"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 348,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Resources>\r\n  <Resource\r\n    source=\"Errichto\"\r\n    title=\"Video - How to test your solution\"\r\n    url=\"https://www.youtube.com/watch?v=JXTVOyQpSGM\"\r\n    starred\r\n  >\r\n    using a script to stress test\r\n  </Resource>\r\n  ...\r\n</Resources>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 350,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 350,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Special functionality based on source:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 375,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If the source is a book, it'll automatically set the URL to point to the book.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Supported books:\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  children: "GCP"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 379,
                  columnNumber: 7
                }, this), " (Guide to Competitive Programming)"]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 379,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  children: "CPH"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 380,
                  columnNumber: 7
                }, this), " (Competitive Programming Handbook)"]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 380,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  children: "PAPS"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 381,
                  columnNumber: 7
                }, this), " (Principles of Algorithmic Problem Solving)"]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 381,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  children: "PAPS1"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 382,
                  columnNumber: 4
                }, this), " (Principles of Algorithmic Problem Solving)"]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 382,
                columnNumber: 2
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  children: "CP2"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 383,
                  columnNumber: 7
                }, this), " (Competitive Programming 2)"]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 383,
                columnNumber: 5
              }, this), "\n", _jsxDEV(_components.li, {
                children: [_jsxDEV(_components.code, {
                  children: "IUSACO"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 384,
                  columnNumber: 7
                }, this), " (Darren's book; will auto-set URL based on user language; uses\r\nC++ for Python users)"]
              }, undefined, true, {
                fileName: "<source.js>",
                lineNumber: 384,
                columnNumber: 5
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 379,
              columnNumber: 5
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 378,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 378,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Some sources will automatically have tooltips generated for them (listed\r\n", _jsxDEV(_components.a, {
          href: "https://github.com/cpinitiative/usaco-guide/blob/947a3ac220e330fa03aa5b53a201f80b0f4c208f/src/models/problem.ts#L22",
          rel: "nofollow",
          target: "_blank",
          children: "here"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 387,
          columnNumber: 3
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 386,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 377,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-tooltips",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tooltips",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tooltips"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 389,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are two main types of tooltips: text tooltips, which display a dotted\r\nunderline under the text, and asterisk tooltips, which render an asterisk that\r\ncan be hovered over."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 391,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-texttooltip",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-texttooltip",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "<TextTooltip>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 395,
        columnNumber: 6
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 395,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<TextTooltip content=\"Popup text goes here\">short text goes here</TextTooltip>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 397,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 397,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-asterisk",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-asterisk",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.code, {
        children: "<Asterisk>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 403,
        columnNumber: 6
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 403,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Asterisk>Popup text goes here</Asterisk>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 405,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 405,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-incomplete-section",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-incomplete-section",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Incomplete Section"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 411,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<IncompleteSection>\r\n\r\n- this list is optional and can be used to specify what is missing\r\n- missing 32-bit integer explanation\r\n\r\n</IncompleteSection>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 413,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 413,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-code-blocks-and-code-snippets",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code-blocks-and-code-snippets",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code Blocks and Code Snippets"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 429,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Code blocks are separated by three backticks, just like in normal markdown.\r\nAdditionally, we have support for collapsible code snippets. An example for how\r\nto use them can be found below:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 431,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "With title"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 435,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 435,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "// Before\r\n// BeginCodeSnip{Optional Code Snippet Title}\r\n// Code snippet goes here\r\n// You can indent the entire BeginCodeSnip block (including the BeginCodeSnip line) and it will function as expected\r\n// EndCodeSnip\r\n// After\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 437,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 437,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// Before\r\n// BeginCodeSnip{Optional Code Snippet Title}\r\n// Code snippet goes here\r\n// You can indent the entire BeginCodeSnip block (including the BeginCodeSnip\r\n// line) and it will function as expected EndCodeSnip After\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 446,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 446,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "Without title:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 454,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 454,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "// BeginCodeSnip{}\r\n// My snippet code goes here\r\n// EndCodeSnip\r\n// My non-snippet code goes here\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 456,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// BeginCodeSnip{}\r\n// My snippet code goes here\r\n// EndCodeSnip\r\n// My non-snippet code goes here\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 463,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 463,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Some common snippets have shorthand notations, as defined in\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/cpinitiative/usaco-guide/blob/master/src/mdx-plugins/rehype-snippets.js",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "src/mdx-plugins/rehype-snippets.js"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 471,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 471,
        columnNumber: 1
      }, this), ".\r\nThey can be accessed using ", _jsxDEV(_components.code, {
        children: "CodeSnip{Snip ID}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 472,
        columnNumber: 28
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 470,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-kattio",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-kattio",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Kattio"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 474,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "CodeSnip{Kattio}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 476,
        columnNumber: 1
      }, this), " gets replaced with an indented version (based off of\r\nindentation of ", _jsxDEV(_components.code, {
        children: "CodeSnip"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 477,
        columnNumber: 16
      }, this), "):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 476,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-java",
        children: "import java.io.*;\r\nimport java.util.*;\r\n\r\npublic class myClass {\r\n\t//BeginCodeSnip{Kattio}\n\tstatic class Kattio extends PrintWriter {\n\t\tprivate BufferedReader r;\n\t\tprivate StringTokenizer st;\n\t\t// standard input\n\t\tpublic Kattio() { this(System.in, System.out); }\n\t\tpublic Kattio(InputStream i, OutputStream o) {\n\t\t\tsuper(o);\n\t\t\tr = new BufferedReader(new InputStreamReader(i));\n\t\t}\n\t\t// USACO-style file input\n\t\tpublic Kattio(String problemName) throws IOException {\n\t\t\tsuper(problemName + \".out\");\n\t\t\tr = new BufferedReader(new FileReader(problemName + \".in\"));\n\t\t}\n\t\t// returns null if no more input\n\t\tpublic String next() {\n\t\t\ttry {\n\t\t\t\twhile (st == null || !st.hasMoreTokens())\n\t\t\t\t\tst = new StringTokenizer(r.readLine());\n\t\t\t\treturn st.nextToken();\n\t\t\t} catch (Exception e) { }\n\t\t\treturn null;\n\t\t}\n\t\tpublic int nextInt() { return Integer.parseInt(next()); }\n\t\tpublic double nextDouble() { return Double.parseDouble(next()); }\n\t\tpublic long nextLong() { return Long.parseLong(next()); }\n\t}\n\t//EndCodeSnip\n\tpublic static void main...\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 479,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 479,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-c-short-template",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-c-short-template",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "C++ Short Template"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 489,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "CodeSnip{CPP Short Template}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 491,
        columnNumber: 1
      }, this), " is replaced with"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 491,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "//BeginCodeSnip{C++ Short Template}\n#include <bits/stdc++.h> // see /general/running-code-locally\nusing namespace std;\n\nusing ll = long long;\n\nusing vi = vector<int>;\n#define pb push_back\n#define all(x) begin(x), end(x)\n#define sz(x) (int) (x).size()\n\nusing pi = pair<int,int>;\n#define f first\n#define s second\n#define mp make_pair\n\nvoid setIO(string name = \"\") {\n\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io\n\tif (sz(name)) {\n\t\tfreopen((name + \".in\").c_str(), \"r\", stdin); // see /general/input-output\n\t\tfreopen((name + \".out\").c_str(), \"w\", stdout);\n\t}\n}\n//EndCodeSnip\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 493,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-language-specific-content",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-language-specific-content",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Language-Specific Content"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 497,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<LanguageSection>\r\n<CPPSection>\r\n#### A heading that only appears in C++\r\n\r\n```cpp\r\nC++ code here\r\n```\r\n\r\n</CPPSection>\r\n<JavaSection>\r\n#### A heading that only appears in Java\r\n\r\n```java\r\nJava code here\r\n```\r\n\r\n</JavaSection>\r\n<PySection />\r\n</LanguageSection>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 499,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 499,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "In the example above, nothing will be rendered for Python."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 521,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["If you want to render content for only a single language, it is more convenient\r\nto use ", _jsxDEV(_components.code, {
        children: "CPPOnly"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 8
      }, this), ", ", _jsxDEV(_components.code, {
        children: "JavaOnly"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 19
      }, this), ", or ", _jsxDEV(_components.code, {
        children: "PyOnly"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 34
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 543,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<CPPOnly>\r\n#### A heading that only appears in C++\r\n\r\n```cpp\r\nC++ code here\r\n```\r\n\r\n</CPPOnly>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 546,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 546,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-quizzes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quizzes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quizzes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 566,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "<Quiz>\r\n\t<Quiz.Question>\r\n\t\tBinary search\r\n\r\n\t\t<Quiz.Answer>\r\n\t\t\t$O(\\log n)$\r\n\r\n\t\t\t<Quiz.Explanation>\r\n\t\t\t\tAlmost. Prefer $\\mathcal{O}$ over $O$.\r\n\t\t\t</Quiz.Explanation>\r\n\t\t</Quiz.Answer>\r\n\r\n\t\t<Quiz.Answer correct>\r\n\t\t\t$\\mathcal{O}(\\log n)$\r\n\r\n\t\t\t<Quiz.Explanation>\r\n\t\t\t\tThat's correct!\r\n\t\t\t</Quiz.Explanation>\r\n\t\t</Quiz.Answer>\r\n\t\t<Quiz.Answer>\r\n\t\t\tO(log n)\r\n\r\n\t\t\t<Quiz.Explanation>\r\n\t\t\t\tThat's not right. Latex is important...\r\n\t\t\t</Quiz.Explanation>\r\n\t\t</Quiz.Answer>\r\n\t</Quiz.Question>\r\n\t<Quiz.Question>\r\n\t\t```cpp\r\n\t\tfor (int i = 0; i < 100; i++) {\r\n\t\t\tfor (int j = 0; j < m; j++) {\r\n\t\t\t\t// constant time code here\r\n\t\t\t}\r\n\t\t}\r\n\t\t```\r\n\r\n\t\t<Quiz.Answer>\r\n\t\t\t$O(100m)$\r\n\r\n\t\t\t<Quiz.Explanation>\r\n\t\t\t\tThat's not correct. Constant factors are ignored.\r\n\t\t\t</Quiz.Explanation>\r\n\t\t</Quiz.Answer>\r\n\t\t<Quiz.Answer correct>\r\n\t\t\t$O(m)$\r\n\r\n\t\t\t<Quiz.Explanation>\r\n\t\t\t\tThat's correct!\r\n\t\t\t</Quiz.Explanation>\r\n\t\t</Quiz.Answer>\r\n\t</Quiz.Question>\r\n</Quiz>\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 568,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 568,
      columnNumber: 1
    }, this)]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 1,
    columnNumber: 1
  }, this);
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsxDEV(MDXLayout, {
    ...props,
    children: _jsxDEV(_createMdxContent, {
      ...props
    }, undefined, false, {
      fileName: "<source.js>"
    }, this)
  }, undefined, false, {
    fileName: "<source.js>"
  }, this) : _createMdxContent(props);
}
return {
  default: MDXContent
};
function _missingMdxReference(id, component, place) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\nIt’s referenced in your code at `" + place + "`" : ""));
}

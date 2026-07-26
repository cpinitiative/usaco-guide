"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["See ", _jsxDEV(_components.a, {
        href: "/general/working-mdx",
        children: "Working With MDX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 5
      }, this), " for additional information."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-steps",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-steps",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Steps"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: [_jsxDEV(_components.a, {
            href: "https://docs.github.com/en/free-pro-team@latest/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop",
            rel: "nofollow",
            target: "_blank",
            children: "Fork"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 6,
            columnNumber: 5
          }, this), "\r\nthe GitHub repository."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If you are adding a solution to a problem within a module, don't create a new file. If you are adding an internal solution, create a new ", _jsxDEV(_components.code, {
            children: "mdx"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 9,
            columnNumber: 142
          }, this), " file in ", _jsxDEV(_components.code, {
            children: "solutions/<division>/"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 9,
            columnNumber: 156
          }, this), " if it doesn't already exist, including frontmatter. Use ", _jsxDEV(_components.a, {
            href: "https://github.com/cpinitiative/usaco-guide/blob/master/solutions/silver/usaco-690.mdx",
            rel: "nofollow",
            target: "_blank",
            children: _jsxDEV(_components.code, {
              children: "solutions/silver/usaco-690.mdx"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 9,
              columnNumber: 237
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 9,
            columnNumber: 236
          }, this), " as an example:"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 9,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "---\r\nid: usaco-690\r\nsource: USACO Silver 2017 January\r\ntitle: Cow Dance Show\r\nauthor: (add your name here)\r\n---\r\n\r\n[Official Analysis](http://www.usaco.org/current/data/sol_cowdance_silver_jan17.html)\r\n\r\n## Explanation\r\n\r\n(add explanation here ...)\r\n\r\nUse `\\texttt{}` around variable names with length *greater than one*, like so. Place long equations on separate lines with display math, and use `\\cdot` instead of `*` to denote multiplication.\r\n\r\n$$\r\n\\texttt{arr}[i]=2\\cdot (a+b+c+d+e)+\\sum_{j=0}^{i-1}\\texttt{arr}[j]\r\n$$\r\n\r\nSome additional text styles which you might consider using:\r\n\r\nhttp://latexref.xyz/Font-styles.html\r\n\r\nhttp://applied-r.com/latex-font-styles/\r\n\r\n$func(var)$\r\n\r\n$\\textit{func(var)}$\r\n\r\n$\\textrm{func(var)}$\r\n\r\n$\\text{func(var)}$\r\n\r\n$\\textsf{func(var)}$\r\n\r\n$\\textbf{func(var)}$\r\n\r\n$\\texttt{func(var)}$\r\n\r\n## Implementation\r\n\r\n**Time Complexity:** $\\mathcal{O}(N\\log^2N)$\r\n\r\n^ Format time complexity like this. Should appear outside of `<LanguageSection>` if it's the same for all implementations.\r\n\r\nIf you need to link to a module, format your link like [this](/silver/binary-search) instead of [this](https://usaco.guide/silver/binary-search).\r\n\r\n<LanguageSection>\r\n\r\n<CPPSection>\r\n\r\n(add cpp code)\r\n\r\n</CPPSection>\r\n\r\n<PySection>\r\n\r\n(if you have Python code)\r\n\r\n</PySection>\r\n\r\n<JavaSection>\r\n\r\n(if you have Java code)\r\n\r\n</JavaSection>\r\n\r\n</LanguageSection>\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 11,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["Keep file names and solution IDs consistent. In particular, the ID for a\r\nUSACO problem (such as the one above) is the number at the very end of the\r\nURL on\r\n", _jsxDEV(_components.a, {
            href: "http://www.usaco.org/index.php?page=viewproblem2&cpid=690",
            rel: "nofollow",
            target: "_blank",
            children: "usaco.org"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 85,
            columnNumber: 5
          }, this), ". The\r\nname of a solution file should match the ID of the solution it contains. See\r\n", _jsxDEV(_components.a, {
            href: "/general/working-mdx#problem-lists",
            children: "Working With MDX"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 87,
            columnNumber: 5
          }, this), " for more examples of\r\nIDs."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 82,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Add your implementation, following these conventions\r\n", _jsxDEV(_components.a, {
            href: "#code-conventions",
            children: "below"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 91,
            columnNumber: 5
          }, this), ". It is ", _jsxDEV(_components.strong, {
            children: "not"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 91,
            columnNumber: 39
          }, this), " necessary to add an alternative\r\nimplementation in the same language as the official implementation unless\r\nthe alternative implementation takes a different approach or is better than\r\nthe official one."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 90,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["In the module's ", _jsxDEV(_components.code, {
            children: ".problems.json"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 96,
            columnNumber: 21
          }, this), " file (in this case,\r\n", _jsxDEV(_components.a, {
            href: "https://github.com/cpinitiative/usaco-guide/blob/master/content/3_Silver/Binary_Search.problems.json",
            rel: "nofollow",
            target: "_blank",
            children: _jsxDEV(_components.code, {
              children: "Binary_Search.problems.json"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 97,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 97,
            columnNumber: 5
          }, this), "),\r\nset ", _jsxDEV(_components.code, {
            children: "solutionMetadata"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 98,
            columnNumber: 9
          }, this), " to ", _jsxDEV(_components.code, {
            children: "{ \"kind\": \"internal\" }"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 98,
            columnNumber: 31
          }, this), ". Also add tags (if you want). If the problem is not in a\r\nmodule, you can add the problem to\r\n", _jsxDEV(_components.a, {
            href: "https://github.com/cpinitiative/usaco-guide/blob/master/content/extraProblems.json",
            rel: "nofollow",
            target: "_blank",
            children: _jsxDEV(_components.code, {
              children: "extraProblems.json"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 100,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 100,
            columnNumber: 5
          }, this), ". ", _jsxDEV(_components.strong, {
            children: "If the solution has hints"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 100,
            columnNumber: 113
          }, this), ", also specify that in ", _jsxDEV(_components.code, {
            children: "solutionMetadata"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 100,
            columnNumber: 165
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 96,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "{\r\n  \"uniqueId\": \"usaco-690\",\r\n  \"name\": \"Cow Dance Show\",\r\n  \"url\": \"http://www.usaco.org/index.php?page=viewproblem2&cpid=690\",\r\n  \"source\": \"Silver\",\r\n  \"difficulty\": \"Easy\",\r\n  \"isStarred\": false,\r\n  \"tags\": [\"Binary Search\", \"Sorted Set\"],\r\n  \"solutionMetadata\": {\r\n    \"kind\": \"internal\",\r\n    // \"hasHints\": true\r\n    // ^ uncomment the line above if the solution has hints\r\n  }\r\n},\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 102,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Check that both the module and the solution render properly using the\r\n", _jsxDEV(_components.a, {
            href: "/editor/",
            children: "live editor"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 120,
            columnNumber: 5
          }, this), " before submitting a\r\n", _jsxDEV(_components.a, {
            href: "https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests",
            rel: "nofollow",
            target: "_blank",
            children: "pull request"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 121,
            columnNumber: 5
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 119,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 119,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-code-conventions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-code-conventions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Code Conventions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 123,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Your code will be automatically formatted using ", _jsxDEV(_components.a, {
        href: "https://pre-commit.com/",
        rel: "nofollow",
        target: "_blank",
        children: "pre-commit"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 125,
        columnNumber: 49
      }, this), ".\r\nWe strive for code that is readable and understandable. If any code does not\r\ncompile or is hard to read, contact us."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Read our guidelines below before contributing code."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-general",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 131,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Indentation will automatically be converted to tabs."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 133,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 133,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "In general, do not include unused code (e.g. \"templates\")."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 134,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["There are some exceptions to this guideline (e.g. when using the ", _jsxDEV(_components.code, {
              children: "Kattio"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 135,
              columnNumber: 70
            }, this), "\r\nclass for Java I/O). In this case, collapse it with a\r\n", _jsxDEV(_components.a, {
              href: "/general/working-mdx#code-blocks-and-code-snippets",
              children: _jsxDEV(_components.code, {
                children: "CodeSnip"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 137,
                columnNumber: 6
              }, this)
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 137,
              columnNumber: 5
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 135,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 135,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 134,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Use universally understandable variable names, especially for Bronze and\r\nSilver. They should be more descriptive than what you would normally use\r\nin-contest."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 138,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Add comments throughout your code to explain your logic. Feel free to\r\ncopy-paste the official USACO solution and improve it by adding more\r\ndescriptive variable names and helpful comments. Though keep in mind the\r\nfollowing guidelines from Google's\r\n", _jsxDEV(_components.a, {
            href: "https://google.github.io/styleguide/cppguide.html#Comments",
            rel: "nofollow",
            target: "_blank",
            children: "C++ Style Guide"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 145,
            columnNumber: 3
          }, this), ":"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 141,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.blockquote, {
          children: ["\n", _jsxDEV(_components.p, {
            children: "But remember: while comments are very important, the best code is\r\nself-documenting. Giving sensible names to types and variables is much\r\nbetter than using obscure names that you must then explain through comments."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 147,
            columnNumber: 5
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 3
        }, this), "\n\n", _jsxDEV(_components.blockquote, {
          children: ["\n", _jsxDEV(_components.p, {
            children: "In general the actual name of the variable should be descriptive enough to\r\ngive a good idea of what the variable is used for."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 153,
            columnNumber: 5
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 153,
          columnNumber: 3
        }, this), "\n\n", _jsxDEV(_components.blockquote, {
          children: ["\n", _jsxDEV(_components.p, {
            children: "Self-describing code doesn't need a comment."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 158,
            columnNumber: 5
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 158,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 141,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Don't repeat yourself."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 160,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.a, {
              href: "https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)",
              rel: "nofollow",
              target: "_blank",
              children: "Rule Of Three"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 161,
              columnNumber: 5
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 161,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 161,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Once you've finished making the changes requested by a review, make sure to re-request the review."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 162,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 162,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 133,
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

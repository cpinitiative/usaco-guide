"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: ["All modules are written in ", _jsxDEV(_components.a, {
        href: "https://mdxjs.com/",
        rel: "nofollow",
        target: "_blank",
        children: "MDX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 28
      }, this), " (Markdown + JSX) with the\r\n", _jsxDEV(_components.a, {
        href: "https://mdxjs.com/packages/mdx/#compilefile-options",
        rel: "nofollow",
        target: "_blank",
        children: "@mdx-js/mdx"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 1
      }, this), " compiler. ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\LaTeX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 3,
        columnNumber: 78
      }, this), " is supported through\r\n", _jsxDEV(_components.a, {
        href: "https://katex.org/",
        rel: "nofollow",
        target: "_blank",
        children: "KaTeX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this), ", and the Guide uses a number of custom MDX\r\ncomponents. If you are confused about something, or if there's a certain feature\r\nthat you want to add, reach out to Nathan Wang."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-quick-start",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-quick-start",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Quick Start"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The USACO Guide has a public\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/cpinitiative/usaco-guide",
        rel: "nofollow",
        target: "_blank",
        children: "Github Repository"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["If you're looking to add/modify modules, refer to the ", _jsxDEV(_components.code, {
          children: "content/"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 57
        }, this), " folder."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["If you're looking to add/modify problem solutions, refer to the ", _jsxDEV(_components.code, {
          children: "solutions/"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 67
        }, this), "\r\nfolder."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["All static files (e.g., images, videos, etc.) have been moved to the\r\n", _jsxDEV(_components.a, {
          href: "../public/",
          children: "/public/"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 3
        }, this), " directory because Next.js can only serve static files\r\nfrom there.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Use absolute imports in the ", _jsxDEV(_components.a, {
              href: "../content/",
              children: "/content/"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 19,
              columnNumber: 35
            }, this), " and ", _jsxDEV(_components.a, {
              href: "../solutions/",
              children: "/solutions/"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 19,
              columnNumber: 64
            }, this), " directories."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 19,
            columnNumber: 5
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 19,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "(Almost) all the other files and folders are related to the front-end code."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you have any questions about how to contribute, feel free to just open an\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/cpinitiative/usaco-guide/issues",
        rel: "nofollow",
        target: "_blank",
        children: "issue"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 23,
        columnNumber: 1
      }, this), " or a\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/cpinitiative/usaco-guide/pulls",
        rel: "nofollow",
        target: "_blank",
        children: "pull request"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this), " and a team\r\nmember will be able to assist you. If you want, you can also ", _jsxDEV(_components.a, {
        href: "https://discord.gg/VCxUzdYhzN",
        rel: "nofollow",
        target: "_blank",
        children: "join our Discord server"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 62
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-using-the-editor-recommended",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-using-the-editor-recommended",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Using the Editor (recommended)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 31,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The easiest way to edit content is to use our live ", _jsxDEV(_components.a, {
        href: "/editor",
        children: "editor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 52
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 33,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-running-site-locally",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-running-site-locally",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Running Site Locally"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 35,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can also run a local version of the site in order to view your changes. This\r\nis useful if you need to use Tailwind CSS classes, which don't work with\r\n", _jsxDEV(_components.code, {
        children: "/editor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Set up your development environment.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Install ", _jsxDEV(_components.a, {
              href: "https://nodejs.org/en/",
              rel: "nofollow",
              target: "_blank",
              children: "Node.js"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 42,
              columnNumber: 14
            }, this), "\n", _jsxDEV(_components.ul, {
              children: ["\n", _jsxDEV(_components.li, {
                children: _jsxDEV(_components.code, {
                  children: "npm install -g yarn"
                }, undefined, false, {
                  fileName: "<source.js>",
                  lineNumber: 43,
                  columnNumber: 8
                }, this)
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 43,
                columnNumber: 6
              }, this), "\n"]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 43,
              columnNumber: 6
            }, this), "\n"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 42,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 42,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 41,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Clone repo\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Via command line:\r\n", _jsxDEV(_components.code, {
              children: "git clone https://github.com/cpinitiative/usaco-guide.git"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 46,
              columnNumber: 6
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 45,
            columnNumber: 4
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["Or use ", _jsxDEV(_components.a, {
              href: "https://desktop.github.com/",
              rel: "nofollow",
              target: "_blank",
              children: "Github Desktop"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 47,
              columnNumber: 13
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 47,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 45,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 44,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Install Dependencies\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              children: "yarn install"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 49,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 49,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 49,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Run development server\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: _jsxDEV(_components.code, {
              children: "yarn dev"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 51,
              columnNumber: 6
            }, this)
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 51,
            columnNumber: 4
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 51,
          columnNumber: 4
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["See the\r\n", _jsxDEV(_components.a, {
        href: "https://github.com/cpinitiative/usaco-guide/blob/master/docs/Front%20End%20Documentation.md",
        rel: "nofollow",
        target: "_blank",
        children: "front end documentation"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 54,
        columnNumber: 1
      }, this), "\r\nfor more information."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 53,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As a note, Gatsby typically supports Node.js versions in maintenance or long term support (LTS).\r\nYou can find the status of each version ", _jsxDEV(_components.a, {
        href: "https://github.com/nodejs/release#release-schedule",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 58,
        columnNumber: 41
      }, this), ".\r\nIt may be necessary to downgrade Node.js for this reason."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-ways-to-contribute",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-ways-to-contribute",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Ways to Contribute"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 61,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Some examples:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-lesson",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-lesson",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Lesson"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 65,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Convert lists of resources to tables (Plat / Advanced)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Add missing descriptions for sections, modules, or resources.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "All resources should have descriptions."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 69,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 69,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Improve explanations for sample problems.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "If starred resource or editorial already has a good explanation, no need to\r\nrepeat it."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 71,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 71,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Improve implementations.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "Make sure code compiles, remove excessive macros, add codesnips around\r\ntemplates."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 74,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "Should be consistent across languages."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 76,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 74,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 73,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Adding modules!"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "If you add a substantial amount of text content to a module, add your name to\r\nthe list of authors in the frontmatter."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "If you add code implementations or improve existing implementations in a more\r\nsignificant way than simply refactoring code, or if you add a short\r\nexplanation, add your name to the list of contributors."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 67,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-problems",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-problems",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Problems"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Convert lists of problems to tables (Plat / Advanced)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 86,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Fix problem difficulties and tags."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 87,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Add problems that are good examples of the module topic (and remove those that\r\nare not)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Adding official editorial links."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Adding editorials.\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: "If no editorial exists, or if existing editorial could be improved."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 92,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: "Or solution code in a different language, etc."
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 93,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 92,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 91,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-markdown-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-markdown-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Markdown Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://www.markdownguide.org/cheat-sheet/",
          rel: "nofollow",
          target: "_blank",
          children: "Markdown Cheat Sheet"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 97,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://www.tablesgenerator.com/markdown_tables",
          rel: "nofollow",
          target: "_blank",
          children: "Markdown Table Generator"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 98,
          columnNumber: 3
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 98,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Markdown Editors:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Using our ", _jsxDEV(_components.a, {
          href: "/editor",
          children: "online editor"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 102,
          columnNumber: 13
        }, this), " is probably best."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 102,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: _jsxDEV(_components.a, {
          href: "https://code.visualstudio.com/",
          rel: "nofollow",
          target: "_blank",
          children: "Visual Studio Code"
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
        children: [_jsxDEV(_components.a, {
          href: "https://www.sublimetext.com/",
          rel: "nofollow",
          target: "_blank",
          children: "Sublime Text"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 104,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              children: ".md"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 105,
              columnNumber: 5
            }, this), " syntax highlighting is fine, is also ok for ", _jsxDEV(_components.code, {
              children: ".mdx"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 105,
              columnNumber: 55
            }, this)]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 105,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: ["You can open a ", _jsxDEV(_components.code, {
              children: ".mdx"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 106,
              columnNumber: 20
            }, this), " file and set syntax highlighting to be the same as\r\n", _jsxDEV(_components.code, {
              children: ".md"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 107,
              columnNumber: 5
            }, this), " with\r\n", _jsxDEV(_components.code, {
              children: "View -> Syntax -> Open all with current extension as ... -> Markdown -> Markdown"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 108,
              columnNumber: 5
            }, this), "."]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 106,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.a, {
          href: "https://stackedit.io/",
          rel: "nofollow",
          target: "_blank",
          children: "StackEdit"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 109,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Automatically compiles ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\LaTeX"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 110,
              columnNumber: 28
            }, this), " (doesn't require an installation)"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 110,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 110,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 109,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.a, {
          href: "https://obsidian.md/",
          rel: "nofollow",
          target: "_blank",
          children: "Obsidian"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 111,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["Automatically compiles ", _jsxDEV(_components.code, {
              className: "language-math",
              children: "\\LaTeX"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 112,
              columnNumber: 28
            }, this), " (doesn't require an installation)"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 112,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 112,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
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

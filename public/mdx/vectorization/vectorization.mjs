"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
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
      children: [_jsxDEV(_components.a, {
        href: "https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html",
        rel: "nofollow",
        target: "_blank",
        children: "Pragmas"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " provide additional\r\ninformation to the compiler. Sometimes you'll see the following lines at the\r\nbeginning of a program."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#pragma GCC optimize(\"Ofast\")\r\n#pragma GCC target(\"avx2\")\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-about",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-about",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "About"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "According to KACTL:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 48,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "#pragma GCC optimize (\"Ofast\")"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 50,
          columnNumber: 3
        }, this), " will make GCC auto-vectorize for loops and\r\noptimizes floating points better (assumes associativity and turns off\r\n", _jsxDEV(_components.a, {
          href: "https://en.wikipedia.org/wiki/Denormal_number",
          rel: "nofollow",
          target: "_blank",
          children: "denormals"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 52,
          columnNumber: 3
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "#pragma GCC target (\"avx,avx2\")"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 53,
          columnNumber: 3
        }, this), " can double performance of vectorized code,\r\nbut causes crashes on old machines."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 53,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 50,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "According to CodinGame,"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 58,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "Modern CPUs can execute up to four instructions at the same time if they are\r\nindependent."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Can also check Wikipedia articles about\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions",
        rel: "nofollow",
        target: "_blank",
        children: "SSE"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 1
      }, this), " and\r\n", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Advanced_Vector_Extensions",
        rel: "nofollow",
        target: "_blank",
        children: "AVX"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 65,
        columnNumber: 1
      }, this), " (AVX is the more\r\nadvanced version)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-examples-from-cf",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-examples-from-cf",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Examples from CF"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The occasional Div 1 E is trivialized by this!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.a, {
          href: "https://codeforces.com/contest/855/submission/47823825",
          rel: "nofollow",
          target: "_blank",
          children: "Nagini"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 81,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.a, {
              href: "https://codeforces.com/contest/855/submission/89815214",
              rel: "nofollow",
              target: "_blank",
              children: "no pragmas"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 82,
              columnNumber: 5
            }, this), ": TLE 30"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 82,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.a, {
              href: "https://codeforces.com/contest/855/submission/89815479",
              rel: "nofollow",
              target: "_blank",
              children: _jsxDEV(_components.code, {
                children: "O3"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 83,
                columnNumber: 6
              }, this)
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 83,
              columnNumber: 5
            }, this), ": 3509ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 83,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.a, {
              href: "https://codeforces.com/contest/855/submission/89815327",
              rel: "nofollow",
              target: "_blank",
              children: _jsxDEV(_components.code, {
                children: "Ofast"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 84,
                columnNumber: 6
              }, this)
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 84,
              columnNumber: 5
            }, this), ": 3525ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 84,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.a, {
              href: "https://codeforces.com/contest/855/submission/72962496",
              rel: "nofollow",
              target: "_blank",
              children: [_jsxDEV(_components.code, {
                children: "Ofast"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 85,
                columnNumber: 6
              }, this), ", ", _jsxDEV(_components.code, {
                children: "avx"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 85,
                columnNumber: 15
              }, this)]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 85,
              columnNumber: 5
            }, this), ":\r\n2339ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 85,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.a, {
              href: "https://codeforces.com/contest/855/submission/72962508",
              rel: "nofollow",
              target: "_blank",
              children: [_jsxDEV(_components.code, {
                children: "Ofast"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 87,
                columnNumber: 6
              }, this), ", ", _jsxDEV(_components.code, {
                children: "avx2"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 87,
                columnNumber: 15
              }, this)]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 87,
              columnNumber: 5
            }, this), ":\r\n1544ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 87,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.a, {
              href: "https://codeforces.com/contest/855/submission/72962469",
              rel: "nofollow",
              target: "_blank",
              children: [_jsxDEV(_components.code, {
                children: "Ofast"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 89,
                columnNumber: 6
              }, this), ", ", _jsxDEV(_components.code, {
                children: "sse4"
              }, undefined, false, {
                fileName: "<source.js>",
                lineNumber: 89,
                columnNumber: 15
              }, this)]
            }, undefined, true, {
              fileName: "<source.js>",
              lineNumber: 89,
              columnNumber: 5
            }, this), ":\r\n2479ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 89,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 82,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 81,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.a, {
          href: "https://codeforces.com/contest/896/submission/47824007",
          rel: "nofollow",
          target: "_blank",
          children: "Welcome home, Chtholly"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 91,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: ["only ", _jsxDEV(_components.code, {
              children: "Ofast"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 92,
              columnNumber: 10
            }, this), ": TLE"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 92,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              children: "avx"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 93,
              columnNumber: 5
            }, this), ": 2354ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 93,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              children: "avx2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 94,
              columnNumber: 5
            }, this), ": 1684ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 94,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              children: "sse4"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 95,
              columnNumber: 5
            }, this), ": 2183ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 95,
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
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.a, {
          href: "https://codeforces.com/contest/1270/submission/68018017",
          rel: "nofollow",
          target: "_blank",
          children: "Awesome Substrings"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 96,
          columnNumber: 3
        }, this), "\n", _jsxDEV(_components.ul, {
          children: ["\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              children: "sse4"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 97,
              columnNumber: 5
            }, this), " / ", _jsxDEV(_components.code, {
              children: "avx"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 97,
              columnNumber: 14
            }, this), ": TLE"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 97,
            columnNumber: 3
          }, this), "\n", _jsxDEV(_components.li, {
            children: [_jsxDEV(_components.code, {
              children: "avx2"
            }, undefined, false, {
              fileName: "<source.js>",
              lineNumber: 98,
              columnNumber: 5
            }, this), ": 6894ms"]
          }, undefined, true, {
            fileName: "<source.js>",
            lineNumber: 98,
            columnNumber: 3
          }, this), "\n"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 97,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 81,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-where-can-i-use-these",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-where-can-i-use-these",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Where Can I Use These?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 100,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Whether these pragmas are supported depends on the computer architecture (see\r\n", _jsxDEV(_components.a, {
        href: "https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html#x86-Options",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 102,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "Ofast"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 3
        }, this), " with ", _jsxDEV(_components.code, {
          children: "avx2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 16
        }, this), " works on CF and DMOJ."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 105,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "sse4"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 106,
          columnNumber: 3
        }, this), " and ", _jsxDEV(_components.code, {
          children: "avx"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 106,
          columnNumber: 14
        }, this), " cause runtime errors on InfoArena and\r\n", _jsxDEV(_components.a, {
          href: "https://szkopul.edu.pl/",
          rel: "nofollow",
          target: "_blank",
          children: "Szkopuł"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 107,
          columnNumber: 3
        }, this), ". However,\r\n", _jsxDEV(_components.code, {
          children: "#pragma GCC optimize(\"unroll-loops\")"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 108,
          columnNumber: 3
        }, this), " seems to work on InfoArena (compare\r\n", _jsxDEV(_components.a, {
          href: "https://www.infoarena.ro/job_detail/2641920",
          rel: "nofollow",
          target: "_blank",
          children: "TLE"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 109,
          columnNumber: 3
        }, this), " and\r\n", _jsxDEV(_components.a, {
          href: "https://www.infoarena.ro/job_detail/2641921",
          rel: "nofollow",
          target: "_blank",
          children: "AC"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 110,
          columnNumber: 3
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 106,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["These have occasionally worked on past USACO problems, such as the unintended quadratic time solution at the end of ", _jsxDEV(_components.a, {
          href: "http://www.usaco.org/current/data/sol_prob3_silver_open22.html",
          rel: "nofollow",
          target: "_blank",
          children: "this problem"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 111,
          columnNumber: 119
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 111,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 105,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-why-should-i-not-use-these",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-why-should-i-not-use-these",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Why Should I ", _jsxDEV(_components.em, {
        children: "Not"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 18
      }, this), " Use These?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 113,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["From ", _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/66279?#comment-502965",
        rel: "nofollow",
        target: "_blank",
        children: "this comment"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 6
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 115,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "To everyone who doesn't know what's going on here: seems that topicstarter\r\ndoesn't know it either, and it looks like some magic for him."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 117,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 117,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It's ", _jsxDEV(_components.strong, {
        children: "not"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 6
      }, this), " a good idea to include these pragmas at the start of every program.\r\nAs mentioned above, these pragmas cause RE on some sites. Other times, they are\r\njust ignored by the compiler, or even worse, they might make your code slower\r\ninstead of faster (ex. see\r\n", _jsxDEV(_components.a, {
        href: "https://stackoverflow.com/questions/28875325/gcc-optimization-flag-o3-makes-code-slower-than-o2",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 124,
        columnNumber: 1
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 131,
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

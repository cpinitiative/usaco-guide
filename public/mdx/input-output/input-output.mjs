"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "The code snippets below will read in three integers as part of a single line and\r\noutput their sum. For example, given the input"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "1 2 3\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "the output will be as follows:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "The sum of these three numbers is 6\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 45,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Feel free to test them out at ", _jsxDEV(_components.a, {
        href: "https://ide.usaco.guide/",
        rel: "nofollow",
        target: "_blank",
        children: "ide.usaco.guide"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 31
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-standard-io",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-standard-io",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Standard I/O"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In most websites (such as Codeforces and CSES), and in USACO problems after\r\nDecember 2020, input and output are ", _jsxDEV(_components.strong, {
        children: "standard"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 37
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 59,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example-problem---weird-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-problem---weird-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example Problem - Weird Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 447,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Try to implement this yourself!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 451,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---weird-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---weird-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Weird Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 459,
      columnNumber: 1
    }, this), "\n\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-how-to-submit-your-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-how-to-submit-your-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "How to Submit Your Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 654,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Do the following to submit on CSES. Submitting on other platforms (such as\r\nUSACO) is similar."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 664,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: "Run your solution code with the sample input, and make sure that it produces the sample output."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 667,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Download your solution code into a file. The file extension should be one of ", _jsxDEV(_components.code, {
          children: ".cpp"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 81
        }, this), ", ", _jsxDEV(_components.code, {
          children: ".java"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 89
        }, this), ", ", _jsxDEV(_components.code, {
          children: ".py"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 668,
          columnNumber: 98
        }, this), " or their equivalents, depending on your programming language."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 668,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Open the problem statement. Log in if you aren't already logged in."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 669,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Press the submit tab (for USACO, scroll to the bottom of the page)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 670,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Upload your solution file. For CSES, assuming the file had the proper extension, the language should be automatically detected (for USACO, select the language yourself). Some platforms (such as Codeforces) allow you to paste your code into a text box instead of uploading a file."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 671,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: "Submit your solution. For CSES, you will be redirected to the results page (for USACO, results will appear at the top of the page). If your solution is correct on all the test cases, you're done! Otherwise, fix your code and start again from step 1."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 672,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 667,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-file-io",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-file-io",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "File I/O"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 694,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["In older USACO problems, the input and output file names are given and follow\r\nthe convention ", _jsxDEV(_components.code, {
        children: "problemname.in"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 704,
        columnNumber: 16
      }, this), ". After the program is run, output must be\r\nprinted to a file called ", _jsxDEV(_components.code, {
        children: "problemname.out"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 705,
        columnNumber: 26
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 703,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["You must use the correct file names when opening the ", _jsxDEV(_components.code, {
        children: ".in"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 709,
        columnNumber: 54
      }, this), " and ", _jsxDEV(_components.code, {
        children: ".out"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 709,
        columnNumber: 64
      }, this), " files,\r\ndepending on the problem. The file names are given on USACO problems which\r\nrequire file opening. For example, you would open ", _jsxDEV(_components.code, {
        children: "paint.in"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 711,
        columnNumber: 51
      }, this), " and ", _jsxDEV(_components.code, {
        children: "paint.out"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 711,
        columnNumber: 66
      }, this), " in\r\nthe above problem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 709,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-example-solution---fence-painting",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-example-solution---fence-painting",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Example Solution - Fence Painting"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 947,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.p, {
      children: ["For an explanation of the solutions below, check the\r\n", _jsxDEV(_components.a, {
        href: "/bronze/rect-geo#slow-solution",
        children: "Rectangle Geometry"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 963,
        columnNumber: 1
      }, this), " module."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 962,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-usaco-note---extra-whitespace",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-usaco-note---extra-whitespace",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "USACO Note - Extra Whitespace"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1174,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Importantly, USACO will automatically add a newline to the end of your file if\r\nit does not end with one."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1176,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Make sure not to output trailing spaces, or you will get an error such as the\r\nfollowing:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1187,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.img, {
        src: "/content/1_General/Error.png",
        alt: "bad"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1190,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 1190,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Here are some examples of what is allowed and what isn't when the intended\r\noutput consists of a single integer ", _jsxDEV(_components.code, {
        children: "ans"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 1193,
        columnNumber: 37
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 1192,
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

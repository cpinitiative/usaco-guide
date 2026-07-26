"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/70018",
        rel: "nofollow",
        target: "_blank",
        children: "Editorial (icecuber) (C++)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "/CPH.pdf#page=84",
        children: "CPH 7.5 (Edit Distance)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-explanation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-explanation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Explanation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We begin by initializing a ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 28
      }, this), " array, where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 55
      }, this), " is the minimum number of edits to convert the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 127
      }, this), " characters of the first string, which we denote as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 182
      }, this), ", into the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 214
      }, this), " characters of the second string, which we denote as ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 270
      }, this), ". The base cases in the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 309
      }, this), " array occur when one of the prefixes is empty."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This means we initialize the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 30
      }, this), " array as follows. Initialize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][0],"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 73
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 100
      }, this), " is the length of the prefix in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 135
      }, this), ", to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 158
      }, this), " because it takes a minimum of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 192
      }, this), " deletions to convert the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 227
      }, this), " characters into the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 257
      }, this), " characters of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 275
      }, this), " (an empty string). Similarly, initialize ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[0][j],"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 332
      }, this), " where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 359
      }, this), " is the length of the prefix in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 394
      }, this), ", to be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 417
      }, this), " because it takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 438
      }, this), " insertions to convert the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 474
      }, this), " characters of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 492
      }, this), " (also an empty string) into the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 546
      }, this), " characters of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 564
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now that we have initialized our ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 34
      }, this), " array, we can move onto the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 76
      }, this), " transition. The options we have are to delete, insert, or replace a character from ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 179
      }, this), ", or do nothing if the current characters are already equal."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 12,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we delete a character, we convert ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}[:i-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 40
      }, this), " into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}[:j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 67
      }, this), ", and then delete ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}[i-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 104
      }, this), ". Therefore, this means that, if the last operation is a deletion, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 191
      }, this), " is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i - 1][j] + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 223
      }, this), ", where the extra ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 268
      }, this), " is the cost of the delete operation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["When we insert a character, we effectively convert ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}[:i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 52
      }, this), " into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}[:j-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 77
      }, this), ", and then insert ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}[j-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 116
      }, this), ". So, ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 142
      }, this), " is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j-1] + 1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 174
      }, this), ", where the extra ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 217
      }, this), " is the cost of the insert operation."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, when we replace a character, we essentially convert ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}[:i-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 62
      }, this), " into ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}[:j-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 89
      }, this), ", then handle the last character. If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}[i-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 147
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}[j-1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 172
      }, this), " are different, then that counts as a replacement operation. So, the replacement operation can be represented compactly as"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 18,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j] = \\texttt{dp}[i - 1][j - 1] + (\\texttt{str1}[i - 1] \\neq \\texttt{str2}[j - 1]),"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}[i - 1] \\neq \\texttt{str2}[j - 1]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 7
      }, this), " is only ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 64
      }, this), " when we actually need to replace the letter."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Combining the transition for each operation, the minimum number of edits required to convert the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 104
      }, this), " characters in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str1}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 122
      }, this), " into the first ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 153
      }, this), " characters of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{str2}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 26,
        columnNumber: 171
      }, this), " is"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 26,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[i][j] = \\min(\\texttt{dp}[i - 1][j] + 1,~\\texttt{dp}[i][j-1] + 1,~\\texttt{dp}[i - 1][j - 1] + (\\texttt{str1}[i - 1] \\neq \\texttt{str2}[j - 1]))."
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Using this transition, since each state depends only on the cell above, the cell to the left, and the diagonal upper-left cell, we fill the table from top to bottom and left to right. Our final answer is ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp}[n][m]."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 205
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 37,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(NM)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
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

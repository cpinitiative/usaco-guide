"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: "This was the first problem I saw that involved this trick."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-solution",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For two vectors ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 17
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 25
      }, this), ", define the vector ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c=a\\oplus b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 48
      }, this), " to have entries\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_i=\\min_{k=0}^i\\left(a_k+b_{i-k}\\right)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), " for each\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "0\\le i < \\text{size}(a)+\\text{size}(b)-1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Similar to the editorial, define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[x][0][g]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 14,
        columnNumber: 34
      }, this), " to be the minimum cost\r\nto buy exactly ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 16
      }, this), " goods out of the subtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 48
      }, this), " if we don't use the coupon\r\nfor ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 5
      }, this), ", and define ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[x][1][g]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 21
      }, this), " to be the minimum cost to buy exactly\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "g"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), " goods out of the subtree of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 33
      }, this), " if we are allowed to use the coupon for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 77
      }, this), ".\r\nWe update ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[x][0]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 11
      }, this), " with one of the child subtrees ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "t"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 62
      }, this), " of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 69
      }, this), " by\r\nsetting ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[x][0]}=\\texttt{dp[x][0]}\\oplus \\texttt{dp[t][0]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 9
      }, this), ", and\r\nsimilarly for ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{dp[x][1]}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 15
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\n\r\nusing namespace std;\r\n\r\nconstexpr int MAX_GOODS = 5000;\r\nconstexpr long long INF = 1e18;\r\n\r\nint initial[MAX_GOODS + 1];\r\nint discounted[MAX_GOODS + 1];\r\nvector<long long> dp[MAX_GOODS + 1][2];\r\nvector<int> child[MAX_GOODS + 1];\r\n\r\nvector<long long> total_min(vector<long long> a, vector<long long> b) {\r\n\tvector<long long> combined(a.size() + b.size() - 1, INF);\r\n\tfor (int i = 0; i < a.size(); i++) {\r\n\t\tfor (int j = 0; j < b.size(); j++) {\r\n\t\t\tcombined[i + j] = min(combined[i + j], a[i] + b[j]);\r\n\t\t}\r\n\t}\r\n\treturn combined;\r\n}\r\n\r\nvoid process(int g) {\r\n\tdp[g][0] = {0, initial[g]};\r\n\t/*\r\n\t * we have INF for the first element because 0 would mess up merging\r\n\t * if it WAS 0, then that would mean we didn't buy this one\r\n\t * yet the algo would still think all the children are eligible for coupons\r\n\t */\r\n\tdp[g][1] = {INF, discounted[g]};\r\n\tfor (int t : child[g]) {\r\n\t\tprocess(t);\r\n\t\tdp[g][0] = total_min(dp[g][0], dp[t][0]);\r\n\t\tdp[g][1] = total_min(dp[g][1], dp[t][1]);\r\n\t}\r\n\tfor (int i = 0; i < dp[g][1].size(); i++) {\r\n\t\tdp[g][1][i] = min(dp[g][1][i], dp[g][0][i]);\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tint good_num;\r\n\tint budget;\r\n\tcin >> good_num >> budget;\r\n\tfor (int i = 1; i <= good_num; i++) {\r\n\t\tcin >> initial[i] >> discounted[i];\r\n\t\tdiscounted[i] = initial[i] - discounted[i];\r\n\t\tif (i > 1) {\r\n\t\t\tint prereq;\r\n\t\t\tcin >> prereq;\r\n\t\t\tchild[prereq].push_back(i);\r\n\t\t}\r\n\t}\r\n\r\n\tprocess(1);\r\n\tfor (int i = good_num; i >= 0; i--) {\r\n\t\tif (dp[1][1][i] <= budget) {\r\n\t\t\tcout << i << endl;\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 22,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The editorial naively computes a bound of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^3)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 43
      }, this), " on the running time\r\nof this solution. However, this actually runs in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(N^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 50
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-time-complexity-of-merging-subtrees",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-time-complexity-of-merging-subtrees",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Time Complexity of Merging Subtrees"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 91,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The complexity can be demonstrated with the following problem:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 93,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: ["You have an list of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 95,
          columnNumber: 23
        }, this), " ones and a counter initially set to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "0"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 95,
          columnNumber: 63
        }, this), ". While the\r\nlist has greater than one element, remove any two elements ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 96,
          columnNumber: 62
        }, this), " and ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 96,
          columnNumber: 70
        }, this), " from\r\nthe list, add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a\\cdot b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 97,
          columnNumber: 17
        }, this), " to the counter, and add ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a+b"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 97,
          columnNumber: 52
        }, this), " to the list. In terms\r\nof ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "N"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 98,
          columnNumber: 6
        }, this), ", what is the maximum possible value of the counter at the end of this\r\nprocess?"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 95,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
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
      lineNumber: 111,
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

"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-solution---knuth-morris-prat-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---knuth-morris-prat-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Knuth-Morris-Prat Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Define an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 17
      }, this), " on some string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 40
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 54
      }, this), " stores the length of the longest nontrivial prefix of the entire string that is equivalent to a suffix ending at position ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 187
      }, this), ". Formally,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S[i] = \\max\\{k \\: | \\: 1 \\leq k < i \\text{ and } S[0:k - 1] \\equiv S[i - (k - 1): i]\\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we are searching for string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 32
      }, this), " inside of string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 53
      }, this), ", create a new string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = P + \\# + T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 78
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\#"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 102
      }, this), " is any arbitrary character that does not occur in either string. Then, create an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 194
      }, this), " using the ", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/string/prefix-function.html",
        rel: "nofollow",
        target: "_blank",
        children: "KMP"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 212
      }, this), " algorithm. The answer is simply the number of indices inside of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\pi_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 337
      }, this), " that is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|P|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 362
      }, this), " (the length of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 383
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---z-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---z-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Z-Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 86,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Like the previous solution, we now define an array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "z_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 52
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "z_S[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 68
      }, this), " is the length of the longest prefix beginning at index ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 132
      }, this), " that is equivalent to a prefix of the entire string. Formally,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "z_S[i] = \\max\\{k \\: | \\: 1 \\leq k\\text{ and } S[0:k - 1] \\equiv S[i:i+k-1]\\}"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As before, for pattern string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 31
      }, this), " and text string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 51
      }, this), ", create a new string ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S = P + '\\#' + T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 76
      }, this), ", and create the array ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "z_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 117
      }, this), " using the ", _jsxDEV(_components.a, {
        href: "https://cp-algorithms.com/string/z-function.html",
        rel: "nofollow",
        target: "_blank",
        children: "z-algorithm"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 133
      }, this), ". The answer is the number of indices inside of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "z_S"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 244
      }, this), " that is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|P|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 94,
        columnNumber: 267
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---rabin-karp-algorithm",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---rabin-karp-algorithm",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Rabin-Karp Algorithm"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Precompute the ", _jsxDEV(_components.a, {
        href: "https://usaco.guide/gold/string-hashing?lang=cpp",
        rel: "nofollow",
        target: "_blank",
        children: "rolling hash"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 16
      }, this), " of both ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 89
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 97
      }, this), ". Each substring of length ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "|P|"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 127
      }, this), " can be compared for equality in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(1)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 165
      }, this), " time. Since there is a relatively small number of comparisons, using a single set of hash values is fine (although it doesn't hurt to add more!). Using hash base ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "9973"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 344
      }, this), " and modulo ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9 + 7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 142,
        columnNumber: 362
      }, this), " suffices (see the string hashing module for more details on this choice)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 142,
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

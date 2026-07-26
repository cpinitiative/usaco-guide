"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-resources",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-resources",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Resources"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-introduction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-introduction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Introduction"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["What if we want to use a C++ ", _jsxDEV(_components.code, {
        children: "set"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 30
      }, this), " with the ", _jsxDEV(_components.code, {
        children: "Edge"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 45
      }, this), " struct that was defined in\r\n", _jsxDEV(_components.a, {
        href: "/silver/sorting-custom",
        children: "Sorting with Custom Comparators"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 25,
        columnNumber: 1
      }, this), "?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 24,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-operator-overloading",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-operator-overloading",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Operator Overloading"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Works as expected, although you should make sure to include the second ", _jsxDEV(_components.code, {
        children: "const"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 36,
        columnNumber: 72
      }, this), "\r\nor you'll get a compilation error. From the link above:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 36,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "[The second const] means you cannot modify member variables of the current\r\nobject."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 39,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct Edge {\r\n\tint a, b, w;\r\n\tbool operator<(const Edge &y) const { return w < y.w; }\r\n};\r\n\r\nint main() {\r\n\tint M = 4;\r\n\tset<Edge> v;\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, w;\r\n\t\tcin >> a >> b >> w;\r\n\t\tv.insert({a, b, w});\r\n\t}\r\n\tfor (Edge e : v) cout << e.a << \" \" << e.b << \" \" << e.w << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 42,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-comparator",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-comparator",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Comparator"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-with-a-function",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-a-function",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With a Function"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 73,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct Edge {\r\n\tint a, b, w;\r\n};\r\n\r\nbool cmp(const Edge &x, const Edge &y) { return x.w < y.w; }\r\n\r\nint main() {\r\n\tint M = 4;\r\n\tset<Edge, bool (*)(const Edge &, const Edge &)> v(cmp);\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, w;\r\n\t\tcin >> a >> b >> w;\r\n\t\tv.insert({a, b, w});\r\n\t}\r\n\tfor (Edge e : v) cout << e.a << \" \" << e.b << \" \" << e.w << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 75,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can also use the following syntax to declare set ", _jsxDEV(_components.code, {
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 54
      }, this), " using a function:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        children: "set<Edge,decltype(&cmp)> v(cmp);"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 99,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 99,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-lambda-expressions",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-lambda-expressions",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Lambda Expressions"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "auto cmp = [](const Edge &x, const Edge &y) { return x.w < y.w; };\r\n\r\nint main() {\r\n\tint M = 4;\r\n\tset<Edge, bool (*)(const Edge &, const Edge &)> v(cmp);\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, w;\r\n\t\tcin >> a >> b >> w;\r\n\t\tv.insert({a, b, w});\r\n\t}\r\n\tfor (Edge e : v) cout << e.a << \" \" << e.b << \" \" << e.w << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 103,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 103,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can also use the following syntax to declare set ", _jsxDEV(_components.code, {
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 118,
        columnNumber: 54
      }, this), " using a lambda"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 118,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.code, {
        children: "set<Edge,decltype(cmp)> v(cmp);"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 120,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["even though ", _jsxDEV(_components.code, {
        children: "decltype(cmp)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 13
      }, this), " is ", _jsxDEV(_components.strong, {
        children: "not"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 32
      }, this), " actually equivalent to\r\n", _jsxDEV(_components.code, {
        children: "bool(*)(const Edge&,const Edge&)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 1
      }, this), ". See ", _jsxDEV(_components.a, {
        href: "/general/lambda",
        children: "Lambda Expressions"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 123,
        columnNumber: 41
      }, this), "\r\nfor details."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-functors",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-functors",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Functors"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 126,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Probably less confusing than the method above."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 128,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct Edge {\r\n\tint a, b, w;\r\n};\r\n\r\nstruct cmp {\r\n\tbool operator()(const Edge &x, const Edge &y) const { return x.w < y.w; }\r\n};\r\n\r\nint main() {\r\n\tint M = 4;\r\n\tset<Edge, cmp> v;\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, w;\r\n\t\tcin >> a >> b >> w;\r\n\t\tv.insert({a, b, w});\r\n\t}\r\n\tfor (Edge e : v) cout << e.a << \" \" << e.b << \" \" << e.w << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 130,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 130,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["We can also use ", _jsxDEV(_components.code, {
        children: "cmp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 17
      }, this), " like a normal function by adding ", _jsxDEV(_components.code, {
        children: "()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 160,
        columnNumber: 56
      }, this), " after it."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 160,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\tint M = 4;\r\n\tvector<Edge> v;\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, w;\r\n\t\tcin >> a >> b >> w;\r\n\t\tv.push_back({a, b, w});\r\n\t}\r\n\tsort(begin(v), end(v), cmp());\r\n\tfor (Edge e : v) cout << e.a << \" \" << e.b << \" \" << e.w << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 162,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-built-in-functors",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-built-in-functors",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Built-In Functors"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Overloading the less than operator (", _jsxDEV(_components.code, {
        children: "<"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 178,
        columnNumber: 37
      }, this), ") automatically generates the functor\r\n", _jsxDEV(_components.a, {
        href: "https://en.cppreference.com/w/cpp/utility/functional/less",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "less<Edge>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 179,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 179,
        columnNumber: 1
      }, this), ".\r\nSimilarly, overloading (", _jsxDEV(_components.code, {
        children: ">"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 180,
        columnNumber: 25
      }, this), ") automatically generates the functor\r\n", _jsxDEV(_components.a, {
        href: "https://en.cppreference.com/w/cpp/utility/functional/greater",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "greater<Edge>"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 181,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 181,
        columnNumber: 1
      }, this), ".\r\nWe can use this to store a set in reverse order."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 178,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nstruct Edge {\r\n\tint a, b, w;\r\n\tbool operator>(const Edge &y) const { return w > y.w; }\r\n};\r\n\r\nint main() {\r\n\tint M = 4;\r\n\tset<Edge, greater<Edge>> v;\r\n\tfor (int i = 0; i < M; ++i) {\r\n\t\tint a, b, w;\r\n\t\tcin >> a >> b >> w;\r\n\t\tv.insert({a, b, w});\r\n\t}\r\n\tfor (Edge e : v) cout << e.a << \" \" << e.b << \" \" << e.w << \"\\n\";\r\n}\r\n\r\n/* Output:\r\n2 3 10\r\n1 2 9\r\n1 3 7\r\n2 4 3\r\n*/\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 184,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-other-containers",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-other-containers",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Other Containers"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 212,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The following are all valid:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 214,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "set<int, greater<int>> a;\r\nmap<int, string, greater<int>> b;\r\npriority_queue<int, vector<int>, greater<int>> c;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 216,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Using a custom comparator for priority queues is especially common. Recall that\r\na C++ priority queue will pop its largest element by default, while the above\r\ncode will cause one to pop its smallest element instead."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 222,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
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
      lineNumber: 226,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Check the ", _jsxDEV(_components.a, {
        href: "/plat/sweep-line#line-segments",
        children: "Sweep Line"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 228,
        columnNumber: 11
      }, this), " module for a task that\r\nuses a set with a custom comparator."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 228,
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

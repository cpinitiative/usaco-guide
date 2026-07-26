"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-why-use-lambdas",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-why-use-lambdas",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Why Use Lambdas?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 43,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Lambdas allow us to write simple and anonymous functions inline.\r\nThis allows us to write smaller functions while keeping code local and\r\norganized. In addition, lambdas can capture their surrounding variables, which\r\nis often convenient when writing helper functions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 44,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The C++ standard library has good support for lambdas, with functions\r\nlike ", _jsxDEV(_components.code, {
        children: "std::sort"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 6
      }, this), " and ", _jsxDEV(_components.code, {
        children: "std::lower_bound"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 50,
        columnNumber: 22
      }, this), " allowing you to pass custom functions\r\nto act as a comparator of objects. This is often more convenient than the\r\nalternative of writing a dedicated function to act as a comparator."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 49,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-general-form",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-general-form",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "General Form"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Lambdas have the following form:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 55,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "[capture_list](parameters) -> trailing_return_type {\r\n\t// function body\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 57,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "The parameters, return type, and function body are all pretty straightforward.\r\nIn competitive programming contexts, we typically use the following capture types:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 63,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "[]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 66,
        columnNumber: 1
      }, this), ": Does not capture anything in the local scope."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 66,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "[&]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 68,
        columnNumber: 1
      }, this), ": Captures everything in the local scope by reference."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 68,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "[=]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 70,
        columnNumber: 1
      }, this), ": Captures everything in the local scope by copy."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 70,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: _jsxDEV(_components.strong, {
        children: "The lambda's local scope is the scope where it is defined, not the scope where it is\r\nused."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 72,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 72,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You can also specify what variables to capture, but this typically is not necessary."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 75,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "For an example of a lambda, say we want to write a function returns the square\r\nof a given number. We can write the following lambda expression:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 77,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "auto square = [](int x) -> long long { return (long long)x * x; };\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 80,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then, you can call the lambda like a normal function."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 84,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "cout << square(10) << '\\n';  // prints out 100\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 85,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As mentioned in the ", _jsxDEV(_components.a, {
        href: "/silver/sorting-custom?lang=cpp",
        children: "custom comparator module"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 89,
        columnNumber: 21
      }, this), "\r\nmodule, lambdas can also be used as comparators."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 89,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-recursive-lambdas",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-recursive-lambdas",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Recursive Lambdas"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Let's say we want to write a recursive GCD function. With a lambda, the most\r\nstraightforward way to write it would be like this:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 94,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "auto gcd = [](int a, int b) -> int { return b == 0 ? a : gcd(b, a % b); };\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Unfortunately, this does not work, because a lambda cannot directly reference\r\nitself in its definition. However, there are workarounds to this issue."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 101,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-y_combinator",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-y_combinator",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With ", _jsxDEV(_components.code, {
        children: "y_combinator"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 104,
        columnNumber: 10
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 104,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "If we add the following from the link above in C++14:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 120,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "namespace std {\r\n\r\ntemplate <class Fun> class y_combinator_result {\r\n\tFun fun_;\r\n\r\n  public:\r\n\ttemplate <class T>\r\n\texplicit y_combinator_result(T &&fun) : fun_(std::forward<T>(fun)) {}\r\n\r\n\ttemplate <class... Args> decltype(auto) operator()(Args &&...args) {\r\n\t\treturn fun_(std::ref(*this), std::forward<Args>(args)...);\r\n\t}\r\n};\r\n\r\ntemplate <class Fun> decltype(auto) y_combinator(Fun &&fun) {\r\n\treturn y_combinator_result<std::decay_t<Fun>>(std::forward<Fun>(fun));\r\n}\r\n\r\n}  // namespace std\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 122,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 122,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then we can have code like the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 144,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\tcout << y_combinator([](auto gcd, int a, int b) -> int {\r\n\t\treturn b == 0 ? a : gcd(b, a % b);\r\n\t})(20, 30)\r\n\t     << \"\\n\";  // outputs 10\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 146,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 146,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-stdfunction",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-stdfunction",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With ", _jsxDEV(_components.a, {
        href: "https://en.cppreference.com/w/cpp/utility/functional/function",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "std::function"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 11
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 155,
        columnNumber: 10
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 155,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Instead of ", _jsxDEV(_components.code, {
        children: "auto"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 157,
        columnNumber: 12
      }, this), ", use ", _jsxDEV(_components.code, {
        children: "function<return_type(param)>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 157,
        columnNumber: 24
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 157,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\tfunction<int(int, int)> gcd = [&](int a, int b) {\r\n\t\treturn b == 0 ? a : gcd(b, a % b);\r\n\t};\r\n\tcout << gcd(20, 30) << '\\n';  // outputs 10\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 159,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 159,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-with-generic-lambdas",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-with-generic-lambdas",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "With Generic Lambdas"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 168,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To remedy the issue of the lambda being unable to access itself, we pass it\r\ninto itself."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 169,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\tauto gcd = [&](int a, int b, auto &&gcd) -> int {\r\n\t\treturn b == 0 ? a : gcd(b, a % b, gcd);\r\n\t};\r\n\tcout << gcd(20, 30, gcd) << '\\n';  // outputs 10\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 172,
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

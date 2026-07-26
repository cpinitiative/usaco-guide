"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(N \\log N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We're asked to evaluate a polynomial at ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 41
      }, this), " points, which implies that our\r\nsolution will involve the Fast Fourier Transform. Indeed, our solution is mostly\r\nbased on the idea behind the Discrete Fourier Transform - that\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P(x) = P_{even}(x^2) + x \\cdot P_{odd}(x^2)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), " for any polynomial ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 66
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{solve}(k, P) = (P(q^{ki}) \\bmod M)_{i = 0}^{N / k}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 5
      }, this), ". Our answer\r\nwill be ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{solve}(1, W)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 9
      }, this), ", and we will compute ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\texttt{solve}(k, P)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 53
      }, this), "\r\nrecursively in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal O(\\frac{N}{k} \\log \\frac{N}{k})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 16
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 9,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, precompute all ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "q^i \\bmod M"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 23
      }, this), ". If ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k = N"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 41
      }, this), ", then ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "P"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 55
      }, this), " is a constant\r\npolynomial. and can be evaluated in constant time. Otherwise, let\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v = \\texttt{solve}(k, P)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 1
      }, this), ", ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u_\\text{even} = \\texttt{solve}(2k,\r\nP_\\text{even})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 15,
        columnNumber: 29
      }, this), ",\r\nand ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "u_\\text{odd} = \\texttt{solve}(2k, P_\\text{odd})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 5
      }, this), ". We have two cases when\r\ncomputing each ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "v[i]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 16
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 13,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Case 1: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i < \\frac{N}{2k}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 20,
          columnNumber: 11
        }, this), ":\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\begin{aligned}\r\nv[i] &= P(q^{ki}) \\bmod M\\\\\r\n     &= (P_\\text{even}(q^{2ki}) + q^{ki} \\cdot P_\\text{odd}(q^{2ki})) \\bmod M\\\\\r\n\t &= (u_\\text{even}[i] + q^{ki} \\cdot u_\\text{odd}[i]) \\bmod M\r\n\\end{aligned}"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 21,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 20,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Case 2: ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i \\geq \\frac{N}{2k}"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 11
        }, this), ". In this case, let ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i = \\frac{N}{2k} + j"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 28,
          columnNumber: 52
        }, this), ":\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-math",
            children: "\\begin{aligned}\r\nv[i] &= P(q^{\\frac{N}{2} + kj}) \\bmod M\\\\\r\n     &= (P_\\text{even}(q^N \\cdot q^{2kj}) + q^{ki} \\cdot P_\\text{odd}(q^N \\cdot\r\n\t    q^{2kj})) \\bmod M\\\\\r\n\t &= (P_\\text{even}(q^{2kj}) + q^{ki} \\cdot P_\\text{odd}(q^{2kj})) \\bmod M\\\\\r\n\t &= (u_\\text{even}[j] + q^{ki} \\cdot u_\\text{odd}[j]) \\bmod M\r\n\\end{aligned}"
          }, undefined, false, {
            fileName: "<source.js>"
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 29,
          columnNumber: 3
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 28,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 20,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Putting this all together, we get:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 39,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-math",
        children: "v[i] = \\left(u_\\text{even}\\left[i \\bmod \\frac{N}{2k}\\right] + p^{ki} \\cdot\r\n       u_\\text{odd}\\left[i \\bmod \\frac{N}{2k}\\right]\\right) \\bmod M"
      }, undefined, false, {
        fileName: "<source.js>"
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 41,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\ntypedef long long ll;\r\nusing namespace std;\r\n\r\nint n;\r\nll m, q, a[1 << 20], q_pow[1 << 20];\r\n\r\nvector<ll> dft(int k = 1, int idx = 0) {\r\n\tif (k == n) return {a[idx]};\r\n\telse {\r\n\t\tvector<ll> even = dft(k * 2, idx);\r\n\t\tvector<ll> odd = dft(k * 2, idx | k);\r\n\r\n\t\tint mid = n / k / 2;\r\n\t\tvector<ll> ans;\r\n\t\tfor (int i = 0; i < 2 * mid; i++)\r\n\t\t\tans.push_back((even[i % mid] + q_pow[k * i] * odd[i % mid] % m) % m);\r\n\t\treturn ans;\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tcin.tie(0)->sync_with_stdio(0);\r\n\tcin >> n >> m >> q;\r\n\tfor (int i = 0; i < n; i++) cin >> a[i];\r\n\r\n\tq_pow[0] = 1;\r\n\tfor (int i = 1; i < n; i++) q_pow[i] = q * q_pow[i - 1] % m;\r\n\r\n\tvector<ll> ans = dft();\r\n\tll tot = 0;\r\n\tfor (ll i : ans) tot = (tot + i) % m;\r\n\tcout << tot << '\\n';\r\n\tfor (int i = 1; i < n; i++) cout << ans[i] << ' ';\r\n\tcout << ans[0];\r\n\treturn 0;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 46,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 46,
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

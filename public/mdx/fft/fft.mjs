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
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-tutorial",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-tutorial",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Tutorial"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---convolution-mod",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---convolution-mod",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Convolution Mod"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 45,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Notice that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_i=\\sum_{j=0}^i a_jb_{i-j}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 47,
        columnNumber: 13
      }, this), " is the coefficient if we were to treat\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 1
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 9
      }, this), " as polynomials. Recall that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "ax^jbx^{i-j}=abx^i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 48,
        columnNumber: 41
      }, this), " is the coefficient\r\nof one multiplication that leads to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "c_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 49,
        columnNumber: 37
      }, this), ". Thus, summing this up, we get the\r\ncoefficient of each number of the polynomial. Since this happens to be the exact\r\npurpose of FFT, we can simply use our favorite FFT implementation to solve this\r\nproblem."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 47,
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
      lineNumber: 54,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing db = long double;  // or double, if TL is tight\r\nusing str = string;      // yay python!\r\n\r\nusing vl = vector<ll>;\r\nusing vi = vector<int>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n#define sz(x) int((x).size())\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define each(a, x) for (auto &a : x)\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(T &x) { cin >> x; }\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\ntcT > void re(V<T> &x) { each(a, x) re(a); }\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\nvoid setIO() {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n}\r\n\r\n#define rep(i, a, b) for (int i = a; i < (b); ++i)\r\ntypedef pair<int, int> pii;\r\n\r\n/**\r\n * Author: Ludo Pulles, chilli, Simon Lindholm\r\n * Date: 2019-01-09\r\n * License: CC0\r\n * Source: http://neerc.ifmo.ru/trains/toulouse/2017/fft2.pdf (do read, it's\r\n excellent) Accuracy bound from http://www.daemonology.net/papers/fft.pdf\r\n * Description: fft(a) computes $\\hat f(k) = \\sum_x a[x] \\exp(2\\pi i \\cdot k x /\r\n N)$ for all $k$. N must be a power of 2. Useful for convolution:\r\n   \\texttt{conv(a, b) = c}, where $c[x] = \\sum a[i]b[x-i]$.\r\n   For convolution of complex numbers or more than two vectors: FFT, multiply\r\n   pointwise, divide by n, reverse(start+1, end), FFT back.\r\n   Rounding is safe if $(\\sum a_i^2 + \\sum b_i^2)\\log_2{N} < 9\\cdot10^{14}$\r\n   (in practice $10^{16}$; higher for random inputs).\r\n   Otherwise, use NTT/FFTMod.\r\n * Time: O(N \\log N) with $N = |A|+|B|$ ($\\tilde 1s$ for $N=2^{22}$)\r\n * Status: somewhat tested\r\n * Details: An in-depth examination of precision for both FFT and FFTMod can be\r\n found\r\n * here\r\n (https://github.com/simonlindholm/fft-precision/blob/master/fft-precision.md)\r\n */\r\n\r\ntypedef complex<double> C;\r\nvoid fft(vector<C> &a) {\r\n\tint n = sz(a), L = 31 - __builtin_clz(n);\r\n\tstatic vector<complex<long double>> R(2, 1);\r\n\tstatic vector<C> rt(2, 1);  // (^ 10% faster if double)\r\n\tfor (static int k = 2; k < n; k *= 2) {\r\n\t\tR.resize(n);\r\n\t\trt.resize(n);\r\n\t\tauto x = polar(1.0L, acos(-1.0L) / k);\r\n\t\trep(i, k, 2 * k) rt[i] = R[i] = i & 1 ? R[i / 2] * x : R[i / 2];\r\n\t}\r\n\tvi rev(n);\r\n\trep(i, 0, n) rev[i] = (rev[i / 2] | (i & 1) << L) / 2;\r\n\trep(i, 0, n) if (i < rev[i]) swap(a[i], a[rev[i]]);\r\n\tfor (int k = 1; k < n; k *= 2)\r\n\t\tfor (int i = 0; i < n; i += 2 * k) rep(j, 0, k) {\r\n\t\t\t\t// C z = rt[j+k] * a[i+j+k]; // (25% faster if hand-rolled)  ///\r\n\t\t\t\t// include-line\r\n\t\t\t\tauto x = (double *)&rt[j + k],\r\n\t\t\t\t     y = (double *)&a[i + j + k];  /// exclude-line\r\n\t\t\t\tC z(x[0] * y[0] - x[1] * y[1],\r\n\t\t\t\t    x[0] * y[1] + x[1] * y[0]);  /// exclude-line\r\n\t\t\t\ta[i + j + k] = a[i + j] - z;\r\n\t\t\t\ta[i + j] += z;\r\n\t\t\t}\r\n}\r\n\r\ntypedef vector<ll> vl;\r\ntemplate <int M> vl convMod(const vl &a, const vl &b) {\r\n\tif (a.empty() || b.empty()) return {};\r\n\tvl res(sz(a) + sz(b) - 1);\r\n\tint B = 32 - __builtin_clz(sz(res)), n = 1 << B, cut = int(sqrt(M));\r\n\tvector<C> L(n), R(n), outs(n), outl(n);\r\n\trep(i, 0, sz(a)) L[i] = C((int)a[i] / cut, (int)a[i] % cut);\r\n\trep(i, 0, sz(b)) R[i] = C((int)b[i] / cut, (int)b[i] % cut);\r\n\tfft(L), fft(R);\r\n\trep(i, 0, n) {\r\n\t\tint j = -i & (n - 1);\r\n\t\toutl[j] = (L[i] + conj(L[j])) * R[i] / (2.0 * n);\r\n\t\touts[j] = (L[i] - conj(L[j])) * R[i] / (2.0 * n) / 1i;\r\n\t}\r\n\tfft(outl), fft(outs);\r\n\trep(i, 0, sz(res)) {\r\n\t\tll av = ll(real(outl[i]) + .5), cv = ll(imag(outs[i]) + .5);\r\n\t\tll bv = ll(imag(outl[i]) + .5) + ll(real(outs[i]) + .5);\r\n\t\tres[i] = ((av % M * cut + bv) % M * cut + cv) % M;\r\n\t}\r\n\treturn res;\r\n}\r\n\r\nint main() {\r\n\tsetIO();\r\n\r\n\tint n, m;\r\n\tre(n, m);\r\n\tvl A(n);\r\n\tre(A);\r\n\tvl B(m);\r\n\tre(B);\r\n\r\n\tauto ret = convMod<998244353>(A, B);  // just change this number for mod\r\n\r\n\tF0R(i, sz(ret)) {\r\n\t\tcout << ret[i];\r\n\t\tif (i != sz(ret) - 1) cout << \" \";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 56,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 56,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h2, {
      id: "user-content-solution---convolution-mod-1097",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-solution---convolution-mod-1097",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Solution - Convolution Mod ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^9+7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 211,
        columnNumber: 31
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 211,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Notice that this is the exact same problem as Convolution Mod, so simply\r\nchanging the mod suffices."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-implementation-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-implementation-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Implementation"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 216,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing db = long double;  // or double, if TL is tight\r\nusing str = string;      // yay python!\r\n\r\nusing vl = vector<ll>;\r\nusing vi = vector<int>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n#define sz(x) int((x).size())\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define each(a, x) for (auto &a : x)\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(T &x) { cin >> x; }\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\ntcT > void re(V<T> &x) { each(a, x) re(a); }\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\nvoid setIO() {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n}\r\n\r\n#define rep(i, a, b) for (int i = a; i < (b); ++i)\r\ntypedef pair<int, int> pii;\r\n\r\n/**\r\n * Author: Ludo Pulles, chilli, Simon Lindholm\r\n * Date: 2019-01-09\r\n * License: CC0\r\n * Source: http://neerc.ifmo.ru/trains/toulouse/2017/fft2.pdf (do read, it's\r\n excellent) Accuracy bound from http://www.daemonology.net/papers/fft.pdf\r\n * Description: fft(a) computes $\\hat f(k) = \\sum_x a[x] \\exp(2\\pi i \\cdot k x /\r\n N)$ for all $k$. N must be a power of 2. Useful for convolution:\r\n   \\texttt{conv(a, b) = c}, where $c[x] = \\sum a[i]b[x-i]$.\r\n   For convolution of complex numbers or more than two vectors: FFT, multiply\r\n   pointwise, divide by n, reverse(start+1, end), FFT back.\r\n   Rounding is safe if $(\\sum a_i^2 + \\sum b_i^2)\\log_2{N} < 9\\cdot10^{14}$\r\n   (in practice $10^{16}$; higher for random inputs).\r\n   Otherwise, use NTT/FFTMod.\r\n * Time: O(N \\log N) with $N = |A|+|B|$ ($\\tilde 1s$ for $N=2^{22}$)\r\n * Status: somewhat tested\r\n * Details: An in-depth examination of precision for both FFT and FFTMod can be\r\n found\r\n * here\r\n (https://github.com/simonlindholm/fft-precision/blob/master/fft-precision.md)\r\n */\r\n\r\ntypedef complex<double> C;\r\nvoid fft(vector<C> &a) {\r\n\tint n = sz(a), L = 31 - __builtin_clz(n);\r\n\tstatic vector<complex<long double>> R(2, 1);\r\n\tstatic vector<C> rt(2, 1);  // (^ 10% faster if double)\r\n\tfor (static int k = 2; k < n; k *= 2) {\r\n\t\tR.resize(n);\r\n\t\trt.resize(n);\r\n\t\tauto x = polar(1.0L, acos(-1.0L) / k);\r\n\t\trep(i, k, 2 * k) rt[i] = R[i] = i & 1 ? R[i / 2] * x : R[i / 2];\r\n\t}\r\n\tvi rev(n);\r\n\trep(i, 0, n) rev[i] = (rev[i / 2] | (i & 1) << L) / 2;\r\n\trep(i, 0, n) if (i < rev[i]) swap(a[i], a[rev[i]]);\r\n\tfor (int k = 1; k < n; k *= 2)\r\n\t\tfor (int i = 0; i < n; i += 2 * k) rep(j, 0, k) {\r\n\t\t\t\t// C z = rt[j+k] * a[i+j+k]; // (25% faster if hand-rolled)  ///\r\n\t\t\t\t// include-line\r\n\t\t\t\tauto x = (double *)&rt[j + k],\r\n\t\t\t\t     y = (double *)&a[i + j + k];  /// exclude-line\r\n\t\t\t\tC z(x[0] * y[0] - x[1] * y[1],\r\n\t\t\t\t    x[0] * y[1] + x[1] * y[0]);  /// exclude-line\r\n\t\t\t\ta[i + j + k] = a[i + j] - z;\r\n\t\t\t\ta[i + j] += z;\r\n\t\t\t}\r\n}\r\n\r\ntypedef vector<ll> vl;\r\ntemplate <int M> vl convMod(const vl &a, const vl &b) {\r\n\tif (a.empty() || b.empty()) return {};\r\n\tvl res(sz(a) + sz(b) - 1);\r\n\tint B = 32 - __builtin_clz(sz(res)), n = 1 << B, cut = int(sqrt(M));\r\n\tvector<C> L(n), R(n), outs(n), outl(n);\r\n\trep(i, 0, sz(a)) L[i] = C((int)a[i] / cut, (int)a[i] % cut);\r\n\trep(i, 0, sz(b)) R[i] = C((int)b[i] / cut, (int)b[i] % cut);\r\n\tfft(L), fft(R);\r\n\trep(i, 0, n) {\r\n\t\tint j = -i & (n - 1);\r\n\t\toutl[j] = (L[i] + conj(L[j])) * R[i] / (2.0 * n);\r\n\t\touts[j] = (L[i] - conj(L[j])) * R[i] / (2.0 * n) / 1i;\r\n\t}\r\n\tfft(outl), fft(outs);\r\n\trep(i, 0, sz(res)) {\r\n\t\tll av = ll(real(outl[i]) + .5), cv = ll(imag(outs[i]) + .5);\r\n\t\tll bv = ll(imag(outl[i]) + .5) + ll(real(outs[i]) + .5);\r\n\t\tres[i] = ((av % M * cut + bv) % M * cut + cv) % M;\r\n\t}\r\n\treturn res;\r\n}\r\n\r\nint main() {\r\n\tsetIO();\r\n\r\n\tint n, m;\r\n\tre(n, m);\r\n\tvl A(n);\r\n\tre(A);\r\n\tvl B(m);\r\n\tre(B);\r\n\r\n\tauto ret = convMod<1000000007>(A, B);  // just change this number for mod\r\n\r\n\tF0R(i, sz(ret)) {\r\n\t\tcout << ret[i];\r\n\t\tif (i != sz(ret) - 1) cout << \" \";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 218,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 218,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-note---fft-killer",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-note---fft-killer",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Note - FFT Killer"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 359,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The \"multiplication with arbitrary modulus\" described in cp-algo requires\r\n", _jsxDEV(_components.code, {
        children: "long double"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 362,
        columnNumber: 1
      }, this), " to pass."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 361,
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
      lineNumber: 364,
      columnNumber: 1
    }, this), "\n\n\n", _jsxDEV(_components.h3, {
      id: "user-content-on-a-tree",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-on-a-tree",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "On a Tree"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 370,
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

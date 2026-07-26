"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "https://codeforces.com/blog/entry/21590",
        rel: "nofollow",
        target: "_blank",
        children: "Official Editorial (Russian)"
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
        href: "https://codeforces.com/contest/598/submission/94804283",
        rel: "nofollow",
        target: "_blank",
        children: "My Submission"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "My Code (without template):"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\n/**\r\n * Description: Use in place of \\texttt{complex<T>}.\r\n * Source: http://codeforces.com/blog/entry/22175, KACTL\r\n * Verification: various\r\n */\r\n\r\nusing T = ld;\r\nint sgn(T a) { return (a > 0) - (a < 0); }\r\nT sq(T a) { return a * a; }\r\n\r\ntypedef pair<T, T> P;\r\ntypedef vector<P> vP;\r\nT norm(const P &p) { return sq(p.f) + sq(p.s); }\r\nT abs(const P &p) { return sqrt(norm(p)); }\r\nT arg(const P &p) { return atan2(p.s, p.f); }\r\nP conj(const P &p) { return P(p.f, -p.s); }\r\nP perp(const P &p) { return P(-p.s, p.f); }\r\nP dir(T ang) { return P(cos(ang), sin(ang)); }\r\n\r\nP operator-(const P &l) { return P(-l.f, -l.s); }\r\nP operator+(const P &l, const P &r) { return P(l.f + r.f, l.s + r.s); }\r\nP operator-(const P &l, const P &r) { return P(l.f - r.f, l.s - r.s); }\r\nP operator*(const P &l, const T &r) { return P(l.f * r, l.s * r); }\r\nP operator*(const T &l, const P &r) { return r * l; }\r\nP operator/(const P &l, const T &r) { return P(l.f / r, l.s / r); }\r\nP operator*(const P &l, const P &r) {\r\n\treturn P(l.f * r.f - l.s * r.s, l.s * r.f + l.f * r.s);\r\n}\r\nP operator/(const P &l, const P &r) { return l * conj(r) / norm(r); }\r\nP &operator+=(P &l, const P &r) { return l = l + r; }\r\nP &operator-=(P &l, const P &r) { return l = l - r; }\r\nP &operator*=(P &l, const T &r) { return l = l * r; }\r\nP &operator/=(P &l, const T &r) { return l = l / r; }\r\nP &operator*=(P &l, const P &r) { return l = l * r; }\r\nP &operator/=(P &l, const P &r) { return l = l / r; }\r\n\r\nP unit(const P &p) { return p / abs(p); }\r\nT dot(const P &a, const P &b) { return a.f * b.f + a.s * b.s; }\r\nT cross(const P &a, const P &b) { return a.f * b.s - a.s * b.f; }\r\nT cross(const P &p, const P &a, const P &b) { return cross(a - p, b - p); }\r\nP reflect(const P &p, const P &a, const P &b) {\r\n\treturn a + conj((p - a) / (b - a)) * (b - a);\r\n}\r\nP foot(const P &p, const P &a, const P &b) { return (p + reflect(p, a, b)) / (T)2; }\r\nbool onSeg(const P &p, const P &a, const P &b) {\r\n\treturn cross(a, b, p) == 0 && dot(p - a, p - b) <= 0;\r\n}\r\n\r\nP lineIsect(P a, P b, P c, P d) {\r\n\tT x = cross(a, b, c), y = cross(a, b, d);\r\n\tT X = cross(c, d, a), Y = cross(c, d, b);\r\n\treturn (d * x - c * y) / (x - y);  // interior\r\n}\r\n\r\n/**\r\n * Description: centroid (center of mass) of a polygon with\r\n * constant mass per unit area and SIGNED area\r\n * Time: O(N)\r\n * Source: http://codeforces.com/blog/entry/22175, KACTL\r\n * Verification: kattis polygonarea, VT HSPC 2018 Holiday Stars\r\n */\r\n\r\n// #include \"../Primitives/Point.h\"\r\n\r\npair<P, T> cenArea(const vP &v) {\r\n\tP cen(0, 0);\r\n\tT area = 0;\r\n\tF0R(i, sz(v)) {\r\n\t\tint j = (i + 1) % sz(v);\r\n\t\tT a = cross(v[i], v[j]);\r\n\t\tcen += a * (v[i] + v[j]);\r\n\t\tarea += a;\r\n\t}\r\n\treturn {cen / area / (T)3, area / 2};\r\n}\r\n\r\nint n, m;\r\n\r\nint main() {\r\n\tsetIO();\r\n\tre(n, m);\r\n\tvP v(n);\r\n\tre(v);  // read polygon\r\n\tif (cenArea(v).s < 0) reverse(all(v));\r\n\t// polygon should be counter clockwise\r\n\tF0R(_, m) {\r\n\t\tP a, b;\r\n\t\tre(a, b);  // two points on the line\r\n\t\tvi side;\r\n\t\ttrav(t, v) side.pb(sgn(cross(a, b, t)) >= 0);\r\n\t\tT ans = 0;\r\n\t\tF0R(i, n) {\r\n\t\t\tint j = (i + 1) % sz(side);\r\n\t\t\tif (side[i] != side[j]) {\r\n\t\t\t\tint sign = sgn(cross(v[i] - v[j], b - a));\r\n\t\t\t\t// add or subtract \"x-coordinate\"\r\n\t\t\t\tans += sign * dot(b - a, lineIsect(a, b, v[i], v[j]));\r\n\t\t\t}\r\n\t\t\tif (cross(a, b, v[i]) == 0 && cross(a, b, v[j]) == 0 &&\r\n\t\t\t    dot(b - a, v[j] - v[i]) > 0)\r\n\t\t\t\tans += dot(b - a, v[j] - v[i]);\r\n\t\t\t// deal with sides that are collinear with the line\r\n\t\t}\r\n\t\tcout << fixed << setprecision(9) << ans / abs(b - a) << \"\\n\";\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 375,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(nm)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 375,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 375,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We'll process each of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "m"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 27
      }, this), " lines in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(n)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 40
      }, this), " time each. For a fixed\r\nline, let ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 378,
        columnNumber: 11
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "b"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 378,
        columnNumber: 19
      }, this), " be two points on the line. Suppose for simplicity that the\r\nline is parallel to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 379,
        columnNumber: 25
      }, this), "-axis."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 377,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["First, if no vertex of the polygon lies on the line then we can compute all the\r\nintersection points of the sides with the line and add / subtract their\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 1
      }, this), "-coordinates appropriately to get the answer. In my solution,\r\n", _jsxDEV(_components.code, {
        children: "dot(b-a,p)/abs(b-a)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 1
      }, this), " essentially computes the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 48
      }, this), "-coordinate of some point ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "p"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 77
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 381,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To deal with vertices of the polygon that lie on the line, we can envision\r\nshifting the line up or down by some small amount so that no vertex lies on the\r\nline. This incorrectly leaves out some sides of the polygon that are collinear\r\nwith the original line, so we should add the lengths of these sides to the\r\nanswer. These sides are dealt with by the second ", _jsxDEV(_components.code, {
        children: "if"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 390,
        columnNumber: 50
      }, this), " statement within the loop."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 386,
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

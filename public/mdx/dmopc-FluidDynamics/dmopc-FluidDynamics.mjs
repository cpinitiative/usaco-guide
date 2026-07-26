"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        children: "\\mathcal{O}(S\\sqrt{S\\log S})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 22
      }, this), ", where ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "S=N+Q"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 2,
        columnNumber: 60
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Maintain a linked list of convex hulls of size ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "BLOCK \\approx \\sqrt{S\\log S}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 48
      }, this), "\r\neach. Each update and query takes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}(\\sqrt{S\\log S})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 35
      }, this), " time. TL is\r\npretty tight ..."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\n#pragma GCC optimize(\"Ofast\")\r\n#pragma GCC target(\"avx2\")\r\n\r\n// template code\r\n\r\nconst int BLOCK = 2000;\r\n\r\nint N, Q;\r\nll W;\r\n\r\ntypedef pl P;\r\ntypedef vector<P> vP;\r\nvP fluid;\r\n\r\nll CROSS(const P &a, const P &b) { return a.f * b.s - a.s * b.f; }\r\nll CROSS(const P &p, const P &a, const P &b) {\r\n\treturn (a.f - p.f) * (b.s - p.s) - (a.s - p.s) * (b.f - p.f);\r\n}\r\nll cross(int a, int b, int c) { return CROSS(fluid[a], fluid[b], fluid[c]); }\r\nll dif(int a, int x) { return fluid[x].f * fluid[a].s - fluid[x].s * fluid[a].f; }\r\n\r\nll bs(int *v, const P &p, int lo, int hi) {\r\n\tauto eval = [&](int x) { return fluid[x].f * p.f + fluid[x].s * p.s; };\r\n\twhile (lo < hi) {\r\n\t\tint mid = (lo + hi) / 2;\r\n\t\tif (eval(v[mid]) < eval(v[mid + 1])) hi = mid;\r\n\t\telse lo = mid + 1;\r\n\t}\r\n\treturn eval(v[lo]);\r\n}\r\n\r\nbool cmp(int a, int b) { return fluid[a] < fluid[b]; }\r\n\r\nstruct Hull {\r\n\tint dat[BLOCK], lower[BLOCK];\r\n\tint dsz = 0, usz = 0, lsz = 0;\r\n\tll minDif(int x) {  // get min of\r\n\t\tpl p = {-fluid[x].s, fluid[x].f};\r\n\t\treturn bs(lower, p, 0, lsz - 1);\r\n\t}\r\n\tbool bad(int x) { return minDif(x) >= W; }\r\n\tvoid build() {\r\n\t\tvi xord;\r\n\t\tF0R(i, dsz) xord.pb(dat[i]);\r\n\t\tsort(all(xord), cmp);\r\n\t\tusz = lsz = 0;\r\n\t\tfor (int i : xord) {\r\n\t\t\twhile (lsz > 1 && cross(lower[lsz - 2], lower[lsz - 1], i) <= 0) lsz--;\r\n\t\t\tlower[lsz++] = i;\r\n\t\t}\r\n\t}\r\n\tvoid prin(int *a, int &b) {\r\n\t\tF0R(i, b) dbg(a[i]);\r\n\t\tdbg(\"----\");\r\n\t}\r\n\tvoid INS(int *a, int &b, int pos, int label) {\r\n\t\tROF(i, pos + 1, b + 1) a[i] = a[i - 1];\r\n\t\ta[pos] = label;\r\n\t\tb++;\r\n\t}\r\n\tvoid ERASE(int *a, int &b, int l, int r) {\r\n\t\tint dif = r - l;\r\n\t\tif (dif <= 0) return;\r\n\t\tFOR(i, r, b) a[i - dif] = a[i];\r\n\t\tb -= dif;\r\n\t}\r\n\tvoid insLower(int label) {\r\n\t\tint pos = lb(lower, lower + lsz, label, cmp) - lower;\r\n\t\tif (pos && pos < lsz) {\r\n\t\t\tif (cross(lower[pos - 1], lower[pos], label) >= 0) return;\r\n\t\t}\r\n\t\tINS(lower, lsz, pos, label);\r\n\t\t{\r\n\t\t\tint nex = pos + 1;\r\n\t\t\twhile (nex + 1 < lsz && cross(lower[pos], lower[nex], lower[nex + 1]) <= 0)\r\n\t\t\t\tnex++;\r\n\t\t\tERASE(lower, lsz, pos + 1, nex);\r\n\t\t}\r\n\t\t{\r\n\t\t\tint nex = pos - 1;\r\n\t\t\twhile (nex > 0 && cross(lower[nex - 1], lower[nex], lower[pos]) <= 0) nex--;\r\n\t\t\tERASE(lower, lsz, nex + 1, pos);\r\n\t\t}\r\n\t}\r\n\tvoid ins(int label) {\r\n\t\tint i = dsz;\r\n\t\twhile (i && dif(dat[i - 1], label) >= W) i--;\r\n\t\tINS(dat, dsz, i, label);\r\n\t\tinsLower(label);\r\n\t}\r\n};\r\n\r\nvector<Hull> hull;\r\nvi NEX, PRE;\r\nint lst = -1;\r\n\r\nint num;\r\n\r\nint ad() {\r\n\thull.pb(Hull());\r\n\tNEX.pb(-1), PRE.pb(-1);\r\n\treturn sz(hull) - 1;\r\n}\r\n\r\nvoid link(int a, int b) {\r\n\tNEX[a] = b;\r\n\tif (b == -1) lst = a;\r\n\telse PRE[b] = a;\r\n}\r\n\r\nint ti = 0;\r\n\r\nvoid split(int cur) {\r\n\tint SZ = hull[cur].dsz;\r\n\tassert(SZ <= BLOCK);\r\n\tif (SZ != BLOCK) return;\r\n\tint CUR = ad();\r\n\tint aft = NEX[cur];\r\n\tlink(cur, CUR);\r\n\tlink(CUR, aft);\r\n\tint *v = hull[cur].dat;\r\n\tint m = SZ / 2;\r\n\t++ti;\r\n\tassert(hull[CUR].dsz == 0);\r\n\tFOR(i, m, SZ) {\r\n\t\tint t = v[i];\r\n\t\thull[CUR].dat[hull[CUR].dsz++] = t;\r\n\t}\r\n\thull[cur].dsz = m;\r\n\tassert(hull[CUR].dsz == m);\r\n\thull[cur].build();\r\n\thull[CUR].build();  // split block into two\r\n}\r\n\r\nvoid ins(int v, int c) {\r\n\tnum++;\r\n\tint label = sz(fluid);\r\n\tfluid.pb({v, c});\r\n\tint cur = lst, pre = -1;\r\n\twhile (cur != -1 && hull[cur].bad(label)) {\r\n\t\tpre = cur;\r\n\t\tcur = PRE[cur];\r\n\t}\r\n\tif (cur == -1) {\r\n\t\tif (pre == -1) {\r\n\t\t\tassert(sz(fluid) == 1);\r\n\t\t\tlst = pre = ad();\r\n\t\t}\r\n\t\tcur = pre;\r\n\t}\r\n\thull[cur].ins(label);\r\n\tsplit(cur);\r\n}\r\n\r\nint get(int k) {\r\n\tk = num + 1 - k;\r\n\tassert(k);\r\n\tfor (int cur = lst;; cur = PRE[cur]) {\r\n\t\tassert(cur != -1);\r\n\t\tint *v = hull[cur].dat, SZ = hull[cur].dsz;\r\n\t\tif (SZ >= k) return v[SZ - k];\r\n\t\tk -= SZ;\r\n\t}\r\n\texit(5);\r\n}\r\n\r\nint main() {\r\n\tclock_t beg = clock();\r\n\tsetIO();\r\n\tre(N, Q, W);\r\n\tF0R(i, N) {\r\n\t\tint v, c;\r\n\t\tre(v, c);\r\n\t\tins(v, c);\r\n\t}\r\n\tdbg(\"DONE WITH INSERTS\", (db)(clock() - beg) / CLOCKS_PER_SEC);\r\n\tF0R(i, Q) {\r\n\t\tstr s;\r\n\t\tre(s);\r\n\t\tif (s == \"INSERT\") {\r\n\t\t\tint v, c;\r\n\t\t\tre(v, c);\r\n\t\t\tins(v, c);\r\n\t\t} else {\r\n\t\t\tint k;\r\n\t\t\tre(k);\r\n\t\t\tint p = get(k);\r\n\t\t\tps(fluid[p].f, fluid[p].s);\r\n\t\t}\r\n\t}\r\n\tdbg((db)(clock() - beg) / CLOCKS_PER_SEC);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 8,
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

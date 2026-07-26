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
      children: "Process portals and queries in reverse order of time. Maintain a priority queue\r\nat each vertex. Whenever we see a portal, add to each of the portals along its\r\ncentroid path."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Time Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+Q)\\log N+M\\log^2N)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Memory Complexity:"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 1
      }, this), " ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\mathcal{O}((N+M)\\log N+Q)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 24
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\ntemplate <int SZ> struct CD {\r\n\tstruct Edge {\r\n\t\tint a, b, w;\r\n\t\tint other(int x) { return a + b - x; }\r\n\t};\r\n\tvector<Edge> ed;\r\n\tvi adj[SZ];\r\n\r\n\tbool done[SZ];\r\n\tint sub[SZ], par[SZ];\r\n\tvl dist[SZ];\r\n\tpi cen[SZ];\r\n\r\n\tvoid addEdge(int a, int b, int w = 1) {\r\n\t\tadj[a].pb(sz(ed)), adj[b].pb(sz(ed));\r\n\t\ted.pb({a, b, w});\r\n\t}\r\n\r\n\tvoid dfs(int x) {\r\n\t\tsub[x] = 1;\r\n\t\ttrav(i, adj[x]) {\r\n\t\t\tint y = ed[i].other(x);\r\n\t\t\tif (!done[y] && y != par[x]) {\r\n\t\t\t\tpar[y] = x;\r\n\t\t\t\tdfs(y);\r\n\t\t\t\tsub[x] += sub[y];\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tvoid genDist(int p, int x) {\r\n\t\ttrav(i, adj[x]) {\r\n\t\t\tint y = ed[i].other(x);\r\n\t\t\tif (!done[y] && y != p) {\r\n\t\t\t\tcen[y] = cen[x];\r\n\t\t\t\tdist[y].pb(dist[x].back() + ed[i].w);\r\n\t\t\t\tgenDist(x, y);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tint centroid(int x) {\r\n\t\tpar[x] = -1;\r\n\t\tdfs(x);\r\n\t\tfor (int sz = sub[x];;) {\r\n\t\t\tpi mx = {0, 0};\r\n\t\t\ttrav(i, adj[x]) {\r\n\t\t\t\tint y = ed[i].other(x);\r\n\t\t\t\tif (!done[y] && y != par[x]) ckmax(mx, {sub[y], y});\r\n\t\t\t}\r\n\t\t\tif (mx.f * 2 <= sz) return x;\r\n\t\t\tx = mx.s;\r\n\t\t}\r\n\t}\r\n\r\n\tvoid gen(int x, bool fst = 0) {  // call init(1) to start\r\n\t\tdone[x = centroid(x)] = 1;\r\n\t\tdist[x].pb(0);  // exit(0);\r\n\t\tif (fst) cen[x].f = -1;\r\n\t\tint co = 0;\r\n\t\ttrav(i, adj[x]) {\r\n\t\t\tint y = ed[i].other(x);\r\n\t\t\tif (!done[y]) {\r\n\t\t\t\tcen[y] = {x, co++};\r\n\t\t\t\tdist[y].pb(ed[i].w);\r\n\t\t\t\tgenDist(x, y);\r\n\t\t\t}\r\n\t\t}\r\n\t\ttrav(i, adj[x]) {\r\n\t\t\tint y = ed[i].other(x);\r\n\t\t\tif (!done[y]) gen(y);\r\n\t\t}\r\n\t}\r\n\r\n\tvoid init() { gen(0, 1); }\r\n};\r\n\r\nCD<MX> C;\r\nint N, M, Q, T;\r\npriority_queue<pair<ll, int>, vector<pair<ll, int>>, greater<pair<ll, int>>> pq[MX];\r\nll ans[MX];\r\n\r\nvoid updEn(int ti, int x, ll cost) {\r\n\tpi cen = {x, -1};\r\n\tint ind = sz(C.dist[x]) - 1;\r\n\tfor (; cen.f != -1; cen = C.cen[cen.f], ind--)\r\n\t\tpq[cen.f].push({cost + C.dist[x][ind], ti});\r\n}\r\n\r\nll querySt(int ti, int x) {\r\n\tpi cen = {x, -1};\r\n\tint ind = sz(C.dist[x]) - 1;\r\n\tll ans = INF;\r\n\tfor (; cen.f != -1; cen = C.cen[cen.f], ind--) {\r\n\t\twhile (sz(pq[cen.f]) && pq[cen.f].top().s > ti) pq[cen.f].pop();\r\n\t\tif (sz(pq[cen.f])) ckmin(ans, pq[cen.f].top().f + C.dist[x][ind]);\r\n\t}\r\n\treturn ans;\r\n}\r\n\r\nint main() {\r\n\tsetIO();\r\n\tre(N, M, Q, T);\r\n\tF0R(i, N - 1) {\r\n\t\tint X, Y, W;\r\n\t\tre(X, Y, W);\r\n\t\tC.addEdge(X, Y, W);\r\n\t}\r\n\tC.init();\r\n\tvector<array<int, 4>> mod;\r\n\tF0R(i, M) {\r\n\t\tint X, S, E, W;\r\n\t\tre(X, S, E, W);\r\n\t\tmod.pb({S, X, E, W});\r\n\t}\r\n\tF0R(i, Q) {\r\n\t\tint S, P;\r\n\t\tre(S, P);\r\n\t\tmod.pb({S, P, -1, i});\r\n\t}\r\n\tupdEn(T, 0, 0);\r\n\tsort(mod.rbegin(), mod.rend());\r\n\ttrav(t, mod) {\r\n\t\tll z = querySt(t[0], t[1]);\r\n\t\tif (t[2] == -1) {\r\n\t\t\tans[t[3]] = z;\r\n\t\t} else {\r\n\t\t\tif (z < INF) updEn(t[2], t[1], z + t[3]);\r\n\t\t}\r\n\t}\r\n\tF0R(i, Q) {\r\n\t\tif (ans[i] == INF) ps(-1);\r\n\t\telse ps(ans[i]);\r\n\t}\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 10,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 10,
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

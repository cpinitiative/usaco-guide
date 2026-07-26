"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        children: "\\mathcal{O}(N\\log N)"
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
      children: "Using centroid decomposition, we can"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Update the value at some vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 35
        }, this), " in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(\\log N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 6,
          columnNumber: 42
        }, this), " time"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["Query the sum of the values of all vertices that are distance exactly ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 7,
          columnNumber: 73
        }, this), " away\r\nfrom some vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 20
        }, this), " in ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "\\mathcal{O}(\\log N)"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 8,
          columnNumber: 27
        }, this), " time."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 6,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can check the second approach for\r\n", _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_atlarge_platinum_jan18.html",
        rel: "nofollow",
        target: "_blank",
        children: "USACO At Large"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\r\nfor an explanation of how to do this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "What we need for this problem is slightly different; first we need to process\r\nsome number of updates of the following form:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 14,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["Add 1 to the values of all vertices at most ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "d"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 47
        }, this), " away from some vertex ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "v"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 17,
          columnNumber: 73
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 17,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "And then output the values at all vertices at the end. We can use prefix sums\r\nfor this."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 19,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "(Note: quite close to TL ...)"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 22,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\nvoid ad(vi &a, int b) {\r\n\tckmin(b, sz(a) - 1);\r\n\tif (b < 0) return;\r\n\ta[b]++;\r\n}\r\nint get(vi &a, int b) {\r\n\tassert(b >= 0 && b < sz(a));\r\n\treturn a[b];\r\n}\r\nvoid prop(vi &a) { R0F(i, sz(a) - 1) a[i] += a[i + 1]; }\r\n\r\nvi adj[MX];\r\n\r\ntemplate <int SZ> struct Centroid {\r\n\tint N;\r\n\tbool done[SZ];                          // processed as centroid yet\r\n\tint sub[SZ], cen[SZ], lev[SZ], mn[SZ];  // subtree size\r\n\tvi stor[SZ], STOR[SZ];                  // STOR removes overcount\r\n\tvoid dfs(int x, int p) {\r\n\t\tsub[x] = 1;\r\n\t\ttrav(y, adj[x]) if (!done[y] && y != p) {\r\n\t\t\tdfs(y, x);\r\n\t\t\tsub[x] += sub[y];\r\n\t\t}\r\n\t}\r\n\tint centroid(int x) {\r\n\t\tdfs(x, -1);\r\n\t\tfor (int sz = sub[x];;) {\r\n\t\t\tpi mx = {0, 0};\r\n\t\t\ttrav(y, adj[x]) if (!done[y] && sub[y] < sub[x]) ckmax(mx, {sub[y], y});\r\n\t\t\tif (mx.f * 2 <= sz) return x;\r\n\t\t\tx = mx.s;\r\n\t\t}\r\n\t}\r\n\tvector<vi> dist;  // dists to all centroid ancs\r\n\tvoid genDist(int x, int p, int lev) {\r\n\t\tdist[lev][x] = dist[lev][p] + 1;\r\n\t\ttrav(y, adj[x]) if (!done[y] && y != p) genDist(y, x, lev);\r\n\t}  // CEN = {centroid above x, label of centroid subtree}\r\n\tvoid gen(int CEN, int _x) {\r\n\t\tint x = centroid(_x);\r\n\t\tdone[x] = 1;\r\n\t\tcen[x] = CEN;\r\n\t\tsub[x] = sub[_x];\r\n\t\tlev[x] = (CEN == -1 ? 0 : lev[CEN] + 1);\r\n\t\tstor[x].rsz(sub[x]), STOR[x].rsz(sub[x] + 1);\r\n\t\tdbg(\"HA\", x, sub[x]);\r\n\t\tif (lev[x] >= sz(dist)) dist.eb(N + 1, -1);\r\n\t\tdist[lev[x]][x] = 0;\r\n\t\tmn[x] = MOD;\r\n\t\ttrav(y, adj[x]) if (!done[y]) genDist(y, x, lev[x]);\r\n\t\ttrav(y, adj[x]) if (!done[y]) gen(x, y);\r\n\t}\r\n\tvoid init(int _N) {\r\n\t\tN = _N;\r\n\t\tgen(-1, 1);\r\n\t}  // start with vertex 1\r\n\tvoid upd(int x, int y) {\r\n\t\tint cur = x, pre = -1;\r\n\t\tR0F(i, lev[x] + 1) {\r\n\t\t\tad(stor[cur], y - dist[i][x]);\r\n\t\t\tif (pre != -1) ad(STOR[pre], y - dist[i][x]);\r\n\t\t\tif (i > 0) pre = cur, cur = cen[cur];\r\n\t\t}\r\n\t}\r\n\tvoid propAll() { FOR(i, 1, N + 1) prop(stor[i]), prop(STOR[i]); }\r\n\tint query(int x) {  // query value at vertex\r\n\t\tint cur = x, pre = -1, ans = 0;\r\n\t\tR0F(i, lev[x] + 1) {\r\n\t\t\tans += get(stor[cur], dist[i][x]);\r\n\t\t\tif (pre != -1) ans -= get(STOR[pre], dist[i][x]);\r\n\t\t\tif (i > 0) pre = cur, cur = cen[cur];\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n};\r\n\r\n/**\r\n * Description: Calculates least common ancestor in tree\r\n * with root $R$ using binary jumping.\r\n * Time: O(N\\log N) build, O(\\log N) query\r\n * Source: USACO Camp\r\n * Verification: Debug the Bugs\r\n */\r\n\r\ntemplate <int SZ> struct LCA {\r\n\tstatic const int BITS = 32 - __builtin_clz(SZ);\r\n\tint N, R = 1, par[BITS][SZ], depth[SZ];  // vi adj[SZ];\r\n\t/// INITIALIZE\r\n\tvoid ae(int u, int v) { adj[u].pb(v), adj[v].pb(u); }\r\n\tvoid dfs(int u, int prv) {\r\n\t\tdepth[u] = depth[par[0][u] = prv] + 1;\r\n\t\ttrav(v, adj[u]) if (v != prv) dfs(v, u);\r\n\t}\r\n\tvoid init(int _N) {\r\n\t\tN = _N;\r\n\t\tdfs(R, 0);\r\n\t\tFOR(k, 1, BITS) FOR(i, 1, N + 1) par[k][i] = par[k - 1][par[k - 1][i]];\r\n\t}\r\n\t/// QUERY\r\n\tint getPar(int a, int b) {\r\n\t\tR0F(k, BITS) if (b & (1 << k)) a = par[k][a];\r\n\t\treturn a;\r\n\t}\r\n\tint lca(int u, int v) {\r\n\t\tif (depth[u] < depth[v]) swap(u, v);\r\n\t\tu = getPar(u, depth[u] - depth[v]);\r\n\t\tR0F(k, BITS) if (par[k][u] != par[k][v]) u = par[k][u], v = par[k][v];\r\n\t\treturn u == v ? u : par[0][u];\r\n\t}\r\n\tint dist(int u, int v) {  // # edges on path\r\n\t\treturn depth[u] + depth[v] - 2 * depth[lca(u, v)];\r\n\t}\r\n};\r\n\r\nLCA<MX> L;\r\nCentroid<MX> C;\r\nint close[MX];\r\nint N, K;\r\n\r\nvoid dfs1(int x, int p = 0) {\r\n\ttrav(t, adj[x]) if (t != p) {\r\n\t\tdfs1(t, x);\r\n\t\tckmin(close[x], close[t] + 1);\r\n\t}\r\n}\r\n\r\nvoid dfs2(int x, int p = 0) {\r\n\ttrav(t, adj[x]) if (t != p) {\r\n\t\tckmin(close[t], close[x] + 1);\r\n\t\tdfs2(t, x);\r\n\t}\r\n}\r\n\r\nvoid init() {\r\n\tsetIO();\r\n\tre(N, K);\r\n\tF0R(i, N - 1) {\r\n\t\tint x, y;\r\n\t\tre(x, y);\r\n\t\tadj[x].pb(y), adj[y].pb(x);\r\n\t}\r\n\tL.init(N);\r\n\tC.init(N);\r\n\tFOR(i, 1, N + 1) close[i] = MOD;\r\n\tvi a(K);\r\n\tre(a);\r\n\ttrav(t, a) close[t] = 0;\r\n\tdfs1(1);\r\n\tdfs2(1);\r\n}\r\n\r\nint main() {\r\n\tinit();\r\n\tFOR(i, 1, N + 1) {\r\n\t\tint f, p;\r\n\t\tre(f, p);\r\n\t\tint d = L.dist(i, f);\r\n\t\tif (d <= close[i] + p) {\r\n\t\t\tC.upd(i, d - p - 1);\r\n\t\t} else {\r\n\t\t\tC.upd(i, close[i]);\r\n\t\t}\r\n\t}\r\n\tC.propAll();\r\n\tFOR(i, 1, N + 1) {\r\n\t\tint t = C.query(i);\r\n\t\tpr(t, ' ');\r\n\t}\r\n\tps();\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 24,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 24,
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

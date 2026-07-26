"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    p: "p",
    pre: "pre",
    ...props.components
  };
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.p, {
      children: _jsxDEV(_components.a, {
        href: "http://www.usaco.org/current/data/sol_escape_platinum_open19.html",
        rel: "nofollow",
        target: "_blank",
        children: "Official Analysis (no code)"
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
      children: ["If you use ", _jsxDEV(_components.code, {
        children: "vector"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 12
      }, this), "s it's easy to run into issues similar to those mentioned\r\n", _jsxDEV(_components.a, {
        href: "/bronze/intro-ds#dynamic-arrays",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 5,
        columnNumber: 1
      }, this), " ..."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\n/**\r\n * Description: modular arithmetic operations\r\n * Source:\r\n * KACTL\r\n * https://codeforces.com/blog/entry/63903\r\n * https://codeforces.com/contest/1261/submission/65632855 (tourist)\r\n * https://codeforces.com/contest/1264/submission/66344993 (ksun)\r\n * also see https://github.com/ecnerwala/cp-book/blob/master/src/modnum.hpp\r\n * (ecnerwal) Verification: https://open.kattis.com/problems/modulararithmetic\r\n */\r\n\r\ntemplate <int MOD, int RT> struct mint {\r\n\tstatic const int mod = MOD;\r\n\tstatic constexpr mint rt() { return RT; }  // primitive root for FFT\r\n\tint v;\r\n\texplicit operator int() const {\r\n\t\treturn v;\r\n\t}  // explicit -> don't silently convert to int\r\n\tmint() { v = 0; }\r\n\tmint(ll _v) {\r\n\t\tv = int((-MOD < _v && _v < MOD) ? _v : _v % MOD);\r\n\t\tif (v < 0) v += MOD;\r\n\t}\r\n\tfriend bool operator==(const mint &a, const mint &b) { return a.v == b.v; }\r\n\tfriend bool operator!=(const mint &a, const mint &b) { return !(a == b); }\r\n\tfriend bool operator<(const mint &a, const mint &b) { return a.v < b.v; }\r\n\tfriend void re(mint &a) {\r\n\t\tll x;\r\n\t\tre(x);\r\n\t\ta = mint(x);\r\n\t}\r\n\tfriend str ts(mint a) { return ts(a.v); }\r\n\r\n\tmint &operator+=(const mint &m) {\r\n\t\tif ((v += m.v) >= MOD) v -= MOD;\r\n\t\treturn *this;\r\n\t}\r\n\tmint &operator-=(const mint &m) {\r\n\t\tif ((v -= m.v) < 0) v += MOD;\r\n\t\treturn *this;\r\n\t}\r\n\tmint &operator*=(const mint &m) {\r\n\t\tv = (ll)v * m.v % MOD;\r\n\t\treturn *this;\r\n\t}\r\n\tmint &operator/=(const mint &m) { return (*this) *= inv(m); }\r\n\tfriend mint pow(mint a, ll p) {\r\n\t\tmint ans = 1;\r\n\t\tassert(p >= 0);\r\n\t\tfor (; p; p /= 2, a *= a)\r\n\t\t\tif (p & 1) ans *= a;\r\n\t\treturn ans;\r\n\t}\r\n\tfriend mint inv(const mint &a) {\r\n\t\tassert(a.v != 0);\r\n\t\treturn pow(a, MOD - 2);\r\n\t}\r\n\r\n\tmint operator-() const { return mint(-v); }\r\n\tmint &operator++() { return *this += 1; }\r\n\tmint &operator--() { return *this -= 1; }\r\n\tfriend mint operator+(mint a, const mint &b) { return a += b; }\r\n\tfriend mint operator-(mint a, const mint &b) { return a -= b; }\r\n\tfriend mint operator*(mint a, const mint &b) { return a *= b; }\r\n\tfriend mint operator/(mint a, const mint &b) { return a /= b; }\r\n};\r\n\r\ntypedef mint<MOD, 5> mi;  // 5 is primitive root for both common mods\r\ntypedef vector<mi> vmi;\r\ntypedef pair<mi, mi> pmi;\r\ntypedef vector<pmi> vpmi;\r\n\r\nvector<vmi> scmb;  // small combinations\r\nvoid genComb(int SZ) {\r\n\tscmb.assign(SZ, vmi(SZ));\r\n\tscmb[0][0] = 1;\r\n\tFOR(i, 1, SZ)\r\n\tF0R(j, i + 1) scmb[i][j] = scmb[i - 1][j] + (j ? scmb[i - 1][j - 1] : 0);\r\n}\r\n\r\nusing state = pair<ll, mi>;\r\nconst state ID{INF, 0};\r\n\r\nint N, K;\r\nmap<vi, int> vec_to_label;\r\nint hor_tran_stor[132][5], ver_tran_stor[132][6];\r\nV<vi> states;\r\nV<state> dp, dp_tmp;\r\n\r\nint make_state(vi v) {  // OK\r\n\tif (!vec_to_label.count(v)) {\r\n\t\tvec_to_label[v] = sz(states);\r\n\t\tstates.pb(v);\r\n\t\tdp.pb(ID), dp_tmp.pb(ID);\r\n\t}\r\n\treturn vec_to_label[v];\r\n}\r\n\r\nint get_state(vi v) {\r\n\tmap<int, int> m;\r\n\ttrav(t, v) {\r\n\t\tif (!m.count(t)) {\r\n\t\t\tint sz = sz(m);\r\n\t\t\tm[t] = sz;\r\n\t\t\t// NOT equivalent to m[t] = sz(m)\r\n\t\t\t// C++ doesn't guarantee that RHS is evaluated first ...\r\n\t\t}\r\n\t\tt = m[t];\r\n\t}\r\n\treturn make_state(v);\r\n}\r\n\r\nint connect(vi v, int x, int y) {\r\n\tif (x == y) return -1;\r\n\ttrav(t, v) if (t == x) t = y;\r\n\treturn get_state(v);\r\n}\r\n\r\nint disappear(vi v, int col) {\r\n\tassert(col < sz(v));\r\n\tif (multiset<int>(all(v)).count(v[col]) == 1) return -1;\r\n\tv[col] = 100;\r\n\treturn get_state(v);\r\n}\r\n\r\nint hor_tran(int i, int j) {\r\n\tif (hor_tran_stor[i][j] != -2) return hor_tran_stor[i][j];\r\n\tvi v = states[i];\r\n\treturn hor_tran_stor[i][j] = connect(v, v[j], v[j + 1]);\r\n}\r\n\r\nint ver_tran(int i, int j) {\r\n\tif (ver_tran_stor[i][j] != -2) return ver_tran_stor[i][j];\r\n\tvi v = states[i];\r\n\treturn ver_tran_stor[i][j] = disappear(v, j);\r\n}\r\n\r\nvoid ad(int ind, const state &s, int inc) {\r\n\tif (ind == -1) return;\r\n\tll cost = s.f + inc;\r\n\tif (cost < dp_tmp[ind].f) dp_tmp[ind] = {cost, 0};\r\n\tif (cost == dp_tmp[ind].f) dp_tmp[ind].s += s.s;\r\n}\r\n\r\nvoid transition_hor(int j, int wei) {\r\n\tdp_tmp.assign(sz(dp), ID);\r\n\tF0R(i, sz(dp)) if (dp[i].f != INF) {\r\n\t\tad(i, dp[i], 0);\r\n\t\tint nex = hor_tran(i, j);  // add horizontal edge\r\n\t\tad(nex, dp[i], wei);\r\n\t}\r\n\tswap(dp, dp_tmp);\r\n}\r\n\r\nvoid transition_ver(int j, int wei) {\r\n\tdp_tmp.assign(sz(dp), ID);\r\n\tF0R(i, sz(dp)) if (dp[i].f != INF) {\r\n\t\tint nex = ver_tran(i, j);\r\n\t\tad(nex, dp[i], 0);\r\n\t\tad(i, dp[i], wei);  // add vertical edge\r\n\t}\r\n\tswap(dp, dp_tmp);\r\n}\r\n\r\nint main() {\r\n\tsetIO(\"escape\");\r\n\tre(N, K);\r\n\tF0R(i, 132) {\r\n\t\tF0R(j, K - 1) hor_tran_stor[i][j] = -2;\r\n\t\tF0R(j, K) ver_tran_stor[i][j] = -2;\r\n\t}\r\n\tV<vi> hori(N, vi(K - 1));\r\n\tre(hori);\r\n\tV<vi> vert(N - 1, vi(K));\r\n\tF0R(j, K) F0R(i, N - 1) re(vert[i][j]);\r\n\tvi st(K);\r\n\tiota(all(st), 0);\r\n\tmake_state(st);\r\n\tdp[0] = {0, 1};\r\n\tF0R(i, N) {\r\n\t\tF0R(j, K - 1) transition_hor(j, hori[i][j]);\r\n\t\tif (i < N - 1) F0R(j, K) transition_ver(j, vert[i][j]);\r\n\t}\r\n\tps(dp[get_state(vi(K))].s);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 7,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 7,
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

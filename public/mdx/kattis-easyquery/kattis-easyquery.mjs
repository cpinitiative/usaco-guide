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
        children: "\\mathcal O(30(n + q) \\log n)"
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
      children: ["The first step is to determine ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_u"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 32
      }, this), " and ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "s_v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 42
      }, this), " for each query with a Wavelet\r\ntree. Once we have these values, we can answer the queries in decreasing order\r\nof ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "l"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 6,
        columnNumber: 4
      }, this), " with a segment tree."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can do this by computing each of the 30 bits of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(t^{(i)})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 8,
        columnNumber: 52
      }, this), " independently.\r\nThe ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "k"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 5
      }, this), "-th bit of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "f(t^{(i)})"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 19
      }, this), " is equal to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 44
      }, this), " if there exists some value ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 9,
        columnNumber: 75
      }, this), "\r\nsuch that the following conditions hold:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 8,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          className: "language-math",
          children: "x \\in [s_u + 1, s_v - 1]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 11,
          columnNumber: 3
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 11,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "k"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 7
        }, this), "-th bit of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 21
        }, this), " is ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "1"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 12,
          columnNumber: 28
        }, this), "."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 12,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["The ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "i"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 7
        }, this), "-th leftmost occurrence of ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "x"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 37
        }, this), " among ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "a_l, \\dots, a_n"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 13,
          columnNumber: 47
        }, this), " is less than or\r\nequal to ", _jsxDEV(_components.code, {
          className: "language-math",
          children: "r"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 12
        }, this), " (see ", _jsxDEV(_components.code, {
          children: "a[k] <= t[0]"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 14,
          columnNumber: 21
        }, this), " in the code below.)"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 13,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 11,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The indices of each segment tree correspond to the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 52
      }, this), " that appear in ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 16,
        columnNumber: 71
      }, this), " in\r\nincreasing order. Each node of the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 17,
        columnNumber: 36
      }, this), "-th segment tree corresponds to some\r\n", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 1
      }, this), "-range ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "[x_l, x_r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 11
      }, this), ", and stores the minimum ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 48
      }, this), " such that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_j"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 62
      }, this), " is the ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "i"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 18,
        columnNumber: 75
      }, this), "-th\r\noccurrence of ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 15
      }, this), " among ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "a_l, \\dots, a_n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 25
      }, this), " for some ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "x \\in [x_l, x_r]"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 19,
        columnNumber: 52
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nusing ll = long long;\r\nusing ld = long double;\r\nusing db = double;\r\nusing str = string;  // yay python!\r\n\r\nusing pi = pair<int, int>;\r\nusing pl = pair<ll, ll>;\r\nusing pd = pair<db, db>;\r\n\r\nusing vi = vector<int>;\r\nusing vb = vector<bool>;\r\nusing vl = vector<ll>;\r\nusing vd = vector<db>;\r\nusing vs = vector<str>;\r\nusing vpi = vector<pi>;\r\nusing vpl = vector<pl>;\r\nusing vpd = vector<pd>;\r\n\r\n#define tcT template <class T\r\n#define tcTU tcT, class U\r\n// ^ lol this makes everything look weird but I'll try it\r\ntcT > using V = vector<T>;\r\ntcT, size_t SZ > using AR = array<T, SZ>;\r\ntcT > using PR = pair<T, T>;\r\n\r\n// pairs\r\n#define mp make_pair\r\n#define f first\r\n#define s second\r\n\r\n// vectors\r\n// oops size(x), rbegin(x), rend(x) need C++17\r\n#define sz(x) int((x).size())\r\n#define bg(x) begin(x)\r\n#define all(x) bg(x), end(x)\r\n#define rall(x) x.rbegin(), x.rend()\r\n#define sor(x) sort(all(x))\r\n#define rsz resize\r\n#define ins insert\r\n#define ft front()\r\n#define bk back()\r\n#define pb push_back\r\n#define eb emplace_back\r\n#define pf push_front\r\n\r\n#define lb lower_bound\r\n#define ub upper_bound\r\ntcT > int lwb(V<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }\r\n\r\n// loops\r\n#define FOR(i, a, b) for (int i = (a); i < (b); ++i)\r\n#define F0R(i, a) FOR(i, 0, a)\r\n#define ROF(i, a, b) for (int i = (b) - 1; i >= (a); --i)\r\n#define R0F(i, a) ROF(i, 0, a)\r\n#define trav(a, x) for (auto &a : x)\r\n\r\nconst int MOD = 1e9 + 7;  // 998244353;\r\nconst int MX = 2e5 + 5;\r\nconst ll INF = 1e18;  // not too close to LLONG_MAX\r\nconst ld PI = acos((ld)-1);\r\nconst int dx[4] = {1, 0, -1, 0}, dy[4] = {0, 1, 0, -1};  // for every grid problem!!\r\nmt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());\r\ntemplate <class T> using pqg = priority_queue<T, vector<T>, greater<T>>;\r\n\r\n// bitwise ops\r\n// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html\r\nconstexpr int pct(int x) { return __builtin_popcount(x); }  // # of bits set\r\nconstexpr int bits(int x) {  // assert(x >= 0); // make C++11 compatible until\r\n\t                         // USACO updates ...\r\n\treturn x == 0 ? 0 : 31 - __builtin_clz(x);\r\n}  // floor(log2(x))\r\nconstexpr int p2(int x) { return 1 << x; }\r\nconstexpr int msk2(int x) { return p2(x) - 1; }\r\n\r\nll cdiv(ll a, ll b) {\r\n\treturn a / b + ((a ^ b) > 0 && a % b);\r\n}  // divide a by b rounded up\r\nll fdiv(ll a, ll b) {\r\n\treturn a / b - ((a ^ b) < 0 && a % b);\r\n}  // divide a by b rounded down\r\n\r\ntcT > bool ckmin(T &a, const T &b) { return b < a ? a = b, 1 : 0; }  // set a = min(a,b)\r\ntcT > bool ckmax(T &a, const T &b) { return a < b ? a = b, 1 : 0; }\r\n\r\ntcTU > T fstTrue(T lo, T hi, U f) {\r\n\thi++;\r\n\tassert(lo <= hi);  // assuming f is increasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo) / 2;\r\n\t\tf(mid) ? hi = mid : lo = mid + 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcTU > T lstTrue(T lo, T hi, U f) {\r\n\tlo--;\r\n\tassert(lo <= hi);  // assuming f is decreasing\r\n\twhile (lo < hi) {  // find first index such that f is true\r\n\t\tT mid = lo + (hi - lo + 1) / 2;\r\n\t\tf(mid) ? lo = mid : hi = mid - 1;\r\n\t}\r\n\treturn lo;\r\n}\r\ntcT > void remDup(vector<T> &v) {  // sort and remove duplicates\r\n\tsort(all(v));\r\n\tv.erase(unique(all(v)), end(v));\r\n}\r\ntcTU > void erase(T &t, const U &u) {  // don't erase\r\n\tauto it = t.find(u);\r\n\tassert(it != end(t));\r\n\tt.erase(it);\r\n}  // element that doesn't exist from (multi)set\r\n\r\n// INPUT\r\n#define tcTUU tcT, class... U\r\ntcT > void re(complex<T> &c);\r\ntcTU > void re(pair<T, U> &p);\r\ntcT > void re(V<T> &v);\r\ntcT, size_t SZ > void re(AR<T, SZ> &a);\r\n\r\ntcT > void re(T &x) { cin >> x; }\r\nvoid re(db &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stod(t);\r\n}\r\nvoid re(ld &d) {\r\n\tstr t;\r\n\tre(t);\r\n\td = stold(t);\r\n}\r\ntcTUU > void re(T &t, U &...u) {\r\n\tre(t);\r\n\tre(u...);\r\n}\r\n\r\ntcT > void re(complex<T> &c) {\r\n\tT a, b;\r\n\tre(a, b);\r\n\tc = {a, b};\r\n}\r\ntcTU > void re(pair<T, U> &p) { re(p.f, p.s); }\r\ntcT > void re(V<T> &x) { trav(a, x) re(a); }\r\ntcT, size_t SZ > void re(AR<T, SZ> &x) { trav(a, x) re(a); }\r\ntcT > void rv(int n, V<T> &x) {\r\n\tx.rsz(n);\r\n\tre(x);\r\n}\r\n\r\n// TO_STRING\r\n#define ts to_string\r\nstr ts(char c) { return str(1, c); }\r\nstr ts(const char *s) { return (str)s; }\r\nstr ts(str s) { return s; }\r\nstr ts(bool b) {\r\n#ifdef LOCAL\r\n\treturn b ? \"true\" : \"false\";\r\n#else\r\n\treturn ts((int)b);\r\n#endif\r\n}\r\ntcT > str ts(complex<T> c) {\r\n\tstringstream ss;\r\n\tss << c;\r\n\treturn ss.str();\r\n}\r\nstr ts(V<bool> v) {\r\n\tstr res = \"{\";\r\n\tF0R(i, sz(v)) res += char('0' + v[i]);\r\n\tres += \"}\";\r\n\treturn res;\r\n}\r\ntemplate <size_t SZ> str ts(bitset<SZ> b) {\r\n\tstr res = \"\";\r\n\tF0R(i, SZ) res += char('0' + b[i]);\r\n\treturn res;\r\n}\r\ntcTU > str ts(pair<T, U> p);\r\ntcT > str ts(T v) {  // containers with begin(), end()\r\n#ifdef LOCAL\r\n\tbool fst = 1;\r\n\tstr res = \"{\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \", \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\tres += \"}\";\r\n\treturn res;\r\n#else\r\n\tbool fst = 1;\r\n\tstr res = \"\";\r\n\tfor (const auto &x : v) {\r\n\t\tif (!fst) res += \" \";\r\n\t\tfst = 0;\r\n\t\tres += ts(x);\r\n\t}\r\n\treturn res;\r\n\r\n#endif\r\n}\r\ntcTU > str ts(pair<T, U> p) {\r\n#ifdef LOCAL\r\n\treturn \"(\" + ts(p.f) + \", \" + ts(p.s) + \")\";\r\n#else\r\n\treturn ts(p.f) + \" \" + ts(p.s);\r\n#endif\r\n}\r\n\r\n// OUTPUT\r\ntcT > void pr(T x) { cout << ts(x); }\r\ntcTUU > void pr(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tpr(u...);\r\n}\r\nvoid ps() { pr(\"\\n\"); }  // print w/ spaces\r\ntcTUU > void ps(const T &t, const U &...u) {\r\n\tpr(t);\r\n\tif (sizeof...(u)) pr(\" \");\r\n\tps(u...);\r\n}\r\n\r\n// DEBUG\r\nvoid DBG() { cerr << \"]\" << endl; }\r\ntcTUU > void DBG(const T &t, const U &...u) {\r\n\tcerr << ts(t);\r\n\tif (sizeof...(u)) cerr << \", \";\r\n\tDBG(u...);\r\n}\r\n#ifdef LOCAL  // compile with -DLOCAL, chk -> fake assert\r\n#define dbg(...)                                                                       \\\r\n\tcerr << \"Line(\" << __LINE__ << \") -> [\" << #__VA_ARGS__ << \"]: [\", DBG(__VA_ARGS__)\r\n#define chk(...)                                                                       \\\r\n\tif (!(__VA_ARGS__))                                                                \\\r\n\t\tcerr << \"Line(\" << __LINE__ << \") -> function(\" << __FUNCTION__                \\\r\n\t\t     << \") -> CHK FAILED: (\" << #__VA_ARGS__ << \")\" << \"\\n\",                   \\\r\n\t\t    exit(0);\r\n#else\r\n#define dbg(...) 0\r\n#define chk(...) 0\r\n#endif\r\n\r\nvoid setPrec() { cout << fixed << setprecision(15); }\r\nvoid unsyncIO() { cin.tie(0)->sync_with_stdio(0); }\r\n// FILE I/O\r\nvoid setIn(str s) { freopen(s.c_str(), \"r\", stdin); }\r\nvoid setOut(str s) { freopen(s.c_str(), \"w\", stdout); }\r\nvoid setIO(str s = \"\") {\r\n\tunsyncIO();\r\n\tsetPrec();\r\n\t// cin.exceptions(cin.failbit);\r\n\t// throws exception when do smth illegal\r\n\t// ex. try to read letter into int\r\n\tif (sz(s)) setIn(s + \".in\"), setOut(s + \".out\");  // for USACO\r\n}\r\n\r\ntemplate <int SZ> struct Wavelet {\r\n\tvi nex[2 * SZ][2];\r\n\tvoid build(vi &a, int ind, int L, int R) {\r\n\t\tif (L == R) return;\r\n\t\tF0R(i, 2) nex[ind][i] = {0};\r\n\t\tvi A[2];\r\n\t\tint M = (L + R) / 2;\r\n\t\ttrav(t, a) {\r\n\t\t\tA[t > M].pb(t);\r\n\t\t\tF0R(i, 2) nex[ind][i].pb(sz(A[i]));\r\n\t\t}\r\n\t\tbuild(A[0], 2 * ind, L, M);\r\n\t\tbuild(A[1], 2 * ind + 1, M + 1, R);\r\n\t}\r\n\tpi lef(int lo, int hi, int u, int v, int ind, int L, int R) {\r\n\t\tif (L == R) return {L, min(v, hi - lo) - u};\r\n\t\tint M = (L + R) / 2, t = nex[ind][0][hi] - nex[ind][0][lo];\r\n\t\tif (t > u) return lef(nex[ind][0][lo], nex[ind][0][hi], u, v, 2 * ind, L, M);\r\n\t\treturn lef(nex[ind][1][lo], nex[ind][1][hi], u - t, v - t, 2 * ind + 1, M + 1,\r\n\t\t           R);\r\n\t}\r\n\tpi rig(int lo, int hi, int u, int v, int ind, int L, int R) {\r\n\t\tif (L == R) return {L, v - max(u, 0)};\r\n\t\tint M = (L + R) / 2, t = nex[ind][0][hi] - nex[ind][0][lo];\r\n\t\tif (t >= v) return rig(nex[ind][0][lo], nex[ind][0][hi], u, v, 2 * ind, L, M);\r\n\t\treturn rig(nex[ind][1][lo], nex[ind][1][hi], u - t, v - t, 2 * ind + 1, M + 1,\r\n\t\t           R);\r\n\t}\r\n};\r\n\r\nWavelet<1 << 18> W;\r\ntypedef array<int, 30> T;\r\nT ID;\r\n\r\nT comb(T a, T b) {\r\n\tF0R(i, 30) ckmin(a[i], b[i]);\r\n\treturn a;\r\n}\r\n\r\nstruct Seg {\r\n\tint n;\r\n\tvector<T> seg;\r\n\tvoid init(int _n) {\r\n\t\tn = _n;\r\n\t\tseg = vector<T>(2 * n, ID);\r\n\t}\r\n\tvoid pull(int p) { seg[p] = comb(seg[2 * p], seg[2 * p + 1]); }\r\n\tvoid upd(int p, T value) {  // set value at position p\r\n\t\tseg[p += n] = value;\r\n\t\tfor (p /= 2; p; p /= 2) pull(p);\r\n\t}\r\n\tT query(int l, int r) {  // sum on interval [l, r]\r\n\t\tT ra = ID, rb = ID;\r\n\t\tfor (l += n, r += n + 1; l < r; l /= 2, r /= 2) {\r\n\t\t\tif (l & 1) ra = comb(ra, seg[l++]);\r\n\t\t\tif (r & 1) rb = comb(seg[--r], rb);\r\n\t\t}\r\n\t\treturn comb(ra, rb);\r\n\t}\r\n};\r\n\r\nSeg dat[4];\r\nint n, q, ans[MX][4];\r\nvector<array<int, 4>> todo[MX];\r\nvi a;\r\nmap<int, int> m;\r\nvi rm;\r\nvi oc[MX];\r\n\r\nvoid upd(int ind) {\r\n\tint pos = m[a[ind]];\r\n\toc[pos].pb(ind);\r\n\tFOR(i, 1, 4) if (i <= sz(oc[pos])) {\r\n\t\tT val;\r\n\t\tF0R(j, 30) {\r\n\t\t\tif (a[ind] & (1 << j)) val[j] = oc[pos][sz(oc[pos]) - i];\r\n\t\t\telse val[j] = MOD;\r\n\t\t}\r\n\t\tdat[i].upd(pos, val);\r\n\t}\r\n}\r\n\r\nvoid solve() {\r\n\tre(n, q);\r\n\ta.rsz(n);\r\n\tre(a);\r\n\tm.clear();\r\n\trm.clear();\r\n\ttrav(t, a) m[t] = 0;\r\n\tint co = 0;\r\n\ttrav(t, m) {\r\n\t\trm.pb(t.f);\r\n\t\tt.s = co++;\r\n\t}\r\n\tvi A;\r\n\ttrav(t, a) A.pb(m[t]);\r\n\tW.build(A, 1, 0, sz(m) - 1);\r\n\tF0R(i, n) todo[i].clear(), oc[i].clear();\r\n\tF0R(i, q) FOR(j, 1, 4) ans[i][j] = 0;\r\n\tF0R(i, q) {\r\n\t\tint l, r, u, v;\r\n\t\tre(l, r, u, v);\r\n\t\tl--, r--;\r\n\t\tu--, v--;\r\n\t\t// get s_u and # of occurrences\r\n\t\tpi a = W.lef(l, r + 1, u, v + 1, 1, 0, sz(m) - 1);\r\n\t\ta.f = rm[a.f];\r\n\t\t// get s_v and # of occurrences\r\n\t\tpi b = W.rig(l, r + 1, u, v + 1, 1, 0, sz(m) - 1);\r\n\t\tb.f = rm[b.f];\r\n\t\tFOR(j, 1, min(a.s, 3) + 1) ans[i][j] |= a.f;\r\n\t\tFOR(j, 1, min(b.s, 3) + 1) ans[i][j] |= b.f;\r\n\t\ttodo[l].pb({r, a.f, b.f, i});\r\n\t}\r\n\tFOR(j, 1, 4) dat[j].init(n);\r\n\tR0F(i, n) {\r\n\t\tupd(i);\r\n\t\ttrav(t, todo[i]) {\r\n\t\t\tFOR(j, 1, 4) {\r\n\t\t\t\tauto a = dat[j].query(m[t[1]] + 1, m[t[2]] - 1);\r\n\t\t\t\tF0R(k, 30) if (a[k] <= t[0]) ans[t[3]][j] |= 1 << k;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\tF0R(i, q) {\r\n\t\tll ret = 0;\r\n\t\tFOR(j, 1, 4) ret += ans[i][j];\r\n\t\tps(ret);\r\n\t}\r\n}\r\n\r\nint main() {\r\n\tcin.sync_with_stdio(0);\r\n\tcin.tie(0);\r\n\tF0R(i, 30) ID[i] = MOD;\r\n\tint t;\r\n\tre(t);\r\n\tF0R(i, t) solve();\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 21,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 21,
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

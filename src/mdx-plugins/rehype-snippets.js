/*eslint-disable */
'use strict';

const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');

const replacements = {
  'Benq Template': `//BeginCodeSnip{Benq Template}
#include <bits/stdc++.h>
using namespace std;
 
using ll = long long;
using db = long double; // or double, if TL is tight
using str = string; // yay python!

using pi = pair<int,int>;
using pl = pair<ll,ll>;
using pd = pair<db,db>;

using vi = vector<int>;
using vb = vector<bool>;
using vl = vector<ll>;
using vd = vector<db>; 
using vs = vector<str>;
using vpi = vector<pi>;
using vpl = vector<pl>; 
using vpd = vector<pd>;

#define tcT template<class T
#define tcTU tcT, class U
// ^ lol this makes everything look weird but I'll try it
tcT> using V = vector<T>; 
tcT, size_t SZ> using AR = array<T,SZ>; 
tcT> using PR = pair<T,T>;

// pairs
#define mp make_pair
#define f first
#define s second

// vectors
// oops size(x), rbegin(x), rend(x) need C++17
#define sz(x) int((x).size())
#define bg(x) begin(x)
#define all(x) bg(x), end(x)
#define rall(x) x.rbegin(), x.rend() 
#define sor(x) sort(all(x)) 
#define rsz resize
#define ins insert 
#define ft front()
#define bk back()
#define pb push_back
#define eb emplace_back 
#define pf push_front
#define rtn return

#define lb lower_bound
#define ub upper_bound 
tcT> int lwb(V<T>& a, const T& b) { return int(lb(all(a),b)-bg(a)); }

// loops
#define FOR(i,a,b) for (int i = (a); i < (b); ++i)
#define F0R(i,a) FOR(i,0,a)
#define ROF(i,a,b) for (int i = (b)-1; i >= (a); --i)
#define R0F(i,a) ROF(i,0,a)
#define rep(a) F0R(_,a)
#define each(a,x) for (auto& a: x)

const int MOD = 1e9+7; // 998244353;
const int MX = 2e5+5;
const ll INF = 1e18; // not too close to LLONG_MAX
const db PI = acos((db)-1);
const int dx[4] = {1,0,-1,0}, dy[4] = {0,1,0,-1}; // for every grid problem!!
mt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count()); 
template<class T> using pqg = priority_queue<T,vector<T>,greater<T>>;

// bitwise ops
// also see https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html
constexpr int pct(int x) { return __builtin_popcount(x); } // # of bits set
constexpr int bits(int x) { // assert(x >= 0); // make C++11 compatible until USACO updates ...
\treturn x == 0 ? 0 : 31-__builtin_clz(x); } // floor(log2(x)) 
constexpr int p2(int x) { return 1<<x; }
constexpr int msk2(int x) { return p2(x)-1; }

ll cdiv(ll a, ll b) { return a/b+((a^b)>0&&a%b); } // divide a by b rounded up
ll fdiv(ll a, ll b) { return a/b-((a^b)<0&&a%b); } // divide a by b rounded down

tcT> bool ckmin(T& a, const T& b) {
\treturn b < a ? a = b, 1 : 0; } // set a = min(a,b)
tcT> bool ckmax(T& a, const T& b) {
\treturn a < b ? a = b, 1 : 0; }

tcTU> T fstTrue(T lo, T hi, U f) {
\thi ++; assert(lo <= hi); // assuming f is increasing
\twhile (lo < hi) { // find first index such that f is true 
\t\tT mid = lo+(hi-lo)/2;
\t\tf(mid) ? hi = mid : lo = mid+1; 
\t} 
\treturn lo;
}
tcTU> T lstTrue(T lo, T hi, U f) {
\tlo --; assert(lo <= hi); // assuming f is decreasing
\twhile (lo < hi) { // find first index such that f is true 
\t\tT mid = lo+(hi-lo+1)/2;
\t\tf(mid) ? lo = mid : hi = mid-1;
\t} 
\treturn lo;
}
tcT> void remDup(vector<T>& v) { // sort and remove duplicates
\tsort(all(v)); v.erase(unique(all(v)),end(v)); }
tcTU> void erase(T& t, const U& u) { // don't erase
\tauto it = t.find(u); assert(it != end(t));
\tt.erase(it); } // element that doesn't exist from (multi)set

#define tcTUU tcT, class ...U

inline namespace Helpers {
\t//////////// is_iterable
\t// https://stackoverflow.com/questions/13830158/check-if-a-variable-type-is-iterable
\t// this gets used only when we can call begin() and end() on that type
\ttcT, class = void> struct is_iterable : false_type {};
\ttcT> struct is_iterable<T, void_t<decltype(begin(declval<T>())),
\t                                  decltype(end(declval<T>()))
\t                                 >
\t                       > : true_type {};
\ttcT> constexpr bool is_iterable_v = is_iterable<T>::value;

\t//////////// is_readable
\ttcT, class = void> struct is_readable : false_type {};
\ttcT> struct is_readable<T,
\t        typename std::enable_if_t<
\t            is_same_v<decltype(cin >> declval<T&>()), istream&>
\t        >
\t    > : true_type {};
\ttcT> constexpr bool is_readable_v = is_readable<T>::value;

\t//////////// is_printable
\t// // https://nafe.es/posts/2020-02-29-is-printable/
\ttcT, class = void> struct is_printable : false_type {};
\ttcT> struct is_printable<T,
\t        typename std::enable_if_t<
\t            is_same_v<decltype(cout << declval<T>()), ostream&>
\t        >
\t    > : true_type {};
\ttcT> constexpr bool is_printable_v = is_printable<T>::value;
}

inline namespace Input {
\ttcT> constexpr bool needs_input_v = !is_readable_v<T> && is_iterable_v<T>;
\ttcTUU> void re(T& t, U&... u);
\ttcTU> void re(pair<T,U>& p); // pairs

\t// re: read
\ttcT> typename enable_if<is_readable_v<T>,void>::type re(T& x) { cin >> x; } // default
\ttcT> void re(complex<T>& c) { T a,b; re(a,b); c = {a,b}; } // complex
\ttcT> typename enable_if<needs_input_v<T>,void>::type re(T& i); // ex. vectors, arrays
\ttcTU> void re(pair<T,U>& p) { re(p.f,p.s); }
\ttcT> typename enable_if<needs_input_v<T>,void>::type re(T& i) {
\t\teach(x,i) re(x); }
\ttcTUU> void re(T& t, U&... u) { re(t); re(u...); } // read multiple

\t// rv: resize and read vectors
\tvoid rv(size_t) {}
\ttcTUU> void rv(size_t N, V<T>& t, U&... u);
\ttemplate<class...U> void rv(size_t, size_t N2, U&... u);
\ttcTUU> void rv(size_t N, V<T>& t, U&... u) {
\t\tt.rsz(N); re(t);
\t\trv(N,u...); }
\ttemplate<class...U> void rv(size_t, size_t N2, U&... u) {
\t\trv(N2,u...); }

\t// dumb shortcuts to read in ints
\tvoid decrement() {} // subtract one from each
\ttcTUU> void decrement(T& t, U&... u) { --t; decrement(u...); }
\t#define ints(...) int __VA_ARGS__; re(__VA_ARGS__);
\t#define int1(...) ints(__VA_ARGS__); decrement(__VA_ARGS__);
}

inline namespace ToString {
\ttcT> constexpr bool needs_output_v = !is_printable_v<T> && is_iterable_v<T>;

\t// ts: string representation to print
\ttcT> typename enable_if<is_printable_v<T>,str>::type ts(T v) {
\t\tstringstream ss; ss << fixed << setprecision(15) << v;
\t\treturn ss.str(); } // default
\ttcT> str bit_vec(T t) { // bit vector to string
\t\tstr res = "{"; F0R(i,sz(t)) res += ts(t[i]);
\t\tres += "}"; return res; }
\tstr ts(V<bool> v) { return bit_vec(v); }
\ttemplate<size_t SZ> str ts(bitset<SZ> b) { return bit_vec(b); } // bit vector
\ttcTU> str ts(pair<T,U> p); // pairs
\ttcT> typename enable_if<needs_output_v<T>,str>::type ts(T v); // vectors, arrays
\ttcTU> str ts(pair<T,U> p) { return "("+ts(p.f)+", "+ts(p.s)+")"; }
\ttcT> typename enable_if<is_iterable_v<T>,str>::type ts_sep(T v, str sep) {
\t\t// convert container to string w/ separator sep
\t\tbool fst = 1; str res = "";
\t\tfor (const auto& x: v) {
\t\t\tif (!fst) res += sep;
\t\t\tfst = 0; res += ts(x);
\t\t}
\t\treturn res;
\t}
\ttcT> typename enable_if<needs_output_v<T>,str>::type ts(T v) {
\t\treturn "{"+ts_sep(v,", ")+"}"; }

\t// for nested DS
\ttemplate<int, class T> typename enable_if<!needs_output_v<T>,vs>::type 
\t  ts_lev(const T& v) { return {ts(v)}; }
\ttemplate<int lev, class T> typename enable_if<needs_output_v<T>,vs>::type 
\t  ts_lev(const T& v) {
\t\tif (lev == 0 || !sz(v)) return {ts(v)};
\t\tvs res;
\t\tfor (const auto& t: v) {
\t\t\tif (sz(res)) res.bk += ",";
\t\t\tvs tmp = ts_lev<lev-1>(t);
\t\t\tres.ins(end(res),all(tmp));
\t\t}
\t\tF0R(i,sz(res)) {
\t\t\tstr bef = " "; if (i == 0) bef = "{";
\t\t\tres[i] = bef+res[i];
\t\t}
\t\tres.bk += "}";
\t\treturn res;
\t}
}

inline namespace Output {
\ttemplate<class T> void pr_sep(ostream& os, str, const T& t) { os << ts(t); }
\ttemplate<class T, class... U> void pr_sep(ostream& os, str sep, const T& t, const U&... u) {
\t\tpr_sep(os,sep,t); os << sep; pr_sep(os,sep,u...); }
\t// print w/ no spaces
\ttemplate<class ...T> void pr(const T&... t) { pr_sep(cout,"",t...); } 
\t// print w/ spaces, end with newline
\tvoid ps() { cout << "\\n"; }
\ttemplate<class ...T> void ps(const T&... t) { pr_sep(cout," ",t...); ps(); } 
\t// debug to cerr
\ttemplate<class ...T> void dbg_out(const T&... t) {
\t\tpr_sep(cerr," | ",t...); cerr << endl; }
\tvoid loc_info(int line, str names) {
\t\tcerr << "Line(" << line << ") -> [" << names << "]: "; }
\ttemplate<int lev, class T> void dbgl_out(const T& t) {
\t\tcerr << "\\n\\n" << ts_sep(ts_lev<lev>(t),"\\n") << "\\n" << endl; }
\t#ifdef LOCAL
\t\t#define dbg(...) loc_info(__LINE__,#__VA_ARGS__), dbg_out(__VA_ARGS__)
\t\t#define dbgl(lev,x) loc_info(__LINE__,#x), dbgl_out<lev>(x)
\t#else // don't actually submit with this
\t\t#define dbg(...) 0
\t\t#define dbgl(lev,x) 0
\t#endif
}

inline namespace FileIO {
\tvoid setIn(str s)  { freopen(s.c_str(), "r", stdin); }
\tvoid setOut(str s) { freopen(s.c_str(), "w", stdout); }
\tvoid setIO(str s = "") {
\t\tcin.tie(0)->sync_with_stdio(0); // unsync C / C++ I/O streams
\t\t// cin.exceptions(cin.failbit);
\t\t// throws exception when do smth illegal
\t\t// ex. try to read letter into int
\t\tif (sz(s)) setIn(s+".in"), setOut(s+".out"); // for old USACO
\t}
}
//EndCodeSnip`,
  Kattio: `//BeginCodeSnip{Kattio}
static class Kattio extends PrintWriter {
\tprivate BufferedReader r;
\tprivate StringTokenizer st;
\t// standard input
\tpublic Kattio() { this(System.in, System.out); }
\tpublic Kattio(InputStream i, OutputStream o) {
\t\tsuper(o);
\t\tr = new BufferedReader(new InputStreamReader(i));
\t}
\t// USACO-style file input
\tpublic Kattio(String problemName) throws IOException {
\t\tsuper(problemName + ".out");
\t\tr = new BufferedReader(new FileReader(problemName + ".in"));
\t}
\t// returns null if no more input
\tpublic String next() {
\t\ttry {
\t\t\twhile (st == null || !st.hasMoreTokens())
\t\t\t\tst = new StringTokenizer(r.readLine());
\t\t\treturn st.nextToken();
\t\t} catch (Exception e) { }
\t\treturn null;
\t}
\tpublic int nextInt() { return Integer.parseInt(next()); }
\tpublic double nextDouble() { return Double.parseDouble(next()); }
\tpublic long nextLong() { return Long.parseLong(next()); }
}
//EndCodeSnip`,
  'CPP Short Template': `//BeginCodeSnip{C++ Short Template}
#include <bits/stdc++.h> // see /general/running-code-locally
using namespace std;

using ll = long long;

using vi = vector<int>;
#define pb push_back
#define all(x) begin(x), end(x)
#define sz(x) (int) (x).size()

using pi = pair<int,int>;
#define f first
#define s second
#define mp make_pair

void setIO(string name = "") {
\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io
\tif (sz(name)) {
\t\tfreopen((name + ".in").c_str(), "r", stdin); // see /general/input-output
\t\tfreopen((name + ".out").c_str(), "w", stdout);
\t}
}
//EndCodeSnip`,
};

module.exports = options => {
  options = options || {};

  return tree => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }
    if (node.children.length !== 1) {
      throw 'Expected only one child for a code block';
    }
    const newValue = [];
    for (const line of node.children[0].value.split('\n')) {
      let found = false;
      for (const key of Object.keys(replacements)) {
        const results = line.match(
          new RegExp(`^(\\s*).*?(CodeSnip\\{${key}\\})`)
        );
        if (results) {
          for (const snippetLine of replacements[key].split('\n')) {
            newValue.push(`${results[1]}${snippetLine}`);
          }
          found = true;
          break;
        }
      }
      if (!found) newValue.push(line);
    }
    node.children[0].value = newValue.join('\n');
  }
};

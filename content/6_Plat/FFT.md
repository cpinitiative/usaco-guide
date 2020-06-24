---
id: fft
title: "Fast Fourier Transform and Applications"
author: Benjamin Qi
prerequisites:
description: "?"
---

## FFT

### Tutorial

 - [cp-algo - FFT](https://cp-algorithms.com/algebra/fft.html)
 - [CSA - FFT and Variations](https://csacademy.com/blog/fast-fourier-transform-and-variations-of-it/)
 - [CF Tutorial Pt 1](http://codeforces.com/blog/entry/43499)
 - [CF Tutorial Pt 2](http://codeforces.com/blog/entry/48798)
 - [CF adamant](http://codeforces.com/blog/entry/55572)

### Problems

 - [K-Inversions](https://open.kattis.com/problems/kinversions)
 - [Big Integer](https://dmoj.ca/problem/bts17p8)
 - [Matchings](https://open.kattis.com/contests/acpc17open/problems/matchings)
 - [Counting Triplets](https://toph.co/p/counting-triplets)
 - [Alien Codebreaking](https://open.kattis.com/problems/aliencodebreaking)
   - base conversion in $O(N\log^2N)$

## More Complex Operations

 - [cp-algo - Operations on Polynomials & Series](https://cp-algorithms.com/algebra/polynomial.html)
 - [My Implementations](https://github.com/bqi343/USACO/tree/master/Implementations/content/numerical/Polynomials)

## Counting

 - USACO Plat
   - [Tree Depth](http://www.usaco.org/index.php?page=viewproblem2&cpid=974)
   - [Exercise](http://www.usaco.org/index.php?page=viewproblem2&cpid=1045)
 - [zscoder GenFunc Pt 1](https://codeforces.com/blog/entry/77468)
 - [zscoder GenFunc Pt 2](https://codeforces.com/blog/entry/77551)

## [F2: Slime & Sequences](https://codeforces.com/contest/1349/problem/F2)

Providing some code to make the explanation for the last problem from zscoder's GenFunc Pt 2 clearer. It's quite easy to lose some factor of $y$ or $z$ somewhere during the calculation and end up with gibberish.

Of course, this will be split into several parts to make it easier to follow.

### Part 0: Includes

Warning: 400+ lines of polynomial template

<spoiler title="Template">

```cpp
#include <bits/stdc++.h>
using namespace std;
 
typedef long long ll;
typedef long double ld;
typedef double db; 
typedef string str; 

typedef pair<int,int> pi;
typedef pair<ll,ll> pl; 
typedef pair<db,db> pd; 

typedef vector<int> vi; 
typedef vector<ll> vl; 
typedef vector<db> vd; 
typedef vector<str> vs; 
typedef vector<pi> vpi;
typedef vector<pl> vpl; 
typedef vector<pd> vpd; 

#define mp make_pair
#define f first
#define s second
#define sz(x) (int)x.size()
#define all(x) begin(x), end(x)
#define rall(x) (x).rbegin(), (x).rend() 
#define rsz resize
#define ins insert 
#define ft front() 
#define bk back()
#define pf push_front 
#define pb push_back
#define eb emplace_back 
#define lb lower_bound 
#define ub upper_bound 

#define FOR(i,a,b) for (int i = (a); i < (b); ++i)
#define F0R(i,a) FOR(i,0,a)
#define ROF(i,a,b) for (int i = (b)-1; i >= (a); --i)
#define R0F(i,a) ROF(i,0,a)
#define trav(a,x) for (auto& a: x)

const int root = 3, MOD = (119<<23)+1; // 998244353
// For p < 2^30 there is also e.g. (5<<25, 3), (7<<26, 3) 
/// (479<<21, 3) and (483<<21, 5). Last two are > 10^9.

const int MX = 2e5+5; 
const ll INF = 1e18; 
const ld PI = acos((ld)-1);
const int xd[4] = {1,0,-1,0}, yd[4] = {0,1,0,-1}; 
mt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count()); 

template<class T> bool ckmin(T& a, const T& b) { 
	return b < a ? a = b, 1 : 0; }
template<class T> bool ckmax(T& a, const T& b) { 
	return a < b ? a = b, 1 : 0; } 
int pct(int x) { return __builtin_popcount(x); } 
int bits(int x) { return 31-__builtin_clz(x); } // floor(log2(x)) 
int cdiv(int a, int b) { return a/b+!(a<0||a%b == 0); } // division of a by b rounded up, assumes b > 0 
int fstTrue(function<bool(int)> f, int lo, int hi) {
	hi ++; assert(lo <= hi); // assuming f is increasing
	while (lo < hi) { // find first index such that f is true 
		int mid = (lo+hi)/2; 
		f(mid) ? hi = mid : lo = mid+1; 
	} 
	return lo;
}
template<class T> void remDup(vector<T>& v) { 
	sort(all(v)); v.erase(unique(all(v)),end(v)); }

// INPUT
template<class A> void re(complex<A>& c);
template<class A, class B> void re(pair<A,B>& p);
template<class A> void re(vector<A>& v);
template<class A, size_t SZ> void re(array<A,SZ>& a);

template<class T> void re(T& x) { cin >> x; }
void re(db& d) { str t; re(t); d = stod(t); }
void re(ld& d) { str t; re(t); d = stold(t); }
template<class H, class... T> void re(H& h, T&... t) { re(h); re(t...); }

template<class A> void re(complex<A>& c) { A a,b; re(a,b); c = {a,b}; }
template<class A, class B> void re(pair<A,B>& p) { re(p.f,p.s); }
template<class A> void re(vector<A>& x) { trav(a,x) re(a); }
template<class A, size_t SZ> void re(array<A,SZ>& x) { trav(a,x) re(a); }

// TO_STRING
#define ts to_string
str ts(char c) { return str(1,c); }
str ts(bool b) { return b ? "true" : "false"; }
str ts(const char* s) { return (str)s; }
str ts(str s) { return s; }
template<class A> str ts(complex<A> c) { 
	stringstream ss; ss << c; return ss.str(); }
str ts(vector<bool> v) { 
	str res = "{"; F0R(i,sz(v)) res += char('0'+v[i]);
	res += "}"; return res; }
template<size_t SZ> str ts(bitset<SZ> b) {
	str res = ""; F0R(i,SZ) res += char('0'+b[i]);
	return res; }
template<class A, class B> str ts(pair<A,B> p);
template<class T> str ts(T v) { // containers with begin(), end()
	bool fst = 1; str res = "{";
	for (const auto& x: v) {
		if (!fst) res += ", ";
		fst = 0; res += ts(x);
	}
	res += "}"; return res;
}
template<class A, class B> str ts(pair<A,B> p) {
	return "("+ts(p.f)+", "+ts(p.s)+")"; }

// OUTPUT
template<class A> void pr(A x) { cout << ts(x); }
template<class H, class... T> void pr(const H& h, const T&... t) { 
	pr(h); pr(t...); }
void ps() { pr("\n"); } // print w/ spaces
template<class H, class... T> void ps(const H& h, const T&... t) { 
	pr(h); if (sizeof...(t)) pr(" "); ps(t...); }

// DEBUG
void DBG() { cerr << "]" << endl; }
template<class H, class... T> void DBG(H h, T... t) {
	cerr << ts(h); if (sizeof...(t)) cerr << ", ";
	DBG(t...); }
#ifdef LOCAL // compile with -DLOCAL
#define dbg(...) cerr << "LINE(" << __LINE__ << ") -> [" << #__VA_ARGS__ << "]: [", DBG(__VA_ARGS__)
#else
#define dbg(...) 0
#endif

// FILE I/O
void setIn(string s) { freopen(s.c_str(),"r",stdin); }
void setOut(string s) { freopen(s.c_str(),"w",stdout); }
void unsyncIO() { ios_base::sync_with_stdio(0); cin.tie(0); }
void setIO(string s = "") {
	unsyncIO();
	// cin.exceptions(cin.failbit); 
	// throws exception when do smth illegal
	// ex. try to read letter into int
	if (sz(s)) { setIn(s+".in"), setOut(s+".out"); } // for USACO
}

/**
 * Description: modular arithmetic operations 
 * Source: 
	* KACTL
	* https://codeforces.com/blog/entry/63903
	* https://codeforces.com/contest/1261/submission/65632855 (tourist)
	* https://codeforces.com/contest/1264/submission/66344993 (ksun)
	* also see https://github.com/ecnerwala/cp-book/blob/master/src/modnum.hpp (ecnerwal)
 * Verification: 
	* https://open.kattis.com/problems/modulararithmetic
 */

struct mi {
	typedef decay<decltype(MOD)>::type T; 
 	/// don't silently convert to T
	T v; explicit operator T() const { return v; }
	mi() { v = 0; }
	mi(ll _v) { 
		v = (-MOD < _v && _v < MOD) ? _v : _v % MOD;
		if (v < 0) v += MOD;
	}
	friend bool operator==(const mi& a, const mi& b) { 
		return a.v == b.v; }
	friend bool operator!=(const mi& a, const mi& b) { 
		return !(a == b); }
	friend bool operator<(const mi& a, const mi& b) { 
		return a.v < b.v; }
	friend void re(mi& a) { ll x; re(x); a = mi(x); }
	friend str ts(mi a) { return ts(a.v); }
   
	mi& operator+=(const mi& m) { 
		if ((v += m.v) >= MOD) v -= MOD; 
		return *this; }
	mi& operator-=(const mi& m) { 
		if ((v -= m.v) < 0) v += MOD; 
		return *this; }
	mi& operator*=(const mi& m) { 
		v = (ll)v*m.v%MOD; return *this; }
	mi& operator/=(const mi& m) { return (*this) *= inv(m); }
	friend mi pow(mi a, ll p) {
		mi ans = 1; assert(p >= 0);
		for (; p; p /= 2, a *= a) if (p&1) ans *= a;
		return ans;
	}
	friend mi inv(const mi& a) { assert(a.v != 0); 
		return pow(a,MOD-2); }
		
	mi operator-() const { return mi(-v); }
	mi& operator++() { return *this += 1; }
	mi& operator--() { return *this -= 1; }
	friend mi operator+(mi a, const mi& b) { return a += b; }
	friend mi operator-(mi a, const mi& b) { return a -= b; }
	friend mi operator*(mi a, const mi& b) { return a *= b; }
	friend mi operator/(mi a, const mi& b) { return a /= b; }
};
typedef vector<mi> vmi;
typedef pair<mi,mi> pmi;
typedef vector<pmi> vpmi;

vector<vmi> scmb; // small combinations
void genComb(int SZ) {
	scmb.assign(SZ,vmi(SZ)); scmb[0][0] = 1;
	FOR(i,1,SZ) F0R(j,i+1) 
		scmb[i][j] = scmb[i-1][j]+(j?scmb[i-1][j-1]:0);
}

/**
 * Description: pre-compute factorial mod inverses,
 	* assumes $MOD$ is prime and $SZ < MOD$.
 * Time: O(SZ)
 * Source: KACTL
 * Verification: https://dmoj.ca/problem/tle17c4p5
 */

vi invs, fac, ifac;
void genFac(int SZ) {
	invs.rsz(SZ), fac.rsz(SZ), ifac.rsz(SZ); 
	invs[1] = fac[0] = ifac[0] = 1; 
	FOR(i,2,SZ) invs[i] = MOD-(ll)MOD/i*invs[MOD%i]%MOD;
	FOR(i,1,SZ) {
		fac[i] = (ll)fac[i-1]*i%MOD;
		ifac[i] = (ll)ifac[i-1]*invs[i]%MOD;
	}
}

ll comb(int a, int b) {
	if (a < b || b < 0) return 0;
	return (ll)fac[a]*ifac[b]%MOD*ifac[a-b]%MOD;
}

/**
 * Description: Basic poly ops including division. Can replace \texttt{T} with double, complex.
 * Source: Own. Also see
 	* https://github.com/kth-competitive-programming/kactl/blob/master/content/numerical/PolyInterpolate.h
 	* https://github.com/ecnerwala/icpc-book/blob/master/content/numerical/fft.cpp
 * Verification: see FFT
 */

typedef mi T; using poly = vector<T>;
void remz(poly& p) { while (sz(p)&&p.bk==T(0)) p.pop_back(); }
poly rev(poly p) { reverse(all(p)); return p; }
poly shift(poly p, int x) { p.insert(begin(p),x,0); return p; }
poly RSZ(poly p, int x) { p.rsz(x); return p; }
T eval(const poly& p, T x) { // evaluate at point x
	T res = 0; R0F(i,sz(p)) res = x*res+p[i]; 
	return res; }
poly dif(const poly& p) { // differentiate
	poly res; FOR(i,1,sz(p)) res.pb(T(i)*p[i]); 
	return res; }
poly integ(const poly& p) { // integrate
	poly res(sz(p)+1); F0R(i,sz(p)) res[i+1] = p[i]/T(i+1);
	return res; }

poly& operator+=(poly& l, const poly& r) {
	l.rsz(max(sz(l),sz(r))); F0R(i,sz(r)) l[i] += r[i]; 
	return l; }
poly& operator-=(poly& l, const poly& r) {
	l.rsz(max(sz(l),sz(r))); F0R(i,sz(r)) l[i] -= r[i]; 
	return l; }
poly& operator*=(poly& l, const T& r) { trav(t,l) t *= r; 
	return l;	 }
poly& operator/=(poly& l, const T& r) { trav(t,l) t /= r; 
	return l; }
poly operator+(poly l, const poly& r) { return l += r; }
poly operator-(poly l, const poly& r) { return l -= r; }
poly operator-(poly l) { trav(t,l) t *= -1; return l; }
poly operator*(poly l, const T& r) { return l *= r; }
poly operator*(const T& r, const poly& l) { return l*r; }
poly operator/(poly l, const T& r) { return l /= r;	 }
poly operator*(const poly& l, const poly& r) {
	if (!min(sz(l),sz(r))) return {};
	poly x(sz(l)+sz(r)-1); 
	F0R(i,sz(l)) F0R(j,sz(r)) x[i+j] += l[i]*r[j];
	return x;
}
poly& operator*=(poly& l, const poly& r) { return l = l*r; }

pair<poly,poly> quoRem(poly a, poly b) { 
	remz(a); remz(b); assert(sz(b));
	T lst = b.bk, B = T(1)/lst; trav(t,a) t *= B; 
	trav(t,b) t *= B;
	poly q(max(sz(a)-sz(b)+1,0));
	for (int dif; (dif=sz(a)-sz(b)) >= 0; remz(a)) {
		q[dif] = a.bk; F0R(i,sz(b)) a[i+dif] -= q[dif]*b[i]; }
	trav(t,a) t *= lst;
	return {q,a}; // quotient, remainder
}
poly operator/(const poly& a, const poly& b) { return quoRem(a,b).f; }
poly operator%(const poly& a, const poly& b) { return quoRem(a,b).s; }
/**poly a = {1,3,5,8,6,0,0,0,0}, b = {1,5,1};
ps(quoRem(a,b)); a = 2*a, b = 2*b; ps(quoRem(a,b));*/
poly gcd(poly a, poly b) { return b == poly{} ? a : gcd(b,a%b); }
T resultant(poly a, poly b) { // R(A,B)
	// =b_m^n*prod_{j=1}^mA(mu_j)
	// =b_m^na_m^n*prod_{i=1}^nprod_{j=1}^m(mu_j-lambda_i)
	// =(-1)^{mn}a_n^m*prod_{i=1}^nB(lambda_i)
	// =(-1)^{nm}R(B,A)
	// Also, R(A,B)=b_m^{deg(A)-deg(A-CB)}R(A-CB,B)
	int ad = sz(a)-1, bd = sz(b)-1; 
	if (bd <= 0) return bd < 0 ? 0 : pow(b.bk,ad);
    int pw = ad; a = a%b; pw -= (ad = sz(a)-1);
    return resultant(b,a)*pow(b.bk,pw)*T((bd&ad&1)?-1:1);
}

/**
 * Description: Multiply two polynomials. For xor convolution 
 	* don't multiply \texttt{v} by \texttt{roots[ind]}. If
 	* product of sizes is at most a certain threshold (ex. 10000)
 	* then it's faster to multiply directly.
 * Time: O(N\log N)
 * Source: 
 	* KACTL
 	* https://cp-algorithms.com/algebra/fft.html
 	* https://csacademy.com/blog/fast-fourier-transform-and-variations-of-it
 * Verification: 
	* SPOJ polymul, CSA manhattan, CF Perfect Encoding
	* http://codeforces.com/contest/632/problem/E
 */

// #include "../../number-theory (11.1)/Modular Arithmetic/ModInt.h"

void genRoots(vmi& roots) { // REPLACE DEF OF MOD
	int n = sz(roots); mi r = pow(mi(root),(MOD-1)/n);
	roots[0] = 1; FOR(i,1,n) roots[i] = roots[i-1]*r; }
typedef complex<db> cd; typedef vector<cd> vcd;
void genRoots(vcd& roots) { // primitive n-th roots of unity
	int n = sz(roots); db ang = 2*PI/n;
	/// good way to compute these trig functions more quickly?
	F0R(i,n) roots[i] = cd(cos(ang*i),sin(ang*i)); }

int size(int s) { return s > 1 ? 32-__builtin_clz(s-1) : 0; }
template<class T> void fft(vector<T>& a, 
  const vector<T>& rts, bool inv = 0) {
	int n = sz(a);
	for (int i = 1, j = 0; i < n; i++) { 
		int bit = n>>1; for (; j&bit; bit /= 2) j ^= bit;
		j ^= bit; if (i < j) swap(a[i],a[j]);
	} // sort #s from 0 to n-1 by reverse binary
	for (int len = 1; len < n; len *= 2)
		for (int i = 0; i < n; i += 2*len) F0R(j,len) {
			T u = a[i+j], v = a[i+j+len]*rts[n/2/len*j];
			a[i+j] = u+v, a[i+j+len] = u-v;
		}
	if (inv) {
		reverse(1+all(a));
		T i = T(1)/T(n); trav(x,a) x *= i; 
	}
}
template<class T> vector<T> mul(vector<T> a, vector<T> b) {
	if (!min(sz(a),sz(b))) return {};
	int s = sz(a)+sz(b)-1, n = 1<<size(s);
	vector<T> roots(n); genRoots(roots);
	a.rsz(n), fft(a,roots); b.rsz(n), fft(b,roots);
	F0R(i,n) a[i] *= b[i];
	fft(a,roots,1); a.rsz(s); return a;
}

/**
 * Description: multiply two polynomials directly if small, otherwise use FFT
 * Source: KACTL, https://cp-algorithms.com/algebra/fft.html
 */

// #include "Poly.h"
// #include "FFT.h"

bool small(const poly& a, const poly& b) { // multiply directly
	return (ll)sz(a)*sz(b) <= 10000; } 
vmi smart(const vmi& a, const vmi& b) { return mul(a,b); }
vl smart(const vl& a, const vl& b) {
	auto X = mul(vcd(all(a)),vcd(all(b)));
	vl x(sz(X)); F0R(i,sz(X)) x[i] = round(X[i].real());
	return x; }
poly conv(const poly& a, const poly& b) {
	return small(a,b) ? a*b : smart(a,b); } 

/**
 * Description: computes $A^{-1}$ such that $AA^{-1}\equiv 1\pmod{x^n}$.
 	* Newton's method: If you want $F(x)=0$ and $F(Q_k)\equiv 0\pmod{x^a}$
 	* then $Q_{k+1}=Q_k-\frac{F(Q_k)}{F'(Q_k)}\pmod{x^{2a}}$ satisfies
 	* $F(Q_{k+1})\equiv 0 \pmod{x^{2a}}$. Application: if $f(n),g(n)$ are the
 	* \#s of forests and trees on $n$ nodes then 
 	* $\sum_{n=0}^{\infty}f(n)x^n=\exp\left(\sum_{n=1}^{\infty}\frac{g(n)}{n!}\right)$.
 * Time: O(N\log N)
 * Source: CF, http://people.csail.mit.edu/madhu/ST12/scribe/lect06.pdf
 	* https://cp-algorithms.com/algebra/polynomial.html
 * Usage: vmi v={1,5,2,3,4}; ps(exp(2*log(v,9),9)); // squares v
 * Verification: https://codeforces.com/contest/438/problem/E
 	* https://codeforces.com/gym/102028/submission/77687049
 	* https://loj.ac/problem/6703 (MultipointEval)
 */

// #include "PolyConv.h"

poly inv(poly A, int n) { // Q-(1/Q-A)/(-Q^{-2})
	poly B{1/A[0]};
	while (sz(B) < n) { int x = 2*sz(B);
		B = RSZ(2*B-conv(RSZ(A,x),conv(B,B)),x); }
	return RSZ(B,n);
}
poly sqrt(const poly& A, int n) {  // Q-(Q^2-A)/(2Q)
	assert(A[0] == 1); poly B{1};
	while (sz(B) < n) { int x = 2*sz(B);
		B = T(1)/T(2)*RSZ(B+mul(RSZ(A,x),inv(B,x)),x); }
	return RSZ(B,n);
}
pair<poly,poly> divi(const poly& f, const poly& g) { 
	if (sz(f) < sz(g)) return {{},f};
	auto q = mul(inv(rev(g),sz(f)-sz(g)+1),rev(f));
	q = rev(RSZ(q,sz(f)-sz(g)+1));
	auto r = RSZ(f-mul(q,g),sz(g)-1); return {q,r};
}
poly log(poly A, int n) { assert(A[0] == 1); // (ln A)' = A'/A
	return RSZ(integ(conv(dif(A),inv(A,n))),n); }
poly exp(poly A, int n) { // Q-(lnQ-A)/(1/Q)
	assert(A[0] == 0); poly B = {1};
	while (sz(B) < n) { int x = 2*sz(B);
		B = RSZ(B+conv(B,RSZ(A,x)-log(B,x)),x); }
	return RSZ(B,n);
}

void segProd(vector<poly>& stor, poly& v, int ind, int l, int r) { // v -> places to evaluate at
	if (l == r) { stor[ind] = {-v[l],1}; return; }
	int m = (l+r)/2; segProd(stor,v,2*ind,l,m); segProd(stor,v,2*ind+1,m+1,r);
	stor[ind] = conv(stor[2*ind],stor[2*ind+1]);
}
void evalAll(vector<poly>& stor, poly& res, poly v, int ind = 1) {
	v = divi(v,stor[ind]).s;
	if (sz(stor[ind]) == 2) { res.pb(sz(v)?v[0]:0); return; }
	evalAll(stor,res,v,2*ind); evalAll(stor,res,v,2*ind+1);
}
poly multiEval(poly v, poly p) {
	vector<poly> stor(4*sz(p)); segProd(stor,p,1,0,sz(p)-1);
	poly res; evalAll(stor,res,v); return res; }

poly combAll(vector<poly>& stor, poly& dems, int ind, int l, int r) {
	if (l == r) return {dems[l]};
	int m = (l+r)/2;
	poly a = combAll(stor,dems,2*ind,l,m), b = combAll(stor,dems,2*ind+1,m+1,r);
	return conv(a,stor[2*ind+1])+conv(b,stor[2*ind]);
}
poly interpolate(vector<pair<T,T>> v) {
	int n = sz(v); poly x; trav(t,v) x.pb(t.f);
	vector<poly> stor(4*n); segProd(stor,x,1,0,n-1);
	poly dems; evalAll(stor,dems,dif(stor[1]));
	F0R(i,n) dems[i] = v[i].s/dems[i];
	return combAll(stor,dems,1,0,n-1);
}
```
</spoiler>

### Part 1: What do we want to calculate?

The problem reduces to finding $n!$ times the coefficients of $y^1,y^2,\ldots,y^n$ in 
$$
(1-y)[x^n]\frac{1}{(1-x)(1-ye^{(1-y)x})}.
$$
Since we don't care about powers of $y$ greater than $n$, we can expand: 
$$
\frac{1}{(1-ye^{(1-y)x})}=\sum_{t=0}^ny^te^{t(1-y)x}
$$
and 
$$
e^{t(1-y)x}=\frac{\sum_{i=0}^{\infty}x^it^i(1-y)^i}{i!}.
$$
We can naively implement this as follows. This gets MLE on F1, but at least it gives the correct results.


<spoiler title="Slow Solution">

```cpp
int n;
poly py[5005]; // powers of 1-y
 
vector<poly> po(int t) { // y^t * e^{t*(1-y)*x}
	vector<poly> res(n+1);
	F0R(i,n+1) res[i] = RSZ(shift(pow(mi(t),i)*py[i]*ifac[i],t),n+1);
	return res;
}
 
poly brute() {
	py[0] = {1}; FOR(i,1,n+1) py[i] = poly{1,-1}*py[i-1];
	vector<poly> ans(n+1); // store polynomial in y for each degree of x
	F0R(i,n+1) {
		auto a = po(i); // dbg("OOPS",i,a);
		F0R(j,n+1) ans[j] += a[j];
	}
	poly res; F0R(i,n+1) res += ans[i];
	res = RSZ(res*poly{1,-1},n+1);
	FOR(i,1,n+1) res[i] *= fac[n];
	return vmi(1+all(res));
}
 
int main() {
	re(n); genFac(n+10);
	poly res = brute();
	FOR(i,1,n+1) {
		res[i] *= fac[n];
		pr(res[i],' ');
	}
	ps();
}

```

</spoiler>

### Part 2: Setting up a function to compute the same thing more quickly

Now we'll make a function `smart()` that does the same thing as `brute()` (but quickly). We need to compute

$$
(1-y)^{n+2}[z^n]\frac{1}{(1-y-z)(1-ye^z)}
$$

It suffices to compute
$$
[z^n]\frac{1}{(1-y-z)(1-ye^z)}=[z^n]\left(
\frac{1}{(1-e^z(1-z))(1-y-z)}-\frac{e^z}{(1-e^z(1-z))(1-ye^z)}
\right).
$$

We'll let `frac1()` compute the polynomial in $y$ corresponding to 

$$
[z^n]n\cdot \frac{1}{1-e^z(1-z))(1-y-z)}
$$ 

and `frac2()` compute the polynomial in $y$ corresponding to 

$$
[z^n]n\cdot \frac{e^z}{(1-e^z(1-z))(1-ye^z)}.
$$ 

The reasons for the factors of $n$ will become apparent later on.

```cpp
poly smart() {
	poly res = frac1()-frac2(); res /= n;
	poly py; // (1-y)^{n+2}
	F0R(i,n+3) {
		py.pb(comb(n+2,i));
		if (i&1) py.bk *= -1;
	}
	return RSZ(conv(res,py),n+1); // multiply res by (1-y)^{n+1}
}
```

### Part 3: Finding $[x^n]\frac{P(x)}{1-(x+1)y}$

This is equal to
$$
[x^n]P(x)\sum_{i\ge 0}(x+1)^iy^i.
$$
Letting $Q(x)=\sum_{i\le n}p_ix^{n-i}$, we have
$$
[x^ny^k]P(x)\sum_{i\ge 0}(x+1)^iy^i=\sum_{i=0}^{\infty}q_i\binom{k}{i}.
$$

```cpp
poly coef1(poly p, int n) {
	p.rsz(n+1); reverse(all(p));
	poly difs; F0R(i,n+1) difs.pb(ifac[i]);
	F0R(i,n+1) p[i] *= ifac[i];
	p = conv(p,difs);
	F0R(i,n+1) p[i] *= fac[i];
	return RSZ(p,n+1);
}
```

### Part 4: Finding $[x^n]\frac{P(x)}{(1-(x+1)y)^2}$

This is equal to
$$
[x^n]P(x)\sum_{i\ge 0}(i+1)(x+1)^iy^i.
$$
We get the same expression as above except the coefficient of $y^i$ is multiplied by $i+1$.

```cpp
poly coef2(poly p, int n) {
	poly q = coef1(p,n);
	F0R(i,n+1) q[i] *= i+1;
	return q;
}
```

### Part 5: First Fraction

Letting $g(z)=\frac{1}{(1-z)(1-e^z(1-z))}$, we want to compute $[z^n]\frac{g(z)}{1-\frac{y}{1-z}}$.

Let 
$$
B(z)=\frac{1}{1-z}-1, B^{-1}(z)=\frac{z}{z+1}.
$$
Then
$$
C(x)=g(B^{-1}(x))=\frac{1}{\frac{1}{1+x}\cdot (1-\frac{e^{x/(1+x)}}{1+x})}=\frac{(1+x)^2}{1+x-e^{x/(x+1)}}.
$$
$$
D(x)=\left(\frac{1}{1+x}\right)^{-n}=(1+x)^n
$$

We want $\frac{1}{n}$ times the following:
$$
[x^{n-1}]\left(\frac{C'(x)D(x)}{1-(x+1)y}+\frac{C(x)D(x)y}{(1-(x+1)y)^2}\right).
$$
Note that $x^2$ divides the denominator of $C(x)$ so we need to be careful about how we manipulate it.

```cpp
poly deriv(poly a, int b) { // 0-th element of vector corresponds to x^{b}
	assert(b < 0 && a[0] != 0);
	poly ans; F0R(i,sz(a)) ans.pb((i+b)*a[i]);
	return ans;
}

// [z^n]1/(1-e^z(1-z))/(1-y-z)
poly frac1() {
	poly C, D;
	{
		poly ex{0}; FOR(i,1,n+5) ex.pb(i&1?1:-1);
		poly dem = poly{1,1}-exp(ex,n+5);
		assert(dem[0] == 0 && dem[1] == 0 && dem[2] != 0);
		dem = poly(2+all(dem));
		dem = inv(dem,n+5);
		C = poly{1,1}*poly{1,1}*dem;
	}
	{
		F0R(i,n+1) D.pb(comb(n,i));
	}
	poly C2 = deriv(C,-2);
	poly X = conv(C2,D); // lowest deg term is x^{-3}
	poly Y = conv(C,D); // lowest deg term is x^{-2}
	return coef1(X,n+2)+shift(coef2(Y,n+1),1);
}
```

### Part 6: Second Fraction

Let $f(z)=\frac{e^z}{1-e^z(1-z)}$. We want to compute $[z^n]\frac{f(z)}{1-ye^z}$.

Let
$$
A(z)=e^z-1, A^{-1}(z)=\ln (z+1).
$$
Then by Lagrange Inversion (??)
$$
[z^n]\frac{f(z)}{1-(A(z)+1)y}=[z^n]H(G(z))=\frac{1}{n}x^{-1}H'(x)\frac{1}{F(x)^n}
$$
$$
=\frac{1}{n}[x^{n-1}]\left(\frac{f(A^{-1}(x))}{1-(x+1)y}\right)'  \frac{1}{\left(\frac{A^{-1}(x)}{x}\right)^n}.
$$
Ok so let 
$$
C(x)=f(A^{-1}(x))=\frac{1+x}{1-(1+x)(1-\ln(x+1))}
$$ 
and 
$$
D(x)=\frac{1}{\left(\frac{A^{-1}(x)}{x}\right)^n}=\left(\frac{\ln(x+1)}{x}\right)^{-n}.
$$
and we want $\frac{1}{n}$ times the following:
$$
[x^{n-1}]\left(\frac{C'(x)D(x)}{1-(x+1)y}+\frac{C(x)D(x)y}{(1-(x+1)y)^2}\right).
$$
Note that $x^2$ divides the denominator of $C(x)$ so we need to be careful about how we manipulate it.

```cpp
poly po(poly a, int b) {
	assert(a[0] == 1);
	poly x = log(a,n+5);
	return exp(b*x,n+5);
}

// [z^n]e^z/(1-e^z(1-z))(1-ye^z)
poly frac2() {
	poly LN; // x-x^2/2+x^3/3-x^4/4+...
	LN.pb(0);
	FOR(i,1,n+5) {
		LN.pb(invs[i]);
		if (i%2 == 0) LN.bk *= -1;
	}
	poly C, D; 
	{ // calculating C*x^2
		poly oops = poly{1}-LN;
		poly dem = poly{1}-poly{1,1}*oops;
		assert(dem[0] == 0 && dem[1] == 0 && dem[2] != 0);
		dem = poly(2+all(dem));
		dem = inv(dem,n+5);
		C = poly{1,1}*dem;
	}
	{
		poly oops = LN; oops.erase(begin(oops));
		D = po(oops,-n);
	}
	poly C2 = deriv(C,-2);
	poly X = conv(C2,D); // x^{-3}
	poly Y = conv(C,D); // x^{-2}
	return coef1(X,n+2)+shift(coef2(Y,n+1),1);
}
```

### Part 7: Summary

All in all, this solution (barely) passes the time limit. :|
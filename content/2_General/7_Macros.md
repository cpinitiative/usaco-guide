---
slug: /general/macros
title: C++ Macros
author: Benjamin Qi
order: 7
---

## Introduction

 - [GeeksForGeeks](https://www.geeksforgeeks.org/cc-preprocessors/#:~:text=Macros%3A%20Macros%20are%20a%20piece,used%20to%20define%20a%20macro.)
 - [GCC Online Docs](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)
 - CPH 1.4

## [My Template](https://github.com/bqi343/USACO/blob/master/Implementations/content/contest/template.cpp)

Some comments about specific parts:

### Pairs

```cpp
typedef pair<int,int> pi;

#define mp make_pair
#define f first
#define s second
```

Pretty annoying to keep typing `first` and `second` (especially if you have nested pairs ...)

### Vectors

```cpp
typedef vector<int> vi; 

#define sz(x) (int)x.size()
#define all(x) begin(x), end(x)
```

It's generally a good idea to convert a size to a signed integer before doing anything with it to avoid cases like the following.

```cpp
vi x; 
cout << x.size()-1 << "\n"; // 18446744073709551615
cout << sz(x)-1 << "\n"; // -1
```

`all(v)` makes sorting part or all of a vector a bit shorter.

```cpp
vi v = {2,4,1,5,3};
sort(1+all(v)); // {2,1,3,4,5}
sort(all(v)); // {1,2,3,4,5}
```

### Constants

```cpp
const int MOD = 1e9+7; // 998244353;
const int MX = 2e5+5;
const ll INF = 1e18;
const ld PI = acos((ld)-1);
```

$10^9+7$ is a prime that appears quite frequently in programming contests. Interestingly, ```(MOD-1)/2``` is also prime. On the other hand, $998244353-1$ is divisible by $2^{23}$, which is useful for [NTT](https://en.wikipedia.org/wiki/Discrete_Fourier_transform_(general)#Number-theoretic_transform).

Most USACO problems satisfy $N\le 2\cdot 10^5$.

### RNG

```cpp
mt19937 rng((uint32_t)chrono::steady_clock::now().time_since_epoch().count());
```

See [neal's blog](https://codeforces.com/blog/entry/61587) about why `rand()` is bad (use `rng()` instead).

### ckmin

```cpp
template<class T> bool ckmin(T& a, const T& b) { 
	return b < a ? a = b, 1 : 0; }
template<class T> bool ckmax(T& a, const T& b) {
	return a < b ? a = b, 1 : 0; }
```

See [negCyc](https://github.com/bqi343/USACO/blob/master/Implementations/content/graphs%20(12)/Basics/NegativeCycle%20(7.3).h) for an example of usage.
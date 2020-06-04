---
slug: /plat/slope
title: "Slope Trick"
author: Benjamin Qi
order: 9
---

**Slope trick** refers to manipulating piecewise linear convex functions. Includes a simple solution to [Landscaping](http://www.usaco.org/index.php?page=viewproblem2&cpid=650).

<!-- END DESCRIPTION -->

## Tutorials

Links:

 * [zscoder](https://codeforces.com/blog/entry/47821)
 * [Kuroni](https://codeforces.com/blog/entry/77298)

From the latter link (modified):

> Slope trick is a way to represent a function that satisfies the following conditions:
> 
>  * It can be divided into multiple sections, where each section is a linear function (usually) with an integer slope.
>  * It is a convex/concave function. In other words, the slope of each section is non-decreasing or non-increasing when scanning the function from left to right.

It's generally applicable as a DP optimization. Usually you can come up with a slower DP (ex. $O(N^2)$) first and then optimize it to $O(N\log N)$ with slope trick.

This document assumes some familiarity with at least one of the links above (and provides a few more examples).

## A Simple Example

[CF Buy Low Sell High](https://codeforces.com/contest/866/problem/D)

**Slow Solution**: Let $dp[i][j]$ denote the maximum amount of money you can have on day $i$ if you have exactly $j$ shares of stock on that day. The final answer will be $dp[N][0]$. This easily leads to an $O(N^2)$ DP. 

Of course, we never used the fact that the DP is concave down! Specifically, let $dif[i][j]=dp[i][j]-dp[i][j+1]\ge 0$. Then $dif[i][j]\le dif[i][j+1]$ for all $j\ge 0$ (ignoring the case when we get $dp$ values of $-\infty$).

We'll process the shares in order. Suppose that on the current day shares are worth $p$. We can replace (buy or sell a share) in the statement with (buy, then sell between 0 and 2 shares).

 * If we currently have $j$ shares and overall balance $b$, then after buying, $j$ increases by one and $b$ decreases by $p$. The differences between every two consecutive elements do not change.
 * If we choose to buy a share, this is equivalent to setting $dp[i][j]=\max(dp[i][j],dp[i][j+1]+p)$ for all $j$. By the concavity condition, $dp[i][j]=dp[i][j+1]+p$ will hold for all $j$ less than a certain threshold while $dp[i][j+1]$ will hold for all others. So this is equivalent to inserting $p$ into the list of differences while maintaining the condition that the differences are in sorted order.
 * So we add $p$ to the list of differences two times. After that, we should pop the smallest difference in the list because we can't end up with a negative amount of shares.

(insert diagram)

(insert example)

The implementation is quite simple; simply maintain a priority queue that allows you to pop the minimum element.

<details>

<summary>My Solution</summary>

```cpp
#include <bits/stdc++.h>
using namespace std;
 
int main() {
	int N; cin >> N;
	priority_queue<int,vector<int>,greater<int>> pq;
	long long ans = 0;
	for (int i = 0; i < N; ++i) {
		int p; cin >> p; ans -= p;
		pq.push(p); pq.push(p); pq.pop();
	}
	for (int i = 0; i < N; ++i) {
		ans += pq.top();
		pq.pop();
	}
	cout << ans << "\n";
}
```
</details>

## [Potatoes](https://oj.uz/problem/view/LMIO19_bulves)

Let $dif_i=a_i-b_i$. Defining $d_j=\sum_{i=1}^jdif_i$, our goal is to move around the potatoes such that $d_0,d_1,\ldots,d_N$ is a non-decreasing sequence. Moving a potato is equivalent to changing exactly one of the $d_i$ (aside from $d_0,d_N$) by one.

**Slow Solution:** Let $dp[i][j]$ be the minimum cost to determine $d_0,d_1,\ldots,d_i$ such that $d_i\le j$ for each $0\le j\le d_N$. This gives a $O(N\cdot d_N)$ solution.

As before, this DP is concave up for a fixed $i$! Given a piecewise linear function $DP_x$, we need to support the following operations.

 * Add $|x-k|$ to the function for some $k$
 * Set $DP_x=\min(DP_x,DP_{x-1})$ for all $x$

Again, these can be done with a priority queue in $O(N\log N)$ time!

<details>

<summary>My Solution</summary>

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;

int N;
ll fst = 0; // value of DP function at 0
priority_queue<ll> points; // points where DP function changes slope

int main() {
	cin >> N;
	vector<ll> dif(N+1);
	for (int i = 1; i <= N; ++i) {
		int a,b; cin >> a >> b;
		dif[i] = a-b+dif[i-1];
	}
	assert(dif[N] >= 0);
	for (int i = 1; i < N; ++i) {
		if (dif[i] < 0) fst -= dif[i], dif[i] = 0;
		fst += dif[i];
		points.push(dif[i]); points.push(dif[i]);
		points.pop();
	}
	while (points.size()) {
		ll a = points.top(); points.pop();
		fst -= min(a,dif[N]);
	}
	cout << fst << "\n";
}

```
</details>

## [Landscaping](http://www.usaco.org/index.php?page=viewproblem2&cpid=650)

This is quite similar to the previous task, so it's easy to guess that slope trick is applicable. 

Again, let's first come up with a slow DP. Let $dp[i][j]$ equal the number of ways to move dirt around the first $i$ flowerbeds such that the first $i-1$ flowerbeds all have the correct amount of dirt while the $i$-th flowerbed has $j$ extra units of dirt (or lacks $-j$ units of dirt if $j$ is negative). The answer will be $dp[N][0]$.

This DP is concave up for any fixed $i$. To get $dp[i+1]$ from $dp[i]$ we must be able to support the following operations.

 * Shift the DP curve $A_i$ units to the right.
 * Shift the DP curve $B_i$ units to the left.
 * Add $Z\cdot |j|$ to $DP[j]$ for all $j$.
 * Set $DP[j] = \min(DP[j],DP[j-1]+X)$ and $DP[j] = \min(DP[j],DP[j+1]+Y)$ for all $j$. 

As before, it helps to look at the differences $dif[j]=DP[j+1]-dif[j]$ instead. Then the last operation is equivalent to the following:

 * For all $j\ge 0$, we set $dif[j] = \min(dif[j]+Z,X)$
 * For all $j<0$, we set $dif[j] = \max(dif[j]-Z,-Y)$. 

If we maintain separate deques for $dif$ depending on whether $j\ge 0$ or $j<0$ and update all of the differences in the deques "lazily" then we can do this in $O(\sum A_i+\sum B_i)$ time. 

Bonus: Solve this problem when $\sum A_i+\sum B_i$ is not so small.

<details>

<summary>My Solution</summary>

```cpp
#include <bits/stdc++.h>

using namespace std;

int N,X,Y,Z;
int difl, difr;
deque<int> L, R;
long long ans;

void rig() { // shift right A
	if (L.size() == 0) L.push_back(-Y-difl);
	int t = L.back()+difl; L.pop_back();
	t = max(t,-Y); ans -= t;
	R.push_front(t-difr);
}

void lef() { // shift left B
	if (R.size() == 0) R.push_front(X-difr);
	int t = R.front()+difr; R.pop_front();
	t = min(t,X); ans += t;
	L.push_back(t-difl);
}

int main() {
	freopen("landscape.in","r",stdin);
	freopen("landscape.out","w",stdout);
	cin >> N >> X >> Y >> Z; 
	for (int i = 0; i < N; ++i) {
		int A,B; cin >> A >> B; 
		for (int j = 0; j < A; ++j) rig(); // or we can just do |A-B| shifts in one direction
		for (int j = 0; j < B; ++j) lef(); 
		difl -= Z, difr += Z; // adjust slopes differently for left and right of j=0
	}
	cout << ans << "\n";
}
```
</details>

## Problems

  - [Moving Haybales (USACO Camp)](https://probgate.org/viewproblem.php?pid=247)
  - [Wall](https://atcoder.jp/contests/kupc2016/tasks/kupc2016_h)
    - same as "Potatoes"
  - [Stock Trading (USACO Camp)](https://probgate.org/viewproblem.php?pid=531&cid=81)
    - extension of "Buy Low Sell High"
  - [Bookface](https://codeforces.com/group/ZFgXbZSjvp/contest/274852/problem/C)
  - [CCDSAP Exam](https://www.codechef.com/problems/CCDSAP)
  - [Farm of Monsters](https://codeforces.com/gym/102538/problem/F)
  - [Moving Walkways](https://codeforces.com/contest/1209/problem/H)
  - [April Fools' Problem](https://codeforces.com/contest/802/problem/O)
  - [Conquer the World](https://icpc.kattis.com/problems/conquertheworld)
    - note: ICPC world finals, 0 solves in contest
    - "Potatoes" on tree!!
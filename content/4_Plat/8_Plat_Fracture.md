---
slug: /plat/fracture
title: "Fracturing Search"
author: Benjamin Qi
order: 8
---

A simple solution to [Robotic Cow Herd](http://www.usaco.org/index.php?page=viewproblem2&cpid=674) that generalizes.

<!-- END DESCRIPTION -->

## General Outline

### Problem

Suppose that you have a rooted tree where each vertex $i$ has a value $v_i$ and parent $p_i$ (if $i$ is not the root). Given that $v_{p_i} \le v_i$ and each vertex has at most $D$ children, find the $K$ smallest values in the tree.

### Solution

Use a priority queue. At each step, extract the vertex with smallest value from the priority queue and insert all of its children into the queue. Since we insert $O(KD)$ vertices in the priority queue, this solution takes $O(KD\log (KD))$ time.

The above approach can be generalized. Suppose that you want to find the $K$ objects with the smallest values in some (potentially very large) search space. Start with the "root," namely the object with the smallest value. Every other object in the space should have a single "parent" whose value is not greater. Furthermore, the number of children of each object should be reasonably bounded (i.e. $D$ is small).

## Finding K-th Smallest Spanning Tree (USACO Camp 2018)

### Problem

Given a graph with $N\le 50$ vertices and at most $\binom{N}{2}$ edges, find the $K$-th ($K\le 10^4$) smallest spanning tree.

### Solution

For this problem, the objects are spanning trees and the "root" is the minimum spanning tree. If we can somehow ensure that each object has at most $N$ "children" then we only need to consider $O(NK)$ spanning trees in order to find the $K$-th smallest. Essentially, we start with a search space consisting of all possible spanning trees and then we "fracture" it based on the children of the root.

[Video (by tehqin)](https://www.youtube.com/watch?v=EG_HfFMM0lE)

<details>

<summary>My Solution</summary>

This is equivalent to the solution given in the video. The runtime is $O(NMK\alpha(N))$ for storing the information about each spanning tree and $O(NK\log (NK))$ for the priority queue.

```cpp
#include <bits/stdc++.h>
using namespace std;
typedef bitset<1225> B;
typedef vector<int> vi;

struct DSU { // for Kruskal's
	vi e; void init(int n) { e = vi(n,-1); }
	int get(int x) { return e[x] < 0 ? x : e[x] = get(e[x]); } 
	bool sameSet(int a, int b) { return get(a) == get(b); }
	int size(int x) { return -e[get(x)]; }
	bool unite(int x, int y) { // union by size
		x = get(x), y = get(y); if (x == y) return 0;
		if (e[x] > e[y]) swap(x,y);
		e[x] += e[y]; e[y] = x; return 1;
	}
};

int N,M,K;
vector<array<int,3>> ed;

struct Partition {
	B ban; vi span; int wei = 0, fix = 0; // "fix" smallest edges in spanning tree
	Partition(B _ban, int _fix) : ban(_ban), fix(_fix) {
		DSU D; D.init(N); 
		for (int i = 0; i < M; ++i) if (!ban[i] && D.unite(ed[i][1],ed[i][2]))
			span.push_back(i), wei += ed[i][0]; // run Kruskal's ignoring banned edges
	}
};
bool operator<(const Partition& l, const Partition& r) { return l.wei > r.wei; } // for pq

int main() { 
	cin >> N >> M >> K;
	for (int i = 0; i < M; ++i) {
		int a,b,c; cin >> a >> b >> c;
		ed.push_back({c,a-1,b-1});
	}
	sort(begin(ed),end(ed));
	priority_queue<Partition> pq;
	pq.push({B(),0}); // start with MST
	for (int i = 1; i <= K; ++i) {
		if (!pq.size()) { cout << "-1\n"; exit(0); }
		auto a = pq.top(); pq.pop();
		assert(a.span.size() == N-1);
		if (i == K) { cout << a.wei << "\n"; exit(0); } // print K-th smallest
		while (a.fix < a.span.size()) { // insert O(N) children
			B t = a.ban; t[a.span[a.fix]] = 1;
			auto A = Partition(t,a.fix);
			if (A.span.size() == N-1) pq.push(A);
			a.fix ++;
		}
	}
}
```

</details>


## [USACO Robotic Cow Herd](http://www.usaco.org/index.php?page=viewproblem2&cpid=674)

The first solution in the analysis contains an extra log factor, while the second is overly complicated. Thankfully, fracturing search allows us to construct the $K$ smallest robots in $O(K\log K)$ time. As before, we want each robot to have a bounded number ($D$) of "child" robots, where each robot aside from the root has exactly one parent robot and the cost of the parent is always at most the cost of the child. In fact, we can let $D=3$.

As with the analysis, first sort the controllers of each type by cost, and then add the controller of minimum cost for each position to the answer (and subtract that cost from each controller at that position). Then sort the positions by the cost of the second-minimum controller at that position.

First start with the robot of minimum cost. Then the robot with second-minimum cost can be formed by just choosing the second-minimum controller for the first position. After this, we have a few options:

  * We can choose the third-minimum controller for the first position.
  * We can discard the second-minimum controller for the first position and select the second-minimum controller for the second position (and never again change the controller selected for the first position).
  * We can keep the second-minimum controller for the first position and select the second-minimum controller for the second position (and never again change the controller selected for the first position).

Note that none of these options result in a robot of lower cost since we assumed that we sorted the positions by second-minimum controller. In general, suppose that we have a robot and are currently selecting the $j$-th cheapest controller for the $i$-th position. Then the transitions are as follows:

 * Select the $j+1$-th cheapest controller for the $i$-th position instead.
 * If $j=2$, select the $1$-st cheapest controller for the $i$-th position instead and also select the $2$-nd cheapest controller for the $i+1$-st.
 * Keep the $j$-th cheapest controller for the $i$-th position and also select the $2$-nd cheapest controller for the $i+1$-st.

Since there exists exactly one way to get from the cheapest robot to every possible robot, we can just use a priority queue.

<details>

<summary>My Solution</summary>

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<int,int> pi;
typedef vector<int> vi;
typedef pair<ll,pi> T;

#define f first
#define s second

int N,K;
ll tot; // sum of cheapest
vector<vi> v;
priority_queue<T,vector<T>,greater<T>> pq;

int main() {
	ios_base::sync_with_stdio(0); cin.tie(0);
	freopen("roboherd.in","r",stdin);
	freopen("roboherd.out","w",stdout);
	cin >> N >> K;
	for (int i = 0; i < N; ++i) {
		int m; cin >> m; 
		vi p(m); for (int& x: p) cin >> x; 
		sort(begin(p),end(p));
		tot += p[0]; for (int j = m-1; j >= 0; --j) p[j] -= p[0];
		if (p.size() > 1) v.push_back(p);
	}
	sort(begin(v),end(v)); // sort by second-cheapest
	pq.push({0,{0,0}}); 
	ll ans = 0;
	for (int i = 0; i < K; ++i) {
		auto a = pq.top(); pq.pop();
		ans += tot+a.f; int ind = a.s.f, pos = a.s.s;
		if (ind+1 < v.size()) {
			if (pos == 1) pq.push({a.f-v[ind][1]+v[ind+1][1],{ind+1,1}});
			if (pos) pq.push({a.f+v[ind+1][1],{ind+1,1}});
		}
		if (pos+1 < v[ind].size()) 
			pq.push({a.f+v[ind][pos+1]-v[ind][pos],{ind,pos+1}});
	}
	cout << ans << "\n";
}
```

</details>

## Other Problems

 * [Baltic OI 2019 - Olympiads](https://boi2019.eio.ee/tasks/)
 * [CCO 20 Shopping Plans](https://dmoj.ca/problem/cco20p6)
   * Generalization of Robotic Cow Herd
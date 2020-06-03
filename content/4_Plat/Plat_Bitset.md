# Platinum - Bitset

Author: Benjamin Qi

## Tutorial

tl;dr some operations are 32x-64x faster compared to a boolean array

 - [Cpp Reference](http://www.cplusplus.com/reference/bitset/bitset/)
 - [Errichto Pt 2](https://codeforces.com/blog/entry/73558)

## Applications

### [Cowpatibility (Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=862)

Label the cows from $0\ldots N-1$. For two cows `x` and `y` set `adj[x][y]=1` if they share a common flavor. Then the number of pairs of cows that are compatible (counting each pair where `x` and `y` are distinct twice) is equal to the sum of `adj[x].count()` over all `x`. It remains to compute `adj[x]` for all `x`.

Unfortunately, storing $N$ bitsets each with $N$ bits takes up $50000^2/32\cdot 4=312.5\cdot 10^6$ bytes of memory, which is too much. We can reduce the memory usage by half in exchange for a slight increase in time by first computing the adjacency bitsets for all `x` satisfying `0<=x<N/2`, and then for all `x` satisfying `N/2<=x<N` afterwards. 

First, we read in all of the flavors.

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef bitset<50000> B;
const int HALF = 25000;

int N; 
B adj[HALF];
vector<int> flav[1000001];
ll ans;

void input() {
	ios_base::sync_with_stdio(0); cin.tie(0);
	freopen("cowpatibility.in","r",stdin);
	freopen("cowpatibility.out","w",stdout);
	cin >> N;
	for (int i = 0; i < N; ++i) 
		for (int j = 0; j < 5; ++j) {
			int x; cin >> x;
			flav[x].push_back(i);
		}
}
```

Then for each flavor, we can look at all pairs of cows that share that flavor and update the adjacency lists (for those `x` satisfying `x<HALF`).

```cpp
int main() {
	input();
	for (int i = 1; i <= 1000000; ++i) 
		for (int x: flav[i]) if (x < HALF) for (int y: flav[i]) adj[x][y] = 1;
	for (int i = 0; i < HALF; ++i) ans += adj[i].count();
}
```

`adj[i].count()` runs quickly enough since its runtime is divided by the bitset constant. However, looping over all cows in `flav[i]` is too slow if say, `flav[i]` contains all cows. Then the nested loop could take $\Theta(N^2)$ time! Of course, we can instead write the nested loop in a way that takes advantage of fast bitset operations once again.

```cpp
for (int i = 1; i <= 1000000; ++i) if (flav[i].size() > 0) {
	B b; for (int x: flav[i]) b[x] = 1;
	for (int x: flav[i]) if (x < HALF) adj[x] |= b;
}
```

The full main function is as follows:

```cpp
int main() {
	input();
	for (int i = 1; i <= 1000000; ++i) if (flav[i].size() > 0) {
		B b; for (int x: flav[i]) b[x] = 1;
		for (int x: flav[i]) if (x < HALF) adj[x] |= b;
	}
	for (int i = 0; i < HALF; ++i) ans += adj[i].count();
	for (int i = 0; i < HALF; ++i) adj[i].reset();
	for (int i = 1; i <= 1000000; ++i) if (flav[i].size() > 0) {
		B b; for (int x: flav[i]) b[x] = 1;
		for (int x: flav[i]) if (x >= HALF) adj[x-HALF] |= b;
	}
	for (int i = 0; i < HALF; ++i) ans += adj[i].count();
	cout << ((ll)N*N-ans)/2 << "\n";
}
```

### [Lots of Triangles](http://www.usaco.org/index.php?page=viewproblem2&cpid=672)

First, we read in the input data. `cross(a,b,c)` is positive iff `c` lies to the left of the line from `a` to `b`.

```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll,ll> P;

#define f first
#define s second

ll cross(P a, P b, P c) {
	b.f -= a.f, b.s -= a.s;
	c.f -= a.f, c.s -= a.s;
	return b.f*c.s-b.s*c.f;
}

vector<P> v;
int N;

void input() {
	ios_base::sync_with_stdio(0); cin.tie(0);
	freopen("triangles.in","r",stdin);
	freopen("triangles.out","w",stdout);
	cin >> N; v.resize(N); 
	for (P& p: v) cin >> p.f >> p.s;
}
```

There are $O(N^3)$ possible lots. Trying all possible lots and counting the number of trees that lie within each in $O(N)$ for a total time complexity of $O(N^4)$ should solve somewhere between 2 and 5 test cases. Given a triangle `t[0], t[1], t[2]` with positive area, tree `x` lies within it iff `x` is to the left of each of sides `(t[0],t[1])`,` (t[1],t[2])`, and `(t[2],t[0])`.

```cpp
int main() {
	input();
	vector<int> res(N-2);
	for (int i = 0; i < N; ++i) 
		for (int j = i+1; j < N; ++j) 
			for (int k = j+1; k < N; ++k) {
				vector<int> t = {i,j,k};
				if (cross(v[t[0]],v[t[1]],v[t[2]]) < 0) swap(t[1],t[2]);
				int cnt = 0;
				for (int x = 0; x < N; ++x) {
					if (cross(v[t[0]],v[t[1]],v[x]) <= 0) continue;
					if (cross(v[t[1]],v[t[2]],v[x]) <= 0) continue;
					if (cross(v[t[2]],v[t[0]],v[x]) <= 0) continue;
					cnt ++;
				}
				res[cnt] ++;
			}
	for (int i = 0; i < N-2; ++i) cout << res[i] << "\n";
}
```

The analysis describes how to count the number of trees within a lot in $O(1)$, which is sufficient to solve the problem. However, $O(N)$ is actually sufficient as long as we divide by the bitset constant. Let `b[i][j][k]=1` if `k` lies to the left of side `(i,j)`. Then `x` lies within triangle `(t[0],t[1],t[2])` as long as `b[t[0]][t[1]][x]=b[t[1]][t[2]][x]=b[t[2]][t[0]][x]=1`. We can count the number of `x` such that this holds true by taking the bitwise AND of the bitsets for all three sides and then counting the number of bits in the result.

```cpp
bitset<300> b[300][300];

int main() {
	input();
	for (int i = 0; i < N; ++i) 
		for (int j = 0; j < N; ++j) if (j != i) 
			for (int k = 0; k < N; ++k) if (cross(v[i],v[j],v[k]) > 0) 
				b[i][j][k] = 1;
	vector<int> res(N-2);
	for (int i = 0; i < N; ++i) 
		for (int j = i+1; j < N; ++j) 
			for (int k = j+1; k < N; ++k) {
				vector<int> t = {i,j,k};
				if (cross(v[t[0]],v[t[1]],v[t[2]]) < 0) swap(t[1],t[2]);
				auto z = b[t[0]][t[1]]&b[t[1]][t[2]]&b[t[2]][t[0]];
				res[z.count()] ++;
			}
	for (int i = 0; i < N-2; ++i) cout << res[i] << "\n";
}
```

### [Equilateral Triangles](http://www.usaco.org/index.php?page=viewproblem2&cpid=1021)

Again, the intended solution runs in $O(N^3)$. Of course, it is still possible to pass $O(N^4)$ solutions with bitset! See the analysis [here](http://www.usaco.org/current/data/sol_triangles_platinum_feb20.html).

### Other Applications

Using operations such as `_Find_first()` and `_Find_next()` mentioned in Errichto's blog above, you can speed up the following:

 * BFSing through a dense graph with $N$ vertices in $O(N^2)$
 * bipartite matching in $O(N^3)$

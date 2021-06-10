---
id: poi-18-stone
source: POI 2018
title: Pionek (stone)
author: Albert Ye
---

## Solution
This question can be solved through radial sweepline. Therefore, we sort our list of vectors by angle from the horizontal counterclockwise. This step comprises the bulk of the process, at $O(n \log n)$.

We will now radially sweep from left to right. Note that from our current point, we only should search counterclockwise when adding vectors to prevent overcounting. If we searched both counterclockwise and clockwise, each orientation would be counted multiple times: Let us have two vectors $u$ and $v$ such that $u$ is before $v$ in the list. Then, if we searched counterclockwise, then searching from $u$ would detect $v$, and if we searched clockwise, then searching from $v$ would detect $u$. We do not want both of these events to occur, so we should only search in one direction. This turns the question into a sweepline problem, and we will be assuming that we are searching counterclockwise.

Also note that giving a vector $v$, only adding vectors with an angle difference of less than $180^\circ$ from $v$ can increase the total distance of the vector. Therefore, within this range, it is optimal to select all vectors between $v$ and the vector 180 degrees counterclockwise of $v$ when calculating the largest possible distance for such a vector.

Since we only need intervals, this question is this solvable by using two pointers on the list and calculating the vector at each step. 

## Implementation
<LanguageSection>
<CPPSection>

```cpp
#include <bits/stdc++.h>

using namespace std;
using ll = long long;
using pii = pair<int, int>;
#define f first
#define s second

const int MAXN = 200005;
const double PI = 3.14159265;

int n;
// so using this as a separate pii array and double array led to
// a segmentation fault, but putting them together in a struct made
// it work.
struct abc
{
	pii vec;
	double val;
} k[MAXN*2];

bool comp(abc a, abc b)
{
	return a.val < b.val;
}

int main()
{
	ios_base::sync_with_stdio(0);
	cin.tie(NULL);
	cout.tie(NULL);
	cin >> n;
	for(int i = 0; i < n; i++)
	{
		int a, b; cin >> a >> b;
		k[i].vec = {a, b};
		k[i].val = atan2(b, a);
	}
	sort(k, k+n, comp);
	int j = 0;
	// given a point i, only rotating up to 180 degrees from i will actually
	// contribute in any way to making it farther. we can include anything and everything up to then
	ll sx = 0, sy = 0, ans = 0;
	for(int i = 0; i < n; i++)
	{
		while(j < i+n && k[j].val - k[i].val < PI)
		{
			sx += k[j].vec.f;
			sy += k[j].vec.s;
			ans = max(ans, sx*sx+sy*sy);
			++j;
		}
		sx -= k[i].vec.f;
		sy -= k[i].vec.s;
		ans = max(ans, sx*sx+sy*sy);
		k[i+n] = k[i];
		k[i+n].val = k[i].val+2.0*PI; // add another wrap around with the vectors
	}
	cout << ans << endl;
}
```
</CPPSection>
</LanguageSection>
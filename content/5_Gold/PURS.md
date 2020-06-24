---
id: PURS
title: "Point Update Range Sum"
author: Benjamin Qi
prerequisites: 
 - Silver - Prefix Sums
description: Binary Indexed Trees & Indexed Sets
---

 - [yosupo - Point Add Range Sum](https://judge.yosupo.jp/problem/point_add_range_sum)

## Binary Indexed Tree

A *Binary Indexed Tree* allows you to perform the following tasks in $O(\log N)$ time each on an array of size $N$:

 - Update the element at a single position (point).
 - Query the sum of a prefix of the array.

Aka *Fenwick Tree*.


### Sample Problems

<problems-list>
    <problem name="Range Sum Queries II" cses="1648" difficulty="Easy">
      Can also do range XOR queries w/ update.
    </problem>
    <problem name="SPOJ Inversion Counting" link="https://www.spoj.com/problems/INVCNT/" difficulty="Easy">
        Solution notes go here. **Markdown suppported maybe?**
    </problem>
</problems-list>

### Tutorials

  * CPH 9.2, 9.4
    * very good
  * [CSAcademy BIT](https://csacademy.com/lesson/fenwick_trees) 
    * also very good
  * [cp-algorithms Fenwick Tree](https://cp-algorithms.com/data_structures/fenwick.html)
    * extends to range increment and range query, although this is not necessary for gold
  * [Topcoder BIT](https://www.topcoder.com/community/data-science/data-science-tutorials/binary-indexed-trees/)

My implementation can be found [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/1D%20Range%20Queries%20(9.2)/BIT%20(9.2).h), and can compute range sum queries for any number of dimensions.

## Finding K-th Element in BIT?

## Indexed Set

In the special case where all elements of the array are either zero or one (which is the case for several gold problems), users of C++ will find [indexed set](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/STL%20(5)/IndexedSet.h) useful. Using this, we can solve "Inversion Counting" in just a few lines (with template). `Tree<int>` behaves mostly the same way as `set<int>` with the additional functions 

  * `order_of_key(x)`: counts the number of elements in the indexed set that are strictly less than `x`. 
  * `find_by_order(k)`: similar to `find`, returns the iterator corresponding to the `k`-th lowest element in the set (0-indexed).

See the link for more examples of usage.

```cpp
#include <bits/stdc++.h>
using namespace std;

#include <ext/pb_ds/tree_policy.hpp>
#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;
template <class T> using Tree = tree<T, null_type, less<T>, 
	rb_tree_tag, tree_order_statistics_node_update>; 

int main() {
	int T; cin >> T;
	for (int i = 0; i < T; ++i) {
		int n; cin >> n;
		Tree<int> TS; long long numInv = 0;
		for (int j = 0; j < n; ++j) { 
			int x; cin >> x;
			numInv += j-TS.order_of_key(x); // gives # elements before it > x
			TS.insert(x);
		}
		cout << numInv << "\n";
	}
}
```

Note that if it were not the case that all elements of the input array were distinct, then this code would be incorrect since `Tree<int>` would remove duplicates. Instead, we would use an indexed set of pairs (`Tree<pair<int,int>>`), where the first element of each pair would denote the value while the second would denote the array position.

## Practice Problems

 - CSES

<problems-list>
    <problem name="List Removals" cses="1749" difficulty="Easy">
    	easy with indexed set
    </problem>
    <problem name="Salary Queries" cses="1144" difficulty="Easy">
    	easy with indexed set
    </problem>
    <problem name="Range Update Queries" cses="1651" difficulty="Easy">
    	not harder than point update range query
    </problem>
    <problem name="Increasing Subsequence II" cses="1748" difficulty="Easy">
    </problem>
    <problem name="Intersection Points" cses="1740" difficulty="Easy">
    </problem>
    <problem name="Distinct Values Queries" cses="1734" difficulty="Normal">
    </problem>
    <problem name="Robot Path" cses="1742" difficulty="Hard">
    </problem>
</problems-list>

 - USACO Gold
   - The first three problems are just variations on inversion counting.


<problems-list>
    <problem name="Haircut" link="http://www.usaco.org/index.php?page=viewproblem2&cpid=1041" difficulty="Easy">
    </problem>
    <problem name="Balanced Photo" link="http://www.usaco.org/index.php?page=viewproblem2&cpid=693" difficulty="Easy">
    </problem>
    <problem name="Circle Cross" link="http://www.usaco.org/index.php?page=viewproblem2&cpid=719" difficulty="Easy">
    </problem>
    <problem name="Sleepy Cow Sort" link="http://usaco.org/index.php?page=viewproblem2&cpid=898" difficulty="Easy">
    	All USACO problems (aside from some special exceptions) have only one possible output.
    </problem>
    <problem name="Out of Sorts" link="http://usaco.org/index.php?page=viewproblem2&cpid=837" difficulty="Hard">
    </problem>
</problems-list>

* Other Problems:


<problems-list>
    <problem name="Plat - Mincross" usaco="720" difficulty="Easy">
    </problem>
    <problem name="Mega Inversions" kattis="megainversions" difficulty="Easy">
    	also just inversion counting
    </problem>
    <problem name="Silver - Out of Sorts" usaco="834" difficulty="Normal">
     -  aka [Sorting Steps](https://csacademy.com/contest/round-42/task/sorting-steps/) [](42)
     -  Of course, this doesn't require anything other than sorting but fast range sum queries may make this easier.
    </problem>
    <problem name="Twin Permutations" link="https://www.hackerearth.com/practice/data-structures/advanced-data-structures/fenwick-binary-indexed-trees/practice-problems/algorithm/mancunian-and-twin-permutations-d988930c/description/" difficulty="Easy">
        Offline 2D queries can be done with a 1D data structure
    </problem>
</problems-list>

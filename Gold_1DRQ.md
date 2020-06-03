# Gold - 1D Range Queries

Author: Benjamin Qi

## Prerequisites

Assumes that you are familiar with prefix sum queries (CPH 9.1). 

## Binary Indexed Tree

### Introduction

Given an array of size $N$, the task is to update the element at a single position (point) in addition to querying the sum of a prefix in $O(\log N)$ time each.

Sample Problems:

  * [CSES Range Sum Queries II](https://cses.fi/problemset/task/1648)
  * [CSES Range XOR Queries](https://cses.fi/problemset/task/1650)
    * essentially the same as above
  * [SPOJ Inversion Counting](https://www.spoj.com/problems/INVCNT/)

The easiest way to do all of these tasks is with a **Binary Indexed Tree** (or Fenwick Tree). 

Tutorials:

  * CPH 9.2 (very good)
  * [CSAcademy BIT](https://csacademy.com/lesson/fenwick_trees) (also very good)
  * [cp-algorithms Fenwick Tree](https://cp-algorithms.com/data_structures/fenwick.html)
    * extends to range increment and range query, although this is not necessary for gold
  * [Topcoder BIT](https://www.topcoder.com/community/data-science/data-science-tutorials/binary-indexed-trees/)

My implementation can be found [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/1D%20Range%20Queries%20(9.2)/BIT%20(9.2).h), and can compute range sum queries for any number of dimensions.

### Indexed Set

In the special case where all elements of the array are either zero or one (which is the case for several gold problems), users of C++ will find [indexed set](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/STL%20(5)/IndexedSet.h) useful. Using this, we can solve "Inversion Counting" in just a few lines (with template).

```cpp
#include <ext/pb_ds/tree_policy.hpp>
#include <ext/pb_ds/assoc_container.hpp>
using namespace __gnu_pbds;
template <class T> using Tree = tree<T, null_type, less<T>, 
  rb_tree_tag, tree_order_statistics_node_update>; 
#define ook order_of_key
#define fbo find_by_order

int main() {
  setIO();
  int T; re(T);
  F0R(i,T) {
    int n; re(n);
    Tree<int> T; ll numInv = 0;
    F0R(j,n) { 
      int x; re(x); // T.ook(x+1) gives number of previous elements < (x+1)
      numInv += j-T.ook(x+1); // so this gives # previous elements > x
      T.insert(x);
    }
    ps(numInv);
  }
}
```

### Practice Problems

* USACO Gold
  * The first three problems are just variations on inversion counting.
  * [Haircut](http://www.usaco.org/index.php?page=viewproblem2&cpid=1041)
  * [Balanced Photo](http://www.usaco.org/index.php?page=viewproblem2&cpid=693)
  * [Circle Cross](http://www.usaco.org/index.php?page=viewproblem2&cpid=719)
  * [Sleepy Cow Sort](http://usaco.org/index.php?page=viewproblem2&cpid=898)
    * as far as I know, all gold problems have had only one possible output ...
  * [Out of Sorts (harder?)](http://www.usaco.org/index.php?page=viewproblem2&cpid=837)
* Other Problems:
  * [Mega Inversions](https://open.kattis.com/problems/megainversions)
    * also just inversion counting
  * [Out of Sorts (USACO Silver)](http://usaco.org/index.php?page=viewproblem2&cpid=834)
    * aka [Sorting Steps](https://csacademy.com/contest/round-42/task/sorting-steps/) [](42)
    * Of course, this doesn't require anything other than sorting but fast range sum queries may make this easier.

## Beyond Summation

The following topics have not been required for gold (so far).

### Static Range Queries

* Range Minimum Query
  * Tutorial
    * [Wikipedia](https://en.wikipedia.org/wiki/Range_minimum_query)
    * (add)
* Static range queries in $O(1)$ time and $O(N\log N)$ preprocessing for any associative operation?
  * (add)

### Segment Tree

This data structure allows you to do point update and range query in $O(\log N)$ time each for any associative operation.

* Tutorial
  * CPH 9.3
  * [CSAcademy Tutorial](https://csacademy.com/lesson/segment_trees/)
  * [cp-algorithms](https://cp-algorithms.com/data_structures/segment_tree.html)
  * [Codeforces Tutorial](http://codeforces.com/blog/entry/18051)
  * [Slides from CPC.3](https://github.com/SuprDewd/T-414-AFLV/tree/master/03_data_structures)
* Problems
  * [USACO Springboards](http://www.usaco.org/index.php?page=viewproblem2&cpid=995)
    * can use segment tree with min query in place of the map mentioned in analysis
  * [POI Cards](https://szkopul.edu.pl/problemset/problem/qpsk3ygf8MU7D_1Es0oc_xd8/site/?key=statement) [](81)
  * [Counting Haybales (USACO Plat)](http://www.usaco.org/index.php?page=viewproblem2&cpid=578)
    * lazy updates

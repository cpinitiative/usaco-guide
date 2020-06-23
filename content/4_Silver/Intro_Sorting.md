---
id: intro-sorting
title: "Introduction to Sorting"
author: Siyong Huang, Michael Cao, Nathan Chen, Nathan Wang
description: Introduces sorting and binary searching on a sorted array.
---

**Sorting** is exactly what it sounds like: arranging items in some particular order. 

## Additional Resources

 - CPH 3 (Sorting)
   - once again, very good

## Sorting Algorithms

(why are these important?)

There are many sorting algorithms, here are some sources to learn about the popular ones:

  - [Bubble Sort](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem)
    - O(N^2)
    - [Out of Sorts (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=834)
      - hard!
  - [HackerEarth Quicksort](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/)
    - expected $O(N\log N)$
  - [HackerEarth Mergesort](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/)
    - $O(N\log N)$

## Library Sorting

 - C++
    - [std::sort Documentation](https://en.cppreference.com/w/cpp/algorithm/sort)
    - [std::stable\_sort documentation](http://www.cplusplus.com/reference/algorithm/stable_sort/)
    - [Golovanov399 - C++ Tricks](https://codeforces.com/blog/entry/74684)
      - first two related to sorting
 - Java
    - [Arrays.sort Documentation](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html#sort(java.lang.Object[]))
    - [Breaking Java Arrays.sort()](https://codeforces.com/blog/entry/4827)
      - no longer works, but see [this one](https://codeforces.com/contest/1324/hacks/625031/test) instead.
      - to avoid getting hacked, [shuffle](https://pastebin.com/k6gCRJDv) the array beforehand.
 - Python
    - [Sorted Documentation](https://docs.python.org/3/howto/sorting.html)

## Binary Search

[Binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) can be used on monotonic (what's that?) functions for a logarithmic runtime.

Here is a very basic form of binary search:

> Find an element in a sorted array of size $N$ in $O(\log N)$ time.

Other variations are similar, such as the following:

> Given $K$, find the largest element less than $K$ in a sorted array.

### Tutorial

 - CSES 3.3
 - [CSAcademy Binary Search](https://csacademy.com/lesson/binary_search)
 - [Topcoder Binary Search](https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/)
 - [KhanAcademy Binary Search](https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)
 - [GeeksForGeeks](https://www.geeksforgeeks.org/binary-search/)

### Library Functions to do Binary Search

#### Java

 - [Arrays.binarySearch](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html)
 - [Collections.binarySearch](https://docs.oracle.com/javase/7/docs/api/java/util/Collections.html)

#### C++

 - [lower_bound](http://www.cplusplus.com/reference/algorithm/lower_bound/)
 - [upper_bound](http://www.cplusplus.com/reference/algorithm/upper_bound/)

## Example (Coordinate Compression)

Another useful application of sorting is coordinate compression, which takes some points and reassigns them to remove wasted space. Let's consider the USACO Silver problem [Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=666):

> Farmer John has just arranged his $N$ haybales $(1\le N \le 100,000)$ at various points along the one-dimensional road running across his farm. To make sure they are spaced out appropriately, please help him answer $Q$ queries ($1 \le Q \le 100,000$), each asking for the number of haybales within a specific interval along the road.

However, each of the points are in the range $0 \ldots 1,000,000,000$, meaning you can't store locations of haybales in, for instance, a boolean array. However, let's place all of the locations of the haybales into a list and sort it.

(fix this part)

Now, we can map distinct points to smaller integers without gaps. For example, if the haybales existed at positions $[1, 4, 5, 9]$ and queries were $(1, 2)$ and $(4, 6)$, we can place the integers together and map them from $[1, 2, 4, 5, 6, 9] \rightarrow [1, 2, 3, 4, 5, 6]$. This effectively transforms the haybale positions into $[1, 3, 4, 6]$ and the queries into $1, 2$ and $3, 5$.

By compressing queries and haybale positions, we've transformed the range of points to $0 \ldots N + 2Q$, allowing us to store prefix sums to effectively query for the number of haybales in a range.

## Problems

### Standard Problems

### Practice Problems

- https://cses.fi/problemset/task/1084
  - Sort applicants and apartments, then greedily assign applicants
- https://cses.fi/problemset/task/1090
  - Sort children, keep a left pointer and a right pointer. Each gondola either is one child from the right pointer or two children, one left and one right.
- https://cses.fi/problemset/task/1619
- https://cses.fi/problemset/task/1074
  - Spoiler: Optimal length is median
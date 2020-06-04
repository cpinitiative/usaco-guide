---
slug: /gold/dp
title: "Gold - Dynamic Programming (DP)"
author: Michael Cao
---

# Gold - Dynamic Programming (DP)
Author: Michael Cao

## Prerequisites
Assumes familiarity with prefix sums, recursion, Bit Operations (for Bitmask DP), and Trees (for Tree DP).

## Introduction to DP

 * CPH 7
 * [HackerRank DP](https://www.hackerrank.com/topics/dynamic-programming)
 * [Topcoder DP](https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/)

## Classical DP Problems

Tutorials for most problems (excluding USACO) can be found on Chapter 7 of CPH.

 * Knapsack
   * [Unbounded](https://www.hackerrank.com/challenges/unbounded-knapsack/problem)
   * [0/1](https://www.hackerrank.com/contests/srin-aadc03/challenges/classic-01-knapsack/problem)
   * [Large Capacity + Small Values](https://atcoder.jp/contests/dp/tasks/dp_e)
   * [Talent Show (USACO Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=839)
   * [Fruit Feast (USACO Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=574)
 * Longest Increasing Subsequence
   * [LIS in Quadratic Time](https://leetcode.com/problems/longest-increasing-subsequence/)
   * Try to improve to $O(NlogN)$. 
   * [Sort It Out (USACO Platinum)](http://www.usaco.org/index.php?page=viewproblem2&cpid=865)
 * Coin Change
   * [Unordered](https://cses.fi/problemset/task/1635)
   * [Ordered](https://cses.fi/problemset/task/1636)
   * [Minimum Coins](https://cses.fi/problemset/task/1634)
 * Paths on a Grid
   * [Count Paths](https://atcoder.jp/contests/dp/tasks/dp_h)
   * [Palindromic Paths (Old USACO Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=553)
 * Edit Distance
   * [Standard](https://www.hackerrank.com/contests/cse-830-homework-3/challenges/edit-distance)
   * [Landscaping (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=126)
 * Longest Common Subsequence
   * [Standard](https://leetcode.com/problems/longest-common-subsequence/)

## Tree DP

  * Tutorial
    * [DP on Trees (Codeforces)](https://codeforces.com/blog/entry/20935)
  * Problems
    * [Subtree](https://atcoder.jp/contests/dp/tasks/dp_v)
    * [Independent Set](https://atcoder.jp/contests/dp/tasks/dp_p)
    * [Barn Painting (USACO Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=766)
    * [Delegation (USACO Gold)](http://usaco.org/index.php?page=viewproblem2&cpid=1019)

## Bitmask DP

Note: Has not appeared on recent USACO.

 * Tutorials:
   * CPH Chapter 10
   * [Dynamic Programming Over Subsets (Codeforces)](https://codeforces.com/blog/entry/337)
   * [Dynamic Programming and Bit Masking (HackerEarth)](https://www.hackerearth.com/practice/algorithms/dynamic-programming/bit-masking/tutorial/)
 * Problems:
   * [Moovie Moving (Old UASCO Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=515)
   * [Matching](https://atcoder.jp/contests/dp/tasks/dp_o)
   * [Square Subsets](https://codeforces.com/contest/895/problem/C)
   * [Guards in the Storehouse](https://codeforces.com/problemset/problem/845/F)

## Practice Problems

 * [Atcoder DP Contest (Extremely Good)](https://atcoder.jp/contests/dp/tasks)
 * [CSES DP Section](https://cses.fi/problemset/list/)
 * [Codeforces DP Problem List](http://codeforces.com/blog/entry/325)
 * USACO (Not Ordered By Difficulty)
   * [Time is Mooney](http://www.usaco.org/index.php?page=viewproblem2&cpid=993)
     * Graph
   * [Mortal Cowmbat](http://usaco.org/index.php?page=viewproblem2&cpid=971)
     * with Prefix Sums
   * [Painting the Barn](http://usaco.org/index.php?page=viewproblem2&cpid=923)
     * with 2D Prefix Sums
   * [Snakes](http://www.usaco.org/index.php?page=viewproblem2&cpid=945)
   * [Cow Poetry](http://usaco.org/index.php?page=viewproblem2&cpid=897)
     * with fast Exponentiation
   * [Teamwork](http://usaco.org/index.php?page=viewproblem2&cpid=863)
   * [Taming the Herd](http://www.usaco.org/index.php?page=viewproblem2&cpid=815)
   * [Stamp Painting](http://www.usaco.org/index.php?page=viewproblem2&cpid=791)
   * [Why Did The Cow Cross the Road I](http://www.usaco.org/index.php?page=viewproblem2&cpid=717)
   * [Why Did The Cow Cross the Road II](http://www.usaco.org/index.php?page=viewproblem2&cpid=718)
   * [Hoof Paper Scissors](http://www.usaco.org/index.php?page=viewproblem2&cpid=694)
   * [Cow Checklist](http://www.usaco.org/index.php?page=viewproblem2&cpid=670)
   * [Circular Barn Revisited](http://www.usaco.org/index.php?page=viewproblem2&cpid=622)
   * [Radio Contact](http://www.usaco.org/index.php?page=viewproblem2&cpid=598)
   * [248](http://www.usaco.org/index.php?page=viewproblem2&cpid=647)

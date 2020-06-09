---
slug: /gold/dp
title: "Introduction to Dynamic Programming"
author: Michael Cao
order: 1
prerequisites: 
 - 
     - Recursion
 - 
     - Silver - Prefix Sums
---

An introduction to dynamic programming concepts needed for USACO Gold. 

<!-- END DESCRIPTION -->

**Dynamic programming** is a very important concept which emerges in the USACO gold division and extends to the IOI. Typically, one or two problems from every contest in the gold division uses some sort of Dynamic programming. 

## Tutorial

The following tutorials serve as an introduction into the mindset of Dynamic programming.

 - CPH 7 
   - great introduction that covers most classical problems
 - [Topcoder DP](https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/)
   - great for all skill levels
 - [CPC.6](https://github.com/SuprDewd/T-414-AFLV/tree/master/06_dynamic_programming)
   - examples with nonclassical problems
 - [HackerRank DP](https://www.hackerrank.com/topics/dynamic-programming)
   - also covers many classical problems

Practice makes perfect. Start by doing some classical problems (try at least one of each), as these are **must know** DP problems. Each topic starts with direct applications of the classical problems, and then some interesting variations and USACO problems which utilize the ideas. Solutions for most problems (excluding USACO) can be found on Chapter 7 of CPH.

## General

 * [**Atcoder DP Contest**](https://atcoder.jp/contests/dp/tasks)
   * very good!
 * [CSES DP Section](https://cses.fi/problemset/list/)
   * also very good!
 * [Codeforces DP Problem List](http://codeforces.com/blog/entry/325)

## Coin Change / Knapsack

(description)

 * Classic
   * [Unbounded](https://www.hackerrank.com/challenges/unbounded-knapsack/problem)
     * [Unordered Coin Change](https://cses.fi/problemset/task/1635)
     * [Ordered Coin Change](https://cses.fi/problemset/task/1636)
     * [Minimum Coins](https://cses.fi/problemset/task/1634)
   * [0/1](https://www.hackerrank.com/contests/srin-aadc03/challenges/classic-01-knapsack/problem)
   * [Large Capacity + Small Values](https://atcoder.jp/contests/dp/tasks/dp_e)
      * Reconsider the state.
 * USACO Gold
   * [Talent Show](http://www.usaco.org/index.php?page=viewproblem2&cpid=839)
   * [Fruit Feast](http://www.usaco.org/index.php?page=viewproblem2&cpid=574)
   * [Cow Poetry](http://usaco.org/index.php?page=viewproblem2&cpid=897)
     * needs fast exponentiation for full points

## Paths on Grid (& Related)

 * Classic
   * Longest Common Subsequence
     * [Standard](https://leetcode.com/problems/longest-common-subsequence/)
   * Edit Distance
     * [Standard](https://www.hackerrank.com/contests/cse-830-homework-3/challenges/edit-distance)
   * Paths on a Grid
     * [Count Paths](https://atcoder.jp/contests/dp/tasks/dp_h)
 * USACO
   * [Gold - Cow Checklist](http://www.usaco.org/index.php?page=viewproblem2&cpid=670)
     * `dp[visited i Hs][visited j Gs][last cow visited] -> min energy`
   * [Gold - Radio Contact](http://www.usaco.org/index.php?page=viewproblem2&cpid=598)
     * similar to above
   * [Gold - Why Did The Cow Cross the Road II](http://www.usaco.org/index.php?page=viewproblem2&cpid=718)
     * variation on LCS
   * [Old Silver - Landscaping](http://www.usaco.org/index.php?page=viewproblem2&cpid=126)
     * Although the problem looks different, this is actually a direct application of edit distance.
   * [Old Gold - Palindromic Paths](http://www.usaco.org/index.php?page=viewproblem2&cpid=553)
     * Consider the answer. What are some properties of it?

## Longest Increasing Subsequence

 * [LIS in Quadratic Time](https://leetcode.com/problems/longest-increasing-subsequence/)
    * Try to improve to $O(N\log N)$. 
 * [Sort It Out (USACO Platinum)](http://www.usaco.org/index.php?page=viewproblem2&cpid=865)
    * Challenging!

## Additional USACO Problems

 * Fairly Straightforward
   * [Hoof Paper Scissors](http://www.usaco.org/index.php?page=viewproblem2&cpid=694)
     * `dp[first i games][# changes][last gesture ] -> max games won`
   * [Time is Mooney](http://www.usaco.org/index.php?page=viewproblem2&cpid=993)
     * `dp[time][city] -> money`
   * [Teamwork](http://usaco.org/index.php?page=viewproblem2&cpid=863)
     * $O(NK^2)\to O(NK)$
 * Trickier
   * [Mortal Cowmbat](http://usaco.org/index.php?page=viewproblem2&cpid=971)
     * Use Floyd-Warshall, Prefix Sums
     * `dp[first i letters form valid combo][last letter] -> time`
   * [Snakes](http://www.usaco.org/index.php?page=viewproblem2&cpid=945)
     * `dp[first m groups][k changes] -> total sum of net sizes`
   * [Taming the Herd](http://www.usaco.org/index.php?page=viewproblem2&cpid=815)
     * `dp[consider first i entries only][last breakout in first i occurs at j][k breakouts among first i entries] -> # changes`
   * [Stamp Painting](http://www.usaco.org/index.php?page=viewproblem2&cpid=791)
     * must be $K$ consecutive with same color
     * $O(NK)\to O(N)$
   * [Circular Barn Revisited](http://www.usaco.org/index.php?page=viewproblem2&cpid=622)
     * can brute force make your DP easier? (yes)

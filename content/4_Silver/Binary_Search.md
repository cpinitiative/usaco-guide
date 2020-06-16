---
id: binary-search
title: "Binary Search on the Answer"
author: Darren Yao
---

## Binary Searching on the Answer

Oftentimes used when you need to find the minimum or maximum of some quantity such that it satisfies some property.
 
### Tutorial

  - Intro to USACO 12.1

### Problems

 - USACO
   - [USACO Silver - Cow Dance](http://www.usaco.org/index.php?page=viewproblem2&cpid=690)
     - binary search on $K$ and simulate
   - [USACO Silver - Convention](http://www.usaco.org/index.php?page=viewproblem2&cpid=858)
     - determine whether $M$ buses suffice if every cow waits at most $T$ minutes
     - use a greedy strategy (applies to next two problems as well)
   - [USACO Silver - Angry Cows](http://usaco.org/index.php?page=viewproblem2&cpid=594)
     - check in $O(N)$ how many haybales you can destroy with fixed radius $R$
   - [USACO Silver - Social Distancing](http://www.usaco.org/index.php?page=viewproblem2&cpid=1038)
     - check in $O(N+M)$ how many cows you can place with distance $D$
   - [USACO Silver - Loan Repayment](http://www.usaco.org/index.php?page=viewproblem2&cpid=991)
     - requires some rather tricky analysis to speed up naive $O(N\log N)$ solution
 - CF
   - [The Meeting Place Cannot Be Changed](http://codeforces.com/contest/782/problem/B) [](48)
   - [Preparing for Merge Sort](http://codeforces.com/contest/847/problem/B) [](53)
   - [Level Generation](http://codeforces.com/problemset/problem/818/F) [](54)
   - [Packmen](http://codeforces.com/contest/847/problem/E) [](57)
   - [Office Keys](http://codeforces.com/problemset/problem/830/A) [](60)
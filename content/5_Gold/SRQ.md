---
id: SRQ
title: "1D Static Range Queries"
author: Benjamin Qi
prerequisites: 
 - 
     - todo
description: todo
---

Given a static array $A[1],A[2],\ldots,A[N]$, you want to answer queries in the form $A[l]\ominus A[l+1]\ominus \cdots \ominus A[r]$ where $\ominus$ denotes any associative operation.

This can be done in $O(1)$ time each with $O(N\log N)$ time preprocessing.

## [Range Minimum Query](https://en.wikipedia.org/wiki/Range_minimum_query)

First we'll consider the special case when $\ominus$ denotes `min`. 

- [CSES Range Minimum Queries I](https://cses.fi/problemset/task/1647)

### Tutorial

 - CPH 9.1
 - [cp-algorithms RMQ](https://cp-algorithms.com/sequences/rmq.html)

<optional-content title="Preprocessing in $O(N)$ Time">

 - [CF: $O(1)$ Query RMQ with $O(N)$ build](https://codeforces.com/blog/entry/78931)
 
</optional-content>

## Divide & Conquer

**Divide & conquer** can refer to many different techniques. In this case, we use it to answer $Q$ queries offline in $O((N+Q)\log N)$ time. 

Suppose that all queries satisfiy $L\le l\le r\le R$ (initially, $L=1$ and $R=N$). Letting $M=\left\lfloor \frac{L+R}{2}\right\rfloor$, we can compute 
$$
lef[l]=A[l]\ominus A[l+1]\ominus \cdots \ominus A[M]
$$ 
for all $L\le l\le M$ and 
$$
rig[r]=A[M+1]\ominus A[M+2] \ominus \cdots\ominus A[r]
$$ 
for each $M< r\le R$. Then the answer for all queries satisfying $l\le M< r$ is simply $lef[l]\ominus rig[r]$ due to the associativity condition. After that, we recurse on all query intervals completely contained within $[L,M]$ and $[M+1,R]$ independently.

Actually, this can be adjusted to answer queries online in $O(1)$ time each. See my implementation [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/Static%20Range%20Queries%20(9.1)/RangeQuery.h).

<optional-content title="Preprocessing in $O(N\log \log N)$ time">

This data structure is known as **sqrt-tree**.

 * [Pt 1](http://codeforces.com/blog/entry/57046)
 * [Pt 2](http://codeforces.com/blog/entry/59092)

</optional-content>

## Problems

 - [Codechef - Product on Segment](https://www.codechef.com/problems/SEGPROD)
 - [DMOJ - Continued Fractions](https://dmoj.ca/problem/dmopc19c7p4)
 - [USACO Plat - Non-Decreasing Subsequences](http://www.usaco.org/index.php?page=viewproblem2&cpid=997)
 - [JOI - Secret](https://oj.uz/problem/view/JOI14_secret)

---
id: prefix-sums
title: "Prefix Sums"
author: Eric Wei
---

> Given an array $A_1,A_2,\ldots,A_N$, answer $Q$ queries of the following form: compute $A_L+A_{L+1}+\cdots+A_R$.

<!-- END DESCRIPTION -->

## Standard

 -  [CSES Range Sum Queries I](https://cses.fi/problemset/task/1646)
 -  [LeetCode Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

## Tutorials

This technique is also known as *cumulative sum* or *partial sums*.

 - Intro to USACO 11
 - CPH 9.1

## USACO Silver Problems

These problems are relatively straightforward.

 - [USACO Breed Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=572)
 - [USACO Subsequences Summing to Seven](http://www.usaco.org/index.php?page=viewproblem2&cpid=595)

Now we'll look at some extensions.

## Max Subarray Sum

 - [Maximum Subarray Sum](https://cses.fi/problemset/task/1643)

(Note: This problem has a solution known as Kadane's Algorithm. Please *don't* use that solution; try to solve it with prefix sums.)
<details>
 <summary>Why are the two methods equivalent?</summary>
 Consider the desired maximum subarray. As you go along from left to right, the prefix sum solution will mark the start of that subarray as the "current minimum prefix sum". Kadane's Algorithm, on the other hand, will set the current value to 0 at that point. As both solutions iterate through the array, they eventually find the right side of the maximum sum, and they find the answer to the problem at that location. In essence, Kadane's Algorithm stores the maximum sum of a subarray that ends at the current location (which is what the prefix sum solution calculates on each iteration), but it calculates this value greedily instead.
</details>

Extension:

 - [CSES Maximum Subarray Sum II](https://cses.fi/problemset/task/1644)

## Difference Array

**Task:** Given an array of size $N$, do the following operation $Q$ times: add $X$ to the values between $i$ and $j$. Afterwards, print the final array.

**Solution:** Consider the array formed by $a_i-a_{i-1}$. When processing a range addition, only two values in this difference array change! At the end, we can recover the original array using prefix sums. (The math is left as an exercise to the reader.)

 - [USACO Haybale Stacking](http://www.usaco.org/index.php?page=viewproblem2&cpid=104)

## 2D Prefix Sums

Given a 2-dimensional array of size $N\cdot M$, answer $Q$ queries of the following form: Find the sum of all elements within the rectangle of indices $(x1,y1)$ to $(x2,y2)$.

 - [CSES Forest Queries](https://cses.fi/problemset/task/1652)
 - [USACO Painting the Barn (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=919)
 - [USACO Painting the Barn (Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=923)
   - combine with max subarray sum!

## Prefix Minimum, XOR, etc.

Similar to prefix sums, you can also take prefix minimum or maximum; but *you cannot* answer min queries over an arbitrary range with prefix minimum. (This is because minimum doesn't have an inverse operation, the way subtraction is to addition.)
On the other hand, XOR is its own inverse operation, meaning that the XOR of any number with itself is zero.

 - [USACO My Cow Ate My Homework](http://usaco.org/index.php?page=viewproblem2&cpid=762)
 - [CSES Range XOR Queries](https://cses.fi/problemset/task/1650)

## More Complex Applications

Instead of storing just the values themselves, you can also take a prefix sum over $i\cdot a_i$, or $10^i \cdot a_i$, for instance. Some math is usually helpful for these problems; don't be afraid to get dirty with algebra!

For instance, let's see how to quickly answer the following type of query:

Find $1\cdot a_l+2\cdot a_{l+1}+3\cdot a_{l+2}+\cdots+(r-l+1)\cdot a_{r}$.

First, define the following: \
$ps[i] = a_1+a_2+a_3+a_4+\cdots+a_i \\ ips[i] = 1\cdot a_1+2\cdot a_2+\cdots+i\cdot a_i$

Then, we have: \
$l\cdot a_l + (l+1) \cdot a_{l+1} + \cdots + r \cdot a_r = ips[r]-ips[l-1] (l-1) \cdot a_l + (l-1) \cdot a_{l+1} + \cdot + (l-1) \cdot a_r = (l-1)(ps[r]-ps[l-1])$

And so, \
$1\cdot a_l + 2 \cdot a_{l+1} + \cdots + (r-l+1) \cdot a_r = ips[r]-ips[l-1]-(l-1)(ps[r]-ps[l-1])$

Which is what we were looking for!

 - [AtCoder Multiple of 2019](https://atcoder.jp/contests/abc164/tasks/abc164_d)
 - [Google Kick Start Candies](https://codingcompetitions.withgoogle.com/kickstart/round/000000000019ff43/0000000000337b4d) (**only** Test Set 1.)

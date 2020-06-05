---
slug: /silver/prefix-sums
title: "Prefix Sums"
author: Eric Wei (incomplete)
order: 6
---

<div class="syllabus-only">
  Description: Todo
</div>

<!-- END DESCRIPTION -->

## The Task

Given an array of size $N$, answer $Q$ queries of the following form: Find the sum of all elements between indices $i$ and $j$.

 -  [CSES Range Sum Queries I](https://cses.fi/problemset/task/1646)
 -  [USACO Breed Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=572)

## Tutorials

(This technique is also known as *cumulative sum* or *partial sums*.)

See Ch 11 of https://www.overleaf.com/project/5e73f65cde1d010001224d8a

 - CPH 9.1

## Extensions

### 2D Prefix Sums

Given a 2-dimensional array of size $NxM$, answer $Q$ queries of the following form: Find the sum of all elements within the rectangle of indices $(x1,y1)$ to $(x2,y2)$.

 - [CSES Forest Queries](https://cses.fi/problemset/task/1652)

### Difference Array

Given an array of size $N$, do the following operation $Q$ times: add $X$ to the values between $i$ and $j$. Afterwards, print the final array.
Consider the array formed by $a_i-a_{i-1}$. When processing a range addition, only two values in this difference array change! At the end, we can recover the original array using prefix sums. (The math is left as an exercise to the reader.)

 - (find 1d difference array problem) 

### Prefix Minimum, XOR, etc.

Similar to prefix sums, you can also take prefix minimum or maximum; but *you cannot* answer min queries over an arbitrary range with prefix minimum. (This is because minimum doesn't have an inverse operation, like subtraction is to addition.)
On the other hand, XOR is its own inverse operation...
 - (find range min problem. homework?)
 - [CSES Range XOR Queries](https://cses.fi/problemset/task/1650)

### More Complex Applications
Instead of storing just the values themselves, you can also take a prefix sum over $i\cdot a_i$, or $10^i \cdot a_i$, for instance.
 - (find iota ps problem)
 - [AtCoder Multiple of 2019](https://atcoder.jp/contests/abc164/tasks/abc164_d) (You may want to solve the below problem "Subsequences Summing to Seven" before doing this one.)

## Additional Problems
 - [USACO Subsequences Summing to Seven](http://www.usaco.org/index.php?page=viewproblem2&cpid=595)
 - [USACO My Cow Ate My Homework](http://usaco.org/index.php?page=viewproblem2&cpid=762)
 - [USACO Painting the Barn](http://www.usaco.org/index.php?page=viewproblem2&cpid=919)

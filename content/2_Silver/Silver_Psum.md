---
slug: /silver/prefix-sums
title: "Silver - Prefix Sums"
author: Eric Wei (incomplete)
---

# Silver - Prefix Sums

Author: Eric Wei

## The Task

Given an array of size $N$, answer $Q$ queries of the following form: Find the sum of all elements between indices $i$ and $j$.

 -  [CSES Range Sum Queries I](https://cses.fi/problemset/task/1646)

## Tutorials

(This technique is also known as *cumulative sum* or *partial sums*.)

See Ch 11 of https://www.overleaf.com/project/5e73f65cde1d010001224d8a

 - CPH 9.1

## Extensions

### 2D Prefix Sums

Given a 2-Dimension array of size $NxM$, answer $Q$ queries of the following form: Find the sum of all elements within the rectangle of indices $(x1,y1)$ to $(x2,y2)$.

 - [CSES Forest Queries](https://cses.fi/problemset/task/1652)

### Difference Array

Consider the array formed by $a_i-a_{i-1}$.

 - [USACO Painting the Barn](http://www.usaco.org/index.php?page=viewproblem2&cpid=919) (i should find an easier one because this is hard)

### Prefix Minimum, Etc.

Using 
---
id: RURQ
title: "Range Update Range Query"
author: Benjamin Qi
prerequisites: 
 - Gold - Point Update Range Query
description: Lazy updates on segment trees and two binary indexed trees in conjunction.
---

CPH 28.1 (Segment Trees Revisited)

## Lazy Segment Tree

(problem that's only increment with no sets?)

<problems-list>
    <problem name="Range Updates & Sums" cses="1735" difficulty="Easy" tags={["Lazy SegTree"]}>
    </problem>
    <problem name="Counting Haybales" usaco="578" difficulty="Easy" tags={["Lazy SegTree"]}>
    </problem>
    <problem name="Old Gold - The Lazy Cow" cses="418" difficulty="Easy" tags={["Lazy SegTree"]}>
    </problem>
    <problem name="Area of Rectangles" cses="1741" difficulty="Hard" tags={["Lazy SegTree"]}>
     - use segment tree that keeps track of minimum and # of minimums
    </problem>
</problems-list>

## BIT Revisited

Binary Indexed Trees can support range increments in addition to range sum queries.

 - [GFG Range Update Point Query](https://www.geeksforgeeks.org/binary-indexed-tree-range-updates-point-queries/)
 - [GFG Range Update Range Query](https://www.geeksforgeeks.org/binary-indexed-tree-range-update-range-queries/)
 - [My Implementation](https://github.com/bqi343/USACO/blob/master/Implementations/content/data-structures/1D%20Range%20Queries%20(9.2)/BITrange.h)

<problems-list>
    <problem name="Range Update Range Query" dmoj="acc3p4" difficulty="Normal" tags={["BIT-Range"]}>
    </problem>
    <problem name="Polynomial Queries" cses="1736" difficulty="Normal" tags={["BIT-Range"]}>
    </problem>
</problems-list>
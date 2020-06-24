---
id: merging
title: "Small-To-Large Merging"
author: Michael Cao
prerequisites: 
 - Silver - Depth First Search
description: ?
---

## Additional Reading

  - CPH 18.4 - Merging Data Structures
  - CF Blogs
    - [Arpa](https://codeforces.com/blog/entry/44351)
    - [tuwuna](https://codeforces.com/blog/entry/67696)

# Merging Sets

Let's consider a tree, rooted at node $1$, where each node has a color (see [CSES Distinct Colors](https://cses.fi/problemset/task/1139)). 

For each node, let's store a set containing only that node, and we want to merge the sets in the nodes subtree together such that each node has a set consisting of all colors in the nodes subtree. Doing this allows us to solve a variety of problems, such as query the number of distinct colors in each subtree. Doing this naively, however, yields a runtime complexity of $O(N^2)$. 

However, with just a few lines of code, we can significantly speed this up.
```cpp
if(a.size() < b.size()){ //for two sets a and b
  swap(a,b);
}
```  
In other words, by merging the smaller set into the larger one, the runtime complexity becomes $O(N\log N).$

<details>
<summary> Proof </summary>

When merging two sets, you move from the smaller set to the larger set. If the size of the smaller set is $X$, then the size of the resulting set is at least $2X$. Thus, an element that has been moved $Y$ times will be in a set of size $2^Y$, and since the maximum size of a set is $N$ (the root), each element will be moved at most $O(\log N$) times leading to a total complexity of $O(N\log N)$.
</details>

Additionally, a set doesn't have to be an `std::set`. Many data structures can be merged, such as `std::map` or even adjacency lists. 

<info-block title="Challenge">

Prove that if you instead merge sets that have size equal to the depths of the subtrees, then small to large merging does $O(N)$ insert calls.

(be specific about what this means?)

</info-block>

## Problems

(note about indexed set swap)

<problems-list>
    <problem name="Distinct Colors" cses="1139" difficulty="Easy" tags={["Merging"]}>
    </problem>
    <problem name="Lomsat gelral" cf="contest/600/problem/E" difficulty="Normal" tags={["Merging"]}>
    </problem>
    <problem name="Plat - Disruption" usaco="842" difficulty="Hard" tags={["Merging"]}>
    </problem>
    <problem name="Plat - Promotion Counting" usaco="696" difficulty="Hard" tags={["Merging"]}>
      - merge indexed sets
    </problem>
</problems-list>
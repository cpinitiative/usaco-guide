---
id: mst
title: "Minimum Spanning Trees"
author: Benjamin Qi
prerequisites: 
 - Gold - Shortest Paths
 - Gold - Disjoint Set Union
description: A subset of the edges of a connected, undirected, edge-weighted graph that connects all the vertices to each other of minimum total weight, where no cycles are allowed.
---

## Sample

<problems-list>
    <problem name="MST" kattis="minspantree" difficulty="Easy" tags={["MST"]}>
    </problem>
    <problem name="Road Reparation" cses="1675" difficulty="Easy" tags={["MST"]}>
    </problem>
</problems-list>

## Tutorial

 - CPH 15 (Spanning Trees)
 - [PAPS 12.4](https://www.csc.kth.se/~jsannemo/slask/main.pdf)
 - Prim's Algorithm
   - [cp-algo](https://cp-algorithms.com/graph/mst_prim.html)
   - Similar to Dijkstra
 - Kruskal's Algorithm
   - [cp-algo 1](https://cp-algorithms.com/graph/mst_kruskal.html)
   - [cp-algo 2](https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html)

## USACO Gold Problems

<problems-list>
    <problem name="Old Silver - SuperBull" usaco="531" difficulty="Easy" tags={["MST"]}>
    </problem>
    <problem name="Walk" usaco="946" difficulty="Easy" tags={["Math", "Prim"]}>
    </problem>
    <problem name="Fencedin" usaco="623" difficulty="Easy" tags={["MST"]}>
    </problem>
    <problem name="Plat - Fencedin" usaco="625" difficulty="Normal" tags={["Kruskal"]}>
    </problem>
</problems-list>

## Other Problems

  - [Birthday Gifts](https://www.hackerearth.com/practice/math/combinatorics/inclusion-exclusion/practice-problems/algorithm/mancunian-and-birthday-gifts-d44faa15/) [](73)
  - [Spanning Tree Fraction](https://www.hackerrank.com/contests/w31/challenges/spanning-tree-fraction) [](78)
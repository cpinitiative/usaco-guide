---
id: hashing
title: "Strings"
author: Benjamin Qi
prerequisites: 
 - 
     - Silver - Depth First Search
---

 - Tries
 - Hashing
 - Z
 - KMP
 - Manacher
 - Aho-Corasick
 - Suffix Array

<!-- END DESCRIPTION -->

Note: String algorithms do not appear very frequently. Hashing has appeared on gold (rarely).

## General Resources

 - [CPC.11](https://github.com/SuprDewd/T-414-AFLV/tree/master/11_strings)
 - [CP-Algorithms String Processing: Fundamentals](https://cp-algorithms.com/)
 - CPH (26, String Algorithms)

## Tries

  - [Algorithm Gym](http://codeforces.com/blog/entry/15729)

## Hashing

Use to quickly test whether two substrings are equal.

 - Tutorial 
   - CPH 26.3
   - [cp-algorithms String Hashing](https://cp-algorithms.com/string/string-hashing.html)
 - [Anti-Hash Tests](https://codeforces.com/blog/entry/60442)
   - On CodeForces educational rounds in particular, make sure to use random bases.

My implementation can be found [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/strings%20(14)/Light/HashRange%20(14.2).h). It uses two bases rather than just one to decrease the probability that two random strings hash to the same value. As mentioned in the articles above, there is no need to calculate modular inverses.

### Problems

  - USACO
    - [Gold Cownomics](http://www.usaco.org/index.php?page=viewproblem2&cpid=741) 
      - Use two pointers; for a fixed $l$, keep extending $r$ to the right until the positions $l\ldots r$ explain spotiness. 
      - Hashing gives you a way to quickly check whether two substrings of different cow types are equal. So for a single $[l,r]$ pair you can check whether it works in $O(N\log N)$ time (and you only need to check $O(M)$ of these pairs in total).
      - Actually, it's possible to pass $O(N^2M)$ (or even slower) solutions.
    - [Gold Lightsout](http://www.usaco.org/index.php?page=viewproblem2&cpid=599)
      - figure out whether this actually needs hashing? (check ...)
  - Other (check ...)
    - [Palindromic Partitions](https://csacademy.com/contest/ceoi-2017-day-2/task/palindromic-partitions/)
    - [Liar](http://codeforces.com/problemset/problem/822/E) [](93)
    - [Palindromic Characteristics](http://codeforces.com/problemset/problem/835/D) [](100)
    - [Berland SU Computer Network](http://codeforces.com/contest/847/problem/L) [](142)

## Z, KMP

  - Tutorial
    - [paladin8](http://codeforces.com/blog/entry/3107)
    - [GeeksForGeeks](http://www.geeksforgeeks.org/searching-for-patterns-set-2-kmp-algorithm/)
    - [TopCoder](https://www.topcoder.com/community/data-science/data-science-tutorials/introduction-to-string-searching-algorithms/)

## Manacher

  - Has appeared at camp but not in platinum.
    - [HackerRank](https://www.hackerrank.com/topics/manachers-algorithm)
    - [adamant](http://codeforces.com/blog/entry/12143)
    - [cp-algorithms](https://cp-algorithms.com/string/manacher.html)
    
## Aho-Corasick

  - Has appeared in old gold.
  - Tutorial
    - [adamant](http://codeforces.com/blog/entry/14854)
    - [GeeksForGeeks](http://www.geeksforgeeks.org/aho-corasick-algorithm-pattern-searching/)

## Suffix Array

  - [USACO Plat - Standing Out from the Herd](http://www.usaco.org/index.php?page=viewproblem2&cpid=768)

---
slug: /gold/hashing
title: "Gold - Hashing"
author: Benjamin Qi
---

# Gold - Hashing

Author: Benjamin Qi

## Hashing

Use to quickly test whether two substrings are equal.

 - Tutorial 
   - CPH 26.3
   - [cp-algorithms String Hashing](https://cp-algorithms.com/string/string-hashing.html)
 - [Anti-Hash Tests](https://codeforces.com/blog/entry/60442)
   - On CodeForces educational rounds in particular, make sure to use random bases.

My implementation can be found [here](https://github.com/bqi343/USACO/blob/master/Implementations/content/strings%20(14)/Light/HashRange%20(14.2).h). It uses two bases rather than just one to decrease the probability that two random strings hash to the same value. As mentioned in the articles above, there is no need to calculate modular inverses.

### USACO Gold Problems (ok def need more)

  - [Cownomics](http://www.usaco.org/index.php?page=viewproblem2&cpid=741) 
    - Use two pointers; for a fixed $l$, keep extending $r$ to the right until the positions $l\ldots r$ explain spotiness. 
    - Hashing gives you a way to quickly check whether two substrings of different cow types are equal. So for a single $[l,r]$ pair you can check whether it works in $O(N\log N)$ time (and you only need to check $O(M)$ of these pairs in total).
  - [Lightsout](http://www.usaco.org/index.php?page=viewproblem2&cpid=599)
    - figure out whether this actually needs hashing? (haven't implemented)
---
id: data-structures-gold
title: "Data Structures (Gold)"
author: Michael Cao 
prerequisites: 
 - 
     - Silver - Data Structures
---

<module-excerpt>

More advanced applications of data structures introduced in earlier divisions.

</module-excerpt>

# Monotonic Stack

Consider the following problem: 

> Given an array, $a$, of $N (1 \le N \le 10^5)$ integers, for every index $i$, find the rightmost index $j$ such that $j < i$ and $a_i > a_j$. 

To solve this problem, let's store a stack of pairs of `<value, index>` and iterate over the array from left to right.  For some index $i$, we will compute $ans_i$, the rightmost index for $i$, as follows:

- Keep popping the top element off the stack as long as $value \ge a_i$. This is because we know that the pair containing $value$ will never be the solution to any index $j > i$, since $a_i$ is less than or equal to than $value$ and has an index further to the right.
- If $value < a_i$, set $ans[i]$ to $index$, because a stack stores the most recently added values first (or in this case, the rightmost ones), $index$ will contain the rightmost value which is less than $a_i$. Then, pop the top element off the stack, because $index$ can't be the solution for two elements.

The stack we used is called a "monotonic stack" because we keep popping off the top element of the stack which maintains it's monotonicity (the same property needed for algorithms like binary search) because the elements in the stack are increasing. 

## Further Reading

- "Nearest Smallest Element" from CPH 8
- [CP Algorithms (Min Stack)](https://cp-algorithms.com/data_structures/stack_queue_modification.html)
- [Medium](https://medium.com/@vishnuvardhan623/monotonic-stack-e9dcc4fa8c3e)

## Problems

- [Concurrently Balanced Strings (Old Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=194)
- [Max Histogram Area (Leetcode)](https://leetcode.com/problems/largest-rectangle-in-histogram/)

(add more once codeforces comes up)

# Sliding Window 

Let's envision a sliding window (or constant size subarray) of size $K$ moving left to right along an array, $a$. For each position of the window, we want to compute some information. 

Let's store a `std::set` of integers representing the integers inside the window. If the window currently spans the range $i \dots j$, we observe that moving the range forward to $i+1 \dots j+1$ only removes $a_i$ and adds $a_{j+1}$ to the window. We can support these two operations and query for the minimum/maximum in the set in $O(\log N)$. 

To compute the sum in the range, instead of using a set, we can store a variable $s$ representing the sum. As we move the window forward, we update $s$ by performing the operations $s$ -= $a_i$ and $s$ += $a_{j+1}$. 

## Further Reading

- "Sliding Window" from CPH 8
	- Read [this article]([https://cp-algorithms.com/data_structures/stack_queue_modification.html](https://cp-algorithms.com/data_structures/stack_queue_modification.html)) to learn about the "min queue" that CPH describes. 
- [Medium]([https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7](https://levelup.gitconnected.com/an-introduction-to-sliding-window-algorithms-5533c4fe1cc7))
- [G4G](https://www.geeksforgeeks.org/window-sliding-technique/)

## Problems

- [Haybale Feast (Gold)](http://usaco.org/index.php?page=viewproblem2&cpid=767)
  - Direct application of sliding window.
- [Train Tracking 2 (Plat)]([http://www.usaco.org/current/data/sol_train_platinum_open18.html](http://www.usaco.org/current/data/sol_train_platinum_open18.html))
  - **Extremely difficult.**

(add more once codeforces comes up)
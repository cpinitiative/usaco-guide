---
id: prefix-sums
title: "Prefix Sums"
author: Darren Yao, Eric Wei
---

Let's say we have a one-indexed integer array $\texttt{arr}$ of size $N$ and we want to answer $Q$ queries of the following form: compute $\texttt{arr[L]+arr[L+1]+}\cdots\texttt{+arr[R]}$.

<!-- END DESCRIPTION -->

## Standard

 -  [CSES Range Sum Queries I](https://cses.fi/problemset/task/1646)
 -  [LeetCode Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)

## Additional Resources

 - CPH 9.1

## Tutorial

Let's use the following example with $N = 6$:

$$\begin{center}
    \begin{tabular}{ c | c c c c c c c }
    \toprule
        Index $i$ & \color{gray}{0} & 1 & 2 & 3 & 4 & 5 & 6 \\
        \texttt{arr[i]} & \color{gray}{0} & 1 & 6 & 4 & 2 & 5 & 3 \\
    \bottomrule
    \end{tabular}
\end{center}$$

Naively, for every query, we can iterate through all entries from index $a$ to index $b$ to add them up. Since we have $Q$ queries and each query requires a maximum of $O(N)$ operations to calculate the sum, our total time complexity is $O(NQ)$. For most problems of this nature, the constraints will be $N, Q \leq 10^5$, so $NQ$ is on the order of $10^{10}$. This is not acceptable; it will almost always exceed the time limit.

Instead, we can use prefix sums to process these array sum queries. We designate a prefix sum array $\texttt{prefix}$. First, because we're 1-indexing the array, set $\texttt{prefix}[0]=0$, then for indices $k$ such that $1 \leq k \leq n$, define the prefix sum array as follows:

$$\texttt{prefix[k]}=\sum_{i=1}^{k} \texttt{arr[i]}$$

Basically, what this means is that the element at index $k$ of the prefix sum array stores the sum of all the elements in the original array from index $1$ up to $k$. This can be calculated easily in $O(N)$ by the following formula:

$$\texttt{prefix[k]}=\texttt{prefix[k-1]}+\texttt{arr[k]}$$

For the example case, our prefix sum array looks like this:


Now, when we want to query for the sum of the elements of $\texttt{arr}$ between (1-indexed) indices $L$ and $R$ inclusive, we can use the following formula:

$$\sum_{i=L}^{R} \text{\texttt{arr[i]}}
        = \sum_{i=1}^{R} \text{\texttt{arr[i]}} - \sum_{i=1}^{L-1} \text{\texttt{arr[i]}}$$
        
Using our definition of the elements in the prefix sum array, we have
$$
    \sum_{i=L}^{R} \text{\texttt{arr[i]}}
        = \text{\texttt{prefix[R]}}
            - \text{\texttt{prefix[L-1]}}
$$

Since we are only querying two elements in the prefix sum array, we can calculate subarray sums in $O(1)$ per query, which is much better than the $O(N)$ per query that we had before. Now, after an $O(N)$ preprocessing to calculate the prefix sum array, each of the $Q$ queries takes $O(1)$ time. Thus, our total time complexity is $O(N+Q)$, which should now pass the time limit.

Let's do an example query and find the subarray sum between indices $a = 2$ and $b = 5$, inclusive, in the 1-indexed $\texttt{arr}$. From looking at the original array, we see that this is 

$\sum_{i=2}^{5} \texttt{arr[i]} = 6 + 4 + 2 + 5 = 17$. 

(table)

Using prefix sums: Using prefix sums: $\text{\texttt{prefix[5]}} - \text{\texttt{prefix[1]}} = 18 - 1 = 17$. 


(table)

This technique is also known as *cumulative sum* or *partial sums*.

## USACO Silver Problems

Relatively straightforward.

 - [Breed Counting](http://www.usaco.org/index.php?page=viewproblem2&cpid=572)
 - [Subsequences Summing to Seven](http://www.usaco.org/index.php?page=viewproblem2&cpid=595)
 - [Hoof Paper Scissors](http://usaco.org/index.php?page=viewproblem2&cpid=691)
 - [Max Cross](http://usaco.org/index.php?page=viewproblem2&cpid=715)
 - [Homework](http://usaco.org/index.php?page=viewproblem2&cpid=762)

Now we'll look at some extensions.

## Max Subarray Sum

 - [CSES](https://cses.fi/problemset/task/1643)

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

Now, what if we wanted to process $Q$ queries for the sum over a subrectangle of a $N$ rows by $M$ columns matrix in two dimensions? Let's assume both rows and columns are 1-indexed, and we use the following matrix as an example:

(table)

Naively, each sum query would then take $O(NM)$ time, for a total of $O(QNM)$. This is too slow.

Let's take the following example region, which we want to sum:

(table)

Manually summing all the cells, we have a submatrix sum of $7+11+9+6+1+3 = 37$.

The first logical optimization would be to do one-dimensional prefix sums of each row. Then, we'd have the following row-prefix sum matrix. The desired subarray sum of each row in our desired region is simply the green cell minus the red cell in that respective row. We do this for each row, to get $(28-1) + (14-4) = 37$.

(table)

Now, if we wanted to find a submatrix sum, we could break up the submatrix into a subarray for each row, and then add their sums, which would be calculated using the prefix sums method described earlier. Since the matrix has $N$ rows, the time complexity of this is $O(QN)$. This is better, but still usually not fast enough.

To do better, we can do two-dimensional prefix sums. In our two dimensional prefix sum array, we have
$$
    \text{\texttt{prefix[a][b]}}
        = \sum_{i=1}^{a} \sum_{j=1}^{b} \text{\texttt{arr[i][j]}}$$
        
This can be calculated as follows for row index $1 \leq i \leq n$ and column index $1 \leq j \leq m$:
$$
    \text{\texttt{prefix[i][j]}}
        = \text{\texttt{prefix[i-1][j]}}
        + \text{\texttt{prefix[i][j-1]}}
        - \text{\texttt{prefix[i-1][j-1]}}
        + \text{\texttt{arr[i][j]}}$$
        + 
The submatrix sum between rows $a$ and $A$ and columns $b$ and $B$, can thus be expressed as follows:

$$
    \sum_{i=a}^{A} \sum_{j=b}^{B} \text{\texttt{arr[i][j]}}
        = \begin{multlined}[t]
            \text{\texttt{prefix[A][B]}}
            - \text{\texttt{prefix[a-1][B]}} \\
            - \text{\texttt{prefix[A][b-1]}}
            + \text{\texttt{prefix[a-1][b-1]}}
        \end{multlined}
$$

Summing the blue region from above using the 2d prefix sums method, we add the value of the green square, subtract the values of the red squares, and then add the value of the gray square. In this example, we have $65-23-6+1 = 37$, as expected.

(table)

Since no matter the size of the submatrix we are summing, we only need to access 4 values of the 2d prefix sum array, this runs in $O(1)$ per query after an $O(NM)$ preprocessing. This is fast enough.

 - [CSES Forest Queries](https://cses.fi/problemset/task/1652)
 - [USACO Painting the Barn (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=919)
 - [USACO Painting the Barn (Gold)](http://www.usaco.org/index.php?page=viewproblem2&cpid=923)
   - combine with max subarray sum!

## Prefix Minimum, XOR, etc.

Similar to prefix sums, you can also take prefix minimum or maximum; but *you cannot* answer min queries over an arbitrary range with prefix minimum. (This is because minimum doesn't have an inverse operation, the way subtraction is to addition.) On the other hand, XOR is its own inverse operation, meaning that the XOR of any number with itself is zero.

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

## Additional Problems

 - [CF Edu Round 60 C: Magic Ship](https://codeforces.com/problemset/problem/1117/C)
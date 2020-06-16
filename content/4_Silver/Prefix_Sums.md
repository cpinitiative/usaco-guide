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

todo convert the below to array because tabular isn't supported

```
\begin{center}
    \begin{tabular}{ c | c c c c c c c }
    \toprule
        Index $i$ & \color{gray}{0} & 1 & 2 & 3 & 4 & 5 & 6 \\
        \texttt{arr[i]} & \color{gray}{0} & 1 & 6 & 4 & 2 & 5 & 3 \\
    \bottomrule
    \end{tabular}
\end{center}
```

Naively, for every query, we can iterate through all entries from index $a$ to index $b$ to add them up. Since we have $Q$ queries and each query requires a maximum of $O(N)$ operations to calculate the sum, our total time complexity is $O(NQ)$. For most problems of this nature, the constraints will be $N, Q \leq 10^5$, so $NQ$ is on the order of $10^{10}$. This is not acceptable; it will almost always exceed the time limit.

Instead, we can use prefix sums to process these array sum queries. We designate a prefix sum array $\texttt{prefix}$. First, because we're 1-indexing the array, set $\texttt{prefix}[0]=0$, then for indices $k$ such that $1 \leq k \leq n$, define the prefix sum array as follows:

$$\texttt{prefix[k]}=\sum_{i=1}^{k} \texttt{arr[i]}$$

Basically, what this means is that the element at index $k$ of the prefix sum array stores the sum of all the elements in the original array from index $1$ up to $k$. This can be calculated easily in $O(N)$ by the following formula:

$$\texttt{prefix[k]}=\texttt{prefix[k-1]}+\texttt{arr[k]}$$

For the example case, our prefix sum array looks like this:


Now, when we want to query for the sum of the elements of $\texttt{arr}$ between (1-indexed) indices $L$ and $R$ inclusive, we can use the following formula:

$$\sum_{i=L}^{R} \texttt{arr[i]} = \sum_{i=1}^{R} \texttt{arr[i]} - \sum_{i=1}^{L-1} \texttt{arr[i]}$$
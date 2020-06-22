---
id: intro-nt
title: "Introductory Number Theory"
author: Darren Yao, Michael Cao
prerequisites:
 - Gold - Introduction to Dynamic Programming
description: Prime Factorization, GCD & LCM, Modular Arithmetic
---

## Additional Resources

 - CSES 21.1, 21.2
 - [CF CodeNCode](https://codeforces.com/blog/entry/77137)

## Prime Factorization

A number $a$ is called a **divisor** or a **factor** of a number $b$ if $b$ is divisible by $a$, which means that there exists some integer $k$ such that $b = ka$. Conventionally, $1$ and $n$ are considered divisors of $n$. A number $n > 1$ is **prime** if its only divisors are $1$ and $n$. Numbers greater than \(1\) that are not prime are **composite**.

Every number has a unique **prime factorization**: a way of decomposing it into a product of primes, as follows:
\[ n = {p_1}^{a_1} {p_2}^{a_2} \cdots {p_k}^{a_k} \]
where the $p_i$ are distinct primes and the $a_i$ are positive integers.

Now, we will discuss how to find the prime factorization of an integer.

(pseudocode)

This algorithm runs in $O(\sqrt{n})$ time, because the for loop checks divisibility for at most $\sqrt{n}$ values. Even though there is a while loop inside the for loop, dividing $n$ by $i$ quickly reduces the value of $n$, which means that the outer for loop runs less iterations, which actually speeds up the code.

Let's look at an example of how this algorithm works, for $n = 252$.

(table)

At this point, the for loop terminates, because $i$ is already 3 which is greater than $\lfloor \sqrt{7} \rfloor$. In the last step, we add $7$ to the list of factors $v$, because it otherwise won't be added, for a final prime factorization of $\{2, 2, 3, 3, 7\}$.


## GCD & LCM

The **greatest common divisor (GCD)** of two integers $a$ and $b$ is the largest integer that is a factor of both $a$ and $b$. In order to find the GCD of two numbers, we use the Euclidean Algorithm, which is as follows:

$$
\gcd(a, b) = \begin{cases}
     a & b = 0 \\
     \gcd(b, a \bmod b) & b \neq 0 \\
\end{cases}
$$

This algorithm is very easy to implement using a recursive function in Java, as follows:

```java
public int gcd(int a, int b){
    if(b == 0) return a;
    return gcd(b, a % b);
}
```

For C++, use the built-in `__gcd(a,b)`. Finding the GCD of two numbers can be done in $O(\log n)$ time, where $n = \min(a, b)$.

The **least common multiple (LCM)** of two integers $a$ and $b$ is the smallest integer divisible by both $a$ and $b$.

The LCM can easily be calculated from the following property with the GCD:

$$\operatorname{lcm}(a, b) = \frac{a \cdot b}{\gcd(a, b)}$$

If we want to take the GCD or LCM of more than two elements, we can do so two at a time, in any order. For example,

$$\gcd(a_1, a_2, a_3, a_4) = \gcd(a_1, \gcd(a_2, \gcd(a_3, a_4)))$$

## Modular Arithmetic

In **modular arithmetic**, instead of working with integers themselves, we work with their remainders when divided by $m$. We call this taking modulo $m$. For example, if we take $m = 23$, then instead of working with $x = 247$, we use $x \bmod 23 = 17$. Usually, $m$ will be a large prime, given in the problem; the two most common values are $10^9 + 7$, and $998\,244\,353$. Modular arithmetic is used to avoid dealing with numbers that overflow built-in data types, because we can take remainders, according to the following formulas:

```
todo no support for gather
$$
\begin{gather*}
    (a+b) \bmod m = (a \bmod m + b \bmod m) \bmod m \\
    (a-b) \bmod m = (a \bmod m - b \bmod m) \bmod m \\
    (a \cdot b) \pmod{m} = ((a \bmod m) \cdot (b \bmod m)) \bmod m \\
    a^b \bmod {m} = (a \bmod m)^b \bmod m
\end{gather*}
$$
```

### Modular Exponentiation

**Modular Exponentiation** can be used to efficently compute $x ^ n \mod m$. To do this, let's break down $x ^ n$ into binary components. For example, $5 ^ 10$ = $5 ^ {1010_2}$ = $5 ^ 8 \cdot 5 ^ 4$. Then, if we know $x ^ y$ for all $y$ which are powers of two ($x ^ 1$, $x ^ 2$, $x ^ 4$, $\dots$ , $x ^ {\lfloor{\log_2n} \rfloor}$, we can compute $x ^ n$ in $\mathcal{O}(\log n)$. Finally, since $x ^ y$ for some $y \neq 1$ equals $2 \cdot x ^ {y - 1}$, and $x$ otherwise, we can compute these sums efficently. To deal with $m$, observe that modulo doesn't affect multiplications, so we can directly implement the above "binary exponentiation" algorithm while adding a line to take results$\mod m$.

Here is C++ code to compute $x ^ n \mod m$:
(not tested)
```cpp
long long binpow(long long x, long long n, long long m) {
    x %= m;
    long long res = 1;
    while (n > 0) {
        if (n % 2 == 1) //if n is odd
            res = res * x % m;
        x = x * x % m;
        n >>= 1; //divide by two
    }
    return res;
}
```

### Modular Inverse

Under a prime moduli, division exists.

## Problems

 - USACO
   - Both are also Knapsack DP problems.
   - [Cow Poetry](http://usaco.org/index.php?page=viewproblem2&cpid=897)
     - First consider the case where there are only two lines with the same class.
     - Requires fast modular exponentiation for full credit.
   - [Exercise](http://www.usaco.org/index.php?page=viewproblem2&cpid=1043)
     - Prime factorization
 - Other
   - [CF VK Cup 2012 Wildcard Round 1 C](https://codeforces.com/problemset/problem/162/C)

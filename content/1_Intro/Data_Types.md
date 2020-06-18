---
id: data-types
title: Data Types
author: Darren Yao
description: Learn about the basic data types needed for competitive programming.
---

<module-excerpt>

There are several main **data types** that are used in contests: 32-bit and 64-bit integers, floating point numbers, booleans, characters, and strings.

</module-excerpt>

## Reading

 - CPH 1.1 - 1.3
 
The **32-bit integer** supports values between $-2\,147\,483\,648$ and $2\,147\,483\,647$, which is roughly equal to $\pm$ $2 \times 10^9$. If the input, output, or \textit{any intermediate values used in calculations} exceed the range of a 32-bit integer, then a **64-bit integer** must be used. The range of the 64-bit integer is between $-9\,223\,372\,036\,854\,775\,808$ and $9\,223\,372\,036\,854\,775\,807$ which is roughly equal to $\pm$ $9 \times 10^{18}$. Contest problems are usually set such that the 64-bit integer is sufficient. If it's not, the problem will ask for the answer modulo $m$, instead of the answer itself, where $m$ is a prime. In this case, make sure to use 64-bit integers, and take the remainder of $x$ modulo $m$ after every step using `x %= m;`.
 
**Floating point numbers** are used to store decimal values. It is important to know that floating point numbers are not exact, because the binary architecture of computers can only store decimals to a certain precision. Hence, we should always expect that floating point numbers are slightly off. Contest problems will accommodate this by either asking for the greatest integer less than $10^k$ times the value, or will mark as correct any output that is within a certain $\epsilon$ of the judge's answer.

**Boolean** variables have two possible states: `true` and `false`. We'll usually use booleans to mark whether a certain process is done, and arrays of booleans to mark which components of an algorithm have finished.

**Character** variables represent a single Unicode character. They are returned when you access the character at a certain index within a string. Characters are represented using the ASCII standard, which assigns each character to a corresponding integer. This allows us to do arithmetic with them; for example, both `cout << ('f' - 'a');` in C++ and `System.out.print('f' - 'a');` in Java will print `5`.

**Strings** are stored as an array of characters. You can easily access the character at a certain index and take substrings of the string. String problems on USACO Bronze or Silver generally don't involve any special data structures.
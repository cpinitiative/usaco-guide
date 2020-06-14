---
slug: /silver/sorting
title: "Sorting"
author: Siyong (WIP)
order: 3
prerequisites: 
 - 
     - Silver - Containers
---
<div class="syllabus-only">
  Description: Todo
</div>

 - Sorting
 - Comparators (C++)
 - Coordinate Compression

<!-- END DESCRIPTION -->

<!--
TODO List:

 - Check sorting algorithms websites (I just googled and copied top link)
 - Improve Library Sorting: (maybe link actual website instead of documentation)
 - Quickly go over stable sort?
 - CPP Custom Comparators
   - Test sample code
 - Java Custom Comparators
   - All
 - Python Custom Comparators
   - Potentially explain use in stl data structures
 - Coordinate Compression
-->

# Sorting

Sorting is exactly what it sounds like: arranging items in some particular order. 

## Sorting Algorithms

There are many sorting algorithms, here are some sources to learn about the popular ones:
 - [Bubble Sort](https://www.freecodecamp.org/news/bubble-sort/)
 - [Quicksort](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b)
 - [Mergesort](https://www.geeksforgeeks.org/merge-sort/)

## Library Sorting

 - Cpp: [std::sort documentation](https://en.cppreference.com/w/cpp/algorithm/sort)
 - Java: [Arrays.sort documentation](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html#sort(java.lang.Object[]))
 - Python: [sorted documentation](https://docs.python.org/3/howto/sorting.html)

Problems:
 - [Counting Haybales (Easy)](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)

## Custom Comparators

*Custom comparators* define how the elements are ordered.

This section is very language-specific and will be separated for cpp, java, and python.

### Cpp

This section explains how to implement custom comparators in c++

Side note: In c++, a comparator must return false for two identical objects (not doing so results in undefined behavior and potentially RTE)

#### Comparators for Sorting

There are 2 main ways to have a custom comparator in c++

Type 1) Overloading operator
 - Pro:
   - This is the easiest to implement
   - Easy to work with STL
 - Con:
   - Only works for objects (not primitives)
   - Only supports two types of comparisons (less than (<) and greater than (>))

```cpp
// UNTESTED
struct foo
{
	int x;

	bool operator < (const foo& o) const {return x < o.x;}
};
int main()
{
	foo a[N];
	sort(a, a+N);
}
```

Type 2) Function
 - Pro:
   - Works for both objects and primitives
   - Supports many different comparators for the same object
 - Con:
   - More difficult to implement
   - Extra care needs to be taken to support STL

```cpp
// UNTESTED
struct foo
{
	int x;
};
bool cmp(const foo& a, const foo& b)
{
	return a.x < b.x;
}
//Alternatively (require c++11):
auto cmp2 = [](const foo& a, const foo& b){return a.x<b.x;};
int main()
{
	foo a[N];
	//The following 3 all work
	sort(a, a+N, cmp);
	sort(a, a+N, cmp2);
	sort(a, a+N, [](const foo& a, const foo& b){return a.x<b.x;});
}
```

#### Comparators for STL

Operator overloading works as expected for using in STL. If you are sorting elements in reverse order, you can use the STL `greater` comparator ([click for documentation](https://en.cppreference.com/w/cpp/utility/functional/greater)) instead.

For function comparators, some extra care needs to be taken:

```cpp
struct foo
{
	//members
};
auto cmp = [](const foo& a, const foo& b){return /*comparator function*/;};

set<foo, decltype(cmp)> Set(cmp);//pass the comparator as a parameter
priority_queue<foo, vector<foo>, decltype(cmp)> pq(cmp);
//Side Note: priority queue is sorted in REVERSE order (largest elements are first)
map<foo, bar, decltype(cmp)> Map(cmp);
```

#### Example of Comparators for Primitives

Since you cannot overload operators for primitives, you must use custom comparators

<!-- The following code snip is tested -->
```cpp
const int N = 8;
int a[N], b[N] = {4,8,2,3,4,1,2,4};
int main()
{
	printf("--- Comparator 1 ---\n");
	iota(a, a+N, 0);
	sort(a, a+N, greater<int>());
	//sort a in decreasing order
	for(int i=0;i<N;++i) printf("a[%d] = %d\n", i, a[i]);
	printf("--- Comparator 2 ---\n");
	iota(a, a+N, 0);
	sort(a, a+N, [](int x, int y){return b[x]<b[y]||(b[x]==b[y]&&x>y);});
	//sort a by increasing values of b[i], breaking ties by decreasing index
	for(int i=0;i<N;++i) printf("a[%d] = %d: b[%d] = %d\n", i, a[i], a[i], b[a[i]]);
}
```
Output:
```
--- Comparator 1 ---
a[0] = 7
a[1] = 6
a[2] = 5
a[3] = 4
a[4] = 3
a[5] = 2
a[6] = 1
a[7] = 0
--- Comparator 2 ---
a[0] = 5: b[5] = 1
a[1] = 6: b[6] = 2
a[2] = 2: b[2] = 2
a[3] = 3: b[3] = 3
a[4] = 7: b[7] = 4
a[5] = 4: b[4] = 4
a[6] = 0: b[0] = 4
a[7] = 1: b[1] = 8
```
Comments: Comparator 1 sorts array $a$ in decreasing order. Comparator 2 sorts array $a$ in increasing $b[a[i]]$ value, breaking ties with decreasing index

### Java

 - See chapter 8 of [Darren Yao's book](http://darrenyao.com/usacobook/java.pdf)

### Python

#### Comparator in Sorting

There are two main ways to implement a custom comparator in python

Type 1) Operator Overloading
 - Overloads operators
<!-- Tested -->
```py
class Foo:
	def __init__(self, x): self.x = x
	def __str__(self): return "Foo({})".format(self.x)
	def __lt__(self, o): # lt means less than
		return self.x < o.x

a = []
for i in range(8):
	a.append(Foo(random.randint(1, 10)))
print(*a)
print(*sorted(a))
```
Output:
```
Foo(4) Foo(1) Foo(1) Foo(4) Foo(9) Foo(7) Foo(1) Foo(1)
Foo(1) Foo(1) Foo(1) Foo(1) Foo(4) Foo(4) Foo(7) Foo(9)
```

Type 2) Function/Lambda

 - This method defines how to compare two elements represented by an integer
   - Positive: First term is greater than the second term
   - Zero: First term and second term are equal
   - Negative: First term is less than the second term
<!-- Tested -->
```py
from functools import cmp_to_key
class Foo:
	def __init__(self, x): self.x = x
	def __str__(self): return "Foo({})".format(self.x)

a = []
for i in range(8):
	a.append(Foo(random.randint(1, 10)))
print(*a)

print(*sorted(a, key=cmp_to_key(lambda x,y: x.x - y.x)))
def cmp(x, y):
	return x.x - y.x
print(*sorted(a, key=cmp_to_key(cmp)))
```
Output:
```
Foo(8) Foo(9) Foo(2) Foo(3) Foo(5) Foo(5) Foo(9) Foo(9)
Foo(2) Foo(3) Foo(5) Foo(5) Foo(8) Foo(9) Foo(9) Foo(9)
Foo(2) Foo(3) Foo(5) Foo(5) Foo(8) Foo(9) Foo(9) Foo(9)
```

Type 3) Mapping

 - This method maps an object to another comparable object. In this case, `Foo` is defined to be compared by the sum of its members `x` and `y`.
<!-- Tested -->
```py
class Foo:
	def __init__(self, x, y): self.x,self.y = x,y
	def __str__(self): return "Foo({},{})".format(self.x, self.y)

a = []
for i in range(8):
	a.append(Foo(random.randint(1, 9)*10, random.randint(1, 9)))
print(*a)

print(*sorted(a, key=lambda x: x.x+x.y))
def remap(x):
	return x.x + x.y
print(*sorted(a, key=remap))
```
Output:
```
Foo(50,8) Foo(80,2) Foo(70,5) Foo(80,1) Foo(90,6) Foo(60,1) Foo(90,3) Foo(20,5)
Foo(20,5) Foo(50,8) Foo(60,1) Foo(70,5) Foo(80,1) Foo(80,2) Foo(90,3) Foo(90,6)
Foo(20,5) Foo(50,8) Foo(60,1) Foo(70,5) Foo(80,1) Foo(80,2) Foo(90,3) Foo(90,6)
```

## Coordinate Compression

-------- Other stuff --------

 - Comparators
 - CPH 3
 - std::sort / Collections.sort
 - coord compress



 - [Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)
 - [Breaking Java Arrays.sort()](https://codeforces.com/blog/entry/4827)
   - no longer works, see [this one](https://codeforces.com/contest/1324/submission/73058869) instead

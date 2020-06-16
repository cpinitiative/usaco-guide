---
id: sorting
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
   - All (currently just pointing to darren's book)
 - Python Custom Comparators
   - Potentially explain use in stl data structures
 - Coordinate Compression
-->

**Sorting** is exactly what it sounds like: arranging items in some particular order. 

<!-- END DESCRIPTION -->

## Sorting Algorithms

There are many sorting algorithms, here are some sources to learn about the popular ones:

 - [Bubble Sort](https://www.freecodecamp.org/news/bubble-sort/)
 - [Quicksort](https://medium.com/karuna-sehgal/a-quick-explanation-of-quick-sort-7d8e2563629b)
 - [Mergesort](https://www.geeksforgeeks.org/merge-sort/)

(why are these important?)

## Library Sorting

 - [C++ - std::sort](https://en.cppreference.com/w/cpp/algorithm/sort)
 - Java: [Arrays.sort documentation](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html#sort(java.lang.Object[]))
 - Python: [sorted documentation](https://docs.python.org/3/howto/sorting.html)

Problems:
 - [Counting Haybales (Easy)](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)

## Custom Comparators

(mention in context of http://www.usaco.org/index.php?page=viewproblem2&cpid=992)

*Custom comparators* define how the elements are ordered.

This section is very language-specific and will be separated by language.

### C++

Side note: In C++, a comparator must return false for two identical objects (not doing so results in undefined behavior and potentially RTE)

#### Comparators for Sorting

There are 2 main ways to have a custom comparator in c++

Type 1) Overloading operator
 - Pro:
   - This is the easiest to implement
   - Easy to work with STL
 - Con:
   - Only works for objects (not primitives)
   - Only supports two types of comparisons (less than (<) and greater than (>))

<!-- Tested -->
```cpp
struct Foo
{
	int Bar;
	Foo(int _Bar=-1):Bar(_Bar){}
	bool operator < (const Foo& foo2) const {return Bar < foo2.Bar;}
};
const int N = 8;
int main()
{
	Foo a[N];
	for(int i=0;i<N;++i) a[i] = Foo(randint(0, 20));
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
	sort(a, a+N);
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
}
```
Output:
```
(Foo:  3) (Foo: 18) (Foo: 13) (Foo:  5) (Foo: 18) (Foo:  3) (Foo: 15) (Foo:  0) 
(Foo:  0) (Foo:  3) (Foo:  3) (Foo:  5) (Foo: 13) (Foo: 15) (Foo: 18) (Foo: 18) 
```

Type 2) Function
 - Pro:
   - Works for both objects and primitives
   - Supports many different comparators for the same object
 - Con:
   - More difficult to implement
   - Extra care needs to be taken to support STL

<!-- Tested -->
```cpp
struct Foo
{
	int Bar;
	Foo(int _Bar=-1):Bar(_Bar){}
};
const int N = 8;
Foo a[N];
bool cmp1(Foo foo1, Foo foo2) {return foo1.Bar < foo2.Bar;}
auto cmp2 = [](Foo foo1, Foo foo2) {return foo1.Bar < foo2.Bar;};//requires c++11 or above
int main()
{
	printf("--- Method 1 ---\n");
	for(int i=0;i<N;++i) a[i] = Foo(randint(0, 20));
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
	sort(a, a+N, [](Foo foo1, Foo foo2){return foo1.Bar<foo2.Bar;});//requires c++11 or above
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");

	printf("--- Method 2 ---\n");
	for(int i=0;i<N;++i) a[i] = Foo(randint(0, 20));
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
	sort(a, a+N, cmp1);
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");

	printf("--- Method 3 ---\n");
	for(int i=0;i<N;++i) a[i] = Foo(randint(0, 20));
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
	sort(a, a+N, cmp2);
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
}
```
Output:
```
--- Method 1 ---
(Foo:  3) (Foo: 18) (Foo: 13) (Foo:  5) (Foo: 18) (Foo:  3) (Foo: 15) (Foo:  0) 
(Foo:  0) (Foo:  3) (Foo:  3) (Foo:  5) (Foo: 13) (Foo: 15) (Foo: 18) (Foo: 18) 
--- Method 2 ---
(Foo:  5) (Foo: 13) (Foo: 18) (Foo:  0) (Foo:  9) (Foo:  4) (Foo:  2) (Foo: 15) 
(Foo:  0) (Foo:  2) (Foo:  4) (Foo:  5) (Foo:  9) (Foo: 13) (Foo: 15) (Foo: 18) 
--- Method 3 ---
(Foo:  1) (Foo:  1) (Foo: 18) (Foo:  0) (Foo: 11) (Foo: 12) (Foo:  1) (Foo:  5) 
(Foo:  0) (Foo:  1) (Foo:  1) (Foo:  1) (Foo:  5) (Foo: 11) (Foo: 12) (Foo: 18) 
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
 - [Breaking Java Arrays.sort()](https://codeforces.com/blog/entry/4827)
   - no longer works, see [this one](https://codeforces.com/contest/1324/submission/73058869) instead

### Python

#### Comparator in Sorting

There are two main ways to implement a custom comparator in python

Type 1) Operator Overloading
 - Overloads operators
<!-- Tested -->
```py
class Foo:
	def __init__(self, _Bar): self.Bar = _Bar
	def __str__(self): return "Foo({})".format(self.Bar)
	def __lt__(self, o): # lt means less than
		return self.Bar < o.Bar

a = []
for i in range(8):
	a.append(Foo(random.randint(1, 10)))
print(*a)
print(*sorted(a))
```
Output:
```
Foo(0) Foo(1) Foo(2) Foo(1) Foo(9) Foo(5) Foo(5) Foo(8)
Foo(0) Foo(1) Foo(1) Foo(2) Foo(5) Foo(5) Foo(8) Foo(9)
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
	def __init__(self, _Bar): self.Bar = _Bar
	def __str__(self): return "Foo({})".format(self.Bar)

a = []
for i in range(8):
	a.append(Foo(random.randint(0, 9)))
print(*a)

print(*sorted(a, key=cmp_to_key(lambda foo1, foo2: foo1.Bar - foo2.Bar)))
def cmp(foo1, foo2):
	return foo1.Bar - foo2.Bar
print(*sorted(a, key=cmp_to_key(cmp)))
```
Output:
```
Foo(0) Foo(1) Foo(2) Foo(1) Foo(9) Foo(5) Foo(5) Foo(8)
Foo(0) Foo(1) Foo(1) Foo(2) Foo(5) Foo(5) Foo(8) Foo(9)
Foo(0) Foo(1) Foo(1) Foo(2) Foo(5) Foo(5) Foo(8) Foo(9)
```

Type 3) Remapping Key

 - This method maps an object to another comparable datatype with which to be sorted. In this case, `Foo` is sorted by the sum of its members `x` and `y`.
<!-- Tested -->
```py
class Foo:
	def __init__(self, _Bar, _Baz): self.Bar,self.Baz = _Bar,_Baz
	def __str__(self): return "Foo({},{})".format(self.Bar, self.Baz)

a = []
for i in range(8):
	a.append(Foo(random.randint(1, 9)*10, random.randint(1, 9)))
print(*a)

print(*sorted(a, key=lambda foo: foo.Bar+foo.Baz))
def key(foo):
	return foo.Bar + foo.Baz
print(*sorted(a, key=key))
```
Output:
```
Foo(10,2) Foo(30,2) Foo(60,6) Foo(90,7) Foo(80,7) Foo(80,9) Foo(60,9) Foo(90,8)
Foo(10,2) Foo(30,2) Foo(60,6) Foo(60,9) Foo(80,7) Foo(80,9) Foo(90,7) Foo(90,8)
Foo(10,2) Foo(30,2) Foo(60,6) Foo(60,9) Foo(80,7) Foo(80,9) Foo(90,7) Foo(90,8)
```

## Coordinate Compression

 - CPH 3
 - coord compress


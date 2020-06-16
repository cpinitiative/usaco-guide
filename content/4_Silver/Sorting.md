---
id: sorting
title: "Sorting"
author: Siyong (WIP)
prerequisites: 
 - 
     - Bronze - Data Structures
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
 - Improve Library Sorting: (maybe link actual website instead of documentation)
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
 - [Bubble Sort](https://www.hackerrank.com/challenges/ctci-bubble-sort/problem)
    - [Out of Sorts (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=834)
 - [Quicksort](https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/)
 - [Mergesort](https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/tutorial/)

## Library Sorting
 - C++: 
    - [std::sort Documentation](https://en.cppreference.com/w/cpp/algorithm/sort)
    - [C++ Tricks (First Two Related To Sorting)](https://codeforces.com/blog/entry/74684)
    - [std::stable\_sort documentation](http://www.cplusplus.com/reference/algorithm/stable_sort/)
 - Java:
    - [Arrays.sort Documentation](https://docs.oracle.com/javase/7/docs/api/java/util/Arrays.html#sort(java.lang.Object[]))
 - Python:
    - [Sorted Documentation](https://docs.python.org/3/howto/sorting.html)

Problems:
 - [Counting Haybales (Easy)](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)
 - [Mooyo Mooyo](http://www.usaco.org/index.php?page=viewproblem2&cpid=860)
    - Not a sorting problem, but you can use sorting to simulate gravity nicely.
        - Write a custom comparator (read below) which puts zeroes at the front and use stable_sort to keep the relative order of other elements the same.

## Custom Comparators

*Custom comparators* define how the elements are ordered.
    - [Wormhole Sort (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=992)

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
Java has built-in functions for sorting: `Arrays.sort(arr)` for arrays, and `Collections.sort(list)` for `ArrayLists`. However, if we use custom objects, or if we want to sort elements in a different order, then we'll need to use a `Comparator`.`

Normally, sorting functions rely on moving objects with a lower value ahead of objects with a higher value if sorting in ascending order, and vice versa if in descending order. This is done through comparing two objects at a time. What a `Comparator` does is compare two objects as follows, based on our comparison criteria:
- If object $x$ is less than object $y$, return a negative number
- If object $x$ is greater than object $y$, return a positive number
- If object $x$ is equal to object $y$, return 0.

In addition to returning the correct number, comparators should also satisfy the following conditions:
- The function must be consistent with respect to reversing the order of the arguments: if $compare(x, y)$ is positive, then $compare(y, x)$ should be negative and vice versa.
- The function must be transitive. If $compare(x, y) > 0$ and $compare(y, z) > 0$, then $compare(x, z) > 0$. Same applies if the compare functions return negative numbers.
- Equality must be consistent. If $compare(x, y) = 0$, then $compare(x, z)$ and $compare(y, z)$ must both be positive, both negative, or both zero. Note that they don't have to be equal, they just need to have the same sign.

Java has default functions for comparing `int`, `long`, `double` types. The `Integer.compare()`, `Long.compare()`, and `Double.compare()` functions take two arguments $x$ and $y$ and compare them as described above.

Now, there are two ways of implementing this in Java: `Comparable`, and `Comparator`. They essentially serve the same purpose, but `Comparable` is generally easier and shorter to code. `Comparable` is a function implemented within the class containing the custom object, while \mintinline{java}{Comparator} is its own class. For our example, we'll use a `Person` class that contains a person's height and weight, and sort in ascending order by height.

If we use `Comparable`, we'll need to put `implements Comparable<Person>` into the heading of the class. Furthermore, we'll need to implement the `compareTo` method. Essentially, `compareTo(x)` is the `compare` function that we described above, with the object itself as the first argument, or `compare(self, x)`.

```java
static class Person implements Comparable<Person>{
    int height, weight;
    public Person(int h, int w){
        height = h; weight = w;
    }
    public int compareTo(Person p){
        return Integer.compare(height, p.height);
    }
}
```
When using Comparable, we can just call `Arrays.sort(arr)` or `Collections.sort(list)` on the array or list as usual.

If instead we choose to use `Comparator`, we'll need to declare a second `Comparator` class, and then implement that:

```java
static class Person{
    int height, weight;
    public Person(int h, int w){
        height = h; weight = w;
    }
}
static class Comp implements Comparator<Person>{
    public int compare(Person a, Person b){
        return Integer.compare(a.height, b.height);
    }
}
```
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

Another useful application of sorting is coordinate compression, which takes some points and reassigns them to remove wasted space. Let's consider the USACO Silver problem Counting Haybales:

Farmer John has just arranged his $N$ haybales $(1\le N \le 100,000)$ at various points along the one-dimensional road running across his farm. To make sure they are spaced out appropriately, please help him answer Q queries $(1 \le Q \le 100,000)$, each asking for the number of haybales within a specific interval along the road.

However, each of the points are in the range $0 \ldots 1,000,000,000$, meaning you can't store locations of haybales in, for instance, a boolean array. However, let's place all of the locations of the haybales and the locations of queries into a list and sort it.

Now, we can map distinct points to smaller integers without gaps. For example, if the haybales existed at positions $[1, 4, 5, 9]$ and queries were $1, 2$ and $4, 6$, we can place the integers together and map them from $[1, 2, 4, 5, 6, 9] \rightarrow [1, 2, 3, 4, 5, 6]$. This effectively transforms the haybale positions into $[1, 3, 4, 6]$ and the queries into $1, 2$ and $3, 5$.

By compressing queries and haybale positions, we've transformed the range of points to $0 \ldots N + 2Q$, allowing us to store prefix sums to effectively query for the number of haybales in a range.


### Problems and Other Tutorials 
    
 - CPH 3 (once again, very good)
 - [Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)
 - [Meetings (Hard!)](http://www.usaco.org/index.php?page=viewproblem2&cpid=967)
 - [Breaking Java Arrays.sort()](https://codeforces.com/blog/entry/4827)
   - no longer works, see [this one](https://codeforces.com/contest/1324/hacks/625031/test) instead.
   - to avoid getting hacked, [shuffle](https://pastebin.com/k6gCRJDv) the array beforehand.


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
 - CPP Custom Comparators
   - Example for Primitives
   - Test sample code
 - Java Custom Comparators
   - All
 - Python Custom Comparators
   - All
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

This section will be separated for cpp, java, and python

### Cpp

There are a few ways to implement custom comparators in C++. Chapter 8 of [Darren Yao's book](http://darrenyao.com/usacobook/cpp.pdf) has a good explanation, but comparators will be explained here as well.

Side note: A comparator must return false for two identical objects (not doing so results in undefined behavior and potentially RTE)

#### Comparators for Sorting

1) Overloading operator
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

2) Function
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
priority_queue<foo, vector<foo>, decltype(cmp)> pq(cmp);//IMPORTANT: priority queue is sorted in REVERSE order (largest elements are first)
map<foo, bar, decltype(cmp)> Map(cmp);
```

### Java

 - See chapter 8 of [Darren Yao's book](http://darrenyao.com/usacobook/java.pdf)

### Python

 WIP!

## Coordinate Compression

-------- Other stuff --------

 - Comparators
 - CPH 3
 - std::sort / Collections.sort
 - coord compress



 - [Counting Haybales](http://www.usaco.org/index.php?page=viewproblem2&cpid=666)
 - [Breaking Java Arrays.sort()](https://codeforces.com/blog/entry/4827)
   - no longer works, see [this one](https://codeforces.com/contest/1324/submission/73058869) instead

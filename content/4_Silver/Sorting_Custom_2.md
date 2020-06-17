---
id: sorting-cpp
title: "More on Sorting in C++"
author: Siyong Huang, Michael Cao, Darren Yao, Benjamin Qi
prerequisites: 
 - 
     - Bronze - Introduction to Graphs
 - 
     - Silver - Sorting with Custom Comparators
---

More information about sorting with custom comparators in C++. Some overlap with the previous article.

<!-- END DESCRIPTION -->

## Additional Resources

 - [fushar (C++)](http://fusharblog.com/3-ways-to-define-comparison-functions-in-cpp/)

## An Example with Graphs

Consider a graph with weighted edges (pairs of values), such as in the problem [Wormhole Sort (Silver)](http://www.usaco.org/index.php?page=viewproblem2&cpid=992). There are multiple ways to solve this problem, but all of them start by sorting the edges in nondecreasing order of weight. If we only stored the edge weights and sorted them, we would have a sorted list of edge weights, but it would be impossible to tell which weights corresponded to which edges. However, if we create a class representing the edges and define a custom comparator to sort them by weight, we can sort the edges in ascending order while also keeping track of their endpoints.

## Comparators for Sorting

There are 2 main ways to have a custom comparator in c++.

### Overloading Operator

[Why const T&?](https://stackoverflow.com/questions/11805322/why-should-i-use-const-t-instead-of-const-t-or-t)

 - Pro:
   - This is the easiest to implement
   - Easy to work with STL
 - Con:
   - Only works for objects (not primitives)
   - Only supports two types of comparisons (less than (<) and greater than (>))

<!-- Tested -->
```cpp
#include <bits/stdc++.h>
using namespace std;
int randint(int low, int high) {return low+rand()%(high-low);}

struct Foo
{
	int Bar;
	Foo(int _Bar=-1):Bar(_Bar){}
	bool operator < (const Foo& foo2) const {return Bar < foo2.Bar;}
};
const int N = 8;
int main()
{
	srand(69);
	Foo a[N];
	for(int i=0;i<N;++i) a[i] = Foo(randint(0, 20));
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
	sort(a, a+N);
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
}

/**
Output:
(Foo:  3) (Foo: 18) (Foo: 13) (Foo:  5) (Foo: 18) (Foo:  3) (Foo: 15) (Foo:  0) 
(Foo:  0) (Foo:  3) (Foo:  3) (Foo:  5) (Foo: 13) (Foo: 15) (Foo: 18) (Foo: 18) 
*/
```

In the context of Wormhole Sort (uses [friend](https://www.geeksforgeeks.org/friend-class-function-cpp/)):

```cpp
#include <bits/stdc++.h>
using namespace std;

struct Edge {
	int a,b,w;
	friend bool operator<(const Edge& x, const Edge& y) { return x.w < y.w; }
}; // a different way to write less than

int main() {
	int M = 4;
	vector<Edge> v;
	for (int i = 0; i < M; ++i) {
		int a,b,w; cin >> a >> b >> w;
		v.push_back({a,b,w});
	}
	sort(begin(v),end(v));
	for (Edge e: v) cout << e.a << " " << e.b << " " << e.w << "\n";
}

/*
Input:
1 2 9
1 3 7
2 3 10
2 4 3
*/

/*
Output:
2 4 3
1 3 7
1 2 9
2 3 10
*/
```

### Function

 - Pro:
   - Works for both objects and primitives
   - Supports many different comparators for the same object
 - Con:
   - More difficult to implement
   - Extra care needs to be taken to support STL

We can also use [lambda expressions](https://www.geeksforgeeks.org/lambda-expression-in-c/) in C++11 or above.

<!-- Tested -->

```cpp
#include <bits/stdc++.h>
using namespace std;
int randint(int low, int high) {return low+rand()%(high-low);}

struct Foo
{
	int Bar;
	Foo(int _Bar=-1):Bar(_Bar){}
};
const int N = 8;
Foo a[N];
bool cmp1(Foo foo1, Foo foo2) {return foo1.Bar < foo2.Bar;}
function<bool(Foo,Foo)> cmp2 = [](Foo foo1, Foo foo2) {return foo1.Bar < foo2.Bar;}; // lambda expression
// bool(Foo,Foo) means that the function takes in two parameters of type Foo and returns bool
// "function<bool(Foo,Foo)>"" can be replaced with "auto"

int main()
{
	srand(69);

	printf("--- Method 1 ---\n");
	for(int i=0;i<N;++i) a[i] = Foo(randint(0, 20));
	for(int i=0;i<N;++i) printf("(Foo: %2d) ", a[i].Bar); printf("\n");
	sort(a, a+N, [](Foo foo1, Foo foo2){return foo1.Bar<foo2.Bar;}); // lambda expression
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

In the context of Wormhole Sort:

```cpp
#include <bits/stdc++.h>
using namespace std;

struct Edge { int a,b,w; };

int main() {
	int M = 4;
	vector<Edge> v;
	for (int i = 0; i < M; ++i) {
		int a,b,w; cin >> a >> b >> w;
		v.push_back({a,b,w});
	}
	sort(begin(v),end(v),[](const Edge& x, const Edge& y) { return x.w < y.w; });
	for (Edge e: v) cout << e.a << " " << e.b << " " << e.w << "\n";
}
```

### Comparators for STL

Operator overloading works as expected for using in STL. If you are sorting elements in reverse order, you can use the STL [greater](https://en.cppreference.com/w/cpp/utility/functional/greater) comparator instead.

For function comparators, some extra care needs to be taken:

<!-- Reasonably Tested -->
```cpp
struct foo
{
	//members
};
auto cmp1 = [](const foo& a, const foo& b){return /*comparator function*/;};
//This way is shorter to write, but don't forget to pass the comparator as a parameter in the constructor!
//If you need to create an array of the objects, I would either use pointers of the method shown below
set<foo, decltype(cmp1)> Set1(cmp1);
priority_queue<foo, vector<foo>, decltype(cmp1)> pq1(cmp1);
//Side Note: priority queue is sorted in REVERSE order (largest elements are first)
map<foo, bar, decltype(cmp1)> Map1(cmp1);


struct cmp2
{
	bool operator () (const foo& a, const foo& b){return /*comparator function*/;}
};
//Here you do not need to pass the comparator as a parameter
//This makes it easier to create arrays of stl objects
set<foo, cmp2> Set2;
priority_queue<foo, vector<foo>, cmp2> pq2;
map<foo, bar, cmp2> Map2;
set<foo, cmp2> Set2b[100];//array of sets with the comparator
```

### Example of Comparators for Primitives

Since you cannot overload operators for primitives, you must use custom comparators.

<!-- Tested -->
```cpp
#include <bits/stdc++.h>
using namespace std;

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

/*
Output:
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
*/
```

Comments: Comparator 1 sorts array $a$ in decreasing order. Comparator 2 sorts array $a$ in increasing $b[a[i]]$ value, breaking ties by placing the greater index first.

## Sorting Pairs

An alternative way of representing custom objects is with the data structure `pair<int, int>`. In the above example, instead of creating a `struct`, we can simply declare an array of pairs. The sort function automatically uses the first element of the pair for comparison and the second element as a secondary point of comparison:

```cpp
pair<int, int> arr[N];

int main() {
    sort(arr, arr+N);
} 
```

There is no need to create a custom comparator.

```cpp
#include <bits/stdc++.h>
using namespace std;

#define f first
#define s second

int main() {
	int M = 4;
	vector<pair<int,pair<int,int>>> v;
	for (int i = 0; i < M; ++i) {
		int a,b,w; cin >> a >> b >> w;
		v.push_back({w,{a,b}});
	}
	sort(begin(v),end(v));
	for (auto e: v) cout << e.s.f << " " << e.s.s << " " << e.f << "\n";
}
```

---
slug: /intro/problems
title: Introductory Problems
author: Nathan Wang
problems:
 - bronze_promote
 - bronze_word
 - bronze_paint
 - bronze_square
order: 5
---

Demonstrates how to read in input and print output for a USACO problem in multiple languages. Also lists some introductory USACO Bronze problems.

<!-- END DESCRIPTION -->

## [Fence Painting](http://usaco.org/index.php?page=viewproblem2&cpid=567)

(link to USACO website stuff?)

(auto newlines)

### C++

#### Method 1

Use [freopen](http://www.cplusplus.com/reference/cstdio/freopen/). If you comment out both of the lines containing `freopen` then the program reads from standard in and writes to standard out as usual.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	freopen("paint.in","r",stdin); // reuse standard in to read from "paint.in"
	freopen("paint.out","w",stdout); // reuse standard out to write to "paint.out"
	vector<bool> cover(100);
	int a, b, c, d; cin >> a >> b >> c >> d;
	for (int i = a; i < b; ++i) cover[i] = 1;
	for (int i = c; i < d; ++i) cover[i] = 1;
	int ans = 0; 
	for (int i = 0; i < 100; ++i) ans += cover[i];
	cout << ans;
}
```

#### Method 2

Use [ifstream & ofstream](http://www.cplusplus.com/doc/tutorial/files/).

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
	ifstream fin("paint.in");
	ofstream fout("paint.out");
	vector<bool> cover(100);
	int a, b, c, d; fin >> a >> b >> c >> d;
	for (int i = a; i < b; ++i) cover[i] = 1;
	for (int i = c; i < d; ++i) cover[i] = 1;
	int ans = 0; 
	for (int i = 0; i < 100; ++i) ans += cover[i];
	fout << ans;
}
```

### Java

(link?)

(Scanner?)

(FastScanner?)

Class name can be whatever you want.

```java
import java.io.*;
import java.util.*;
public class paintSol { must be declared in paintSol.java
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new FileReader("paint.in"));
		PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("paint.out")));
		int[] cover = new int[100];

		StringTokenizer st = new StringTokenizer(br.readLine());
		int a = Integer.parseInt(st.nextToken()), b = Integer.parseInt(st.nextToken());
		st = new StringTokenizer(br.readLine());
		int c = Integer.parseInt(st.nextToken()), d = Integer.parseInt(st.nextToken());

		for (int i = a; i < b; ++i) cover[i] = 1;
		for (int i = c; i < d; ++i) cover[i] = 1;
		int ans = 0; 
		for (int i = 0; i < 100; ++i) ans += cover[i];
		pw.println(ans); 
		pw.close();
	}
}
```

### Python 3

See [here](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files).

```py
fin = open("paint.in","r")
fout = open("paint.out","w")
cover = [0 for i in range(100)]
a,b = map(int,fin.readline().split())
c,d = map(int,fin.readline().split())
for i in range(a,b):
	cover[i] = 1
for i in range(c,d):
	cover[i] = 1
ans = 0
for i in range(100):
	ans += cover[i]
fout.write(str(ans))
```

## Problems

Let's begin by solving a few problems! The following require relatively little programming experience and no algorithmic knowledge.

Do as many as you want, then move on! You do not have to do all of them.

- [Promotion Counting](http://usaco.org/index.php?page=viewproblem2&cpid=591)
- [Word Processor](http://usaco.org/index.php?page=viewproblem2&cpid=987)
- [Square Pasture](http://usaco.org/index.php?page=viewproblem2&cpid=663)

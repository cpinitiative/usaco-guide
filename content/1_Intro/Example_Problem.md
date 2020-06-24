---
id: ex-prob
title: An Example Problem
author: Nathan Wang, Benjamin Qi, Darren Yao
prerequisites: 
 - Intro - Data Types
 - Intro - Input & Output
description: Solutions for "USACO Bronze - Fence Painting" in multiple languages. 
---

[Technical Specifications for USACO Contests](http://www.usaco.org/index.php?page=instructions)

## Example: [Fence Painting](http://usaco.org/index.php?page=viewproblem2&cpid=567)

USACO will automatically add a newline to the end of your file if it does not end with one. Make sure not to output trailing spaces!

### C++

[Here](https://www.geeksforgeeks.org/bitsstdc-h-c/) is some info about `<bits/stdc++.h\>` if you are not familiar with it.

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
	// cout << ans << endl; is OK
	// cout << ans << "\n"; is OK
	// cout << ans << " "; is NOT OK
	// cout << ans << "\n\n"; is NOT OK
}
```

Also, including `ios_base::sync_with_stdio(0); cin.tie(0);` in the main function can speed up input & output significantly on some tasks. See [here](https://codeforces.com/blog/entry/5217) and [StackOverflow](https://stackoverflow.com/questions/31162367/significance-of-ios-basesync-with-stdiofalse-cin-tienull) for more information. 

 - Actually, the former link says that it is supposedly prohibited to use `freopen` to redirect `cin` and `cout` if `ios_base::sync_with_stdio(0); cin.tie(0);` is included, but it works properly as far as I know.

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

```java
import java.io.*;
import java.util.*;
public class paintSol { // must be declared in paintSol.java
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new FileReader("paint.in"));
		PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("paint.out")));
		int[] cover = new int[100];

		StringTokenizer st = new StringTokenizer(br.readLine());
		int a = Integer.parseInt(st.nextToken()), b = Integer.parseInt(st.nextToken());
		st = new StringTokenizer(br.readLine());
		int c = Integer.parseInt(st.nextToken()), d = Integer.parseInt(st.nextToken());

		for (int i = a; i < b; i++) cover[i] = 1;
		for (int i = c; i < d; i++) cover[i] = 1;
		int ans = 0; 
		for (int i = 0; i < 100; i++) ans += cover[i];
		pw.println(ans); 
		pw.close(); // make sure to include this line -- flushes the output.
	}
}
```

Alternatively, we can use the InputReader given in the previous module.

<spoiler title="InputReader">

```java
import java.util.*;
import java.io.*;

public class template {

    static class InputReader {
        BufferedReader reader;
        StringTokenizer tokenizer;

        public InputReader() throws FileNotFoundException {
            reader = new BufferedReader(new FileReader("paint.in"));
            tokenizer = null;
        }

        String next() {
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
                try {
                    tokenizer = new StringTokenizer(reader.readLine());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            return tokenizer.nextToken();
        }

        public int nextInt() {
            return Integer.parseInt(next());
        }

        public long nextLong() {
            return Long.parseLong(next());
        }

        public double nextDouble() {
            return Double.parseDouble(next());
        }
    }

    public static void main(String[] args) throws FileNotFoundException, IOException {

		InputReader r = new InputReader();
		PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("paint.out")));

		int[] cover = new int[100];
		for (int i = a; i < b; i++) cover[i] = 1;
		for (int i = c; i < d; i++) cover[i] = 1;
		int ans = 0; 
		for (int i = 0; i < 100; i++) ans += cover[i];
		
		pw.println(ans); 
		pw.close(); // flush output
    }
}
```

</spoiler>

### Python 3

See [here](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files) for documentation about file I/O.

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

## Introductory Problems

The following require relatively little programming experience and no algorithmic knowledge. Do as many as you want, then move on! You do not have to do all of them.


<problems-list>
    <problem name="Promotion Counting" usaco="591" difficulty="Intro">
      Can also do range XOR queries w/ update.
    </problem>
    <problem name="Word Processor" usaco="987" difficulty="Intro">
    </problem>
    <problem name="Square Pasture" usaco="663" difficulty="Intro">
    </problem>
</problems-list>

Also check the [CSES Introductory Problems](https://cses.fi/problemset/list/) up to and including "Palindrome Reorder."
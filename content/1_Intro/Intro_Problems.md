---
id: problems
title: Introductory Problems
author: Nathan Wang, Benjamin Qi, Darren Yao
problems:
 - bronze_promote
 - bronze_word
 - bronze_paint
 - bronze_square
---

Demonstrates how to read in input and print output for a USACO problem in multiple languages. Also lists some introductory USACO Bronze problems.

<!-- END DESCRIPTION -->

[Technical Specifications for Contests](http://www.usaco.org/index.php?page=instructions)

## Example: [Fence Painting](http://usaco.org/index.php?page=viewproblem2&cpid=567)

USACO will automatically add a newline to the end of your file if it does not end with one. Make sure not to output trailing spaces!

### C++

You can use `ios_base::sync_with_stdio(0); cin.tie(0);` to speed up input and output. See [here](https://codeforces.com/blog/entry/5217) and [StackOverflow](https://stackoverflow.com/questions/31162367/significance-of-ios-basesync-with-stdiofalse-cin-tienull) for more information. Apparently if this is included then it is supposedly prohibited to use `freopen` to redirect `cin` and `cout`, but it works properly on USACO (and I believe that it does in fact result in a significant speedup on large input files). 

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
	// cout << ans << "\n"; is OK
	// cout << ans << " "; is NOT
	// cout << ans << "\n\n"; is NOT
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

Class name can be whatever you want. (?)

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

Alternatively, an InputReader class that functions very similarly to Scanner but has the faster runtime of BufferedReader.
```java
import java.util.*;
import java.io.*;

public class template {

    static class InputReader {
        BufferedReader reader;
        StringTokenizer tokenizer;

        public InputReader() throws FileNotFoundException {
            reader = new BufferedReader(new FileReader("template.in"));
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
		PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("template.out")));

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

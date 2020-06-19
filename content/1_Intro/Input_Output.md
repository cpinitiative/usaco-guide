---
id: io
title: Input & Output
author: Darren Yao
---

Demonstrates how to read input and print output for USACO.

<!-- END DESCRIPTION -->

## C++

In CodeForces and CSES, input and output are **standard**, meaning that using the library [<iostream\>](http://www.cplusplus.com/reference/iostream/) suffices. 

However, in USACO, input is read from a file called `problemname.in`, and printing output to a file called `problemname.out`. Note that you'll have to rename the `.in` and `.out` files. You will need the [<cstdio\>](http://www.cplusplus.com/reference/cstdio/) or the [<fstream\>](http://www.cplusplus.com/reference/fstream/) library. Essentially, replace every instance of the word *template* in the word below with the input/output file name, which should be given in the problem.

In order to test a program, create a file called `problemname.in`, and then run the program. The output will be printed to `problemname.out`.

Below, we have included C++ templates for input and output. We use `using namespace std;` so that we don't have to preface standard library functions with `std::` each time we use them.

If `<cstdio>` is used: 

```cpp
#include <cstdio>

using namespace std;

int main() {
    freopen("template.in", "r", stdin);
    freopen("template.out", "w", stdout);
}
```

If `<fstream>` is used (note that if you use `<fstream>`, you must replace `cin` and `cout` with `fin` and `fout`): 

```cpp
#include <fstream>

using namespace std;

int main() {
    ifstream fin("template.in");
    ofstream fout("template.out");
}
```

For CodeForces, CSES, and other contests that use standard input and output, simply use the standard input / output from `<iostream>`.

## Java

In your CS classes, you've probably implemented input and output using standard input and standard output, or using `Scanner` to read input and `System.out.print` to print output.

In CodeForces and CSES, input and output are standard, and the above methods work. However, `Scanner` and `System.out.print` are slow when we have to handle inputting and outputting tens of thousands of lines. Thus, we use `BufferedReader` and `PrintWriter` instead, which are faster because they buffer the input and output and handle it all at once as opposed to parsing each line individually.

However, in USACO, input is read from a file called `problemname.in`, and printing output to a file called `problemname.out`. Note that you'll have to rename the `.in` and `.out` files. Essentially, replace every instance of the word *template* in the word below with the input/output file name, which should be given in the problem.

In order to test a program, create a file called `problemname.in`, and then run the program. The output will be printed to `problemname.out`.

Below, we have included Java templates for input and output, which are effectively faster Scanners. We import the entire `util` and `io` libraries for ease of use.

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

        String next() { // reads in the next String
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
                try {
                    tokenizer = new StringTokenizer(reader.readLine());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            return tokenizer.nextToken();
        }

        public int nextInt() { // reads in the next int
            return Integer.parseInt(next());
        }

        public long nextLong() { // reads in the next long
            return Long.parseLong(next());
        }

        public double nextDouble() { // reads in the next double
            return Double.parseDouble(next());
        }
    }

    public static void main(String[] args) throws FileNotFoundException, IOException {

        InputReader r = new InputReader();
        PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter("template.out")));

        // YOUR CODE HERE
        
        pw.close(); // flushes the output once printing is done
    }
}
```

For CodeForces, CSES, and other contests that use standard input and output, the template is as follows:

```java
import java.io.*;
import java.util.*;

public class template {
    static class InputReader {
        BufferedReader reader;
        StringTokenizer tokenizer;

        public InputReader(InputStream stream) {
            reader = new BufferedReader(new InputStreamReader(stream), 32768);
            tokenizer = null;
        }

        String next() { // reads in the next string
            while (tokenizer == null || !tokenizer.hasMoreTokens()) {
                try {
                    tokenizer = new StringTokenizer(reader.readLine());
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            }
            return tokenizer.nextToken();
        }

        public int nextInt() { // reads in the next int
            return Integer.parseInt(next());
        }

        public long nextLong() { // reads in the next long
            return Long.parseLong(next());
        }

        public double nextDouble() { // reads in the next double
            return Double.parseDouble(next());
        }
    }

    static InputReader r = new InputReader(System.in);
    static PrintWriter pw = new PrintWriter(System.out);

    public static void main(String[] args) {

        // YOUR CODE HERE

        pw.close(); // flushes the output once printing is done
    }
}
```

Here's a brief description of the methods in our `InputReader` class, with an instance `r`, and `PrintWriter` with an instance `pw`.

(insert table)

Here's an example to show how input/output works. Let's say we want to write a program that takes three numbers as input and prints their sum.

```java
// InputReader template code above
static InputReader r = new InputReader(System.in);
static PrintWriter pw = new PrintWriter(System.out);

public static void main(String[] args) {
    int a = r.nextInt();
    int b = r.nextInt();
    int c = r.nextInt()
    pw.println(a + b + c);
    pw.close();
}
```
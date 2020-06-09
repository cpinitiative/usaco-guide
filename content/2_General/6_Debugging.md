---
slug: /general/debugging
title: Debugging
author: Benjamin Qi
order: 6
---

## Compilation

I use the following command:

`g++ -std=c++11 -O2 -o $1 $1.cpp -Wall -Wextra -Wshadow -DLOCAL -Wl,-stack_size -Wl,0xF0000000;`


### Warnings

See [here](https://gcc.gnu.org/onlinedocs/gcc/Warning-Options.html).

`-Wall -Wextra -Wshadow` 

### Stack Size

According to [this comment](https://codeforces.com/blog/entry/60999?#comment-449312), `-Wl,-stack_size -Wl,0xF0000000` increases the stack size on Mac (otherwise, you might get RTE). 

(Documentation?)

### Other

`-fsanitize=undefined -fsanitize=address` 

`-D_GLIBCXX_DEBUG -g`

(someone want to explain these? I don't use)

## Printing

Although not feasible if you have to write all code from scratch, I find [this](https://github.com/bqi343/USACO/blob/master/Implementations/content/contest/CppIO.h) very helpful. `dbg()` only produces output when `-DLOCAL` is included as part of the compilation command.

(add examples of usage)

## Stress Testing

You can use a [simple script](https://github.com/bqi343/USACO/blob/master/Implementations/content/contest/stress.sh) to test two solutions against each other. See Errichto's [video](https://www.youtube.com/watch?v=JXTVOyQpSGM) on testing solutions for more information.

## Debugger

Ok I don't actually know how to use ... (someone else want to add?)
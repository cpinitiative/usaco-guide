---
id: running-cpp
title: Running C++
author: Nathan Wang, Benjamin Qi, Anthony Wang
---

Running C++ both online and locally.

<!-- END DESCRIPTION -->

# Running C++ Online

 * [OnlineGDB](https://www.onlinegdb.com/)
   * online compiler with an embedded GDB debugger
   * can be buggy sometimes
   * supports files and file I/O
 * [CSAcademy](https://csacademy.com/workspace/)
   * pretty nice (unless you get "Estimated Queue Time: ...")
   * "saved locally" will not save your code if you close the tab, press Command-S to save.
 * [Ideone](http://ideone.com/)
   * okay ... with an ad blocker
   * make sure your code is not public
   * sometimes erases your code when you first create it (so get in the habit of copying your code first)

Of course, you can't use file I/O on the latter two websites and they are often quite limited.

# Running C++ Locally

## On Mac

[Clang](https://en.wikipedia.org/wiki/Clang) is the default compiler for Mac OS X, but you should use GCC's [g++](https://en.wikipedia.org/wiki/GNU_Compiler_Collection).

### Installation

Open **Terminal**. First, familiarize yourself with some basic commands given [here](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line). You will also need to install [Homebrew](https://brew.sh/).

Run

```sh
brew install gcc
```

According to [this](https://stackoverflow.com/questions/30998890/installing-opencv-with-brew-never-finishes) if `brew` doesn't seem to finish for a long time then 

```sh
brew install gcc --force-bottle
```

probably suffices.

#### Confirmation

You should be able to compile with `g++` or maybe `g++-#`, where # is the version number (currently 9). Running the following command:

```sh
g++-9 --version
```

should display something like this:

```
g++-9 (Homebrew GCC 9.2.0_2) 9.2.0
Copyright (C) 2019 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

#### Troubleshooting

Make sure you have installed XCode command line tools.

```sh
xcode-select --install # make sure x-code command line tools are installed
softwareupdate --list
softwareupdate -i -a # installs everything
```

## On Windows

Like Windows in general, you have a lot of options for running C++.

The easiest option is to use an IDE such as [Codeblocks](http://www.codeblocks.org/) or [Visual Studio](https://visualstudio.microsoft.com/vs/) because they often have C++ support already built-in. See the IDEs section below for more information.

However, you can also use [MinGW](http://mingw.org/) if you prefer compiling and running C++ using the command line. Another good option is Windows Subsystem for Linux (WSL) which is what I personally use, although it may be more difficult to properly set up.

### Installing MinGW

First, download and run the [MinGW installer](https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/). Once it's installed, open the MinGW Installation Manager, click on Basic Setup on the left, and select `mingw32-gcc-g++-bin` for installation.

(Add MinGW to PATH: https://www.rose-hulman.edu/class/csse/resources/MinGW/installation.htm)

### Installing WSL

https://code.visualstudio.com/docs/cpp/config-wsl (difficult for beginners)

## On Linux

GCC is usually preinstalled on most Linux distros. You can check if it is installed with

```sh
whereis g++
```

If it is not preinstalled, you can probably install it using your distro's package manager.

## Using the command line

(add tutorial or video?)

Consider a simple program such as the following, which we'll save in `name.cpp`.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  int x; cin >> x;
  cout << "FOUND " << x << "\n";
}
```

It's not hard to [compile & run a C++ program](https://www.tutorialspoint.com/How-to-compile-and-run-the-Cplusplus-program). First, open up Powershell on Windows or Terminal on Mac. We can compile `name.cpp` into an executable named `name` with the following command:

```sh
g++ name.cpp -o name
```

Then we can execute the program:

```sh
./name
```

If you type some integer and then press enter, then the program should produce output. We can write both of these commands in a single line:

```sh
g++ name.cpp -o name && ./name
```

### Redirecting Input & Output

If you want to read input from `inp.txt` and write to `out.txt`, then use the following:

```sh
./name < inp.txt > out.txt
```

See "Intro - Introductory Problems" for how to do file input and output within the program.

### Adding Shortcuts (Mac and Linux only)

(alternatives for Windows?)

[Aliases in Terminal](https://jonsuh.com/blog/bash-command-line-shortcuts/)

Retyping the commands for compiling and running gets tedious once we start adding many [command line options](https://developers.redhat.com/blog/2018/03/21/compiler-and-linker-flags-gcc/). See "General - Debugging" for more information about compilation options.

Open your bash profile with a text editor such as gedit (or sublime text).

```sh
brew install gedit
gedit ~/.zshenv
```

You can add aliases and functions here, such as the following to compile and run C++. 

```sh
co() { g++ -std=c++11 -O2 -o $1 $1.cpp -Wall -Wextra -Wshadow -DLOCAL -Wl,-stack_size -Wl,0xF0000000; }
run() { co $1 && ./$1 & fg; }
```

Now you can easily compile and run `name.cpp` from the command line with the following:

```sh
run name
```

Note that all occurrences of `$1` are replaced with `name`.

# Tools

## IDEs

 * [Geany](https://www.geany.org/)
 * [Visual Studio Code](https://code.visualstudio.com/)
   * lightweight, fast IDE, but requires some configuration
 * [Visual Studio](https://visualstudio.microsoft.com/vs/)
   * heavier cousin of Visual Studio Code
 * [XCode](https://developer.apple.com/xcode/)
   * Mac only
 * [Codeblocks](http://www.codeblocks.org/)
   * bad on Mac
 * [CLion](https://www.jetbrains.com/clion/)
   * requires a license, but [free for students](https://www.jetbrains.com/community/education/#students)
   
## Text Editors

Again, many options.

 * [Sublime Text 3](https://www.sublimetext.com/) - a fast, lightweight text editor for Windows, Mac, and Linux
   * [Editing Build Settings](https://stackoverflow.com/questions/23789410/how-to-edit-sublime-text-build-settings)
   * [FastOlympicCoding Addon](https://github.com/Jatana/FastOlympicCoding)
   * [Sublime Snippets](https://www.granneman.com/webdev/editors/sublime-text/top-features-of-sublime-text/quickly-insert-text-and-code-with-sublime-text-snippets)
   * [Symlink](https://www.sublimetext.com/docs/3/osx_command_line.html) 
     * Using `/usr/local/bin/subl` instead of `~/bin/subl` worked for me on OS X Mojave.
 * [Atom](https://atom.io/) - another text editor for Windows, Mac, and Linux, from the makers of Github
 * [Vim](https://www.vim.org/) - the classic text editor, usually preinstalled on Mac and Linux, and also available for Windows
 * Others?

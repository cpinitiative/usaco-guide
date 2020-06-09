---
slug: /intro/running-cpp
title: Running C++
author: Nathan Wang, Benjamin Qi
order: 4
---

Running C++ both online and locally (currently for Mac only).

<!-- END DESCRIPTION -->

## Using C++

<div class="h-2"></div>

Here's a basic C++ template you may find useful:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main() {
    // these two lines open the file into the standard input/output,
    // so you can just use cin/cout.
    freopen("file.in", "r", stdin); // read from file.in
    freopen("file.out", "w", stdout); // write to file.out

    // Code goes here!!

}
```

## Running Online

 * [CSAcademy](https://csacademy.com/workspace/)
   * pretty nice (unless you get "Estimated Queue Time: ...")
 * [Ideone](http://ideone.com/) (used this for a while ...)
   * okay with an ad blocker
   * make sure your code is not public
   * sometimes randomly erases your code when you first create it (so get in the habit of copying your code before creating it!)
 * Other suggestions?

Of course, you can't use File I/O on these websites (or do a lot of other stuff ...).

## Running C++ Locally (on Mac)

[Clang](https://en.wikipedia.org/wiki/Clang) is the default compiler for Mac OS X, but you should use [G++](https://en.wikipedia.org/wiki/GNU_Compiler_Collection).

### Installation

I had a lot of issues when first trying to install G++ on Mac. Please let me know if these instructions do not work!

Open terminal and run

```
brew install gcc
```

According to [this](https://stackoverflow.com/questions/30998890/installing-opencv-with-brew-never-finishes) if brew doesn't seem to finish for a long time then 

```
brew install gcc --force-bottle
```

probably suffices.

### Confirmation

You should be able to compile with g++ or maybe g++-#, where # is the version number (currently 9). Running the following command:
```
g++-9 --version
```
should display something like this:
```
g++-9 (Homebrew GCC 9.2.0_2) 9.2.0
Copyright (C) 2019 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

### Adding Shortcuts

Open your bash profile with a text editor such as gedit (or sublime text).
```
brew install gedit
gedit ~/.zshenv
```
You can add aliases and functions here, such as the following:
```
alias clr="clear"
alias ZES='source ~/.zshenv'
alias ZEO='subl ~/.zshenv'
alias IMPL='cd ~/Documents/GitHub/USACO/Implementations/'
co() {
	g++-9 -std=c++11 -O2 -Wl,-stack_size -Wl,0x10000000 -Wall -Wextra -o $1 $1.cpp
}
run() {
	co $1 && ./$1
}
```
Now you can easily compile and run C++ from the command line by calling `run`.
```
run [prog name]
```

### Troubleshooting

Make sure you have installed XCode command line tools.
```
xcode-select --install # make sure x-code command line tools are installed
softwareupdate --list
softwareupdate -i -a # installs everything
```

## Tools

### IDEs

 * [Geany](https://www.geany.org/)
 * [Visual Studio Code](https://code.visualstudio.com/)
 * [XCode](https://developer.apple.com/xcode/)
   * Mac only
 * [Codeblocks](http://www.codeblocks.org/)
   * bad on Mac :(

### Text Editors

 * [Sublime Text 3](https://www.sublimetext.com/)
   * [Editing Build Settings](https://stackoverflow.com/questions/23789410/how-to-edit-sublime-text-build-settings)
   * [FastOlympicCoding Addon](https://github.com/Jatana/FastOlympicCoding)
   * [Sublime Snippets](https://www.granneman.com/webdev/editors/sublime-text/top-features-of-sublime-text/quickly-insert-text-and-code-with-sublime-text-snippets)
   * [Symlink](https://www.sublimetext.com/docs/3/osx_command_line.html) 
     * Using `/usr/local/bin/subl` instead of `~/bin/subl` worked for me on OS X Mojave.
 * [Atom](https://atom.io/)

## Other Useful Links

 * [Intro to Command Line](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
 * [Command Line Shortcuts](https://jonsuh.com/blog/bash-command-line-shortcuts/)
 * [Run Python Script](https://stackoverflow.com/questions/7855996/cant-run-python-py-files-from-terminal-on-mac)
 * [Competitive C++ Style Guide](https://codeforces.com/blog/entry/64218)

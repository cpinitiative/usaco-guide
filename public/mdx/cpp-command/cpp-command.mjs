"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-command-line-basics",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-command-line-basics",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Command Line Basics"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-linux",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-linux",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Linux"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 10,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-mac",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-mac",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Mac"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 28,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Should be mostly the same as Linux ..."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 30,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Open the ", _jsxDEV(_components.strong, {
        children: "Terminal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 32,
        columnNumber: 10
      }, this), " application and familiarize yourself with some basic\r\ncommands. Upgrade to ", _jsxDEV(_components.a, {
        href: "https://support.apple.com/en-us/HT208050",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "zsh"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 33,
          columnNumber: 23
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 33,
        columnNumber: 22
      }, this), " if you\r\nhaven't already."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 32,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-windows",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-windows",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Windows"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 57,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-installing-g",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-installing-g",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Installing ", _jsxDEV(_components.code, {
        children: "g++"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 74,
        columnNumber: 15
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 74,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.a, {
        href: "http://www.usaco.org/index.php?page=instructions",
        rel: "nofollow",
        target: "_blank",
        children: "USACO"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 76,
        columnNumber: 1
      }, this), " (and most contests)\r\nuse ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/GNU_Compiler_Collection",
        rel: "nofollow",
        target: "_blank",
        children: "GCC"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 5
      }, this), "'s ", _jsxDEV(_components.code, {
        children: "g++"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 77,
        columnNumber: 68
      }, this), " to\r\ncompile and run your code. You'll need ", _jsxDEV(_components.code, {
        children: "g++"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 78,
        columnNumber: 40
      }, this), " specifically to use the\r\n", _jsxDEV(_components.code, {
        children: "#include <bits/stdc++.h>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 79,
        columnNumber: 1
      }, this), " header file; see\r\n", _jsxDEV(_components.a, {
        href: "/general/running-code-locally#including-bitsstdch",
        children: "Running Code Locally"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 80,
        columnNumber: 1
      }, this), " for\r\ndetails."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 76,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-on-linux",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-on-linux",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "On Linux"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "GCC is usually preinstalled on most Linux distros. You can check if it is\r\ninstalled with"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 85,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "whereis g++\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 88,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If it is not preinstalled, you can probably install it using your distro's\r\npackage manager."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 92,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-on-mac",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-on-mac",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "On Mac"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 95,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ol, {
      children: ["\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: "Install XCode command line tools."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 97,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "xcode-select --install\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 99,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 99,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: "If you previously installed these you may need to update them:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 103,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-bash",
            children: "softwareupdate --list # list updates\r\nsoftwareupdate -i -a # installs all updates\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 105,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 105,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["After this step, ", _jsxDEV(_components.code, {
            children: "clang"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 110,
            columnNumber: 22
          }, this), " should be installed (try running ", _jsxDEV(_components.code, {
            children: "clang --version"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 110,
            columnNumber: 63
          }, this), "\r\nin Terminal)."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 110,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 97,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Install ", _jsxDEV(_components.a, {
            href: "https://brew.sh/",
            rel: "nofollow",
            target: "_blank",
            children: "Homebrew"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 113,
            columnNumber: 13
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 113,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 113,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["Install ", _jsxDEV(_components.code, {
            children: "gcc"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 115,
            columnNumber: 13
          }, this), " with Homebrew."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 115,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "brew install gcc\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 117,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 117,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["According to\r\n", _jsxDEV(_components.a, {
            href: "https://stackoverflow.com/questions/30998890/installing-opencv-with-brew-never-finishes",
            rel: "nofollow",
            target: "_blank",
            children: "this"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 122,
            columnNumber: 5
          }, this), "\r\nif ", _jsxDEV(_components.code, {
            children: "brew"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 123,
            columnNumber: 8
          }, this), " doesn't seem to finish for a long time then"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 121,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "brew install gcc --force-bottle\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 125,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 125,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: "probably suffices."
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 129,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 115,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["You should be able to compile with ", _jsxDEV(_components.code, {
            children: "g++-#"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 131,
            columnNumber: 40
          }, this), ", where # is the version number\r\n(e.g., 10). Running the following command"]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 131,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "g++-10 --version\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 134,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 134,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: "should display something like this:"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 138,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            children: "g++-10 (Homebrew GCC 10.2.0_2) 10.2.0\r\nCopyright (C) 2020 Free Software Foundation, Inc.\r\nThis is free software; see the source for copying conditions.  There is NO\r\nwarranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 140,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 140,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: ["\n", _jsxDEV(_components.p, {
          children: ["If you want to be able to compile with just ", _jsxDEV(_components.code, {
            children: "g++"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 147,
            columnNumber: 49
          }, this), ", write a shell alias! Put\r\nthe following lines into your shell's rc file (", _jsxDEV(_components.code, {
            children: "~/.bashrc"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 148,
            columnNumber: 52
          }, this), " if you use\r\n", _jsxDEV(_components.code, {
            children: "bash"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 149,
            columnNumber: 5
          }, this), ", and ", _jsxDEV(_components.code, {
            children: "~/.zshrc"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 149,
            columnNumber: 17
          }, this), " if you use ", _jsxDEV(_components.code, {
            children: "zsh"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 149,
            columnNumber: 39
          }, this), ")."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 147,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.pre, {
          children: _jsxDEV(_components.code, {
            className: "language-bash",
            children: "alias g++=g++-10\n"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 151,
            columnNumber: 5
          }, this)
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 151,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["Once you do so, ", _jsxDEV(_components.code, {
            children: "g++ --version"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 155,
            columnNumber: 21
          }, this), " should now output the same thing as\r\n", _jsxDEV(_components.code, {
            children: "g++-10 --version"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 156,
            columnNumber: 5
          }, this), "."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 155,
          columnNumber: 5
        }, this), "\n", _jsxDEV(_components.p, {
          children: ["Note: avoid overriding the system ", _jsxDEV(_components.code, {
            children: "g++"
          }, undefined, false, {
            fileName: "<source.js>",
            lineNumber: 158,
            columnNumber: 39
          }, this), " with symlinking or hard-linking as\r\nthat will almost surely cause problems. Don't worry if you don't know what\r\nthose terms mean."]
        }, undefined, true, {
          fileName: "<source.js>",
          lineNumber: 158,
          columnNumber: 5
        }, this), "\n"]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 147,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 97,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-on-windows",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-on-windows",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "On Windows"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 162,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-simpler-mingw-w64-minimalist-gnu-for-windows",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-simpler-mingw-w64-minimalist-gnu-for-windows",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Simpler: ", _jsxDEV(_components.a, {
        href: "https://www.mingw-w64.org/",
        rel: "nofollow",
        target: "_blank",
        children: "Mingw-w64"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 164,
        columnNumber: 15
      }, this), " (Minimalist GNU for Windows)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 164,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-harder-windows-subsystem-for-linux-wsl",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-harder-windows-subsystem-for-linux-wsl",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Harder: ", _jsxDEV(_components.a, {
        href: "https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux",
        rel: "nofollow",
        target: "_blank",
        children: "Windows Subsystem for Linux (WSL)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 183,
        columnNumber: 14
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 183,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you're already accustomed to the Linux Command line, this might be the best\r\noption for you."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 185,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Windows Subsystem for Linux, commonly referred to as WSL, runs the linux kernel\r\n(or an emulation layer, depending on which version you use) within your windows\r\ninstallation. This allows you to use Linux binaries without needing to use Linux\r\nas your main Operating System."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 188,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Many people use WSL (such as Anthony), but it can be difficult to properly set\r\nup."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 193,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "If you want to code in (neo)vim, you can install WSL and code through WSL bash."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 206,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To install the necessary tools after setting up WSL, you can run the following\r\ncommands."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 208,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "On Debian based distributions like Ubuntu:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 211,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-sh",
        children: "sudo apt-get install build-essential\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 213,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 213,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "On Arch based distributions like Arch Linux:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 217,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-sh",
        children: "sudo pacman -Sy base-devel\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 219,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 219,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can find many tutorials on how to style up WSL and make it feel more cozy.\r\nThe first step is to use a proper terminal and not the default one that Windows\r\nprovides. An easy to use option is Windows Terminal, which can be found on the\r\n", _jsxDEV(_components.a, {
        href: "https://www.microsoft.com/store/productId/9N0DX20HK701",
        rel: "nofollow",
        target: "_blank",
        children: "Microsoft Store"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 226,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 223,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h2, {
      id: "user-content-c-with-the-command-line",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-c-with-the-command-line",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "C++ with the Command Line"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 243,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-basics-of-compiling--running",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-basics-of-compiling--running",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Basics of Compiling & Running"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 245,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Consider a simple program such as the following, which we'll save in ", _jsxDEV(_components.code, {
        children: "name.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 247,
        columnNumber: 70
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 247,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint x;\r\n\tcin >> x;\r\n\tcout << \"FOUND \" << x << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 249,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 249,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It's not hard to\r\n", _jsxDEV(_components.a, {
        href: "https://www.tutorialspoint.com/How-to-compile-and-run-the-Cplusplus-program",
        rel: "nofollow",
        target: "_blank",
        children: "compile & run a C++ program"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 261,
        columnNumber: 1
      }, this), ".\r\nFirst, open up Powershell on Windows, Terminal on Mac, or your distro's terminal\r\nin Linux. We can compile ", _jsxDEV(_components.code, {
        children: "name.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 26
      }, this), " into an executable named ", _jsxDEV(_components.code, {
        children: "name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 263,
        columnNumber: 62
      }, this), " with the\r\nfollowing command:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 260,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "g++ name.cpp -o name\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 266,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 266,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Then we can execute the program:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 270,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "./name\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 272,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 272,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "If you type some integer and then press enter, then the program should produce\r\noutput. We can write both of these commands in a single line:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "g++ name.cpp -o name && ./name\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 279,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 279,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that ", _jsxDEV(_components.code, {
        children: "&&"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 11
      }, this), " ensures that ", _jsxDEV(_components.code, {
        children: "./name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 29
      }, this), " only runs if ", _jsxDEV(_components.code, {
        children: "g++ name.cpp -o name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 283,
        columnNumber: 51
      }, this), "\r\nfinishes successfully."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 283,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-redirecting-input--output",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-redirecting-input--output",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Redirecting Input & Output"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 286,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you want to read standard input from ", _jsxDEV(_components.code, {
        children: "inp.txt"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 288,
        columnNumber: 41
      }, this), ", use the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 288,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "./name < inp.txt\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 290,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 290,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If you want to write standard output to ", _jsxDEV(_components.code, {
        children: "out.txt"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 294,
        columnNumber: 41
      }, this), ", then use the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 294,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "./name > out.txt\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 296,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 296,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "They can also be used in conjunction, as shown below:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 300,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "./name < inp.txt > out.txt\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 302,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 302,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["See ", _jsxDEV(_components.a, {
        href: "/general/input-output",
        children: "Input & Output"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 306,
        columnNumber: 5
      }, this), " for how to do file input and output\r\nwithin the program."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 306,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-compiler-options-aka-flags",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-compiler-options-aka-flags",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), _jsxDEV(_components.a, {
        href: "https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html",
        rel: "nofollow",
        target: "_blank",
        children: "Compiler Options (aka Flags)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 5
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Use\r\n", _jsxDEV(_components.a, {
        href: "https://developers.redhat.com/blog/2018/03/21/compiler-and-linker-flags-gcc/",
        rel: "nofollow",
        target: "_blank",
        children: "compiler flags"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 312,
        columnNumber: 1
      }, this), "\r\nto change the way GCC compiles your code. Usually, we use something like the\r\nfollowing in place of ", _jsxDEV(_components.code, {
        children: "g++ name.cpp -o name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 314,
        columnNumber: 23
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 311,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "g++ -std=c++17 -O2 name.cpp -o name -Wall\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 316,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 316,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.ul, {
      children: ["\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "-O2"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 320,
          columnNumber: 3
        }, this), " tells ", _jsxDEV(_components.code, {
          children: "g++"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 320,
          columnNumber: 15
        }, this), " to compile your code to run more quickly while increasing\r\ncompilation time (see\r\n", _jsxDEV(_components.a, {
          href: "https://www.rapidtables.com/code/linux/gcc/gcc-o.html",
          rel: "nofollow",
          target: "_blank",
          children: "here"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 322,
          columnNumber: 3
        }, this), ")."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 320,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "-std=c++17"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 323,
          columnNumber: 3
        }, this), " allows you to use features that were added to C++ in 2017. USACO\r\nrecently upgraded from C++11 to C++17."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 323,
        columnNumber: 1
      }, this), "\n", _jsxDEV(_components.li, {
        children: [_jsxDEV(_components.code, {
          children: "-Wall"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 325,
          columnNumber: 3
        }, this), " checks your program for common errors. See\r\n", _jsxDEV(_components.a, {
          href: "/general/debugging-cpp/#gcc-warning-options",
          children: "Debugging"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 326,
          columnNumber: 3
        }, this), " for more information."]
      }, undefined, true, {
        fileName: "<source.js>",
        lineNumber: 325,
        columnNumber: 1
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 320,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "You should always compile with these flags."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 328,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-adding-shortcuts-mac",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-adding-shortcuts-mac",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Adding Shortcuts (Mac)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 330,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Retyping the compiler flags above can get tedious. You should define shortcuts\r\nso you don't need to type them every time!"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 339,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["First, create your ", _jsxDEV(_components.code, {
        children: ".zshrc"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 356,
        columnNumber: 20
      }, this), " if it doesn't already exist."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 356,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "touch ~/.zshrc\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 358,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 358,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Open your ", _jsxDEV(_components.code, {
        children: ".zshrc"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 362,
        columnNumber: 11
      }, this), " with a text editor."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 362,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "open ~/.zshrc\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 364,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 364,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["or some text editor (ex. sublime text with ", _jsxDEV(_components.code, {
        children: "subl"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 368,
        columnNumber: 44
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 368,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "subl ~/.zshrc\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 370,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 370,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can add ", _jsxDEV(_components.strong, {
        children: "aliases"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 13
      }, this), " and ", _jsxDEV(_components.strong, {
        children: "functions"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 374,
        columnNumber: 29
      }, this), " here, such as the following to compile\r\nand run C++ on Mac."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 374,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-bash",
        children: "co() { g++ -std=c++17 -O2 -o \"${1%.*}\" $1 -Wall; }\r\nrun() { co $1 && ./${1%.*} & fg; }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 377,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 377,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now you can easily compile and run ", _jsxDEV(_components.code, {
        children: "name.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 382,
        columnNumber: 36
      }, this), " from the command line with\r\n", _jsxDEV(_components.code, {
        children: "co name.cpp && ./name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 1
      }, this), " or ", _jsxDEV(_components.code, {
        children: "run name.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 28
      }, this), ". Note that all occurrences of ", _jsxDEV(_components.code, {
        children: "$1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 73
      }, this), " in\r\nthe function are replaced with ", _jsxDEV(_components.code, {
        children: "name.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 32
      }, this), ", while ", _jsxDEV(_components.code, {
        children: "${1%.*}"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 50
      }, this), " removes the file\r\nextension from ", _jsxDEV(_components.code, {
        children: "$1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 16
      }, this), " to produce ", _jsxDEV(_components.code, {
        children: "name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 32
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 382,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-what-is--fg-for",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-what-is--fg-for",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "What is ", _jsxDEV(_components.code, {
        children: "& fg"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 14
      }, this), " for?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        children: "prog.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 397,
        columnNumber: 5
      }, this), " denote the following file:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 397,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\n#include <vector>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tvector<int> v;\r\n\tcout << v[-1];\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 399,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 399,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["According to the resource above, the ", _jsxDEV(_components.code, {
        children: "& fg"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 38
      }, this), " is necessary for getting ", _jsxDEV(_components.code, {
        children: "zsh"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 410,
        columnNumber: 70
      }, this), " on\r\nMac to display crash messages (such as segmentation fault). For example,\r\nconsider the running the first ", _jsxDEV(_components.code, {
        children: "prog.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 32
      }, this), " above with ", _jsxDEV(_components.code, {
        children: "run prog.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 412,
        columnNumber: 54
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 410,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If ", _jsxDEV(_components.code, {
        children: "& fg"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 414,
        columnNumber: 4
      }, this), " is removed from the run command above then the terminal displays no\r\nmessage at all. Leaving it in produces the following (ignore the first two\r\nlines):"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 414,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "[2] 30594\r\n[2]  - running    ./${1%.*}\r\nzsh: segmentation fault  ./${1%.*}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 418,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 418,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-measuring-time--memory-usage-mac",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-measuring-time--memory-usage-mac",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Measuring Time & Memory Usage (Mac)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 424,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["For example, suppose that ", _jsxDEV(_components.code, {
        children: "prog.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 443,
        columnNumber: 27
      }, this), " consists of the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 443,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nconst int BIG = 1e7;\r\nint a[BIG];\r\n\r\nint main() {\r\n\tint sum = 0;\r\n\tfor (int i = 0; i < BIG; ++i) sum += a[i];\r\n\tcout << sum;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 445,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 445,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Then ", _jsxDEV(_components.code, {
        children: "co prog.cpp && gtime -v ./prog"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 459,
        columnNumber: 6
      }, this), " gives the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 459,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        children: "  Command being timed: \"./prog\"\r\n  User time (seconds): 0.01\r\n  System time (seconds): 0.01\r\n  Percent of CPU this job got: 11%\r\n  Elapsed (wall clock) time (h:mm:ss or m:ss): 0:00.22\r\n  Average shared text size (kbytes): 0\r\n  Average unshared data size (kbytes): 0\r\n  Average stack size (kbytes): 0\r\n  Average total size (kbytes): 0\r\n  Maximum resident set size (kbytes): 40216\r\n  Average resident set size (kbytes): 0\r\n  Major (requiring I/O) page faults: 91\r\n  Minor (reclaiming a frame) page faults: 10088\r\n  Voluntary context switches: 3\r\n  Involuntary context switches: 38\r\n  Swaps: 0\r\n  File system inputs: 0\r\n  File system outputs: 0\r\n  Socket messages sent: 0\r\n  Socket messages received: 0\r\n  Signals delivered: 0\r\n  Page size (bytes): 4096\r\n  Exit status: 0\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 461,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 461,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Note that ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "10^7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 487,
        columnNumber: 11
      }, this), " integers require ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "4\\cdot 10^7\\cdot 10^{-3}\\approx 40000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 487,
        columnNumber: 35
      }, this), "\r\nkilobytes of memory, which is close to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "40216"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 488,
        columnNumber: 40
      }, this), " in the above output as expected."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 487,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-adjusting-stack-size-mac",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-adjusting-stack-size-mac",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Adjusting Stack Size (Mac)"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 490,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Let ", _jsxDEV(_components.code, {
        children: "A.cpp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 498,
        columnNumber: 5
      }, this), " denote the following program:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 498,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\nusing namespace std;\r\n\r\nint res(int x) {\r\n\tif (x == 200000) return x;\r\n\treturn res(x + 1);\r\n}\r\n\r\nint main() { cout << res(0) << \"\\n\"; }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 500,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 500,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we compile and run this with ", _jsxDEV(_components.code, {
        children: "g++ A.cpp -o A && ./A"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 512,
        columnNumber: 33
      }, this), ", this outputs ", _jsxDEV(_components.code, {
        children: "200000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 512,
        columnNumber: 71
      }, this), ".\r\nHowever, changing ", _jsxDEV(_components.code, {
        children: "200000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 513,
        columnNumber: 19
      }, this), " to ", _jsxDEV(_components.code, {
        children: "300000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 513,
        columnNumber: 31
      }, this), " gives a segmentation fault. Similarly,"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 512,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <iostream>\r\nusing namespace std;\r\n\r\nint main() {\r\n\tint arr[2000000];\r\n\tcout << arr[0] << \"\\n\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 515,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 515,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["runs, but changing ", _jsxDEV(_components.code, {
        children: "2000000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 525,
        columnNumber: 20
      }, this), " to ", _jsxDEV(_components.code, {
        children: "3000000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 525,
        columnNumber: 33
      }, this), " also gives a segmentation fault. This\r\nis because the ", _jsxDEV(_components.strong, {
        children: "stack size"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 526,
        columnNumber: 16
      }, this), " on Mac appears to be limited to 8 megabytes by\r\ndefault."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 525,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Note that USACO does not have a stack size limit, aside from the usual 256 MB\r\nmemory limit. Therefore, code that crashes locally due to a stack overflow error\r\nmay still pass on the USACO servers. To get your code running locally, use one\r\nof the methods below."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 539,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h4, {
      id: "user-content-method-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 1"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 552,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "ulimit -s 65532"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 562,
        columnNumber: 1
      }, this), " will increase the stack size to about 64 MB. Unfortunately,\r\nthis doesn't work for higher numbers."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 562,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h4, {
      id: "user-content-method-2",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-method-2",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Method 2"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 565,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["To get around this, we can pass a\r\n", _jsxDEV(_components.a, {
        href: "https://gcc.gnu.org/onlinedocs/gcc/Link-Options.html",
        rel: "nofollow",
        target: "_blank",
        children: "linker option"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 578,
        columnNumber: 1
      }, this), ". According\r\nto the manual for\r\n", _jsxDEV(_components.a, {
        href: "https://ftp.gnu.org/old-gnu/Manuals/ld-2.9.1/html_mono/ld.html",
        rel: "nofollow",
        target: "_blank",
        children: _jsxDEV(_components.code, {
          children: "ld"
        }, undefined, false, {
          fileName: "<source.js>",
          lineNumber: 580,
          columnNumber: 2
        }, this)
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 580,
        columnNumber: 1
      }, this), " (enter\r\n", _jsxDEV(_components.code, {
        children: "man ld"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 581,
        columnNumber: 1
      }, this), " in Terminal), the option ", _jsxDEV(_components.code, {
        children: "-stack_size size"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 581,
        columnNumber: 35
      }, this), " does the following:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 577,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.blockquote, {
      children: ["\n", _jsxDEV(_components.p, {
        children: "Specifies the maximum stack size for the main thread in a program. Without\r\nthis option a program has a 8MB stack. The argument size is a hexadecimal\r\nnumber with an optional leading 0x. The size should be a multiple of the\r\narchitecture's page size (4KB or 16KB)."
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 583,
        columnNumber: 3
      }, this), "\n"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 583,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So including ", _jsxDEV(_components.code, {
        children: "-Wl,-stack_size,0x10000000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 588,
        columnNumber: 14
      }, this), " as part of your compilation command\r\nwill set the maximum stack size to ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "16^7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 589,
        columnNumber: 36
      }, this), " bytes ", _jsxDEV(_components.code, {
        className: "language-math",
        children: "\\approx 256"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 589,
        columnNumber: 49
      }, this), " megabytes, which\r\nis usually sufficient. However, running the first program above with ", _jsxDEV(_components.code, {
        children: "200000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 590,
        columnNumber: 70
      }, this), "\r\nreplaced by ", _jsxDEV(_components.code, {
        children: "1e7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 591,
        columnNumber: 13
      }, this), " still gives an error. In this case, you can further increase\r\nthe maximum stack size (ex. changing ", _jsxDEV(_components.code, {
        children: "0x10000000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 592,
        columnNumber: 38
      }, this), " to ", _jsxDEV(_components.code, {
        children: "0xF0000000"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 592,
        columnNumber: 54
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 588,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["On windows, adding ", _jsxDEV(_components.code, {
        children: "-Wl,--stack,268435456"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 594,
        columnNumber: 20
      }, this), " as a part of your compilation flags\r\nshould do the trick. The ", _jsxDEV(_components.code, {
        children: "268435456"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 26
      }, this), " corresponds to ", _jsxDEV(_components.code, {
        children: "268435456"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 53
      }, this), " bytes, or ", _jsxDEV(_components.code, {
        children: "256"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 75
      }, this), "\r\nmegabytes. If you are using Windows PowerShell, make sure to wrap it in\r\nquotations (like so: ", _jsxDEV(_components.code, {
        children: "\"-Wl,--stack,268435456\""
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 597,
        columnNumber: 22
      }, this), "), since commas are considered to\r\nbe special characters."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 594,
      columnNumber: 1
    }, this)]
  }, undefined, true, {
    fileName: "<source.js>",
    lineNumber: 1,
    columnNumber: 1
  }, this);
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsxDEV(MDXLayout, {
    ...props,
    children: _jsxDEV(_createMdxContent, {
      ...props
    }, undefined, false, {
      fileName: "<source.js>"
    }, this)
  }, undefined, false, {
    fileName: "<source.js>"
  }, this) : _createMdxContent(props);
}
return {
  default: MDXContent
};
function _missingMdxReference(id, component, place) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it." + (place ? "\nIt’s referenced in your code at `" + place + "`" : ""));
}

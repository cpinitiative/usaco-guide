"use strict";
const {Fragment: _Fragment, jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...props.components
  }, {HeaderLink} = _components;
  if (!HeaderLink) _missingMdxReference("HeaderLink", true);
  return _jsxDEV(_Fragment, {
    children: [_jsxDEV(_components.h2, {
      id: "user-content-templates",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-templates",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Templates"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["A ", _jsxDEV(_components.strong, {
        children: "template"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 4,
        columnNumber: 3
      }, this), " consists of code that is assumed to be in every file. Don't be\r\nafraid to write your own template or don't use one at all! Below, we'll give an\r\nexample of what a template might look like."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 4,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Templates in C++ can take advantange of more powerful features (e.g. macros)\r\nthan the other contest languages, and they can be more customized to each\r\ncompetitor."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 16,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "//BeginCodeSnip{C++ Short Template}\n#include <bits/stdc++.h> // see /general/running-code-locally\nusing namespace std;\n\nusing ll = long long;\n\nusing vi = vector<int>;\n#define pb push_back\n#define all(x) begin(x), end(x)\n#define sz(x) (int) (x).size()\n\nusing pi = pair<int,int>;\n#define f first\n#define s second\n#define mp make_pair\n\nvoid setIO(string name = \"\") {\n\tcin.tie(0)->sync_with_stdio(0); // see /general/fast-io\n\tif (sz(name)) {\n\t\tfreopen((name + \".in\").c_str(), \"r\", stdin); // see /general/input-output\n\t\tfreopen((name + \".out\").c_str(), \"w\", stdout);\n\t}\n}\n//EndCodeSnip\n\r\nint main() { setIO(); }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 34,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 34,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This module will cover many of the features used in the code above."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 40,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-what-is-generic-code",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-what-is-generic-code",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "What Is Generic Code?"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 42,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Generic code"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 60,
        columnNumber: 1
      }, this), " is an important concept in informatics. Of course, as all\r\nconcepts go, you may dodge generic code and continue to write in a\r\nhyper-specific style. As such, begin by questioning purpose."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 60,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Generic code is ", _jsxDEV(_components.strong, {
        children: "adaptable"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 64,
        columnNumber: 17
      }, this), ", meaning that it can be put to use immediately in\r\nmany ways without major changes. It can be reused, extended, and even versioned\r\npowerfully to save time. Time is of essence in informatics, where I refer to\r\nboth algorithmic time ", _jsxDEV(_components.em, {
        children: "complexity"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 23
      }, this), " and ", _jsxDEV(_components.em, {
        children: "coding"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 67,
        columnNumber: 40
      }, this), " time."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 64,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Even if you are writing a very specific data structure or algorithm, to truly\r\ngrasp it, a good contemplation is \"Can I generalize what I have learned to a\r\nbroader class of problems?\" Answer this by then attempting to generalize. That\r\nsaid, before you proceed, I issue the below warning:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 69,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: "Modern C++, a groundbreaking language in the current informatics scene, indeed\r\nhas several builtin features to support and streamline generic code. Here, we\r\nwill cover the basic important ones you will definitely want to add to your\r\ncoding arsenal."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 83,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-classes",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-classes",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Classes"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 88,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Classes"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 90,
        columnNumber: 1
      }, this), " are by far the most important utility in extensible code. If you\r\never want to write a data structure that has several member functions to process\r\nstored data, classes are for you. Of course, classes can have public and private\r\nsections. For instance, consider a class ", _jsxDEV(_components.code, {
        children: "Human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 93,
        columnNumber: 42
      }, this), ", which maintains several\r\nrelevant member functions."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 90,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass Human {\r\n  private:  // internal properties\r\n\tint body_temp;\r\n\tint temper;\r\n\tstring name;\r\n\r\n  public:  // external reactions\r\n\tstring get_name() { return name; }\r\n\r\n\tstring get_feeling() {\r\n\t\tif (body_temp >= 97 && body_temp <= 99) { return \"good\"; }\r\n\t\treturn \"bad\";\r\n\t}\r\n\r\n\tstring get_emotion() {\r\n\t\tif (temper <= 10) {\r\n\t\t\treturn \"sad\";\r\n\t\t} else if (temper <= 30) {\r\n\t\t\treturn \"happy\";\r\n\t\t}\r\n\t\treturn \"angry\";\r\n\t}\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 96,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 96,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["But how do we actually use (and reuse) this class data structure we have\r\ncreated? We do this by creating ", _jsxDEV(_components.em, {
        children: "instances"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 126,
        columnNumber: 33
      }, this), " of this class, concretely known as\r\n", _jsxDEV(_components.strong, {
        children: "objects"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 127,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 125,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Below is an example instance of the ", _jsxDEV(_components.code, {
        children: "Human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 37
      }, this), " class named ", _jsxDEV(_components.code, {
        children: "sal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 129,
        columnNumber: 57
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 129,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "Human sal;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 131,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 131,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Of course, we will want to initialize any object of this ", _jsxDEV(_components.code, {
        children: "human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 135,
        columnNumber: 58
      }, this), " class with its\r\nfundamental attributes (", _jsxDEV(_components.code, {
        children: "body_temperature"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 25
      }, this), " and ", _jsxDEV(_components.code, {
        children: "temper"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 136,
        columnNumber: 48
      }, this), " from the above), but\r\nthe problem here is that we are unable to access them directly; they are private\r\nand remain uninitialized."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 135,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "To partially alleviate this, we can initialize variables in the class\r\ndeclaration itself:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 140,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass Human {\r\n  private:  // internal properties\r\n\tint body_temp = 98;\r\n\tint temper = 25;\r\n\tstring name = \"Sal\";\r\n\r\n  public:  // external reactions\r\n\tstring get_name() { return name; }\r\n\r\n\tstring get_feeling() {\r\n\t\tif (body_temp >= 97 && body_temp <= 99) { return \"good\"; }\r\n\t\treturn \"bad\";\r\n\t}\r\n\r\n\tstring get_emotion() {\r\n\t\tif (temper <= 10) {\r\n\t\t\treturn \"sad\";\r\n\t\t} else if (temper <= 30) {\r\n\t\t\treturn \"happy\";\r\n\t\t}\r\n\t\treturn \"angry\";\r\n\t}\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 143,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 143,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This gives us something to work with, and we can now create ", _jsxDEV(_components.code, {
        children: "sal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 61
      }, this), " in ", _jsxDEV(_components.code, {
        children: "main()"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 172,
        columnNumber: 70
      }, this), " as\r\nwell as call his member functions (instantiated directly from the base ", _jsxDEV(_components.code, {
        children: "Human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 173,
        columnNumber: 72
      }, this), "\r\nclass)."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 172,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\tHuman sal;\r\n\tcout << sal.get_name() << \" feels \" << sal.get_feeling() << \" and is \"\r\n\t     << sal.get_emotion() << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 176,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 176,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["To completely solve this, we might be forced to make these variables public, but\r\ninstead we can be more clever and write a ", _jsxDEV(_components.strong, {
        children: "constructor"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 185,
        columnNumber: 43
      }, this), " function for this\r\nclass, essentially a function that is automatically called whenever an instance\r\nof the class is created. Constructors are useful when we want to prevent\r\nmodification to variables we create but be able to initialize them for use,\r\nmaking them naturally the most viable option for proprietary software companies."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 184,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can create a constructor for the human class and require initialization of\r\nthe variables ", _jsxDEV(_components.code, {
        children: "body_temperature"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 15
      }, this), " and ", _jsxDEV(_components.code, {
        children: "temper"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 192,
        columnNumber: 38
      }, this), ", which gives us some control over\r\n", _jsxDEV(_components.code, {
        children: "Sal"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 193,
        columnNumber: 1
      }, this), "'s intrinsic properties as they are initialized. The overall code becomes:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 191,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#include <bits/stdc++.h>\r\nusing namespace std;\r\n\r\nclass Human {\r\n  private:  // internal properties\r\n\tint body_temp;\r\n\tint temper;\r\n\tstring name;\r\n\r\n  public:  // external reactions\r\n\tHuman(string name_, int body_temp_, int temper_) {\r\n\t\tname = name_;\r\n\t\tbody_temp = body_temp_;\r\n\t\ttemper = temper_;\r\n\t}\r\n\r\n\tstring get_name() { return name; }\r\n\r\n\tstring get_feeling() {\r\n\t\tif (body_temp >= 97 && body_temp <= 99) { return \"good\"; }\r\n\t\treturn \"bad\";\r\n\t}\r\n\r\n\tstring get_emotion() {\r\n\t\tif (temper <= 10) {\r\n\t\t\treturn \"sad\";\r\n\t\t} else if (temper <= 30) {\r\n\t\t\treturn \"happy\";\r\n\t\t}\r\n\t\treturn \"angry\";\r\n\t}\r\n};\r\n\r\nint main() {\r\n\tHuman sal(\"Sal\", 98, 25);\r\n\tcout << sal.get_name() << \" feels \" << sal.get_feeling() << \" and is \"\r\n\t     << sal.get_emotion() << endl;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 195,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 195,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This is immediately very extensible if we wish to create multiple instances of\r\n", _jsxDEV(_components.code, {
        children: "human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 237,
        columnNumber: 1
      }, this), ", all with their own initial properties. In fact, we can be even more\r\ngeneral by creating an external function condition that easily states feelings\r\nand emotions for us without having to be rewritten."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 236,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// Prints out the condition of a human to cout\r\nvoid condition(Human h) {\r\n\tcout << h.get_name() << \" feels \" << h.get_feeling() << \" and is \"\r\n\t     << h.get_emotion() << endl;\r\n}\r\n\r\nint main() {\r\n\tHuman sal(\"Sal\", 98, 25);\r\n\tHuman bob(\"Bob\", 100, 9);\r\n\tHuman joe(\"Joe\", 85, 35);\r\n\t// Print out the conditions of all three people\r\n\tcondition(sal);\r\n\tcondition(bob);\r\n\tcondition(joe);\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 241,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 241,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As one very specific but useful note on constructors, when we wish to merely\r\ninitialize properties, we can adopt an alternative declaration that executes\r\nsignificantly faster than the first; using the argument name as the variable\r\nitself also becomes permissible and is guaranteed defined behavior:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 259,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "Human(string name, int body_temp, int temper)\r\n    : name(name), body_temp(body_temp), temper(temper) {}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 264,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 264,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-structs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-structs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Structs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 269,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.strong, {
        children: "Structs"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 271,
        columnNumber: 1
      }, this), " are useful when we care less about keeping private properties and\r\nmore about having just a general reusable data structure. This means everything\r\nis public in a struct by default, and a ", _jsxDEV(_components.code, {
        children: "human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 273,
        columnNumber: 41
      }, this), " struct, along with the\r\nreformatted constructor above, would look like:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 271,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct Human {\r\n\tint body_temp;\r\n\tint temper;\r\n\tstring name;\r\n\r\n\tHuman(string name_, int body_temp_, int temper_) {\r\n\t\tname = name_;\r\n\t\tbody_temp = body_temp_;\r\n\t\ttemper = temper_;\r\n\t}\r\n\r\n\tstring get_name() { return name; }\r\n\r\n\tstring get_feeling() {\r\n\t\tif (body_temp >= 97 && body_temp <= 99) { return \"good\"; }\r\n\t\treturn \"bad\";\r\n\t}\r\n\r\n\tstring get_emotion() {\r\n\t\tif (temper <= 10) {\r\n\t\t\treturn \"sad\";\r\n\t\t} else if (temper <= 30) {\r\n\t\t\treturn \"happy\";\r\n\t\t}\r\n\t\treturn \"angry\";\r\n\t}\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 276,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 276,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Immediately, our struct is easier to manage given its open nature. It is more\r\nintegrated with the surrounding code, and we can do manipulations like the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 306,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "int main() {\r\n\t// Initialize Sal\r\n\tHuman sal(\"Sal\", 98, 25);\r\n\tcondition(sal);       // Get Sal's initial condition\r\n\tsal.name = \"Sally\";   // Sal's friends sometimes call him Sally\r\n\tsal.body_temp = 102;  // Sal gets sick\r\n\tsal.temper = 40;      // He develops a bad temper due to his sickness\r\n\tcondition(sal);       // Now we get Sal's new condition\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 309,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 309,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, we can choose to discard the constructor altogether and opt for an\r\ninitializer list based on the ", _jsxDEV(_components.em, {
        children: "order"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 322,
        columnNumber: 31
      }, this), " of the declaration of intrinsic variables.\r\nIn the ", _jsxDEV(_components.code, {
        children: "Human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 323,
        columnNumber: 8
      }, this), " case, the variables in order are ", _jsxDEV(_components.code, {
        children: "body_temp"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 323,
        columnNumber: 49
      }, this), ", ", _jsxDEV(_components.code, {
        children: "temper"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 323,
        columnNumber: 62
      }, this), ",\r\nand ", _jsxDEV(_components.code, {
        children: "name"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 324,
        columnNumber: 5
      }, this), ", so we can remove the constructor and opt for an initializer list\r\nlike:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 321,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "human Sal{98, 25, \"Sal\"};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 327,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 327,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Needless to say, all of this enables very clean initialization and manipulation\r\nof classes and structs, integral to generic code."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 331,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-templates-1",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-templates-1",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Templates"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 334,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["The ", _jsxDEV(_components.code, {
        children: "Human"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 349,
        columnNumber: 5
      }, this), " class example, though well-defined, was mostly intended to serve as\r\nan example of the versatility of classes and structs. We now switch to something\r\nsimpler. Imagine a three-dimensional point in space as the following struct and\r\ntwo of the said 3D points: ", _jsxDEV(_components.code, {
        children: "p1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 28
      }, this), " and ", _jsxDEV(_components.code, {
        children: "p2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 352,
        columnNumber: 37
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 349,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct Point3D {\r\n\tint x;\r\n\tint y;\r\n\tint z;\r\n} p1{1, 2, 3}, p2{3, 4, 5};  // We can make some instances right before the ;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 354,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 354,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["But what if we wanted to make a point ", _jsxDEV(_components.code, {
        children: "p3"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 362,
        columnNumber: 39
      }, this), " with coordinates as doubles? We would\r\nthen be forced to create a secondary point struct ", _jsxDEV(_components.code, {
        children: "pt1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 363,
        columnNumber: 51
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 362,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct Point3D {\r\n\tint x;\r\n\tint y;\r\n\tint z;\r\n} p1{1, 2, 3}, p2{3, 4, 5};\r\n\r\nstruct Point3DDouble {\r\n\tdouble x;\r\n\tdouble y;\r\n\tdouble z;\r\n} p3{1.1, 2.2, 3.3};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 365,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 365,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "This might not seem too bad immediately, but imagine having to create structs\r\nlike this over and over again just to accommodate various type changes. We need\r\nsomething better."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 379,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Lo and behold, we have the ", _jsxDEV(_components.strong, {
        children: "template"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 383,
        columnNumber: 28
      }, this), " to come to our rescue. We can use the format\r\n", _jsxDEV(_components.code, {
        children: "template<...>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 384,
        columnNumber: 1
      }, this), " to specify the specific templating conditions and then simply\r\ndefine the struct normally. In particular, if we use a class ", _jsxDEV(_components.code, {
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 385,
        columnNumber: 62
      }, this), ", we achieve:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 383,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "template <class T> struct Point3D {\r\n\tT x;\r\n\tT y;\r\n\tT z;\r\n};\r\n\r\nPoint3D<int> p1{1, 2, 3};\r\nPoint3D<int> p2{3, 4, 5};\r\nPoint3D<double> p3{1.1, 2.2, 3.3};\r\nPoint3D<long long> p4{9223372036854775807, 9223372036854775807, 9223372036854775807};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 387,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 387,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It would be narrow-minded to think that templates are in any way limited to\r\nclasses and structs. They can be used with functions and much more. For example,\r\ntake a look at this function ", _jsxDEV(_components.code, {
        children: "ckmin"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 402,
        columnNumber: 30
      }, this), ":"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 400,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "/**\r\n * If b is less than a, this changes the value of a to that of b\r\n * and returns true. If not, the function simply returns false.\r\n */\r\ntemplate <class T> bool ckmin(T &a, const T &b) {\r\n\tif (b < a) {\r\n\t\ta = b;\r\n\t\treturn true;\r\n\t}\r\n\treturn false;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 404,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 404,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["One interesting use case is that of the size of various containers. The size\r\nmember function of a container usually returns a type incompatible with ", _jsxDEV(_components.code, {
        children: "int"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 419,
        columnNumber: 73
      }, this), ",\r\nbut we can easily write a templated function to fix this, handling all types\r\nof containers at once:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 418,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "template <class T> int sz(const T &container) { return (int)container.size(); }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 423,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 423,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["You can call this through typing ", _jsxDEV(_components.code, {
        children: "sz<vector<int>>(v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 427,
        columnNumber: 34
      }, this), " where ", _jsxDEV(_components.code, {
        children: "v"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 427,
        columnNumber: 61
      }, this), " is a\r\n", _jsxDEV(_components.code, {
        children: "vector<int>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 428,
        columnNumber: 1
      }, this), ", but since C++11, functions (but not classes or structs\r\nuntil C++14 and C++17) can actually infer template arguments, meaning\r\nthat we can simply use ", _jsxDEV(_components.code, {
        children: "sz(v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 430,
        columnNumber: 24
      }, this), "!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 427,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "What if we wanted to put multiple arguments in a template to handle multiple\r\nclasses? Consider the below secondary pair comparator struct as an example:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 432,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct CPS {\r\n\ttemplate <class T, class U>\r\n\tbool operator()(const pair<T, U> &a, const pair<T, U> &b) {\r\n\t\treturn make_pair(a.second, a.first) < make_pair(b.second, b.first);\r\n\t}\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 435,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 435,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["And in this design, since the template arguments both apply to only a function,\r\nthey can be easily inferred! For instance, declaring a set of\r\n", _jsxDEV(_components.code, {
        children: "pair<double, int>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 446,
        columnNumber: 1
      }, this), " in C++11 is as easy as ", _jsxDEV(_components.code, {
        children: "set<pair<double, int>, CPS>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 446,
        columnNumber: 44
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 444,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "What constitutes what other kinds of types we can put in templates? As a general\r\nrule of thumb, until C++17, the types valid in template arguments are only\r\nclasses and fundamental types, of which only classes can be directly inferred in\r\nmany cases by functions."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 448,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In fact, we can even have templates that take a variable number of arguments,\r\nknown as variadic templates, or templates within templates, known as nested\r\ntemplates, both of which are beyond the scope of this basic exposition but can\r\nbe found ", _jsxDEV(_components.a, {
        href: "https://en.cppreference.com/w/cpp/language/parameter_pack",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 456,
        columnNumber: 10
      }, this), " and\r\n", _jsxDEV(_components.a, {
        href: "https://blog.feabhas.com/2014/08/templates-of-templates/",
        rel: "nofollow",
        target: "_blank",
        children: "here"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 457,
        columnNumber: 1
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 453,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "As a fun fact, just as templates give us so much control over the generality of\r\nthe language, a lot of the C++ standard in itself is written generically with\r\ntemplates under the hood."
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 459,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-type-aliases-with-using",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-type-aliases-with-using",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Type Aliases With ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 463,
        columnNumber: 22
      }, this)]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 463,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "typedef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 486,
        columnNumber: 1
      }, this), " is now rather outdated (though still used by some) because it is\r\nmore or less just an annoying version of ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 487,
        columnNumber: 42
      }, this), " with frustrating semantics, so\r\nwe will not cover it here."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 486,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 490,
        columnNumber: 1
      }, this), " is a fascinating keyword, frequently used to simplify namespace\r\nprefixing when applicable. For instance, statements like"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 490,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using namespace std;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 493,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 493,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["actually allow us to use an entire namespace. Of course, since\r\n", _jsxDEV(_components.code, {
        children: "using namespace std"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 498,
        columnNumber: 1
      }, this), " is frequently limited to the competitive programming\r\ncommunity and looked down upon otherwise, we can use ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 499,
        columnNumber: 54
      }, this), " to invoke better\r\nsimplifications."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 497,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Suppose that a lot of my code uses", _jsxDEV(_components.code, {
        children: "std::cout"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 502,
        columnNumber: 35
      }, this), ", which I find frustrating to type.\r\nI can write"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 502,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using std::cout;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 505,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 505,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["and then just live with ", _jsxDEV(_components.code, {
        children: "cout"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 509,
        columnNumber: 25
      }, this), ". But what if I was using strings and wanted to\r\ntype neither ", _jsxDEV(_components.code, {
        children: "std::string"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 14
      }, this), " nor ", _jsxDEV(_components.code, {
        children: "string"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 32
      }, this), "? I could use ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 510,
        columnNumber: 54
      }, this), " twice to fix this:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 509,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using std::string;   // Unnecessary if already using namespace std\r\nusing str = string;  // Use str as an alias for string\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 512,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 512,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "Or I could compress this into a single statement:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 517,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using str = std::string;  // str is an alias for std::string directly\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 519,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 519,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We can make even more aliases, with even aliases within aliases (see ", _jsxDEV(_components.code, {
        children: "ll"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 523,
        columnNumber: 70
      }, this), "),\r\nfor environments where speed is key, such as competitive programming:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 523,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using namespace std;\r\nusing ll = long long;\r\nusing str = string;\r\nusing pii = pair<int, int>;\r\nusing pll = pair<ll, ll>;\r\nusing vi = vector<int>;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 526,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 526,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Finally, we can take ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 542,
        columnNumber: 22
      }, this), " to the next step and invoke templates! For\r\ninstance, if we want to be able to write ", _jsxDEV(_components.code, {
        children: "arr<int, 6>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 543,
        columnNumber: 42
      }, this), " instead of\r\n", _jsxDEV(_components.code, {
        children: "std::array<int, 6>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 544,
        columnNumber: 1
      }, this), ", we write:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 542,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "template <class T, int SZ> using arr = std::array<T, SZ>;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 546,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 546,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["As another example, if we want to use ", _jsxDEV(_components.code, {
        children: "ai"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 550,
        columnNumber: 39
      }, this), " to mean integer array, we can make\r\nconstructions like ", _jsxDEV(_components.code, {
        children: "ai<6>"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 551,
        columnNumber: 20
      }, this), " work as well:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 550,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "template <int SZ> using ai = std::array<int, SZ>;\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 553,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 553,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In general, it is important that ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 557,
        columnNumber: 34
      }, this), " declarations have strong ", _jsxDEV(_components.strong, {
        children: "scope"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 557,
        columnNumber: 67
      }, this), "\r\nguarantees, meaning that they will not work outside of their defined scope. To\r\nuse declarations everywhere in the program, they must be invoked in global\r\nscope. But, if we want to be clever and create a reusable struct and just\r\nspecify template arguments internally, we always have the option of:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 557,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct Point {\r\n\tusing T = int;\r\n\t/*\r\n\t * Within this scope, T is an alias for int.\r\n\t * Just change this declaration to change T's meaning within this struct\r\n\t */\r\n\tT x;\r\n\tT y;\r\n\tT z;\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 563,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 563,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["In case we want to be able to access the specific type ", _jsxDEV(_components.code, {
        children: "T"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 576,
        columnNumber: 56
      }, this), "'s alias meaning\r\noutside of ", _jsxDEV(_components.code, {
        children: "Point"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 577,
        columnNumber: 12
      }, this), ", this too becomes very easy:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 576,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "struct Point {\r\n\tusing T = int;\r\n\tT x;\r\n\tT y;\r\n\tT z;\r\n};\r\n\r\nint main() {\r\n\t// U becomes a copy of T from Point's scope and is now in the scope of main\r\n\tusing U = Point::T;\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 579,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 579,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-macros",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-macros",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Macros"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 593,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["We end this section off with ", _jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 30
      }, this), ", which is used to define ", _jsxDEV(_components.strong, {
        children: "macros"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 595,
        columnNumber: 65
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 595,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 616,
        columnNumber: 1
      }, this), " is essentially a crude find-and-replace that happens before compile\r\ntime (in the preprocessor stage). In this sense, it is easy to use, where\r\n", _jsxDEV(_components.code, {
        children: "#define NAME VALUE"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 618,
        columnNumber: 1
      }, this), " would ideally find all instances of ", _jsxDEV(_components.code, {
        children: "NAME"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 618,
        columnNumber: 58
      }, this), " in the code and\r\nreplace them with ", _jsxDEV(_components.code, {
        children: "VALUE"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 619,
        columnNumber: 19
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 616,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["This example defines ", _jsxDEV(_components.code, {
        children: "MOD"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 621,
        columnNumber: 22
      }, this), " as ", _jsxDEV(_components.code, {
        children: "1e9 + 7"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 621,
        columnNumber: 31
      }, this), " by find and replace."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 621,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#define MOD 1e9 + 7\r\n\r\nint main() {\r\n\tcout << int(MOD) << \"\\n\";      // outputs 1000000007\r\n\tcout << int(MOD * 2) << \"\\n\";  // outputs 1000000014\r\n\tcout << int(2 * MOD) << \"\\n\";  // outputs 2000000007\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 623,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 623,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "But that's obviously not a good idea. A better alternative is the following:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 633,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "const int MOD = 1e9 + 7;\r\n\r\nint main() { cout << MOD << \"\\n\"; }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 635,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 635,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Also, ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 649,
        columnNumber: 7
      }, this), " is preferable to ", _jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 649,
        columnNumber: 32
      }, this), ". For example, the following code with\r\n", _jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 650,
        columnNumber: 1
      }, this), " will not compile (but it will with ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 650,
        columnNumber: 46
      }, this), ")."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 649,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#define ll long long\r\n// using ll = long long;\r\n\r\nint main() { cout << ll(1e18); }\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 652,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 652,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["The takeaway from this is to avoid ", _jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 659,
        columnNumber: 36
      }, this), " when possible. Of course, some competitive\r\nprogrammers use macros extensively. Some examples are presented below."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 659,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.h3, {
      id: "user-content-pairs",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-pairs",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Pairs"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 664,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using pi = pair<int, int>;\r\n#define mp make_pair\r\n#define f first\r\n#define s second\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 666,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 666,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["It might be annoying to keep on typing ", _jsxDEV(_components.code, {
        children: "first"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 673,
        columnNumber: 40
      }, this), " and ", _jsxDEV(_components.code, {
        children: "second"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 673,
        columnNumber: 52
      }, this), ",\r\nespecially if you have nested pairs. These macros fix that."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 673,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h3, {
      id: "user-content-vectors",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-vectors",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Vectors"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 676,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "using vi = vector<int>;\r\n#define sz(x) int((x).size())\r\n#define all(x) begin(x), end(x)\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 678,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 678,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "We convert a size to a signed integer to avoid unsigned overflow, as\r\nshown by this example:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 684,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "vi x;\r\ncout << x.size() - 1 << \"\\n\";  // otutputs 18446744073709551615 (incorrect)\r\ncout << sz(x) - 1 << \"\\n\";     // outputs -1 (correct)\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 687,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 687,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: [_jsxDEV(_components.code, {
        children: "all(v)"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 693,
        columnNumber: 1
      }, this), " makes sorting part or all of a vector a bit shorter."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 693,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "vi v{2, 4, 1, 5, 3};\r\nsort(1 + all(v));  // v is now {2, 1, 3, 4, 5}\r\n// This expands to sort(1 + begin(v), end(v));\r\nsort(all(v));  // {1, 2, 3, 4, 5}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 695,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 695,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-preprocessing-logic",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-preprocessing-logic",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Preprocessing Logic"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 702,
      columnNumber: 1
    }, this), "\n\n", _jsxDEV(_components.p, {
      children: ["Ever wanted to write a program that compiles in different ways depending on some\r\ninitial conditions? We can use preprocessor directives like ", _jsxDEV(_components.code, {
        children: "#if"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 707,
        columnNumber: 61
      }, this), " and ", _jsxDEV(_components.code, {
        children: "#else"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 707,
        columnNumber: 71
      }, this), ",\r\nor ", _jsxDEV(_components.code, {
        children: "#ifdef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 708,
        columnNumber: 4
      }, this), " and ", _jsxDEV(_components.code, {
        children: "#ifndef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 708,
        columnNumber: 17
      }, this), " to allow for this."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 706,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["For instance, I may want my struct ", _jsxDEV(_components.code, {
        children: "Point"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 710,
        columnNumber: 36
      }, this), " to be two-dimensional in some cases\r\nand three-dimensional in others. I can do this like so:"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 710,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "const bool d2 = false;  // true for 2D, false for 3D\r\n\r\ntemplate <class T> struct Point {\r\n#if (d2)\r\n\tT x;\r\n\tT y;\r\n#else\r\n\tT x;\r\n\tT y;\r\n\tT z;\r\n#endif\r\n};\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 713,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 713,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["If we are not opposed to using ", _jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 728,
        columnNumber: 32
      }, this), ", we could use ", _jsxDEV(_components.code, {
        children: "#ifdef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 728,
        columnNumber: 56
      }, this), " and ", _jsxDEV(_components.code, {
        children: "#ifndef"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 728,
        columnNumber: 69
      }, this), " to\r\nsee whether or not a macro is defined via ", _jsxDEV(_components.code, {
        children: "#define"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 729,
        columnNumber: 43
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 728,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "// #define 2D  // Uncomment to make Point 2D\r\n\r\ntemplate <class T> struct Point {\r\n#ifdef 2D\r\n\tT x;\r\n\tT y;\r\n#else\r\n\tT x;\r\n\tT y;\r\n\tT z;\r\n#endif\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 731,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 731,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: "There are many clever applications of this, including versioning. Importantly,\r\nif we want code to run differently for different versions of C++, we can write:"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 746,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "#if (__cplusplus < 201703L)\r\n/**\r\n * \"Clamps\" v between the values of lo and hi if it's\r\n * out of the bounds defined by those two values.\r\n */\r\ntemplate <class T> constexpr const T &clamp(const T &v, const T &lo, const T &hi) {\r\n\tassert(lo <= hi);\r\n\tif (v < lo) {\r\n\t\treturn lo;\r\n\t} else if (hi < v) {\r\n\t\treturn hi;\r\n\t}\r\n\treturn v;\r\n}\r\n#endif\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 749,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 749,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.h2, {
      id: "user-content-namespaces",
      children: [_jsxDEV(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        className: "anchor before",
        href: "#user-content-namespaces",
        children: _jsxDEV(HeaderLink, {}, undefined, false, {
          fileName: "<source.js>"
        }, this)
      }, undefined, false, {
        fileName: "<source.js>"
      }, this), "Namespaces"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 767,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Finally, we can write our own namespaces to separate various functions. Within a\r\nnamespace, we can have functions, variables, classes, and even more namespaces.\r\nThen, we can invoke ", _jsxDEV(_components.code, {
        children: "using"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 771,
        columnNumber: 21
      }, this), " declarations to use the whole namespace."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 769,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "namespace test {\r\nconst string greeting = \"hi\";\r\nnamespace test1 {\r\nconst int time = 2;\r\n}\r\nusing namespace test1;\r\n\r\ntemplate <class T> struct TestDS {\r\n\tT s;\r\n\r\n\tvoid add(T x) { s += x; }\r\n\r\n\tT get() { return s; }\r\n};\r\n}  // namespace test\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 773,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 773,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["These are fairly self-explanatory, but a more rare feature of C++11 is the\r\n", _jsxDEV(_components.code, {
        children: "inline namespace"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 792,
        columnNumber: 1
      }, this), ". Inline namespaces are not technically real namespaces but\r\nallow us to chunk up code and avoid having to use namespaces just to gain\r\naccess."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 791,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "inline namespace test {\r\nconst string greeting = \"hi\";\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 796,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 796,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["So why even have inline namespaces? We can use their features interestingly. For\r\ninstance, suppose we had a feature in an old version ", _jsxDEV(_components.code, {
        children: "v1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 803,
        columnNumber: 54
      }, this), " of a program but now\r\nremoved it in the new version ", _jsxDEV(_components.code, {
        children: "v2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 804,
        columnNumber: 31
      }, this), "."]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 802,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.pre, {
      children: _jsxDEV(_components.code, {
        className: "language-cpp",
        children: "namespace v1 {\r\nconst string buggy_feature = \"bugs\";\r\nconst string greeting = \"hi\";\r\n}  // namespace v1\r\n\r\ninline namespace v2 {\r\n// removed the buggy_feature from this new version\r\nconst string buggy_feature = \"what buggy feature?\";\r\nconst string greeting = \"hi\";\r\n}  // namespace v2\r\n\r\nint main() {\r\n\tcout << buggy_feature << \"\\n\";      // outputs \"what buggy feature?\"\r\n\tcout << v1::buggy_feature << \"\\n\";  // outputs \"bugs\"\r\n}\n"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 806,
        columnNumber: 1
      }, this)
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 806,
      columnNumber: 1
    }, this), "\n", _jsxDEV(_components.p, {
      children: ["Now, not using a namespace will automatically use ", _jsxDEV(_components.code, {
        children: "v2"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 824,
        columnNumber: 51
      }, this), ". But if we want access to\r\n", _jsxDEV(_components.code, {
        children: "v1"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 825,
        columnNumber: 1
      }, this), " of the ", _jsxDEV(_components.code, {
        children: "buggy_feature"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 825,
        columnNumber: 13
      }, this), ", we can simply write ", _jsxDEV(_components.code, {
        children: "v1::buggy_feature"
      }, undefined, false, {
        fileName: "<source.js>",
        lineNumber: 825,
        columnNumber: 50
      }, this), ". There you\r\nhave it, simple and effective version control!"]
    }, undefined, true, {
      fileName: "<source.js>",
      lineNumber: 824,
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

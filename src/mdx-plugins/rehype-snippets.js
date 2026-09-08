/*eslint-disable */
'use strict';

import { visit } from 'unist-util-visit';
// const nodeToString = require('hast-util-to-string');

const replacements = {
  Kattio: `//BeginCodeSnip{Kattio}
static class Kattio extends PrintWriter {
\tprivate BufferedReader r;
\tprivate StringTokenizer st;
\t// standard input
\tpublic Kattio() { this(System.in, System.out); }
\tpublic Kattio(InputStream i, OutputStream o) {
\t\tsuper(o);
\t\tr = new BufferedReader(new InputStreamReader(i));
\t}
\t// USACO-style file input
\tpublic Kattio(String problemName) throws IOException {
\t\tsuper(problemName + ".out");
\t\tr = new BufferedReader(new FileReader(problemName + ".in"));
\t}
\t// returns null if no more input
\tpublic String next() {
\t\ttry {
\t\t\twhile (st == null || !st.hasMoreTokens())
\t\t\t\tst = new StringTokenizer(r.readLine());
\t\t\treturn st.nextToken();
\t\t} catch (Exception e) { }
\t\treturn null;
\t}
\tpublic int nextInt() { return Integer.parseInt(next()); }
\tpublic double nextDouble() { return Double.parseDouble(next()); }
\tpublic long nextLong() { return Long.parseLong(next()); }
}
//EndCodeSnip`,
};

export default options => {
  options = options || {};

  return tree => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
      return;
    }
    if (node.children.length !== 1) {
      throw 'Expected only one child for a code block';
    }
    const newValue = [];
    for (const line of node.children[0].value.split('\n')) {
      let found = false;
      for (const key of Object.keys(replacements)) {
        const results = line.match(
          // The lookbehinds keep an already-expanded block's own
          // BeginCodeSnip{...} marker from being expanded a second time.
          new RegExp(`^(\\s*).*?((?<!Begin)(?<!End)CodeSnip\\{${key}\\})`)
        );
        if (results) {
          for (const snippetLine of replacements[key].split('\n')) {
            newValue.push(`${results[1]}${snippetLine}`);
          }
          found = true;
          break;
        }
      }
      if (!found) newValue.push(line);
    }
    node.children[0].value = newValue.join('\n');
  }
};

"use strict";
const {jsxDEV: _jsxDEV} = arguments[0];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    pre: "pre",
    ...props.components
  };
  return _jsxDEV(_components.pre, {
    children: _jsxDEV(_components.code, {
      className: "language-cpp",
      children: "#include \"secret.h\"\r\n\r\nint prefix[1000][1000], n;\r\n\r\nvoid populate(int L, int R, int A[]) {\r\n\tint mid = (L + R) / 2;\r\n\tprefix[mid][mid] = A[mid];\r\n\tprefix[mid + 1][mid + 1] = A[mid + 1];\r\n\r\n\tfor (int i = mid + 2; i <= R; i++)\r\n\t\tprefix[mid + 1][i] = Secret(prefix[mid + 1][i - 1], A[i]);\r\n\tfor (int i = mid - 1; i >= L; i--)\r\n\t\tprefix[mid][i] = Secret(A[i], prefix[mid][i + 1]);\r\n\r\n\tif (L < mid) populate(L, mid, A);\r\n\tif (mid + 1 < R) populate(mid + 1, R, A);\r\n}\r\n\r\nvoid Init(int N, int A[]) {\r\n\tn = N;\r\n\tpopulate(0, N - 1, A);\r\n}\r\n\r\nint Query(int L, int R) {\r\n\tint a = 0, b = n - 1;\r\n\r\n\twhile (a != b) {\r\n\t\tint mid = (a + b) / 2;\r\n\t\tif (mid >= L && mid < R) return Secret(prefix[mid][L], prefix[mid + 1][R]);\r\n\t\telse if (mid == R) return prefix[mid][L];\r\n\t\telse if (mid < L) a = mid + 1;\r\n\t\telse b = mid;\r\n\t}\r\n\r\n\treturn prefix[a][a];\r\n}\n"
    }, undefined, false, {
      fileName: "<source.js>",
      lineNumber: 2,
      columnNumber: 1
    }, this)
  }, undefined, false, {
    fileName: "<source.js>",
    lineNumber: 2,
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

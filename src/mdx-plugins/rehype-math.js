/*eslint-disable */
import { visit } from "unist-util-visit";
import katexPkg from "katex";
import { unified } from "unified";
import parse from "rehype-parse";
import { toText } from "hast-util-to-text";

const { renderToString } = katexPkg;
const assign = Object.assign;

const parseHtml = unified().use(parse, { fragment: true, position: false });

const source = "rehype-katex";

const customRehypeKatex = (options) => {
  const settings = options || {};
  const throwOnError = settings.throwOnError || false;

  return transformMath;

  function transformMath(tree, file) {
    visit(tree, "element", onelement);

    function onelement(element) {
      const classes = element.properties.className || [];
      const inline = classes.includes("math-inline");
      const displayMode = classes.includes("math-display");

      if (!inline && !displayMode) {
        return;
      }

      const value = toText(element);

      let result;

      try {
        result = renderToString(
          value,
          assign({}, settings, {
            displayMode: displayMode,
            throwOnError: true,
          }),
        );
      } catch (error) {
        const fn = throwOnError ? "fail" : "message";
        const origin = [source, error.name.toLowerCase()].join(":");

        if (typeof file[fn] === "function") {
          file[fn](error.message, element.position, origin);
        } else {
          throw error; // throw the error if the file doesn't have a fail or message function
        }

        result = renderToString(
          value,
          assign({}, settings, {
            displayMode: displayMode,
            throwOnError: false,
            strict: "ignore",
          }),
        );
      }

      const newNode = {
        type: "element",
        tagName: displayMode ? "MATHDIV" : "MATHSPAN",
        properties: {
          className: element.properties.className,
          latex: value,
        },
        children: [{ type: "text", value: result }],
      };
      assign(element, newNode);
    }
  }
};

export default customRehypeKatex;

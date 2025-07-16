import { builders } from "prettier/doc";
const { group, hardline, indent, join } = builders;

function findKeywordIndices(children, keywords) {
  const indices = [];

  children.forEach((child, index) => {
    if (child.type !== "silent_script") {
      return;
    }

    if (keywords.includes(child.value.keyword)) {
      indices.push(index);
    }
  });

  return indices;
}

// https://haml.info/docs/yardoc/file.REFERENCE.html#running-ruby--
function silentScript(path, _opts, print) {
  const { children, value } = path.getValue();
  const parts = [`- ${value.text.trim()}`];

  if (children.length > 0) {
    const scripts = path.map(print, "children");

    if (value.keyword === "case") {
      const keywordIndices = findKeywordIndices(children, ["when", "else"]);

      parts.push(
        scripts.map((script, index) => {
          const concated = [hardline, script];

          return keywordIndices.includes(index) ? concated : indent(concated);
        })
      );
    } else if (["if", "unless"].includes(value.keyword)) {
      const keywordIndices = findKeywordIndices(children, ["elsif", "else"]);

      parts.push(
        scripts.map((script, index) => {
          const concated = [hardline, script];

          return keywordIndices.includes(index) ? concated : indent(concated);
        })
      );
    } else {
      parts.push(indent([hardline, join(hardline, scripts)]));
    }
  }

  return group(parts);
}

export default silentScript;

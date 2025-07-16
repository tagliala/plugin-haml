import { builders } from "prettier/doc";
const { group, hardline, indent, join } = builders;

// https://haml.info/docs/yardoc/file.REFERENCE.html#filters
function filter(path, _opts, _print) {
  const { value } = path.getValue();

  return group([
    ":",
    value.name,
    indent([hardline, join(hardline, value.text.trim().split("\n"))])
  ]);
}

export default filter;

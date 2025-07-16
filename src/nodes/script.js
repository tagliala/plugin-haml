import { builders } from "prettier/doc";
const { group, hardline, indent, join } = builders;

// https://haml.info/docs/yardoc/file.REFERENCE.html#inserting_ruby
function script(path, opts, print) {
  const { children, value } = path.getValue();
  const parts = [];

  if (value.escape_html) {
    parts.unshift("&");
  }

  if (value.preserve) {
    parts.push("~");
  } else if (!value.interpolate) {
    parts.push("=");
  }

  parts.push(" ", value.text.trim());

  if (children.length > 0) {
    parts.push(indent([hardline, join(hardline, path.map(print, "children"))]));
  }

  return group(parts);
}

export default script;

import comment from "./nodes/comment.js";
import doctype from "./nodes/doctype.js";
import filter from "./nodes/filter.js";
import haml_comment from "./nodes/hamlComment.js";
import plain from "./nodes/plain.js";
import root from "./nodes/root.js";
import script from "./nodes/script.js";
import silent_script from "./nodes/silentScript.js";
import tag from "./nodes/tag.js";

const nodes = {
  comment,
  doctype,
  filter,
  haml_comment,
  plain,
  root,
  script,
  silent_script,
  tag
};

const genericPrint = (path, opts, print) => {
  const { type } = path.getValue();

  if (!(type in nodes)) {
    throw new Error(`Unsupported node encountered: ${type}`);
  }

  return nodes[type](path, opts, print);
};

export default genericPrint;

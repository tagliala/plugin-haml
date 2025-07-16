import { builders } from "prettier/doc";
const { hardline, join } = builders;

// The root node in the AST
function root(path, _opts, print) {
  return [join(hardline, path.map(print, "children")), hardline];
}

export default root;

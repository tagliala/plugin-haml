// https://haml.info/docs/yardoc/file.REFERENCE.html#plain-text
function plain(path, _opts, _print) {
  return path.getValue().value.text;
}

export default plain;

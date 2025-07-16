import embed from "./embed.js";
import parser from "./parser.js";
import printer from "./printer.js";

export default {
  languages: [
    {
      name: "HAML",
      parsers: ["haml"],
      extensions: [".haml"],
      vscodeLanguageIds: ["haml"]
    }
  ],
  parsers: {
    haml: parser
  },
  printers: {
    haml: {
      embed,
      print: printer
    }
  },
  defaultOptions: {
    printWidth: 80,
    tabWidth: 2
  }
};

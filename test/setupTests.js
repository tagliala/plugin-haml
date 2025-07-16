import { expect } from "vitest";
import prettier from "prettier";

async function checkFormat(before, after) {
  const formatted = await prettier.format(before, {
    parser: "haml",
    plugins: ["./src/plugin.js"]
  });

  return {
    pass: formatted === `${after}\n`,
    message: () => `Expected:\n${after}\nReceived:\n${formatted}`
  };
}

expect.extend({
  async toChangeFormat(received, expected) {
    const result = await checkFormat(received, expected);
    return {
      pass: result.pass,
      message: result.message
    };
  },
  async toMatchFormat(received) {
    const result = await checkFormat(received, received);
    return {
      pass: result.pass,
      message: result.message
    };
  }
});

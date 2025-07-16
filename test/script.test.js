import { describe, it, expect } from "vitest";
import { haml } from "./utils";

describe("script", () => {
  it("single line", () => {
    expect('%p= "hello"').toMatchFormat();
  });

  it("multi line", () => {
    const content = haml(`
      %p
        = ['hi', 'there', 'reader!'].join " "
        = "yo"
    `);

    expect(content).toMatchFormat();
  });

  it("preserve", () => {
    expect('~ "Foo\\n<pre>Bar\\nBaz</pre>"').toMatchFormat();
  });
});

import { describe, it, expect } from "vitest";
import { haml } from "./utils";

describe("haml comment", () => {
  it("same line", () => {
    expect("-# comment").toMatchFormat();
  });

  it("multi line", () => {
    const content = haml(`
      -#
        this is
          a multi line
        comment
    `);

    expect(content).toMatchFormat();
  });

  it("weird spacing same line", () => {
    expect("-#      foobar     ").toChangeFormat("-# foobar");
  });
});

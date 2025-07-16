import { describe, it, expect } from "vitest";
import { haml } from "./utils";

describe("comment", () => {
  it("single line", () => {
    expect("/ This is the peanutbutterjelly element").toMatchFormat();
  });

  it("multi line", () => {
    const content = haml(`
      /
        %p This doesn't render, because it's commented out!
    `);

    expect(content).toMatchFormat();
  });

  it("conditional", () => {
    const content = haml(`
      /[if IE]
        %h1 Get Firefox
    `);

    expect(content).toMatchFormat();
  });

  it("revealed", () => {
    const content = haml(`
      /![if !IE]
        You are not using Internet Explorer, or are using version 10+.
    `);

    expect(content).toMatchFormat();
  });
});

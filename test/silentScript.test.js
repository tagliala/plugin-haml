import { describe, it, expect } from "vitest";
import { haml } from "./utils";

describe("silent script", () => {
  it("single line", () => {
    expect('- foo = "hello"').toMatchFormat();
  });

  it("multi line with case", () => {
    const content = haml(`
      - case foo
      - when 1
        = "1"
        %span bar
      - when 2
        = "2"
      - else
        = "3"
    `);

    expect(content).toMatchFormat();
  });

  it("multi line with if/else", () => {
    const content = haml(`
      - if foo
        %span bar
        -# baz
      - elsif qux
        = "qax"
      - else
        -# qix
    `);

    expect(content).toMatchFormat();
  });

  it("multi line with unless/else", () => {
    const content = haml(`
      - unless foo
        %span bar
        -# baz
      - elsif qux
        = "qax"
      - else
        -# qix
    `);

    expect(content).toMatchFormat();
  });
});

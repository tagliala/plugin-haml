import { describe, it, expect } from "vitest";
import { long, haml } from "./utils";

describe("tag", () => {
  it("class", () => {
    expect("%p.foo").toMatchFormat();
  });

  it("class multiple", () => {
    expect("%p.foo.bar.baz").toMatchFormat();
  });

  it("id", () => {
    expect("%p#foo").toMatchFormat();
  });

  it("classes and id", () => {
    expect("%p.foo.bar#baz").toMatchFormat();
  });

  it("self closing", () => {
    expect("%br/").toMatchFormat();
  });

  it("whitespace removal right single line", () => {
    expect('%p<= "Foo\\nBar"').toMatchFormat();
  });

  it("whitespace removal right multi line", () => {
    const content = haml(`
      %blockquote<
        %div
          Foo!
    `);

    expect(content).toMatchFormat();
  });

  it("dynamic attributes", () => {
    const content = "%div{ data: { controller: 'lesson-evaluation' } }";

    expect(content).toMatchFormat();
  });

  it("object reference", () => {
    const content = haml(`
      %div[@user, :greeting]
        %bar[290]/
        Hello!
    `);

    expect(content).toMatchFormat();
  });

  it("long declaration before text", () => {
    const declaration = `%button{ data: { current: ${long} } }`;

    expect(`${declaration} foo`).toChangeFormat(`${declaration}\n  foo`);
  });
});

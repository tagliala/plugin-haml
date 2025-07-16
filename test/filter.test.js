import { describe, it, expect } from "vitest";
import { haml } from "./utils";

describe("filter", () => {
  it("custom", () => {
    const content = haml(`
      :python
        def foo:
          bar
    `);

    expect(content).toMatchFormat();
  });

  it("css", () => {
    const content = haml(`
      :css
        .foo { height: 100px; width: 100px; }
    `);

    expect(content).toChangeFormat(
      haml(`
        :css
          .foo {
            height: 100px;
            width: 100px;
          }
      `)
    );
  });

  it("javascript", () => {
    const content = haml(`
      :javascript
        1+1
    `);

    expect(content).toChangeFormat(
      haml(`
        :javascript
          1 + 1;
      `)
    );
  });

  it("less", () => {
    const content = haml(`
      :less
        .foo { .bar { height: 100px; } }
    `);

    expect(content).toChangeFormat(
      haml(`
        :less
          .foo {
            .bar {
              height: 100px;
            }
          }
      `)
    );
  });

  it("markdown", () => {
    const content = haml(`
      :markdown
        *Hello, world!*
    `);

    expect(content).toChangeFormat(
      haml(`
        :markdown
          _Hello, world!_
      `)
    );
  });

  it("scss", () => {
    const content = haml(`
      :scss
        .foo { .bar { height: 100px; } }
    `);

    expect(content).toChangeFormat(
      haml(`
        :scss
          .foo {
            .bar {
              height: 100px;
            }
          }
      `)
    );
  });
});

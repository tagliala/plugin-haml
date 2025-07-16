import { describe, it, expect } from "vitest";

describe("plain", () => {
  const specialChars = ["%", ".", "#", "/", "!", "=", "&", "~", "-", "\\", ":"];

  it.each(specialChars)("escapes starting %s", (specialChar) => {
    expect(`\\${specialChar}`).toMatchFormat();
  });

  it("does not unnecessarily escape other characters", () => {
    expect("foo").toMatchFormat();
  });
});

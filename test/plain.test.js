import { describe, it, expect } from "vitest";

describe("plain", () => {
  const specialChars = ["%", ".", "#", "/", "!", "=", "&", "~", "-", "\\", ":"];

  specialChars.forEach((specialChar) => {
    it(`escapes starting ${specialChar}`, () => {
      expect(`\\${specialChar}`).toMatchFormat();
    });
  });

  it("does not unnecessarily escape other characters", () => {
    expect("foo").toMatchFormat();
  });
});

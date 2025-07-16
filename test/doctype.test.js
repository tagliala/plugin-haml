import { describe, it, expect } from "vitest";

describe("doctype", () => {
  it("basic", () => {
    expect("!!! Basic").toMatchFormat();
  });

  it("frameset", () => {
    expect("!!! Frameset").toMatchFormat();
  });

  it("mobile", () => {
    expect("!!! Mobile").toMatchFormat();
  });

  it("rdfa", () => {
    expect("!!! RDFa").toMatchFormat();
  });

  it("strict", () => {
    expect("!!! Strict").toMatchFormat();
  });

  it("xml", () => {
    expect("!!! XML").toMatchFormat();
  });

  it("encoding", () => {
    expect("!!! XML iso-8859-1").toMatchFormat();
  });
});

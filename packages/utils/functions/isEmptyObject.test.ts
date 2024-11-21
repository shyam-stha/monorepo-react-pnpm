import { describe, expect, it } from "vitest";
import { isEmptyObject } from "./isEmptyObject";

describe("isEmptyObject", () => {
  it("should return true for an empty object", () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it("should return false for a non-empty object", () => {
    expect(isEmptyObject({ object: "full", status: "active" })).toBe(false);
  });

  it("should return false for non-object inputs (type safety test)", () => {
    expect(isEmptyObject("hey" as unknown as object)).toBe(false);
  });
});

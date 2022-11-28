import invariant from "./invariant";

describe("invariant", () => {
  it("Should throw when condition is false", () => {
    expect(function fn() {
      invariant(typeof 1 === "string");
    }).toThrow();
  });

  it("Should not throw when condition is true", () => {
    expect(function fn() {
      invariant(typeof 1 === "number");
    }).not.toThrow();
  });

  it("Should throw custom message if provided", () => {
    const message = "Custom error message";

    expect(function fn() {
      invariant(typeof 1 === "string", message);
    }).toThrow(message);
  });
});

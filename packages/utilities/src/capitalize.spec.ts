import capitalize from "./capitalize";

describe("capitalize", () => {
  it("Should capitalize properly", () => {
    expect(capitalize("hello. this is me.")).toBe("Hello. This is me.");
  });

  it("Should be able to use custom delimiter", () => {
    expect(capitalize("good-boy-johny", { delimiter: "-" })).toBe("Good-Boy-Johny");
  });

  it("Should be able to enable trim", () => {
    expect(capitalize("hi    john   ", { trim: true, delimiter: " " })).toBe("Hi John");
  });

  it("Should be able to enable lower", () => {
    expect(capitalize("HI jOHn", { lower: true, delimiter: " " })).toBe("Hi John");
  });
});

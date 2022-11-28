import omit from "./omit";

describe("omit", () => {
  it("Should omit props by keys (0)", () => {
    const subject = {
      Aa: 1,
      Bb: 2,
      Cc: 3,
      Dd: 4,
      Ee: 5,
    };

    expect(omit(subject, "Aa", "Bb", "Cc")).toStrictEqual(
      expect.objectContaining({
        Dd: 4,
        Ee: 5,
      }),
    );
  });

  it("Should omit props by keys (1)", () => {
    expect(omit({ Aa: 1 }, "Aa")).toStrictEqual(expect.objectContaining({}));
  });
});

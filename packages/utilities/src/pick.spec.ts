import pick from "./pick";

describe("pick", () => {
  it("Should pick props by keys", () => {
    const picked = pick({ Aa: 1, Bb: 2, Cc: 3, Dd: 4, Ee: 5 }, "Aa", "Bb", "Cc");

    expect(picked).toEqual(
      expect.objectContaining({
        Aa: 1,
        Bb: 2,
        Cc: 3,
      }),
    );
  });
});

import arrayRandom from "./arrayRandom";

const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

describe("Array Unique", () => {
  it("Should return random item from array (1)", () => {
    expect(array).toContain(arrayRandom(array));
  });

  it("Should return random item from array (2)", () => {
    expect(array).toContain(arrayRandom(array));
  });
});

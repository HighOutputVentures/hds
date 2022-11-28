import arrayUnique from "./arrayUnique";

describe("Array Unique", () => {
  it("Should remove duplicate items from array", () => {
    const uniqueArray = arrayUnique([1, 2, 2, 3, 3, 3]);

    expect(uniqueArray).toEqual([1, 2, 3]);
  });

  it("Should use custom matcher to remove duplicate items from array", () => {
    const uniqueArray = arrayUnique(
      [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 3 }, { id: 3 }],
      (item) => item.id,
    );

    expect(uniqueArray).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
});

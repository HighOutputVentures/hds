import arrayChunk from "./arrayChunk";

const array = new Array(50).fill(null).map(Math.random);

describe("Array Chunk", () => {
  it("Should chunk array correctly (1)", () => {
    const chunks = arrayChunk(array, 5);
    expect(chunks).toHaveLength(10);
    for (const chunk of chunks) expect(chunk).toHaveLength(5);
  });

  it("Should chunk array correctly (2)", () => {
    const chunks = arrayChunk(array, 6);
    expect(chunks).toHaveLength(Math.ceil(array.length / 6));

    const copy = [...chunks];
    copy.pop();
    for (const chunk of copy) expect(chunk).toHaveLength(6);

    expect(chunks[chunks.length - 1]).toHaveLength(Math.floor(50 % 6));
  });
});

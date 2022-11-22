import withRangeSlider from "./withRangeSlider";

describe("withRangeSlider", () => {
  it("Should return theme for 'RangeSlider'", () => {
    expect(withRangeSlider()).toEqual(
      expect.objectContaining({
        components: {
          RangeSlider: expect.any(Object),
        },
      }),
    );
  });
});

import withSlider from "./withSlider";

describe("withRangeSlider", () => {
  it("Should return theme for 'RangeSlider'", () => {
    expect(withSlider()).toEqual(
      expect.objectContaining({
        components: {
          Slider: expect.any(Object),
        },
      }),
    );
  });
});

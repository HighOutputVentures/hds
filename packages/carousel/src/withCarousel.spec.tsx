import withCarousel from "./withCarousel";

describe("withSwitch", () => {
  it("Should return theme for 'Switch'", () => {
    expect(withCarousel()).toEqual(
      expect.objectContaining({
        components: {
          Carousel: expect.any(Object),
        },
      }),
    );
  });
});

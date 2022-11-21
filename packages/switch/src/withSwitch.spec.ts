import withSwitch from "./withSwitch";

describe("withSwitch", () => {
  it("Should return theme for 'Switch'", () => {
    expect(withSwitch()).toEqual(
      expect.objectContaining({
        components: {
          Switch: expect.any(Object),
        },
      }),
    );
  });
});

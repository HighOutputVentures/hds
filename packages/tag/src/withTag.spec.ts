import withTag from './withTag';

describe('withTag', () => {
  it("Should return theme for 'Tag'", () => {
    expect(withTag()).toEqual(
      expect.objectContaining({
        components: {
          Tag: expect.any(Object),
          Checkbox: expect.any(Object),
        },
      }),
    );
  });
});

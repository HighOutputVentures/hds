import withAvatarLabel from './withAvatarLabel';

describe('withAvatarLabel', () => {
  it("Should return theme for 'AvatarLabel'", () => {
    expect(withAvatarLabel()).toEqual(
      expect.objectContaining({
        components: {
          AvatarLabel: expect.any(Object),
        },
      }),
    );
  });
});

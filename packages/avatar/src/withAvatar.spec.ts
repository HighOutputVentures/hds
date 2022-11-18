import withAvatar from './withAvatar';

describe('withAvatar', () => {
  it("Should return theme for 'Avatar'", () => {
    expect(withAvatar()).toEqual(
      expect.objectContaining({
        components: {
          Avatar: expect.any(Object),
          AvatarLabel: expect.any(Object),
        },
      }),
    );
  });
});

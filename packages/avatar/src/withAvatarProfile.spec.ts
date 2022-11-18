import withAvatarProfile from './withAvatarProfile';

describe('withAvatarProfile', () => {
  it("Should return theme for 'AvatarProfile'", () => {
    expect(withAvatarProfile()).toEqual(
      expect.objectContaining({
        components: {
          AvatarProfile: expect.any(Object),
        },
      }),
    );
  });
});

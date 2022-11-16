import withTag from './withTag';

describe('withTag', () => {
  it('Should return theme as object', () => {
    expect(withTag()).toEqual(expect.any(Object));
  });
});

import { applyOpacity, createObjectFromKeysWithSameProps } from './_utils';

describe("'applyOpacity'", () => {
  it('should correctly convert a valid HEX color with opacity', () => {
    expect(applyOpacity('#ff0000', 50)).toEqual('rgba(255, 0, 0, 0.5)');
    expect(applyOpacity('#00ff00', 25)).toEqual('rgba(0, 255, 0, 0.25)');
    expect(applyOpacity('#0000ff', 75)).toEqual('rgba(0, 0, 255, 0.75)');
    expect(applyOpacity('#123', 100)).toEqual('rgba(17, 34, 51, 1)');
  });

  it('should correctly convert a valid RGB color with opacity', () => {
    expect(applyOpacity('rgb(255, 0, 0)', 50)).toEqual('rgba(255, 0, 0, 0.5)');
    expect(applyOpacity('rgb(0, 255, 0)', 25)).toEqual('rgba(0, 255, 0, 0.25)');
    expect(applyOpacity('rgb(0, 0, 255)', 75)).toEqual('rgba(0, 0, 255, 0.75)');
    expect(applyOpacity('rgb(17, 34, 51)', 100)).toEqual('rgba(17, 34, 51, 1)');
  });

  it('should return the original color if it is not a valid HEX or RGB format', () => {
    expect(applyOpacity('purple', 50)).toEqual('purple');
    expect(applyOpacity('123456', 25)).toEqual('123456');
    expect(applyOpacity('rgba(0, 0, 0, 1)', 75)).toEqual('rgba(0, 0, 0, 1)');
  });
});

describe("'createObjectFromKeysWithSameProps'", () => {
  test('Should work properly', () => {
    const result = createObjectFromKeysWithSameProps(
      {
        prop1: 1,
        prop2: 2,
      },
      'key1',
      'key2',
      'key3',
    );

    expect(result).toEqual({
      key1: { prop1: 1, prop2: 2 },
      key2: { prop1: 1, prop2: 2 },
      key3: { prop1: 1, prop2: 2 },
    });
  });
});

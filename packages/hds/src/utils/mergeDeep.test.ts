import mergeDeep from './mergeDeep';

describe('mergeDeep util', () => {
  it('Should merge objects deeply', () => {
    const obj_0 = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4,
        f: {
          g: 5,
          h: 6,
        },
      },
    };

    const obj_1 = {
      c: {
        d: 'Aa',
        e: 'Bb',
      },
      i: 'Cc',
      j: 'Dd',
    };

    expect(mergeDeep(obj_0, obj_1)).toStrictEqual({
      a: 1,
      b: 2,
      c: {
        d: 'Aa',
        e: 'Bb',
        f: {
          g: 5,
          h: 6,
        },
      },
      i: 'Cc',
      j: 'Dd',
    });
  });
});

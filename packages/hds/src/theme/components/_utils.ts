const isHEX = (color: string) => color.startsWith('#');
const isRGB = (color: string) => color.startsWith('rgb(');

/**
 *
 * Add opacity to RGB or HEX color
 *
 * @param color HEX or RGB color
 * @param opacity the alpha value. `0` is the smallest and `100` is the highest
 * @returns {string} RGBA color
 *
 */
export function applyOpacity(color: string, opacity: number): string {
  if (!(typeof color === 'string' && typeof opacity === 'number')) return '';

  color = color.trim();
  color = color.toLowerCase();

  if (isHEX(color)) {
    color = color.slice(1);

    if (color.length === 3) {
      color = color.replace(/./g, '$&$&');
    }

    const red = parseInt(color.substring(0, 2), 16);
    const green = parseInt(color.substring(2, 4), 16);
    const blue = parseInt(color.substring(4, 6), 16);
    const alpha = opacity / 100;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  if (isRGB(color)) {
    const rgb = color.substring(4, color.length - 1).split(',');

    const red = parseInt(rgb[0]);
    const green = parseInt(rgb[1]);
    const blue = parseInt(rgb[2]);
    const alpha = opacity / 100;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return color;
}

/**
 *
 * @example
 *
 * const obj = createObjectFromKeysWithSameProps(
 *  {
 *    prop1: 1,
 *    prop2: 2,
 *  },
 *  'key1',
 *  'key2',
 *  'key3',
 * );
 *
 * console.log(obj.key1) // { prop1: 1, prop2: 2 }
 * console.log(obj.key2) // { prop1: 1, prop2: 2 }
 * console.log(obj.key3) // { prop1: 1, prop2: 2 }
 *
 */
export function createObjectFromKeysWithSameProps<
  T extends Record<string, any>,
  K extends string,
>(props: T, ...keys: K[]) {
  return keys.reduce<Partial<Record<K, T>>>((obj, key) => {
    return {
      ...obj,
      [key]: props,
    };
  }, {}) as { [P in K]: T };
}

export function isGrayish(colorScheme = '') {
  const grayishColorSchemes = [
    //
    'gray',
    'Gray',
    'neutral',
    'neutrals',
  ];

  return grayishColorSchemes.includes(colorScheme);
}

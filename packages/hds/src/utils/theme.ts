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
  color = color.trim().toLowerCase();

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

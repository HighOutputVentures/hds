type Dict = Record<string, any>;

/**
 *
 * deeply merge objects
 *
 */
export default function merge(target: Dict, source: Dict) {
  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = [...targetValue, ...sourceValue];
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = merge(targetValue, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}

function isObject(subject: unknown) {
  return Object.prototype.toString.call(subject) === "[object Object]";
}

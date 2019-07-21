

/**
 * Merges a set of default keys with a target object
 * (Like _.defaults, but will also extend onto null/undefined)
 *
 * @param {Object} [target] The object to extend
 * @param {Object} defs The object to default to
 * @return {Object} extendedTarget
 */

export function mergeFields(target, defs) {
  let targetObj = {};
  if (target) targetObj = target;
  return Object.keys(defs).reduce((acc, key) => ({
    ...acc,
    [key]: targetObj[key] || defs[key],
  }), {});
}

export function generateShortScale() {
  const base = [100];
  for (let i = 1; i <= 16; i += 1) {
    // eslint-disable-next-line no-restricted-properties
    base.push(Math.pow(10, i * 3));
  }
  return base;
}

export function generateLongScale() {
  const base = [100, 1000];
  for (let i = 1; i <= 15; i += 1) {
    // eslint-disable-next-line no-restricted-properties
    base.push(Math.pow(10, i * 6));
  }

  return base;
}

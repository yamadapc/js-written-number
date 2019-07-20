"use strict";
/**
 * Merges a set of default keys with a target object
 * (Like _.defaults, but will also extend onto null/undefined)
 *
 * @param {Object} [target] The object to extend
 * @param {Object} defs The object to default to
 * @return {Object} extendedTarget
 */

export function mergeFields(target = {}, defs) {
  return Object.keys(defs).reduce((acc, key) => {
    return {
      ...acc,
      [key]:  target[key] || defs[key],
    }
  }, {});
}

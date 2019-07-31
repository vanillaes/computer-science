// @ts-check

/**
 * Sorts an array of items
 *
 * @export
 * @param {*[]} array
 * @param {Function} [compare=defaultCompare]
 * @returns {*[]}
 */
export function selectionSort (array, compare = defaultCompare) {
  const N = array.length;
  for (let i = 0; i < N; i++) {
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (compare(array[j], array[min])) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
}

/**
 * The default comparator (asc order) used in the sort
 *
 * @param {*} a
 * @param {*} b
 * @returns {boolean}
 */
function defaultCompare (a, b) {
  return a < b;
}

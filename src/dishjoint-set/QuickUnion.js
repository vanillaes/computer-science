// @ts-check

/**
 * @class QuickUnion
 * @exports
 */
export class QuickUnion {
  /**
   * The identity array
   *
   * @private
   * @type {Map}
   */
  verticies = null;

  /**
   * The number of sets
   *
   * @type {Number}
   */
  count = 0;

  /**
   * @constructs QuickUnion
   * @param {*[]} [values]
   */
  constructor (values = []) {
    this.verticies = new Map();
    values.forEach((value) => {
      this.verticies.set(value, value);
    });

    this.count = this.verticies.size;
  }

  /**
   * Find the id for a value
   *
   * @param {*} value
   * @returns {*}
   */
  find (value) {
    let id = value;
    while (id !== this.verticies.get(id)) {
      id = this.verticies.get(id);
      if (id === undefined) { throw Error(`Item: ${value} not found in the set`); }
    }

    return id;
  }

  /**
   * Are the 2 verticies connected?
   *
   * @param {*} valueA
   * @param {*} valueB
   * @returns {boolean}
   */
  connected (valueA, valueB) {
    return this.find(valueA) === this.find(valueB);
  }

  /**
   * Join the verticies if not alredy in the same set
   *
   * @param {*} valueA
   * @param {*} valueB
   */
  union (valueA, valueB) {
    if (this.connected(valueA, valueB)) { return; }

    const idA = this.find(valueA);
    const idB = this.find(valueB);
    this.verticies.set(idA, idB)

    this.count--;
  }

  /**
   * Returns a 2D array of the unique sets and the values in those sets
   *
   * @returns [][]
   */
  sets () {
    const verticies = [...this.verticies.entries()];
    const sets = verticies.reduce((acc, curr) => {
      const root = this.verticies.get(curr[1]);
      // create the set array if it doesn't exist
      if (acc[root] === undefined) { acc[root] = []; }
      acc[root].push(curr[0]);
      return acc;
    }, {});

    return Object.values(sets);
  }
}

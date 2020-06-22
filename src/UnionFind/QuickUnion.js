/** QuickUnion is a slightly more optimal (ie tree-based) implementation of a UnionFind data structure. */

export class QuickUnion {
  /**
   * The identity array
   * @private
   * @type {Map<any, any>}
   */
  verticies = null;

  /**
   * The number of sets
   * @type {Number}
   */
  count = 0;

  /**
   * @constructs QuickUnion
   * @param {*[]} [values] an array of verticies to add to the set
   */
  constructor (values = []) {
    this.verticies = new Map()
    values.forEach((value) => {
      this.verticies.set(value, value)
    })

    this.count = this.verticies.size
  }

  /**
   * Find the id for a value
   *
   * @param {*} value the value to lookup
   * @returns {*} the identity of the set containing the item
   */
  find (value) {
    let id = value
    while (id !== this.verticies.get(id)) {
      id = this.verticies.get(id)
      if (id === undefined) { throw Error(`Item: ${value} not found in the set`) }
    }

    return id
  }

  /**
   * Are the 2 verticies connected?
   *
   * @param {*} valueA the first vertex to compare
   * @param {*} valueB the second vertex to compare
   * @returns {boolean} true if the verticies are connected, false if not
   */
  connected (valueA, valueB) {
    return this.find(valueA) === this.find(valueB)
  }

  /**
   * Join the verticies if not alredy in the same set
   *
   * @param {*} valueA the first vertex to connect
   * @param {*} valueB the second vertex to connect
   */
  union (valueA, valueB) {
    if (this.connected(valueA, valueB)) { return }

    const idA = this.find(valueA)
    const idB = this.find(valueB)
    this.verticies.set(idA, idB)

    this.count--
  }

  /**
   * Returns a 2D array of the unique sets and the values in those sets
   *
   * @returns [][] a 2D array containing the disjoint sets
   */
  sets () {
    const verticies = [...this.verticies.entries()]
    const sets = verticies.reduce((acc, curr) => {
      const root = this.verticies.get(curr[1])
      // create the set array if it doesn't exist
      if (acc[root] === undefined) { acc[root] = [] }
      acc[root].push(curr[0])
      return acc
    }, {})

    return Object.values(sets)
  }
}

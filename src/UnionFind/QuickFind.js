/** QuickFind is a simple but less optimal implementation of a UnionFind data structure. */
export class QuickFind {
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
   * @constructs QuickFind
   * @param {*[]} [values] an array of verticies to add to the set
   */
  constructor (values = []) {
    this.verticies = new Map()
    values.forEach((value, i) => {
      this.verticies.set(value, i)
    })

    this.count = this.verticies.size
  }

  /**
   * Find the id for a value
   *
   * @param {*} value the value to lookup
   * @returns {Number} the identity of the set containing the item
   */
  find (value) {
    const id = this.verticies.get(value)
    if (id === undefined) { throw Error(`Item: ${value} not found in the set`) }

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
   * Join the verticies if not already in the same set
   *
   * @param {*} valueA the first vertex to connect
   * @param {*} valueB the second vertex to connect
   */
  union (valueA, valueB) {
    if (this.connected(valueA, valueB)) { return }

    const idA = this.find(valueA)
    const idB = this.find(valueB)

    this.verticies.forEach((id, key) => {
      if (id === idA) {
        this.verticies.set(key, idB)
      }
    })
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
      // create the set array if it doesn't exist
      if (acc[curr[1]] === undefined) { acc[curr[1]] = [] }
      acc[curr[1]].push(curr[0])
      return acc
    }, {})

    return Object.values(sets)
  }
}

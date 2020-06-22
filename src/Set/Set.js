/** A Set implementation using an array */
export class Set {
  /**
   * The set's values
   * @private
   * @type {*[]}
   */
  values = [];

  /**
   * The number of items in the set
   * @type {number}
   */
  size = 0;

  /**
   * @param {*[]} [items] an array of items to add to the set
   */
  constructor (items) {
    if (items) {
      this.addAll(items)
    }
  }

  /**
   * Add an item to the set
   *
   * @param {*} item an item to add to the set
   */
  add (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined') }
    if (!this.values.includes(item)) {
      this.values.push(item)
      this.size++
    }
  }

  /**
   * Add multiple items to the set
   *
   * @param {*[]} items an array of items to be added to the set
   */
  addAll (items = null) {
    if (items === null) { throw Error('\'items\' parameter not defined') }

    items.forEach(item => this.add(item))
  }

  /**
   * Remove an item from the set
   *
   * @param {*} item the item to remove from the set
   * @returns {boolean} true if the item was successfully removed, false if not
   */
  remove (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined') }
    const index = this.values.indexOf(item)
    if (index !== -1) {
      this.values = [...this.values.slice(0, index), ...this.values.slice(index + 1)]
      this.size--
      return true
    }
    return false
  }

  /**
   * Remove all items from the set
   * @method
   */
  clear () {
    this.values = []
    this.size = 0
  }

  /**
   * Iterate all items in the set
   *
   * @private
   * @returns {Iterator<*>} an iterator for the data
   */
  [Symbol.iterator] () {
    return this.values[Symbol.iterator]()
  }
}

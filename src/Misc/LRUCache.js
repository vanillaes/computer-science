/** A LRU (Least Recently Used) cache implementation */
export class LRUCache {
  /**
   * the capacity of the cache
   * @private
   * @type {number}
   */
  capacity = 0;

  /**
   * the items map
   * @private
   * @type {Map}
   */
  items = new Map();

  /**
   * the cache order
   * @private
   * @type {Array}
   */
  dequeue = [];

  constructor (capacity = null) {
    if (capacity === null) { throw Error('\'capacity\' parameter not defined'); }

    this.capacity = capacity;
  }

  /**
   * @param {number} key The key of the item to look up
   * @return {number} The value of the item
   */
  get (key) {
    const index = this.dequeue.indexOf(key);
    if (index === -1) {
      return index;
    }
    this.dequeue.splice(index, 1);
    this.dequeue.unshift(key);
    return this.items.get(key);
  }

  /**
   * @param {number} key The key of the item to add/update
   * @param {number} value The value of the item add/update
   * @return {void}
   */
  put (key, value) {
    if (this.get(key) !== -1) {
      this.items.set(key, value);
      return;
    }
    if (this.dequeue.length > this.capacity) {
      const removeKey = this.dequeue.pop();
      this.items.delete(removeKey);
    }
    this.dequeue.unshift(key);
    this.items.set(key, value);
  }

  /**
   * Remove all items from the cache
   * @method
   */
  clear () {
    this.items = new Map();
    this.dequeue = [];
  }

  /**
   * An iterator that returns the keys in recent -> least-recent order
   *
   * @returns {*} an iterator for the item keys
   */
  * keys () {
    for (const key of this.dequeue) {
      yield key;
    }
  }

  /**
   * An iterator that returns the values in recent -> least-recent order
   *
   * @returns {*} an iterator for the item values
   */
  * values () {
    for (const key of this.dequeue) {
      yield this.items.get(key);
    }
  }

  /**
   * An iterator that returns the entries in recent -> least-recent order
   *
   * @returns {*} an iterator for the items
   */
  * entries () {
    for (const key of this.dequeue) {
      yield [key, this.items.get(key)];
    }
  }
}

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
  keys () {
    let index = 0;
    return {
      [Symbol.iterator]: () => {
        return {
          next: () => {
            if (index < this.dequeue.length) {
              const value = this.dequeue[index++];
              return { value, done: false };
            }
            return { value: null, done: true };
          }
        };
      }
    };
  }

  /**
   * An iterator that returns the values in recent -> least-recent order
   *
   * @returns {*} an iterator for the item values
   */
  values () {
    let index = 0;
    return {
      [Symbol.iterator]: () => {
        return {
          next: () => {
            if (index < this.dequeue.length) {
              const key = this.dequeue[index++];
              const value = this.items.get(key);
              return { value, done: false };
            }
            return { value: null, done: true };
          }
        };
      }
    };
  }

  /**
   * An iterator that returns the entries in recent -> least-recent order
   *
   * @returns {*} an iterator for the items
   */
  entries () {
    let index = 0;
    return {
      [Symbol.iterator]: () => {
        return {
          next: () => {
            if (index < this.dequeue.length) {
              const key = this.dequeue[index++];
              const val = this.items.get(key);
              const value = [key, val];
              return { value, done: false };
            }
            return { value: null, done: true };
          }
        };
      }
    };
  }
}

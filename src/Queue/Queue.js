/** A Queue implementation using nodes liked by reference */
export class Queue {
  /**
   * The first item in the queue
   * @private
   * @type {Object}
   */
  first = null;

  /**
   * The last item in the queue
   * @private
   * @type {Object}
   */
  last = null;

  /**
   * The number of items in the queue
   * @type {number}
   */
  size = 0;

  /**
   * @param {array} [items] an array of items to add to the queue
   */
  constructor (items) {
    if (items) {
      this.enqueueAll(items)
    }
  }

  /**
   * Add an item to the end of the queue
   *
   * @param {*} item an item to add to the queue
   */
  enqueue (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined') }
    if (this.size !== 0) {
      const prevLast = this.last
      this.last = new QueueNode(item, null)
      prevLast.link = this.last
    } else {
      this.first = new QueueNode(item, null)
      this.last = this.first
    }
    this.size++
  }

  /**
   * Add multiple items to the end of the queue
   *
   * @param {*[]} items an array of items to be added to the queue
   */
  enqueueAll (items = null) {
    if (items === null) { throw Error('\'items\' parameter not defined') }

    items.forEach(item => this.enqueue(item))
  }

  /**
   * Remove and return the first item in the queue
   *
   * @returns {*} removes and returns the last item in the queue
   */
  dequeue () {
    if (this.size === 0) { throw Error('can\'t dequeue an item from an empty queue') }
    const dequeued = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = dequeued.link
    }
    this.size--

    return dequeued.data
  }

  /**
   * Return the first item in the queue
   *
   * @returns {*} the last item in the queue
   */
  peek () {
    if (this.size === 0) { throw Error('can\'t peek an item from an empty stack') }

    return this.first.data
  }

  /**
   * Remove all items from the queue
   * @method
   */
  clear () {
    this.first = null
    this.last = null
    this.size = 0
  }

  /**
   * Iterate all items (first-to-last) in the queue
   *
   * @private
   * @returns {Iterator<*>}
   */
  [Symbol.iterator] () {
    let item = this.first
    return {
      next: () => {
        if (item) {
          const value = item.data
          item = item.link
          return { value, done: false }
        }

        return { value: null, done: true }
      }
    }
  }
}

/**
 * @private
 */
class QueueNode {
  data;
  link;

  constructor (data, link = null) {
    this.data = data
    this.link = link
  }
}

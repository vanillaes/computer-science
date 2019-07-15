// @ts-check

/**
 * @export
 * @class Stack
 */
export class Stack {
  /**
   * The top item of the stack
   *
   * @private
   * @type {Object}
   */
  top = null;

  /**
   * The number of items in the stack
   * @type {number}
   */
  size = 0;

  /**
   * @constructs Stack
   * @param {array} [items]
   */
  constructor (items) {
    if (items) {
      this.pushAll(items);
    }
  }

  /**
   * Add an item to the top of the stack
   *
   * @param {*} [item=null]
   */
  push (item = null) {
    if (item === null) { throw Error(`'item' parameter not defined`); }
    if (this.size === 0) {
      this.top = new StackNode(item, null);
    } else {
      const link = this.top;
      this.top = new StackNode(item, link);
    }
    this.size++;
  }

  /**
   * Add multiple items to the stack
   *
   * @param {*[]} [items=null]
   */
  pushAll (items = null) {
    if (items === null) { throw Error(`'items' parameter not defined`); }

    items.forEach(item => this.push(item));
  }

  /**
   * Remove and return the top item of the stack
   *
   * @returns {*}
   */
  pop () {
    if (this.size === 0) { throw Error(`can't pop an item from an empty stack`); }
    const item = this.top.data;
    this.top = this.top.link;
    this.size--;

    return item;
  }

  /**
   * Return the top item of the stack
   *
   * @returns {*}
   */
  peek () {
    if (this.size === 0) { throw Error(`can't peek an item from an empty stack`); }

    return this.top.data;
  }

  /**
   * Remove all items from the stack
   */
  clear () {
    this.top = null;
    this.size = 0;
  }

  /**
   * Iterate all items (top-to-bottom) in the stack
   *
   * @ignore
   * @returns {Iterator<*>}
   */
  [Symbol.iterator] () {
    let item = this.top;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.link;
          return { value, done: false };
        }

        return { value: null, done: true };
      }
    };
  }
}

/**
 * @class StackNode
 * @private
 */
class StackNode {
  data;
  link;

  constructor (data, link = null) {
    this.data = data;
    this.link = link;
  }
}

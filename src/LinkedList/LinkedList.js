/** A LinkedList implementation using nodes liked by reference */
export class LinkedList {
  /**
   * The head node in the list
   * @private
   * @type {Object}
   */
  head = null;

  /**
   * The tail node in the list
   * @private
   * @type {Object}
   */
  tail = null;

  /**
   * The number of items in the list
   * @type {number}
   */
  size = 0;

  /**
   * @param {array} [items] an array of items to add to the list
   */
  constructor (items) {
    if (items) {
      this.addAll(items);
    }
  }

  /**
   * Add an item to the list
   *
   * @param {*} item an item to add to the list
   */
  add (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined'); }
    if (this.size === 0) {
      this.tail = new ListNode(item, null);
      this.head = this.tail;
    } else {
      const prev = this.tail;
      this.tail = new ListNode(item, null);
      prev.next = this.tail;
    }
    this.size++;
  }

  /**
   * Add multiple items to the list
   *
   * @param {*[]} items an array of items to be added to the list
   */
  addAll (items = null) {
    if (items === null) { throw Error('\'items\' parameter not defined'); }

    items.forEach(item => this.add(item));
  }

  /**
   * Remove an item from the list
   *
   * @param {*} item the item to remove from the list
   * @returns {boolean} true if the item was successfully removed, false if not
   */
  remove (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined'); }
    if (this.size === 0) { throw Error('can\'t remove an item from an empty list'); }

    let prev = this.head;
    let curr = this.head;
    while (curr != null) {
      if (curr.data === item) {
        if (this.size === 1) { // remove the last remaining element
          this.head = null;
          this.tail = null;
        } else if (curr === this.head) { // remove first element
          this.head = this.head.next;
        } else if (curr === this.tail) { // remove last element
          this.tail = prev;
          this.tail.next = null;
        } else { // remove element
          prev.next = curr.next;
        }
        this.size--;

        return true;
      }
      prev = curr;
      curr = prev.next;
    }

    return false;
  }

  /**
   * Remove all items from the list
   * @method
   */
  clear () {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Iterate all items (in-order) in the list
   *
   * @private
   * @returns {Iterator<*>} an iterator for the data
   */
  [Symbol.iterator] () {
    let item = this.head;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.next;
          return { value, done: false };
        }

        return { value: null, done: true };
      }
    };
  }
}

/**
 * @private
 */
class ListNode {
  data;
  next;

  constructor (data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// @ts-check

/**
 * @export
 * @class LinkedList
 */
export class LinkedList {

  /**
   * The head node in the list
   * @ignore
   * @type {Object}
   */
  head = null;
 
  /**
   * The tail node in the list
   * @ignore
   * @type {Object}
   */
  tail = null;

  /**
   * The number of items in the list
   * @type {number}
   */
  size = 0;


  /**
   * @constructs LinkedList
   * @param {array} [items]
   */
  constructor(items) {
    if (items) {
      this.addAll(items);
    }
  }


  /**
   * Add an item to the list
   *
   * @param {*} [item=null]
   */
  add(item = null) {
    if (item === null) { throw Error(`'item' parameter not defined`) }
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
   * @param {*[]} [items=null]
   */
  addAll(items = null) {
    if (items === null) { throw Error(`'items' parameter not defined`) }

    items.forEach(item => this.add(item));
  }

  /**
   * Remove an item from the list
   *
   * @param {*} [item=null]
   * @return {boolean}
   */
  remove(item = null) {
    if (item === null) { throw Error(`'item' parameter not defined`) }
    if (this.size === 0) { throw Error(`can't remove an item from an empty list`) }

    let prev = this.head;
    let curr = this.head;
    while (curr != null) {
        if (curr.data === item) {
            // remove the last remaining element
            if (this.size === 1) { this.head = null; this.tail = null; }
            // remove first element
            else if (curr === this.head) { this.head = this.head.next; }
            // remove last element
            else if (curr === this.tail) { this.tail = prev; this.tail.next = null; }
            // remove element
            else { prev.next = curr.next; }
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
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }


  /**
   * Iterate all items (in-order) in the list
   *
   * @ignore
   * @return {Iterator<*>}
   */
  [Symbol.iterator]() {
    let item = this.head;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.next;
          return  { value , done: false };
        }

        return { value: null, done: true }
      }
    }
  }
}


/**
 * @class ListNode
 * @private
 */
class ListNode {
  data;
  next;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

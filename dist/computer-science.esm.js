/** A LinkedList implementation using nodes liked by reference */
class LinkedList {
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

/** A Queue implementation using nodes liked by reference */
class Queue {
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
      this.enqueueAll(items);
    }
  }

  /**
   * Add an item to the end of the queue
   *
   * @param {*} item an item to add to the queue
   */
  enqueue (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined'); }
    if (this.size !== 0) {
      const prevLast = this.last;
      this.last = new QueueNode(item, null);
      prevLast.link = this.last;
    } else {
      this.first = new QueueNode(item, null);
      this.last = this.first;
    }
    this.size++;
  }

  /**
   * Add multiple items to the end of the queue
   *
   * @param {*[]} items an array of items to be added to the queue
   */
  enqueueAll (items = null) {
    if (items === null) { throw Error('\'items\' parameter not defined'); }

    items.forEach(item => this.enqueue(item));
  }

  /**
   * Remove and return the first item in the queue
   *
   * @returns {*} removes and returns the last item in the queue
   */
  dequeue () {
    if (this.size === 0) { throw Error('can\'t dequeue an item from an empty queue'); }
    const dequeued = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = dequeued.link;
    }
    this.size--;

    return dequeued.data;
  }

  /**
   * Return the first item in the queue
   *
   * @returns {*} the last item in the queue
   */
  peek () {
    if (this.size === 0) { throw Error('can\'t peek an item from an empty stack'); }

    return this.first.data;
  }

  /**
   * Remove all items from the queue
   * @method
   */
  clear () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Iterate all items (first-to-last) in the queue
   *
   * @private
   * @returns {Iterator<*>}
   */
  [Symbol.iterator] () {
    let item = this.first;
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
 * @private
 */
class QueueNode {
  data;
  link;

  constructor (data, link = null) {
    this.data = data;
    this.link = link;
  }
}

/** A Set implementation using an array */
class Set {
  /**
   * The set's values
   * @private
   * @type {array}
   */
  values = [];

  /**
   * The number of items in the set
   * @type {number}
   */
  size = 0;

  /**
   * @param {array} [items] an array of items to add to the set
   */
  constructor (items) {
    if (items) {
      this.addAll(items);
    }
  }

  /**
   * Add an item to the set
   *
   * @param {*} item an item to add to the set
   */
  add (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined'); }
    if (!this.values.includes(item)) {
      this.values.push(item);
      this.size++;
    }
  }

  /**
   * Add multiple items to the set
   *
   * @param {*[]} items an array of items to be added to the set
   */
  addAll (items = null) {
    if (items === null) { throw Error('\'items\' parameter not defined'); }

    items.forEach(item => this.add(item));
  }

  /**
   * Remove an item from the set
   *
   * @param {*} item the item to remove from the set
   * @returns {boolean} true if the item was successfully removed, false if not
   */
  remove (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined'); }
    const index = this.values.indexOf(item);
    if (index !== -1) {
      this.values = [...this.values.slice(0, index), ...this.values.slice(index + 1)];
      this.size--;
      return true;
    }
    return false;
  }

  /**
   * Remove all items from the set
   * @method
   */
  clear () {
    this.values = [];
    this.size = 0;
  }

  /**
   * Iterate all items in the set
   *
   * @private
   * @returns {Iterator<*>} an iterator for the data
   */
  [Symbol.iterator] () {
    return this.values[Symbol.iterator]();
  }
}

/**
 * A BubbleSort algorithm
 *
 * This sort works by iterating through the list of values from the start
 * comparing each pair of values and swapping them if they are in the wrong order
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
function BubbleSort (array, comparator = (a, b) => a < b, step) {
  const N = array.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (comparator(array[j + 1], array[j])) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    if (step) { step(array); }
  }
  return array;
}

/**
 * A InsertionSort algorithm
 *
 * The sort maintains a sorted (left) and unsorted (right) sections. As each
 * value is checked, if it's greater than the previous value it gets swapped
 * to the left until it is no longer greater.
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
function InsertionSort (array, comparator = (a, b) => a < b, step) {
  const N = array.length;
  for (let i = 1; i < N; i++) {
    for (let j = i; j > 0; j--) {
      if (comparator(array[j], array[j - 1])) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
    if (step) { step(array); }
  }

  return array;
}

/**
 * A QuickSort algorithm
 *
 * Quicksort chooses an element of the array to serve as the pivot element and
 * then moves two pointers in from the ends of the array until values are found
 * that should be swapped to have a more sorted array this is then done recursively
 * the subarray contained on each side of the pivot until fully sorted.
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
function QuickSort (array, comparator, step) {
  if (array.length < 2) { return; }
  if (typeof comparator !== 'function') { comparator = (a, b) => a < b; }

  sortRecursive(array, 0, array.length - 1, comparator, step);
  return array;
}

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

const hoarePivot = (array, left, right, comparator, step) => {
  const pivot = Math.floor((left + right) / 2);
  while (left <= right) {
    while (comparator(array[left], array[pivot])) {
      left++;
    }
    while (comparator(array[pivot], array[right])) {
      right--;
    }
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
    if (step) { step(array); }
  }
  return left;
};

const sortRecursive = (array, left, right, comparator, step) => {
  if (right - left < 1) { return; }
  const pivot = hoarePivot(array, left, right, comparator, step);

  if (left < pivot - 1) {
    sortRecursive(array, left, pivot - 1, comparator, step);
  }
  if (pivot < right) {
    sortRecursive(array, pivot, right, comparator, step);
  }
};

/**
 * A SelectionSort algorithm
 *
 * The sort works by iterating through the array starting from the beginning.
 * Each item is compared to every subsequent item in the array to determine
 * which is smaller. Either the current item is kept or a smaller item is
 * swapped into its spot. This repeats until the order of items is arranged
 * from smallest-to-largest.
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
function SelectionSort (array, comparator = (a, b) => a < b, step) {
  const N = array.length;
  for (let i = 0; i < N; i++) {
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (comparator(array[j], array[min])) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
    if (step) { step(array); }
  }

  return array;
}

/** A Queue implementation using nodes liked by reference */
class Stack {
  /**
   * The top item of the stack
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
   * @param {array} [items] an array of items to push onto the stack
   */
  constructor (items) {
    if (items) {
      this.pushAll(items);
    }
  }

  /**
   * Add an item to the top of the stack
   *
   * @param {*} item an item to push onto the stack
   */
  push (item = null) {
    if (item === null) { throw Error('\'item\' parameter not defined'); }
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
   * @param {*[]} items an array of items to push onto the stack
   */
  pushAll (items = null) {
    if (items === null) { throw Error('\'items\' parameter not defined'); }

    items.forEach(item => this.push(item));
  }

  /**
   * Remove and return the top item of the stack
   *
   * @returns {*} removes and returns the item on the top of the stack
   */
  pop () {
    if (this.size === 0) { throw Error('can\'t pop an item from an empty stack'); }
    const item = this.top.data;
    this.top = this.top.link;
    this.size--;

    return item;
  }

  /**
   * Return the top item of the stack
   *
   * @returns {*} the top item on the stack
   */
  peek () {
    if (this.size === 0) { throw Error('can\'t peek an item from an empty stack'); }

    return this.top.data;
  }

  /**
   * Remove all items from the stack
   * @method
   */
  clear () {
    this.top = null;
    this.size = 0;
  }

  /**
   * Iterate all items (top-to-bottom) in the stack
   *
   * @private
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

/** QuickFind is a simple but less optimal implementation of a UnionFind data structure. */
class QuickFind {
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
    this.verticies = new Map();
    values.forEach((value, i) => {
      this.verticies.set(value, i);
    });

    this.count = this.verticies.size;
  }

  /**
   * Find the id for a value
   *
   * @param {*} value the value to lookup
   * @returns {Number} the identity of the set containing the item
   */
  find (value) {
    const id = this.verticies.get(value);
    if (id === undefined) { throw Error(`Item: ${value} not found in the set`); }

    return id;
  }

  /**
   * Are the 2 verticies connected?
   *
   * @param {*} valueA the first vertex to compare
   * @param {*} valueB the second vertex to compare
   * @returns {boolean} true if the verticies are connected, false if not
   */
  connected (valueA, valueB) {
    return this.find(valueA) === this.find(valueB);
  }

  /**
   * Join the verticies if not already in the same set
   *
   * @param {*} valueA the first vertex to connect
   * @param {*} valueB the second vertex to connect
   */
  union (valueA, valueB) {
    if (this.connected(valueA, valueB)) { return; }

    const idA = this.find(valueA);
    const idB = this.find(valueB);

    this.verticies.forEach((id, key) => {
      if (id === idA) {
        this.verticies.set(key, idB);
      }
    });
    this.count--;
  }

  /**
   * Returns a 2D array of the unique sets and the values in those sets
   *
   * @returns [][] a 2D array containing the disjoint sets
   */
  sets () {
    const verticies = [...this.verticies.entries()];
    const sets = verticies.reduce((acc, curr) => {
      // create the set array if it doesn't exist
      if (acc[curr[1]] === undefined) { acc[curr[1]] = []; }
      acc[curr[1]].push(curr[0]);
      return acc;
    }, {});

    return Object.values(sets);
  }
}

/** QuickUnion is a slightly more optimal (ie tree-based) implementation of a UnionFind data structure. */

class QuickUnion {
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
    this.verticies = new Map();
    values.forEach((value) => {
      this.verticies.set(value, value);
    });

    this.count = this.verticies.size;
  }

  /**
   * Find the id for a value
   *
   * @param {*} value the value to lookup
   * @returns {*} the identity of the set containing the item
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
   * @param {*} valueA the first vertex to compare
   * @param {*} valueB the second vertex to compare
   * @returns {boolean} true if the verticies are connected, false if not
   */
  connected (valueA, valueB) {
    return this.find(valueA) === this.find(valueB);
  }

  /**
   * Join the verticies if not alredy in the same set
   *
   * @param {*} valueA the first vertex to connect
   * @param {*} valueB the second vertex to connect
   */
  union (valueA, valueB) {
    if (this.connected(valueA, valueB)) { return; }

    const idA = this.find(valueA);
    const idB = this.find(valueB);
    this.verticies.set(idA, idB);

    this.count--;
  }

  /**
   * Returns a 2D array of the unique sets and the values in those sets
   *
   * @returns [][] a 2D array containing the disjoint sets
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

export { BubbleSort, InsertionSort, LinkedList, Queue, QuickFind, QuickSort, QuickUnion, SelectionSort, Set, Stack };

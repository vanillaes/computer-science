var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// index.js
__markAsModule(exports);
__export(exports, {
  BubbleSort: () => BubbleSort,
  InsertionSort: () => InsertionSort,
  LRUCache: () => LRUCache,
  LinkedList: () => LinkedList,
  Queue: () => Queue,
  QuickFind: () => QuickFind,
  QuickSort: () => QuickSort,
  QuickUnion: () => QuickUnion,
  SelectionSort: () => SelectionSort,
  Set: () => Set,
  Stack: () => Stack
});

// src/LinkedList/LinkedList.js
var LinkedList = class {
  head = null;
  tail = null;
  size = 0;
  constructor(items) {
    if (items) {
      this.addAll(items);
    }
  }
  add(item = null) {
    if (item === null) {
      throw Error("'item' parameter not defined");
    }
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
  addAll(items = null) {
    if (items === null) {
      throw Error("'items' parameter not defined");
    }
    items.forEach((item) => this.add(item));
  }
  remove(item = null) {
    if (item === null) {
      throw Error("'item' parameter not defined");
    }
    if (this.size === 0) {
      throw Error("can't remove an item from an empty list");
    }
    let prev = this.head;
    let curr = this.head;
    while (curr != null) {
      if (curr.data === item) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else if (curr === this.head) {
          this.head = this.head.next;
        } else if (curr === this.tail) {
          this.tail = prev;
          this.tail.next = null;
        } else {
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
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  [Symbol.iterator]() {
    let item = this.head;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.next;
          return {value, done: false};
        }
        return {value: null, done: true};
      }
    };
  }
};
var ListNode = class {
  data;
  next;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
};

// src/Misc/LRUCache.js
var LRUCache = class {
  capacity = 0;
  items = new Map();
  dequeue = [];
  constructor(capacity = null) {
    if (capacity === null) {
      throw Error("'capacity' parameter not defined");
    }
    this.capacity = capacity;
  }
  get(key) {
    const index = this.dequeue.indexOf(key);
    if (index === -1) {
      return index;
    }
    this.dequeue.splice(index, 1);
    this.dequeue.unshift(key);
    return this.items.get(key);
  }
  put(key, value) {
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
  clear() {
    this.items = new Map();
    this.dequeue = [];
  }
  *keys() {
    for (const key of this.dequeue) {
      yield key;
    }
  }
  *values() {
    for (const key of this.dequeue) {
      yield this.items.get(key);
    }
  }
  *entries() {
    for (const key of this.dequeue) {
      yield [key, this.items.get(key)];
    }
  }
};

// src/Queue/Queue.js
var Queue = class {
  first = null;
  last = null;
  size = 0;
  constructor(items) {
    if (items) {
      this.enqueueAll(items);
    }
  }
  enqueue(item = null) {
    if (item === null) {
      throw Error("'item' parameter not defined");
    }
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
  enqueueAll(items = null) {
    if (items === null) {
      throw Error("'items' parameter not defined");
    }
    items.forEach((item) => this.enqueue(item));
  }
  dequeue() {
    if (this.size === 0) {
      throw Error("can't dequeue an item from an empty queue");
    }
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
  peek() {
    if (this.size === 0) {
      throw Error("can't peek an item from an empty stack");
    }
    return this.first.data;
  }
  clear() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  [Symbol.iterator]() {
    let item = this.first;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.link;
          return {value, done: false};
        }
        return {value: null, done: true};
      }
    };
  }
};
var QueueNode = class {
  data;
  link;
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
};

// src/Set/Set.js
var Set = class {
  values = [];
  size = 0;
  constructor(items) {
    if (items) {
      this.addAll(items);
    }
  }
  add(item = null) {
    if (item === null) {
      throw Error("'item' parameter not defined");
    }
    if (!this.values.includes(item)) {
      this.values.push(item);
      this.size++;
    }
  }
  addAll(items = null) {
    if (items === null) {
      throw Error("'items' parameter not defined");
    }
    items.forEach((item) => this.add(item));
  }
  remove(item = null) {
    if (item === null) {
      throw Error("'item' parameter not defined");
    }
    const index = this.values.indexOf(item);
    if (index !== -1) {
      this.values = [...this.values.slice(0, index), ...this.values.slice(index + 1)];
      this.size--;
      return true;
    }
    return false;
  }
  clear() {
    this.values = [];
    this.size = 0;
  }
  [Symbol.iterator]() {
    return this.values[Symbol.iterator]();
  }
};

// src/Sort/BubbleSort.js
function BubbleSort(array, comparator = (a, b) => a < b, step) {
  const N = array.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (comparator(array[j + 1], array[j])) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    if (step) {
      step(array);
    }
  }
  return array;
}

// src/Sort/InsertionSort.js
function InsertionSort(array, comparator = (a, b) => a < b, step) {
  const N = array.length;
  for (let i = 1; i < N; i++) {
    for (let j = i; j > 0; j--) {
      if (comparator(array[j], array[j - 1])) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
    if (step) {
      step(array);
    }
  }
  return array;
}

// src/Sort/QuickSort.js
function QuickSort(array, comparator, step) {
  if (array.length < 2) {
    return;
  }
  if (typeof comparator !== "function") {
    comparator = (a, b) => a < b;
  }
  sortRecursive(array, 0, array.length - 1, comparator, step);
  return array;
}
var swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};
var hoarePivot = (array, left, right, comparator, step) => {
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
    if (step) {
      step(array);
    }
  }
  return left;
};
var sortRecursive = (array, left, right, comparator, step) => {
  if (right - left < 1) {
    return;
  }
  const pivot = hoarePivot(array, left, right, comparator, step);
  if (left < pivot - 1) {
    sortRecursive(array, left, pivot - 1, comparator, step);
  }
  if (pivot < right) {
    sortRecursive(array, pivot, right, comparator, step);
  }
};

// src/Sort/SelectionSort.js
function SelectionSort(array, comparator = (a, b) => a < b, step) {
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
    if (step) {
      step(array);
    }
  }
  return array;
}

// src/Stack/Stack.js
var Stack = class {
  top = null;
  size = 0;
  constructor(items) {
    if (items) {
      this.pushAll(items);
    }
  }
  push(item = null) {
    if (item === null) {
      throw Error("'item' parameter not defined");
    }
    if (this.size === 0) {
      this.top = new StackNode(item, null);
    } else {
      const link = this.top;
      this.top = new StackNode(item, link);
    }
    this.size++;
  }
  pushAll(items = null) {
    if (items === null) {
      throw Error("'items' parameter not defined");
    }
    items.forEach((item) => this.push(item));
  }
  pop() {
    if (this.size === 0) {
      throw Error("can't pop an item from an empty stack");
    }
    const item = this.top.data;
    this.top = this.top.link;
    this.size--;
    return item;
  }
  peek() {
    if (this.size === 0) {
      throw Error("can't peek an item from an empty stack");
    }
    return this.top.data;
  }
  clear() {
    this.top = null;
    this.size = 0;
  }
  [Symbol.iterator]() {
    let item = this.top;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.link;
          return {value, done: false};
        }
        return {value: null, done: true};
      }
    };
  }
};
var StackNode = class {
  data;
  link;
  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
};

// src/UnionFind/QuickFind.js
var QuickFind = class {
  verticies = null;
  count = 0;
  constructor(values = []) {
    this.verticies = new Map();
    values.forEach((value, i) => {
      this.verticies.set(value, i);
    });
    this.count = this.verticies.size;
  }
  find(value) {
    const id = this.verticies.get(value);
    if (id === void 0) {
      throw Error(`Item: ${value} not found in the set`);
    }
    return id;
  }
  connected(valueA, valueB) {
    return this.find(valueA) === this.find(valueB);
  }
  union(valueA, valueB) {
    if (this.connected(valueA, valueB)) {
      return;
    }
    const idA = this.find(valueA);
    const idB = this.find(valueB);
    this.verticies.forEach((id, key) => {
      if (id === idA) {
        this.verticies.set(key, idB);
      }
    });
    this.count--;
  }
  sets() {
    const verticies = [...this.verticies.entries()];
    const sets = verticies.reduce((acc, curr) => {
      if (acc[curr[1]] === void 0) {
        acc[curr[1]] = [];
      }
      acc[curr[1]].push(curr[0]);
      return acc;
    }, {});
    return Object.values(sets);
  }
};

// src/UnionFind/QuickUnion.js
var QuickUnion = class {
  verticies = null;
  count = 0;
  constructor(values = []) {
    this.verticies = new Map();
    values.forEach((value) => {
      this.verticies.set(value, value);
    });
    this.count = this.verticies.size;
  }
  find(value) {
    let id = value;
    while (id !== this.verticies.get(id)) {
      id = this.verticies.get(id);
      if (id === void 0) {
        throw Error(`Item: ${value} not found in the set`);
      }
    }
    return id;
  }
  connected(valueA, valueB) {
    return this.find(valueA) === this.find(valueB);
  }
  union(valueA, valueB) {
    if (this.connected(valueA, valueB)) {
      return;
    }
    const idA = this.find(valueA);
    const idB = this.find(valueB);
    this.verticies.set(idA, idB);
    this.count--;
  }
  sets() {
    const verticies = [...this.verticies.entries()];
    const sets = verticies.reduce((acc, curr) => {
      const root = this.verticies.get(curr[1]);
      if (acc[root] === void 0) {
        acc[root] = [];
      }
      acc[root].push(curr[0]);
      return acc;
    }, {});
    return Object.values(sets);
  }
};

export class Queue {
  first = null;
  last = null;
  N = 0;

  constructor(items) {
    if (items) {
      this.enqueueAll(items);
    }
  }

  get size() {
    return this.N;
  }

  enqueue(item = null) {
    if (item === null) { throw Error(`'item' parameter not defined`) }
    if (this.N !== 0) {
      const prevLast = this.last;
      this.last = new QueueNode(item, null);
      prevLast.link = this.last;
    } else {
      this.first = new QueueNode(item, null);
      this.last = this.first;
    }
    this.N++;
  }

  enqueueAll(items = null) {
    if (items === null) { throw Error(`'items' parameter not defined`) }

    items.forEach(item => this.enqueue(item));
  }

  dequeue() {
    if (this.N === 0) { throw Error(`can't dequeue an item from an empty queue`) }
    const dequeued = this.first;
    if (this.N > 1) { this.first = dequeued.link; }
    if (this.N === 1) { 
      this.first = null;
      this.last = null;
    }
    this.N--;

    return dequeued.data;
  }

  peek() {
    if (this.N === 0) { throw Error(`can't peek an item from an empty stack`) }

    return this.first.data;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.N = 0;
  }

  [Symbol.iterator]() {
    let item = this.first;
    return {
      next: () => {
        if (item) {
          const value = item.data;
          item = item.link;
          return  { value , done: false };
        }

        return { value: null, done: true }
      }
    }
  }
}

class QueueNode {
  data;
  link;

  constructor(data, link = null) {
    this.data = data;
    this.link = link;
  }
}
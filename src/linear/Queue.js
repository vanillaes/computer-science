export class Queue {
  first = null;
  last = null;
  N = 0;

  constructor() {
    // this.enqueueAll();
  }

  get size() {
    return this.N;
  }

  enqueue(item) {
    throw Error("Not Implemented");
  }

  dequeue(item) {
    throw Error("Not Implemented");
  }

  peek() {
    throw Error("Not Implemented");
  }

  [Symbol.iterator]() {
    throw Error("Not Implemented");
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
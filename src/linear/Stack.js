export class Stack {
  top = null;
  size = 0;

  constructor (items) {
    if (items) {
      this.pushAll(items);
    }
  }

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

  pushAll (items = null) {
    if (items === null) { throw Error(`'items' parameter not defined`); }

    items.forEach(item => this.push(item));
  }

  pop () {
    if (this.size === 0) { throw Error(`can't pop an item from an empty stack`); }
    const item = this.top.data;
    this.top = this.top.link;
    this.size--;

    return item;
  }

  peek () {
    if (this.size === 0) { throw Error(`can't peek an item from an empty stack`); }

    return this.top.data;
  }

  clear () {
    this.top = null;
    this.size = 0;
  }

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

class StackNode {
  data;
  link;

  constructor (data, link = null) {
    this.data = data;
    this.link = link;
  }
}

# Stack

A `Stack` is used to define a FIFO (First-In-First-Out) collection of data.

## Complexity

**Write: O(1)**

A write creates a new `StackNode` and appends it to top of the stack.

**Read: O(1)**

- Pop - removes and returns the top item of the stack
- Peek - returns the top item without removing it

**Memory: O(N)**

Each `StackNode` stores the data as well as a reference to the next lower node in the stack.

## Usage

**Creation**

```javascript
const stack = new Stack();
```

**Creation w/ data**

```javascript
const stack = new Stack(['item1', 'item2', 'item3']);
```

**Get the size (ie # of nodes) of the Stack**

```javascript
const size = stack.size;
```

**Add an item to the stack**

```javascript
stack.push('item');
```

**Add an array of items to the stack**

```javascript
stack.pushAll(['item1', 'item2', 'item3']);
```

**Remove and return an item from the top of the stack**

```javascript
const topItem = stack.pop();
```

**Return but don't remove the top item on the stack**

```javascript
const topItem = stack.peek()
```

**Remove all items from the stack**

```javascript
stack.clear();
```

**Iterate through the items in the stack**

```javascript
const stackToArray = ...stack;
```

*Note: items will be read in top->bottom order.*

## References

- [1.3 Bags, Queues, and Stacks - Algorithms (4th ed)][]
- [Stack.java - Algorithms (4th ed)][]
- [Stack - trekhleb/javascript-algorithms][]
- [Stack data structure playlist - WilliamFiset][]

[1.3 Bags, Queues, and Stacks - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/
[Stack.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/Stack.java.html
[Stack - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack
[Stack data structure playlist - WilliamFiset]: https://www.youtube.com/playlist?list=PLDV1Zeh2NRsC0FVi9Rshi-5fFU1QwcFQ1

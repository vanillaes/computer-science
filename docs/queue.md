# Queue

A `Queue` is used to define a LIFO (Last-In-First-Out) collection of data.

## Complexity

**Write: O(1)**

- Enqueue - creates a new `QueueNode` and adds it to the end of the queue.

**Read: O(1)**

- Dequeue - removes and returns the first item in the queue
- Peek - returns the first item without removing it


**Memory: O(N)**

Every `QueueNode` stores the data as well as a reference to the next node in the queue.

### Usage

**Creation**

```javascript
const queue = new Queue();
```

**Creation w/ data**

```javascript
const queue = new Queue(['item1', 'item2', 'item3']);
```

**Get the size (ie # of nodes) of the queue**

```javascript
const size = queue.size;
```

**Add an item to the queue**

```javascript
queue.enqueue('item');
```

**Add an array of items to the queue**

```javascript
queue.queueAll(['item1', 'item2', 'item3']);
```

**Remove and return an item from the front of the queue**

```javascript
const firstItem = queue.dequeue();
```

**Return but don't remove the first item in the queue**

```javascript
const firstItem = queue.peek()
```

**Remove all items from the queue**

```javascript
queue.clear();
```

**Iterate through the items in the queue**

```javascript
const queueToArray = ...queue;
```

## Resources

- [1.3 Bags, Queues, and Stacks - Algorithms (4th ed)][]
- [Queue.java - Algorithms (4th ed)][]
- [Queue - trekhleb/javascript-algorithms][]
- [Queue data structure playlist - WilliamFiset][]

[1.3 Bags, Queues, and Stacks - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/
[Queue.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/Queue.java.html
[Queue - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue
[Queue data structure playlist - WilliamFiset]: https://www.youtube.com/playlist?list=PLDV1Zeh2NRsAWrxWRTHJrsgBrbwqGzt-z

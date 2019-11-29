# Queue

A `Queue` is used to define a LIFO (Last-In-First-Out) collection of data.

<!-- TODO: Add better description -->
<!-- TODO: Add a graphic representing the list -->

## API

```typescript
abstract class AbstractQueue {
  size: number;
  constructor(...items?: any[]);
  enqueue(item: any);
  enqueueAll(...items: any[]);
  dequeue(): any;
  peek(): any;
  clear();
  [Symbol.iterator]();
}
```
## Implementations

- [Queue][]

[Queue]: ./Queue/Queue.md

## Resources

- [1.3 Bags, Queues, and Stacks - Algorithms (4th ed)][]
- [Queue.java - Algorithms (4th ed)][]
- [Queue - trekhleb/javascript-algorithms][]
- [Queue data structure playlist - WilliamFiset][]

[1.3 Bags, Queues, and Stacks - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/
[Queue.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/Queue.java.html
[Queue - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue
[Queue data structure playlist - WilliamFiset]: https://www.youtube.com/playlist?list=PLDV1Zeh2NRsAWrxWRTHJrsgBrbwqGzt-z

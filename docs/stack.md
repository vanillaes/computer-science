# Stack

A `Stack` is used to define a FIFO (First-In-First-Out) collection of data.

<!-- TODO: Add better description -->
<!-- TODO: Add a graphic representing the list -->

## API

```typescript
abstract class AbstractStack {
  size: number;
  constructor(...items?: any[]);
  push(item: any);
  pushAll(...items: any[]);
  pop(): any;
  peek(): any;
  clear();
  [Symbol.iterator]();
}
```

## Implementations

- [Stack][]

[Stack]: ./Stack/Stack.md

## References

- [1.3 Bags, Queues, and Stacks - Algorithms (4th ed)][]
- [Stack.java - Algorithms (4th ed)][]
- [Stack - trekhleb/javascript-algorithms][]
- [Stack data structure playlist - WilliamFiset][]

[1.3 Bags, Queues, and Stacks - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/
[Stack.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/13stacks/Stack.java.html
[Stack - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack
[Stack data structure playlist - WilliamFiset]: https://www.youtube.com/playlist?list=PLDV1Zeh2NRsC0FVi9Rshi-5fFU1QwcFQ1

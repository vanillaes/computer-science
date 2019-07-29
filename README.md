<!-- [![npm](https://img.shields.io/npm/v/@vanillajs2/compsci.js.svg)](https://www.npmjs.com/package/@vanillajs/compsci.js) -->

# CompSci.js

## Computer Science the Modern Javascript Way

Algorithms and data structures are essential foundations if you ever want to advance beyond the #NerdKeepers of the professional development world. With the latest additions to JS, not only is it possible to implement these tools in a way that matches other typical CompSci languages (ex Java); with the additions of langauge extensions like the `[symbol.iterator]` JS is capable of prividing an even better DX (Developer Experience).

## What's the Point?

Self-taught or academically educated. If you have aspirations to be a professional deveoper, eventually you'll need to know this. Instead of wasting time/effort on outdated courses, blogs, libraries, etc; the goal of this repo is to provide everything you need to get started using only modern best practices.  

## Usage

All modules are written in VanillsJS as ES modules. All algorithms and data structures can be impored from the entry point.

*Ex.*

```javascript
import { LinkedList, Stack } from './compsci.js';
```

## API Documentation

### Disjoint-Sets

Disjoint sets a.k.a. UnionFind data structures are used to determine the connectivity within a graph by grouping verticies into unique sets.

- [QuickFind][]
- [QuickUnion][]


### Linear

Linear data structures get their name because they are typically used to map 1-to-1 relationships between data elements in a one-dimensional fashion.

- [LinkedList][]
- [Stack][]
- [Queue][]

[QuickFind]: ./docs/quickfind.md
[QuickUnion]: ./docs/quickunion.md
[LinkedList]: ./docs/linkedlist.md
[Stack]: ./docs/stack.md
[Queue]: ./docs/queue.md


## Related Materials

- [Algorithms (4th ed)][]
- [William Fiset - YouTube][]
- [JavaScript-Algorithms - Oleksii Trekhleb][]
- [JavaScript-Algorithms - Minko Gechev][]
- [Data Structures and Algorithms (DSA) - Adrian Mejia][]
- [Practice - GeeksForGeeks.org][]
- [VISUALGO.net][]
- [thank u, Symbol.iterator.next][]

[Algorithms (4th ed)]: https://algs4.cs.princeton.edu/home/
[William Fiset - YouTube]: https://www.youtube.com/channel/UCD8yeTczadqdARzQUp29PJw
[JavaScript-Algorithms - Oleksii Trekhleb]: https://github.com/trekhleb/javascript-algorithms
[JavaScript-Algorithms - Minko Gechev]: https://github.com/mgechev/javascript-algorithms
[Data Structures and Algorithms (DSA) - Adrian Mejia]: https://adrianmejia.com/categories/coding/data-structures-and-algorithms-dsa/
[Practice - GeeksForGeeks.org]: https://practice.geeksforgeeks.org/
[VISUALGO.net]: https://visualgo.net/en
[thank u, Symbol.iterator.next]: https://medium.com/front-end-weekly/thank-u-symbol-iterator-next-aef9f09ff78

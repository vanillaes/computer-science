<h1 align="center">Computer Science</h1>

A collection of Computer Science algorithms and data structures implemented using bleeding-edge JavaScript features and capabilities 

[![GitHub Releases](https://badgen.net/github/tag/vanillaes/computer-science)](https://github.com/vanillaes/computer-science/releases)
[![MIT License](https://badgen.net/github/license/vanillaes/computer-science)](https://raw.githubusercontent.com/vanillaes/computer-science/master/LICENSE)
[![Latest Status](https://github.com/vanillaes/computer-science/workflows/Latest/badge.svg)](https://github.com/vanillaes/computer-science/actions)
<!-- [![NPM Release](https://badgen.net/npm/v/computer-science)](https://www.npmjs.com/package/computer-science) -->
<!-- [![Bundlephobia](https://badgen.net/bundlephobia/minzip/computer-science)](https://bundlephobia.com/result?p=computer-science) -->
<!-- [![Release Status](https://github.com/vanillaes/computer-science/workflows/Release/badge.svg)](https://github.com/vanillaes/computer-science/actions) -->

<p align="center"><strong>⚠️ Notice: This project is an experimental proving-ground for bleeding-edge ECMAScript features ⚠️</strong></p>

Algorithms and data structures are essential foundations if you ever want to advance in the professional development world. The goal of this library is to provide a modern Javascript specific reference to study and experiment with a wide range of general purpose algorithms and data structures. This is by-no-means the first JS lib of its kind but it is the first that is 100% dedicated to using modern JS practices and patterns.

## Modern Javascript

ECMAScript standards have come a long way in the past 5 years (ie ES2015 - ES2020) but it will take a lot of time for the rest of the greater JS ecosystem to catch up. This library is a 'clean room' implementation, written from scratch to use modern practices by default.

For Example:

- all modules ES modules
- index.js define the public API
- no build-tooling required
- classes are used liberally 
- `[Symbol.iterator]` definitions for data structures
- cross-browser compatibility is a low priority
- in Node.js this package loads as type=module
- CommonJS compatible

That means...

Not only does this package provide a useful reference for Computer Science principles but it also works as a reference for Modern JS best-practices.  

## Usage

All modules are written in VanillsJS as ES modules. All algorithms and data structures can be imported from the entry point.

*Ex.*

```javascript
import { LinkedList, Stack } from './compsci.js';
```

## Data Structures

### Collection

A collection contains an unordered grouping of values[UnionFind]: ./docs/union-find.md
[LinkedList]: ./docs/linked-list.md
[Stack]: ./docs/stack.md
[Queue]: ./docs/queue.md

- [Set][]

### Disjoint-Set

Disjoint sets are used to determine the connectivity within a graph by grouping vertices into unique sets.

- [UnionFind][]

### Linear

Linear data structures get their name because they are typically used to map 1-to-1 relationships between data elements in a one-dimensional fashion.

- [LinkedList][]
- [Stack][]
- [Queue][]

[Set]: ./docs/set.md
[UnionFind]: ./docs/unionfind.md
[LinkedList]: ./docs/linkedlist.md
[Stack]: ./docs/stack.md
[Queue]: ./docs/queue.md

## Algorithms

- [Sort][]


[Sort]: ./docs/sort.md

## Misc

- [Miscellaneous][]

[Miscellaneous]: ./docs/misc.md

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

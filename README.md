<h1 align="center">Computer Science</h1>

A collection of Computer Science algorithms and data structures implemented using bleeding-edge JavaScript features and capabilities 

<div align="center">
  <a href="https://github.com/vanillaes/computer-science/releases"><img src="https://badgen.net/github/tag/vanillaes/computer-science" alt="GitHub Release"></a>
  <a href="https://www.npmjs.com/package/@vanillaes/computer-science"><img src="https://badgen.net/npm/v/@vanillaes/computer-science" alt="NPM Release"></a>
  <a href="https://github.com/vanillaes/computer-science/actions"><img src="https://github.com/vanillaes/computer-science/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillaes/computer-science/actions"><img src="https://github.com/vanillaes/computer-science/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
</div>

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

That means...

Not only does this package provide a useful reference for Computer Science principles but it also works as a reference for Modern JS best-practices.  

## Imports

This package works isomorphically in browsers and server-side JavaScript runtimes

### Browsers

Import directly from the local path or a CDN

```html
<script type="module">
import { LinkedList } from 'path/to/computer-science/index.js'
</script>
```

The minified version can be imported from

```html
<script type="module">
import { LinkedList } from 'path/to/computer-science/index.min.js'
</script>
```

### Node

Install the package

```sh
npm install @vanillaes/absurdum
```

Import from the installed module

```javascript
import { LinkedList } from '@vanillaes/computer-science';
```

## API Documentation
### Data Structures

#### Disjoint-Set

Disjoint sets are used to determine the connectivity within a graph by grouping vertices into unique sets.

- [UnionFind (Abstract)][]
  - [QuickFind][]
  - [QuickUnion][]

[UnionFind (Abstract)]: ./docs/union-find.md
[QuickFind]: ./docs/UnionFind/QuickFind.md
[QuickUnion]: ./docs/UnionFind/QuickUnion.md 

#### Linear

Linear data structures get their name because they are typically used to map 1-to-1 relationships between data elements in a one-dimensional fashion.

- [LinkedList (Abstract)][]
  - [LinkedList][]
- [Stack (Abstract)][]
  - [Stack][]
- [Queue (Abstract)][]
  - [Queue][]

[LinkedList (Abstract)]: ./docs/linked-list.md
[LinkedList]: ./docs/LinkedList/LinkedList.md
[Stack (Abstract)]: ./docs/stack.md
[Stack]: ./docs/Stack/Stack.md
[Queue (Abstract)]: ./docs/queue.md
[Queue]: ./docs/Queue/Queue.md

#### Set

A set represents a collection of unique values.

- [Set (Abstract)][]
  - [Set][]

[Set (Abstract)]: ./docs/set.md
[Set]: ./docs/Set/Set.md

####  Misc

- [LRUCache][]

[LRUCache]: ./docs/Misc/LRUCache.md

### Algorithms

- [Sort (Abstract)][]
  - [BubbleSort][]
  - [InsertionSort][]
  - [QuickSort][]
  - [SelectionSort][]

[Sort (Abstract)]: ./docs/sort.md
[BubbleSort]: ./docs/Sort/BubbleSort.md
[InsertionSort]: ./docs/Sort/InsertionSort.md
[QuickSort]: ./docs/Sort/QuickSort.md
[SelectionSort]: ./docs/Sort/SelectionSort.md

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

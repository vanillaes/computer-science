# Selection Sort

The `selectionSort` algorithm is used to sort an array of items. While not efficient in terms of performance, it's very easy to implement.

The sort works by iterating through the array starting from the beginning. Each item is copared to every subsequent item in the array to determine which is smaller, either the current item is kept or a smaller item is swapped into its spot. This repeats until the order of items is arranged from smallest-to-largest.

## Complexity

**Sort: O(n<sup>2</sup>)**

Each item needs to be copared to every subsequent item in the array.

**Memory: O(n)**

Item swaps happen in-place. Aside from temporary variables no significant memory allocation is necessary.

## Usage

**Sort (default)**

```javascript
const sorted = selectionSort(['a', 'b', 'c', 'd']);
```

By default the items will be sorted in ascending order.

**Sort (custom)**

```javascript
const descCompare = (a, b) => a > b;
const sortedDesc = selectionSort(['a', 'b', 'c', 'd'], descCompare);
```

A custom function can be used to override the default coparator, in this example the sort will order from `max->min`.

## Resources

- [2.1 Elementary Sorts - Algorithms (4th ed)][]
- [Selection.java - Algorithms (4th ed)][]
- [Selection Sort - trekhleb/javascript-algorithms][]

[2.1 Elementary Sorts - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/21elementary/
[Selection.java - Algorithms (4th ed)]: https://algs4.cs.princeton.edu/21elementary/Selection.java.html
[Selection Sort - trekhleb/javascript-algorithms]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort

# Sort.InsertionSort

<!-- div class="doc-container" -->

<!-- div -->


<!-- div -->

<h3 id="exportfunctioninsertionsortarrayarray-comparator-step"><code>export function InsertionSort *(array(array, [comparator], [step])*</code></h3>

The sort maintains a sorted *(left) and unsorted (right)* sections. As each
value is checked, if it's greater than the previous value it gets swapped
to the left until it is no longer greater.

#### Arguments
1. `array` *(Array)*: the input array
2. `[comparator]` *(Function): a function to compare `2` values &#42;(defaults asc->desc)*&#42;
3. `[step]` *(Function)*: an optional function that gets applied at each step

#### Returns
*(Array)*: the sorted array

---

<!-- /div -->

<!-- /div -->

<!-- /div -->

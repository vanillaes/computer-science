/**
 * A BubbleSort algorithm
 *
 * This sort works by iterating through the list of values from the start
 * comparing each pair of values and swapping them if they are in the wrong order
 *
 * @export
 * @param {*[]} array the input array
 * @param {Function} [comparator] a function to compare 2 values (defaults asc->desc)
 * @param {Function} [step] an optional function that gets applied at each step
 * @returns {*[]} the sorted array
 */
function BubbleSort (array, comparator = (a, b) => a < b, step) {
    const N = array.length;
    for (let i = 0; i < N; i++){
        for (let j = 0; j < N; j++){
            if (comparator(array[j+1], array[j])){
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
        if (step) { step(array); }
    }
    return array;
}


//console.log(BubbleSort(['CC', 'BB', 'BB', 'BB', 'BB', 'CC', 'AA', 'BB'], ))

export { BubbleSort };
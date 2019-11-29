/** A Queue implementation using nodes liked by reference */
export class Queue {
    /**
     * @param {array} [items] an array of items to add to the queue
     */
    constructor(items?: any[]);
    /**
     * The first item in the queue
     * @private
     * @type {Object}
     */
    first: Object;
    /**
     * The last item in the queue
     * @private
     * @type {Object}
     */
    last: Object;
    /**
     * The number of items in the queue
     * @type {number}
     */
    size: number;
    /**
     * Add an item to the end of the queue
     *
     * @param {*} item an item to add to the queue
     */
    enqueue(item?: any): void;
    /**
     * Add multiple items to the end of the queue
     *
     * @param {*[]} items an array of items to be added to the queue
     */
    enqueueAll(items?: any[]): void;
    /**
     * Remove and return the first item in the queue
     *
     * @returns {*} removes and returns the last item in the queue
     */
    dequeue(): any;
    /**
     * Return the first item in the queue
     *
     * @returns {*} the last item in the queue
     */
    peek(): any;
    /**
     * Remove all items from the queue
     * @method
     */
    clear(): void;
    /**
     * Iterate all items (first-to-last) in the queue
     *
     * @private
     * @returns {Iterator<*>}
     */
    "__@iterator"(): Iterator<any, any, undefined>;
}

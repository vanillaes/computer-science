/**
 * @class Queue
 * @exports
 */
export class Queue {
    /**
     * @constructs Queue
     * @param {array} [items]
     */
    constructor(items?: any[]);
    /**
     * The first item in the queue
     *
     * @private
     * @type {Object}
     */
    first: Object;
    /**
     * The last item in the queue
     *
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
     * @param {*} [item=null]
     */
    enqueue(item?: any): void;
    /**
     * Add multiple items to the end of the queue
     *
     * @param {*[]} [items=null]
     */
    enqueueAll(items?: any[]): void;
    /**
     * Remove and return the first item in the queue
     *
     * @returns {*}
     */
    dequeue(): any;
    /**
     * Return the first item in the queue
     *
     * @returns {*}
     */
    peek(): any;
    /**
     * Remove all items from the queue
     */
    clear(): void;
    /**
     * Iterate all items (first-to-last) in the queue
     *
     * @ignore
     * @returns {Iterator<*>}
     */
    "__@iterator"(): Iterator<any, any, undefined>;
}

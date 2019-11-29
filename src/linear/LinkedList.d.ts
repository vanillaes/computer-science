/**
 * @class LinkedList
 * @exports
 */
export class LinkedList {
    /**
     * @constructs LinkedList
     * @param {array} [items]
     */
    constructor(items?: any[]);
    /**
     * The head node in the list
     * @private
     * @type {Object}
     */
    head: Object;
    /**
     * The tail node in the list
     * @private
     * @type {Object}
     */
    tail: Object;
    /**
     * The number of items in the list
     * @type {number}
     */
    size: number;
    /**
     * Add an item to the list
     *
     * @param {*} [item=null]
     */
    add(item?: any): void;
    /**
     * Add multiple items to the list
     *
     * @param {*[]} [items=null]
     */
    addAll(items?: any[]): void;
    /**
     * Remove an item from the list
     *
     * @param {*} [item=null]
     * @returns {boolean}
     */
    remove(item?: any): boolean;
    /**
     * Remove all items from the list
     */
    clear(): void;
    /**
     * Iterate all items (in-order) in the list
     *
     * @ignore
     * @returns {Iterator<*>}
     */
    "__@iterator"(): Iterator<any, any, undefined>;
}

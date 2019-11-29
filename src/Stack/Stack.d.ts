/**
 * @class Stack
 * @exports
 */
export class Stack {
    /**
     * @constructs Stack
     * @param {array} [items]
     */
    constructor(items?: any[]);
    /**
     * The top item of the stack
     *
     * @private
     * @type {Object}
     */
    top: Object;
    /**
     * The number of items in the stack
     * @type {number}
     */
    size: number;
    /**
     * Add an item to the top of the stack
     *
     * @param {*} [item=null]
     */
    push(item?: any): void;
    /**
     * Add multiple items to the stack
     *
     * @param {*[]} [items=null]
     */
    pushAll(items?: any[]): void;
    /**
     * Remove and return the top item of the stack
     *
     * @returns {*}
     */
    pop(): any;
    /**
     * Return the top item of the stack
     *
     * @returns {*}
     */
    peek(): any;
    /**
     * Remove all items from the stack
     */
    clear(): void;
    /**
     * Iterate all items (top-to-bottom) in the stack
     *
     * @ignore
     * @returns {Iterator<*>}
     */
    "__@iterator"(): Iterator<any, any, undefined>;
}

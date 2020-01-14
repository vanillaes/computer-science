/** A Queue implementation using nodes liked by reference */
export class Stack {
    /**
     * @param {array} [items] an array of items to push onto the stack
     */
    constructor(items?: any[]);
    /**
     * The top item of the stack
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
     * @param {*} item an item to push onto the stack
     */
    push(item?: any): void;
    /**
     * Add multiple items to the stack
     *
     * @param {*[]} items an array of items to push onto the stack
     */
    pushAll(items?: any[]): void;
    /**
     * Remove and return the top item of the stack
     *
     * @returns {*} removes and returns the item on the top of the stack
     */
    pop(): any;
    /**
     * Return the top item of the stack
     *
     * @returns {*} the top item on the stack
     */
    peek(): any;
    /**
     * Remove all items from the stack
     * @method
     */
    clear(): void;
    /**
     * Iterate all items (top-to-bottom) in the stack
     *
     * @private
     * @returns {Iterator<*>}
     */
    "__@iterator"(): Iterator<any, any, undefined>;
}

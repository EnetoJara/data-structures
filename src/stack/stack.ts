/**
 * A `stack` is a list of elements that are accessible
 * only from one end of the list, which is called the top.
 * One common, `real-world` example of a `stack` is the stack
 * of trays at a cafeteria. Trays are always removed
 * from the top, and when trays are put back on the stack after being washed,
 * they are placed on the top of the stack.
 * The stack is known as a *last-in, first-out (LIFO) data structure*.
 *
 * @export
 * @class Stack
 */
export class Stack {
    /**
     * @constructor Creates an instance of the Stack class.
     * @access public
     * @param {string[]} dataStore The array that stores the stack elements.
     * @param {number} top Keeps track of the head of the stack.
     */
    public constructor (private dataStore: string[] = [], private top: number = 0) {
        this.push = this.push.bind(this);
        this.pop = this.pop.bind(this);
        this.peek = this.peek.bind(this);
        this.length = this.length.bind(this);
        this.clean = this.clean.bind(this);
    }

    /**
     * Adds a new item to the stack.
     * @memberof Stack
     * @access public
     * @method push
     * @param element new item to be added at the stack
     * @returns {void} `void`
     */
    public push (element: string) {
        this.dataStore[this.top++] = element;
    }

    /**
     * Removes the last inserted element from the stack.
     * @memberof Stack
     * @access public
     * @method pop
     * @returns {string} The elemenet that has just been removed.
     */
    public pop (): string {
        return this.dataStore[--this.top];
    }

    /**
     * The `peek()` function returns the **top element**
     * of the stack by accessing the element at the `top-1` position of the array.
     *
     * @memberof Stack
     * @access public
     * @method peek
     * @returns {string} `string` The top element.
     */
    public peek () {
        return this.dataStore[this.top - 1];
    }

    /**
     * @memberof Stack
     * @access public
     * @method length
     * @returns {number} `number` of elements in the list
     */
    public length () {
        return this.top;
    }

    /**
     * Cleans the stack
     *
     * @memberof Stack
     * @access public
     * @method clean
     * @returns {void} `void`
     */
    public clean () {
        this.dataStore = [];
        this.top = 0;
    }
}

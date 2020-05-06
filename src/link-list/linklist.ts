import { Comparator } from "../utils/comparator";
import { LinkedListNode } from "./linked-list-node";

export interface IObj {
    value: any;
    callback?: CallableFunction;
}
/**
 * In computer science, a linked list is a linear
 * collection of data elements, in which linear order
 * is not given by their physical placement in memory.
 * Instead, each element points to the next. It is a data structure
 * consisting of a group of nodes which together represent a sequence.
 * Under the simplest form, each node is composed of data and a
 * reference (in other words, a link) to the next node in the sequence.
 * This structure allows for efficient insertion or removal of elements
 * from any position in the sequence during iteration.
 * More complex variants add additional links, allowing
 * efficient insertion or removal from arbitrary element references.
 * A drawback of linked lists is that access time is linear
 * (and difficult to pipeline). Faster access, such as random access,
 * is not feasible. Arrays have better cache locality as compared to linked lists.
 *
 */
export class LinkedList<T> {
    private head?: LinkedListNode<T>;
    private tail?: LinkedListNode<T>;
    private compare: Comparator;

    /**
     * @param {Function} [comparatorFunction]
     */
    public constructor (compareFunction: Comparator) {
        this.compare = compareFunction;
    }

    public getHead () {
        return this.head;
    }

    /**
     * Adds new *node* to `list`.
     *
     * @param {T} value
     * @returns {LinkedList<T>}
     * @memberof LinkedList
     */
    public prepend (value: T): LinkedList<T> {
        const aux =
            typeof this.head !== "undefined" ? new LinkedListNode<T>(value, this.head) : new LinkedListNode<T>(value);
        this.head = aux;

        if (!this.tail) {
            this.tail = aux;
        }

        return this;
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    public append (value: T) {
        const newNode = new LinkedListNode(value);

        // If there is no head yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Attach new node to the end of linked list.
        this.tail?.setnext(newNode);
        this.tail = newNode;

        return this;
    }

    /**
     * @param {*} value
     * @return {LinkedListNode}
     */
    public delete (value: T) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        // If the head must be deleted then make next node that is differ
        // from the head to be a new head.
        while (this.head && this.compare.equal(this.head.getValue(), value)) {
            deletedNode = this.head;
            this.head = this.head.getnext();
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            // If next node must be deleted then make next node to be a next next one.
            while (currentNode?.getnext()) {
                if (this.compare.equal(currentNode.getnext()?.getValue(), value)) {
                    deletedNode = currentNode.getnext();
                    currentNode.setnext(currentNode?.getnext()?.getnext());
                } else {
                    currentNode = currentNode.getnext();
                }
            }
        }

        // Check if tail must be deleted.
        if (this.compare.equal(this?.tail?.getValue(), value)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {LinkedListNode}
     */
    public find (obj: IObj) {
        const { value, callback } = obj;
        if (!this.head) {
            return null;
        }

        let currentNode = this?.head;

        while (currentNode) {
            // If callback is specified then try to find node by callback.
            if (callback && callback(currentNode.getValue())) {
                return currentNode;
            }

            // If value is specified then try to compare by value..
            if (value !== undefined && this.compare.equal(currentNode.getValue(), value)) {
                return currentNode;
            }

            currentNode = currentNode?.getnext();
        }

        return null;
    }

    /**
     * @return {LinkedListNode}
     */
    public deleteTail () {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // There is only one node in linked list.
            this.head = undefined;
            this.tail = undefined;

            return deletedTail;
        }

        // If there are many nodes in linked list...

        // Rewind to the last node and delete "next" link for the node before the last one.
        let currentNode = this.head;
        while (currentNode?.getnext()) {
            if (!currentNode?.getnext()?.getnext()) {
                currentNode.setnext(undefined);
            } else {
                currentNode = currentNode?.getnext();
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    /**
     * @return {LinkedListNode}
     */
    public deleteHead () {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.getnext()) {
            this.head = this.head.getnext();
        } else {
            this.head = undefined;
            this.tail = undefined;
        }

        return deletedHead;
    }

    /**
     * @param {*[]} values - Array of values that need to be converted to linked list.
     * @return {LinkedList}
     */
    public fromArray (values: any[]) {
        values.forEach(value => this.append(value));

        return this;
    }

    /**
     * @return {Array<LinkedListNode<T>>}
     */
    public toArray (): Array<LinkedListNode<T>> {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.getnext();
        }

        return nodes;
    }

    /**
     * @param {CallableFunction} [callback]
     * @return {string}
     */
    public toString (callback: CallableFunction): string {
        return this.toArray().map(node => node.toString(callback)).toString();
    }

    /**
     * Reverse a linked list.
     * @returns {LinkedList<T>}
     */
    public reverse (): LinkedList<T> {
        let currNode = this.head;
        let prevNode;
        let nextNode = null;

        while (currNode) {
            // Store next node.
            nextNode = currNode.getnext();

            // Change next node of the current node so it would link to previous node.
            currNode.setnext(prevNode);

            // Move prevNode and currNode nodes one step forward.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}

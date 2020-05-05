export class LinkedListNode<T> {
    private value: T;
    private next?: LinkedListNode<T>;

    public constructor(value: T, next?: LinkedListNode<T>) {
        this.value = value;
        this.next = next;
    }

    public toString(callBack: CallableFunction) {
        return typeof callBack === "function" ? callBack(this.value) : `${this.value}`;
    }

    public setValue(value: T) {
        this.value = value;
    }

    public getValue () {
        return this.value;
    }

    public setnext (next?: LinkedListNode<T>) {
        this.next = next;
    }

    public getnext () {
        return this.next;
    }
}

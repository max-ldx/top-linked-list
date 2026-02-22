class Node {
    #value;
    #next;

    constructor(value = null, next = null) {
        this.#value = value;
        this.#next = next;
    }

    get value() { return this.#value; }
    set value(val) { this.#value = val; }
    get next() { return this.#next; }
    set next(node) { this.#next = node; }
}

export class LinkedList {
    #head = null;
    #size = 0;

    append(value) {
        const newNode = new Node(value);
        if (!this.#head) {
            this.#head = newNode;
        } else {
            let temp = this.#head;
            while (temp.next) temp = temp.next;
            temp.next = newNode;
        }
        this.#size++;
    }

    prepend(value) {
        this.#head = new Node(value, this.#head);
        this.#size++;
    }

    size() {
        return this.#size;
    }

    head() {
        return this.#head ? this.#head.value : undefined;
    }

    tail() {
        if (!this.#head) return undefined;
        let temp = this.#head;
        while (temp.next) temp = temp.next;
        return temp.value;
    }

    at(index) {
        if (index < 0 || index >= this.#size) return undefined;

        let temp = this.#head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp.value;
    }

    pop() {
        if (!this.#head) return undefined;

        const removedValue = this.#head.value;
        this.#head = this.#head.next;
        this.#size--;

        return removedValue;
    }

    contains(value) {
        let temp = this.#head;
        while (temp) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }

    findIndex(value) {
        let i = 0;
        let temp = this.#head;
        while (temp) {
            if (temp.value === value) {
                return i;
            }
            ++i;
            temp = temp.next;
        }
        return -1;
    }

    toString() {
        if (this.#head === null) {
            return "";
        }

        let s = "";
        let temp = this.#head;
        while (temp) {
            s += `(${temp.value})`;
            if (temp.next) {
                s += " -> ";
            }
            temp = temp.next;
        }

        return s;
    }
}
class LinkedList {
    #head = null;
    #size = 0;

    append(value) {
        const node = new Node(value);

        if (this.#head === null) {
            this.#head = node;
        } else {
            let temp = this.#head;
            while (temp.next !== null) {
                temp = temp.next;
            }

            temp.next = node;
        }

        this.#size++;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.#head === null) {
            this.#head = node;
        } else {
            const temp = this.#head;
            this.#head = node;
            this.#head.next = temp;
        }

        this.#size++;
    }
}

class Node {
    #value = null;
    #next = null;

    constructor(value = null, next = null) {
        this.#value = value;
        this.#next = next;
    }

    get value() {
        return this.#value;
    }

    set value(value) {
        this.#value = value;
    }

    get next() {
        return this.#next;
    }

    set next(next) {
        this.#next = next;
    }
}

const l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.prepend(5);

console.log(l)

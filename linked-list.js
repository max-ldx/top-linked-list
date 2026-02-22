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

class LinkedList {
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
        while (temp.next) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
}

// --- Test ---
const l = new LinkedList();
l.append(1);  // [1]
l.append(2);  // [1, 2]
l.append(3);  // [1, 2, 3]
l.prepend(5); // [5, 1, 2, 3]

console.log("Valeur retirée (pop) :", l.pop()); // Retire 5
console.log("Nouvel index 0 :", l.at(0));       // Affiche 1
console.log("Taille actuelle :", l.size());     // Affiche 3
console.log(l.contains(1));
console.log(l.contains(5));
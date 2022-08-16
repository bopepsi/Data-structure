class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.last;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    pop() {
        let node = this.last;
        if (this.size === 0) return;
        if (this.size === 1) {
            this.first = null;
            this.alst = null;
            this.size--;
            return node;
        }
        this.last = node.next;
        node.next = null;
        this.size--;
        return node;
    }
}

let stack = new Stack();
stack.push('Harry');
stack.push('Ron');
stack.push('Hermione');

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    depqueu() {
        if (this.size === 0) return;
        let removed = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            this.size--;
            return removed;
        }
        this.first = this.first.next;
        removed.next = null;
        this.size--;
        return removed;
    }
}

let queue = new Queue();
queue.enqueue('first');
queue.enqueue('second');
queue.enqueue('third');



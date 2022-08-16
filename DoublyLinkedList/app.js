class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            removed.prev = null;
        }
        this.length--;
        return removed;
    }

    shift() {
        if (this.length === 0) return;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail - null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }

    unshift(val) {
        let node = new Node(val);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let found;
        if (index < Math.floor(this.length / 2)) {
            found = this.head;
            for (var i = 0; i < index; i++) {
                found = found.next;
            }
        } else if (index >= Math.floor(this.length / 2)) {
            found = this.tail;
            for (var i = 0; i < this.length - 1 - index; i++) {
                found = found.prev;;
            }
        } else {
            found = this.head;
        }
        return found;
    }

    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        let newNode = new Node(val);
        if (index === 0) this.unshift(val);
        else if (index === this.length) this.push(val);
        else {
            let node = this.get(index - 1);
            newNode.next = node.next;
            node.next.prev = newNode;
            node.next = newNode;
            newNode.prev = node;
            this.length++;
        }
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let node = this.get(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
    }
}
// 0 1 2 3 4 
let list = new DoublyLinkedList();
list.push('this');
list.push('is');
list.push('great');
list.push('course');

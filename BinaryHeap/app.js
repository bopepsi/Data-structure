class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        let parentIndex = Math.floor(index - 1 / 2);

        const bubbleUp = (index, parentIndex) => {
            if (this.values[index] > this.values[parentIndex]) {
                [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
                index = parentIndex;
                parentIndex = Math.floor(index - 1 / 2);
                bubbleUp(index, parentIndex);
            } else return;
        }
        bubbleUp(index, parentIndex);
        return this.values;
    }

    extractMax() {
        let root = this.values[this.values.length - 1];
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length - 1], this.values[0]];
        this.values.pop();
        console.log(this.values);
        const bubbleDown = (index) => {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            if (left < this.values.length && right < this.values.length &&
                this.values[index] < this.values[left] && this.values[index] < this.values[right]) {
                let max = (this.values[left] > this.values[right] ? left : right);
                [this.values[index], this.values[max]] = [this.values[max], this.values[index]];
                index = max;
                bubbleDown(index);
            }
            if (left < this.values.length && right < this.values.length &&
                this.values[index] < this.values[left] && this.values[index] > this.values[right]) {
                [this.values[index], this.values[left]] = [this.values[left], this.values[index]];
                index = left;
                bubbleDown(index);
            }
            if (left < this.values.length && right < this.values.length &&
                this.values[index] < this.values[right] && this.values[index] > this.values[left]) {
                [this.values[index], this.values[right]] = [this.values[right], this.values[index]];
                index = right;
                bubbleDown(index);
            }
            if (left < this.values.length && right >= this.values.length &&
                this.values[index] < this.values[left]) {
                [this.values[index], this.values[left]] = [this.values[left], this.values[index]];
                return;
            }
            return;
        }
        bubbleDown(0);
        return this.values;
    }
}

let mbh = new MaxBinaryHeap();
mbh.insert(55);
mbh.insert(35);
mbh.insert(59);
mbh.insert(90);
console.log(mbh.values);
console.log(mbh.extractMax());



class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.vals = [];
    }
    enqueue(node) {
        this.vals.push(node);
        let index = this.vals.length - 1;
        const bubbleUp = (index) => {
            let parentIndex = Math.floor((index - 1) / 2);
            if (!this.vals[parentIndex]) return;
            if (this.vals[index].priority < this.vals[parentIndex].priority) {
                [this.vals[index], this.vals[parentIndex]] = [this.vals[parentIndex], this.vals[index]];
                index = parentIndex;
                bubbleUp(index);
            } else return
        }
        bubbleUp(index);
        return this;
    }
}

let priorityQueue = new PriorityQueue();
let javascript = new Node('Js', 1);
let HTML = new Node('HTML', 2);
let CSS = new Node('CSS', 2);
let React = new Node('React', 2);
let Vue = new Node('Vue', 3);

priorityQueue.enqueue(CSS);
priorityQueue.enqueue(React);
priorityQueue.enqueue(Vue);
priorityQueue.enqueue(javascript);
priorityQueue.enqueue(HTML);
priorityQueue.enqueue(CSS);
priorityQueue.enqueue(React);
priorityQueue.enqueue(Vue);

console.log(priorityQueue);

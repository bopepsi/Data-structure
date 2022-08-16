function MaxBinaryHeap() {
    this.val = [];
}

MaxBinaryHeap.prototype.insert = function (val) {

    let arr = this.val;
    arr.push(val);
    let nodeIndex = arr.length - 1;


    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    }

    const bubbleUp = (nodeIndex) => {

        let parentIndex = Math.floor((nodeIndex - 1) / 2);

        if (arr[nodeIndex] > arr[parentIndex]) {
            swap(arr, nodeIndex, parentIndex);
            [nodeIndex, parentIndex] = [parentIndex, nodeIndex];
        } else return;

        if (nodeIndex === 0) return;

        bubbleUp(nodeIndex);

    }

    bubbleUp(nodeIndex);
    return arr;

};

MaxBinaryHeap.prototype.extractMax = function () {
    let heap = this.val;

    if (heap.length === 0) return;

    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    }

    swap(heap, 0, heap.length - 1);
    heap.pop();

    const bubbleDown = index => {

        let c1 = index * 2 + 1;
        let c2 = index * 2 + 2;

        if (c1 >= heap.length || c2 >= heap.length) return;

        let largerChildIndex = heap[c1] > heap[c2] ? c1 : c2;

        if (heap[index] < heap[largerChildIndex]) {
            swap(heap, index, largerChildIndex);
            index = largerChildIndex;
        } else {
            return;
        };

        bubbleDown(index);

    }

    bubbleDown(0);
    return heap;

}



let mBH = new MaxBinaryHeap();
mBH.insert(55);
mBH.insert(39);
mBH.insert(41);
mBH.insert(18);
mBH.insert(27);
mBH.insert(12);
mBH.insert(33);
console.log([...mBH.val]);
mBH.extractMax();
mBH.extractMax();
mBH.extractMax();
mBH.extractMax();
mBH.extractMax();
mBH.extractMax();
mBH.insert(12);
mBH.insert(99);

console.log(mBH.val);


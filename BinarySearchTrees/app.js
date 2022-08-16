class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (this.root === null) {
            this.root = node;
            return true;
        }
        let temp = this.root;
        while (true) {
            if (node.val === temp.val) return;
            if (node.val > temp.val) {
                if (temp.right) {
                    temp = temp.right;
                    continue;
                } else {
                    temp.right = node;
                    return true;
                }
            }
            if (node.val < temp.val) {
                if (temp.left) {
                    temp = temp.left;
                    continue;
                } else {
                    temp.left = node;
                    return true;
                }
            }
        }
    }

    recursiveInsert(val) {
        let node = new Node(val);
        if (this.root === null) {
            this.root = node;
            return true;
        }
        let temp = this.root;
        const helper = (val, temp) => {
            if (node.val === temp.val) return;
            if (val > temp.val) {
                if (temp.right) {
                    temp = temp.right;
                } else {
                    temp.right = new Node(val);
                    return this;
                }
            }
            if (val < temp.val) {
                if (temp.left) {
                    temp = temp.left;
                } else {
                    temp.left = new Node(val);
                    return this;
                }
            }
            helper(val, temp);
        }
        helper(val, temp);
    }

    find(val) {
        if (!this.root) return false;
        let temp = this.root;
        const helper = (val, temp) => {
            if (val === temp.val) return true;
            if (val > temp.val) {
                if (temp.right) {
                    temp = temp.right;
                    return helper(val, temp);
                } else { return false; }
            }
            if (val < temp.val) {
                if (temp.left) {
                    temp = temp.left;
                    return helper(val, temp);
                } else { return false; }
            }
        }
        return helper(val, temp);
    }

    BFS() {
        let queue = [];
        let data = [];
        let curr = this.root;
        queue.push(curr);
        while (queue.length !== 0) {
            let node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() {
        let visited = [];
        const traverse = node => {
            // console.log(node);
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

    DFSPostOrder() {
        let visited = [];
        const traverse = node => {
            // console.log(node);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root);
        return visited;
    }

    DFSInOrder() {
        let visited = [];
        const traverse = node => {
            // console.log(node);
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

    DFS() {
        let result = [];
        let curr = this.root;
        const traverse = node => {
            if (node.left) traverse(node.left);
            result.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(curr);
        return result;
    }
}

let bts = new BinarySearchTree();
// bts.insert(10);
// bts.insert(4);
// bts.insert(30);
// bts.insert(20);
// bts.insert(25);


bts.recursiveInsert(10);
bts.recursiveInsert(6);
bts.recursiveInsert(15);
bts.recursiveInsert(3);
bts.recursiveInsert(8);

bts.recursiveInsert(20);




console.log(bts.find(5))

console.log(bts.BFS())
console.log(bts.DFSPreOrder());
console.log(bts.DFSPostOrder());
console.log(bts.DFSInOrder());
console.log(bts.DFS());
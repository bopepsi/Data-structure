class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.insert = function (val) {
    let node = new Node(val);
    if (!this.root) this.root = node;
    let temp = this.root;
    while (true) {
        if (val === temp.val) return false;
        if (val > temp.val) {
            if (!temp.right) {
                temp.right = node;
                return true;
            }
            temp = temp.right;
        }
        if (val < temp.val) {
            if (!temp.left) {
                temp.left = node;
                return true;
            }
            temp = temp.left;
        }
    }
}

BinaryTree.prototype.find = function (val) {
    let temp = this.root;
    while (temp) {
        if (temp.val === val) {
            return true;
        }
        if (val < temp.val) {
            temp = temp.left;
            continue;
        }
        if (val > temp.val) {
            temp = temp.right;
            continue;
        }
    }
    return false;
};

BinaryTree.prototype.bfs = function () {
    let queue = [this.root];
    let ans = [];
    while (queue.length > 0) {
        const node = queue.shift();
        ans.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    };
    return ans;
};

BinaryTree.prototype.dfs = function () {
    let root = this.root;
    let ans = [];
    const trav = node => {
        if (!node) return;
        trav(node.left);
        ans.push(node.val);
        trav(node.right);
    }
    trav(root);
    return ans;

}


const bTree = new BinaryTree();
console.log(bTree);
bTree.insert(10);
bTree.insert(5);
bTree.insert(19);
bTree.insert(1);
bTree.insert(13);
bTree.insert(9);
console.log(bTree);

console.log(bTree.bfs());
console.log(bTree.dfs());

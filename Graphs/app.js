class Graph {
    constructor() {
        this.adjancencyList = {};
    }

    addVertex(vertex) {
        return this.adjancencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (this.adjancencyList[v1]) this.adjancencyList[v1].push(v2);
        else {
            this.addVertex(v1);
            this.adjancencyList[v1].push(v2);
        }
        if (this.adjancencyList[v2]) this.adjancencyList[v2].push(v1);
        else {
            this.addVertex(v2);
            this.adjancencyList[v2].push(v1);
        }

    }

    removeEdge(v1, v2) {
        this.adjancencyList[v1] = this.adjancencyList[v1].filter(item => item !== v2);
        this.adjancencyList[v2] = this.adjancencyList[v2].filter(item => item !== v1);
    }

    removeVertex(vertex) {
        if (this.adjancencyList[vertex]) {
            for (var item of this.adjancencyList[vertex]) {
                this.removeEdge(vertex, item);
            }
        }
        delete this.adjancencyList[vertex];
    }

    DFS_R(start) {
        let result = [];
        let visited = {};
        const traverse = vertex => {
            if (this.adjancencyList[vertex].length === 0) return;
            result.push(vertex);
            visited[vertex] = true;
            this.adjancencyList[vertex].forEach(ele => { if (!visited[ele]) traverse(ele) });
        }
        traverse(start);
        return result;
    }

    DFS_I(start) {
        let result = [];
        let visited = {};
        let STACK = [];
        STACK.push(start);
        while (STACK.length) {
            console.log('ok');
            let vertex = STACK.pop();
            if (!visited[vertex]) {
                result.push(vertex);
                visited[vertex] = true;
                this.adjancencyList[vertex].forEach(ele => STACK.push(ele));
            }
        }
        return result;
    }

    BFS(start) {
        let Queue = [];
        let result = [];
        let visited = {};
        Queue.push(start);
        while (Queue.length) {
            let vertex = Queue.shift();
            if (!visited[vertex]) {
                result.push(vertex);
                visited[vertex] = true;
                this.adjancencyList[vertex].forEach(ele => Queue.push(ele));
            }
        }
        return result;
    }

}

let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.DFS_R('A'));
console.log(graph.DFS_I('A'));

console.log(graph.BFS('A'));

console.log(graph.adjancencyList);
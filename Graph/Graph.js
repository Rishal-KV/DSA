class Graph{
    constructor(){
        this.nodes = {}
    }

    addNode(node){
        if (!this.nodes[node]) {
            this.nodes[node] = []
        }
    }

    addEdge(source, destination){
        if (!this.nodes[source]) {
             this.addNode(source)
        }
        if (!this.nodes[destination]) {
            this.addNode(destination)
        }

        this.nodes[source].push(destination);
        this.nodes[destination].push(source)
    }
}

let graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");

// console.log(JSON.stringify(graph));
module.exports = {
    graph
}
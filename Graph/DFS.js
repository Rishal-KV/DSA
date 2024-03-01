let graph = require('../Graph/Graph')
console.log(JSON.stringify(graph));


function DFS(StartNode){
    let visited = {};
    let stack = [StartNode]
    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (!visited[currentNode]) {
             visited[currentNode] = true;
             console.log(currentNode)
        }

       for(let neighbor of graph.graph.nodes[currentNode]){
             if (!visited[neighbor]) {
                stack.push(neighbor)
                visited[neighbor] = true;
             }
       }

    }
}

DFS('A')
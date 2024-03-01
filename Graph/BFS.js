let graph = require('../Graph/Graph');

function BFS(startNode){
    let visited = {};
    let queue = [startNode];
    visited[startNode] = true
    while(queue.length > 0){
        let currentNode = queue.shift();
        console.log(currentNode)

        let neighbor = graph.graph.nodes[currentNode]
    

        for(let ele of neighbor){
            if(!visited[ele]){
            queue.push(ele);
            visited[ele] = true
            }
    }
    }
}
BFS('A')
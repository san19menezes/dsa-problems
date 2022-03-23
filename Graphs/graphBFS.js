const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//Only possible iteratively

const breadthFirstSearch = (graph, source) => {  //acbedf
    let queue = [source];
    while (queue.length > 0) {
        let current = queue.shift();
        console.log(current);
        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
}

breadthFirstSearch(graph, 'a');
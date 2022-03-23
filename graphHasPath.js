const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

//Iterative BFS
const hasPath = (graph, src, dst) => {
    let queue = [src];
    while (queue.length > 0) {
        let current = queue.shift();
        if (current == dst) return true;

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
    return false;
}

//Recursive DFS
const hasPathR = (graph, src, dst) => {
    if (src === dst) return true;
    for (let neighbour of graph[src]) {
        if (hasPathR(graph, neighbour, dst) === true) return true;
    }
    return false;
}

console.log(hasPathR(graph, 'f', 'i')) //false
// console.log(hasPath(graph, 'f', 'k')) //true
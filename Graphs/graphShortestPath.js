const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
];


const graphShortestPath = (edges, src, dst) => {
    let graph = constructGraph(edges);
    let queue = [[src, 0]];
    let visited = new Set(src)

    while (queue.length > 0) {
        const [node, distance] = queue.shift();
        if (node == dst) return distance;

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, distance + 1]);
            }
        }
    }
    return -1;
}
const constructGraph = (edges) => {
    let graph = {};
    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    return graph;
}

//console.log(constructGraph(edges))
// graph = {
//     w: ["x", "v"],
//     x: ["w", "y"],
//     y: ["x", "z"],
//     z: ["y", "v"],
//     v: ["z", "w"]
// }

// console.log(graphShortestPath(edges, 'w', 'z')); //2
console.log(graphShortestPath(edges, 'w', 'a')); //-1
console.log(graphShortestPath(edges, 'w', 'y')); //2
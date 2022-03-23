const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

//This is an undirected graph , so adjacency list needs to be symmetric, edge direction is not defined so consider as bi-directional
const undirectedPath = (edges, nodeA, nodeB) => {
    let graph = constructGraphFromEdge(edges);
    return hasPath(graph, nodeA, nodeB, new Set());

}
// Check if nodes have a connected path
const hasPath = (graph, src, dst, visited) => {
    if (src === dst) return true;
    if (visited.has(src)) return false;
    visited.add(src);

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst, visited) == true) return true;
    }
    return false;

}

// Construct graph using the edges
const constructGraphFromEdge = (edges) => {
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

console.log(undirectedPath(edges, 'j', 'm'));

// console.log(constructGraphFromEdge(edges));
    // {
    //     i: ['j', 'k'],
    //     j: ['i'],
    //     k: ['i','m','l'],
    //     l: ['k'],
    //     m: ['k'],
    //     n: ['o'],
    //     o: ['n']
    // };



//Problem Statement: Find the largest connected graph nodes
let graph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}

// Run 2 loops for this function. One to traverse over the keys of given graph - Will be done in main function.
// Other to traverse as depply (DFS) as possible in the traversing path - Explore function.

const graphLargestComponent = (graph) => {
    let longest = 0;
    const visited = new Set();  //Use Set as adding and searching in Set in O(1)
    for (let node in graph) {
        let size = explore(graph, node, visited);
        if (size > longest) longest = size;
    }
    return longest;
}

const explore = (graph, src, visited) => {
    if (visited.has(String(src))) return 0;
    visited.add(String(src));
    let size = 1;  //To keep track of initial node

    for (let neighbor of graph[src]) {
        size += explore(graph, neighbor, visited);
    }
    return size;
}


console.log(graphLargestComponent(graph));  //4
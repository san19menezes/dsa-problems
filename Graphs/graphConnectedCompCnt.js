// Problem Statement: Count the total sets of connected graphs in this big unconnected graph

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

const graphConnectedCompCnt = (graph) => {
    let count = 0;
    let visited = new Set();  //Use Set as adding and searching in Set in O(1)

    for (let node in graph) {
        if (explore(graph, node, visited)) {
            count++;
        };
    }
    return count;
}

// This function will travers2 each path as deeply as possible
const explore = (graph, src, visited) => {
    //Convert to string as the keys of graph will be strings and values will ne numbers.
    //We can have duplicate values in visited set because of type mismatch
    if (visited.has(String(src))) return false;
    visited.add(String(src));

    for (let neighbor of graph[src]) {
        explore(graph, neighbor, visited);
    }
    return true;
}

console.log(graphConnectedCompCnt(graph)); //2
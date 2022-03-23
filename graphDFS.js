const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//Iterative
//Time: | Space: 
// const depthFirstSearch = (graph, source) => { //acebdf or abdfce
//     let stack = [source];
//     while (stack.length > 0) {
//         let current = stack.pop();
//         console.log(current);
//         for (let neighbour of graph[current])
//             stack.push(neighbour);
//     }

// }


//Recursive
//Time: | Space: 
const depthFirstSearch = (graph, source) => { //acebdf or abdfce
    console.log(source);
    for (let neighbour of graph[source]) {
        depthFirstSearch(graph, neighbour);
    }
}
depthFirstSearch(graph, 'a');
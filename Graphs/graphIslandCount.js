
// Consider each grid as nodes

//Time : O(rc) | Space : O(rc)
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]
const graphIslandCount = (grid) => {
    let visited = new Set();
    let count = 0;

    // Loop iteratively through the rows and columns of the grid. Consider the row, column combination to be a node.
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {  //Here we consider grid[0] since the column cnt wont always be same as row count i.e. not symmetric matrix
            if (explore(grid, r, c, visited) === true) count++;
        }
    }
    return count;
}

//This will run recursively
const explore = (grid, r, c, visited) => {
    //First check base case for in bounds
    const rowInBounds = 0 <= r && r < grid.length;
    const columnInBounds = 0 <= c && c < grid[0].length;
    if (!rowInBounds || !columnInBounds) return false;

    //Second Base case
    if (grid[r][c] === 'W') return false;

    //Third base case
    let pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    //Now traverse through all the 4 directions
    explore(grid, r - 1, c, visited);  //left
    explore(grid, r + 1, c, visited);  //right
    explore(grid, r, c - 1, visited);  //up
    explore(grid, r, c + 1, visited);  //down
    return true;
}


console.log(graphIslandCount(grid));  // 3
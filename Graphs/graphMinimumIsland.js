//Find the smallest island having min nodes(grids)

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
]

//Time : O(rc) | Space : O(rc)
const graphMinIsland = (grid) => {
    let visited = new Set();
    let minSize = Infinity;

    //Traverse the grid
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            let size = explore(grid, r, c, visited);
            if (size > 0 && size < minSize) { //If size is 0 the value will always return 0. Problem says there will be atleast 1 island so min length would be 1. 
                minSize = size;
            }
        }
    }
    return minSize;
}

const explore = (grid, r, c, visited) => {

    //Check first base cndition of inbounds
    const rowInbounds = 0 <= r && r < grid.length;
    const columnInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !columnInbounds) return 0;

    //Check second base case of water or land
    if (grid[r][c] === 'W') return 0;

    //Check base case of visited
    let pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    //Check for islands in 4 directions recursively
    let size = 1;

    size += explore(grid, r - 1, c, visited);   //top
    size += explore(grid, r + 1, c, visited);  //down
    size += explore(grid, r, c - 1, visited);  //left
    size += explore(grid, r, c + 1, visited);  //right

    return size;
}




console.log(graphMinIsland(grid));  // 2
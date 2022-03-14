//Complexity : Time: O(n) | Space: O(n)

//DFS
treeMin = (root) => {
    //write the base case of null if specified in the problem that root can be null

    let smallest = Infinity;
    let stack = [root];
    while (stack.length > 0) {
        let current = stack.pop();
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.right !== null) stack.push(current.right);
    }
    return smallest;
}

//BFS
treeMinBFS = (root) => {
    let smallest = Infinity;
    let queue = [root];
    while (queue.length > 0) {
        let current = queue.shift(); // ideally in js this will take O(n) time
        if (current.val < smallest) smallest = current.val;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return smallest;
}

//Recursive - DFS
treeMinR = (root) => {
    if (root === null) return Infinity;
    const leftMin = treeMinR(root.left);
    const rightMin = treeMinR(root.right);
    return Math.min(root, leftMin, rightMin);
}
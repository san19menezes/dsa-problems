// Complexity : Time - O(n) | Space - O(n)

//Iterative with BFS
treeIncludes = (root, target) => {
    if (root == null) return false;
    let queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.data == target) return true;
        if (current.left !== null) queue.push(current.left); // we push left first since we traverse breadwise from left
        if (current.right !== null) queue.push(current.right);
    }
    return false;
}

//Recursive with DFS
treeIncludesR = (root, target) => {
    if (root == null) return false;
    if (root.data == target) return true;
    return treeIncludesR(root.left, target) || treeIncludesR(root.right, target);
}
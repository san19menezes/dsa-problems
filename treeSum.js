//Recursive DFS
//Complexity : time O(n), space - O(n)
treeSumR = (root) => {
    if (root == null) return 0;
    return root.data + treeSumR(root.left) + treeSumR(root.right);
}

//Iterative: BFS - using queue
//Complexity: Time - | Space - 
treeSum = (root) => {
    if (root == null) return 0;
    let queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        let current = queue.shift();
        sum += current.data;

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
}


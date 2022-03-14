class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Iterative method: O(n) Time | O(n) Space
depthFirstSearch = (root) => {
    if (root == null) return [];
    let stack = [root];
    let values = [];
    while (stack.length > 0) {
        let current = stack.pop();
        values.push(current.data);

        if (current.right) stack.push(current.right); // we push right first since we want to traverse the depth from 
        //left and in the stack the last entered will be pupped out first
        if (current.left) stack.push(current.left);
    }
    return values;
}

//Recursive method : O(n) Time | O(n) Space
depthFirstSearchR = (root) => {
    if (root == null) return [];
    let leftValues = depthFirstSearchR(root.left);
    let rightValues = depthFirstSearchR(root.right);
    return [root.val, ...leftValues, ...rightValues];
}
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Iterative method: O(n) Time | O(n) Space
//Cant write recursive version because we need aqueue and recursion uses a stack

const breadthFirstSearch = (root) => {
    if (root == null) return [];
    let queue = [root];
    let result = [];
    while (queue.length > 0) {
        let current = queue.shift();
        result.push(current.data);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }
    return result;
}
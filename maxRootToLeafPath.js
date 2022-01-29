

//Complexity : Time - O(n) | Space - O(n)

//Recursive is best for path finding problems
maxRootToLeaf = (root) => {
    //base case
    if (root == null) return -Infinity;
    if (root.left == null && root.right == null) return root.val;

    const maxChildPathSum = Math.max(maxRootToLeaf(root.left), maxRootToLeaf(root.right));
    return root.val + maxChildPathSum;
}
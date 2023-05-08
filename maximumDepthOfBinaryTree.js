function maxDepth(root) {
  if (root === null) {
    return 0; // base case
  }

  // recursively find the depth of the left subtree
  const leftDepth = maxDepth(root.left);
  // recursively find the depth of the right subtree
  const rightDepth = maxDepth(root.right);
  // return the maximum depth plus one for the root node
  return Math.max(leftDepth, rightDepth) + 1;
}
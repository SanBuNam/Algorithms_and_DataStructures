function cloneGraph(node) {
  const visited = new Map(); // hashmap to keep track of visited nodes

  function clone(node) {
    if (!node) return null; // base case

    if (visited.has(node)) return visited.get(node); // if node already visited, return its clone

    const clonedNode = new Node(node.val, []); // create a new node with the same value

    visited.set(node, clonedNode); // add to hashmap

    for (let neighbor of node.neighbors) {
      clonedNode.neighbors.push(clone(neighbor)); // recursively clone the neighbors and add to the cloned node's neighbors list
    }

    return clonedNode; // return the cloned node
  }

  return clone(node); // call the recursive function on the given node and return the cloned graph
}
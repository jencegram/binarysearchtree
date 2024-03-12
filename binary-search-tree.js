class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val); // Corrected to use Node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined; // Assuming no duplicates
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null) {
      this.root = new Node(val); // Corrected to use Node
      return this;
    }
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new Node(val); // Corrected to use Node
      } else {
        this.insertRecursively(val, currentNode.left);
      }
    } else if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new Node(val); // Corrected to use Node
      } else {
        this.insertRecursively(val, currentNode.right);
      }
    }
    return this; // Ignoring duplicates
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current !== null) {
      if (val === current.val) return current;
      current = val < current.val ? current.left : current.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode === null) return undefined;
    if (val === currentNode.val) return currentNode;
    if (val < currentNode.val) return this.findRecursively(val, currentNode.left);
    else return this.findRecursively(val, currentNode.right);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const values = [];
    const traverse = (node) => {
      values.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.val);
    };
    traverse(this.root);
    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const values = [];
    const queue = [this.root];
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode) {
        values.push(currentNode.val);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
    return values;
  }
}

module.exports = BinarySearchTree;

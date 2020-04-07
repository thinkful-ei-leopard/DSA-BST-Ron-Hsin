// 6. Is it a BST?
// Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.

// Binary SEARCH tree - left and child must be less than the Node, right child must be more than the node
// (recursively) check if the left child key is LESS than the node key, and the right child key is larger than it
// INPUT:  root node - of a Binary Tree (may or may not be BST).
// OUTPUT: true/false

function investigateBST(node) {
  // base case
  // if there is node.left or node.right
  if(node.left === null || node.right === null){
    return true;
  }
  // base case
  if(!node){
    return null;
  }
  // general case
  if(node.left.key > node.key || node.right.key < node.key){
    return false;
  }
  // if we recursively run through the Binary Tree, if any of the values returns false then return false
  if(!investigateBST(node.left) || !investigateBST(node.right)) {
    return false;
  }
  // if nothing flags false after all recursion, then it must be true
  return true;
}

module.exports = { investigateBST };
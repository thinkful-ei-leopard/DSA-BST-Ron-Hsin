// 5. Height of a BST
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

// We have to traverse to the bottom of the BST
// then when we've reached the bottom, add up the "levels"
// INPUT: Root node  - input the ROOT node of your BST
// OUTPUT: 5   - an integer with the height. The height is the distance from the the "Root" node.

/**
 * 
 * @param {*} t node
 * @param {*} num height
 */
function findHeight(t) {
  if(!t) {
    return 0;
  }

  // math.max returns the largest value, we recursively run the both children and whichever height is larger
  // we will go down that path and run it recursively
  return 1 + Math.max(findHeight(t.left), findHeight(t.right));
}


module.exports = { findHeight };
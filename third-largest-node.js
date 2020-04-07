// 7. 3rd largest node
// Write an algorithm to find the 3rd largest node in a binary search tree.
// INPUT: tree - nodes of a Binary Search Tree
// OUTPUT: 5  - if there are nodes with keys: 1 2 4 5 8 9, it would return 5 (the 3rd largest)

// if we get the node ALL the way to the RIGHT, that has to be the largest node
// the PARENT of the largest node (on the far right) has to be the 2nd largest node
// in the general case, the 3rd largest has to be - relation to the LARGEST node 
//     either the left child of the parent of LARGEST or the parent.parent of LARGEST (by definition)

// if ROOT is the largest, then the 

// We have the logic of it, but we need to figure out how to loop through it.
/**
 * 
 * @param {*} tree node of our tree
 * @param {*} num1 largest number
 * @param {*} num2 2nd largets number
 * @param {*} num3 3rd largest
 */
function thirdLargest(tree,num1=null, num2=null, num3=null){
  if(!tree){
    return null;
  }
  // base case
  if(tree.parent === null && tree.left !== null && tree.right !== null) {

  }

  // if this is the biggest number you've seen, make it the biggest number and rotate the values
  // to keep track of the 2nd and 3rd largest nodes.
  if(tree.key > num1) {
    num3 = num2;   // 4 -> 5
    num2 = num1;   // 5 -> 10
    num1 = tree.key; // 10 ->  15
  }
  if(thirdLargest(tree.left, num1, num2, num3) || thirdLargest(tree.left, num1, num2, num3)){
    
  }

  return num3;
}

module.exports = { thirdLargest };
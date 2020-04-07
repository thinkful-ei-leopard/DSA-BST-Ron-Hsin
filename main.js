const BinarySearchTree = require('./BST');
const {findHeight} = require('./height-of-BST');

function createBST() {
  let bst = new BinarySearchTree();
  bst.insert(3, 3);
  bst.insert(1, 1);
  bst.insert(4, 4);
  bst.insert(6, 6);
  bst.insert(9, 9);
  bst.insert(2, 2);
  bst.insert(5, 5);
  bst.insert(7, 7);
  bst.insert(17, 17);
  bst.insert(27, 27);
  bst.insert(37, 37);
  bst.insert(47, 47);
  return bst;
}

//console.log(createBST());
  
function createBST2() {
  let bst = new BinarySearchTree();
  bst.insert('E', 'E');
  bst.insert('A', 'A');
  bst.insert('S', 'S');
  bst.insert('Y', 'Y');
  bst.insert('Q', 'Q');
  bst.insert('U', 'U');
  bst.insert('E', 'E');
  bst.insert('S', 'S');
  bst.insert('T', 'T');
  bst.insert('I', 'I');
  bst.insert('O', 'O');
  bst.insert('N', 'N');
  
  return bst;
}
  
//console.log(createBST2());

console.log(findHeight(createBST()));

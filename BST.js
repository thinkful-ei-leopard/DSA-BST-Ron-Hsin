class BinarySearchTree{
  /**
   * 
   * @param {*} key whether its an empty Binary Search Tree
   * @param {*} value the value inside of the node
   * @param {*} parent points to the parent node (if it has one - i.e. not Root)
   */
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;  // pointer to left child
    this.right = null; // pointer to right child
  }

  insert(key, value){
    // If the tree is empty then this key being inserted is the root node of the tree
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    /* If the tree already exists, then start at the root, 
        and compare it to the key you want to insert.
        If the new key is less than the node's key 
        then the new node needs to live in the left-hand branch */
    else if(key < this.key){
    /* If the existing node does not have a left child, 
        meaning that if the `left` pointer is empty, 
        then we can just instantiate and insert the new node 
        as the left child of that node, passing `this` as the parent */
      if(this.left === null){
        this.left = new BinarySearchTree(key, value, this);
      }
      /* If the node has an existing left child, 
        then we recursively call the `insert` method 
        so the node is added further down the tree */
      else{
        this.left.insert(key, value);
      }

    }
    /* Similarly, if the new key is greater than the node's key 
    then you do the same thing, but on the right-hand side */
    else{
      if(this.right === null){
        this.right =new BinarySearchTree(key, value, this);
      }
      else{
        this.this.right.insert(key, value);
      }
    }
  }

  find(key){
    // If the item is found at the root then return that value
    if (this.key === key) {
      return this.value;
    }
    /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }

    else if(key > this.key && this.right) {
      return this.right.find(key);
    } 

    else {
      throw new Error('Key error');
    }
  }
}

function createBST() {
  let bst = new BinarySearchTree();
  bst.insert(89, 89);
  bst.insert(76, 76);
  bst.insert(39, 39);
  return bst;
}


console.log(createBST());
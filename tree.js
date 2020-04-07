// 4. What does this program do?
// Without running this code in your code editor, explain what the following program does. 
// Show with an example the result of executing this program. What is the runtime of this algorithm?
// RUNTIME: Exponential Time. O(2^n)

function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// What does it do?
// Adds the values of the BST together, if its a number it sums all the numbers if its string its a concatentated string.
//     3           'M'
//   /   \        /   \
//  2     5     'D'   'X'  
// Return 10     return 'DMX'
// Actual result: Worked for the numbers, but for the letters it had '0' around each character, so instead of AE it was 0A0E0 

//        10       0
//       /  \
//      5    15
//     / \   / \
//    3   7 12   19
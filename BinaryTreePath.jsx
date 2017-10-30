/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function() {
    this.root = null;
    this.left= null;
    this.right = null;
}
binaryTreePaths.prototype.add = (data) => {
      var node = new Node(data);
      if(this.root === null){
        this.root = node;
      }
      var current = this.root;
      while(true){
        if(current.data <= data){
          if(current.left){
          current = current.left;
          }
          else{
            current.left = node;
            break;
          }
        }
        else{
          if(current.right){
          current = current.right;
          }
          else{
            current.right = node;
            break;
          }
        }
      }
    }


var Node = (data, left=null,right=null) => {
  this.data = data;
  this.left = left;
  this.right = right;
}


var b = new binaryTreePaths();
b.add(3);
b.root;

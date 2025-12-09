/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0
    function traverse(curr,maxLastNode){
        if(curr.val >= maxLastNode){
            count=count+1
        }
        let maxNode = Math.max(maxLastNode,curr.val)
       curr.left && traverse(curr.left,maxNode)
       curr.right && traverse(curr.right,maxNode)
    }

    traverse(root,-Infinity)
    return count
};
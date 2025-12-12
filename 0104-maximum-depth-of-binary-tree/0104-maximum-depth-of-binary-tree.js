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
var maxDepth = function(root) {
    let maxDepth = 0
    if(!root) return 0
    function traverse(curr,level){
        maxDepth = Math.max(maxDepth,level)
        curr.left && traverse(curr.left,level+1)
        curr.right && traverse(curr.right,level+1)
    }

    traverse(root,1)
    return maxDepth
};
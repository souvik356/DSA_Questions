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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let result = false
    function traverse(curr,sum){
        let newSum = sum + curr.val
        if(!curr.left && !curr.right){
            if(newSum == targetSum){
            result = result || true
            }
        }
        curr.left && traverse(curr.left,newSum)
        curr.right && traverse(curr.right,newSum)
    }
    traverse(root,0)
    return result
};
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(!root) return true
    let ans = true
    function calculateHeight(curr){
        if(!curr) return 0
        let leftTree = calculateHeight(curr.left)
        let rightTree = calculateHeight(curr.right)
        if(Math.abs(leftTree-rightTree) > 1){
            ans = ans && false
        }
        return 1 + Math.max(leftTree,rightTree)
    }
    calculateHeight(root)
    return ans
};
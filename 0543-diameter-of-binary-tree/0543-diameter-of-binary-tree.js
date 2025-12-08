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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0
    function calculateHeight(curr){
        if(!curr) return 0
        let leftTree = calculateHeight(curr.left)
        let rightTree = calculateHeight(curr.right)
        let newDiameter = leftTree + rightTree
        maxDiameter = Math.max(maxDiameter,newDiameter)
        return 1 + Math.max(leftTree,rightTree)
    }
    calculateHeight(root)
    return maxDiameter
};
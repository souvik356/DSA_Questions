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
    let maxDiameter = -Infinity
    function findHeight(curr){
        if(!curr) return 0
        let leftTree = findHeight(curr.left)
        let rightTree = findHeight(curr.right)
        let diameter = leftTree + rightTree
        maxDiameter = Math.max(maxDiameter,diameter)
        return 1 + Math.max(leftTree,rightTree)
    }
    findHeight(root)
    return maxDiameter
};
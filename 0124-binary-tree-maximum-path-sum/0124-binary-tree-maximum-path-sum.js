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
var maxPathSum = function(root) {
    let ans = -Infinity

    function traversal(curr){
        if(!curr) return 0

        let leftTree = Math.max(0,traversal(curr.left))
        let rightTree = Math.max(0,traversal(curr.right))
        currMax = curr.val + leftTree + rightTree
        ans = Math.max(ans,currMax)

        return curr.val + Math.max(leftTree,rightTree)
    }
    traversal(root)
    return ans
};
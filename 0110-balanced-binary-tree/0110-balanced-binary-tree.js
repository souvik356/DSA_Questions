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
    let ans = true
    function traverse(curr){
        if(!curr) return 0
        const leftTree = traverse(curr.left)
        const rightTree = traverse(curr.right)

        let result = Math.abs(leftTree - rightTree)
        if(result > 1){
            ans = false
        }

        return 1 + Math.max(leftTree,rightTree)
    }
    traverse(root)
    return ans
};
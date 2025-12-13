/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    function traversal(curr1,curr2){
        if(!curr1 && !curr2) return true
        if(!curr1 || !curr2) return false
        if(curr1.val !== curr2.val) return false

        return traversal(curr1.left,curr2.left) && traversal(curr1.right,curr2.right)
    }
    let ans = traversal(p,q)
    return ans
};
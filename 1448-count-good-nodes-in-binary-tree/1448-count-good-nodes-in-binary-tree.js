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
    function traverse(curr,value){
        if(curr.val >= value){
            count += 1
        }
        let newVal = Math.max(curr.val,value)
        curr.left && traverse(curr.left,newVal)
        curr.right && traverse(curr.right,newVal)
    }

    traverse(root,-Infinity)
    return count
};
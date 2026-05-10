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

    // top-down approach

    // let maxDepth = 0
    // if(!root) return maxDepth
    // function traverse(curr,depth){
    //     maxDepth = Math.max(maxDepth,depth)
    //     curr.left && traverse(curr.left,depth+1)
    //     curr.right && traverse(curr.right,depth+1)
    // }
    // traverse(root,1)
    // return maxDepth


    // bottom-down approach
    if(!root) return 0
    let leftTree = maxDepth(root.left)
    let rightTree = maxDepth(root.right)

    return 1 + Math.max(leftTree,rightTree)
};
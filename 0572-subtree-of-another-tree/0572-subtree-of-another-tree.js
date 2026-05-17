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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let mainTree = serialisation(root)
    let subTree = serialisation(subRoot)
    // console.log(mainTree)
    // console.log(subTree)
    return mainTree.includes(subTree)
};

function serialisation(root){
    let ans=''
    function traverse(curr){
    if(!curr){
        ans = ans + '#'
        return
    }
    ans = ans +'-'+curr.val
    traverse(curr.left)
    traverse(curr.right)
    }
    traverse(root)
    return ans
}
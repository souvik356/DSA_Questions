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
    let rootTree = serialisation(root)
    let subRootTree = serialisation(subRoot)
    console.log(rootTree)
    console.log(subRootTree)
    return rootTree.includes(subRootTree)
};

function serialisation (root) {
    let str = ""
    function traverse(curr){
        if(!curr){
        str += "#-"
        return
        }

        str = str + '-' + curr.val 
         traverse(curr.left)
         traverse(curr.right)
    }
    traverse(root)
    return str
}
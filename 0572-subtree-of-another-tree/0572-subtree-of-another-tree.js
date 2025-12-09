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
    let rootSerialisation = serialisation(root)
    let subRootSerialisation = serialisation(subRoot)

    console.log(rootSerialisation)
    console.log(subRootSerialisation)

    let ans = rootSerialisation.includes(subRootSerialisation)
    return ans
};

function serialisation(root){
    let str = ""
    let traverse = (curr)=>{
        if(!curr) {
        str += "-#"
        return
    }
    str = str + "-" + curr.val
    traverse(curr.left)
    traverse(curr.right)
    }
    traverse(root)
    return str
}
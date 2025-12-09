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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans = []
    if(!root) return ans
    let queue = [root]
    while(queue.length){
        // let levelArr=[]
        let len = queue.length
        for(let i=0;i<len;i++){
        let curr = queue.shift()
           i == 0 && ans.push(curr.val)
           curr.right && queue.push(curr.right)
           curr.left && queue.push(curr.left)
        }
    }
    return ans
};
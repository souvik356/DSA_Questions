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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = []
    if(!root) return ans
    let queue = [root]
    while(queue.length){
        let levelArr = []
        let len = queue.length
        for(let i=0;i<len;i++){
            let curr = queue.shift()
            levelArr.push(curr.val)
             curr.left && queue.push(curr.left)
             curr.right && queue.push(curr.right)
        }
        ans.push(levelArr)
    }
    return ans
};
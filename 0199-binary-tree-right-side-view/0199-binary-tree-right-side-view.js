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
    let ans=[]
    if(!root) return ans
    let queue = [root]
    while(queue.length){
        let len = queue.length
        for(let i=0;i<len;i++){
        let element = queue.shift()
           if(i==0){
            ans.push(element.val)
           }

           element.right && queue.push(element.right) 
           element.left && queue.push(element.left) 
        }
    }
    return ans
};
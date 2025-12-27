/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let ans = []
    let curr = head
    while(curr){
        ans.push(curr.val)
        curr = curr.next
    }

    for(let i=0;i<Math.floor(ans.length/2);i++){
        if(ans[i] !== ans[(ans.length)-i-1]){
            return false
        }
    }

    return true
};
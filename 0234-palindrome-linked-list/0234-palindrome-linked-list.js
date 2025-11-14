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
    if(!head.next) return true
    let curr = head
    let arr = []
    let length = 0
    while(curr){
        arr.push(curr.val)
        length += 1
        curr = curr.next
    }
    // console.log(arr)
    for(let i=0;i<length;i++){
        if(arr[i] !== arr[length-i-1]){
            return false
        }
    }
    return true
};
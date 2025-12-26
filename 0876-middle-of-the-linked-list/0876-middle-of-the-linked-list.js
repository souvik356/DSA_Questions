/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let curr = head
    let len = 0
    while(curr){
        len += 1
        curr = curr.next
    }
    let curr1 = head
    for(let i=0;i<Math.floor(len/2);i++){
        curr1 = curr1.next
    }
    return curr1
};
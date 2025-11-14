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
var reverseList = function(head) {
    if(!head || !head.next) return head
    let preve = null
    let curr = head

    while(curr){
        let temp = curr.next
        curr.next = preve
        preve = curr
        curr = temp
    }
    return preve
};
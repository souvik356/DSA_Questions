/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head
    let f = head
    let s = head
    let length = 0
    let curr = head

    while(curr){
        length += 1
        curr = curr.next
    }

    k = k % length

    for(let i=0;i<k;i++){
        s = s.next
    }

    while(s.next){
        f = f.next
        s = s.next
    }
    s.next = head
    let newHead = f.next
    f.next = null

    return newHead
};
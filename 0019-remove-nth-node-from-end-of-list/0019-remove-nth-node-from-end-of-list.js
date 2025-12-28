/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinelNode = new ListNode()
    sentinelNode.next = head
    let f = sentinelNode
    let s = sentinelNode

    for(let i=0;i<n;i++){
        s=s.next
    }

    while(s.next){
        f=f.next
        s=s.next
    }

    f.next=f.next.next

    return sentinelNode.next
};
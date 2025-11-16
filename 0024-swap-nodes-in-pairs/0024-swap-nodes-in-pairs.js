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
var swapPairs = function(head) {
    if(!head || !head.next) return head
    let dummyNode = new ListNode()
    dummyNode.next = head
    let preve = dummyNode
    let curr = head
    n = curr.next
    while(curr && curr.next){
        preve.next = n
        curr.next = n.next
        n.next = curr
        preve = curr
        curr = preve.next
        n = curr && curr.next
    }
    return dummyNode.next
};
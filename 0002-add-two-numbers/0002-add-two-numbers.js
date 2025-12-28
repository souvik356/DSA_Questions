/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sentNode = new ListNode()
    let carry=0
    let sentNodeStart = sentNode
    while(l1 || l2 || carry){
        let sum = (l1 ? l1.val:0) + (l2 ? l2.val:0) + carry
        carry = Math.floor(sum/10)
        let node = new ListNode(sum%10)
        sentNode.next=node
        sentNode=sentNode.next
        if(l1) l1=l1.next
        if(l2) l2=l2.next
    }
    return sentNodeStart.next
};
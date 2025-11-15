/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curr1 = headA
    let curr2 = headB
    let set = new Set()
    while(curr1){
        if(!set.has(curr1)){
            set.add(curr1)
        }
        curr1 = curr1.next
    }
    while(curr2){
        if(set.has(curr2)){
            return curr2
        }
        curr2 = curr2.next
    }
    return null
};
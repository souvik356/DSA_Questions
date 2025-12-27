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
    let currA=headA
    let currB=headB
    let lengthA=0
    let lengthB=0
    while(currA){
        lengthA=lengthA+1
        currA=currA.next
    }
    while(currB){
        lengthB=lengthB+1
        currB=currB.next
    }
    // first as small second as large
    if(lengthA>lengthB){
        let temp=headA
        headA=headB
        headB=temp
    }

    for(let i=0;i<Math.abs(lengthA-lengthB);i++){
        headB=headB.next
    }
    currA=headA
    currB=headB

    while(currA && currB){
        if(currA=== currB){
            return currA
        }
        currA=currA.next
        currB=currB.next
    }
    return null
};
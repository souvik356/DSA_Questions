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
    let currA = headA
    let currB = headB
    let lengthA = 0
    let lengthB = 0

    while(currA){
        lengthA+=1
        currA=currA.next
    }
    while(currB){
        lengthB+=1
        currB=currB.next
    }
    let curr1=headA
    let curr2=headB
    if(lengthB>lengthA){
        for(let i=0;i<lengthB-lengthA;i++){
            curr2=curr2.next
        }
        while(curr1 && curr2){
            if(curr1 == curr2){
            return curr1
        }
        else{
            curr1=curr1.next
            curr2=curr2.next
        }
        }
    }
    else{
        for(let i=0;i<lengthA-lengthB;i++){
            curr1=curr1.next
        }
        while(curr1 && curr2){
        if(curr1 == curr2){
            return curr1
        }
        else{
            curr1=curr1.next
            curr2=curr2.next
        }
        }
    }
};
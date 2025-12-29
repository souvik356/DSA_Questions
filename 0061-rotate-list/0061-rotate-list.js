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
    let len = 0
    let curr = head
    while(curr){
        len+=1
        curr=curr.next
    }
    k=k%len
    if(k==0) return head
    let f=head
    let s=head
    for(let i=0;i<k;i++){
        s=s.next
    }
    while(s && s.next){
        f=f.next
        s=s.next
    }
    let start = f.next
    s.next = head
    f.next = null
    return start
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let curr = head
    if(!curr.next) return true
    let f = head
    let s = head
    while(s && s.next){
        f = f.next
        s = s.next.next
    }
    let preve = null
    let curr1 = f
    while(curr1){
        let temp = curr1.next
        curr1.next = preve
        preve = curr1
        curr1 = temp
    }

    while(preve){
        if(preve.val !== curr.val){
            return false
        }
        preve = preve.next
        curr = curr.next
    }

    return true
};
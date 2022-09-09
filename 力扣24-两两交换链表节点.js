//采用虚拟头节点的方式
var swapPairs = function (head) {
    let ret = new ListNode(0, head)
    let cur = ret
    //循环终止条件，注意书写顺序
    while (cur.next && cur.next.next) {
        let temp = cur.next
        let temp1 = cur.next.next.next
        cur.next = cur.next.next
        cur.next.next = temp
        cur.next.next.next = temp1
        cur = cur.next.next
    }
    return ret.next
};
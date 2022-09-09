var removeNthFromEnd = function(head, n) {
    let ret = new ListNode(0, head)
    let slow = ret
    let fast = ret
    //快指针走n步
    while(n--) fast = fast.next
    //快慢指针同步移动，直到快指针指向链表的最后一个节点
    //此时慢指针指向链表的倒数第k + 1个节点
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    //执行删除节点操作
    slow.next = slow.next.next
    return ret.next
};
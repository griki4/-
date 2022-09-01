//删除链表中的元素是通过操作指针的方式进行的，因此必须要知道需要删除的元素的上一个节点
//有了这两个要素才能进行节点删除操作
var removeElements = function(head, val) {
    //需要判断删除的节点是否是头结点
    while (head !== null && head.val === val) {
        head = head.next
    }

    let cur = head
    while (cur !== null && cur.next !== null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
};


var removeElements = function (head, val) {
    //创建一个虚拟头结点
    let ret = new ListNode(0, head)
    let cur = ret
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return ret.next
}
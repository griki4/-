/*1.自顶向下的归并排序
*   1.1寻找链表的中间结点，将链表拆分为两个子链表
*   1.2分别对两个子链表进行排序，问题就变成了一个递归的问题
*   1.3合并排序后的子链表（双指针方法）*/
var sortList = function(head) {
    if (!head || !head.next) return head
    //快慢双指针拆分链表
    let slow = head, fast = head
    let perSlow = null
    while (fast && fast.next) {
        perSlow = slow
        slow = slow.next
        fast = fast.next.next
    }
    perSlow.next = null
    //继续拆分链表直到链表节点个数小于等于1
    let left = sortList(head)
    let right = sortList(slow)
    return merge(left, right)
};

function merge(l1, l2) {
    let dummy = new ListNode(0)
    let prev = dummy
    //双指针方法合并两个链表
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1
            l1 = l1.next
        }else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    //考虑一个链表指针到底的情况
    if (l1) prev.next = l1
    if (l2) prev.next = l2
    return dummy.next
}

/*2.自底向上的归并排序
*   2.1直接将链表拆分为若干个长度为1的子节点
*   2.2逐层向上开始合并*/

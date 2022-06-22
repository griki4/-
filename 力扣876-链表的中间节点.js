/*快慢双指针法
快指针每次走两个节点，慢指针每次走一个节点。快指针走到链表最后一个节点的时候慢指针就必定是在链表的中间节点。
假设一个链表有n个节点
    1.n为奇数，则快指针走了(n-1)/2步。慢指针位于1+(n-1)/2也就是(n+1)/2位置处也就是中间节点
    2.n为偶数，则快指针走了n/2步。慢指针位于(n/2)位置，正好满足题目要求的两个中间节点时返回后面一个的要求
    */
var middleNode = function(head) {
    let fast = slow = head
    while (fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};
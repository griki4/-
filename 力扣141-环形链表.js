//1.哈希表
//每遍历一个节点，都会查看哈希表中是否有对应的元素
//需要遍历一次链表并且存储链表元素，时间和空间复杂度都是O(n)
const hasCycle = function(head) {
    let map = new Map()
    while (head) {
        if (map.has(head)) return true
        map.set(head, true)
        head = head.next
    }
    return false
};

//2.快慢双指针
//两个指针，快的指针每次移动两格，慢的移动一格。比较两个指针的值。
//就像在环形跑道上跑步，跑得快的人一定会领先跑的慢的人一圈。
var hasCycle = function(head) {
    let fast = head
    let slow = head
    while (fast) {
        if (fast.next == null) return false
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) return true
    }
    return false
};
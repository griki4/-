var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while(true) {
        if(fast === null || fast.next === null) return null;
        slow = slow.next;
        fast = fast.next.next;
        //找到环之后退出当前循环
        if(fast === slow) break;
    }
    fast = head;
    while(fast !== slow) {//慢指针和这个指针会相遇，并且相遇点是入环节点
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};
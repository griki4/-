//1.双指针法
var reverseList = function (head) {
    //没有节点或者只有一个节点的时候，直接返回头节点即可
    if (!head || !head.next) return head
    //pre指向头节点之前的一个节点，初始为null
    //cur初始时指向头节点
    //temp初始指向头节点之后的一个节点的元素
    let pre = null, temp = null, cur = head
    while (cur) {
        //保存cur指针之后的节点，temp并非指针而是一个临时变量。temp的存在是为了cur指针在修改next指向之后，还能够继续遍历链表
        //寻找链表的下一个节点
        temp = cur.next
        //修改链表的方向，指向前一个节点
        cur.next = pre
        //指针移动，注意应该先移动pre指针，否则无法找到pre指针应该移动到的下一个节点
        //cur指针的下一个节点使用temp保存了但是pre没有
        pre = cur
        cur = temp
    }
    return pre
};


//2.递归方法
/*将链表拆分为头节点和剩余节点两个部分，之后剩余的节又可以进行这样的拆分动作，如此拆分到只剩一个节点以及null
* 问题简化为反转只有两个节点的链表*/
var reverseList = function (head) {
    if (!head || !head.next) return head
    //链表的拆分
    const p = reverseList(head.next)
    //设置递归的终止条件以及在递归的终点需要执行的操作
    //头节点下一个节点的下一个节点是头节点
    head.next.next = head
    //头节点的下一个节点是null
    head.next = null
    return p
}
//遍历链表存储元素，利用哈希表
var getIntersectionNode = function(headA, headB) {
    const visited = new Set()
    let temp = headA
    while (temp !== null) {
        visited.add(temp)
        temp = temp.next
    }

    temp = headB
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp
        }
        temp = temp.next
    }

    return null
};


/*双指针解法
* 1.两个指针分别指向链表头部，遍历完一次各自的链表后对调指针
* 2.接着遍历链表
*   此时若相交则两指针必定指向相同的结点，不相交则两指针遍历完成后必定都是null
*
* 由于不需要存储遍历的链表元素，所以空间复杂度为O(1)*/
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null
    }

    let pA = headA, pB = headB
    while (pA !== pB){
        pA = pA === null ? headB : pA.next
        pB = pB === null ? headB : pB.next
    }
    return pA
};
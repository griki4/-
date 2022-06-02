//1.顺序查找，首先获得链表的长度。
var getKthFromEnd = function(head, k) {
    let node = head, count = 0
    while(node){
        node = node.next
        count++
    }
    node = head
    for(let i = 0; i < count - k; i++){
        node = node.next
    }
    return node
};


//2.双指针
//两个指针，一个先走k步。然后两个指针，先走的指针指向null的时候，后走的指针就到达了倒数第k个节点
var getKthFromEnd = function(head, k) {
    let front = head, behind = head, i = 0
    while (front) {
        front = front.next
        if (i >= k) {
            behind = behind.next
        }
        i++
    }
    return behind
};

//模拟队列实现层序遍历
var levelOrder = function(root) {
    let queue = [], res = [], size = 0
    if(root) queue.push(root)
    //队列不为空则程序需要一直执行下去
    while(queue.length){
        //size记录当前层的节点个数
        size = queue.length
        let record = []
        //保证只弹出当前层的节点
        while(size--){
            let node = queue.shift()
            record.push(node.val)
            //弹出一个节点后将它的左右子节点加入队列
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res.push(record)
        record = []
    }
    return res
};

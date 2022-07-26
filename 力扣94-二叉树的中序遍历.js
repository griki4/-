//1.递归方法实现中序遍历
//构建辅助函数inorder访问每个节点并对节点值进行操作
var inorderTraversal = function (root) {
    const res = []
    const inorder = (root) => {
        if (!root) {
            return
        } else {
            inorder(root.left)
            res.push(root.val)
            inorder(root.right)
        }
    }
    inorder(root)
    return res
};

//2.迭代方法
/*
迭代方法会显式的维护一个栈，从根节点开始，每遍历到一个节点就将其值加入一个临时栈、
当到达叶节点并且临时栈中没有元素的时候为终止条件，依次取出栈中的元素放入结果

迭代和递归本质上是一样的，空间和时间复杂度都是O(n)
*/

var inorderTraversal = function (root) {
    const res = []
    const stk = []
    //还未到达叶节点继续遍历
    //stk中还有元素说明上层的节点还未遍历到
    while (root || stk.length) {
        //未到达叶节点之前一直将遍历的节点加入临时栈
        while (root) {
            stk.push(root)
            root = root.left
        }
        root = stk.pop()
        res.push(root.val)
        root = root.right
    }
    return res
};


/*3.Morris中序遍历，可以将空间复杂度优化至O(1)*/




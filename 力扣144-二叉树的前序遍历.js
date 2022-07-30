//1.前序遍历的递归方法
//注意前序遍历的遍历顺序，前序遍历会首先访问节点本身，然后去访问节点的左侧子节点，最后是节点的右侧子节点

var preorderTraversal = function (root) {
    let res = []
    //定义一个递归调用的函数用于实现前序遍历
    let preTraversal = (root) => {
        //节点不存在即为递归的终止条件
        if (!root) {
            return
        } else {
            //首先将访问到的节点的值加入res
            res.push(root.val)
            //然后先访问左侧子节点，然后访问右侧子节点
            preTraversal(root.left)
            preTraversal(root.right)
        }
    }
    preTraversal(root)
    return res
};

/*2.前序遍历的迭代方法
核心思想依旧是维护栈
    中序遍历中，我们使用迭代是访问到一个节点，将其值加入栈，然后访问其左侧子节点并重复
    当无左侧子节点的时候，取出栈中的元素，放入答案栈，然后访问右子节点压入栈然后重复
    即维护栈中进栈顺序是中 左 然后左和中依次出栈然后右进栈，最后答案中的效果就是左 中 右

前序遍历的顺序是中 左 右
    首先还是将访问的节点值放入辅助栈
    然后注意，是先访问右侧子节点并压入栈，然后是左子节点。
    这样才能达到答案中的顺序是 中 左 右*/

var preorderTraversal = function (root, res = []) {
    if (!root) return res
    let stack = []
    stack.push(root)
    let cur = null
    while (stack.length) {
        cur = stack.pop()
        res.push(cur.val)
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)
    }
    return res
};

//3.Morris前序遍历

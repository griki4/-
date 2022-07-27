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


/*3.Morris中序遍历，可以将空间复杂度优化至O(1)
* 思路
*  访问一个节点x，观察其是否有左侧子节点
*       1.无左子节点，直接将x的值加入答案并且访问其右子节点 x = x.right
*       2.有左子节点，找到x的左子树的最右侧节点，记为pre。
*           2.1 pre无右子节点，将其子节点记为x pre.right = x 并且x = x.left
*           2.2 pre有右子节点，作为左子树的最右侧节点本不应该有右子节点，此时说明它的右子节点是我们指定的。
*               此时说明左子树已经遍历完成，令pre.right = null 将x的值加入答案并且访问x的右子节点 x = x.right*/
var inorderTraversal = function (root) {
    const res = [];
    let predecessor = null;

    while (root) {
        //有左子节点，进入上述的第二种情况，寻找pre
        if (root.left) {
            //寻找某一个节点的左子树的最右侧节点
            // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
            predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }

            // 让 predecessor 的右指针指向 root，继续遍历左子树
            if (!predecessor.right) {
                predecessor.right = root;
                root = root.left;
            }
            // 说明左子树已经访问完了，我们需要断开链接
            else {
                res.push(root.val);
                predecessor.right = null;
                root = root.right;
            }
        }
        // 如果没有左孩子，则直接访问右孩子
        else {
            res.push(root.val);
            root = root.right;
        }
    }

    return res;
};





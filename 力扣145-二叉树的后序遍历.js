//1.递归方法
/*后序遍历就是优先遍历二叉树的子节点，然后再访问节点本身
* 跟中序和前序遍历一样，只需要适当修改代码的顺序，就能用递归方法实现后序遍历*/
var postorderTraversal = function (root) {
    let res = []
    let postTraversal = (root) => {
        if (!root) return
        postTraversal(root.left)
        postTraversal(root.right)
        res.push(root.val)
    }
    return res
};
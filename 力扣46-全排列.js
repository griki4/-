//本题思路：回溯算法

//每一个元素都应该在所有的索引位置上出现
const permute = function(nums) {
    const res = []
    const used = {}
    function backtracking(path) {
        if (path.length === nums.length) {
            res.push(path.slice())
            return
        }//递归终止条件。数组中的元素和原数组一样多。

        for (const num of nums) {
            if (used[num]) {
                continue
            }//如果当前元素被使用了，则跳过他
            path.push(num)//没被使用，则加入数组
            used[num] = true//标记已经使用过的元素
            backtracking(path)//启动递归函数
            path.pop()
            used[num] = false//上一层递归返回后，删除最后元素，并且取消对它的标记
        }
    }
    backtracking([])//最开始启动递归的地方
    return res
};
//本体的最优解是动态规划，难点在于如何寻找到状态转移方程
//反向的思维，以连续子数组的结尾为标识而不是以连续子数组的开头为标识
var maxSubArray = function(nums) {
    //pre表示以遍历到的前一个数组元素结尾的最大连续子数组和
    //maxAns每次遍历都会比较，只保留最大的pre
    let pre = 0, maxAns = nums[0]
    nums.forEach((x) => {
        //
        pre = Math.max(pre + x, x)
        maxAns = Math.max(maxAns, pre)
    })
    return maxAns
};

//滚动变量
var maxSubArray = function(nums) {
    //这里的sum和上一个解法中的pre是同样的效果，它代表以前一个元素结尾的最大子序和
    let ans = nums[0], sum = 0
    for (const num of nums) {
        if (sum > 0) {
            sum += num
        }else {
            sum = num
        }
        ans = Math.max(ans. sum)
    }
    return ans
};
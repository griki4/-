//1.动态规划的思想
const maxSubArray = function(nums) {
    //定义两个变量，记录f(i-1)的值以及最大的f(i)的值
    let pre = 0, max = nums[0]
    //pre表示f(i-1)和nums[i]中的最大值
    //max则是记录每一个以i结尾的数组的pre值
    nums.forEach(x => {
        pre = Math.max(pre + x, x)
        max = Math.max(max, pre)
    })
    return max
};
//时间复杂度为n，空间复杂度为1

//2.贪心算法
var maxSubArray = function (nums) {
    let ans = nums[0]
    let sum = 0
    for (const num of nums) {
       if (sum > 0) {
           sum += num
       }else {
           sum = num
       }
       ans = Math.max(ans, sum)
    }
    return ans
}
//滑动窗口解法（可以理解为变种双指针）
var minSubArrayLen = function(target, nums) {
    let i = 0//定义起始位置指针
    let sum = 0//记录子数组和的变量
    let result = Infinity//定义一个无穷大变量，用于记录并更新满足条件的长度最小子数组的长度
    for (let j = 0; j < nums.length; j++){//定义终止位置指针，一定是先移动终止位置指针
        sum += nums[j]//不断将遍历到的元素纳入子数组
        while (sum >= target) {//满足条件，此时终止位置指针暂停移动，尝试移动起始位置指针
            result = Math.min(result, j - i + 1)
            sum -= nums[i]
            i++//移动起始位置指针并进入下一次循环
        }
    }
    return result === Infinity ? 0 : result //没有满足条件的子数组时返回0
};
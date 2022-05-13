//暴力解法
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
};

//空间换时间，hashMap解法
//每次遍历到一个数据就将它保存，并且求出目标值和它的差值
//寻找hashMap中是否有已经这个差值
//有则返回，无则继续遍历存储
var twoSum = function(nums, target) {
    //创建一个hashMap，将遍历到的数据都存进去
    let hashMap = {}
    for (let i = 0; i < nums.length; i++) {
        let firstNum = nums[i]
        let secondNum = target - firstNum
        let secondNumindex = hashMap[secondNum]
        if (secondNumindex !== undefined) {
            return [secondNumindex,i]
        }else {
            hashMap[firstNum] = i
        }
    }
};
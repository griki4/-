//暴力解法，使用库函数直接解决。一般能用库函数直接解决的我们就不要使用库函数了。
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            //遇到很val相同的数组元素就移除，同时将后一个元素向前移动一位
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};


//双指针解法，事件复杂度优化为O(n)
var removeElement = function (nums, val) {
    //定义双指针，二者最开始都处于数组的头部
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {//快指针寻找符合要求的元素
        if (nums[fast] !== val) {//寻找到满足要求的元素
            nums[slow] = nums[fast]//将满足要求的元素交给慢指针去更新数组
            slow++
        }
    }
    return slow
}

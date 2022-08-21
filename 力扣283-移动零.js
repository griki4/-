// 将所有的0移动到数组的末尾


//1.非零元素覆盖，最后将数在数组末尾添加上对应数量的零
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums.push(0)
    }
    return nums
};


//2.双指针，右指针指向非零元素的时候直接交换两个指针所指的元素
/*  快指针去寻找不为0的元素，将它们的指交给慢指针同时将自己所指元素变成0，
    慢指针从数组开头开始，将所有不为0的元素依次添加到数组中
    最后的效果就是数组前面都是非零元素，后面则都是0*/
var moveZeroes = function(nums) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i],nums[j]] = [nums[j], nums[i]]
            j++
        }
    }
    return nums
}
